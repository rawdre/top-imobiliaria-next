"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  AlertCircle,
  Filter,
  Home,
  KeyRound,
  Landmark,
  Loader2,
  MapPin,
  Search,
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { supabase, type Property } from "@/lib/supabase";
import { PropertyCard } from "@/components/PropertiesSection";

type ListingFilter = "todos" | "aluguel" | "venda";
type SortMode = "destaques" | "recentes";
type SearchParams = ReturnType<typeof useSearchParams>;

const PAGE_SIZE = 9;
const LISTING_FILTERS: ListingFilter[] = ["todos", "aluguel", "venda"];
const SORT_MODES: SortMode[] = ["destaques", "recentes"];

function getListingFilter(searchParams: URLSearchParams | SearchParams): ListingFilter {
  const value = searchParams.get("tipo");
  return LISTING_FILTERS.includes(value as ListingFilter) ? (value as ListingFilter) : "todos";
}

function getSortMode(searchParams: URLSearchParams | SearchParams): SortMode {
  const value = searchParams.get("ordem");
  return SORT_MODES.includes(value as SortMode) ? (value as SortMode) : "destaques";
}

function getPage(searchParams: URLSearchParams | SearchParams): number {
  const value = Number(searchParams.get("pagina"));
  return Number.isInteger(value) && value > 0 ? value : 1;
}

export default function AllPropertiesClient() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const listingFilter = getListingFilter(searchParams);
  const sortMode = getSortMode(searchParams);
  const selectedRegion = searchParams.get("regiao")?.trim() || "all";
  const page = getPage(searchParams);
  const visibleCount = page * PAGE_SIZE;

  useEffect(() => {
    async function fetchProperties() {
      try {
        setErrorMessage(null);
        const result = await supabase
          .from("properties")
          .select("*")
          .eq("is_active", true)
          .order("is_featured", { ascending: false })
          .order("created_at", { ascending: false });

        if (result.error) throw result.error;
        setProperties(result.data ?? []);
      } catch {
        setErrorMessage(
          "Não foi possível carregar os imóveis publicados agora. Tente novamente em alguns instantes.",
        );
      } finally {
        setLoading(false);
      }
    }

    fetchProperties();
  }, []);

  const updateUrlState = useCallback(
    (
      updates: Partial<{
        tipo: ListingFilter;
        ordem: SortMode;
        regiao: string;
        pagina: number;
      }>,
      options: { resetPage?: boolean } = { resetPage: true },
    ) => {
      const params = new URLSearchParams(searchParams.toString());
      const nextTipo = updates.tipo ?? listingFilter;
      const nextOrdem = updates.ordem ?? sortMode;
      const nextRegiao = updates.regiao ?? selectedRegion;
      const nextPagina = updates.pagina ?? (options.resetPage === false ? page : 1);

      if (nextTipo === "todos") params.delete("tipo");
      else params.set("tipo", nextTipo);

      if (nextOrdem === "destaques") params.delete("ordem");
      else params.set("ordem", nextOrdem);

      if (!nextRegiao || nextRegiao === "all") params.delete("regiao");
      else params.set("regiao", nextRegiao);

      if (nextPagina <= 1) params.delete("pagina");
      else params.set("pagina", String(nextPagina));

      const queryString = params.toString();
      router.replace(queryString ? `${pathname}?${queryString}` : pathname, { scroll: false });
    },
    [listingFilter, page, pathname, router, searchParams, selectedRegion, sortMode],
  );

  const regions = useMemo(() => {
    return Array.from(
      new Set(
        properties
          .map((property) => property.neighborhood)
          .filter((neighborhood): neighborhood is string => Boolean(neighborhood)),
      ),
    ).sort((left, right) => left.localeCompare(right, "pt-BR"));
  }, [properties]);

  const filteredProperties = useMemo(() => {
    const filtered = properties.filter((property) => {
      const matchesListing =
        listingFilter === "todos" || property.listing_type === listingFilter;
      const matchesRegion =
        selectedRegion === "all" || property.neighborhood === selectedRegion;
      return matchesListing && matchesRegion;
    });

    return [...filtered].sort((left, right) => {
      if (sortMode === "destaques" && left.is_featured !== right.is_featured) {
        return Number(right.is_featured) - Number(left.is_featured);
      }

      return new Date(right.created_at).getTime() - new Date(left.created_at).getTime();
    });
  }, [listingFilter, properties, selectedRegion, sortMode]);

  const visibleProperties = filteredProperties.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProperties.length;
  const hasActiveProperties = properties.length > 0;
  const hasCustomFilters =
    listingFilter !== "todos" || sortMode !== "destaques" || selectedRegion !== "all" || page > 1;

  const clearFilters = () => {
    updateUrlState({
      tipo: "todos",
      ordem: "destaques",
      regiao: "all",
      pagina: 1,
    });
  };

  return (
    <main className="all-properties-page">
      <section className="all-properties-hero">
        <div className="all-properties-inner">
          <Link href="/" className="all-properties-back">
            Voltar para a home
          </Link>
          <div className="all-properties-kicker">
            <Home size={16} /> Imóveis publicados
          </div>
          <h1>Todos os imóveis anunciados</h1>
          <p>
            Consulte apenas os imóveis ativos e publicados pela Top Imobiliária.
            A área de prédios e condomínios permanece separada para conteúdo
            institucional.
          </p>
        </div>
      </section>

      <section className="all-properties-content">
        <div className="all-properties-inner">
          <div className="all-properties-toolbar" aria-label="Filtros de imóveis">
            <div className="all-properties-tabs">
              {LISTING_FILTERS.map((value) => (
                <button
                  key={value}
                  type="button"
                  className={listingFilter === value ? "active" : ""}
                  onClick={() => updateUrlState({ tipo: value })}
                >
                  {value === "todos" ? (
                    <Filter size={15} />
                  ) : value === "aluguel" ? (
                    <KeyRound size={15} />
                  ) : (
                    <Landmark size={15} />
                  )}
                  {value === "todos" ? "Todos" : value === "aluguel" ? "Aluguel" : "Venda"}
                </button>
              ))}
            </div>

            <label>
              <span>Ordenar</span>
              <select
                value={sortMode}
                onChange={(event) => updateUrlState({ ordem: event.target.value as SortMode })}
              >
                <option value="destaques">Destaques primeiro</option>
                <option value="recentes">Mais recentes</option>
              </select>
            </label>

            <label>
              <span>Região</span>
              <select
                value={selectedRegion}
                onChange={(event) => updateUrlState({ regiao: event.target.value })}
              >
                <option value="all">Todas as regiões</option>
                {selectedRegion !== "all" && !regions.includes(selectedRegion) ? (
                  <option value={selectedRegion}>{selectedRegion}</option>
                ) : null}
                {regions.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="all-properties-summary">
            <div className="all-properties-count">
              <MapPin size={16} />
              {filteredProperties.length} imóvel{filteredProperties.length === 1 ? "" : "is"} encontrado
              {filteredProperties.length === 1 ? "" : "s"}
            </div>
            {hasCustomFilters ? (
              <button type="button" className="all-properties-clear" onClick={clearFilters}>
                Limpar filtros
              </button>
            ) : null}
          </div>

          {loading ? (
            <div className="all-properties-state">
              <Loader2 className="all-properties-spin" size={38} />
              Carregando imóveis publicados...
            </div>
          ) : errorMessage ? (
            <div className="all-properties-state">
              <AlertCircle size={38} />
              <p>{errorMessage}</p>
            </div>
          ) : filteredProperties.length === 0 ? (
            <div className="all-properties-state">
              <Search size={38} />
              <p>
                {hasActiveProperties
                  ? "Nenhum imóvel publicado encontrado com esses filtros."
                  : "Nenhum imóvel ativo publicado no momento."}
              </p>
              {hasCustomFilters ? (
                <button type="button" className="all-properties-clear" onClick={clearFilters}>
                  Limpar filtros
                </button>
              ) : null}
            </div>
          ) : (
            <>
              <motion.div layout className="all-properties-grid">
                {visibleProperties.map((property, index) => (
                  <PropertyCard key={property.id} property={property} index={index % PAGE_SIZE} />
                ))}
              </motion.div>

              {hasMore ? (
                <div className="all-properties-more">
                  <button
                    type="button"
                    onClick={() => updateUrlState({ pagina: page + 1 }, { resetPage: false })}
                  >
                    Carregar mais imóveis
                  </button>
                </div>
              ) : null}
            </>
          )}
        </div>
      </section>
    </main>
  );
}

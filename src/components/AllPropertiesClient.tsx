"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Filter, Home, KeyRound, Landmark, Loader2, MapPin, Search } from "lucide-react";
import Link from "next/link";
import { supabase, type Property } from "@/lib/supabase";
import { PropertyCard } from "@/components/PropertiesSection";

type ListingFilter = "all" | "aluguel" | "venda";
type SortMode = "featured" | "recent";

const PAGE_SIZE = 9;

export default function AllPropertiesClient() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [listingFilter, setListingFilter] = useState<ListingFilter>("all");
  const [sortMode, setSortMode] = useState<SortMode>("featured");
  const [region, setRegion] = useState("all");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  useEffect(() => {
    async function fetchProperties() {
      try {
        const result = await supabase
          .from("properties")
          .select("*")
          .eq("is_active", true)
          .order("is_featured", { ascending: false })
          .order("created_at", { ascending: false });

        if (result.error) throw result.error;
        setProperties(result.data ?? []);
      } finally {
        setLoading(false);
      }
    }

    fetchProperties();
  }, []);

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
        listingFilter === "all" || property.listing_type === listingFilter;
      const matchesRegion = region === "all" || property.neighborhood === region;
      return matchesListing && matchesRegion;
    });

    return [...filtered].sort((left, right) => {
      if (sortMode === "featured" && left.is_featured !== right.is_featured) {
        return Number(right.is_featured) - Number(left.is_featured);
      }

      return new Date(right.created_at).getTime() - new Date(left.created_at).getTime();
    });
  }, [listingFilter, properties, region, sortMode]);

  const visibleProperties = filteredProperties.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProperties.length;

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
              {(["all", "aluguel", "venda"] as const).map((value) => (
                <button
                  key={value}
                  type="button"
                  className={listingFilter === value ? "active" : ""}
                  onClick={() => {
                    setListingFilter(value);
                    setVisibleCount(PAGE_SIZE);
                  }}
                >
                  {value === "all" ? (
                    <Filter size={15} />
                  ) : value === "aluguel" ? (
                    <KeyRound size={15} />
                  ) : (
                    <Landmark size={15} />
                  )}
                  {value === "all" ? "Todos" : value === "aluguel" ? "Aluguel" : "Venda"}
                </button>
              ))}
            </div>

            <label>
              <span>Ordenar</span>
              <select
                value={sortMode}
                onChange={(event) => {
                  setSortMode(event.target.value as SortMode);
                  setVisibleCount(PAGE_SIZE);
                }}
              >
                <option value="featured">Destaques primeiro</option>
                <option value="recent">Mais recentes</option>
              </select>
            </label>

            <label>
              <span>Região</span>
              <select
                value={region}
                onChange={(event) => {
                  setRegion(event.target.value);
                  setVisibleCount(PAGE_SIZE);
                }}
              >
                <option value="all">Todas as regiões</option>
                {regions.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="all-properties-count">
            <MapPin size={16} />
            {filteredProperties.length} imóvel{filteredProperties.length === 1 ? "" : "is"} encontrado
            {filteredProperties.length === 1 ? "" : "s"}
          </div>

          {loading ? (
            <div className="all-properties-state">
              <Loader2 className="all-properties-spin" size={38} />
              Carregando imóveis publicados...
            </div>
          ) : filteredProperties.length === 0 ? (
            <div className="all-properties-state">
              <Search size={38} />
              Nenhum imóvel publicado encontrado com esses filtros.
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
                  <button type="button" onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}>
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

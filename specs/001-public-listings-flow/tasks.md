# Tasks: Public Listings Flow

**Input**: Design documents from `specs/001-public-listings-flow/`  
**Prerequisites**: `plan.md`, `spec.md`, `research.md`, `data-model.md`, `contracts/public-listings-url-state.md`

## Phase 1: Setup

**Purpose**: Confirm the existing route and source files before implementation.

- [x] T001 Inspect current `/imoveis` route in `src/app/imoveis/page.tsx`.
- [x] T002 Inspect public listing component in `src/components/AllPropertiesClient.tsx`.
- [x] T003 Inspect sitemap inclusion in `src/app/sitemap.ts`.

---

## Phase 2: Foundational

**Purpose**: Add URL-state helpers and route rendering support needed by all stories.

- [x] T004 Add query-param parsing, defaulting, and URL update helpers in `src/components/AllPropertiesClient.tsx`.
- [x] T005 Add a Suspense boundary and loading fallback in `src/app/imoveis/page.tsx` for App Router search-param usage.

---

## Phase 3: User Story 1 - Browse Published Properties (Priority: P1)

**Goal**: `/imoveis` renders active property advertisements with clear loading, empty, and error states.

**Independent Test**: Open `/imoveis` locally and confirm active listing cards or a clear non-blank state renders.

- [x] T006 [US1] Preserve active-only Supabase fetch in `src/components/AllPropertiesClient.tsx`.
- [x] T007 [US1] Add fetch-error state handling in `src/components/AllPropertiesClient.tsx`.
- [x] T008 [US1] Distinguish no active inventory from no filtered matches in `src/components/AllPropertiesClient.tsx`.

---

## Phase 4: User Story 2 - Filter and Share Listing Views (Priority: P2)

**Goal**: Listing filter, sort, and incremental page state are restorable from the URL.

**Independent Test**: Open `/imoveis?tipo=aluguel&ordem=recentes&pagina=2`, reload, and confirm controls/results remain aligned.

- [x] T009 [US2] Derive selected transaction type, sort mode, region, and page from URL params in `src/components/AllPropertiesClient.tsx`.
- [x] T010 [US2] Update URL params when visitors change transaction type, region, sort mode, or load more in `src/components/AllPropertiesClient.tsx`.
- [x] T011 [US2] Add a clear-filters action for filtered states in `src/components/AllPropertiesClient.tsx`.

---

## Phase 5: User Story 3 - Keep Listings SEO-Safe and Navigation-Safe (Priority: P3)

**Goal**: `/imoveis` remains crawlable and separate from buildings/condominiums.

**Independent Test**: Build the site and inspect generated route metadata and sitemap source.

- [x] T012 [US3] Verify `/imoveis` metadata remains present in `src/app/imoveis/page.tsx`.
- [x] T013 [US3] Verify `/imoveis` remains included in `src/app/sitemap.ts`.
- [x] T014 [US3] Confirm no implementation changes route users from all properties to buildings/condominiums.

---

## Phase 6: Polish & Verification

**Purpose**: Validate the completed feature and record evidence.

- [x] T015 Run `npm run lint`.
- [x] T016 Run `npm run build`.
- [x] T017 Run a local HTTP check for `/imoveis` and at least one filtered query URL.
- [x] T018 Record verification notes in this task file.

## Dependencies & Execution Order

1. Phase 1 must complete before editing.
2. Phase 2 blocks all user stories because URL state and Suspense support are shared.
3. User Story 1 is the MVP and must pass before URL sharing is useful.
4. User Story 2 depends on User Story 1 data and state handling.
5. User Story 3 and verification close the feature.

## Verification Notes

- `npm run lint` passed with 73 existing warnings in legacy/static handoff files and stylesheet-link warnings; no new lint errors.
- `npm run build` passed. Next.js output lists `/imoveis` as a static route and `/sitemap.xml` as a static route.
- Local built-server smoke test passed on port `3010`: `/imoveis` returned 200 and `/imoveis?tipo=aluguel&ordem=recentes&pagina=2` returned 200; both responses included `Todos os imóveis anunciados`.
- `src/app/sitemap.ts` still includes `https://www.topimobiliaria.com/imoveis`.

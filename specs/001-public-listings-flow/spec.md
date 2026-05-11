# Feature Specification: Public Listings Flow

**Feature Branch**: `001-public-listings-flow`  
**Created**: 2026-05-11  
**Status**: Ready for planning  
**Input**: User description: "Use Spec Kit on top-imobiliaria-next for the public listings flow. Run the full flow and implement it after tasks are ready."

## User Scenarios & Testing

### User Story 1 - Browse Published Properties (Priority: P1)

A visitor opens the public listings page and sees only active property advertisements, not buildings or condominium directory entries.

**Why this priority**: This is the main public inventory path and protects the separation between property listings and institutional building content.

**Independent Test**: Open `/imoveis` and confirm the page renders active property cards with listing details, result count, incremental loading, and no buildings directory content.

**Acceptance Scenarios**:

1. **Given** active properties exist, **When** a visitor opens `/imoveis`, **Then** the page shows only active property advertisements ordered by the selected default rule.
2. **Given** more properties exist than the first page size, **When** the visitor clicks the load-more control, **Then** more property cards appear without losing the current filter context.
3. **Given** the public inventory cannot be fetched, **When** `/imoveis` loads, **Then** the visitor sees a clear non-technical error state instead of a blank section.

---

### User Story 2 - Filter and Share Listing Views (Priority: P2)

A visitor filters the inventory by transaction type, region, and ordering, then shares or reopens the URL and gets the same listing view.

**Why this priority**: Shareable listing states improve WhatsApp sharing, SEO clarity, and user navigation without requiring new admin behavior.

**Independent Test**: Choose a transaction type, region, and sort order on `/imoveis`; reload or share the resulting URL and confirm the same controls and results are restored.

**Acceptance Scenarios**:

1. **Given** a visitor selects `Alugar`, **When** the URL updates, **Then** only rental properties remain visible and the query string records the selected type.
2. **Given** a visitor selects a region, **When** the page reloads with that URL, **Then** the same region filter is selected and applied.
3. **Given** a visitor clears filters, **When** the URL updates, **Then** the page returns to the default public inventory state.

---

### User Story 3 - Keep Listings SEO-Safe and Navigation-Safe (Priority: P3)

Visitors and crawlers reach the public inventory through clear routes, with `/imoveis` remaining separate from buildings and with crawl/index behavior preserved.

**Why this priority**: The public listings flow supports indexation, sharing, and future property-specific SEO work.

**Independent Test**: Inspect the page metadata and navigation paths, then verify build output includes `/imoveis` without errors.

**Acceptance Scenarios**:

1. **Given** a crawler requests `/imoveis`, **When** the page is rendered, **Then** the route has useful metadata and no noindex directive.
2. **Given** a user clicks "Ver Todos os Imóveis", **When** the route changes, **Then** the user lands on `/imoveis` instead of a buildings or condominium page.
3. **Given** the sitemap is generated, **When** it is inspected, **Then** `/imoveis` remains included as a public URL.

### Edge Cases

- No active properties are returned: show a clear empty state and keep the filter controls available.
- A URL contains invalid query parameters: ignore invalid values and render the default safe listing state.
- A selected filter leaves no matches: show an empty-filter message and a clear-filter action.
- A property has missing image or numeric fields: keep the card usable using existing fallback behavior.
- Network or Supabase errors: show a clear error message without exposing internal keys or stack traces.

## Requirements

### Functional Requirements

- **FR-001**: The `/imoveis` page MUST render only active public property advertisements.
- **FR-002**: The `/imoveis` page MUST keep buildings, condominiums, and institutional directory content out of the listing grid.
- **FR-003**: Visitors MUST be able to filter listings by transaction type: all, rental, or sale.
- **FR-004**: Visitors MUST be able to filter listings by available region/neighborhood derived from active listing data.
- **FR-005**: Visitors MUST be able to sort listings by featured-first and newest-first order.
- **FR-006**: Filter, sort, and pagination state MUST be represented in the URL query string with safe defaults for invalid values.
- **FR-007**: Reloading or sharing a filtered `/imoveis` URL MUST restore the same visible listing state.
- **FR-008**: The listing flow MUST show explicit loading, empty, filtered-empty, and fetch-error states.
- **FR-009**: The page MUST preserve crawlable/indexable behavior for `/imoveis` and must not introduce `noindex`.
- **FR-010**: Existing public navigation that points to all properties MUST route users to `/imoveis`.
- **FR-011**: The implementation MUST preserve the visible compliance footer identifier `CJ:15806`.
- **FR-012**: The implementation MUST build successfully and record verification in `tasks.md`.

### Key Entities

- **Public Property Listing**: A customer-facing advertisement with title, type, operation, price, location, media, active status, featured status, and timestamps.
- **Listing Filter State**: URL-backed state containing transaction type, region, sort order, and page count.
- **Public Listings Page**: The `/imoveis` route that renders controls, result count, property cards, and incremental loading.

## Success Criteria

### Measurable Outcomes

- **SC-001**: A visitor can open `/imoveis`, apply filters, reload the URL, and see the same selected listing state.
- **SC-002**: The listing grid never includes buildings or condominium directory entries.
- **SC-003**: Invalid query strings recover to a usable default state without runtime errors.
- **SC-004**: Production build completes successfully after implementation.
- **SC-005**: The public route `/imoveis` remains included in sitemap generation and has no intentional noindex behavior.

## Assumptions

- Existing Supabase `properties` records are the source for public property advertisements.
- Active/public eligibility is represented by the existing `is_active` property field.
- The current property card component remains the display pattern for listing cards.
- Dedicated property-detail URLs are handled by existing or parallel site work and are not expanded in this feature.
- Buildings and condominiums remain separate from the `/imoveis` inventory flow.

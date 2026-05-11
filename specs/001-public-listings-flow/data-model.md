# Data Model: Public Listings Flow

## Public Property Listing

Represents one active customer-facing property advertisement.

**Source**: Supabase `properties` table through `src/lib/supabase`.

**Relevant fields**:

- `id`: stable card key.
- `title`: listing title displayed on the card.
- `listing_type`: transaction type, expected values include `aluguel` and `venda`.
- `property_type`: descriptive property category.
- `price`: displayed card price.
- `neighborhood`: region filter source.
- `is_active`: eligibility flag for public rendering.
- `is_featured`: featured-first ordering signal.
- `created_at`: newest-first ordering signal.
- `updated_at`: sitemap last-modified source when available.

## Listing Filter State

Represents the visitor-selected public listing view.

**URL fields**:

- `tipo`: `todos`, `aluguel`, or `venda`; omitted or invalid values resolve to `todos`.
- `regiao`: exact neighborhood string from active listing data; omitted or invalid values resolve to all regions.
- `ordem`: `destaques` or `recentes`; omitted or invalid values resolve to `destaques`.
- `pagina`: positive integer page count for incremental loading; omitted or invalid values resolve to `1`.

## Public Listings Page

Represents the `/imoveis` route and its user-visible states.

**States**:

- Loading: active properties request is in progress.
- Ready with results: one or more filtered cards are visible.
- Ready with no active properties: no active inventory exists.
- Ready with no filtered matches: inventory exists but current filters match no records.
- Error: active property request failed.

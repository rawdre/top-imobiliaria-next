# Research: Public Listings Flow

## Decision 1: Keep filtering client-side after fetching active properties

**Decision**: Continue fetching active `properties` records from Supabase once, then filter/sort locally inside `AllPropertiesClient`.

**Rationale**: The existing page already uses this model, and the feature is focused on public flow behavior rather than backend query expansion. Local filtering keeps the UI responsive and avoids adding new API routes or database indexes.

**Alternatives considered**:

- Server-render all filtered states: rejected because query-param combinations would increase App Router complexity and require broader data-loading changes.
- Add a new API endpoint: rejected because the existing Supabase client path already satisfies this feature.

## Decision 2: URL query string is the contract for shareable state

**Decision**: Represent selected transaction type, region, sort mode, and page count in `/imoveis` query parameters.

**Rationale**: This makes WhatsApp sharing and browser reloads deterministic without changing the admin or database schema.

**Alternatives considered**:

- Local component state only: rejected because it fails the share/reload requirement.
- Hash fragments: rejected because previous hash-based property behavior caused shared links to land on the home state.

## Decision 3: Add a Suspense boundary around the client listing component

**Decision**: Wrap `AllPropertiesClient` in `Suspense` from the route page.

**Rationale**: Next App Router client hooks such as search params can require a Suspense boundary during static rendering and build.

**Alternatives considered**:

- Avoid search params: rejected because shareable state is a core requirement.
- Make the whole page client-side: rejected because metadata/header/footer can remain server-rendered.

## Decision 4: Verify sitemap rather than changing it

**Decision**: Keep the current sitemap shape, which already includes `/imoveis` and active property URLs, and validate it in the feature checks.

**Rationale**: The feature does not require a new sitemap algorithm. Unnecessary sitemap edits would raise risk for a currently index-ready domain.

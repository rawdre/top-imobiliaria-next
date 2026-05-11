# Contract: Public Listings URL State

## Route

`GET /imoveis`

## Query Parameters

| Parameter | Allowed values | Default | Behavior |
|-----------|----------------|---------|----------|
| `tipo` | `todos`, `aluguel`, `venda` | `todos` | Filters active properties by `listing_type`. |
| `regiao` | Any active property `neighborhood` value | all regions | Filters active properties by exact neighborhood after data loads. |
| `ordem` | `destaques`, `recentes` | `destaques` | Sorts by featured-first or newest-first. |
| `pagina` | Positive integer | `1` | Controls visible cards as `pagina * 9`. |

## Invalid Values

- Invalid `tipo` resolves to `todos`.
- Invalid `ordem` resolves to `destaques`.
- Invalid or non-positive `pagina` resolves to `1`.
- Unknown `regiao` is kept in the URL until active regions are known, then produces a no-results state rather than a runtime error.

## URL Update Rules

- Changing `tipo`, `regiao`, or `ordem` resets `pagina` to `1`.
- Loading more increments `pagina` by one.
- Default values are omitted from the URL where practical to keep share links clean.
- Updates use client-side navigation without full page reload.

## SEO Expectations

- `/imoveis` remains the canonical base route.
- Filtered query URLs are user-shareable states, not separate sitemap entries.
- No `noindex` directive is introduced.

# Implementation Plan: Public Listings Flow

**Branch**: `001-public-listings-flow` | **Date**: 2026-05-11 | **Spec**: `specs/001-public-listings-flow/spec.md`  
**Input**: Feature specification from `specs/001-public-listings-flow/spec.md`

## Summary

Make the public `/imoveis` inventory flow independently usable, shareable, and index-safe. The implementation will keep the existing Supabase-backed active listing source and card UI, then add URL-backed filter/sort/page state, explicit fetch-error and empty states, and a Suspense-safe route boundary for App Router query-state usage.

## Technical Context

**Language/Version**: TypeScript 5, React 19.2, Next.js 16.2 App Router  
**Primary Dependencies**: Next.js, React, Supabase JS, framer-motion, lucide-react  
**Storage**: Existing Supabase `properties` table queried through `src/lib/supabase`  
**Testing**: `npm run lint`, `npm run build`, and local route inspection  
**Target Platform**: Vercel-hosted public website at `https://www.topimobiliaria.com`  
**Project Type**: Web application with hybrid Next.js app routes and static `public/*.html` surfaces  
**Performance Goals**: First listing page renders no more than 9 cards before incremental loading; filtering and sorting occur client-side on the already fetched active set  
**Constraints**: Preserve active-only inventory, keep buildings separate, keep `CJ:15806` footer compliance, do not print or commit environment secrets, do not edit untracked `docs/`  
**Scale/Scope**: Public listing route plus sitemap/navigation verification for the current 100+ URL site

## Constitution Check

- **Public Inventory Is the Source of Truth**: PASS. `/imoveis` remains backed by active `properties` records and excludes buildings/condominiums.
- **SEO and Compliance Are Product Requirements**: PASS. Existing `/imoveis` metadata and sitemap entry are preserved; no noindex behavior added; footer remains shared.
- **Hybrid Surface Consistency**: PASS. This feature does not change customer-facing labels that require static HTML sweeps, but navigation assumptions are verified.
- **Mobile-Safe Public Experience**: PASS. Existing compact controls are retained and enhanced with non-blank states.
- **Verified Delivery**: PASS. Tasks include lint, production build, and local route checks.

## Project Structure

### Documentation (this feature)

```text
specs/001-public-listings-flow/
├── spec.md
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── checklists/
│   └── requirements.md
├── contracts/
│   └── public-listings-url-state.md
└── tasks.md
```

### Source Code (repository root)

```text
src/
├── app/
│   ├── imoveis/
│   │   └── page.tsx
│   └── sitemap.ts
├── components/
│   ├── AllPropertiesClient.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   └── PropertiesSection.tsx
└── lib/
    ├── supabase.ts
    ├── property-data.ts
    └── property-urls.ts
```

**Structure Decision**: Keep the implementation in the existing single Next.js app. `src/components/AllPropertiesClient.tsx` owns the interactive public listing state, `src/app/imoveis/page.tsx` owns metadata and the Suspense boundary, and `src/app/sitemap.ts` is verified rather than redesigned.

## Complexity Tracking

No constitution violations or additional architectural complexity are required.

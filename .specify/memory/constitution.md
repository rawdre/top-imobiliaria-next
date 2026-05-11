<!--
Sync Impact Report
Version change: template -> 1.0.0
Modified principles: initial adoption for Top Imobiliaria
Added sections: Additional Constraints, Development Workflow, Governance
Removed sections: template placeholders
Templates requiring updates: plan-template.md, spec-template.md, tasks-template.md reviewed; no template edits required
Follow-up TODOs: none
-->

# Top Imobiliaria Site Constitution

## Core Principles

### I. Public Inventory Is the Source of Truth
Public listing pages MUST render from active, published property records and MUST NOT mix property inventory with buildings, condominiums, or institutional directory content. Property flows MUST support direct navigation to the published inventory page and each indexable property detail page. Shared URLs MUST land on the intended listing state or property, not only on the home page.

### II. SEO and Compliance Are Product Requirements
Public pages MUST remain crawlable unless a deliberate noindex requirement is documented. Sitemap, robots, metadata, canonical URLs, and user-facing navigation MUST stay aligned with the production domain. The CRECI compliance identifier `CJ:15806` MUST remain visible in the final footer line of customer-facing surfaces where footer/legal copy is rendered.

### III. Hybrid Surface Consistency
The project includes Next.js App Router code and static public HTML surfaces. Navigation, compliance copy, branding, and customer-visible label changes MUST be applied to every relevant React and static HTML surface. A change is incomplete if an old public surface still routes users to a stale or misleading flow.

### IV. Mobile-Safe Public Experience
Public listing flows MUST be responsive, readable, and stable on mobile and desktop. Controls MUST use familiar filter/sort patterns, avoid overlapping text, preserve card dimensions during interaction, and provide clear empty/error/loading states. Incremental loading or pagination MUST avoid layout jumps that make the inventory hard to scan.

### V. Verified Delivery
Every implementation MUST include verification appropriate to the change. For this project, that normally means production build, lint when available, and at least one local or live check of the affected public route. If live deployment is not performed in the same work session, the handoff MUST state that explicitly instead of implying the domain is already updated.

## Additional Constraints

- Use the existing Next.js App Router, TypeScript, React, Supabase client, and local UI patterns before adding new dependencies.
- Preserve secrets and environment files. Do not print or commit `.env*` values.
- Keep `docs/` untouched unless the user specifically asks to edit those untracked materials.
- Avoid destructive git operations. Do not revert unrelated user or generated changes.
- Keep property listings and buildings/condominiums separated at both route and content levels.

## Development Workflow

1. For feature work, run the Spec Kit sequence: specification, plan, tasks, implementation, verification.
2. Specs MUST define independently testable user stories and acceptance criteria before code edits.
3. Plans MUST state the real source files and public surfaces affected.
4. Tasks MUST be checklists with file-level paths and must be marked complete as implementation proceeds.
5. Verification evidence MUST be recorded in the feature task file or final handoff.

## Governance

This constitution governs feature plans, tasks, and implementation reviews for the Top Imobiliaria site. Changes that weaken crawlability, compliance visibility, public listing accuracy, or hybrid-surface consistency require an explicit constitution amendment. Amendments require a version bump, a dated rationale, and updates to affected Spec Kit templates or downstream plans.

**Version**: 1.0.0 | **Ratified**: 2026-05-11 | **Last Amended**: 2026-05-11

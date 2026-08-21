# Admin property form bootstrap hotfix — TDD evidence

Date: 2026-08-21
Branch: `hotfix/admin-property-form-bootstrap`

## User journeys

- As an authenticated property administrator, I can open the add-property form without a JavaScript bootstrap error so that the application intercepts submission and saves through Supabase.
- As an administrator, I see the video controls as their own form section before the submit action on both add and edit pages.

## RED

Command:

```text
npm.cmd test -- src/lib/admin-property-form.test.ts
```

Result against production commit `8f711a59`:

- 3 tests executed and 3 failed.
- `normalizeVideoItem` and the other video helpers were `undefined` at script scope.
- Both admin pages placed the video heading after the submit-row opening, proving the video card was nested in the submit container.

Checkpoint: `2ff91a1 test: reproduce admin property form bootstrap regression`

## GREEN

Minimal production correction:

- close `removeGalleryItem()` immediately after rendering the changed photo gallery;
- restore all video helpers to script scope;
- move the video card before the independent submit row in add and edit forms.

Focused result:

```text
2 test files passed; 4 tests passed
```

The integration test executes the captured `DOMContentLoaded` callback, confirms bootstrap completes, confirms exactly one submit listener is registered, and verifies submission calls `preventDefault()`.

## Final verification

| Guarantee | Evidence | Result |
|---|---|---|
| Video helpers required by bootstrap and submission are top-level functions | `src/lib/admin-property-form.test.ts` | PASS |
| Add and edit pages keep the video card outside/before the submit row | `src/lib/admin-property-form.test.ts` | PASS |
| Admin bootstrap installs the submit handler and blocks native query-string navigation | `src/lib/admin-property-bootstrap.integration.test.ts` | PASS |
| All repository tests remain green | `npm.cmd test` — 4 files, 20 tests | PASS |
| Admin scripts remain syntactically valid | `node --check public/admin/property-form.js` and `api.js` | PASS |
| Static analysis has no errors | `npm.cmd run lint` — 0 errors, existing warnings only | PASS |
| Production bundle compiles and prerenders | `npm.cmd run build` | PASS |
| Coverage remains above the 80% gate | `npm.cmd run test:coverage` — 97.95% statements, 100% lines | PASS |

## Known gaps

- Production mutation testing is intentionally not performed automatically because it would create or change a real property. Post-deploy QA should verify page bootstrap and controls without saving customer data; a designated test property is required for a full live write test.
- Existing lint warnings are outside this focused hotfix and were not changed.

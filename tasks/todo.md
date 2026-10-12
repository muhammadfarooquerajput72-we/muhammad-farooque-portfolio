# Task List: `site-foundation`

## Task 1: Scaffold the static application

**Description:** Create the minimal Next.js App Router project and deterministic command contract without adding product features.

**Acceptance criteria:**
- [x] TypeScript strict mode and static export are enabled.
- [x] `dev`, `lint`, `test:run`, and `build` scripts exist.
- [x] The lockfile and repository ignore rules are present.

**Verification:**
- [x] `pnpm install` completes.
- [x] `pnpm build` produces static output.

**Dependencies:** None

**Files likely touched:** `package.json`, `pnpm-lock.yaml`, `tsconfig.json`, `next.config.ts`, `.gitignore`

**Estimated scope:** Medium

## Task 2: Establish the global visual and document shell

**Description:** Implement Candidate B tokens, locally served typography, default metadata, semantic landmarks, and the skip-link baseline.

**Acceptance criteria:**
- [x] Palette, type, spacing, focus, and motion tokens are reusable.
- [x] Root metadata and semantic page landmarks are present.
- [x] Reduced-motion preferences disable nonessential transitions.

**Verification:**
- [x] `pnpm lint` passes.
- [x] Component verification confirms the skip link precedes the main landmark.

**Dependencies:** Task 1

**Files likely touched:** `src/app/layout.tsx`, `src/app/globals.css`, `src/styles/tokens.css`, `src/components/layout/PageShell.tsx`

**Estimated scope:** Medium

## Task 3: Build accessible navigation and footer

**Description:** Add the Home, Work, Learning, and About navigation plus the persistent Let's Connect action and a restrained footer.

**Acceptance criteria:**
- [x] Desktop and mobile navigation expose identical destinations.
- [x] Keyboard focus is visible and mobile navigation is operable without hover.
- [x] The contact action supports a safe placeholder until the public destination is supplied.

**Verification:**
- [x] Component tests validate destinations and labels; live keyboard behavior remains in foundation QA.
- [x] Navigation remains one line at desktop widths.

**Dependencies:** Task 2

**Files likely touched:** `src/components/navigation/SiteHeader.tsx`, `src/components/navigation/MobileNavigation.tsx`, `src/components/layout/SiteFooter.tsx`, `tests/navigation.test.tsx`

**Estimated scope:** Medium

## Checkpoint: Application shell

- [x] `pnpm lint` passes.
- [x] `pnpm test:run` passes.
- [x] `pnpm build` passes.
- [x] Keyboard navigation works across the shell.

## Task 4: Add the four responsive route shells

**Description:** Create restrained page foundations that communicate purpose without prematurely implementing later content modules.

**Acceptance criteria:**
- [x] `/`, `/work`, `/learning`, and `/about` render successfully.
- [x] Each route has a unique title, clear purpose, and no unsupported claims.
- [x] Layouts use explicit narrow-screen spacing and fluid type below 768 pixels.

**Verification:**
- [x] Route smoke tests pass.
- [x] Browser checks pass at 320, 768, 1024, and 1440 pixels.

**Dependencies:** Task 3

**Files likely touched:** `src/app/page.tsx`, `src/app/work/page.tsx`, `src/app/learning/page.tsx`, `src/app/about/page.tsx`

**Estimated scope:** Medium

## Task 5: Add minimal reusable UI primitives

**Description:** Create only the controls and presentation primitives required by the route shells and later modules.

**Acceptance criteria:**
- [x] Button, section heading, content surface, and pillar link APIs are typed and focused.
- [x] All interactive primitives have visible focus and active feedback.
- [x] Primitives use one shape and color system without generic three-card layouts.

**Verification:**
- [x] Component tests cover rendering and accessible names.
- [x] Visual inspection confirms consistent states and contrast.

**Dependencies:** Task 2

**Files likely touched:** `src/components/ui/ButtonLink.tsx`, `src/components/ui/SectionHeading.tsx`, `src/components/ui/ContentSurface.tsx`, `src/components/orbit/PillarLink.tsx`, `tests/primitives.test.tsx`

**Estimated scope:** Medium

## Task 6: Define typed content contracts

**Description:** Add factual, status-aware profile, project, and journal structures that later pages can consume without embedding copy in components.

**Acceptance criteria:**
- [x] Project status distinguishes completed, in-progress, and planned work.
- [x] The four pillars are enforced by TypeScript types.
- [x] Seed content contains no invented employer, client, metric, or security claim.

**Verification:**
- [x] Content-schema tests pass.
- [x] TypeScript rejects an invalid pillar and invalid project status fixture.

**Dependencies:** Task 1

**Files likely touched:** `src/types/content.ts`, `src/content/profile.ts`, `src/content/projects.ts`, `src/content/journal.ts`, `tests/content-contracts.test.ts`

**Estimated scope:** Medium

## Checkpoint: Content-ready foundation

- [x] All four routes render from the shared shell.
- [x] Shared primitives and content contracts pass tests.
- [x] No horizontal overflow exists at supported widths.

## Task 7: Import approved brand assets

**Description:** Copy the approved profile photograph and Candidate B banner into predictable public paths without altering the originals.

**Acceptance criteria:**
- [x] Both approved source assets are located and copied losslessly.
- [x] Dimensions, file size, format, and intended use are documented.
- [x] No missing asset was silently replaced.

**Verification:**
- [x] Asset paths resolve in the static output.
- [x] Documented image dimensions are available for layout-safe rendering.

**Dependencies:** Task 1

**Files likely touched:** `public/brand/muhammad-farooque-profile.png`, `public/brand/candidate-b-banner.png`, `docs/ASSETS.md`

**Estimated scope:** Small

## Task 8: Complete foundation QA and documentation

**Description:** Add browser coverage, confirm the static artifact, and document the exact maintenance workflow for future modules.

**Acceptance criteria:**
- [x] Critical routes load without console errors.
- [x] Keyboard, reduced-motion, viewport, metadata, and overflow checks are covered.
- [x] README documents commands, structure, boundaries, and next module.

**Verification:**
- [x] `pnpm lint` passes.
- [x] `pnpm test:run` passes.
- [x] `pnpm build` passes.
- [x] `pnpm exec playwright test` passes.

**Dependencies:** Tasks 3-7

**Files likely touched:** `playwright.config.ts`, `e2e/foundation.spec.ts`, `README.md`, `docs/VERIFICATION.md`

**Estimated scope:** Medium

## Checkpoint: Foundation complete

- [x] Every success criterion in `SPEC-site-foundation.md` is satisfied or explicitly recorded as deferred.
- [x] Automated and visual evidence is recorded.
- [x] The project is ready for the `brand-home` specification.

---

# Task List: `brand-home`

## Task 1: Lock the Intersection Atlas direction

- [x] Record the approved visual concept and source comp.
- [x] Pin the audience, claims, constraints, and direction contract.
- [x] Create the `SPEC-brand-home.md` implementation contract.

## Task 2: Build the hero and living atlas

- [ ] Render the approved portrait at layout-safe dimensions.
- [ ] Make Support, Secure, Build, and Create clear semantic entry points.
- [ ] Preserve a strong first viewport at mobile and desktop widths.

## Task 3: Build capability and evidence sections

- [ ] Explain how the four directions connect without a generic card grid.
- [ ] Mark pending evidence and learning status explicitly.
- [ ] Provide clear routes to Work and Learning.

## Task 4: Integrate the visual shell

- [ ] Refine header, footer, typography, browser surfaces, and responsive spacing.
- [ ] Add one coordinated motion moment with a reduced-motion alternative.
- [ ] Keep non-home routes stable.

## Task 5: Verify and finish

- [ ] Pass lint, unit tests, static build, and browser tests.
- [ ] Capture and inspect desktop and mobile renders.
- [ ] Run the Impeccable detector once, complete the finish review, and document the shipped result.

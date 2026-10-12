# Implementation Plan: `site-foundation`

## Overview

Build the smallest production-quality foundation for Muhammad Farooque's portfolio: a statically exportable Next.js application, a coherent Candidate B visual system, accessible shared navigation, typed content contracts, four responsive route shells, verified source assets, and a repeatable quality baseline. This plan deliberately stops before writing the finished homepage, case studies, journal, biography, or contact experience assigned to later modules.

## Design Read

This is a multidisciplinary personal portfolio for recruiters, startup founders, collaborators, and fellow learners. Its visual language is editorial, technical, warm, and credible. It should express the intersection of Support, Secure, Build, and Create without presenting Muhammad as a specialist in every field.

- Design variance: 7/10 - asymmetric editorial composition without experimental navigation
- Motion intensity: 4/10 - subtle hierarchy and feedback, with full reduced-motion support
- Visual density: 3/10 - generous whitespace and short, scannable content
- Theme: warm light canvas with one primary orange accent; blue and sage remain semantic pillar colors
- Shape rule: soft 14px surfaces, pill-shaped controls, sharp editorial dividers

## Architecture Decisions

- Use Next.js App Router with TypeScript strict mode and static export because the MVP has no server-side behavior.
- Keep profile, project, and journal information in typed project-owned modules so later content work does not require a CMS.
- Use Tailwind CSS and CSS custom properties for a small token system instead of a component framework.
- Use semantic HTML and CSS transitions for the foundation. Do not add an animation dependency until the later orbit interaction proves it necessary.
- Keep all essential navigation and content usable without hover, animation, or client-side state.
- Preserve the route contract: `/`, `/work`, `/learning`, and `/about`.

## Dependency Graph

```text
Project scaffold and commands
  -> design tokens and global document shell
    -> accessible navigation and footer
      -> route shells and reusable primitives
        -> typed content contracts
          -> approved brand assets
            -> automated and responsive verification
```

## Implementation Order

### Phase 1: Runnable foundation

1. Scaffold the static Next.js application and command contract.
2. Establish global design tokens, typography, metadata, and document landmarks.
3. Build the keyboard-accessible navigation and footer.

### Checkpoint: Application shell

- Development server starts successfully.
- Lint and production build pass.
- Skip navigation and all four route destinations are available by keyboard.

### Phase 2: Reusable site language

4. Add responsive route shells for Home, Work, Learning, and About.
5. Add the minimal shared UI primitives needed by later modules.
6. Define and validate typed profile, project, and journal content contracts.

### Checkpoint: Content-ready foundation

- Every route renders at narrow and wide widths without horizontal overflow.
- Reusable primitives follow the same typography, color, focus, and shape rules.
- Invalid content fixtures fail deterministic tests.

### Phase 3: Assets and verification

7. Import and verify the approved profile photograph and Candidate B banner source assets.
8. Add browser checks, static-export verification, and maintainership documentation.

### Checkpoint: Foundation complete

- `pnpm lint`, `pnpm test:run`, `pnpm build`, and focused Playwright checks pass.
- Static output contains all four routes.
- Keyboard, reduced-motion, responsive, and asset checks have recorded evidence.
- No database, authentication, CMS, analytics, or unnecessary runtime dependency exists.

## Verification Strategy

Run focused checks after each task and the full sequence at each checkpoint:

```powershell
pnpm lint
pnpm test:run
pnpm build
pnpm exec playwright test
```

Manual verification will cover keyboard order, visible focus, 320/768/1024/1440 pixel layouts, reduced motion, light/dark system preference behavior where applicable, and absence of horizontal overflow.

## Risks and Mitigations

| Risk | Impact | Mitigation |
|---|---|---|
| Current package versions differ from the original runbook | Medium | Pin compatible versions during scaffold, install once, and preserve the lockfile |
| Candidate B banner source cannot be located | Medium | Keep an explicit asset slot and do not substitute or regenerate without approval |
| Warm palette reduces text contrast | High | Use ink for text, restrict accents to qualified sizes, and test WCAG AA contrast |
| Four interests appear fragmented | High | Enforce one positioning statement and one Support/Secure/Build/Create hierarchy across every shell |
| Motion becomes decorative or inaccessible | Medium | Keep foundation motion CSS-only, honor reduced motion, and never hide essential content |
| Placeholder content is mistaken for completed work | High | Mark planned content explicitly and test status labels in typed fixtures |

## Parallelization

After Task 3, route-shell content and content-contract tests can be prepared independently, but shared tokens, navigation, and component APIs must remain sequential. Asset discovery can happen alongside Tasks 4-6 without changing source files.

## Open Questions

No architectural question blocks implementation. The public contact destination, final CV, code-profile link, detailed YouTube attribution, and deployment target remain deferred to later modules as specified.

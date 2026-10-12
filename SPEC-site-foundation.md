# Spec: `site-foundation`

## Status

Approved for planning on 2026-10-10. This specification implements the first module in `CAPABILITY-MAP.md` and establishes the contract used by every later portfolio module.

## Objective

Create the local technical and visual foundation for Muhammad Farooque's public portfolio. The foundation must make later modules easy to build without introducing unnecessary backend infrastructure or allowing the portfolio to become a collection of unrelated niche pages.

The portfolio's central positioning is:

> **Learning across tech. Building in public.**

The site will present Muhammad as an emerging multidisciplinary technology professional whose work connects four pillars:

1. **Support** — practical IT and technical support
2. **Secure** — cybersecurity learning and authorized laboratory work
3. **Build** — rapid software development using AI-assisted tools
4. **Create** — AI videos, AI advertisements, and YouTube automation

Virtual University student-life content belongs to the public-learning narrative rather than becoming a fifth professional specialty.

### Primary audiences

- Startup founders and small teams looking for adaptable junior digital talent
- AI-video, advertising, and YouTube-automation collaborators
- IT support, help-desk, and technical-support recruiters
- Cybersecurity internship and trainee recruiters
- Virtual University students and other public learners

### Foundation user stories

- As a visitor, I can immediately understand Muhammad's direction without seeing an inflated expert claim.
- As a recruiter, I can navigate to work, learning, background, and contact information from any page.
- As a mobile visitor, I receive the same narrative and functionality without relying on hover interactions.
- As a future maintainer, I can update structured content without rewriting page components.
- As Muhammad's experience grows, new proof can be added without changing the four-pillar information architecture.

## Scope

### Included

- Next.js application scaffold with TypeScript and the App Router
- Static-export configuration suitable for simple hosting
- Tailwind CSS and a small token-based design system
- Global layout, metadata defaults, navigation, footer, skip link, and page container
- Responsive route shells for `/`, `/work`, `/learning`, and `/about`
- Shared types and structured content locations for profile, projects, and journal entries
- Reusable primitives required by later modules: buttons, labels, section headings, cards, and orbit-node styling
- Candidate B brand direction and the approved profile photograph as source assets
- Accessibility, reduced-motion, responsive, and performance baselines
- Unit/component test setup and browser-test setup

### Excluded from this module

- Finished homepage narrative and interactive orbit behavior (`brand-home`)
- Finished case studies (`proof-library`)
- Finished learning posts (`learning-journal`)
- Finished biography, CV presentation, and contact content (`about-contact`)
- Deployment and production launch (`launch-quality`)
- Authentication, accounts, database, CMS, payments, admin dashboard, or server-side contact form

## Tech Stack

| Area | Selection | Reason |
|---|---|---|
| Framework | Current stable Next.js with App Router | Strong static routing, metadata support, image optimization, and maintainable page structure |
| Language | TypeScript with strict mode | Prevents content-shape drift and improves maintainability |
| Styling | Tailwind CSS plus CSS custom properties | Fast implementation with explicit brand tokens and responsive control |
| Rendering | Static export | The MVP has no server requirements and should deploy cheaply and reliably |
| Content | Project-owned typed TypeScript data | No CMS is justified for the MVP; content remains versioned and portable |
| Unit/component testing | Vitest and React Testing Library | Fast verification of components and interaction behavior |
| Browser testing | Playwright | Responsive, navigation, accessibility, and critical-flow verification |
| Package manager | pnpm | Matches the approved engineering runbook |
| Version control | Git | Keeps specifications, decisions, content, and implementation together |

No animation library will be added initially. The visual system will use CSS transitions and lightweight SVG/React behavior. A dependency may be added later only if the orbit interaction proves materially difficult to implement accessibly without it.

## Visual Contract

### Personality

Warm, technical, editorial, curious, and credible. The design must feel intentional and modern without looking like a cybersecurity dashboard, generic AI landing page, or résumé template.

### Brand palette

| Token | Value | Use |
|---|---|---|
| `--canvas` | `#F5F1E8` | Primary warm-ivory background |
| `--surface` | `#FFFDF8` | Raised cards and readable content surfaces |
| `--ink` | `#081522` | Primary headings and body text |
| `--muted` | `#656A6E` | Supporting copy and metadata |
| `--orange` | `#ED4A24` | Create, momentum, and primary emphasis |
| `--blue` | `#1F64D8` | Secure, technology, and interactive focus |
| `--sage` | `#6E806E` | Learning and content-system accents |
| `--line` | `rgba(8, 21, 34, 0.14)` | Grids, borders, and orbit paths |

Colors must meet WCAG 2.2 AA contrast for normal text. Accent colors may be used decoratively only when contrast would otherwise fail.

### Typography

- Display and body: Space Grotesk or the closest locally bundled geometric sans-serif
- Technical labels: IBM Plex Mono or the closest locally bundled monospace
- Fluid type sizing with readable limits; no body text below 16 CSS pixels
- Short uppercase labels may use tracking, but paragraphs must remain sentence case

### Layout and motion

- Generous whitespace and asymmetric editorial composition
- Fine orbital lines, subtle grid marks, and small nodes derived from Candidate B
- The profile photograph functions as a human anchor, not a decorative badge
- Motion supports comprehension and pauses under `prefers-reduced-motion`
- The four-pillar orbit becomes a clear vertical list on narrow screens
- No decorative motion may block navigation, reading, or keyboard access

## Information Architecture Contract

```text
/
├── introduction and positioning
├── four-pillar learning orbit
├── selected work
├── 50K+ YouTube proof
└── next action

/work
└── project and case-study collection

/work/[slug]
└── individual case study

/learning
└── cybersecurity, AI development, VU student life, and experiments

/about
└── story, direction, capabilities, CV, and contact
```

The navigation labels will be **Home**, **Work**, **Learning**, and **About**. The primary persistent action will be **Let's Connect** and will point to the approved contact method when supplied.

## Commands

Commands will exist after scaffold creation:

```powershell
pnpm install
pnpm dev
pnpm lint
pnpm test:run
pnpm build
pnpm exec playwright test
```

Expected meanings:

- `pnpm dev` — run the local development server
- `pnpm lint` — run ESLint without silently rewriting source files
- `pnpm test:run` — run deterministic unit and component tests once
- `pnpm build` — produce a successful static production export
- `pnpm exec playwright test` — verify critical routes and responsive behavior in a real browser

## Project Structure

```text
Farooque Portfolio/
├── CAPABILITY-MAP.md
├── SPEC-site-foundation.md
├── README.md
├── package.json
├── next.config.ts
├── public/
│   ├── brand/
│   │   ├── muhammad-farooque-profile.png
│   │   └── candidate-b-banner.png
│   └── projects/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── work/
│   │   ├── learning/
│   │   └── about/
│   ├── components/
│   │   ├── layout/
│   │   ├── navigation/
│   │   ├── orbit/
│   │   └── ui/
│   ├── content/
│   │   ├── profile.ts
│   │   ├── projects.ts
│   │   └── journal.ts
│   ├── lib/
│   ├── styles/
│   └── types/
├── tests/
├── e2e/
├── tasks/
└── docs/
```

Directories should be created only when their first real file is required. Empty architecture folders must not be added merely to match the diagram.

## Content Contracts

Claims about Muhammad must come from supplied or verified information. Placeholder case studies must be visibly marked as planned work and never presented as completed client work.

The initial structured project type will support:

```ts
export type PortfolioProject = {
  slug: string;
  title: string;
  pillar: "support" | "secure" | "build" | "create";
  summary: string;
  status: "completed" | "in-progress" | "planned";
  problem: string;
  contribution: string[];
  evidence: Array<{
    label: string;
    value: string;
  }>;
  tools: string[];
};
```

Rules:

- Never imply professional cybersecurity work where only laboratory learning exists.
- Never attribute client work, revenue, conversion results, or testimonials without evidence.
- The 50K+ subscriber statement may be used because it was supplied, but its detailed case study must clearly state Muhammad's actual role and available proof.
- Tool names support the story; they do not replace explanations of decisions, process, or outcomes.

## Code Style

- Use named exports for reusable components and content collections.
- Use `PascalCase` for React components and `camelCase` for functions and variables.
- Keep components focused on one responsibility.
- Prefer semantic HTML and CSS over JavaScript-driven layout.
- Keep content outside presentation components.
- Avoid `any`, unnecessary state, premature abstractions, and unexplained dependencies.

Example:

```tsx
type PillarLinkProps = {
  href: string;
  label: string;
  description: string;
};

export function PillarLink({ href, label, description }: PillarLinkProps) {
  return (
    <a className="group rounded-full focus-visible:outline" href={href}>
      <span className="font-mono text-sm uppercase tracking-wide">{label}</span>
      <span className="sr-only">: {description}</span>
    </a>
  );
}
```

## Testing Strategy

### Static and unit checks

- TypeScript strict-mode compilation passes.
- ESLint passes with no ignored errors introduced by the project.
- Unit tests validate content schemas and essential UI primitives.

### Component tests

- Navigation exposes the correct destinations.
- Keyboard focus is visible and ordered logically.
- Reduced-motion behavior disables nonessential animation.
- Pillar labels and descriptions remain available to assistive technology.

### Browser tests

- `/`, `/work`, `/learning`, and `/about` load without console errors.
- Navigation works by keyboard and pointer.
- Layouts are tested at 320, 768, 1024, and 1440 pixel widths.
- No horizontal overflow appears at supported widths.
- The primary positioning statement remains visible without interaction.

### Quality targets

- Lighthouse Accessibility: at least 95
- Lighthouse Best Practices: at least 90
- Lighthouse SEO: at least 95
- Largest Contentful Paint: under 2.5 seconds on a representative mobile profile
- Cumulative Layout Shift: below 0.1
- Interaction to Next Paint: below 200 milliseconds where measurable

Automated scores are evidence, not substitutes for keyboard and visual review.

## Boundaries

### Always do

- Preserve the approved positioning and four-pillar hierarchy.
- Keep claims factual and experience levels honest.
- Design mobile and keyboard behavior alongside desktop behavior.
- Respect reduced-motion preferences.
- Run relevant checks before considering a task complete.
- Preserve user-created files and document consequential decisions.
- Use the smallest implementation that meets the specification.

### Ask first

- Add a runtime dependency.
- Add a CMS, database, analytics provider, contact-form service, or tracking script.
- Change the four-pillar architecture or approved brand direction.
- Publish the site publicly or connect a custom domain.
- Present an unverified project or metric as completed work.

### Never do

- Commit credentials, secrets, private keys, or personal documents not intended for publication.
- Invent testimonials, employers, clients, metrics, or cybersecurity findings.
- Describe Muhammad as an expert, specialist, polymath, penetration tester, or full-stack developer without supporting evidence.
- Add authentication, payments, a database, an admin dashboard, or microservices to the MVP.
- Make essential content dependent on animation, hover, or JavaScript.
- remove failing tests merely to obtain a green build.

## Model-Use Contract

GPT-6 Astra is excluded unless the user explicitly reverses that decision.

- `daily-work` / GPT-6 Sol: specifications, plans, implementation, debugging, and content integration
- GPT-6 Luna: repetitive mechanical edits, straightforward documentation, and small isolated fixes
- Dedicated image generation: approved visual assets only
- Fresh GPT-6 Sol context: independent code, accessibility, and launch review

Project documents and repository state are the durable memory. Each model receives the smallest relevant context packet rather than the complete conversation history.

## Success Criteria

The `site-foundation` module is complete when:

1. A clean local repository exists at `D:\Farooque Portfolio`.
2. The Next.js TypeScript application starts with `pnpm dev`.
3. `pnpm lint`, `pnpm test:run`, and `pnpm build` all pass.
4. The static export is produced successfully.
5. Global navigation and accessible route shells exist for Home, Work, Learning, and About.
6. Candidate B's palette and typography are implemented as reusable tokens.
7. The approved profile image and banner are stored as project assets without modifying the originals.
8. Structured content types exist for profile information, projects, and learning entries.
9. The layout has no horizontal overflow at the required viewport widths.
10. Keyboard focus, skip navigation, semantic landmarks, and reduced-motion behavior are implemented.
11. No authentication, database, CMS, analytics, or unnecessary runtime service is introduced.
12. Automated and manual verification evidence is recorded before the module is approved.

## Deferred Content Inputs

These are not blockers for building the foundation, but must be supplied or verified before the related modules are finalized:

- Public email address or preferred contact destination
- Final CV file intended for public download
- GitHub or code-profile URL, if one should be shown
- Exact YouTube channel attribution and evidence Muhammad is comfortable publishing
- Completed project media, demos, repositories, and measurable outcomes
- Final hosting platform and custom-domain decision

## Open Questions

No architectural question blocks the foundation. Deferred content inputs will be resolved in the specifications for their corresponding modules.

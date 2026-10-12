# Specification: Brand Home
## Objective

Turn the portfolio foundation into a distinctive, production-ready homepage that explains Muhammad Farooque's multidisciplinary direction without exaggerating his experience.

## Approved direction

The homepage uses **The Intersection Atlas** composition inside the established Candidate B visual world. Muhammad is the human anchor of four connected capability fields: Support, Secure, Build, and Create.

## User outcomes

Within the first viewport, a visitor can:

- identify Muhammad and his positioning;
- understand that his interests are connected, not scattered;
- enter the portfolio through any of the four capability directions;
- reach selected work or learning notes;
- distinguish active learning from verified experience.

## Content truth

- Positioning: “Learning across tech. Building in public.”
- Location: Islamabad.
- Support: practical IT and technical support.
- Secure: cybersecurity learning and authorized lab practice.
- Build: rapid software development with AI-assisted tools.
- Create: AI video, advertising, and YouTube workflows.
- 50K+ YouTube growth may appear only with the note “attribution being documented” until supporting context is published.

## Page structure

1. Asymmetric hero with name, positioning, portrait, actions, and interactive capability atlas.
2. Capability field guide explaining how the four directions connect.
3. Evidence spine with one in-progress build, the pending-attribution YouTube result, and public learning.
4. Closing route toward Work and Learning.

## Interaction and accessibility

- Every capability node is a semantic link usable with keyboard and touch.
- Hover and focus change the atlas as one coordinated system; content is available without hover.
- Reduced-motion preference removes nonessential movement.
- Text and controls meet WCAG 2.2 AA contrast and focus visibility expectations.
- Supported widths: 320, 768, 1024, and 1440 pixels with no horizontal overflow.

## Technical constraints

- Next.js App Router and static export remain intact.
- Prefer server-rendered markup and CSS; add client JavaScript only when it materially improves the experience.
- Approved local portrait is rendered with layout-safe dimensions.
- No copied marketplace component or unnecessary runtime dependency.

## Acceptance criteria

- The first viewport communicates the four-part intersection in under five seconds.
- The portrait remains visually integrated at desktop and appropriately simplified on mobile.
- Claims are honest and evidence states are explicit.
- The page has no generic equal-card grid, cyberpunk styling, gradients, glassmorphism, or terminal cosplay.
- Lint, unit tests, static build, and browser tests pass.
- Desktop and mobile review captures are inspected against the approved composition.

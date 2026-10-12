# Capability Map: Farooque Portfolio

## Product direction

A presentation-led personal portfolio built around the idea **“Learning across tech. Building in public.”** It should present Muhammad Farooque as an emerging multidisciplinary technology professional working across support, security, AI-assisted building, and AI-powered media without overstating his experience.

## Modules

| Module id | Responsibility | Depends on |
|---|---|---|
| `site-foundation` | Local project scaffold, design tokens, responsive shell, navigation, accessibility baseline, metadata, and reusable content structure | — |
| `brand-home` | Hero, Muhammad’s positioning, interactive Support → Secure → Build → Create learning orbit, selected proof, and primary calls to action | `site-foundation` |
| `proof-library` | Project index and reusable case-study presentation for YouTube growth, AI video advertising, IT support, cybersecurity learning, and AI-assisted development | `site-foundation` |
| `learning-journal` | Public learning notes organized around cybersecurity, AI development, Virtual University student life, and practical experiments | `site-foundation` |
| `about-contact` | Personal story, current direction, capabilities, CV/contact links, and clear employment/freelance/collaboration pathways | `site-foundation` |
| `launch-quality` | Content validation, responsive QA, accessibility, performance, SEO/social previews, production build, and deployment readiness | `brand-home`, `proof-library`, `learning-journal`, `about-contact` |

## Build order

1. `site-foundation`
2. `brand-home`
3. `proof-library`, `learning-journal`, and `about-contact` in parallel where practical
4. `launch-quality`

## MVP boundary

The first release will be a fast, public portfolio with no authentication, user accounts, database, payments, admin dashboard, or complex backend. Content may begin as project-owned structured files so it remains easy to maintain and can be migrated to a CMS later only if justified.

## Approval gate

After this capability map is approved, create the project specification for `site-foundation` and the cross-site visual/content contract. Do not scaffold or implement the website before that approval.

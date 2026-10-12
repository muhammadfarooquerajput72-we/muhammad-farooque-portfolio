# Muhammad Farooque Portfolio

A cinematic personal portfolio presenting Muhammad Farooque's developing work across IT support, cybersecurity, AI-assisted software development, and AI-powered media workflows.

## Highlights

- Scroll-controlled cinematic introduction
- Responsive capability atlas
- Experience, education, and certification sections
- Accessible keyboard navigation and reduced-motion support
- Static Next.js export for reliable Vercel hosting

## Technology

- Next.js 16 and React 19
- TypeScript
- GSAP and ScrollTrigger
- Phosphor Icons
- Vitest and Playwright

## Local development

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Quality checks

```bash
pnpm lint
pnpm test:run
pnpm build
pnpm test:e2e
```

## Deployment

The project is configured as a static Next.js export and is intended for automatic deployment from the `main` branch through Vercel's Git integration.

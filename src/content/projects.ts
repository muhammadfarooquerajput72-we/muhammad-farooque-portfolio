import type { PortfolioProject } from "@/types/content";

export const projects: readonly PortfolioProject[] = [
  {
    slug: "farooque-portfolio",
    title: "Multidisciplinary Portfolio",
    pillar: "build",
    summary:
      "An accessible portfolio that connects support, security, AI-assisted development, and AI-powered media without overstating experience.",
    status: "in-progress",
    problem:
      "Present several connected interests as one credible direction instead of a scattered list of tools.",
    contribution: [
      "Defined the four-pillar information architecture.",
      "Built a statically exported, responsive application foundation.",
      "Kept evidence status and experience language explicit.",
    ],
    evidence: [
      {
        label: "Public demonstration",
        value: "Local implementation complete; public link pending.",
        status: "pending",
      },
    ],
    tools: ["Next.js", "TypeScript", "Tailwind CSS", "Vitest"],
  },
];

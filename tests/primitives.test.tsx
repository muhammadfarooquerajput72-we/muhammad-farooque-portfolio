import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { PillarLink } from "@/components/orbit/PillarLink";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { ContentSurface } from "@/components/ui/ContentSurface";
import { SectionHeading } from "@/components/ui/SectionHeading";

describe("portfolio UI primitives", () => {
  it("renders a labelled button link", () => {
    render(<ButtonLink href="/work">Explore the work</ButtonLink>);

    expect(screen.getByRole("link", { name: "Explore the work" })).toHaveAttribute(
      "href",
      "/work",
    );
  });

  it("associates section context with its heading", () => {
    render(<SectionHeading eyebrow="Current direction">What I am learning</SectionHeading>);

    expect(screen.getByText("Current direction")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 2, name: "What I am learning" }),
    ).toBeInTheDocument();
  });

  it("renders a semantic content surface", () => {
    render(<ContentSurface as="article">Project evidence</ContentSurface>);

    expect(screen.getByRole("article")).toHaveTextContent("Project evidence");
  });

  it("keeps a pillar description available to assistive technology", () => {
    render(
      <PillarLink
        description="Practical IT and technical support"
        href="/work#support"
        label="Support"
        tone="orange"
      />,
    );

    expect(
      screen.getByRole("link", {
        name: "Support: Practical IT and technical support",
      }),
    ).toHaveAttribute("href", "/work#support");
  });
});

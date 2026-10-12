import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { SiteHeader } from "@/components/navigation/SiteHeader";

const destinations = [
  ["Home", "/#home"],
  ["Work", "/#work"],
  ["Learning", "/#learning"],
  ["Contact", "/#contact"],
] as const;

describe("SiteHeader", () => {
  it("exposes the approved destinations in the primary navigation", () => {
    render(<SiteHeader />);

    const primaryNavigation = screen.getByRole("navigation", {
      name: "Primary",
    });

    for (const [label, href] of destinations) {
      expect(
        within(primaryNavigation).getByRole("link", { name: label }),
      ).toHaveAttribute("href", href);
    }
  });

  it("keeps contact in the persistent navigation", () => {
    render(<SiteHeader />);

    expect(
      screen.getByRole("link", { name: "Contact" }),
    ).toHaveAttribute("href", "/#contact");
  });
});

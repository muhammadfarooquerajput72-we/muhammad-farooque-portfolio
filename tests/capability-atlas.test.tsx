import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import HomePage from "@/app/page";

describe("interactive capability atlas", () => {
  it("opens a readable capability field and can collapse it again", () => {
    render(<HomePage />);

    const support = screen.getByRole("button", { name: /support/i });
    expect(support).toHaveAttribute("aria-expanded", "false");

    fireEvent.click(support);

    expect(support).toHaveAttribute("aria-expanded", "true");
    expect(
      screen.getByText(/helping people keep everyday systems working/i),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /explore this direction/i }),
    ).toHaveAttribute("href", "/work#support");

    fireEvent.click(support);

    expect(support).toHaveAttribute("aria-expanded", "false");
    expect(
      screen.queryByText(/helping people keep everyday systems working/i),
    ).not.toBeInTheDocument();
  });
});

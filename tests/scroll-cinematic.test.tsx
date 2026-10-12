import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { ScrollCinematic } from "@/components/intro/ScrollCinematic";

describe("ScrollCinematic", () => {
  it("is part of the document flow and exposes the portfolio context", () => {
    const { container } = render(
      <ScrollCinematic>
        <div>Live hero</div>
      </ScrollCinematic>,
    );

    expect(
      screen.getByRole("region", {
        name: /scroll-controlled introduction to Muhammad Farooque/i,
      }),
    ).toBeInTheDocument();
    expect(container.querySelector("video")).toHaveAttribute(
      "poster",
      "/media/helpdesk-start.webp",
    );
    expect(screen.getByText("IT Support")).toBeInTheDocument();
    expect(screen.getByText("Cybersecurity")).toBeInTheDocument();
    expect(screen.getByText("AI Engineering")).toBeInTheDocument();
    expect(screen.getByText("Content Creation")).toBeInTheDocument();
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    expect(screen.queryByRole("button", { name: /skip/i })).not.toBeInTheDocument();
  });
});

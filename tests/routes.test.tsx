import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import AboutPage from "@/app/about/page";
import HomePage from "@/app/page";
import LearningPage from "@/app/learning/page";
import WorkPage from "@/app/work/page";

describe("portfolio route shells", () => {
  it.each([
    [HomePage, "Muhammad Farooque", "Learning across tech. Building in public."],
    [WorkPage, "Work in progress", "Support, security, software, and AI-powered media"],
    [LearningPage, "Learning in public", "Cybersecurity, AI development, and Virtual University student life"],
    [AboutPage, "A practical learner across disciplines", "technical support, cybersecurity, AI-assisted development, and content systems"],
  ])("renders an honest purpose for each route", (Page, heading, purpose) => {
    render(<Page />);

    expect(screen.getByRole("heading", { level: 1, name: heading })).toBeInTheDocument();
    expect(screen.getByText(new RegExp(purpose, "i"))).toBeInTheDocument();
  });

  it("publishes the preferred contact channels", () => {
    render(<AboutPage />);

    expect(screen.getByRole("link", { name: "Call Muhammad Farooque" })).toHaveAttribute(
      "href",
      "tel:+923123047675",
    );
    expect(
      screen.getByRole("link", { name: "Email Muhammad Farooque on Gmail" }),
    ).toHaveAttribute("href", "mailto:muhammadfarooquerajput72@gmail.com");
    expect(screen.getByText("muhammadfarooquerajput72@gmail.com")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Open Muhammad Farooque on LinkedIn" })).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/muhammad-farooque-4b7bb4387/",
    );
    expect(screen.getByRole("link", { name: "Open Muhammad Farooque on Instagram" })).toHaveAttribute(
      "href",
      expect.stringContaining("instagram.com/muhammad_far00que"),
    );
    expect(screen.getByRole("link", { name: "Open Muhammad Farooque on GitHub" })).toHaveAttribute(
      "href",
      "https://github.com/muhammadfarooquerajput72-we",
    );
  });

  it("shows education, experience, and deduplicated credentials", () => {
    const about = render(<AboutPage />);
    expect(screen.getByText("Virtual University of Pakistan (VU)")).toBeInTheDocument();
    about.unmount();

    const work = render(<WorkPage />);
    expect(screen.getByText("YouTube Content & Digital Platform Manager")).toBeInTheDocument();
    expect(screen.getByText("Junior IT Support Assistant")).toBeInTheDocument();
    work.unmount();

    render(<LearningPage />);
    expect(screen.getAllByText("C++ Essentials 1")).toHaveLength(1);
    expect(screen.getAllByText("Introduction to Cybersecurity")).toHaveLength(1);
    expect(screen.getByText("CCNA: Introduction to Networks")).toBeInTheDocument();
  });
});

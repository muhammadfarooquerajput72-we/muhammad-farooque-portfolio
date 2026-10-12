import { describe, expect, it } from "vitest";

import { journalEntries } from "@/content/journal";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";
import type { Pillar, PortfolioProject, ProjectStatus } from "@/types/content";

describe("portfolio content contracts", () => {
  it("keeps the profile grounded in the approved four-pillar position", () => {
    expect(profile.positioning).toBe("Learning across tech. Building in public.");
    expect(profile.pillars.map((pillar) => pillar.id)).toEqual([
      "support",
      "secure",
      "build",
      "create",
    ]);
  });

  it("uses only valid project statuses and pillars", () => {
    const statuses: ProjectStatus[] = ["completed", "in-progress", "planned"];
    const pillars: Pillar[] = ["support", "secure", "build", "create"];

    for (const project of projects) {
      expect(statuses).toContain(project.status);
      expect(pillars).toContain(project.pillar);
    }
  });

  it("keeps unfinished evidence explicit", () => {
    for (const project of projects.filter(({ status }) => status !== "completed")) {
      expect(project.evidence.every(({ status }) => status !== "verified")).toBe(true);
    }
  });

  it("exports learning entries independently from professional projects", () => {
    expect(Array.isArray(journalEntries)).toBe(true);
  });
});

const validProject: PortfolioProject = {
  slug: "valid-project",
  title: "Valid project",
  pillar: "build",
  summary: "A valid fixture.",
  status: "planned",
  problem: "A test problem.",
  contribution: [],
  evidence: [],
  tools: [],
};

void validProject;

// @ts-expect-error Invalid pillars must fail TypeScript validation.
const invalidPillar: Pillar = "marketing";

// @ts-expect-error Invalid project statuses must fail TypeScript validation.
const invalidStatus: ProjectStatus = "published";

void invalidPillar;
void invalidStatus;

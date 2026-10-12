export type Pillar = "support" | "secure" | "build" | "create";

export type ProjectStatus = "completed" | "in-progress" | "planned";

export type EvidenceStatus = "verified" | "pending";

export type PortfolioEvidence = {
  label: string;
  status: EvidenceStatus;
  value: string;
};

export type PortfolioProject = {
  slug: string;
  title: string;
  pillar: Pillar;
  summary: string;
  status: ProjectStatus;
  problem: string;
  contribution: string[];
  evidence: PortfolioEvidence[];
  tools: string[];
};

export type ProfilePillar = {
  id: Pillar;
  label: string;
  description: string;
};

export type Profile = {
  name: string;
  location: string;
  positioning: string;
  pillars: ProfilePillar[];
};

export type JournalTopic =
  | "cybersecurity"
  | "ai-development"
  | "vu-student-life"
  | "experiments";

export type JournalEntry = {
  slug: string;
  title: string;
  summary: string;
  status: "draft" | "published";
  topics: JournalTopic[];
};

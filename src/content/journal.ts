import type { JournalEntry } from "@/types/content";

export const journalEntries = [
  {
    slug: "building-an-honest-portfolio",
    title: "Building an honest multidisciplinary portfolio",
    summary:
      "Notes on connecting several developing skills without presenting exploration as expertise.",
    status: "draft",
    topics: ["ai-development", "experiments"],
  },
] as const satisfies readonly JournalEntry[];

import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

import { describe, expect, it } from "vitest";

const assets = [
  {
    path: "public/brand/muhammad-farooque-profile.png",
    sha256: "53DA7E741BE7477601AC7C84926F604347BF02685FD2E77CA910F958EA3A3D71",
  },
  {
    path: "public/brand/candidate-b-banner.png",
    sha256: "D5BBE2AC2020B523E314B3D3CF45ABE2345C52A12D9E10C7CF7E5C6E77B7B4C3",
  },
] as const;

describe("approved brand assets", () => {
  it.each(assets)("keeps $path byte-identical to its approved source", ({ path, sha256 }) => {
    const bytes = readFileSync(resolve(process.cwd(), path));
    const actual = createHash("sha256").update(bytes).digest("hex").toUpperCase();

    expect(actual).toBe(sha256);
  });
});

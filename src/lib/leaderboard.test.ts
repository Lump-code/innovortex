import { describe, expect, it } from "vitest";
import { rankEntries, splitPodium } from "./leaderboard";

const e = (name: string, points: number) => ({ name, cohort: "Web", points });

describe("leaderboard ranking", () => {
  it("puts the three highest scores on the podium in order", () => {
    const { podium, rest } = splitPodium(rankEntries([e("C", 10), e("A", 30), e("D", 5), e("B", 20)]));
    expect(podium.map((p) => p.name)).toEqual(["A", "B", "C"]);
    expect(rest.map((p) => [p.rank, p.name])).toEqual([[4, "D"]]);
  });

  it("gives tied scores the same rank", () => {
    const ranked = rankEntries([e("A", 30), e("B", 30), e("C", 10)]);
    expect(ranked.map((r) => r.rank)).toEqual([1, 1, 3]);
  });
});

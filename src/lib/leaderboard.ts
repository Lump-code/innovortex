export type Entry = { name: string; cohort: string; points: number };
export type RankedEntry = Entry & { rank: number };

/** Sort by points (highest first) and assign 1-based ranks; ties share a rank. */
export function rankEntries(entries: Entry[]): RankedEntry[] {
  const sorted = [...entries].sort((a, b) => b.points - a.points);
  let lastPoints: number | null = null;
  let lastRank = 0;
  return sorted.map((e, i) => {
    const rank = e.points === lastPoints ? lastRank : i + 1;
    lastPoints = e.points;
    lastRank = rank;
    return { ...e, rank };
  });
}

/** Split ranked entries into the podium (top three) and everyone else. */
export function splitPodium(ranked: RankedEntry[]) {
  return { podium: ranked.slice(0, 3), rest: ranked.slice(3) };
}

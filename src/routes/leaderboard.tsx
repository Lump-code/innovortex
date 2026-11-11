import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { RiseLines } from "@/components/site/RiseLines";
import { LEADERBOARD } from "@/data/site";
import { rankEntries, splitPodium, type RankedEntry } from "@/lib/leaderboard";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/leaderboard")({
  head: () => ({
    meta: [
      { title: "Leaderboard — TechNeeds IGDTUW" },
      { name: "description", content: "Top performers across TechNeeds IGDTUW mentorship cohorts." },
      { property: "og:title", content: "Leaderboard — TechNeeds IGDTUW" },
      { property: "og:description", content: "See who leads the TechNeeds cohorts this season." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LeaderboardPage,
});

const fmt = new Intl.NumberFormat("en-IN");
const pad = (n: number) => String(n).padStart(2, "0");

const STEP: Record<number, string> = {
  1: "h-64 md:h-[22rem]",
  2: "h-48 md:h-64",
  3: "h-36 md:h-48",
};

function PodiumStep({ entry, place, delay }: { entry: RankedEntry; place: number; delay: number }) {
  return (
    <div className="flex flex-col justify-end">
      <div className="mb-5 animate-[fade-up_1s_var(--ease-out-expo)_both]" style={{ animationDelay: `${delay + 400}ms` }}>
        <p className={cn("font-medium uppercase leading-tight", place === 1 ? "text-[clamp(1.05rem,2vw,1.75rem)]" : "text-[clamp(0.9rem,1.5vw,1.25rem)]")}>
          {entry.name}
        </p>
        <p className="mt-1 text-[12px] uppercase text-muted-foreground md:text-[13px]">{entry.cohort}</p>
        <p className="mt-2 label-caps tabular-nums">{fmt.format(entry.points)} pts</p>
      </div>
      <div
        className={cn(
          "relative origin-bottom animate-[podium-rise_1.1s_var(--ease-out-expo)_both] border-t bg-surface",
          place === 1 ? "border-foreground" : "border-hairline",
          STEP[place],
        )}
        style={{ animationDelay: `${delay}ms` }}
      >
        <span
          className={cn(
            "absolute left-3 top-2 font-medium leading-none tracking-[-0.04em] md:left-5 md:top-4",
            place === 1 ? "text-[clamp(4rem,10vw,9rem)] text-foreground" : "text-[clamp(3rem,7vw,6.5rem)] text-display",
          )}
        >
          {pad(place)}
        </span>
      </div>
    </div>
  );
}

function LeaderboardPage() {
  const { podium, rest } = splitPodium(rankEntries(LEADERBOARD));
  const [first, second, third] = podium;

  return (
    <>
      <section className="page-gutter pb-16 pt-36 md:pt-44">
        <p className="label-eyebrow mb-4">(Sample standings — live scores coming soon)</p>
        <RiseLines className="display-xl" lines={[{ text: "Leader" }, { text: "board", className: "pl-[1.1em]" }]} />
      </section>

      <section aria-label="Top three" className="page-gutter">
        <div className="grid grid-cols-3 items-end gap-3 border-b border-hairline md:gap-6 lg:mr-[8%]">
          {second && <PodiumStep entry={second} place={2} delay={150} />}
          {first && <PodiumStep entry={first} place={1} delay={0} />}
          {third && <PodiumStep entry={third} place={3} delay={300} />}
        </div>
      </section>

      <section aria-label="All participants" className="page-gutter pb-16 pt-28">
        <div className="lg:mr-[8%]">
          <div className="grid grid-cols-[3rem_1fr_auto] gap-4 pb-4 label-eyebrow md:grid-cols-[6rem_1fr_16rem_8rem]">
            <span>Rank</span>
            <span>Participant</span>
            <span className="hidden md:block">Cohort</span>
            <span className="text-right">Points</span>
          </div>
          <ol className="border-t border-hairline">
            {rest.map((e, i) => (
              <Reveal as="li" key={e.name} delay={i * 50} className="border-b border-hairline">
                <div className="group grid grid-cols-[3rem_1fr_auto] items-baseline gap-4 py-6 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:translate-x-3 md:grid-cols-[6rem_1fr_16rem_8rem] md:py-8">
                  <span className="text-[13px] tabular-nums text-muted-foreground">{pad(e.rank)}</span>
                  <span className="display-md text-display transition-colors duration-500 group-hover:text-foreground">
                    {e.name}
                  </span>
                  <span className="hidden text-[13px] uppercase text-muted-foreground md:block">{e.cohort}</span>
                  <span className="text-right label-caps tabular-nums">{fmt.format(e.points)}</span>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}

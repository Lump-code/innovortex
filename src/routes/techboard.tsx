import { createFileRoute, Link } from "@tanstack/react-router";
import { Arrow } from "@/components/site/Arrow";
import { CohortList } from "@/components/site/CohortList";
import { Reveal } from "@/components/site/Reveal";
import { RiseLines } from "@/components/site/RiseLines";
import { CONTACT, COURSES, STATS } from "@/data/site";

export const Route = createFileRoute("/techboard")({
  head: () => ({
    meta: [
      { title: "Techboard — TechNeeds IGDTUW" },
      {
        name: "description",
        content: "Join TechNeeds as a mentee or mentor and explore all six mentorship cohorts.",
      },
      { property: "og:title", content: "Techboard — TechNeeds IGDTUW" },
      { property: "og:description", content: "Mentee, mentor or new here — find your place at TechNeeds." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TechboardPage,
});

const PATHS = [
  {
    label: "Mentee",
    note: "Already learning with a cohort",
    action: "Open your board",
    to: "/profile" as const,
  },
  {
    label: "Mentor",
    note: "Guiding a cohort this season",
    action: "Open mentor board",
    to: "/profile" as const,
  },
  {
    label: "New person",
    note: "Want to join TechNeeds",
    action: "Say hello on WhatsApp",
    href: CONTACT.whatsapp,
  },
];

function TechboardPage() {
  return (
    <>
      <section className="page-gutter pb-24 pt-36 md:pt-44">
        <RiseLines className="display-hero" lines={[{ text: "Tech" }, { text: "board", className: "pl-[0.9em]" }]} />
        <div className="mt-16 grid gap-10 md:mt-24 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <p className="label-eyebrow mb-2">(Status)</p>
            <p className="body-lead">
              Oops, you are not associated with TechNeeds yet. Already joined, or want to join? Pick the path
              that fits you.
            </p>
          </Reveal>
          <Reveal className="md:col-span-5 md:col-start-8 md:text-right" delay={120}>
            <p className="label-eyebrow mb-2">(Already joined? / Want to join?)</p>
            <p className="label-caps">Three ways in — one community</p>
          </Reveal>
        </div>
      </section>

      <section aria-label="Choose your path" className="page-gutter">
        <ul className="border-t border-hairline lg:mr-[8%]">
          {PATHS.map((p, i) => {
            const body = (
              <div className="group flex items-center justify-between gap-6 py-10 md:py-14">
                <div className="flex items-baseline gap-6 md:gap-12">
                  <span className="text-[12px] tabular-nums text-muted-foreground md:text-[14px]">0{i + 1}</span>
                  <span className="text-[clamp(2.1rem,6.2vw,5.5rem)] font-medium uppercase leading-[0.95] tracking-[-0.03em] text-display transition-[color,transform] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-4 group-hover:text-foreground md:group-hover:translate-x-8">
                    {p.label}
                  </span>
                </div>
                <div className="hidden text-right md:block">
                  <p className="text-[13px] uppercase text-muted-foreground">{p.note}</p>
                  <p className="link-arrow mt-1 text-[14px]">
                    <span className="link-arrow-label">{p.action}</span>
                    <Arrow className="link-arrow-icon" />
                  </p>
                </div>
                <Arrow className="h-6 w-6 shrink-0 -rotate-45 transition-transform duration-700 group-hover:rotate-0 md:hidden" />
              </div>
            );
            return (
              <Reveal as="li" key={p.label} delay={i * 80} className="border-b border-hairline">
                {"to" in p && p.to ? (
                  <Link to={p.to} className="block link-arrow w-full" aria-label={`${p.label}: ${p.action}`}>
                    {body}
                  </Link>
                ) : (
                  <a href={p.href} target="_blank" rel="noopener noreferrer" className="block link-arrow w-full" aria-label={`${p.label}: ${p.action}`}>
                    {body}
                  </a>
                )}
              </Reveal>
            );
          })}
        </ul>
      </section>

      <section className="page-gutter pb-8 pt-32 md:pt-44">
        <ul className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4 lg:mr-[8%]">
          {STATS.map((s, i) => (
            <Reveal as="li" key={s.label} delay={i * 80} className="border-t border-hairline pt-5">
              <span className="block text-[clamp(2.25rem,4.6vw,4rem)] font-medium leading-none tracking-[-0.03em] text-display">
                {s.value}
              </span>
              <span className="mt-3 block label-caps">{s.label}</span>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="pt-32 md:pt-44">
        <Reveal className="page-gutter mb-12">
          <p className="label-eyebrow mb-4">(On the board)</p>
          <h2 className="display-xl">Cohorts</h2>
        </Reveal>
        <div className="page-gutter lg:[&>div]:mr-[8%]">
          <CohortList courses={COURSES} compact />
        </div>
      </section>
    </>
  );
}

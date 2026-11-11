import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { RiseLines } from "@/components/site/RiseLines";
import { departments, type TeamMember } from "@/data/team";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Meet Our Team — TechNeeds IGDTUW" },
      {
        name: "description",
        content: "The founders, leads and nine departments behind TechNeeds IGDTUW.",
      },
      { property: "og:title", content: "Meet Our Team — TechNeeds IGDTUW" },
      { property: "og:description", content: "Founders, leads, events, media, content, PR, sponsorship, social and tech." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TeamPage,
});

function MemberLinks({ m }: { m: TeamMember }) {
  const links = [
    { label: "Instagram", href: m.instagram },
    { label: "LinkedIn", href: m.linkedin },
    { label: "X", href: m.x },
  ].filter((l): l is { label: string; href: string } => Boolean(l.href));

  if (links.length === 0) {
    return <p className="text-[12px] uppercase text-muted-foreground">Socials not listed</p>;
  }
  return (
    <ul className="flex flex-wrap gap-x-5 gap-y-1 text-[12px] font-medium uppercase md:text-[13px]">
      {links.map((l) => (
        <li key={l.label}>
          <a
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline"
            aria-label={`${m.name} on ${l.label}`}
          >
            {l.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

function TeamPage() {
  const [activeId, setActiveId] = useState(departments[0]?.id ?? "");
  const activeIndex = Math.max(0, departments.findIndex((d) => d.id === activeId));
  const dept = departments[activeIndex];
  if (!dept) return null;

  return (
    <section className="page-gutter grid gap-x-12 pb-24 pt-32 md:pt-40 lg:grid-cols-12 lg:pt-0">
      <aside className="min-w-0 self-start lg:sticky lg:top-0 lg:col-span-5 lg:flex lg:h-[100svh] lg:flex-col lg:justify-between lg:pb-10 lg:pt-36">
        <RiseLines className="display-xl" lines={[{ text: "Meet" }, { text: "our team", className: "pl-[0.9em]" }]} />

        <nav aria-label="Departments" className="mt-12 lg:mt-0">
          <ul className="-mx-1 flex gap-x-6 overflow-x-auto px-1 pb-3 lg:flex-col lg:gap-y-1 lg:overflow-visible lg:pb-0">
            {departments.map((d, i) => {
              const active = d.id === activeId;
              return (
                <li key={d.id} className="shrink-0">
                  <button
                    type="button"
                    onClick={() => setActiveId(d.id)}
                    aria-pressed={active}
                    className={cn(
                      "group flex items-baseline gap-4 py-1 label-caps transition-colors duration-500",
                      active ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    <span className="text-[11px] tabular-nums">0{i + 1}</span>
                    <span className="link-underline" data-active={active}>
                      {d.name}
                    </span>
                    <span className="text-[11px] tabular-nums text-muted-foreground">{d.members.length}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>

      <div className="mt-16 min-w-0 lg:col-span-7 lg:mt-0 lg:pt-[calc(9rem+1px)]">
        <div key={dept.id} className="flex items-baseline justify-between border-b border-hairline pb-4">
          <h2 className="overflow-hidden display-md">
            <span className="line-rise">{dept.name}</span>
          </h2>
          <span className="label-eyebrow">
            {String(activeIndex + 1).padStart(2, "0")} / {String(departments.length).padStart(2, "0")}
          </span>
        </div>

        <ul key={`${dept.id}-grid`} className="mt-12 grid grid-cols-2 gap-x-5 gap-y-14 md:gap-x-8 md:[&>li:nth-child(even)]:translate-y-24">
          {dept.members.map((m, i) => (
            <li key={m.name} className="animate-[fade-up_0.9s_var(--ease-out-expo)_both]" style={{ animationDelay: `${i * 90}ms` }}>
              <figure>
                <div
                  className="aspect-[4/5] overflow-hidden rounded-[6px] bg-surface animate-clip-reveal"
                  style={{ animationDelay: `${i * 90}ms` }}
                >
                  <img
                    src={m.image}
                    alt={m.name}
                    loading="lazy"
                    className="h-full w-full object-cover grayscale-[15%] transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.06]"
                  />
                </div>
                <figcaption className="mt-4 space-y-1.5">
                  <p className="text-[15px] font-medium uppercase md:text-[16px]">{m.name}</p>
                  <p className="text-[12px] uppercase text-muted-foreground md:text-[13px]">{m.role}</p>
                  <MemberLinks m={m} />
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
        <div className="h-24" aria-hidden="true" />
      </div>
    </section>
  );
}

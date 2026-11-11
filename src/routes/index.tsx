import { createFileRoute } from "@tanstack/react-router";
import aboutImage from "@/assets/glimps-03.jpg.asset.json";
import { Arrow } from "@/components/site/Arrow";
import { ArrowLink } from "@/components/site/ArrowLink";
import { CohortList } from "@/components/site/CohortList";
import { GlimpsMarquee } from "@/components/site/GlimpsMarquee";
import { Reveal } from "@/components/site/Reveal";
import { RiseLines } from "@/components/site/RiseLines";
import { TestimonialOrbit } from "@/components/site/TestimonialOrbit";
import { Link } from "@tanstack/react-router";
import { COURSES, OFFERINGS, STATS, TESTIMONIALS } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TechNeeds IGDTUW — Upgrade Yourself" },
      {
        name: "description",
        content:
          "A student-led tech community at IGDTUW: six mentorship cohorts, hackathons, speaker sessions and 1200+ trained mentees.",
      },
      { property: "og:title", content: "TechNeeds IGDTUW — Upgrade Yourself" },
      {
        property: "og:description",
        content: "Mentorship cohorts, hackathons and speaker sessions for IGDTUW students.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function SectionHeading({ eyebrow, title, id }: { eyebrow: string; title: string; id?: string }) {
  return (
    <Reveal className="page-gutter mb-14 md:mb-20">
      <p className="label-eyebrow mb-4">{eyebrow}</p>
      <h2 id={id} className="display-xl max-w-[14ch]">
        {title}
      </h2>
    </Reveal>
  );
}

function Hero() {
  return (
    <section className="page-gutter relative flex min-h-[100svh] flex-col pb-6 pt-32 md:pt-[8.5rem]">
      <div className="w-fit">
        <RiseLines
          className="display-hero"
          lines={[{ text: "Upgrade" }, { text: "Yourself", className: "pl-[0.62em]" }]}
        />
        <p className="mt-4 overflow-hidden text-right label-caps md:mt-5">
          <span className="line-rise" style={{ animationDelay: "520ms" }}>
            Based in IGDTUW, Delhi
          </span>
        </p>
      </div>

      <div className="mt-16 flex flex-1 items-center md:mt-0 md:justify-end">
        <p
          className="max-w-[26rem] animate-[fade-up_1s_var(--ease-out-expo)_0.8s_both] label-caps md:text-right"
        >
          A student-led community for tech enthusiasts — from beginners to experts
        </p>
      </div>

      <div className="mt-12 grid animate-[fade-up_1s_var(--ease-out-expo)_1s_both] grid-cols-1 items-end gap-6 sm:grid-cols-3 md:mt-0">
        <div className="justify-self-start">
          <ArrowLink href="#about">Know more</ArrowLink>
        </div>
        <div className="justify-self-start sm:justify-self-center">
          <ArrowLink href="#mentorship">Get started</ArrowLink>
        </div>
        <div className="hidden gap-2 justify-self-end sm:flex">
          {["#about", "#mentorship"].map((h, i) => (
            <a
              key={h}
              href={h}
              aria-label={i === 0 ? "Scroll to About us" : "Scroll to cohorts"}
              className="flex h-7 w-7 items-center justify-center rounded-full bg-display text-inverse-foreground transition-transform duration-500 hover:translate-y-1"
            >
              <Arrow direction="down" className="h-3 w-3" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="page-gutter scroll-mt-10 py-32 md:py-48">
      <div className="grid items-start gap-12 md:grid-cols-12">
        <Reveal className="md:col-span-4 md:col-start-2 md:justify-self-end">
          <img
            src={aboutImage.url}
            alt="TechNeeds members together at an event"
            loading="lazy"
            className="aspect-square w-56 rounded-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-105 md:w-60"
          />
        </Reveal>
        <Reveal className="md:col-span-5 md:col-start-7" delay={120}>
          <p className="label-eyebrow mb-2">(About us)</p>
          <p className="body-lead">
            At TechNeeds, we’re passionate about technology and committed to empowering individuals with
            knowledge. Our community serves as a vibrant hub for tech enthusiasts, from beginners to experts,
            offering a comprehensive destination for all things tech. IGDTUW students’ first choice.
          </p>
          <Link to="/team" className="pill mt-6">
            Meet the team
          </Link>
        </Reveal>
      </div>

      <ul className="mt-32 grid grid-cols-2 gap-x-6 gap-y-14 md:mt-44 md:grid-cols-4">
        {STATS.map((s, i) => (
          <Reveal as="li" key={s.label} delay={i * 90} className="border-t border-hairline pt-5">
            <span className="block text-[clamp(2.75rem,6vw,5.5rem)] font-medium leading-none tracking-[-0.03em] text-display">
              {s.value}
            </span>
            <span className="mt-3 block label-caps">{s.label}</span>
          </Reveal>
        ))}
      </ul>

      <div className="mt-32 grid gap-16 md:mt-44 md:grid-cols-12">
        <Reveal className="md:col-span-4">
          <p className="label-eyebrow mb-2">(Our mission)</p>
          <p className="body-lead">
            To be the go-to resource for anyone seeking to understand, explore, and stay updated on the
            ever-evolving world of technology.
          </p>
        </Reveal>
        <Reveal className="md:col-span-7 md:col-start-6" delay={120}>
          <p className="label-eyebrow mb-4">(What we offer)</p>
          <ol>
            {OFFERINGS.map((o, i) => (
              <li
                key={o}
                className="group flex items-baseline gap-6 border-t border-hairline py-4 last:border-b md:gap-10"
              >
                <span className="text-[12px] tabular-nums text-muted-foreground">0{i + 1}</span>
                <span className="display-md text-display transition-[color,transform] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-3 group-hover:text-foreground">
                  {o}
                </span>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}

function Index() {
  return (
    <>
      <Hero />
      <About />

      <section id="mentorship" className="scroll-mt-10 py-24 md:py-32">
        <SectionHeading eyebrow="(Six cohorts, led by seniors)" title="Our mentorship cohorts" />
        <div className="page-gutter">
          <div className="lg:mr-[8%]">
            <CohortList courses={COURSES} />
          </div>
          <Reveal className="mt-14">
            <Link to="/techboard" className="pill">
              View all cohorts <sup className="text-[10px]">{COURSES.length}</sup>
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="py-24 md:py-32" aria-labelledby="glimpse-title">
        <SectionHeading eyebrow="(Moments from our events)" title="Glimpse" id="glimpse-title" />
        <GlimpsMarquee />
      </section>

      <section className="py-24 md:py-32" aria-labelledby="students-title">
        <SectionHeading eyebrow="(In their words)" title="What our students say" id="students-title" />
        <TestimonialOrbit items={TESTIMONIALS} />
      </section>
    </>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { RiseLines } from "@/components/site/RiseLines";
import { Reveal } from "@/components/site/Reveal";
import { TestimonialOrbit } from "@/components/site/TestimonialOrbit";
import { FAQS, TESTIMONIALS } from "@/data/site";
import { useHoverIntentAccordion } from "@/hooks/use-hover-intent-accordion";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — TechNeeds IGDTUW" },
      {
        name: "description",
        content: "Answers to common questions about TechNeeds IGDTUW, its mentorship programs and how to reach us.",
      },
      { property: "og:title", content: "FAQ — TechNeeds IGDTUW" },
      { property: "og:description", content: "What TechNeeds is, what we offer and how to contact us." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  const { openIndex, getHandlers } = useHoverIntentAccordion(1000);

  return (
    <>
      <section className="page-gutter pb-20 pt-36 md:pt-44">
        <p className="label-eyebrow mb-4">(Rest your cursor on a question)</p>
        <RiseLines className="display-xl" lines={[{ text: "Frequently" }, { text: "asked questions", className: "md:pl-[1.2em]" }]} />
      </section>

      <section className="page-gutter pb-32">
        <ul className="border-t border-hairline lg:mr-[8%]">
          {FAQS.map((f, i) => {
            const open = openIndex === i;
            const id = `faq-${i}`;
            return (
              <Reveal as="li" key={f.q} delay={i * 70} className="border-b border-hairline">
                <button
                  type="button"
                  {...getHandlers(i)}
                  aria-expanded={open}
                  aria-controls={`${id}-panel`}
                  id={`${id}-q`}
                  className="group flex w-full items-baseline gap-6 py-8 text-left md:gap-12 md:py-10"
                >
                  <span className="w-8 shrink-0 text-[12px] tabular-nums text-muted-foreground md:text-[14px]">0{i + 1}</span>
                  <span
                    className={cn(
                      "link-underline display-md transition-colors duration-500",
                      open ? "text-foreground" : "text-display group-hover:text-foreground",
                    )}
                    data-active={open}
                  >
                    {f.q}
                  </span>
                  <span
                    aria-hidden="true"
                    className={cn(
                      "ml-auto text-[28px] font-normal leading-none transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]",
                      open && "rotate-45",
                    )}
                  >
                    +
                  </span>
                </button>
                <div
                  id={`${id}-panel`}
                  role="region"
                  aria-labelledby={`${id}-q`}
                  className={cn(
                    "grid transition-[grid-template-rows,opacity] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
                    open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="body-lead max-w-2xl pb-10 pl-14 md:pl-20">{f.a}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </section>

      <section className="py-24" aria-labelledby="faq-students">
        <Reveal className="page-gutter mb-10">
          <p className="label-eyebrow mb-4">(In their words)</p>
          <h2 id="faq-students" className="display-xl">What our students say</h2>
        </Reveal>
        <TestimonialOrbit items={TESTIMONIALS} />
      </section>
    </>
  );
}

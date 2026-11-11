import { GLIMPS } from "@/data/site";

/** Seamless, continuously drifting strip of event photos. */
export function GlimpsMarquee() {
  const loop = [...GLIMPS, ...GLIMPS];
  return (
    <div className="overflow-x-clip border-y border-hairline py-10 md:py-14">
      <ul className="flex w-max animate-marquee items-center">
        {loop.map((g, i) => (
          <li key={i} className="shrink-0 pr-6 md:pr-10" aria-hidden={i >= GLIMPS.length}>
            <img
              src={g.src}
              alt={i < GLIMPS.length ? g.alt : ""}
              loading={i < 6 ? "eager" : "lazy"}
              tabIndex={i < GLIMPS.length ? 0 : -1}
              data-cursor="link"
              className="relative h-40 w-auto rounded-[6px] object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:z-10 hover:scale-[1.28] focus:scale-[1.28] md:h-60"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

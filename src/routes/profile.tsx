import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/techneeds-logo-light.png.asset.json";
import { ArrowLink } from "@/components/site/ArrowLink";
import { RiseLines } from "@/components/site/RiseLines";

export const Route = createFileRoute("/profile")({
  head: () => ({
    meta: [
      { title: "Profile — Coming Soon · TechNeeds IGDTUW" },
      { name: "description", content: "Personal TechNeeds profiles to track your mentorship journey are coming soon." },
      { property: "og:title", content: "Profile — Coming Soon · TechNeeds IGDTUW" },
      { property: "og:description", content: "Track your TechNeeds mentorship journey — launching soon." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: ProfilePage,
});

const R = 46;
const C = 2 * Math.PI * R;

function useLoopingPercent() {
  const [p, setP] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setP(72);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const cycle = 5200;
    const tick = (now: number) => {
      const t = ((now - start) % cycle) / cycle;
      const eased = t < 0.85 ? 1 - Math.pow(1 - t / 0.85, 3) : 1;
      setP(Math.round(eased * 100));
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);
  return p;
}

function ProfilePage() {
  const p = useLoopingPercent();

  return (
    <section className="page-gutter flex min-h-[100svh] flex-col items-center justify-center pb-16 pt-32 text-center">
      <div className="relative h-48 w-48 md:h-56 md:w-56" role="img" aria-label="TechNeeds logo loading">
        <svg viewBox="0 0 100 100" className="absolute inset-0 -rotate-90" fill="none">
          <circle cx="50" cy="50" r={R} className="stroke-hairline" strokeWidth="0.4" />
          <circle
            cx="50"
            cy="50"
            r={R}
            className="stroke-foreground"
            strokeWidth="0.6"
            strokeLinecap="round"
            strokeDasharray={C}
            strokeDashoffset={C * (1 - p / 100)}
          />
        </svg>
        <div className="absolute inset-0 animate-spin-slow">
          <span className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground" />
        </div>
        <img
          src={logo.url}
          alt=""
          className="absolute inset-[18%] h-[64%] w-[64%] animate-breathe object-contain"
        />
      </div>

      <p className="mt-8 label-caps tabular-nums text-muted-foreground" aria-live="off">
        {String(p).padStart(2, "0")}%
      </p>

      <RiseLines className="display-hero mt-10" delay={250} lines={[{ text: "Coming" }, { text: "soon" }]} />

      <p className="mt-10 max-w-md label-caps animate-[fade-up_1s_var(--ease-out-expo)_0.9s_both]">
        We’re building a place to track your mentorship journey. Stay tuned.
      </p>
      <div className="mt-10 animate-[fade-up_1s_var(--ease-out-expo)_1.1s_both]">
        <ArrowLink to="/">Back to home</ArrowLink>
      </div>
    </section>
  );
}

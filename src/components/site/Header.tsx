import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logoLight from "@/assets/techneeds-logo-light.png.asset.json";
import logoDark from "@/assets/techneeds-logo.png.asset.json";
import { NAV_LINKS, SOCIALS, CONTACT } from "@/data/site";
import { cn } from "@/lib/utils";
import { SocialLink } from "./SocialLink";

function Brand({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link to="/" className="group flex items-center gap-3 text-[18px] font-medium leading-none" aria-label="TechNeeds home">
      <img
        src={inverse ? logoDark.url : logoLight.url}
        alt=""
        width={36}
        height={36}
        className={cn(
          "h-9 w-9 object-contain transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:rotate-[24deg]",
        )}
      />
      <span className="link-underline">TechNeeds</span>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 160);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header className="page-gutter absolute inset-x-0 top-0 z-40 flex items-center justify-between pt-6 md:pt-8">
        <Brand />
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-9 label-caps">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="link-underline"
                  activeOptions={{ exact: true }}
                  activeProps={{ "data-active": "true", "aria-current": "page" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="label-caps flex items-center gap-1 lg:hidden"
          aria-expanded={open}
          aria-controls="site-menu"
        >
          <span className="link-underline">Menu</span>
          <span aria-hidden="true">+</span>
        </button>
      </header>

      {/* Floating menu trigger once the header has scrolled away. */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
        className={cn(
          "fixed right-[clamp(1.25rem,2.8vw,2.5rem)] top-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-inverse text-[13px] font-medium uppercase text-inverse-foreground transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-110 md:top-8",
          scrolled && !open ? "scale-100 opacity-100" : "pointer-events-none scale-0 opacity-0",
        )}
      >
        Menu
      </button>

      <div
        id="site-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className={cn(
          "page-gutter fixed inset-0 z-50 flex flex-col bg-inverse pb-8 pt-6 text-inverse-foreground transition-[clip-path] duration-[900ms] ease-[cubic-bezier(0.76,0,0.24,1)] md:pt-8",
          open ? "[clip-path:inset(0_0_0_0)]" : "pointer-events-none [clip-path:inset(0_0_100%_0)]",
        )}
      >
        <div className="flex items-center justify-between">
          <Brand inverse />
          <button type="button" onClick={() => setOpen(false)} className="label-caps link-underline">
            Close
          </button>
        </div>
        <nav aria-label="Menu" className="my-auto">
          <ul className="space-y-2">
            {NAV_LINKS.map((l, i) => (
              <li key={l.to} className="line-mask">
                <Link
                  to={l.to}
                  tabIndex={open ? 0 : -1}
                  className={cn(
                    "link-underline block w-fit text-[clamp(2.25rem,7vw,4.5rem)] font-medium uppercase leading-[1.05] tracking-[-0.02em] transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
                    open ? "translate-y-0" : "translate-y-full",
                  )}
                  style={{ transitionDelay: open ? `${200 + i * 60}ms` : "0ms" }}
                  activeOptions={{ exact: true }}
                  activeProps={{ "data-active": "true" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex flex-col gap-4 label-caps md:flex-row md:items-end md:justify-between">
          <a href={`mailto:${CONTACT.email}`} className="link-underline w-fit normal-case">
            {CONTACT.email}
          </a>
          <ul className="flex flex-wrap gap-x-8 gap-y-2">
            {SOCIALS.map((s) => (
              <li key={s.label}>
                <SocialLink {...s} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Arrow } from "./Arrow";

type Common = { children: ReactNode; className?: string };
type InternalProps = Common & { to: "/" | "/techboard" | "/team" | "/leaderboard" | "/faq" | "/profile"; href?: never };
type ExternalProps = Common & { href: string; to?: never };

/**
 * Uppercase text link with an animated underline and an arrow that turns
 * from ↗ to → on hover — the reference's "Protopie Ambassador" treatment.
 */
export function ArrowLink(props: InternalProps | ExternalProps) {
  const inner = (
    <>
      <span className="link-arrow-label">{props.children}</span>
      <Arrow className="link-arrow-icon shrink-0 translate-y-[0.05em]" />
    </>
  );
  const cls = cn("link-arrow", props.className);
  if (props.to) {
    return (
      <Link to={props.to} className={cls}>
        {inner}
      </Link>
    );
  }
  const external = /^https?:|^mailto:/.test(props.href);
  return (
    <a
      href={props.href}
      className={cls}
      {...(external && !props.href.startsWith("mailto:")
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      {inner}
    </a>
  );
}

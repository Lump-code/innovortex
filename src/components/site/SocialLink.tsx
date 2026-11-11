import { cn } from "@/lib/utils";

type SocialLinkProps = { label: string; href: string | null; className?: string };

/** Footer/menu social link. A missing URL renders a clearly marked placeholder. */
export function SocialLink({ label, href, className }: SocialLinkProps) {
  if (!href) {
    return (
      <a
        href="#"
        onClick={(e) => e.preventDefault()}
        title={`${label} link coming soon`}
        className={cn("link-underline uppercase", className)}
      >
        {label}
        <sup className="ml-1 text-[10px] text-muted-foreground">SOON</sup>
      </a>
    );
  }
  const external = !href.startsWith("mailto:");
  return (
    <a
      href={href}
      className={cn("link-underline uppercase", className)}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {label}
    </a>
  );
}

import { useEffect, useState } from "react";
import { CONTACT, SOCIALS } from "@/data/site";
import { ArrowLink } from "./ArrowLink";
import { Reveal } from "./Reveal";
import { SocialLink } from "./SocialLink";

function useDelhiTime() {
  const [time, setTime] = useState<string | null>(null);
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "2-digit",
      timeZone: "Asia/Kolkata",
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 15000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export function Footer() {
  const time = useDelhiTime();
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="page-gutter pb-8 pt-32 md:pt-48">
      <Reveal className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-7">
          <p className="label-eyebrow mb-3">(Contact)</p>
          <a
            href={`mailto:${CONTACT.email}`}
            className="link-underline display-md break-all text-foreground sm:break-normal"
          >
            {CONTACT.email}
          </a>
          <p className="mt-4">
            <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="link-underline label-caps">
              {CONTACT.phone}
            </a>
          </p>
        </div>
        <div className="md:col-span-5 md:self-end md:justify-self-end">
          <p className="label-eyebrow mb-1">Oops, almost forgot…</p>
          <ArrowLink href={CONTACT.whatsapp}>Join our WhatsApp community</ArrowLink>
        </div>
      </Reveal>

      <div className="mt-28 flex flex-col gap-6 label-caps md:mt-40 md:flex-row md:items-center md:justify-between">
        <div className="flex gap-8">
          <span>© {year} TechNeeds IGDTUW</span>
          <span className="tabular-nums text-muted-foreground md:text-foreground" suppressHydrationWarning>
            {time ? `${time} IST` : "\u00a0"}
          </span>
        </div>
        <ul className="flex flex-wrap gap-x-10 gap-y-3">
          <li>
            <SocialLink label="Contact" href={`mailto:${CONTACT.email}`} />
          </li>
          {SOCIALS.map((s) => (
            <li key={s.label}>
              <SocialLink {...s} />
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

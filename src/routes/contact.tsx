import { createFileRoute } from "@tanstack/react-router";
import { Github, Globe, Linkedin, Mail, MapPin, Phone } from "lucide-react";

import { profile } from "@/lib/portfolio-data";

const title = "Contact Sahil Gite — Full Stack & AI/ML Developer";
const description =
  "Reach Sahil Gite by email, phone or LinkedIn. Based in Nashik, India and open to full stack and AI/ML opportunities.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ContactPage,
});

const links = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/sahilgite", href: profile.linkedin },
  { icon: Github, label: "GitHub", value: "github.com/sahilgite1023", href: profile.github },
  { icon: Globe, label: "Website", value: "sahil-gite.netlify.app", href: profile.site },
];

function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-20">
      <h1 className="font-display text-4xl font-bold tracking-tight sm:text-6xl">Let&apos;s talk</h1>
      <p className="mt-4 max-w-xl text-muted-foreground">
        Recruiters and teams: I reply within a day. Happy to walk you through any project in detail.
      </p>
      <p className="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-accent">
        <MapPin className="size-4" /> {profile.location}
      </p>

      <ul className="mt-12 grid gap-px bg-border sm:grid-cols-2">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="flex items-center gap-4 bg-background p-6 transition-colors hover:bg-surface"
            >
              <l.icon className="size-5 shrink-0 text-accent" />
              <span className="min-w-0">
                <span className="block font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
                  {l.label}
                </span>
                <span className="block truncate">{l.value}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Download, Mail } from "lucide-react";

import heroArt from "@/assets/hero-grid.jpg";
import resumeAsset from "@/assets/resume.pdf.asset.json";
import { GitHubProjectsSection } from "@/components/github-projects";
import { SectionLabel } from "@/components/site-chrome";
import {
  certificates,
  education,
  experience,
  languages,
  profile,
  projects,
  skillGroups,
  stack,
  stats,
  wins,
} from "@/lib/portfolio-data";

const title = "Sahil Gite — Full Stack Developer & AI/ML Builder";
const description =
  "Full stack developer in Nashik shipping MERN web products and AI/ML systems. Internships, projects, certifications and contact details for recruiters.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border/70">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-40" />
        <img
          src={heroArt}
          alt=""
          aria-hidden="true"
          width={1600}
          height={1200}
          className="pointer-events-none absolute -right-24 top-0 h-full w-[70%] object-cover opacity-30 mix-blend-screen [mask-image:linear-gradient(to_right,transparent,black_55%)]"
        />
        <div className="relative mx-auto max-w-6xl px-5 py-20 sm:py-28">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
            Open to internships & junior roles
          </p>
          <h1 className="mt-6 font-display text-5xl font-bold leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
            Sahil <span className="text-outline">Gite</span>
          </h1>
          <p className="mt-5 max-w-xl font-mono text-sm text-accent">{profile.role}</p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            {profile.tagline}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 bg-accent px-5 py-3 font-mono text-xs uppercase tracking-[0.2em] text-accent-foreground transition-opacity hover:opacity-85"
            >
              View projects <ArrowUpRight className="size-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-border px-5 py-3 font-mono text-xs uppercase tracking-[0.2em] text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              <Mail className="size-4" /> Hire me
            </Link>
            <a
              href={resumeAsset.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-border px-5 py-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:border-accent hover:text-accent"
            >
              <Download className="size-4" /> Résumé
            </a>
          </div>
          <dl className="mt-16 grid grid-cols-2 gap-px border border-border bg-border sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-background px-5 py-6">
                <dt className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
                  {s.label}
                </dt>
                <dd className="mt-2 font-display text-3xl font-semibold text-accent">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <div className="overflow-hidden border-b border-border/70 py-4">
        <div className="marquee-track flex w-max gap-8 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
          {[...stack, ...stack].map((s, i) => (
            <span key={`${s}-${i}`} className="flex items-center gap-8">
              {s} <span className="text-accent">/</span>
            </span>
          ))}
        </div>
      </div>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <SectionLabel n="01">Capabilities</SectionLabel>
        <div className="grid gap-px bg-border md:grid-cols-3">
          {skillGroups.map((g) => (
            <div key={g.title} className="bg-background p-7">
              <h3 className="font-display text-xl font-semibold">{g.title}</h3>
              <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                {g.items.map((i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-accent">▸</span>
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20">
        <SectionLabel n="02">Selected work</SectionLabel>
        <div className="grid gap-px bg-border md:grid-cols-3">
          {projects.map((p) => (
            <Link
              key={p.title}
              to="/projects"
              className="group bg-background p-7 transition-colors hover:bg-surface"
            >
              <span className="font-mono text-xs text-accent">{p.index}</span>
              <h3 className="mt-4 font-display text-2xl font-semibold leading-tight">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.summary}</p>
              <span className="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-foreground group-hover:text-accent">
                Read more <ArrowUpRight className="size-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <GitHubProjectsSection />

      <section className="mx-auto max-w-6xl px-5 pb-20">
        <SectionLabel n="04">Experience</SectionLabel>
        <div className="space-y-px bg-border">
          {experience.map((e) => (
            <article
              key={e.company}
              className="grid gap-5 bg-background p-7 md:grid-cols-[minmax(0,1fr)_1.4fr]"
            >
              <div className="min-w-0">
                <h3 className="font-display text-xl font-semibold">{e.role}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{e.company}</p>
                <p className="mt-3 font-mono text-xs text-accent">{e.when}</p>
              </div>
              <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
                {e.points.map((p) => (
                  <li key={p} className="flex gap-3">
                    <span className="text-accent">—</span>
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20">
        <SectionLabel n="05">Education</SectionLabel>
        <div className="space-y-px bg-border">
          {education.map((e) => (
            <div
              key={e.degree}
              className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4 bg-background p-6"
            >
              <div className="min-w-0">
                <h3 className="font-display text-lg font-medium">{e.degree}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{e.school}</p>
              </div>
              <div className="shrink-0 text-right font-mono text-xs">
                <p className="text-accent">{e.score}</p>
                <p className="mt-1 text-muted-foreground">{e.when}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20">
        <SectionLabel n="06">Wins & certifications</SectionLabel>
        <div className="grid gap-px bg-border lg:grid-cols-2">
          <ul className="space-y-3 bg-background p-7 text-sm text-muted-foreground">
            {wins.map((w) => (
              <li key={w} className="flex gap-3">
                <span className="font-mono text-accent">★</span>
                {w}
              </li>
            ))}
          </ul>
          <ul className="space-y-3 bg-background p-7 text-sm">
            {certificates.map((c) => (
              <li
                key={c.name}
                className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-3 border-b border-border/60 pb-3 last:border-0"
              >
                <span className="min-w-0">
                  <span className="block truncate text-foreground">{c.name}</span>
                  <span className="text-xs text-muted-foreground">{c.issuer}</span>
                </span>
                <span className="shrink-0 font-mono text-xs text-accent">{c.year}</span>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Languages: {languages.join(" · ")}
        </p>
      </section>

      <section className="border-t border-border/70 bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-20 text-center">
          <h2 className="font-display text-3xl font-bold sm:text-5xl">
            Looking for someone who ships?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            I&apos;m available for full stack and AI/ML roles in Nashik, Pune or remote.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 bg-accent px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] text-accent-foreground transition-opacity hover:opacity-85"
          >
            Get in touch <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </section>
    </>
  );
}


import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { SectionLabel } from "@/components/site-chrome";
import { projects } from "@/lib/portfolio-data";

const title = "Projects — Sahil Gite";
const description =
  "Case studies from Sahil Gite: a MERN job portal with ATS filtering, real-time sign language detection and an ML spam email classifier.";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <h1 className="font-display text-4xl font-bold tracking-tight sm:text-6xl">Projects</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Things I designed, built and debugged — full stack products and applied machine learning.
      </p>

      <div className="mt-16 space-y-16">
        {projects.map((p) => (
          <article key={p.title}>
            <SectionLabel n={p.index}>{p.title}</SectionLabel>
            <div className="grid gap-8 md:grid-cols-[1.3fr_minmax(0,1fr)]">
              <div>
                <p className="text-lg leading-relaxed text-muted-foreground">{p.summary}</p>
                <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex gap-3">
                      <span className="text-accent">▸</span>
                      {h}
                    </li>
                  ))}
                </ul>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex items-center gap-2 border border-border px-5 py-3 font-mono text-xs uppercase tracking-[0.2em] transition-colors hover:border-accent hover:text-accent"
                >
                  {p.linkLabel} <ArrowUpRight className="size-4" />
                </a>
              </div>
              <dl className="space-y-5 border border-border p-6 font-mono text-xs">
                <div>
                  <dt className="uppercase tracking-[0.2em] text-muted-foreground">Role</dt>
                  <dd className="mt-1 text-foreground">{p.role}</dd>
                </div>
                <div>
                  <dt className="uppercase tracking-[0.2em] text-muted-foreground">Timeline</dt>
                  <dd className="mt-1 text-foreground">{p.when}</dd>
                </div>
                <div>
                  <dt className="uppercase tracking-[0.2em] text-muted-foreground">Stack</dt>
                  <dd className="mt-2 flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span key={s} className="border border-accent/40 px-2 py-1 text-accent">
                        {s}
                      </span>
                    ))}
                  </dd>
                </div>
              </dl>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
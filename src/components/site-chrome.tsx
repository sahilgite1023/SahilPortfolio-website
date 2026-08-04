import { Link } from "@tanstack/react-router";
import { profile } from "@/lib/portfolio-data";

const nav = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:flex sm:justify-between">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <span className="grid size-8 shrink-0 place-items-center border border-accent/60 font-mono text-xs text-accent">
            SG
          </span>
          <span className="truncate font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
            sahil gite
          </span>
        </Link>
        <nav className="flex shrink-0 items-center gap-1 font-mono text-xs uppercase tracking-[0.15em]">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="px-2 py-1 text-muted-foreground transition-colors hover:text-foreground sm:px-3"
              activeProps={{ className: "text-accent" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 font-mono text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} Sahil Gite — Nashik, India</span>
        <div className="flex gap-4">
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-accent">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-accent">
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} className="hover:text-accent">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

export function SectionLabel({ n, children }: { n: string; children: string }) {
  return (
    <div className="mb-8 flex items-center gap-4">
      <span className="font-mono text-xs text-accent">{n}</span>
      <h2 className="font-display text-sm font-medium uppercase tracking-[0.3em] text-foreground">
        {children}
      </h2>
      <span className="h-px flex-1 bg-border" />
    </div>
  );
}
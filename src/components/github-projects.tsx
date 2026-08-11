import * as React from "react";
import { ArrowLeft, ArrowRight, ExternalLink, GitFork, Star } from "lucide-react";

import { SectionLabel } from "@/components/site-chrome";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import {
  fetchSelectedGithubRepos,
  type ProcessedGithubRepo,
} from "@/lib/github-data";

export function GitHubProjectsSection() {
  const [repos, setRepos] = React.useState<ProcessedGithubRepo[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string | null>(null);

  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState<number>(0);
  const [count, setCount] = React.useState<number>(0);

  React.useEffect(() => {
    let mounted = true;
    setLoading(true);
    setError(null);

    fetchSelectedGithubRepos()
      .then((data) => {
        if (mounted) {
          setRepos(data);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (mounted) {
          console.error("Error fetching GitHub repositories:", err);
          setError("Unable to load GitHub projects right now.");
          setLoading(false);
        }
      });

    return () => {
      mounted = false;
    };
  }, []);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    api.on("reInit", () => {
      setCount(api.scrollSnapList().length);
      setCurrent(api.selectedScrollSnap());
    });

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <section className="mx-auto max-w-6xl px-5 pb-20">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end mb-8">
        <div>
          <SectionLabel n="03">GITHUB PROJECTS</SectionLabel>
          <p className="-mt-4 font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Selected projects from my GitHub
          </p>
        </div>

        {!loading && !error && repos.length > 0 && (
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => api?.scrollPrev()}
              aria-label="Previous GitHub projects slide"
              className="grid size-9 place-items-center rounded-md border border-border bg-background text-foreground transition-all hover:border-accent hover:text-accent hover:shadow-[0_0_12px_rgba(200,255,0,0.15)] focus:outline-none focus:ring-1 focus:ring-accent"
            >
              <ArrowLeft className="size-4" />
            </button>
            <button
              type="button"
              onClick={() => api?.scrollNext()}
              aria-label="Next GitHub projects slide"
              className="grid size-9 place-items-center rounded-md border border-border bg-background text-foreground transition-all hover:border-accent hover:text-accent hover:shadow-[0_0_12px_rgba(200,255,0,0.15)] focus:outline-none focus:ring-1 focus:ring-accent"
            >
              <ArrowRight className="size-4" />
            </button>
          </div>
        )}
      </div>

      {loading && (
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="flex flex-col justify-between rounded-lg border border-border/80 bg-background p-6 space-y-4"
            >
              <div className="space-y-3">
                <Skeleton className="h-6 w-3/4 bg-border/60" />
                <Skeleton className="h-4 w-full bg-border/40" />
                <Skeleton className="h-4 w-5/6 bg-border/40" />
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                <Skeleton className="h-6 w-16 bg-border/50" />
                <Skeleton className="h-6 w-20 bg-border/50" />
                <Skeleton className="h-6 w-14 bg-border/50" />
              </div>
              <div className="flex justify-between items-center pt-4 border-t border-border/40">
                <Skeleton className="h-4 w-20 bg-border/50" />
                <Skeleton className="h-8 w-28 bg-border/60" />
              </div>
            </div>
          ))}
        </div>
      )}

      {error && !loading && (
        <div className="rounded-lg border border-border/80 bg-background p-8 text-center">
          <p className="font-mono text-sm text-muted-foreground">{error}</p>
        </div>
      )}

      {!loading && !error && repos.length === 0 && (
        <div className="rounded-lg border border-border/80 bg-background p-8 text-center">
          <p className="font-mono text-sm text-muted-foreground">
            No selected GitHub projects available.
          </p>
        </div>
      )}

      {!loading && !error && repos.length > 0 && (
        <div>
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {repos.map((repo) => (
                <CarouselItem
                  key={repo.name}
                  className="pl-4 basis-full sm:basis-1/2 md:basis-1/3"
                >
                  <article className="group flex h-full flex-col justify-between rounded-lg border border-border/80 bg-background p-6 transition-all duration-300 hover:border-accent/60 hover:bg-surface/50 hover:shadow-lg hover:shadow-accent/5">
                    <div>
                      <h3 className="font-display text-xl font-semibold leading-snug tracking-tight text-foreground transition-colors group-hover:text-accent">
                        {repo.displayName}
                      </h3>
                      <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                        {repo.description}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-1.5">
                        {repo.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="inline-block rounded-sm border border-accent/30 bg-accent/5 px-2 py-0.5 font-mono text-[0.7rem] text-accent"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 pt-4 border-t border-border/60">
                      <div className="flex items-center gap-4 font-mono text-xs text-muted-foreground mb-4">
                        <span className="flex items-center gap-1 hover:text-accent transition-colors">
                          <Star className="size-3.5 fill-accent/20 text-accent" /> {repo.stars}
                        </span>
                        <span className="flex items-center gap-1 hover:text-accent transition-colors">
                          <GitFork className="size-3.5 text-accent" /> {repo.forks}
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-2">
                        <a
                          href={repo.htmlUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-2 font-mono text-[0.7rem] uppercase tracking-wider text-foreground transition-all hover:border-accent hover:text-accent focus:outline-none focus:ring-1 focus:ring-accent"
                        >
                          View on GitHub <ExternalLink className="size-3" />
                        </a>

                        {repo.liveDemoUrl && (
                          <a
                            href={repo.liveDemoUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-md bg-accent px-3 py-2 font-mono text-[0.7rem] uppercase tracking-wider text-accent-foreground transition-opacity hover:opacity-90 focus:outline-none focus:ring-1 focus:ring-accent"
                          >
                            Live Demo <ExternalLink className="size-3" />
                          </a>
                        )}
                      </div>
                    </div>
                  </article>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {count > 1 && (
            <div className="mt-6 flex justify-center items-center gap-2">
              {Array.from({ length: count }).map((_, index) => (
                <button
                  type="button"
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`size-2.5 rounded-full transition-all duration-300 ${
                    index === current
                      ? "w-6 bg-accent"
                      : "bg-border hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  );
}

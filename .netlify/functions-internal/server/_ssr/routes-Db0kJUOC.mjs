import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { c as ArrowUpRight, r as Mail, s as Download } from "../_libs/lucide-react.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as experience, c as projects, d as stats, f as wins, i as education, l as skillGroups, n as SectionLabel, o as languages, r as certificates, s as profile, u as stack } from "./router-CZrsLiO2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Db0kJUOC.js
var import_jsx_runtime = require_jsx_runtime();
var hero_grid_default = "/assets/hero-grid-D5GUmA0E.jpg";
var resume_pdf_asset_default = {
	version: 1,
	asset_id: "7b1a361e-fef8-4b12-9325-e4ad02b42499",
	project_id: "19563991-4621-41df-887e-ae3dd21d66af",
	url: "/__l5e/assets-v1/7b1a361e-fef8-4b12-9325-e4ad02b42499/Sahil-Gite-Resume.pdf",
	r2_key: "a/v1/19563991-4621-41df-887e-ae3dd21d66af/7b1a361e-fef8-4b12-9325-e4ad02b42499/Sahil-Gite-Resume.pdf",
	original_filename: "Sahil-Gite-Resume.pdf",
	size: 447695,
	content_type: "application/pdf",
	created_at: "2026-08-04T08:08:16Z"
};
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden border-b border-border/70",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 grid-lines opacity-40" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: hero_grid_default,
					alt: "",
					"aria-hidden": "true",
					width: 1600,
					height: 1200,
					className: "pointer-events-none absolute -right-24 top-0 h-full w-[70%] object-cover opacity-30 mix-blend-screen [mask-image:linear-gradient(to_right,transparent,black_55%)]"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto max-w-6xl px-5 py-20 sm:py-28",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-xs uppercase tracking-[0.3em] text-accent",
							children: "Open to internships & junior roles"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-6 font-display text-5xl font-bold leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl",
							children: ["Sahil ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-outline",
								children: "Gite"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-xl font-mono text-sm text-accent",
							children: profile.role
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl",
							children: profile.tagline
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 flex flex-wrap gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/projects",
									className: "inline-flex items-center gap-2 bg-accent px-5 py-3 font-mono text-xs uppercase tracking-[0.2em] text-accent-foreground transition-opacity hover:opacity-85",
									children: ["View projects ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/contact",
									className: "inline-flex items-center gap-2 border border-border px-5 py-3 font-mono text-xs uppercase tracking-[0.2em] text-foreground transition-colors hover:border-accent hover:text-accent",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-4" }), " Hire me"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: resume_pdf_asset_default.url,
									target: "_blank",
									rel: "noreferrer",
									className: "inline-flex items-center gap-2 border border-border px-5 py-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:border-accent hover:text-accent",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4" }), " Résumé"]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
							className: "mt-16 grid grid-cols-2 gap-px border border-border bg-border sm:grid-cols-4",
							children: stats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "bg-background px-5 py-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground",
									children: s.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "mt-2 font-display text-3xl font-semibold text-accent",
									children: s.value
								})]
							}, s.label))
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-hidden border-b border-border/70 py-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "marquee-track flex w-max gap-8 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground",
				children: [...stack, ...stack].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "flex items-center gap-8",
					children: [
						s,
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-accent",
							children: "/"
						})
					]
				}, `${s}-${i}`))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-5 py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
				n: "01",
				children: "Capabilities"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-px bg-border md:grid-cols-3",
				children: skillGroups.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-background p-7",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-xl font-semibold",
						children: g.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-5 space-y-2 text-sm text-muted-foreground",
						children: g.items.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-accent",
								children: "▸"
							}), i]
						}, i))
					})]
				}, g.title))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-5 pb-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
				n: "02",
				children: "Experience"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-px bg-border",
				children: experience.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "grid gap-5 bg-background p-7 md:grid-cols-[minmax(0,1fr)_1.4fr]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-xl font-semibold",
								children: e.role
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: e.company
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 font-mono text-xs text-accent",
								children: e.when
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-2 text-sm leading-relaxed text-muted-foreground",
						children: e.points.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-accent",
								children: "—"
							}), p]
						}, p))
					})]
				}, e.company))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-5 pb-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
				n: "03",
				children: "Selected work"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-px bg-border md:grid-cols-3",
				children: projects.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/projects",
					className: "group bg-background p-7 transition-colors hover:bg-surface",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-xs text-accent",
							children: p.index
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 font-display text-2xl font-semibold leading-tight",
							children: p.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-muted-foreground",
							children: p.summary
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-foreground group-hover:text-accent",
							children: ["Read more ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3.5" })]
						})
					]
				}, p.title))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-5 pb-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
				n: "04",
				children: "Education"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-px bg-border",
				children: education.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4 bg-background p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-lg font-medium",
							children: e.degree
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: e.school
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "shrink-0 text-right font-mono text-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-accent",
							children: e.score
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-muted-foreground",
							children: e.when
						})]
					})]
				}, e.degree))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-5 pb-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
					n: "05",
					children: "Wins & certifications"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-px bg-border lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-3 bg-background p-7 text-sm text-muted-foreground",
						children: wins.map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-accent",
								children: "★"
							}), w]
						}, w))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-3 bg-background p-7 text-sm",
						children: certificates.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-3 border-b border-border/60 pb-3 last:border-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block truncate text-foreground",
									children: c.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-muted-foreground",
									children: c.issuer
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "shrink-0 font-mono text-xs text-accent",
								children: c.year
							})]
						}, c.name))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-6 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground",
					children: ["Languages: ", languages.join(" · ")]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-border/70 bg-surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-5 py-20 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl font-bold sm:text-5xl",
						children: "Looking for someone who ships?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-4 max-w-xl text-muted-foreground",
						children: "I'm available for full stack and AI/ML roles in Nashik, Pune or remote."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/contact",
						className: "mt-8 inline-flex items-center gap-2 bg-accent px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] text-accent-foreground transition-opacity hover:opacity-85",
						children: ["Get in touch ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })]
					})
				]
			})
		})
	] });
}
//#endregion
export { Index as component };

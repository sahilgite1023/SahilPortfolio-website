import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { c as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { c as projects, n as SectionLabel } from "./router-CZrsLiO2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projects-C3BeRwpt.js
var import_jsx_runtime = require_jsx_runtime();
function ProjectsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-5 py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-4xl font-bold tracking-tight sm:text-6xl",
				children: "Projects"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-2xl text-muted-foreground",
				children: "Things I designed, built and debugged — full stack products and applied machine learning."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16 space-y-16",
				children: projects.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
					n: p.index,
					children: p.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-8 md:grid-cols-[1.3fr_minmax(0,1fr)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-lg leading-relaxed text-muted-foreground",
							children: p.summary
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-6 space-y-2 text-sm text-muted-foreground",
							children: p.highlights.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-accent",
									children: "▸"
								}), h]
							}, h))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: p.link,
							target: "_blank",
							rel: "noreferrer",
							className: "mt-8 inline-flex items-center gap-2 border border-border px-5 py-3 font-mono text-xs uppercase tracking-[0.2em] transition-colors hover:border-accent hover:text-accent",
							children: [
								p.linkLabel,
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })
							]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "space-y-5 border border-border p-6 font-mono text-xs",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "uppercase tracking-[0.2em] text-muted-foreground",
								children: "Role"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1 text-foreground",
								children: p.role
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "uppercase tracking-[0.2em] text-muted-foreground",
								children: "Timeline"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1 text-foreground",
								children: p.when
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "uppercase tracking-[0.2em] text-muted-foreground",
								children: "Stack"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-2 flex flex-wrap gap-2",
								children: p.stack.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "border border-accent/40 px-2 py-1 text-accent",
									children: s
								}, s))
							})] })
						]
					})]
				})] }, p.title))
			})
		]
	});
}
//#endregion
export { ProjectsPage as component };

import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as Globe, i as Linkedin, n as MapPin, o as Github, r as Mail, t as Phone } from "../_libs/lucide-react.mjs";
import { s as profile } from "./router-CZrsLiO2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-lZwKdanw.js
var import_jsx_runtime = require_jsx_runtime();
var links = [
	{
		icon: Mail,
		label: "Email",
		value: profile.email,
		href: `mailto:${profile.email}`
	},
	{
		icon: Phone,
		label: "Phone",
		value: profile.phone,
		href: `tel:${profile.phone.replace(/\s/g, "")}`
	},
	{
		icon: Linkedin,
		label: "LinkedIn",
		value: "linkedin.com/in/sahilgite",
		href: profile.linkedin
	},
	{
		icon: Github,
		label: "GitHub",
		value: "github.com/sahilgite1023",
		href: profile.github
	},
	{
		icon: Globe,
		label: "Website",
		value: "sahilgite.netlify.app",
		href: profile.site
	}
];
function ContactPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-4xl px-5 py-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-4xl font-bold tracking-tight sm:text-6xl",
				children: "Let's talk"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-xl text-muted-foreground",
				children: "Recruiters and teams: I reply within a day. Happy to walk you through any project in detail."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-accent",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-4" }),
					" ",
					profile.location
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-12 grid gap-px bg-border sm:grid-cols-2",
				children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: l.href,
					target: l.href.startsWith("http") ? "_blank" : void 0,
					rel: "noreferrer",
					className: "flex items-center gap-4 bg-background p-6 transition-colors hover:bg-surface",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(l.icon, { className: "size-5 shrink-0 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground",
							children: l.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block truncate",
							children: l.value
						})]
					})]
				}) }, l.label))
			})
		]
	});
}
//#endregion
export { ContactPage as component };

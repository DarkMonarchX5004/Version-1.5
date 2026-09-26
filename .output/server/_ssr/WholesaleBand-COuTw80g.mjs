import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { m as useCart, t as Button, u as playTactileClick } from "./sound-effects-MOtsdcoI.mjs";
import { M as Building2, P as ArrowRight, d as ShieldCheck, l as Sparkles } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/WholesaleBand-COuTw80g.js
var import_jsx_runtime = require_jsx_runtime();
function WholesaleBand() {
	const { setB2BOpen } = useCart();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "wholesale",
		className: "py-24 px-6 sm:px-12 bg-[#0E0E0C] border-t border-[#22221E] relative overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "ambient-glow-gold top-1/2 right-10 w-80 h-80 opacity-20 pointer-events-none" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-[1360px] mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-10 relative z-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 mb-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, { className: "w-4 h-4 text-[#D4AF37]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase font-semibold",
							children: "Wholesale & Bulk Orders"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display font-semibold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight mb-4",
						children: "Pure jaggery in bulk."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs sm:text-sm text-[#A8A49A] leading-relaxed mb-6",
						children: "Direct farm-to-kitchen supply for bakeries, coffee roasters, restaurants, and export. Available in 50 kg to 500 kg+ batches with full FSSAI certification and estate-direct pricing."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-3 text-xs text-[#706E66]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-1.5 text-[#FAF7F0]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "w-3.5 h-3.5 text-[#D4AF37]" }), " FSSAI Batch Certified"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "•" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-1.5 text-[#FAF7F0]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-3.5 h-3.5 text-[#D4AF37]" }), " Custom Packaging & Cuts"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "•" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "50kg – 500kg+ Tiers" })
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				size: "lg",
				onClick: () => {
					playTactileClick();
					setB2BOpen(true);
				},
				"data-cursor": "WHOLESALE",
				className: "rounded-full h-14 px-8 text-xs font-semibold uppercase tracking-wider bg-[#D4AF37] hover:bg-[#EAD698] text-[#080807] transition-all shadow-[0_8px_25px_rgba(212,175,55,0.35)] active:scale-95 shrink-0 cursor-pointer",
				children: ["Get Wholesale Quote ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "w-4 h-4 ml-2" })]
			})]
		})]
	});
}
//#endregion
export { WholesaleBand as t };

import { n as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { c as inr, h as weights, l as playGoldResonance, m as useCart, t as Button, u as playTactileClick } from "./sound-effects-MOtsdcoI.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { P as ArrowRight, m as Plus } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ProductCard-B6rW0mjs.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ProductCard({ product, index = 0 }) {
	const { add } = useCart();
	const [selectedWeight, setSelectedWeight] = (0, import_react.useState)("500g");
	const currentPrice = product.prices[selectedWeight];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		"data-cursor": "INSPECT",
		className: "group relative flex flex-col bg-[#11110F] rounded-3xl overflow-hidden border border-[#242420] shadow-[0_12px_36px_rgba(0,0,0,0.5)] hover:border-[#D4AF37]/50 hover:shadow-[0_20px_55px_rgba(0,0,0,0.8),0_0_30px_rgba(212,175,55,0.12)] hover:-translate-y-1.5 transition-all duration-400",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute top-5 left-5 z-10 flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "font-mono text-[10px] font-semibold tracking-widest text-[#A8A49A] bg-[#0A0A09]/90 backdrop-blur-md px-2.5 py-1 rounded-full border border-[#282824]",
					children: ["N° 0", index + 1]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[10px] uppercase tracking-wider font-semibold text-[#D4AF37] bg-[#1A1A17]/90 backdrop-blur-md px-2.5 py-1 rounded-full border border-[#D4AF37]/30",
					children: product.badge
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/product/$id",
				params: { id: product.id },
				className: "relative block aspect-square w-full overflow-hidden bg-[#0A0A09] p-6 focus:outline-none",
				onClick: () => playTactileClick(),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-radial from-[#D4AF37]/10 via-[#D4AF37]/2 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: product.image,
					alt: product.name,
					className: "w-full h-full object-contain filter saturate-[0.98] group-hover:scale-106 transition-transform duration-700 ease-out",
					loading: "lazy"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col flex-1 p-6 sm:p-8 bg-[#11110F] border-t border-[#1F1F1B]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[11px] font-medium text-[#706E66] tracking-wider uppercase mb-1",
						children: product.note
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-2xl font-semibold text-white mb-2 tracking-tight",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/product/$id",
							params: { id: product.id },
							className: "hover:text-[#D4AF37] transition-colors",
							onClick: () => playTactileClick(),
							children: product.name
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-[#A8A49A] line-clamp-2 leading-relaxed mb-6 flex-1",
						children: product.description
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center gap-1.5 p-1 rounded-xl bg-[#080807] border border-[#242420] mb-6",
						role: "group",
						"aria-label": `${product.name} weight selection`,
						children: weights.map((weight) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => {
								playTactileClick();
								setSelectedWeight(weight);
							},
							className: `flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${selectedWeight === weight ? "bg-[#D4AF37] text-[#080807] shadow-xs font-bold" : "text-[#706E66] hover:text-[#FAF7F0]"}`,
							children: weight
						}, weight))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between pt-3 border-t border-[#1C1C19]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] text-[#706E66] uppercase tracking-wider",
								children: "Price"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "font-display text-2xl font-semibold text-white",
								children: inr.format(currentPrice)
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: "outline",
								asChild: true,
								className: "rounded-full px-3.5 text-xs border-[#2A2A24] bg-[#161613] hover:bg-[#20201C] text-[#FAF7F0] cursor-pointer",
								onClick: () => playTactileClick(),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/product/$id",
									params: { id: product.id },
									children: ["Details ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "w-3 h-3 ml-1" })]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								size: "sm",
								className: "rounded-full px-4 text-xs bg-[#D4AF37] text-[#080807] hover:bg-[#EAD698] font-semibold transition-all shadow-[0_4px_15px_rgba(212,175,55,0.3)] active:scale-95 cursor-pointer",
								onClick: () => {
									playGoldResonance();
									add(product.id, selectedWeight);
								},
								"data-cursor": "ADD",
								children: ["Add to Bag ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "w-3.5 h-3.5 ml-1" })]
							})]
						})]
					})
				]
			})
		]
	});
}
//#endregion
export { ProductCard as t };

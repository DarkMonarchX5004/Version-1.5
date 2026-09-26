import { n as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { d as products, u as playTactileClick } from "./sound-effects-MOtsdcoI.mjs";
import { f as Search, t as X } from "../_libs/lucide-react.mjs";
import { n as Navbar, t as Footer } from "./Footer-CDoylTLg.mjs";
import { t as ProductCard } from "./ProductCard-B6rW0mjs.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/search-CnAvt61N.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function SearchPage() {
	const [query, setQuery] = (0, import_react.useState)("");
	const matchingProducts = Object.values(products).filter((product) => {
		if (!query.trim()) return true;
		const q = query.toLowerCase();
		return product.name.toLowerCase().includes(q) || product.note.toLowerCase().includes(q) || product.description.toLowerCase().includes(q) || product.tastingNotes.some((t) => t.toLowerCase().includes(q)) || product.pairings.some((p) => p.toLowerCase().includes(q));
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen flex flex-col bg-[#080807] text-[#FAF7F0] selection:bg-[#D4AF37] selection:text-[#080807]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "flex-1 pt-32 pb-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-[1360px] mx-auto px-6 sm:px-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-2xl mx-auto text-center mb-12",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase font-semibold block mb-3",
								children: "Product Search"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "font-display font-semibold text-3xl sm:text-5xl text-white tracking-tight mb-6",
								children: "Search the Collection"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative flex items-center bg-[#11110F] border border-[#282824] rounded-full px-5 h-14 shadow-lg focus-within:border-[#D4AF37] focus-within:ring-2 focus-within:ring-[#D4AF37]/20 transition-all",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "w-5 h-5 text-[#D4AF37] shrink-0 mr-3" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										value: query,
										onChange: (e) => setQuery(e.target.value),
										placeholder: "Search varieties, pairings, ingredients, purity standards...",
										className: "w-full h-full bg-transparent border-none outline-none text-xs sm:text-sm text-white placeholder:text-[#706E66]",
										autoFocus: true
									}),
									query && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => {
											playTactileClick();
											setQuery("");
										},
										className: "p-1.5 text-[#706E66] hover:text-white transition-colors cursor-pointer",
										"aria-label": "Clear search",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-4 h-4" })
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center justify-center gap-2 mt-4 text-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[#706E66] text-[11px] font-mono",
									children: "Popular Searches:"
								}), [
									"Cubes",
									"Powder",
									"Syrup",
									"Molasses",
									"Okra",
									"Single Origin",
									"Coffee",
									"Chai"
								].map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => {
										playTactileClick();
										setQuery(tag);
									},
									className: "px-3 py-1 rounded-full bg-[#141412] text-[#A8A49A] hover:text-white border border-[#242420] hover:border-[#D4AF37]/40 transition-colors cursor-pointer text-[11px]",
									children: tag
								}, tag))]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between pb-6 border-b border-[#20201C] mb-8 text-xs text-[#706E66] font-mono",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								matchingProducts.length,
								" ",
								matchingProducts.length === 1 ? "Product Found" : "Products Found"
							] }), query && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								"Query: \"",
								query,
								"\""
							] })]
						}), matchingProducts.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "py-20 text-center flex flex-col items-center justify-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm text-[#706E66] mb-4",
								children: [
									"No products found for \"",
									query,
									"\"."
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setQuery(""),
								className: "px-5 py-2 rounded-full bg-[#181815] text-[#D4AF37] border border-[#282824] text-xs font-semibold uppercase tracking-wider",
								children: "Reset Search"
							})]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
							children: matchingProducts.map((product, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, {
								product,
								index
							}, product.id))
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { SearchPage as component };

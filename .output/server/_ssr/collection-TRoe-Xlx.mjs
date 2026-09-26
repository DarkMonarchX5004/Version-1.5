import { n as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { d as products, u as playTactileClick } from "./sound-effects-MOtsdcoI.mjs";
import { n as Navbar, t as Footer } from "./Footer-CDoylTLg.mjs";
import { t as ProductCard } from "./ProductCard-B6rW0mjs.mjs";
import { t as WholesaleBand } from "./WholesaleBand-COuTw80g.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/collection-TRoe-Xlx.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CollectionPage() {
	const [filter, setFilter] = (0, import_react.useState)("all");
	const filterOptions = [
		{
			id: "all",
			label: "All Varieties"
		},
		{
			id: "cubes",
			label: "Golden Cubes"
		},
		{
			id: "powder",
			label: "Velvet Powder"
		},
		{
			id: "syrup",
			label: "Golden Syrup"
		}
	];
	const displayedProducts = filter === "all" ? Object.values(products) : Object.values(products).filter((p) => p.id === filter);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen flex flex-col bg-[#080807] text-[#FAF7F0] selection:bg-[#D4AF37] selection:text-[#080807]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "flex-1 pt-32 pb-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "max-w-[1360px] mx-auto px-6 sm:px-12 mb-16",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-w-2xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 mb-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-5 h-[1.5px] bg-[#D4AF37]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase font-semibold",
										children: "Single-Origin Maharashtra"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
									className: "font-display font-semibold text-4xl sm:text-6xl text-white tracking-tight leading-[1.02] mb-6",
									children: [
										"The Pure Jaggery ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
											className: "gold-shimmer not-italic font-normal",
											children: "Collection."
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs sm:text-sm text-[#A8A49A] leading-relaxed",
									children: "Grown in mineral-rich riverbank soil in Maharashtra, clarified naturally with wild okra, and slow-boiled in iron vats. Three pure textures made for coffee, tea, and everyday cooking."
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap items-center gap-2 mt-10 pt-6 border-t border-[#20201C]",
							children: filterOptions.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => {
									playTactileClick();
									setFilter(opt.id);
								},
								className: `px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all cursor-pointer ${filter === opt.id ? "bg-[#D4AF37] text-[#080807] shadow-[0_0_15px_rgba(212,175,55,0.3)] font-bold" : "bg-[#121210] text-[#706E66] hover:text-white border border-[#242420] hover:border-[#383830]"}`,
								children: opt.label
							}, opt.id))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "max-w-[1360px] mx-auto px-6 sm:px-12 mb-24",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
							children: displayedProducts.map((product, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, {
								product,
								index
							}, product.id))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WholesaleBand, {})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { CollectionPage as component };

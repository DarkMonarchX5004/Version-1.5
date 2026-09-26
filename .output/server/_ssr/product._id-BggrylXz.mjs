import { n as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { c as inr, f as purityPillars, h as weights, l as playGoldResonance, m as useCart, t as Button, u as playTactileClick } from "./sound-effects-MOtsdcoI.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as Minus, d as ShieldCheck, j as Check, k as ChevronRight, m as Plus, s as Star, v as MessageCircle } from "../_libs/lucide-react.mjs";
import { n as Navbar, t as Footer } from "./Footer-CDoylTLg.mjs";
import { t as Route } from "./product._id-C2D920zx.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/product._id-BggrylXz.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function PurityBadge({ pillarIndex, className = "" }) {
	const pillar = purityPillars[pillarIndex];
	if (!pillar) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `group relative flex flex-col items-center text-center p-6 rounded-2xl bg-[#11110F] border border-[#242420] shadow-[0_8px_20px_rgba(0,0,0,0.4)] hover:border-[#D4AF37]/50 hover:shadow-[0_12px_30px_rgba(0,0,0,0.6)] transition-all duration-300 hover:-translate-y-1 ${className}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute top-4 right-4 text-[10px] font-mono tracking-widest text-[#706E66]",
				children: pillar.number
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "w-20 h-20 mb-4 rounded-full flex items-center justify-center p-2.5 bg-[#181815] border border-[#2A2A24] group-hover:border-[#D4AF37]/40 transition-colors",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: pillar.markImage,
					alt: pillar.markAlt,
					className: "w-full h-full object-contain filter brightness-110 group-hover:scale-105 transition-transform duration-300",
					loading: "lazy"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[10px] uppercase tracking-wider font-semibold text-[#D4AF37] mb-1",
				children: pillar.badge
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display text-base font-semibold text-white mb-1.5",
				children: pillar.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-[#A8A49A] leading-relaxed max-w-[240px]",
				children: pillar.description
			})
		]
	});
}
function PurityBadgesStrip({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ${className}`,
		children: purityPillars.map((_, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PurityBadge, { pillarIndex: index }, index))
	});
}
function ProductDetailPage() {
	const { product } = Route.useLoaderData();
	const { add } = useCart();
	const [selectedWeight, setSelectedWeight] = (0, import_react.useState)("500g");
	const [quantity, setQuantity] = (0, import_react.useState)(1);
	const [activeImage, setActiveImage] = (0, import_react.useState)(product.gallery[0] || product.image);
	const [showStickyBar, setShowStickyBar] = (0, import_react.useState)(false);
	const [servingSize, setServingSize] = (0, import_react.useState)(100);
	const currentPrice = product.prices[selectedWeight];
	const totalPrice = currentPrice * quantity;
	const factor = servingSize / 100;
	(0, import_react.useEffect)(() => {
		const handleScroll = () => {
			setShowStickyBar(window.scrollY > 650);
		};
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	const handleAddToCart = () => {
		playGoldResonance();
		add(product.id, selectedWeight, quantity);
	};
	const handleDirectWhatsApp = () => {
		playTactileClick();
		const text = `*CANEVIA — ORDER INQUIRY*\nProduct: *${product.name}* (${product.subtitle})\nPack Size: ${selectedWeight} × ${quantity}\nTotal: ${inr.format(totalPrice)}\n\nHi, I would like to order this. Please confirm availability and delivery.`;
		window.open(`https://wa.me/919922341509?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen flex flex-col bg-[#080807] text-[#FAF7F0] selection:bg-[#D4AF37] selection:text-[#080807]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "flex-1 pt-28 pb-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "max-w-[1360px] mx-auto px-6 sm:px-12 py-4 mb-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
							className: "flex items-center gap-2 text-xs text-[#706E66]",
							"aria-label": "Breadcrumb",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/",
									className: "hover:text-white transition-colors",
									onClick: () => playTactileClick(),
									children: "Home"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "w-3 h-3 text-[#383830]" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/collection",
									className: "hover:text-white transition-colors",
									onClick: () => playTactileClick(),
									children: "Products"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "w-3 h-3 text-[#383830]" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[#D4AF37] font-medium",
									children: product.name
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "max-w-[1360px] mx-auto px-6 sm:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-24",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lg:col-span-7 flex flex-col gap-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative aspect-[4/3] sm:aspect-[16/11] w-full rounded-3xl bg-[#0F0F0D] border border-[#242420] flex items-center justify-center p-8 sm:p-12 overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.7)]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute top-5 left-5 z-10",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono text-xs text-[#D4AF37] bg-[#161613]/90 backdrop-blur-md px-3 py-1 rounded-full border border-[#2E2E28]",
											children: product.subtitle
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: activeImage,
										alt: product.name,
										className: "w-full h-full object-contain filter saturate-95 hover:scale-103 transition-transform duration-500 ease-out select-none"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex items-center gap-3",
									children: product.gallery.map((img, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => {
											playTactileClick();
											setActiveImage(img);
										},
										className: `w-20 h-20 rounded-2xl bg-[#11110F] border p-2 flex items-center justify-center overflow-hidden transition-all cursor-pointer ${activeImage === img ? "border-[#D4AF37] ring-2 ring-[#D4AF37]/30 shadow-md scale-102" : "border-[#242420] opacity-60 hover:opacity-100"}`,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: img,
											alt: "",
											className: "w-full h-full object-contain"
										})
									}, i))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-6 rounded-2xl bg-[#11110F] border border-[#242420] mt-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase font-semibold block mb-3",
										children: "Natural Tasting Notes"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex flex-wrap gap-2",
										children: product.tastingNotes.map((note) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs font-medium text-[#FAF7F0] bg-[#181815] px-3.5 py-1.5 rounded-full border border-[#2A2A24]",
											children: note
										}, note))
									})]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lg:col-span-5 flex flex-col",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 mb-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-4 h-[1.5px] bg-[#D4AF37]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[11px] font-mono uppercase tracking-[0.2em] text-[#D4AF37] font-semibold",
										children: product.badge
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "font-display font-semibold text-4xl sm:text-5xl text-white tracking-tight leading-[1.05] mb-2",
									children: product.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs sm:text-sm font-medium text-[#A8A49A] mb-5",
									children: product.tagline
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-baseline gap-3 pb-6 border-b border-[#20201C]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
										className: "font-display text-3xl sm:text-4xl font-semibold text-white",
										children: inr.format(currentPrice)
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs text-[#706E66]",
										children: "Tax included · Free delivery above ₹999"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "py-6 border-b border-[#20201C]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between items-center mb-3 text-xs",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-semibold text-white uppercase tracking-wider text-[11px]",
											children: "Select Pack Size"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-[#D4AF37] font-mono",
											children: [selectedWeight, " resealable pouch"]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid grid-cols-3 gap-2.5",
										children: weights.map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => {
												playTactileClick();
												setSelectedWeight(w);
											},
											className: `py-3.5 px-2 rounded-xl text-center border transition-all cursor-pointer ${selectedWeight === w ? "bg-[#D4AF37] text-[#080807] border-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.3)] font-bold" : "bg-[#11110F] text-white border-[#242420] hover:border-[#383830]"}`,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "block text-sm font-display font-semibold",
												children: w
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: `text-[10px] mt-0.5 block ${selectedWeight === w ? "text-[#080807]" : "text-[#706E66]"}`,
												children: inr.format(product.prices[w])
											})]
										}, w))
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "py-6 border-b border-[#20201C] flex flex-col gap-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center border border-[#282824] rounded-full bg-[#11110F] h-12 px-2 shadow-inner",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														type: "button",
														onClick: () => {
															playTactileClick();
															setQuantity(Math.max(1, quantity - 1));
														},
														className: "w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#1C1C18] text-white cursor-pointer",
														"aria-label": "Decrease quantity",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "w-3.5 h-3.5" })
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "w-10 text-center font-mono text-sm font-semibold text-white",
														children: quantity
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														type: "button",
														onClick: () => {
															playTactileClick();
															setQuantity(quantity + 1);
														},
														className: "w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#1C1C18] text-white cursor-pointer",
														"aria-label": "Increase quantity",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "w-3.5 h-3.5" })
													})
												]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
												size: "lg",
												className: "flex-1 rounded-full h-12 text-xs font-semibold uppercase tracking-wider bg-[#D4AF37] hover:bg-[#EAD698] text-[#080807] transition-all shadow-[0_4px_20px_rgba(212,175,55,0.35)] active:scale-[0.99] cursor-pointer",
												onClick: handleAddToCart,
												children: [
													"Add ",
													quantity,
													" to Bag · ",
													inr.format(totalPrice)
												]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											variant: "outline",
											className: "w-full rounded-full h-11 text-xs font-medium border-[#282824] bg-[#11110F] hover:bg-[#181815] text-[#A8A49A] hover:text-white transition-colors cursor-pointer",
											onClick: handleDirectWhatsApp,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "w-4 h-4 mr-2 text-[#D4AF37]" }), "Order Directly on WhatsApp"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2.5 text-xs text-[#706E66] pt-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "w-4 h-4 text-[#D4AF37] shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Zero chemicals or bleach · Clarified naturally with wild okra" })]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "py-6 border-b border-[#20201C] flex flex-col gap-3 text-xs",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[11px] font-mono tracking-widest text-[#D4AF37] uppercase font-semibold",
										children: "Product Details"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-2 gap-3",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "p-3.5 rounded-xl bg-[#11110F] border border-[#242420]",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[10px] text-[#706E66] block",
													children: "Origin"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
													className: "text-white text-xs",
													children: product.characteristics.origin
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "p-3.5 rounded-xl bg-[#11110F] border border-[#242420]",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[10px] text-[#706E66] block",
													children: "Process"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
													className: "text-white text-xs",
													children: product.characteristics.process
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "p-3.5 rounded-xl bg-[#11110F] border border-[#242420]",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[10px] text-[#706E66] block",
													children: "Texture"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
													className: "text-white text-xs",
													children: product.characteristics.consistency
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "p-3.5 rounded-xl bg-[#11110F] border border-[#242420]",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[10px] text-[#706E66] block",
													children: "Shelf Life"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
													className: "text-white text-xs",
													children: product.characteristics.shelfLife
												})]
											})
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "py-6 text-xs",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[11px] font-mono tracking-widest text-[#706E66] uppercase block mb-3",
										children: "Suggested Pairings"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "flex flex-col gap-2 text-[#A8A49A]",
										children: product.pairings.map((pairing) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "w-3.5 h-3.5 text-[#D4AF37]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: pairing })]
										}, pairing))
									})]
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "max-w-[1360px] mx-auto px-6 sm:px-12 py-16 bg-[#0E0E0C] rounded-3xl border border-[#22221E] mb-24",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-w-3xl mx-auto",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase font-semibold",
									children: "Nutritional Information"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-2xl font-semibold text-white",
									children: "Nutrition Facts"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1 p-1 rounded-xl bg-[#080807] border border-[#242420]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => {
											playTactileClick();
											setServingSize(100);
										},
										className: `px-3.5 py-1 text-xs font-semibold rounded-lg transition-all cursor-pointer ${servingSize === 100 ? "bg-[#D4AF37] text-[#080807] font-bold" : "text-[#706E66]"}`,
										children: "Per 100g"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => {
											playTactileClick();
											setServingSize(20);
										},
										className: `px-3.5 py-1 text-xs font-semibold rounded-lg transition-all cursor-pointer ${servingSize === 20 ? "bg-[#D4AF37] text-[#080807] font-bold" : "text-[#706E66]"}`,
										children: "Per Serving (20g)"
									})]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "bg-[#121210] rounded-2xl border border-[#242420] overflow-hidden shadow-xs",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
									className: "w-full text-xs text-left",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
										className: "bg-[#161613] border-b border-[#22221E] text-[#706E66] uppercase tracking-wider font-mono text-[10px]",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "py-3.5 px-5",
											children: "Nutrient"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "py-3.5 px-5 text-right",
											children: "Amount"
										})] })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", {
										className: "divide-y divide-[#1C1C18]",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "py-3 px-5 font-medium text-white",
												children: "Energy (Calories)"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
												className: "py-3 px-5 text-right font-display font-semibold text-white",
												children: [Math.round(product.nutritionPer100g.energy * factor), " kcal"]
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "py-3 px-5 font-medium text-white",
												children: "Carbohydrates"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
												className: "py-3 px-5 text-right font-display font-semibold text-white",
												children: [Math.round(product.nutritionPer100g.carbohydrates * factor), " g"]
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "py-3 px-5 font-medium text-white",
												children: "Sugars"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
												className: "py-3 px-5 text-right font-display font-semibold text-white",
												children: [Math.round(product.nutritionPer100g.sugars * factor), " g"]
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "py-3 px-5 font-medium text-white",
												children: "Iron"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "py-3 px-5 text-right font-display font-semibold text-[#D4AF37]",
												children: product.nutritionPer100g.iron
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "py-3 px-5 font-medium text-white",
												children: "Magnesium"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "py-3 px-5 text-right font-display font-semibold text-[#D4AF37]",
												children: product.nutritionPer100g.magnesium
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "py-3 px-5 font-medium text-white",
												children: "Sulphur & Bleach"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "py-3 px-5 text-right font-semibold text-[#4CAF50]",
												children: "Zero (Not Detected)"
											})] })
										]
									})]
								})
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "max-w-[1360px] mx-auto px-6 sm:px-12 mb-24",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-center max-w-xl mx-auto mb-12",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase font-semibold",
								children: "Our Standards"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-3xl font-semibold text-white mt-2",
								children: "Pure from field to boil."
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PurityBadgesStrip, {})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "max-w-[1360px] mx-auto px-6 sm:px-12 mb-16",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-8 sm:p-12 rounded-3xl bg-[#11110F] border border-[#242420]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-[#20201C]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase",
									children: "Customer Reviews"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-2xl font-semibold text-white",
									children: "What People Say"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex text-[#D4AF37]",
										children: [...Array(5)].map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "w-4 h-4 fill-current" }, i))
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-semibold text-white",
										children: "5.0 / 5.0 Rating"
									})]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-1 md:grid-cols-3 gap-8 pt-8",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-[#A8A49A] italic leading-relaxed",
											children: "\"The caramel depth in this jaggery is unlike anything in commercial markets. You can taste the earthen minerals and cane field terroir immediately.\""
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-col text-[11px]",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
												className: "text-white",
												children: "Devendra S."
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[#706E66]",
												children: "Pastry Chef, Mumbai"
											})]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-[#A8A49A] italic leading-relaxed",
											children: "\"Knowing it is clarified solely with wild okra juice and contains zero bleaching agents makes it the only jaggery we stock in our home kitchen.\""
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-col text-[11px]",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
												className: "text-white",
												children: "Priyanka K."
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[#706E66]",
												children: "Verified Customer, Pune"
											})]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-[#A8A49A] italic leading-relaxed",
											children: "\"The hand-carved geometry holds its crystalline integrity beautifully. Perfect pairing alongside an artisanal single-origin pour-over.\""
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-col text-[11px]",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
												className: "text-white",
												children: "Vikram M."
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[#706E66]",
												children: "Coffee Roaster, Bangalore"
											})]
										})]
									})
								]
							})]
						})
					})
				]
			}),
			showStickyBar && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed bottom-0 left-0 right-0 z-30 bg-[#0C0C0B]/95 backdrop-blur-xl border-t border-[#242420] py-3.5 px-6 sm:px-12 shadow-2xl animate-in slide-in-from-bottom duration-300",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-[1360px] mx-auto flex items-center justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: product.image,
							alt: "",
							className: "w-10 h-10 rounded-xl bg-[#121210] border border-[#282824] object-contain p-1"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hidden sm:flex flex-col leading-tight",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "font-display text-sm font-semibold text-white",
								children: product.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-[11px] text-[#706E66]",
								children: [selectedWeight, " pouch"]
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: "font-display text-lg font-semibold text-[#D4AF37]",
							children: inr.format(currentPrice)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							className: "rounded-full px-6 bg-[#D4AF37] hover:bg-[#EAD698] text-[#080807] text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm cursor-pointer",
							onClick: handleAddToCart,
							children: "Add to Bag"
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { ProductDetailPage as component };

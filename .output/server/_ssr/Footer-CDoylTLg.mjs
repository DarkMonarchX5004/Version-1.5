import { n as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { d as products, i as brandAssets, m as useCart, p as toggleAudioMaster, s as getAudioState, t as Button, u as playTactileClick } from "./sound-effects-MOtsdcoI.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { N as ArrowUpRight, P as ArrowRight, b as Mail, d as ShieldCheck, f as Search, h as Phone, i as Volume2, r as VolumeX, t as X, u as ShoppingBag, v as MessageCircle, y as Menu } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Footer-CDoylTLg.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Navbar() {
	const { count, setBagOpen, setSearchOpen, setB2BOpen } = useCart();
	const [isScrolled, setIsScrolled] = (0, import_react.useState)(false);
	const [mobileMenuOpen, setMobileMenuOpen] = (0, import_react.useState)(false);
	const [soundEnabled, setSoundEnabled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setSoundEnabled(getAudioState());
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 25);
		};
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	const handleSoundToggle = () => {
		const newState = toggleAudioMaster();
		setSoundEnabled(newState);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `fixed top-4 left-1/2 -translate-x-1/2 z-40 w-[min(1280px,calc(100%-32px))] h-16 flex items-center justify-between px-4 sm:px-6 rounded-2xl transition-all duration-300 ${isScrolled ? "bg-[#0C0C0B]/90 backdrop-blur-2xl border border-[#D4AF37]/25 shadow-[0_16px_40px_rgba(0,0,0,0.7)]" : "bg-[#11110F]/75 backdrop-blur-xl border border-[#282824] shadow-[0_8px_25px_rgba(0,0,0,0.4)]"}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/",
				className: "flex items-center gap-3 group focus:outline-none",
				"aria-label": "CANEVIA Sovereign Sugarcane Reserve",
				onClick: () => playTactileClick(),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: brandAssets.mark,
					alt: "",
					className: "w-7 h-8 object-contain transition-transform duration-300 group-hover:scale-105 brightness-125"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display font-semibold text-base sm:text-lg tracking-[0.16em] text-white leading-none",
						children: "CANEVIA"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[7px] tracking-[0.22em] font-semibold text-[#D4AF37] mt-1 uppercase",
						children: "Sovereign Sugarcane Reserve"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "hidden md:flex items-center gap-6",
				"aria-label": "Main Navigation",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "text-xs font-semibold tracking-wider text-[#A8A49A] hover:text-white transition-colors",
						onClick: () => playTactileClick(),
						children: "Overview"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/collection",
						className: "text-xs font-semibold tracking-wider text-[#A8A49A] hover:text-white transition-colors",
						onClick: () => playTactileClick(),
						children: "Products"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/#packaging",
						className: "text-xs font-semibold tracking-wider text-[#A8A49A] hover:text-white transition-colors",
						onClick: () => playTactileClick(),
						children: "Packaging"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/#heritage",
						className: "text-xs font-semibold tracking-wider text-[#A8A49A] hover:text-white transition-colors",
						onClick: () => playTactileClick(),
						children: "Purity & Process"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => {
							playTactileClick();
							setB2BOpen(true);
						},
						className: "text-xs font-semibold tracking-wider text-[#A8A49A] hover:text-white transition-colors cursor-pointer",
						children: "Wholesale"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/account",
						className: "text-xs font-semibold tracking-wider text-[#D4AF37] hover:text-[#EAD698] transition-colors",
						onClick: () => playTactileClick(),
						children: "Contact"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: handleSoundToggle,
						className: `hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs transition-colors border cursor-pointer ${soundEnabled ? "bg-[#D4AF37]/15 text-[#D4AF37] border-[#D4AF37]/40 shadow-[0_0_10px_rgba(212,175,55,0.2)]" : "bg-[#181815] text-[#706E66] border-[#282824] hover:text-[#A8A49A]"}`,
						title: soundEnabled ? "Mute ambient acoustics" : "Enable tactile & hearth acoustics",
						"aria-label": soundEnabled ? "Mute sound" : "Enable sound",
						children: soundEnabled ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "w-3.5 h-3.5 animate-pulse text-[#D4AF37]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] font-mono uppercase tracking-wider",
							children: "Sound On"
						})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VolumeX, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] font-mono uppercase tracking-wider",
							children: "Sound"
						})] })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => {
							playTactileClick();
							setSearchOpen(true);
						},
						className: "hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full text-xs text-[#A8A49A] bg-[#181815] hover:bg-[#22221E] transition-colors border border-[#282824] cursor-pointer",
						"aria-label": "Open search command palette",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "w-3.5 h-3.5 text-[#D4AF37]" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[11px]",
								children: "Search"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", {
								className: "hidden lg:inline-block px-1.5 py-0.5 text-[9px] font-mono text-[#706E66] bg-[#0E0E0C] rounded-sm border border-[#2A2A24]",
								children: "⌘K"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "icon",
						className: "sm:hidden text-white hover:bg-white/10",
						onClick: () => {
							playTactileClick();
							setSearchOpen(true);
						},
						"aria-label": "Search",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "w-4 h-4 text-[#D4AF37]" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						className: "relative flex items-center gap-2 rounded-full px-4 h-9 border-[#282824] bg-[#181815] hover:bg-[#22221E] text-white shadow-xs transition-transform active:scale-95 cursor-pointer",
						onClick: () => {
							playTactileClick();
							setBagOpen(true);
						},
						"aria-label": `Open reserve bag with ${count} items`,
						"data-cursor": "BAG",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "w-4 h-4 text-[#D4AF37]" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden sm:inline text-xs font-medium tracking-wide",
								children: "Bag"
							}),
							count > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex items-center justify-center min-w-5 h-5 px-1.5 rounded-full bg-[#D4AF37] text-[#080807] text-[10px] font-bold tracking-tight",
								children: count
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "icon",
						className: "md:hidden text-white",
						onClick: () => setMobileMenuOpen(true),
						"aria-label": "Open navigation menu",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "w-5 h-5" })
					})
				]
			})
		]
	}), mobileMenuOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-50 bg-[#080807] flex flex-col p-6 animate-in fade-in duration-200",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between pb-6 border-b border-[#22221E]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-center gap-2",
					onClick: () => setMobileMenuOpen(false),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: brandAssets.mark,
						alt: "",
						className: "w-6 h-7 object-contain brightness-125"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display font-semibold text-lg tracking-widest text-white",
						children: "CANEVIA"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "icon",
					onClick: () => setMobileMenuOpen(false),
					"aria-label": "Close navigation menu",
					className: "text-white",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-6 h-6" })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "flex flex-col py-8 gap-6 flex-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						onClick: () => setMobileMenuOpen(false),
						className: "flex items-center justify-between text-2xl font-display font-medium text-white border-b border-[#1C1C18] pb-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Overview" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "w-5 h-5 text-[#D4AF37]" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/collection",
						onClick: () => setMobileMenuOpen(false),
						className: "flex items-center justify-between text-2xl font-display font-medium text-white border-b border-[#1C1C18] pb-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Our Products" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "w-5 h-5 text-[#D4AF37]" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "/#packaging",
						onClick: () => setMobileMenuOpen(false),
						className: "flex items-center justify-between text-2xl font-display font-medium text-white border-b border-[#1C1C18] pb-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Packaging & Freshness" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "w-5 h-5 text-[#D4AF37]" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "/#heritage",
						onClick: () => setMobileMenuOpen(false),
						className: "flex items-center justify-between text-2xl font-display font-medium text-white border-b border-[#1C1C18] pb-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Purity & Process" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "w-5 h-5 text-[#D4AF37]" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => {
							setMobileMenuOpen(false);
							setB2BOpen(true);
						},
						className: "flex items-center justify-between text-2xl font-display font-medium text-white border-b border-[#1C1C18] pb-4 text-left",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Wholesale Orders" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "w-5 h-5 text-[#D4AF37]" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/account",
						onClick: () => setMobileMenuOpen(false),
						className: "flex items-center justify-between text-2xl font-display font-medium text-[#D4AF37] border-b border-[#1C1C18] pb-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Contact & Concierge" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "w-5 h-5 text-[#D4AF37]" })]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pt-6 border-t border-[#22221E] flex flex-col gap-2 text-xs text-[#706E66]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-medium text-white",
						children: "Kothule Industries · Pune, Maharashtra"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "FSSAI Lic. No. 10022022000543" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Direct Sales Channel: +91 99223 41509" })
				]
			})
		]
	})] });
}
function Footer() {
	const { setB2BOpen } = useCart();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "bg-[#060605] text-[#FAF7F0] pt-24 pb-12 px-6 sm:px-12 border-t border-[#1F1F1B] relative overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-[1360px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 pb-16 border-b border-[#1C1C18]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-2 flex flex-col items-start pr-0 lg:pr-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "flex items-center gap-3 mb-6 focus:outline-none",
							onClick: () => playTactileClick(),
							"aria-label": "CANEVIA Home",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: brandAssets.mark,
								alt: "CANEVIA",
								className: "w-8 h-9 object-contain brightness-125"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display font-semibold text-lg tracking-[0.16em] text-white",
									children: "CANEVIA"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[7px] tracking-[0.24em] text-[#D4AF37] font-semibold uppercase",
									children: "Sovereign Sugarcane Reserve"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-[#A8A49A] leading-relaxed max-w-sm mb-6",
							children: "Single-origin heirloom sugarcane harvested from the riverbanks of Maharashtra, clarified with wild okra extract, and simmered in woodfired iron vats. Pure unrefined, unbleached jaggery."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#0E0E0C] border border-[#22221E] text-[11px] text-[#A8A49A] max-w-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: brandAssets.kothuleMark,
								alt: "Kothule Industries",
								className: "w-7 h-10 object-contain opacity-80"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col leading-tight",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-white font-medium",
									children: "Crafted by Kothule Industries"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] text-[#706E66]",
									children: "Estate Mill & Office, Pune, MH"
								})]
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase font-semibold",
						children: "Shop"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "flex flex-col gap-2.5 text-xs text-[#A8A49A]",
						children: [
							Object.values(products).map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/product/$id",
								params: { id: product.id },
								className: "hover:text-white transition-colors flex items-center justify-between group",
								onClick: () => playTactileClick(),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: product.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#D4AF37]" })]
							}) }, product.id)),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/collection",
								className: "hover:text-white transition-colors",
								onClick: () => playTactileClick(),
								children: "All Varieties"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "/#packaging",
								className: "hover:text-white transition-colors",
								onClick: () => playTactileClick(),
								children: "Packaging Details"
							}) })
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase font-semibold",
						children: "Our Standards"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "flex flex-col gap-2.5 text-xs text-[#A8A49A]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "w-3.5 h-3.5 text-[#D4AF37] shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Clarified with Wild Okra" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "w-3.5 h-3.5 text-[#D4AF37] shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "No Sulphur or Bleach" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "w-3.5 h-3.5 text-[#D4AF37] shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Woodfired Iron Vats" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "w-3.5 h-3.5 text-[#D4AF37] shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Single-Origin Maharashtra" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "pt-2 text-[11px] text-[#706E66]",
								children: ["FSSAI Lic. No. ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
									className: "text-[#FAF7F0]",
									children: "10022022000543"
								})]
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase font-semibold",
						children: "Direct Contact"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-3 text-xs text-[#A8A49A]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "https://wa.me/919922341509",
								target: "_blank",
								rel: "noreferrer",
								className: "flex items-center gap-2 hover:text-[#D4AF37] transition-colors",
								onClick: () => playTactileClick(),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "w-3.5 h-3.5 text-[#D4AF37]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "WhatsApp (+91 99223 41509)" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "tel:+919922341509",
								className: "flex items-center gap-2 hover:text-white transition-colors",
								onClick: () => playTactileClick(),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "w-3.5 h-3.5 text-[#D4AF37]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "+91 99223 41509" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "mailto:princegojo5004@gmail.com",
								className: "flex items-center gap-2 hover:text-white transition-colors",
								onClick: () => playTactileClick(),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "w-3.5 h-3.5 text-[#D4AF37]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "princegojo5004@gmail.com" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => {
									playTactileClick();
									setB2BOpen(true);
								},
								className: "mt-2 text-left text-xs text-[#D4AF37] hover:text-[#EAD698] font-medium transition-colors cursor-pointer",
								children: "Wholesale & Bulk Orders (50kg+) →"
							})
						]
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-[1360px] mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#706E66]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "© 2026 Kothule Industries. All rights reserved." }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "flex items-center gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Crafted in Maharashtra, India" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "•" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Pure Unrefined Jaggery" })
				]
			})]
		})]
	});
}
//#endregion
export { Navbar as n, Footer as t };

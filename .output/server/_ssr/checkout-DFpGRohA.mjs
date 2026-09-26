import { n as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { c as inr, d as products, l as playGoldResonance, m as useCart, t as Button, u as playTactileClick } from "./sound-effects-MOtsdcoI.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { F as ArrowLeft, O as Clipboard, b as Mail, d as ShieldCheck, j as Check, v as MessageCircle } from "../_libs/lucide-react.mjs";
import { n as Navbar, t as Footer } from "./Footer-CDoylTLg.mjs";
import { n as Textarea, t as Input } from "./textarea-C2OAXoyi.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/checkout-DFpGRohA.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CheckoutPage() {
	const { cart, subtotal, clear } = useCart();
	const [invoice, setInvoice] = (0, import_react.useState)("");
	const [step, setStep] = (0, import_react.useState)("form");
	const handleSubmit = (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		const lines = cart.map((item, i) => `${i + 1}. *${products[item.id].name}* — ${item.weight} × ${item.quantity} — ${inr.format(products[item.id].prices[item.weight] * item.quantity)}`).join("\n");
		const receipt = `*CANEVIA — ORDER DETAILS*\n_Pure Sugarcane Jaggery_\n\n*CUSTOMER DETAILS*\nName: ${data.get("name")}\nPhone: ${data.get("phone")}\nEmail: ${data.get("email")}\nShipping Address: ${data.get("address")}\n\n*ITEMS ORDERED*\n${lines}\n\n*SUBTOTAL: ${inr.format(subtotal)}*\n\nPlease confirm shipping and payment details.\nFSSAI Lic. No. 10022022000543 · Kothule Industries, Pune`;
		setInvoice(receipt);
		setStep("confirmation");
		playGoldResonance();
		window.open(`https://wa.me/919922341509?text=${encodeURIComponent(receipt)}`, "_blank", "noopener,noreferrer");
		toast.success("Order opened in WhatsApp.");
	};
	const copyInvoice = async () => {
		try {
			playTactileClick();
			await navigator.clipboard.writeText(invoice);
			toast.success("Order details copied to clipboard.");
		} catch {
			toast.error("Clipboard copy failed. Please select manually.");
		}
	};
	const sendBackupEmail = () => {
		playTactileClick();
		window.location.href = `mailto:princegojo5004@gmail.com?subject=${encodeURIComponent("CANEVIA Order Details")}&body=${encodeURIComponent(invoice)}`;
	};
	const handleFinish = () => {
		clear();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen flex flex-col bg-[#080807] text-[#FAF7F0] selection:bg-[#D4AF37] selection:text-[#080807]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "flex-1 pt-32 pb-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-[1000px] mx-auto px-6 sm:px-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-8",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/cart",
								className: "inline-flex items-center gap-2 text-xs font-medium text-[#706E66] hover:text-[#D4AF37] transition-colors",
								onClick: () => playTactileClick(),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "w-3.5 h-3.5" }), " Back to Bag"]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "pb-8 border-b border-[#20201C] mb-10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 mb-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-5 h-[1.5px] bg-[#D4AF37]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase font-semibold",
									children: "Checkout"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "font-display font-semibold text-3xl sm:text-5xl text-white tracking-tight",
								children: step === "form" ? "Shipping Address" : "Order Placed"
							})]
						}),
						step === "confirmation" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-8 sm:p-12 rounded-3xl bg-[#11110F] border border-[#242420] shadow-[0_20px_60px_rgba(0,0,0,0.6)] flex flex-col gap-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col items-center justify-center text-center p-8 bg-[#0C0C0A] rounded-2xl border border-[#22221E]",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "w-14 h-14 rounded-full bg-[#D4AF37] text-[#080807] flex items-center justify-center mb-4 shadow-[0_0_25px_rgba(212,175,55,0.4)]",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "w-7 h-7 stroke-[3]" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-display text-2xl font-semibold text-white",
											children: "Order Sent to WhatsApp"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs sm:text-sm text-[#A8A49A] mt-2 max-w-md leading-relaxed",
											children: "Your order has been shared with Kothule Industries (+91 99223 41509). Our team will confirm payment details and delivery schedule with you directly."
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] font-mono tracking-widest text-[#706E66] uppercase",
										children: "Order Receipt"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
										className: "w-full max-h-60 overflow-y-auto p-4 rounded-xl bg-[#080807] text-[#EDE8DF] font-mono text-xs whitespace-pre-wrap leading-relaxed border border-[#22221E]",
										children: invoice
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										variant: "outline",
										className: "h-12 rounded-full text-xs font-semibold uppercase tracking-wider border-[#282824] bg-[#141412] hover:bg-[#1E1E1A] text-white cursor-pointer",
										onClick: copyInvoice,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clipboard, { className: "w-4 h-4 mr-2 text-[#D4AF37]" }), "Copy Order Details"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										variant: "outline",
										className: "h-12 rounded-full text-xs font-semibold uppercase tracking-wider border-[#282824] bg-[#141412] hover:bg-[#1E1E1A] text-white cursor-pointer",
										onClick: sendBackupEmail,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "w-4 h-4 mr-2 text-[#D4AF37]" }), "Email Order"]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									className: "h-13 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#D4AF37] hover:bg-[#EAD698] text-[#080807] transition-all shadow-md cursor-pointer",
									onClick: handleFinish,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/",
										children: "Done & Return to Store"
									})
								})
							]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-1 lg:grid-cols-12 gap-10 items-start",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "lg:col-span-7 bg-[#11110F] rounded-3xl p-6 sm:p-8 border border-[#242420] shadow-[0_12px_36px_rgba(0,0,0,0.5)]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
									onSubmit: handleSubmit,
									className: "flex flex-col gap-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													className: "text-[11px] font-medium text-[#FAF7F0]",
													children: "Full Name"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
													name: "name",
													placeholder: "e.g. Aarav Mehta",
													required: true,
													maxLength: 100,
													className: "bg-[#0C0C0A] border-[#242420] text-white rounded-xl h-10 text-xs focus:border-[#D4AF37]"
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													className: "text-[11px] font-medium text-[#FAF7F0]",
													children: "Phone (WhatsApp preferred)"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
													name: "phone",
													type: "tel",
													placeholder: "+91 98765 43210",
													required: true,
													minLength: 8,
													maxLength: 20,
													className: "bg-[#0C0C0A] border-[#242420] text-white rounded-xl h-10 text-xs focus:border-[#D4AF37]"
												})]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "text-[11px] font-medium text-[#FAF7F0]",
												children: "Email Address"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												name: "email",
												type: "email",
												placeholder: "aarav@example.com",
												required: true,
												maxLength: 120,
												className: "bg-[#0C0C0A] border-[#242420] text-white rounded-xl h-10 text-xs focus:border-[#D4AF37]"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "text-[11px] font-medium text-[#FAF7F0]",
												children: "Complete Shipping Address & Pincode"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
												name: "address",
												placeholder: "Apartment, building, street, city, state, pincode",
												required: true,
												minLength: 12,
												maxLength: 400,
												rows: 3,
												className: "bg-[#0C0C0A] border-[#242420] text-white rounded-xl text-xs focus:border-[#D4AF37] resize-none"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											type: "submit",
											size: "lg",
											className: "h-13 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#D4AF37] hover:bg-[#EAD698] text-[#080807] transition-all shadow-[0_4px_20px_rgba(212,175,55,0.35)] active:scale-[0.99] mt-4 cursor-pointer",
											children: ["Order on WhatsApp ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "w-4 h-4 ml-2" })]
										})
									]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-[#11110F] border border-[#242420] shadow-[0_12px_36px_rgba(0,0,0,0.5)] flex flex-col gap-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-xl font-semibold text-white",
										children: "Order Summary"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex flex-col divide-y divide-[#1C1C18]",
										children: cart.map((item) => {
											const product = products[item.id];
											const price = product.prices[item.weight];
											return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "py-3.5 first:pt-0 last:pb-0 flex justify-between items-center text-xs",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
													className: "text-white block font-medium",
													children: product.name
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "text-[11px] text-[#706E66] font-mono",
													children: [
														item.weight,
														" × ",
														item.quantity
													]
												})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-display font-semibold text-[#D4AF37]",
													children: inr.format(price * item.quantity)
												})]
											}, `${item.id}-${item.weight}`);
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "pt-4 border-t border-[#1C1C18] flex justify-between items-center text-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-medium text-white",
											children: "Total Amount"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											className: "font-display text-2xl font-bold text-[#D4AF37]",
											children: inr.format(subtotal)
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "p-4 rounded-2xl bg-[#0A0A08] border border-[#20201C] flex flex-col gap-2 text-[11px] text-[#706E66]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex items-center gap-1.5 text-[#FAF7F0]",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "w-3.5 h-3.5 text-[#D4AF37]" }), " Insured Express Delivery"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Direct estate mill dispatch · FSSAI Lic. 10022022000543" })]
									})
								]
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { CheckoutPage as component };

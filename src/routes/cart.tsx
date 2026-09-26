import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Minus,
  Plus,
  Trash2,
  ShoppingBag,
  ShieldCheck,
  Lock,
  ArrowLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/canevia/Navbar";
import { Footer } from "@/components/canevia/Footer";
import { useCart } from "@/lib/cart-context";
import { inr, products } from "@/lib/products";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "Your Bag | CANEVIA" },
      { name: "description", content: "Review your CANEVIA jaggery order." },
    ],
  }),
  component: CartPage,
});

function CartPage() {
  const { cart, count, subtotal, changeQuantity, remove, setCheckoutOpen } = useCart();

  const freeShippingThreshold = 999;
  const remainingForFree = Math.max(0, freeShippingThreshold - subtotal);
  const progressPercent = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));

  return (
    <div className="min-h-screen flex flex-col bg-[#080807] text-[#FAF7F0] selection:bg-[#D4AF37] selection:text-[#080807]">
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        <div className="max-w-[1100px] mx-auto px-6 sm:px-12">
          {/* Header */}
          <div className="pb-8 border-b border-[#20201C] mb-10">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-5 h-[1.5px] bg-[#D4AF37]" />
              <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase font-semibold">
                Order Review
              </span>
            </div>
            <h1 className="font-display font-semibold text-3xl sm:text-5xl text-white tracking-tight">
              Your Bag
            </h1>
          </div>

          {cart.length === 0 ? (
            <div className="py-20 flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 rounded-full bg-[#11110F] border border-[#242420] flex items-center justify-center mb-6 text-[#706E66]">
                <ShoppingBag className="w-8 h-8 stroke-[1.5]" />
              </div>
              <h2 className="font-display text-2xl font-semibold text-white mb-2">
                Your bag is empty
              </h2>
              <p className="text-xs sm:text-sm text-[#A8A49A] max-w-sm mb-8 leading-relaxed">
                Add from our pure jaggery collection to start your order.
              </p>
              <Button
                asChild
                className="rounded-full px-8 h-12 bg-[#D4AF37] hover:bg-[#EAD698] text-[#080807] text-xs font-semibold uppercase tracking-wider transition-colors shadow-md"
              >
                <Link to="/collection">
                  Shop Jaggery Collection <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Items List (7 cols) */}
              <div className="lg:col-span-7 flex flex-col divide-y divide-[#1C1C18] bg-[#11110F] rounded-3xl p-6 sm:p-8 border border-[#242420] shadow-[0_12px_36px_rgba(0,0,0,0.5)]">
                {cart.map((item) => {
                  const product = products[item.id];
                  const price = product.prices[item.weight];
                  const lineTotal = price * item.quantity;

                  return (
                    <div
                      key={`${item.id}-${item.weight}`}
                      className="py-6 first:pt-0 last:pb-0 flex items-center gap-5 group"
                    >
                      <Link
                        to="/product/$id"
                        params={{ id: product.id }}
                        className="w-20 h-20 rounded-2xl bg-[#080807] border border-[#242420] p-2 shrink-0 flex items-center justify-center overflow-hidden"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-contain filter saturate-90 group-hover:scale-105 transition-transform"
                        />
                      </Link>

                      <div className="flex-1 min-w-0">
                        <Link
                          to="/product/$id"
                          params={{ id: product.id }}
                          className="font-display font-semibold text-base text-white hover:text-[#D4AF37] transition-colors truncate block"
                        >
                          {product.name}
                        </Link>
                        <p className="text-xs text-[#706E66] mb-3 font-mono">
                          {item.weight} · {inr.format(price)} each
                        </p>

                        <div className="flex items-center gap-3">
                          <div className="flex items-center border border-[#242420] rounded-lg bg-[#080807] overflow-hidden">
                            <button
                              type="button"
                              onClick={() => {
                                changeQuantity(item.id, item.weight, -1);
                              }}
                              className="w-7 h-7 flex items-center justify-center hover:bg-[#1C1C18] text-[#A8A49A] transition-colors cursor-pointer"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="w-3.5 h-3.5" />
                            </button>
                            <span className="w-8 text-center font-mono text-xs font-semibold text-white">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() => {
                                changeQuantity(item.id, item.weight, 1);
                              }}
                              className="w-7 h-7 flex items-center justify-center hover:bg-[#1C1C18] text-[#A8A49A] transition-colors cursor-pointer"
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          <button
                            type="button"
                            onClick={() => {
                              remove(item.id, item.weight);
                            }}
                            className="text-[#706E66] hover:text-[#C84A3B] transition-colors p-1.5 cursor-pointer"
                            aria-label={`Remove ${product.name}`}
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      <div className="text-right shrink-0">
                        <strong className="font-display text-base font-semibold text-[#D4AF37]">
                          {inr.format(lineTotal)}
                        </strong>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Order Summary (5 cols) */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                <div className="p-6 sm:p-8 rounded-3xl bg-[#11110F] border border-[#242420] shadow-[0_12px_36px_rgba(0,0,0,0.5)]">
                  <h3 className="font-display text-xl font-semibold text-white mb-6">
                    Order Summary
                  </h3>

                  {/* Free Dispatch Progress */}
                  <div className="p-4 rounded-2xl bg-[#080807] border border-[#242420] mb-6">
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className="font-medium text-white flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                        {remainingForFree === 0
                          ? "Free Shipping Unlocked"
                          : `Add ${inr.format(remainingForFree)} for free shipping`}
                      </span>
                      <span className="font-mono text-[10px] text-[#D4AF37]">
                        {progressPercent}%
                      </span>
                    </div>
                    <div className="w-full h-1.5 bg-[#1F1F1B] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#C5A059] to-[#D4AF37] rounded-full transition-all duration-500"
                        style={{ width: `${progressPercent}%` }}
                      />
                    </div>
                  </div>

                  <dl className="divide-y divide-[#1C1C18] text-xs mb-6">
                    <div className="py-3 flex justify-between items-center text-sm">
                      <dt className="text-[#A8A49A]">Items ({count})</dt>
                      <dd className="font-display font-semibold text-white text-base">
                        {inr.format(subtotal)}
                      </dd>
                    </div>
                    <div className="py-3 flex justify-between items-center">
                      <dt className="text-[#A8A49A]">Shipping</dt>
                      <dd className="text-white font-medium">
                        {remainingForFree === 0 ? "Free" : "Calculated at checkout"}
                      </dd>
                    </div>
                  </dl>

                  <Button
                    size="lg"
                    className="w-full rounded-full h-13 text-xs font-semibold uppercase tracking-wider bg-[#D4AF37] hover:bg-[#EAD698] text-[#080807] transition-all shadow-[0_4px_20px_rgba(212,175,55,0.35)] active:scale-[0.99] cursor-pointer"
                    onClick={() => {
                      setCheckoutOpen(true);
                    }}
                  >
                    Proceed to Checkout <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>

                  <div className="mt-6 flex flex-col gap-2 text-[11px] text-[#706E66]">
                    <span className="flex items-center gap-1.5">
                      <Lock className="w-3.5 h-3.5 text-[#D4AF37]" /> Order directly via WhatsApp or email
                    </span>
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" /> FSSAI Lic. No.
                      10022022000543 Certified
                    </span>
                  </div>
                </div>

                <div className="text-center">
                  <Link
                    to="/collection"
                    className="inline-flex items-center gap-1.5 text-xs text-[#706E66] hover:text-[#D4AF37] transition-colors"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" /> Continue shopping
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

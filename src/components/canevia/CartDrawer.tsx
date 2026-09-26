import { Link } from "@tanstack/react-router";
import { Minus, Plus, Trash2, ArrowRight, ShoppingBag, ShieldCheck, Sparkles } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart-context";
import { inr, products } from "@/lib/products";
import { playTactileClick, playGoldResonance } from "@/lib/sound-effects";

export function CartDrawer() {
  const { cart, count, subtotal, changeQuantity, remove, isBagOpen, setBagOpen, setCheckoutOpen } =
    useCart();

  const freeShippingThreshold = 999;
  const progressPercent = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));
  const remainingForFree = Math.max(0, freeShippingThreshold - subtotal);

  return (
    <Sheet open={isBagOpen} onOpenChange={setBagOpen}>
      <SheetContent className="w-full sm:max-w-md p-0 flex flex-col bg-[#0A0A09] text-[#FAF7F0] border-l border-[#242420]">
        {/* Drawer Header */}
        <SheetHeader className="px-6 pt-6 pb-4 border-b border-[#1F1F1B] text-left">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase mb-0.5 font-semibold">
                Your Cart
              </p>
              <SheetTitle className="font-display text-2xl font-semibold text-white">
                Your Bag
              </SheetTitle>
            </div>
            <span className="text-xs font-mono text-[#D4AF37] bg-[#161613] px-2.5 py-1 rounded-full border border-[#2A2A24]">
              {count} {count === 1 ? "Item" : "Items"}
            </span>
          </div>

          {/* Complimentary Shipping Progress */}
          {cart.length > 0 && (
            <div className="mt-4 p-3.5 rounded-2xl bg-[#121210] border border-[#22221E]">
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="font-medium text-white flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                  {remainingForFree === 0
                    ? "Free Shipping Unlocked"
                    : `Add ${inr.format(remainingForFree)} for free shipping`}
                </span>
                <span className="font-mono text-[10px] text-[#D4AF37]">{progressPercent}%</span>
              </div>
              <div className="w-full h-1.5 bg-[#1F1F1B] rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#C5A059] to-[#D4AF37] rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
          )}
        </SheetHeader>

        {/* Bag Items List */}
        <div className="flex-1 overflow-y-auto px-6 py-4 divide-y divide-[#181815]">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-16">
              <div className="w-16 h-16 rounded-full bg-[#141412] border border-[#242420] flex items-center justify-center mb-4 text-[#706E66]">
                <ShoppingBag className="w-7 h-7 stroke-[1.5]" />
              </div>
              <h4 className="font-display text-lg font-medium text-white mb-1">
                Your bag is empty
              </h4>
              <p className="text-xs text-[#A8A49A] max-w-xs mb-6 leading-relaxed">
                Explore our pure sugarcane jaggery collection to start your order.
              </p>
              <Button
                asChild
                className="rounded-full px-6 bg-[#D4AF37] text-[#080807] hover:bg-[#EAD698] font-semibold transition-colors"
                onClick={() => setBagOpen(false)}
              >
                <Link to="/collection">
                  Shop Jaggery Collection <ArrowRight className="w-4 h-4 ml-1.5" />
                </Link>
              </Button>
            </div>
          ) : (
            cart.map((item) => {
              const product = products[item.id];
              const price = product.prices[item.weight];
              const itemTotal = price * item.quantity;

              return (
                <div
                  key={`${item.id}-${item.weight}`}
                  className="py-4 flex items-center gap-4 group"
                >
                  <div className="w-16 h-16 rounded-xl bg-[#121210] border border-[#242420] p-1.5 shrink-0 flex items-center justify-center overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain filter saturate-95"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h5 className="font-display text-sm font-semibold text-white truncate">
                      {product.name}
                    </h5>
                    <p className="text-[11px] text-[#706E66] mb-2 font-mono">
                      {item.weight} · {inr.format(price)} each
                    </p>

                    <div className="flex items-center gap-2">
                      <div className="flex items-center border border-[#282824] rounded-lg bg-[#141412] overflow-hidden">
                        <button
                          type="button"
                          onClick={() => {
                            playTactileClick();
                            changeQuantity(item.id, item.weight, -1);
                          }}
                          className="w-6 h-6 flex items-center justify-center hover:bg-[#20201C] text-[#A8A49A] transition-colors cursor-pointer"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-7 text-center font-mono text-xs font-semibold text-white">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => {
                            playTactileClick();
                            changeQuantity(item.id, item.weight, 1);
                          }}
                          className="w-6 h-6 flex items-center justify-center hover:bg-[#20201C] text-[#A8A49A] transition-colors cursor-pointer"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() => {
                          playTactileClick();
                          remove(item.id, item.weight);
                        }}
                        className="text-[#706E66] hover:text-[#C84A3B] transition-colors p-1 cursor-pointer"
                        aria-label={`Remove ${product.name}`}
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <strong className="font-display text-sm font-semibold text-[#D4AF37]">
                      {inr.format(itemTotal)}
                    </strong>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Drawer Summary & Checkout Footer */}
        {cart.length > 0 && (
          <div className="p-6 bg-[#0E0E0C] border-t border-[#1F1F1B] flex flex-col gap-4">
            <div className="flex flex-col gap-1.5 text-xs text-[#A8A49A]">
              <div className="flex justify-between items-center text-sm">
                <span className="font-medium text-white">Subtotal</span>
                <strong className="font-display text-xl font-bold text-[#D4AF37]">
                  {inr.format(subtotal)}
                </strong>
              </div>
              <div className="flex justify-between items-center text-[11px] text-[#706E66]">
                <span>Shipping</span>
                <span>{remainingForFree === 0 ? "Free" : "Calculated next step"}</span>
              </div>
              <p className="text-[10px] text-[#706E66] pt-1">
                FSSAI Lic. No. 10022022000543 · Shipped fresh from our Maharashtra estate.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <Button
                size="lg"
                className="w-full rounded-full h-12 text-xs font-semibold uppercase tracking-wider bg-[#D4AF37] hover:bg-[#EAD698] text-[#080807] transition-all shadow-md active:scale-[0.99] cursor-pointer"
                onClick={() => {
                  playGoldResonance();
                  setBagOpen(false);
                  setCheckoutOpen(true);
                }}
              >
                Proceed to Checkout <ArrowRight className="w-4 h-4 ml-2" />
              </Button>

              <Button
                variant="ghost"
                size="sm"
                asChild
                className="w-full text-xs text-[#706E66] hover:text-white"
                onClick={() => setBagOpen(false)}
              >
                <Link to="/cart">View Full Cart</Link>
              </Button>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}

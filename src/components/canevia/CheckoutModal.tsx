import { useState, type FormEvent } from "react";
import { Check, Clipboard, Mail, MessageCircle, ShieldCheck, Lock } from "lucide-react";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useCart } from "@/lib/cart-context";
import { inr, products } from "@/lib/products";
import { playGoldResonance, playTactileClick } from "@/lib/sound-effects";

export function CheckoutModal() {
  const { cart, subtotal, clear, isCheckoutOpen, setCheckoutOpen } = useCart();
  const [invoice, setInvoice] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const lines = cart
      .map(
        (item, i) =>
          `${i + 1}. *${products[item.id].name}* — ${item.weight} × ${item.quantity} — ${inr.format(
            products[item.id].prices[item.weight] * item.quantity,
          )}`,
      )
      .join("\n");

    const receipt = `*CANEVIA — ORDER DETAILS*\n_Pure Sugarcane Jaggery_\n\n*CUSTOMER DETAILS*\nName: ${data.get("name")}\nPhone: ${data.get("phone")}\nEmail: ${data.get("email")}\nShipping Address: ${data.get("address")}\n\n*ITEMS ORDERED*\n${lines}\n\n*SUBTOTAL: ${inr.format(subtotal)}*\n\nPlease confirm shipping and payment details.\nFSSAI Lic. No. 10022022000543 · Kothule Industries, Pune`;

    setInvoice(receipt);
    playGoldResonance();

    window.open(
      `https://wa.me/919922341509?text=${encodeURIComponent(receipt)}`,
      "_blank",
      "noopener,noreferrer",
    );
    toast.success("Order details opened in WhatsApp.");
  };

  const copyInvoice = async () => {
    try {
      playTactileClick();
      await navigator.clipboard.writeText(invoice);
      toast.success("Order summary copied to clipboard.");
    } catch {
      toast.error("Clipboard copy failed. Please select and copy manually.");
    }
  };

  const sendBackupEmail = () => {
    playTactileClick();
    window.location.href = `mailto:princegojo5004@gmail.com?subject=${encodeURIComponent(
      "CANEVIA Order Details",
    )}&body=${encodeURIComponent(invoice)}`;
  };

  const handleClose = () => {
    if (invoice) {
      clear();
    }
    setInvoice("");
    setCheckoutOpen(false);
  };

  return (
    <Dialog
      open={isCheckoutOpen}
      onOpenChange={(open) => (open ? setCheckoutOpen(true) : handleClose())}
    >
      <DialogContent className="sm:max-w-[560px] p-6 sm:p-8 bg-[#0D0D0B] text-[#FAF7F0] border-[#242420] rounded-3xl max-h-[92vh] overflow-y-auto">
        <DialogHeader className="text-left space-y-1.5 pb-4 border-b border-[#20201C]">
          <p className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase flex items-center gap-1.5 font-semibold">
            <Lock className="w-3 h-3" /> Direct Order
          </p>
          <DialogTitle className="font-display text-2xl sm:text-3xl font-semibold text-white">
            {invoice ? "Order Registered" : "Shipping Address"}
          </DialogTitle>
          <DialogDescription className="text-xs text-[#A8A49A]">
            {invoice
              ? "Your order details are open in WhatsApp. You can also copy your receipt or email our team."
              : "Shipped fresh directly from our Maharashtra estate mill."}
          </DialogDescription>
        </DialogHeader>

        {invoice ? (
          <div className="flex flex-col gap-6 pt-4">
            <div className="flex flex-col items-center justify-center text-center p-6 bg-[#141412] rounded-2xl border border-[#242420]">
              <div className="w-12 h-12 rounded-full bg-[#D4AF37] text-[#080807] flex items-center justify-center mb-3 shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                <Check className="w-6 h-6 stroke-[3]" />
              </div>
              <h4 className="font-display text-lg font-semibold text-white">
                Order Sent to WhatsApp
              </h4>
              <p className="text-xs text-[#A8A49A] mt-1 max-w-sm">
                Our team will confirm your order, payment details, and estimated delivery.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-mono tracking-widest text-[#706E66] uppercase">
                Order Summary
              </span>
              <pre className="w-full max-h-56 overflow-y-auto p-4 rounded-xl bg-[#080807] text-[#EDE8DF] font-mono text-xs whitespace-pre-wrap leading-relaxed border border-[#22221E]">
                {invoice}
              </pre>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Button
                variant="outline"
                className="h-11 rounded-full text-xs font-medium border-[#282824] bg-[#141412] hover:bg-[#1E1E1A] text-white"
                onClick={copyInvoice}
              >
                <Clipboard className="w-4 h-4 mr-2 text-[#D4AF37]" />
                Copy Order Summary
              </Button>
              <Button
                variant="outline"
                className="h-11 rounded-full text-xs font-medium border-[#282824] bg-[#141412] hover:bg-[#1E1E1A] text-white"
                onClick={sendBackupEmail}
              >
                <Mail className="w-4 h-4 mr-2 text-[#D4AF37]" />
                Email Order Summary
              </Button>
            </div>

            <Button
              className="h-12 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#D4AF37] hover:bg-[#EAD698] text-[#080807] transition-colors shadow-md"
              onClick={handleClose}
            >
              Done & Return to Store
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 pt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-[11px] font-medium text-[#FAF7F0]">Full Name</label>
                <Input
                  name="name"
                  placeholder="e.g. Aarav Mehta"
                  required
                  maxLength={100}
                  className="bg-[#121210] border-[#282824] text-white rounded-xl h-10 text-xs focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[11px] font-medium text-[#FAF7F0]">
                  Phone (WhatsApp preferred)
                </label>
                <Input
                  name="phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  required
                  minLength={8}
                  maxLength={20}
                  className="bg-[#121210] border-[#282824] text-white rounded-xl h-10 text-xs focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[11px] font-medium text-[#FAF7F0]">Email Address</label>
              <Input
                name="email"
                type="email"
                placeholder="aarav@example.com"
                required
                maxLength={120}
                className="bg-[#121210] border-[#282824] text-white rounded-xl h-10 text-xs focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[11px] font-medium text-[#FAF7F0]">
                Complete Shipping Address & Pincode
              </label>
              <Textarea
                name="address"
                placeholder="Apartment, building, street, city, state, pincode"
                required
                minLength={12}
                maxLength={400}
                rows={3}
                className="bg-[#121210] border-[#282824] text-white rounded-xl text-xs focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] resize-none"
              />
            </div>

            <div className="p-4 rounded-xl bg-[#141412] border border-[#242420] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                <span className="text-xs font-medium text-[#A8A49A]">
                  Order Subtotal ({cart.length} {cart.length === 1 ? "item" : "items"})
                </span>
              </div>
              <strong className="font-display text-xl font-bold text-[#D4AF37]">
                {inr.format(subtotal)}
              </strong>
            </div>

            <Button
              type="submit"
              size="lg"
              className="h-12 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#D4AF37] hover:bg-[#EAD698] text-[#080807] transition-all shadow-[0_4px_20px_rgba(212,175,55,0.35)] active:scale-[0.99] mt-2 cursor-pointer"
            >
              Order on WhatsApp <MessageCircle className="w-4 h-4 ml-2" />
            </Button>

            <p className="text-[10px] text-center text-[#706E66]">
              Direct chat with Kothule Industries team. We typically respond within minutes.
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}

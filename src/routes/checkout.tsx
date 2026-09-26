import { useState, type FormEvent } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Check,
  Clipboard,
  Lock,
  Mail,
  MessageCircle,
  ShieldCheck,
  ArrowLeft,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Navbar } from "@/components/canevia/Navbar";
import { Footer } from "@/components/canevia/Footer";
import { useCart } from "@/lib/cart-context";
import { inr, products } from "@/lib/products";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title: "Checkout | CANEVIA" },
      { name: "description", content: "Complete your CANEVIA jaggery order." },
    ],
  }),
  component: CheckoutPage,
});

function CheckoutPage() {
  const { cart, subtotal, clear } = useCart();
  const [invoice, setInvoice] = useState("");
  const [step, setStep] = useState<"form" | "confirmation">("form");

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
    setStep("confirmation");
    window.open(
      `https://wa.me/919922341509?text=${encodeURIComponent(receipt)}`,
      "_blank",
      "noopener,noreferrer",
    );
    toast.success("Order opened in WhatsApp.");
  };

  const copyInvoice = async () => {
    try {
      await navigator.clipboard.writeText(invoice);
      toast.success("Order details copied to clipboard.");
    } catch {
      toast.error("Clipboard copy failed. Please select manually.");
    }
  };

  const sendBackupEmail = () => {
    window.location.href = `mailto:princegojo5004@gmail.com?subject=${encodeURIComponent(
      "CANEVIA Order Details",
    )}&body=${encodeURIComponent(invoice)}`;
  };

  const handleFinish = () => {
    clear();
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#080807] text-[#FAF7F0] selection:bg-[#D4AF37] selection:text-[#080807]">
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        <div className="max-w-[1000px] mx-auto px-6 sm:px-12">
          {/* Breadcrumb / Back Link */}
          <div className="mb-8">
            <Link
              to="/cart"
              className="inline-flex items-center gap-2 text-xs font-medium text-[#706E66] hover:text-[#D4AF37] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Bag
            </Link>
          </div>

          {/* Progress Header */}
          <div className="pb-8 border-b border-[#20201C] mb-10">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-5 h-[1.5px] bg-[#D4AF37]" />
              <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase font-semibold">
                Checkout
              </span>
            </div>
            <h1 className="font-display font-semibold text-3xl sm:text-5xl text-white tracking-tight">
              {step === "form" ? "Shipping Address" : "Order Placed"}
            </h1>
          </div>

          {step === "confirmation" ? (
            <div className="p-8 sm:p-12 rounded-3xl bg-[#11110F] border border-[#242420] shadow-[0_20px_60px_rgba(0,0,0,0.6)] flex flex-col gap-8">
              <div className="flex flex-col items-center justify-center text-center p-8 bg-[#0C0C0A] rounded-2xl border border-[#22221E]">
                <div className="w-14 h-14 rounded-full bg-[#D4AF37] text-[#080807] flex items-center justify-center mb-4 shadow-[0_0_25px_rgba(212,175,55,0.4)]">
                  <Check className="w-7 h-7 stroke-[3]" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-white">
                  Order Sent to WhatsApp
                </h3>
                <p className="text-xs sm:text-sm text-[#A8A49A] mt-2 max-w-md leading-relaxed">
                  Your order has been shared with Kothule Industries (+91 99223 41509). Our team will
                  confirm payment details and delivery schedule with you directly.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-mono tracking-widest text-[#706E66] uppercase">
                  Order Receipt
                </span>
                <pre className="w-full max-h-60 overflow-y-auto p-4 rounded-xl bg-[#080807] text-[#EDE8DF] font-mono text-xs whitespace-pre-wrap leading-relaxed border border-[#22221E]">
                  {invoice}
                </pre>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Button
                  variant="outline"
                  className="h-12 rounded-full text-xs font-semibold uppercase tracking-wider border-[#282824] bg-[#141412] hover:bg-[#1E1E1A] text-white cursor-pointer"
                  onClick={copyInvoice}
                >
                  <Clipboard className="w-4 h-4 mr-2 text-[#D4AF37]" />
                  Copy Order Details
                </Button>
                <Button
                  variant="outline"
                  className="h-12 rounded-full text-xs font-semibold uppercase tracking-wider border-[#282824] bg-[#141412] hover:bg-[#1E1E1A] text-white cursor-pointer"
                  onClick={sendBackupEmail}
                >
                  <Mail className="w-4 h-4 mr-2 text-[#D4AF37]" />
                  Email Order
                </Button>
              </div>

              <Button
                asChild
                className="h-13 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#D4AF37] hover:bg-[#EAD698] text-[#080807] transition-all shadow-md cursor-pointer"
                onClick={handleFinish}
              >
                <Link to="/">Done & Return to Store</Link>
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Form (7 cols) */}
              <div className="lg:col-span-7 bg-[#11110F] rounded-3xl p-6 sm:p-8 border border-[#242420] shadow-[0_12px_36px_rgba(0,0,0,0.5)]">
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-[11px] font-medium text-[#FAF7F0]">Full Name</label>
                      <Input
                        name="name"
                        placeholder="e.g. Aarav Mehta"
                        required
                        maxLength={100}
                        className="bg-[#0C0C0A] border-[#242420] text-white rounded-xl h-10 text-xs focus:border-[#D4AF37]"
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
                        className="bg-[#0C0C0A] border-[#242420] text-white rounded-xl h-10 text-xs focus:border-[#D4AF37]"
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
                      className="bg-[#0C0C0A] border-[#242420] text-white rounded-xl h-10 text-xs focus:border-[#D4AF37]"
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
                      className="bg-[#0C0C0A] border-[#242420] text-white rounded-xl text-xs focus:border-[#D4AF37] resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="h-13 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#D4AF37] hover:bg-[#EAD698] text-[#080807] transition-all shadow-[0_4px_20px_rgba(212,175,55,0.35)] active:scale-[0.99] mt-4 cursor-pointer"
                  >
                    Order on WhatsApp <MessageCircle className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              </div>

              {/* Order Summary (5 cols) */}
              <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-[#11110F] border border-[#242420] shadow-[0_12px_36px_rgba(0,0,0,0.5)] flex flex-col gap-6">
                <h3 className="font-display text-xl font-semibold text-white">Order Summary</h3>

                <div className="flex flex-col divide-y divide-[#1C1C18]">
                  {cart.map((item) => {
                    const product = products[item.id];
                    const price = product.prices[item.weight];
                    return (
                      <div
                        key={`${item.id}-${item.weight}`}
                        className="py-3.5 first:pt-0 last:pb-0 flex justify-between items-center text-xs"
                      >
                        <div>
                          <strong className="text-white block font-medium">{product.name}</strong>
                          <span className="text-[11px] text-[#706E66] font-mono">
                            {item.weight} × {item.quantity}
                          </span>
                        </div>
                        <span className="font-display font-semibold text-[#D4AF37]">
                          {inr.format(price * item.quantity)}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <div className="pt-4 border-t border-[#1C1C18] flex justify-between items-center text-sm">
                  <span className="font-medium text-white">Total Amount</span>
                  <strong className="font-display text-2xl font-bold text-[#D4AF37]">
                    {inr.format(subtotal)}
                  </strong>
                </div>

                <div className="p-4 rounded-2xl bg-[#0A0A08] border border-[#20201C] flex flex-col gap-2 text-[11px] text-[#706E66]">
                  <span className="flex items-center gap-1.5 text-[#FAF7F0]">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" /> Insured Express Delivery
                  </span>
                  <span>Direct estate mill dispatch · FSSAI Lic. 10022022000543</span>
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

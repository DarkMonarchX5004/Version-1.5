import { useState, type FormEvent } from "react";
import { MessageCircle, Building2, Sparkles, ShieldCheck } from "lucide-react";
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

export function B2BModal() {
  const { isB2BOpen, setB2BOpen } = useCart();
  const [tier, setTier] = useState("100 kg");

  const tiers = [
    { weight: "50 kg", badge: "Starter Tier", note: "Cafes & Bakeries" },
    { weight: "100 kg", badge: "Standard Tier", note: "Restaurants & Catering" },
    { weight: "500 kg+", badge: "Bulk Tier", note: "Manufacturers & Export" },
  ];

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const text = `*CANEVIA — WHOLESALE & BULK INQUIRY*\n_Kothule Industries, Pune_\n\n*CONTACT DETAILS*\nName: ${data.get("name")}\nCompany: ${data.get("company")}\nCity / Delivery Location: ${data.get("city")}\n\n*ORDER SCOPE*\nEstimated Volume: ${tier}\nNotes / Requirements: ${data.get("notes") || "Please send current wholesale pricing and sample details."}\n\nFSSAI Lic. No. 10022022000543`;

    window.open(
      `https://wa.me/919922341509?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer",
    );
    toast.success("Wholesale inquiry opened in WhatsApp.");
    setB2BOpen(false);
  };

  return (
    <Dialog open={isB2BOpen} onOpenChange={setB2BOpen}>
      <DialogContent className="sm:max-w-[560px] p-6 sm:p-8 bg-[#0D0D0B] text-[#FAF7F0] border-[#242420] rounded-3xl max-h-[92vh] overflow-y-auto">
        <DialogHeader className="text-left space-y-1.5 pb-4 border-b border-[#20201C]">
          <p className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase flex items-center gap-1.5 font-semibold">
            <Building2 className="w-3.5 h-3.5" /> Direct Bulk Desk
          </p>
          <DialogTitle className="font-display text-2xl sm:text-3xl font-semibold text-white">
            Wholesale & Bulk Orders
          </DialogTitle>
          <DialogDescription className="text-xs text-[#A8A49A]">
            Direct estate pricing for cafes, bakeries, restaurants, gift hampers, and export
            partners.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5 pt-4">
          {/* Volume Tier Selector */}
          <div className="flex flex-col gap-2">
            <label className="text-[11px] font-mono uppercase tracking-wider text-[#706E66]">
              Select Volume
            </label>
            <div className="grid grid-cols-3 gap-2">
              {tiers.map((item) => (
                <button
                  type="button"
                  key={item.weight}
                  onClick={() => {
                    setTier(item.weight);
                  }}
                  className={`flex flex-col items-center justify-center p-3 rounded-xl border text-center transition-all cursor-pointer ${
                    tier === item.weight
                      ? "bg-[#D4AF37] text-[#080807] border-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.3)]"
                      : "bg-[#141412] text-white border-[#242420] hover:border-[#383830]"
                  }`}
                >
                  <span className="font-display text-base font-bold leading-tight">
                    {item.weight}
                  </span>
                  <span
                    className={`text-[9px] font-semibold mt-1 uppercase tracking-wider ${
                      tier === item.weight ? "text-[#080807]" : "text-[#D4AF37]"
                    }`}
                  >
                    {item.badge}
                  </span>
                  <span className="text-[8px] opacity-75 mt-0.5 hidden sm:inline">{item.note}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Form Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-[11px] font-medium text-[#FAF7F0]">Full Name</label>
              <Input
                name="name"
                placeholder="Your full name"
                required
                maxLength={80}
                className="bg-[#121210] border-[#282824] text-white rounded-xl h-10 text-xs focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[11px] font-medium text-[#FAF7F0]">Company / Business</label>
              <Input
                name="company"
                placeholder="Bakery, Hotel, Brand"
                required
                maxLength={100}
                className="bg-[#121210] border-[#282824] text-white rounded-xl h-10 text-xs focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[11px] font-medium text-[#FAF7F0]">Delivery City / Location</label>
            <Input
              name="city"
              placeholder="City, State / Export Port"
              required
              maxLength={80}
              className="bg-[#121210] border-[#282824] text-white rounded-xl h-10 text-xs focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[11px] font-medium text-[#FAF7F0]">
              Requirements or Questions
            </label>
            <Textarea
              name="notes"
              placeholder="E.g. Monthly volume, grain size preference, sample request..."
              maxLength={500}
              rows={3}
              className="bg-[#121210] border-[#282824] text-white rounded-xl text-xs focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] resize-none"
            />
          </div>

          <div className="p-3.5 rounded-xl bg-[#141412] border border-[#242420] flex items-center gap-3 text-xs text-[#A8A49A]">
            <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0" />
            <span>
              Direct factory pricing from Kothule Industries with complete FSSAI & batch lab
              certificates.
            </span>
          </div>

          <Button
            type="submit"
            size="lg"
            className="h-12 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#D4AF37] hover:bg-[#EAD698] text-[#080807] transition-all shadow-[0_4px_20px_rgba(212,175,55,0.35)] active:scale-[0.99] cursor-pointer"
          >
            Request Quote on WhatsApp <MessageCircle className="w-4 h-4 ml-2" />
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

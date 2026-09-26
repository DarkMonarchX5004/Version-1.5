import { ArrowRight, Building2, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart-context";

export function WholesaleBand() {
  const { setB2BOpen } = useCart();

  return (
    <section
      id="wholesale"
      className="py-24 px-6 sm:px-12 bg-[#0E0E0C] border-t border-[#22221E] relative overflow-hidden"
    >
      <div className="ambient-glow-gold top-1/2 right-10 w-80 h-80 opacity-20 pointer-events-none" />

      <div className="max-w-[1360px] mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-10 relative z-10">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-3">
            <Building2 className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase font-semibold">
              Wholesale & Bulk Orders
            </span>
          </div>

          <h2 className="font-display font-semibold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight mb-4">
            Pure jaggery in bulk.
          </h2>

          <p className="text-xs sm:text-sm text-[#A8A49A] leading-relaxed mb-6">
            Direct farm-to-kitchen supply for bakeries, coffee roasters, restaurants, and export.
            Available in 50 kg to 500 kg+ batches with full FSSAI certification and estate-direct
            pricing.
          </p>

          <div className="flex flex-wrap items-center gap-3 text-xs text-[#706E66]">
            <span className="flex items-center gap-1.5 text-[#FAF7F0]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" /> FSSAI Batch Certified
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5 text-[#FAF7F0]">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" /> Custom Packaging & Cuts
            </span>
            <span>•</span>
            <span>50kg – 500kg+ Tiers</span>
          </div>
        </div>

        <Button
          size="lg"
          onClick={() => {
            setB2BOpen(true);
          }}
          data-cursor="WHOLESALE"
          className="rounded-full h-14 px-8 text-xs font-semibold uppercase tracking-wider bg-[#D4AF37] hover:bg-[#EAD698] text-[#080807] transition-all shadow-[0_8px_25px_rgba(212,175,55,0.35)] active:scale-95 shrink-0 cursor-pointer"
        >
          Get Wholesale Quote <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </section>
  );
}

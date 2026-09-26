import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Coffee, Wine, Utensils, Sparkles, ArrowRight, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { gastronomicPairings, products, inr } from "@/lib/products";
import { useCart } from "@/lib/cart-context";
import { playGoldResonance, playTactileClick } from "@/lib/sound-effects";

export function GastronomyPairings() {
  const { add } = useCart();
  const [activeId, setActiveId] = useState(gastronomicPairings[0].id);

  const activePairing =
    gastronomicPairings.find((p) => p.id === activeId) || gastronomicPairings[0];
  const linkedProduct = products[activePairing.productId];

  const getCategoryIcon = (category: string) => {
    if (category.includes("Coffee")) return Coffee;
    if (category.includes("Tea")) return Sparkles;
    if (category.includes("Mixology")) return Wine;
    return Utensils;
  };

  return (
    <section className="py-24 sm:py-32 px-6 sm:px-12 bg-[#080807] border-t border-[#22221E] relative">
      <div className="max-w-[1360px] mx-auto">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-[1.5px] bg-[#D4AF37]" />
              <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase font-semibold">
                Brew & Food Pairings
              </span>
            </div>
            <h2 className="font-display font-semibold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.02]">
              Pairings for coffee, <br />
              <em className="gold-shimmer font-normal not-italic">tea, and cooking.</em>
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-[#A8A49A] max-w-md leading-relaxed">
            Replace refined white sugar with rich, natural sweetness that complements coffee roasts,
            warm spices, and baked goods.
          </p>
        </div>

        {/* Pairing Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {gastronomicPairings.map((p) => {
            const Icon = getCategoryIcon(p.category);
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => {
                  playTactileClick();
                  setActiveId(p.id);
                }}
                data-cursor="SELECT"
                className={`p-4 sm:p-5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col gap-2 ${
                  activeId === p.id
                    ? "bg-[#161613] border-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.25)]"
                    : "bg-[#0E0E0C] border-[#22221E] hover:border-[#383830] opacity-80 hover:opacity-100"
                }`}
              >
                <div className="flex items-center justify-between">
                  <Icon
                    className={`w-4 h-4 ${activeId === p.id ? "text-[#D4AF37]" : "text-[#706E66]"}`}
                  />
                  <span className="text-[9px] font-mono uppercase tracking-wider text-[#706E66]">
                    {p.category}
                  </span>
                </div>
                <strong className="text-xs sm:text-sm font-display font-semibold text-white truncate">
                  {p.title}
                </strong>
              </button>
            );
          })}
        </div>

        {/* Featured Pairing Card (Detailed View) */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#11110F] border border-[#282824] shadow-[0_20px_60px_rgba(0,0,0,0.5)] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text Detail (8 cols) */}
          <div className="lg:col-span-8 flex flex-col items-start">
            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded-full bg-[#D4AF37]/15 text-[#D4AF37] text-[10px] font-mono tracking-wider font-semibold">
                {activePairing.category}
              </span>
              <span className="text-xs font-mono text-[#A8A49A]">Notes: {activePairing.notes}</span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-4">
              {activePairing.title}
            </h3>

            <div className="p-5 rounded-2xl bg-[#0A0A08] border border-[#22221E] w-full mb-6">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#706E66] block mb-2">
                How to Prepare
              </span>
              <p className="text-xs sm:text-sm text-[#FAF7F0] leading-relaxed font-sans">
                {activePairing.recipeHeadline && (
                  <strong className="block font-semibold text-white">
                    {activePairing.recipeHeadline}
                  </strong>
                )}
                <span className="block">{activePairing.recipe}</span>
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Button
                asChild
                className="rounded-full h-11 px-6 text-xs font-semibold uppercase tracking-wider bg-[#D4AF37] hover:bg-[#EAD698] text-[#080807] transition-all shadow-md active:scale-95"
              >
                <Link to="/product/$id" params={{ id: linkedProduct.id }}>
                  View {linkedProduct.name} <ArrowRight className="w-3.5 h-3.5 ml-2" />
                </Link>
              </Button>

              <Button
                variant="outline"
                className="rounded-full h-11 px-6 text-xs font-semibold uppercase tracking-wider text-white border-[#383830] hover:bg-white/10 transition-all cursor-pointer"
                onClick={() => {
                  playGoldResonance();
                  add(linkedProduct.id, "500g", 1);
                }}
              >
                <Plus className="w-3.5 h-3.5 mr-2 text-[#D4AF37]" />
                Add 500g ({inr.format(linkedProduct.prices["500g"])})
              </Button>
            </div>
          </div>

          {/* Right Product Spotlight Thumbnail (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-[#0A0A08] border border-[#22221E]">
            <div className="w-40 h-40 flex items-center justify-center mb-4">
              <img
                src={linkedProduct.image}
                alt={linkedProduct.name}
                className="w-full h-full object-contain filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.6)]"
              />
            </div>
            <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-wider">
              {linkedProduct.subtitle}
            </span>
            <strong className="text-base font-display font-semibold text-white mt-0.5">
              {linkedProduct.name}
            </strong>
            <span className="text-xs text-[#706E66] mt-1">{linkedProduct.note}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

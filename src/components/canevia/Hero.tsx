import { Link } from "@tanstack/react-router";
import { ArrowDownRight, ArrowRight, ShieldCheck, Sprout, Flame, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { brandAssets } from "@/lib/products";
import { playTactileClick, playGoldResonance } from "@/lib/sound-effects";

export function Hero() {
  return (
    <section
      id="overview"
      className="relative min-h-[94vh] w-[min(1440px,calc(100%-32px))] mx-auto mt-24 mb-16 rounded-[36px] overflow-hidden bg-[#0A0A09] text-[#FAF7F0] border border-[#242420] shadow-[0_35px_90px_rgba(0,0,0,0.7)] grid grid-cols-1 lg:grid-cols-12 items-center"
    >
      {/* Ambient Chiaroscuro Backlight */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-[#D4AF37]/12 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[420px] h-[420px] rounded-full bg-[#244030]/20 blur-[130px] pointer-events-none" />

      {/* Subtle Noise Texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      {/* Copy Column (Left 7 cols) */}
      <div className="lg:col-span-7 z-10 flex flex-col justify-center px-6 sm:px-12 lg:px-16 py-16 lg:py-24">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-[1.5px] bg-[#D4AF37]" />
          <span className="text-[11px] font-mono tracking-[0.25em] text-[#D4AF37] uppercase font-bold">
            Single-Origin Sugarcane · Harvest 2026
          </span>
        </div>

        {/* Display Heading */}
        <h1 className="font-display font-semibold text-5xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-[-0.03em] leading-[0.96] text-white mb-8">
          Pure jaggery. <br />
          <em className="gold-shimmer not-italic font-normal">Radically refined.</em>
        </h1>

        {/* Subheadline */}
        <p className="text-sm sm:text-base lg:text-lg text-[#A8A49A] font-normal leading-relaxed max-w-xl mb-10">
          <strong className="block font-semibold text-white">Maharashtra Cane, Purely Crafted</strong>
          <span className="block">
            Okra-clarified, woodfired, mineral-rich, never bleached.
          </span>
        </p>

        {/* Provenance Keynotes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg mb-10">
          <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#141412] border border-[#242420] backdrop-blur-sm">
            <div className="w-9 h-9 rounded-xl bg-[#D4AF37]/15 flex items-center justify-center shrink-0 border border-[#D4AF37]/30">
              <Sprout className="w-4 h-4 text-[#D4AF37]" />
            </div>
            <div className="flex flex-col leading-tight">
              <strong className="text-xs font-semibold text-white">Single-Estate Cane</strong>
              <span className="text-[10px] text-[#706E66]">Traceable Maharashtra riverbanks</span>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#141412] border border-[#242420] backdrop-blur-sm">
            <div className="w-9 h-9 rounded-xl bg-[#D4AF37]/15 flex items-center justify-center shrink-0 border border-[#D4AF37]/30">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
            </div>
            <div className="flex flex-col leading-tight">
              <strong className="text-xs font-semibold text-white">Zero Chemical Bleach</strong>
              <span className="text-[10px] text-[#706E66]">Clarified with organic okra juice</span>
            </div>
          </div>
        </div>

        {/* CTA Actions */}
        <div className="flex flex-wrap items-center gap-4">
          <Button
            size="lg"
            asChild
            className="rounded-full h-13 px-8 text-xs font-semibold uppercase tracking-wider bg-[#D4AF37] hover:bg-[#EAD698] text-[#080807] transition-all shadow-[0_8px_25px_rgba(212,175,55,0.35)] active:scale-95 cursor-pointer"
            onClick={() => playGoldResonance()}
            data-cursor="SHOP"
          >
            <a href="#collection">
              Shop the Collection <ArrowDownRight className="w-4 h-4 ml-2" />
            </a>
          </Button>

          <Button
            size="lg"
            variant="outline"
            asChild
            className="rounded-full h-13 px-7 text-xs font-semibold uppercase tracking-wider text-[#FAF7F0] hover:text-white bg-[#141412] hover:bg-[#1E1E1B] border border-[#282824] transition-all cursor-pointer"
            onClick={() => playTactileClick()}
            data-cursor="PACKAGING"
          >
            <a href="#packaging">
              Explore Packaging <ArrowRight className="w-4 h-4 ml-2 text-[#D4AF37]" />
            </a>
          </Button>
        </div>
      </div>

      {/* Hero Visual Stage (Right 5 cols) */}
      <div className="lg:col-span-5 relative h-full min-h-[500px] lg:min-h-[720px] flex items-center justify-center p-8 lg:p-12">
        {/* Soft Radial Ambient Glow */}
        <div className="absolute w-[85%] aspect-square rounded-full bg-radial from-[#D4AF37]/25 via-[#D4AF37]/5 to-transparent blur-3xl" />

        {/* Photorealistic Hero Imagery */}
        <div className="relative z-10 w-full max-w-[480px] flex flex-col items-center">
          <img
            src={brandAssets.pouchFront}
            alt="CANEVIA pure sugarcane jaggery pouch"
            width={480}
            height={600}
            decoding="async"
            className="w-full max-h-[600px] object-contain drop-shadow-[0_36px_50px_rgba(0,0,0,0.85)] hover:scale-103 transition-transform duration-700 ease-out select-none"
            loading="eager"
          />
        </div>
      </div>

      {/* Bottom Info Bar */}
      <div className="absolute bottom-6 left-8 right-8 hidden md:flex items-center justify-between text-[10px] font-mono text-[#706E66] tracking-widest uppercase border-t border-[#22221E] pt-4 z-10">
        <span>EST. 1999 · KOTHULE INDUSTRIES · PUNE, MAHARASHTRA</span>
        <a
          href="#packaging"
          className="flex items-center gap-1.5 text-[#D4AF37] hover:text-[#EAD698] transition-colors"
          onClick={() => playTactileClick()}
        >
          <span>EXPLORE 3D PACKAGING</span>
          <ArrowDownRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </section>
  );
}

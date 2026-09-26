import { useState, useRef, type MouseEvent } from "react";
import { Rotate3D, ShieldCheck, Sparkles, ChevronLeft, ChevronRight, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { brandAssets } from "@/lib/products";

export function PackagingInspector() {
  const [flipped, setFlipped] = useState(false);
  const [serving, setServing] = useState<100 | 20>(100);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [lightPos, setLightPos] = useState({ x: 50, y: 50 });
  const containerRef = useRef<HTMLDivElement>(null);

  const factor = serving / 100;

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const percentX = (x / rect.width) * 100;
    const percentY = (y / rect.height) * 100;
    setLightPos({ x: percentX, y: percentY });

    // Calculate subtle 3D tilt (-10 to 10 deg)
    const tiltX = ((y - rect.height / 2) / (rect.height / 2)) * -12;
    const tiltY = ((x - rect.width / 2) / (rect.width / 2)) * 12;
    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setLightPos({ x: 50, y: 50 });
  };

  const toggleFlip = () => {
    setFlipped((prev) => !prev);
  };

  return (
    <section
      id="packaging"
      className="py-24 sm:py-36 px-6 sm:px-12 bg-[#090908] border-t border-[#22221E] relative overflow-hidden"
    >
      {/* Ambient Lighting Orbs */}
      <div className="ambient-glow-gold top-1/4 left-1/4 w-96 h-96 opacity-25" />
      <div className="ambient-glow-emerald bottom-1/4 right-1/4 w-80 h-80 opacity-20" />

      <div className="max-w-[1360px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        {/* Left Narrative Block (4 cols) */}
        <div className="lg:col-span-4 flex flex-col items-start">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-5 h-[1.5px] bg-[#D4AF37]" />
            <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase font-semibold">
              Packaging & Freshness
            </span>
          </div>

          <h2 className="font-display font-semibold text-3xl sm:text-5xl text-white tracking-tight leading-[1.05] mb-6">
            Crafted outside. <br />
            <em className="gold-shimmer font-normal not-italic">Pure within.</em>
          </h2>

          <p className="text-xs sm:text-sm text-[#A8A49A] leading-relaxed mb-6">
            A multi-layer barrier seal protects natural moisture, rich golden color, and fresh
            aroma. Keeps your jaggery soft and flavorful without preservatives or anti-caking
            additives.
          </p>

          <div className="flex flex-col gap-3.5 mb-8 text-xs text-[#706E66]">
            <div className="flex items-center gap-2.5 text-[#FAF7F0]">
              <Lock className="w-4 h-4 text-[#D4AF37]" />
              <span>Moisture & Oxygen Barrier Seal</span>
            </div>
            <div className="flex items-center gap-2.5 text-[#FAF7F0]">
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span>Clear Product Window</span>
            </div>
            <div className="flex items-center gap-2.5 text-[#FAF7F0]">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              <span>FSSAI Lic. No. 10022022000543 Certified</span>
            </div>
          </div>

          <Button
            variant="outline"
            className="rounded-full h-12 px-7 text-xs font-semibold tracking-wider uppercase border-[#383830] bg-[#141412] hover:bg-[#1E1E1A] text-white shadow-lg transition-all active:scale-95 cursor-pointer"
            onClick={toggleFlip}
            data-cursor="ROTATE"
          >
            <Rotate3D className="w-4 h-4 mr-2 text-[#D4AF37]" />
            {flipped ? "Flip to Front View" : "Flip to Nutrition & Ingredients"}
          </Button>
        </div>

        {/* Center 3D Interactive Vessel Stage (5 cols) */}
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="lg:col-span-5 flex flex-col items-center justify-center relative py-6"
        >
          <div
            className="relative w-full max-w-[420px] aspect-[4/5] [perspective:1800px] flex items-center justify-center cursor-pointer"
            onClick={toggleFlip}
            data-cursor={flipped ? "SHOW FRONT" : "FLIP REVERSE"}
          >
            {/* Dynamic 3D Card Shell */}
            <div
              className={`relative w-full h-full transition-transform duration-700 ease-out preserve-3d`}
              style={{
                transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y + (flipped ? 180 : 0)}deg)`,
              }}
            >
              {/* Front Face */}
              <div className="absolute inset-0 backface-hidden flex items-center justify-center p-2">
                <div className="relative w-full h-full flex items-center justify-center">
                  <img
                    src={brandAssets.pouchFront}
                    alt="Front Presentation of CANEVIA Sovereign Sugarcane Reserve Pouch"
                    className="w-full h-full object-contain filter drop-shadow-[0_36px_50px_rgba(0,0,0,0.85)] select-none"
                    loading="eager"
                  />

                  {/* Specular Light Reflection Overlay */}
                  <div
                    className="absolute inset-0 pointer-events-none rounded-3xl opacity-35 mix-blend-overlay transition-opacity duration-300"
                    style={{
                      background: `radial-gradient(circle at ${lightPos.x}% ${lightPos.y}%, rgba(255, 244, 212, 0.8) 0%, transparent 60%)`,
                    }}
                  />
                </div>
              </div>

              {/* Back Face */}
              <div className="absolute inset-0 backface-hidden [transform:rotateY(180deg)] flex items-center justify-center p-2">
                <div className="relative w-full h-full flex items-center justify-center">
                  <img
                    src={brandAssets.pouchBack}
                    alt="Back Presentation of CANEVIA Pouch with nutrition and manufacturer details"
                    className="w-full h-full object-contain filter drop-shadow-[0_36px_50px_rgba(0,0,0,0.85)] select-none"
                    loading="lazy"
                  />

                  {/* Specular Light Reflection Overlay */}
                  <div
                    className="absolute inset-0 pointer-events-none rounded-3xl opacity-35 mix-blend-overlay transition-opacity duration-300"
                    style={{
                      background: `radial-gradient(circle at ${100 - lightPos.x}% ${lightPos.y}%, rgba(255, 244, 212, 0.8) 0%, transparent 60%)`,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 mt-6 text-[10px] font-mono tracking-widest text-[#706E66] uppercase">
            <ChevronLeft className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Click or Tap Pouch to Rotate 180°</span>
            <ChevronRight className="w-3.5 h-3.5 text-[#D4AF37]" />
          </div>
        </div>

        {/* Right Nutritional Reserve Panel (3 cols) */}
        <aside className="lg:col-span-3 p-6 sm:p-8 rounded-3xl bg-[#121210] border border-[#282824] shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
          <div className="flex items-center justify-between pb-4 border-b border-[#22221E]">
            <div>
              <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase">
                Certified Lab Test
              </span>
              <h3 className="font-display text-lg font-semibold text-white">
                Nutrition Facts
              </h3>
            </div>
            <span className="font-mono text-xs font-bold text-[#D4AF37] bg-[#1C1C19] border border-[#2E2E28] px-2.5 py-0.5 rounded-md">
              Batch 2026
            </span>
          </div>

          {/* Serving Toggle */}
          <div className="flex items-center gap-1 p-1 my-5 rounded-xl bg-[#080807] border border-[#22221E]">
            <button
              type="button"
              onClick={() => {
                setServing(100);
              }}
              className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                serving === 100
                  ? "bg-[#D4AF37] text-[#080807] font-bold shadow-xs"
                  : "text-[#706E66] hover:text-white"
              }`}
            >
              Per 100g
            </button>
            <button
              type="button"
              onClick={() => {
                setServing(20);
              }}
              className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                serving === 20
                  ? "bg-[#D4AF37] text-[#080807] font-bold shadow-xs"
                  : "text-[#706E66] hover:text-white"
              }`}
            >
              Per Serving (20g)
            </button>
          </div>

          {/* Nutritional Data List */}
          <dl className="divide-y divide-[#1C1C19] text-xs">
            <div className="py-2.5 flex justify-between items-baseline">
              <dt className="text-[#A8A49A]">Energy</dt>
              <dd className="font-display font-semibold text-white text-sm">
                {Math.round(375 * factor)}{" "}
                <span className="text-[10px] font-normal text-[#706E66]">kcal</span>
              </dd>
            </div>
            <div className="py-2.5 flex justify-between items-baseline">
              <dt className="text-[#A8A49A]">Carbohydrates</dt>
              <dd className="font-display font-semibold text-white text-sm">
                {Math.round(95 * factor)}{" "}
                <span className="text-[10px] font-normal text-[#706E66]">g</span>
              </dd>
            </div>
            <div className="py-2.5 flex justify-between items-baseline">
              <dt className="text-[#A8A49A]">Natural Sucrose</dt>
              <dd className="font-display font-semibold text-white text-sm">
                {Math.round(90 * factor)}{" "}
                <span className="text-[10px] font-normal text-[#706E66]">g</span>
              </dd>
            </div>
            <div className="py-2.5 flex justify-between items-baseline">
              <dt className="text-[#A8A49A]">Dietary Iron (Fe)</dt>
              <dd className="font-display font-semibold text-[#D4AF37] text-sm">
                {(11.4 * factor).toFixed(1)}{" "}
                <span className="text-[10px] font-normal text-[#706E66]">mg</span>
              </dd>
            </div>
            <div className="py-2.5 flex justify-between items-baseline">
              <dt className="text-[#A8A49A]">Magnesium (Mg)</dt>
              <dd className="font-display font-semibold text-[#D4AF37] text-sm">
                {Math.round(70 * factor)}{" "}
                <span className="text-[10px] font-normal text-[#706E66]">mg</span>
              </dd>
            </div>
            <div className="py-2.5 flex justify-between items-baseline">
              <dt className="text-[#A8A49A]">Ingredients</dt>
              <dd className="font-medium text-[#FAF7F0] text-right">100% Sugarcane Jaggery</dd>
            </div>
          </dl>

          {/* Compliance & Storage Footer */}
          <div className="mt-5 pt-4 border-t border-[#22221E] flex flex-col gap-2">
            <div className="flex items-center gap-2 text-[11px] text-[#A8A49A]">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <span>FSSAI LIC NO. 10022022000543</span>
            </div>
            <p className="text-[10px] text-[#706E66] leading-relaxed">
              Store in a cool, dry place. Reseal barrier zip firmly after each opening to lock in
              natural humidity.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}

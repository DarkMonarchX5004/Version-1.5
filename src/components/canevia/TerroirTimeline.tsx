import { useState } from "react";
import { Thermometer, Clock, ShieldCheck, Flame, ArrowRight } from "lucide-react";
import { alchemyProcessSteps } from "@/lib/products";
import { playTactileClick } from "@/lib/sound-effects";

export function TerroirTimeline() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = alchemyProcessSteps[activeStepIndex];

  return (
    <section className="py-24 sm:py-36 px-6 sm:px-12 bg-[#0C0C0B] border-t border-[#22221E] relative overflow-hidden">
      {/* Background Decorative Watermark */}
      <div className="absolute top-1/2 -right-16 -translate-y-1/2 text-[clamp(100px,18vw,260px)] font-display font-bold text-white/[0.015] tracking-tighter select-none pointer-events-none">
        CRAFT
      </div>

      <div className="max-w-[1360px] mx-auto relative z-10">
        {/* Header Block */}
        <div className="max-w-2xl mb-16 sm:mb-24">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-5 h-[1.5px] bg-[#D4AF37]" />
            <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase font-semibold">
              Traditional Process
            </span>
          </div>
          <h2 className="font-display font-semibold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.02] mb-6">
            From riverbank soil, <br />
            <em className="gold-shimmer font-normal not-italic">to pure gold.</em>
          </h2>
          <p className="text-xs sm:text-sm text-[#A8A49A] leading-relaxed">
            Most commercial sugar is bleached with sulphur and stripped of nutrients. CANEVIA is made
            with a traditional 4-step slow-cooking process that preserves natural minerals and authentic
            flavor.
          </p>
        </div>

        {/* Interactive Progress Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-12">
          {alchemyProcessSteps.map((step, idx) => (
            <button
              key={step.step}
              type="button"
              onClick={() => {
                playTactileClick();
                setActiveStepIndex(idx);
              }}
              data-cursor={`STEP 0${idx + 1}`}
              className={`p-5 rounded-2xl border text-left transition-all cursor-pointer relative overflow-hidden ${
                activeStepIndex === idx
                  ? "bg-[#181815] border-[#D4AF37] shadow-[0_0_25px_rgba(212,175,55,0.2)]"
                  : "bg-[#11110F] border-[#242420] hover:border-[#383830] opacity-75 hover:opacity-100"
              }`}
            >
              {activeStepIndex === idx && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D4AF37] to-[#EAD698]" />
              )}
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-[10px] text-[#706E66] tracking-widest uppercase">
                  Step {step.step}
                </span>
                <span className="text-[10px] font-mono text-[#D4AF37]">{step.temp}</span>
              </div>
              <h4 className="font-display text-sm sm:text-base font-semibold text-white leading-snug">
                {step.phase}
              </h4>
            </button>
          ))}
        </div>

        {/* Deep Dive Stage Display */}
        <div className="p-8 sm:p-14 rounded-3xl bg-[#141412] border border-[#282824] shadow-[0_25px_70px_rgba(0,0,0,0.6)] grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Text Narrative (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-2.5 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] text-[10px] font-mono font-bold tracking-wider">
                STEP N° {activeStep.step} / 04
              </span>
              <span className="text-xs text-[#706E66] font-mono flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#D4AF37]" /> {activeStep.time}
              </span>
            </div>

            <h3 className="font-display text-2xl sm:text-4xl font-semibold text-white mb-5 leading-tight">
              {activeStep.title}
            </h3>

            <p className="text-sm sm:text-base text-[#A8A49A] leading-relaxed mb-8">
              {activeStep.description}
            </p>

            <div className="flex items-center gap-3 p-4 rounded-2xl bg-[#0C0C0B] border border-[#242420] w-full max-w-lg">
              <ShieldCheck className="w-5 h-5 text-[#D4AF37] shrink-0" />
              <div className="flex flex-col">
                <span className="text-[10px] font-mono text-[#706E66] uppercase tracking-wider">
                  Purity Standard
                </span>
                <strong className="text-xs text-white font-medium">{activeStep.highlight}</strong>
              </div>
            </div>
          </div>

          {/* Right Visual / Metric Crucible (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 sm:p-8 rounded-2xl bg-[#0E0E0C] border border-[#20201C]">
            <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#997A2E] to-[#D4AF37] flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(212,175,55,0.4)]">
              <Flame className="w-9 h-9 text-[#080807]" />
            </div>

            <span className="font-mono text-xs text-[#706E66] tracking-widest uppercase mb-1">
              Cooking Temperature
            </span>
            <strong className="font-display text-3xl sm:text-4xl text-white font-bold mb-2">
              {activeStep.temp}
            </strong>
            <p className="text-xs text-[#A8A49A] text-center max-w-xs mb-6">
              Temperature carefully regulated by experienced traditional boilers in Maharashtra.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#D4AF37]">
              <span>Next Step</span>
              <button
                type="button"
                onClick={() => {
                  playTactileClick();
                  setActiveStepIndex((prev) => (prev + 1) % alchemyProcessSteps.length);
                }}
                className="p-2 rounded-full bg-[#181815] hover:bg-[#D4AF37] hover:text-[#080807] transition-colors border border-[#2A2A24] cursor-pointer"
                aria-label="Next step"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

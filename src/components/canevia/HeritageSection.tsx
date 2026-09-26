import { purityPillars, brandAssets } from "@/lib/products";

export function HeritageSection() {
  return (
    <section
      id="heritage"
      className="py-24 sm:py-36 px-6 sm:px-12 bg-[#080807] text-[#FAF7F0] relative overflow-hidden border-t border-[#22221E]"
    >
      {/* Background Brand Watermark */}
      <div className="absolute top-10 right-4 lg:right-16 text-[clamp(80px,14vw,220px)] font-display font-bold text-white/[0.015] tracking-tighter select-none pointer-events-none">
        KOTHULE
      </div>

      <div className="max-w-[1360px] mx-auto relative z-10">
        {/* Header Block */}
        <div className="max-w-2xl mb-20">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-5 h-[1.5px] bg-[#D4AF37]" />
            <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase font-semibold">
              Our Standards / Kothule Industries
            </span>
          </div>

          <h2 className="font-display font-semibold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.02] mb-6">
            From the cane field, <br />
            <em className="gold-shimmer not-italic font-normal">with absolute conviction.</em>
          </h2>

          <p className="text-xs sm:text-sm text-[#A8A49A] leading-relaxed">
            CANEVIA was founded by Kothule Industries with a simple commitment: authentic Indian
            jaggery should never be bleached with chemicals or diluted with glucose. We practice
            traditional methods, using natural okra plant extract to clarify simmering cane juice in
            woodfired iron vats.
          </p>

          <div className="mt-8 flex items-center gap-4 p-4 rounded-2xl bg-[#11110F] border border-[#242420] max-w-md">
            <img
              src={brandAssets.kothuleMark}
              alt="Kothule Industries Seal"
              width={40}
              height={56}
              className="w-10 h-14 object-contain brightness-125 opacity-90"
            />
            <div className="flex flex-col text-xs text-[#706E66]">
              <span className="text-white font-medium text-sm">
                Estate Mill & Production
              </span>
              <span>Pune & Kolhapur Belt, Maharashtra · Est. 2022</span>
            </div>
          </div>
        </div>

        {/* The 4 Purity Seals Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {purityPillars.map((pillar) => (
            <article
              key={pillar.number}
              className="group relative flex flex-col p-8 rounded-3xl bg-[#11110F] border border-[#242420] hover:border-[#D4AF37]/50 transition-all duration-400 hover:-translate-y-1.5 shadow-[0_12px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.8),0_0_25px_rgba(212,175,55,0.1)]"
            >
              <span className="font-mono text-[10px] text-[#706E66] tracking-widest uppercase mb-6">
                PILLAR {pillar.number}
              </span>

              {/* Illustrated Stamp Icon */}
              <div className="w-24 h-24 rounded-full bg-[#181815] border border-[#2A2A24] group-hover:border-[#D4AF37]/60 flex items-center justify-center p-3 mb-6 transition-colors shadow-inner">
                <img
                  src={pillar.markImage}
                  alt={pillar.markAlt}
                  width={96}
                  height={96}
                  decoding="async"
                  className="w-full h-full object-contain filter brightness-110 group-hover:scale-108 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              <span className="text-[10px] uppercase tracking-wider font-semibold text-[#D4AF37] mb-1.5">
                {pillar.badge}
              </span>
              <h3 className="font-display text-xl font-semibold text-white mb-2 leading-snug">
                {pillar.title}
              </h3>
              <p className="text-xs text-[#A8A49A] leading-relaxed flex-1">{pillar.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

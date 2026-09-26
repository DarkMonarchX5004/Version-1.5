import { purityPillars, brandAssets } from "@/lib/products";

export function HeritageSection() {
  return (
    <section
      id="heritage"
      className="py-24 sm:py-36 px-6 sm:px-12 bg-[#080807] text-[#FAF7F0] relative overflow-hidden border-t border-[#22221E]"
    >
      <div className="max-w-[1360px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] items-center gap-12 lg:gap-16 mb-20">
          <div>
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
              traditional methods, using natural okra plant extract to clarify simmering cane juice
              in woodfired iron vats.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-5 border-t border-[#282824] pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-12">
            <img
              src={brandAssets.kothuleMark}
              alt="Kothule Industries seal"
              width={176}
              height={264}
              className="w-32 h-48 sm:w-40 sm:h-60 lg:w-44 lg:h-66 shrink-0 object-contain brightness-125 opacity-90"
            />
            <div className="w-56 max-w-full border-y border-[#D4AF37]/35 px-4 py-3 text-center font-display text-xs sm:text-sm font-medium uppercase tracking-[0.16em] text-[#E4C66F]">
              Kothule Industries
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

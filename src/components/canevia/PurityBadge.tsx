import { purityPillars } from "@/lib/products";

export function PurityBadge({
  pillarIndex,
  className = "",
}: {
  pillarIndex: number;
  className?: string;
}) {
  const pillar = purityPillars[pillarIndex];
  if (!pillar) return null;

  return (
    <div
      className={`group relative flex flex-col items-center text-center p-6 rounded-2xl bg-[#11110F] border border-[#242420] shadow-[0_8px_20px_rgba(0,0,0,0.4)] hover:border-[#D4AF37]/50 hover:shadow-[0_12px_30px_rgba(0,0,0,0.6)] transition-all duration-300 hover:-translate-y-1 ${className}`}
    >
      <span className="absolute top-4 right-4 text-[10px] font-mono tracking-widest text-[#706E66]">
        {pillar.number}
      </span>
      <div className="w-20 h-20 mb-4 rounded-full flex items-center justify-center p-2.5 bg-[#181815] border border-[#2A2A24] group-hover:border-[#D4AF37]/40 transition-colors">
        <img
          src={pillar.markImage}
          alt={pillar.markAlt}
          className="w-full h-full object-contain filter brightness-110 group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>
      <span className="text-[10px] uppercase tracking-wider font-semibold text-[#D4AF37] mb-1">
        {pillar.badge}
      </span>
      <h3 className="font-display text-base font-semibold text-white mb-1.5">{pillar.title}</h3>
      <p className="text-xs text-[#A8A49A] leading-relaxed max-w-[240px]">{pillar.description}</p>
    </div>
  );
}

export function PurityBadgesStrip({ className = "" }: { className?: string }) {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ${className}`}>
      {purityPillars.map((_, index) => (
        <PurityBadge key={index} pillarIndex={index} />
      ))}
    </div>
  );
}

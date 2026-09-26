import { useState } from "react";
import { Sparkles, Layers, Flame, Droplets, Compass } from "lucide-react";
import { products, type ProductId } from "@/lib/products";

export function SensoryRadar() {
  const [activeId, setActiveId] = useState<ProductId | "all">("cubes");

  const axes = [
    { key: "caramel", label: "Caramel Warmth", icon: Flame },
    { key: "molasses", label: "Molasses Depth", icon: Layers },
    { key: "mineral", label: "Mineral Richness", icon: Sparkles },
    { key: "dissolution", label: "Melting Speed", icon: Droplets },
    { key: "floral", label: "Floral Honey Notes", icon: Compass },
  ] as const;

  const center = 160;
  const maxRadius = 110;

  const getCoordinates = (value: number, index: number) => {
    const angle = ((Math.PI * 2) / 5) * index - Math.PI / 2;
    const r = (value / 100) * maxRadius;
    const x = center + r * Math.cos(angle);
    const y = center + r * Math.sin(angle);
    return { x, y };
  };

  const getPolygonPoints = (productId: ProductId) => {
    const sensory = products[productId].sensory;
    return axes
      .map((axis, i) => {
        const val = sensory[axis.key];
        const { x, y } = getCoordinates(val, i);
        return `${x},${y}`;
      })
      .join(" ");
  };

  const colors: Record<ProductId, { stroke: string; fill: string; dot: string; glow: string }> = {
    cubes: {
      stroke: "#D4AF37",
      fill: "rgba(212, 175, 55, 0.28)",
      dot: "#FAF7F0",
      glow: "rgba(212, 175, 55, 0.6)",
    },
    powder: {
      stroke: "#C5A059",
      fill: "rgba(197, 160, 89, 0.22)",
      dot: "#FAF7F0",
      glow: "rgba(197, 160, 89, 0.5)",
    },
    syrup: {
      stroke: "#EAD698",
      fill: "rgba(234, 214, 152, 0.25)",
      dot: "#D4AF37",
      glow: "rgba(234, 214, 152, 0.6)",
    },
  };

  const currentProduct = activeId === "all" ? products.cubes : products[activeId];

  return (
    <section className="py-24 sm:py-32 px-6 sm:px-12 bg-[#080807] border-t border-[#22221E] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="ambient-glow-gold top-1/3 -right-20 w-96 h-96 opacity-30" />
      <div className="ambient-glow-emerald bottom-10 left-10 w-80 h-80 opacity-20" />

      <div className="max-w-[1360px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-[1.5px] bg-[#D4AF37]" />
              <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase font-semibold">
                Taste Profile
              </span>
            </div>
            <h2 className="font-display font-semibold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.05]">
              Taste the difference <br />
              <em className="gold-shimmer font-normal not-italic">of pure sugarcane.</em>
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-[#A8A49A] max-w-md leading-relaxed">
            Each variety has a distinct flavor, mineral profile, and texture. Compare caramel depth,
            mineral richness, and how quickly it melts.
          </p>
        </div>

        {/* Interactive Expression Selector */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {(["cubes", "powder", "syrup", "all"] as const).map((id) => (
            <button
              key={id}
              type="button"
              onClick={() => {
                setActiveId(id);
              }}
              data-cursor="COMPARE"
              className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all cursor-pointer ${
                activeId === id
                  ? "bg-[#D4AF37] text-[#080807] shadow-[0_0_20px_rgba(212,175,55,0.35)]"
                  : "bg-[#141412] text-[#A8A49A] hover:text-white border border-[#282824] hover:border-[#D4AF37]/40"
              }`}
            >
              {id === "all" ? "Compare All Three" : products[id].name}
            </button>
          ))}
        </div>

        {/* Stage: 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Radar Chart SVG Viewport (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center p-6 sm:p-10 rounded-3xl bg-[#11110F] border border-[#242420] shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
            <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center">
              <svg viewBox="0 0 320 320" className="w-full h-full overflow-visible">
                {/* Concentric Reference Webs */}
                {[0.25, 0.5, 0.75, 1].map((scale) => {
                  const points = axes
                    .map((_, i) => {
                      const angle = ((Math.PI * 2) / 5) * i - Math.PI / 2;
                      const r = maxRadius * scale;
                      return `${center + r * Math.cos(angle)},${center + r * Math.sin(angle)}`;
                    })
                    .join(" ");
                  return (
                    <polygon
                      key={scale}
                      points={points}
                      fill="none"
                      stroke="#22221E"
                      strokeWidth="1"
                      strokeDasharray={scale === 1 ? "none" : "3,3"}
                    />
                  );
                })}

                {/* 5 Axis Radial Spoke Lines */}
                {axes.map((_, i) => {
                  const angle = ((Math.PI * 2) / 5) * i - Math.PI / 2;
                  const x = center + maxRadius * Math.cos(angle);
                  const y = center + maxRadius * Math.sin(angle);
                  return (
                    <line
                      key={i}
                      x1={center}
                      y1={center}
                      x2={x}
                      y2={y}
                      stroke="#282824"
                      strokeWidth="1.2"
                    />
                  );
                })}

                {/* Polygons */}
                {activeId === "all" ? (
                  (["cubes", "powder", "syrup"] as const).map((id) => (
                    <polygon
                      key={id}
                      points={getPolygonPoints(id)}
                      fill={colors[id].fill}
                      stroke={colors[id].stroke}
                      strokeWidth="2"
                      className="transition-all duration-500 ease-out"
                    />
                  ))
                ) : (
                  <polygon
                    points={getPolygonPoints(activeId)}
                    fill={colors[activeId].fill}
                    stroke={colors[activeId].stroke}
                    strokeWidth="2.5"
                    className="transition-all duration-500 ease-out drop-shadow-[0_0_12px_rgba(212,175,55,0.4)]"
                  />
                )}

                {/* Data Vertex Dots */}
                {(activeId === "all" ? (["cubes", "powder", "syrup"] as const) : [activeId]).map(
                  (id) => {
                    const sensory = products[id].sensory;
                    return axes.map((axis, i) => {
                      const val = sensory[axis.key];
                      const { x, y } = getCoordinates(val, i);
                      return (
                        <circle
                          key={`${id}-${axis.key}`}
                          cx={x}
                          cy={y}
                          r="4"
                          fill={colors[id].stroke}
                          stroke="#080807"
                          strokeWidth="2"
                          className="transition-all duration-500"
                        />
                      );
                    });
                  },
                )}

                {/* Axis Labels */}
                {axes.map((axis, i) => {
                  const angle = ((Math.PI * 2) / 5) * i - Math.PI / 2;
                  const labelRadius = maxRadius + 28;
                  const x = center + labelRadius * Math.cos(angle);
                  const y = center + labelRadius * Math.sin(angle);

                  return (
                    <text
                      key={axis.key}
                      x={x}
                      y={y}
                      fill="#A8A49A"
                      fontSize="9"
                      fontFamily="var(--font-mono)"
                      fontWeight="600"
                      textAnchor="middle"
                      dominantBaseline="middle"
                      className="tracking-wider uppercase"
                    >
                      {axis.label}
                    </text>
                  );
                })}
              </svg>
            </div>

            {/* Legend */}
            <div className="flex items-center gap-6 mt-6 pt-4 border-t border-[#22221E] text-xs font-mono">
              <div className="flex items-center gap-2 text-[#FAF7F0]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37]" />
                <span>Cubes N° 01</span>
              </div>
              <div className="flex items-center gap-2 text-[#FAF7F0]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#C5A059]" />
                <span>Powder N° 02</span>
              </div>
              <div className="flex items-center gap-2 text-[#FAF7F0]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#EAD698]" />
                <span>Syrup N° 03</span>
              </div>
            </div>
          </div>

          {/* Deep Sensory Profile Breakdown (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="p-8 rounded-3xl bg-[#11110F] border border-[#282824]">
              <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase block mb-1">
                {currentProduct.subtitle}
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-semibold text-white mb-3">
                {currentProduct.name}
              </h3>
              <p className="text-xs sm:text-sm text-[#A8A49A] leading-relaxed mb-6">
                {currentProduct.tagline}
              </p>

              {/* Organoleptic Ratings */}
              <div className="flex flex-col gap-3 py-4 border-y border-[#22221E]">
                {axes.map((axis) => {
                  const val = currentProduct.sensory[axis.key];
                  const Icon = axis.icon;
                  return (
                    <div key={axis.key} className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2 text-[#A8A49A]">
                        <Icon className="w-3.5 h-3.5 text-[#D4AF37]" />
                        <span>{axis.label}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-28 h-1.5 rounded-full bg-[#20201C] overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-[#C5A059] to-[#D4AF37] rounded-full transition-all duration-500"
                            style={{ width: `${val}%` }}
                          />
                        </div>
                        <span className="font-mono text-[11px] font-bold text-white w-7 text-right">
                          {val}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Tasting Notes Tags */}
              <div className="mt-6">
                <span className="text-[10px] font-mono tracking-widest text-[#706E66] uppercase block mb-2.5">
                  Natural Tasting Notes
                </span>
                <div className="flex flex-wrap gap-2">
                  {currentProduct.tastingNotes.map((note) => (
                    <span
                      key={note}
                      className="px-3 py-1 rounded-full text-[11px] font-medium bg-[#1A1A17] text-[#FAF7F0] border border-[#2E2E28]"
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

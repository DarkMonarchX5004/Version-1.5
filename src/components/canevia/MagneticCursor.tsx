import { useEffect, useRef, useState } from "react";

export function MagneticCursor() {
  const [label, setLabel] = useState<string | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const haloRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const coords = useRef({ targetX: -100, targetY: -100, currentX: -100, currentY: -100 });
  const isReducedMotion = useRef(false);

  useEffect(() => {
    // Only enable on fine pointer devices without reduced motion preference
    if (typeof window === "undefined") return;
    
    const coarseQuery = window.matchMedia("(pointer: coarse)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (coarseQuery.matches || motionQuery.matches) {
      isReducedMotion.current = true;
      return;
    }

    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      coords.current.targetX = e.clientX;
      coords.current.targetY = e.clientY;

      if (!isVisible) setIsVisible(true);

      // Check if hovering an element with custom cursor tag
      const target = e.target as HTMLElement | null;
      const cursorTarget = target?.closest("[data-cursor]") as HTMLElement | null;

      if (cursorTarget) {
        const nextLabel = cursorTarget.getAttribute("data-cursor");
        setLabel((prev) => (prev !== nextLabel ? nextLabel : prev));
        setIsHovering((prev) => (!prev ? true : prev));
      } else if (target?.closest("button, a, input, textarea, select")) {
        setLabel((prev) => (prev !== null ? null : prev));
        setIsHovering((prev) => (!prev ? true : prev));
      } else {
        setLabel((prev) => (prev !== null ? null : prev));
        setIsHovering((prev) => (prev ? false : prev));
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const animateTrail = () => {
      coords.current.currentX += (coords.current.targetX - coords.current.currentX) * 0.2;
      coords.current.currentY += (coords.current.targetY - coords.current.currentY) * 0.2;

      if (haloRef.current) {
        haloRef.current.style.transform = `translate3d(${coords.current.currentX}px, ${coords.current.currentY}px, 0)`;
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${coords.current.targetX}px, ${coords.current.targetY}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(animateTrail);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    animationFrameId = requestAnimationFrame(animateTrail);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible]);

  if (!isVisible || isReducedMotion.current) return null;

  return (
    <div className="hidden lg:block pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Outer Halo / Follower */}
      <div
        ref={haloRef}
        className={`fixed top-0 left-0 rounded-full transition-[width,height,margin,background-color,border-color] duration-200 ease-out flex items-center justify-center will-change-transform ${
          label
            ? "w-24 h-24 -ml-12 -mt-12 bg-[#D4AF37]/90 text-[#080807] font-mono text-[9px] font-bold tracking-widest uppercase shadow-[0_0_30px_rgba(212,175,55,0.4)] backdrop-blur-xs scale-100"
            : isHovering
              ? "w-10 h-10 -ml-5 -mt-5 bg-[#D4AF37]/20 border border-[#D4AF37]/60 scale-125"
              : "w-7 h-7 -ml-3.5 -mt-3.5 border border-[#D4AF37]/40 bg-transparent scale-100"
        }`}
        style={{
          transform: `translate3d(${coords.current.currentX}px, ${coords.current.currentY}px, 0)`,
        }}
      >
        {label && <span className="animate-in fade-in zoom-in-90 duration-150">{label}</span>}
      </div>

      {/* Center Precision Dot */}
      {!label && (
        <div
          ref={dotRef}
          className="fixed top-0 left-0 w-1.5 h-1.5 -ml-[3px] -mt-[3px] rounded-full bg-[#D4AF37] shadow-[0_0_8px_#D4AF37] will-change-transform"
          style={{
            transform: `translate3d(${coords.current.targetX}px, ${coords.current.targetY}px, 0)`,
          }}
        />
      )}
    </div>
  );
}

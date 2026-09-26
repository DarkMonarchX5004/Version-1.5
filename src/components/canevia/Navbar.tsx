import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { ShoppingBag, Search, Menu, X, ArrowRight, Volume2, VolumeX, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart-context";
import { brandAssets } from "@/lib/products";
import { toggleAudioMaster, getAudioState, playTactileClick } from "@/lib/sound-effects";

export function Navbar() {
  const { count, setBagOpen, setSearchOpen, setB2BOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);

  useEffect(() => {
    setSoundEnabled(getAudioState());
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSoundToggle = () => {
    const newState = toggleAudioMaster();
    setSoundEnabled(newState);
  };

  return (
    <>
      <header
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-40 w-[min(1280px,calc(100%-32px))] h-16 flex items-center justify-between px-4 sm:px-6 rounded-2xl transition-all duration-300 ${
          isScrolled
            ? "bg-[#0C0C0B]/90 backdrop-blur-2xl border border-[#D4AF37]/25 shadow-[0_16px_40px_rgba(0,0,0,0.7)]"
            : "bg-[#11110F]/75 backdrop-blur-xl border border-[#282824] shadow-[0_8px_25px_rgba(0,0,0,0.4)]"
        }`}
      >
        {/* Brand Lockup */}
        <Link
          to="/"
          className="flex items-center gap-3 group focus:outline-none"
          aria-label="CANEVIA Sovereign Sugarcane Reserve"
          onClick={() => playTactileClick()}
        >
          <img
            src={brandAssets.mark}
            alt=""
            className="w-7 h-8 object-contain transition-transform duration-300 group-hover:scale-105 brightness-125"
          />
          <div className="flex flex-col">
            <span className="font-display font-semibold text-base sm:text-lg tracking-[0.16em] text-white leading-none">
              CANEVIA
            </span>
            <span className="text-[7px] tracking-[0.22em] font-semibold text-[#D4AF37] mt-1 uppercase">
              Sovereign Sugarcane Reserve
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Main Navigation">
          <Link
            to="/"
            className="text-xs font-semibold tracking-wider text-[#A8A49A] hover:text-white transition-colors"
            onClick={() => playTactileClick()}
          >
            Overview
          </Link>
          <Link
            to="/collection"
            className="text-xs font-semibold tracking-wider text-[#A8A49A] hover:text-white transition-colors"
            onClick={() => playTactileClick()}
          >
            Products
          </Link>
          <a
            href="/#packaging"
            className="text-xs font-semibold tracking-wider text-[#A8A49A] hover:text-white transition-colors"
            onClick={() => playTactileClick()}
          >
            Packaging
          </a>
          <a
            href="/#heritage"
            className="text-xs font-semibold tracking-wider text-[#A8A49A] hover:text-white transition-colors"
            onClick={() => playTactileClick()}
          >
            Purity & Process
          </a>
          <button
            type="button"
            onClick={() => {
              playTactileClick();
              setB2BOpen(true);
            }}
            className="text-xs font-semibold tracking-wider text-[#A8A49A] hover:text-white transition-colors cursor-pointer"
          >
            Wholesale
          </button>
          <Link
            to="/account"
            className="text-xs font-semibold tracking-wider text-[#D4AF37] hover:text-[#EAD698] transition-colors"
            onClick={() => playTactileClick()}
          >
            Contact
          </Link>
        </nav>

        {/* Actions (Sound, Search, Bag, Mobile Toggle) */}
        <div className="flex items-center gap-2">
          {/* Ambient Audio Toggle */}
          <button
            type="button"
            onClick={handleSoundToggle}
            className={`hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs transition-colors border cursor-pointer ${
              soundEnabled
                ? "bg-[#D4AF37]/15 text-[#D4AF37] border-[#D4AF37]/40 shadow-[0_0_10px_rgba(212,175,55,0.2)]"
                : "bg-[#181815] text-[#706E66] border-[#282824] hover:text-[#A8A49A]"
            }`}
            title={soundEnabled ? "Mute ambient acoustics" : "Enable tactile & hearth acoustics"}
            aria-label={soundEnabled ? "Mute sound" : "Enable sound"}
          >
            {soundEnabled ? (
              <>
                <Volume2 className="w-3.5 h-3.5 animate-pulse text-[#D4AF37]" />
                <span className="text-[10px] font-mono uppercase tracking-wider">Sound On</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5" />
                <span className="text-[10px] font-mono uppercase tracking-wider">Sound</span>
              </>
            )}
          </button>

          {/* Search Trigger */}
          <button
            type="button"
            onClick={() => {
              playTactileClick();
              setSearchOpen(true);
            }}
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full text-xs text-[#A8A49A] bg-[#181815] hover:bg-[#22221E] transition-colors border border-[#282824] cursor-pointer"
            aria-label="Open search command palette"
          >
            <Search className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-[11px]">Search</span>
            <kbd className="hidden lg:inline-block px-1.5 py-0.5 text-[9px] font-mono text-[#706E66] bg-[#0E0E0C] rounded-sm border border-[#2A2A24]">
              ⌘K
            </kbd>
          </button>

          <Button
            variant="ghost"
            size="icon"
            className="sm:hidden text-white hover:bg-white/10"
            onClick={() => {
              playTactileClick();
              setSearchOpen(true);
            }}
            aria-label="Search"
          >
            <Search className="w-4 h-4 text-[#D4AF37]" />
          </Button>

          {/* Bag Trigger */}
          <Button
            variant="outline"
            className="relative flex items-center gap-2 rounded-full px-4 h-9 border-[#282824] bg-[#181815] hover:bg-[#22221E] text-white shadow-xs transition-transform active:scale-95 cursor-pointer"
            onClick={() => {
              playTactileClick();
              setBagOpen(true);
            }}
            aria-label={`Open reserve bag with ${count} items`}
            data-cursor="BAG"
          >
            <ShoppingBag className="w-4 h-4 text-[#D4AF37]" />
            <span className="hidden sm:inline text-xs font-medium tracking-wide">Bag</span>
            {count > 0 && (
              <span className="flex items-center justify-center min-w-5 h-5 px-1.5 rounded-full bg-[#D4AF37] text-[#080807] text-[10px] font-bold tracking-tight">
                {count}
              </span>
            )}
          </Button>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open navigation menu"
          >
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#080807] flex flex-col p-6 animate-in fade-in duration-200">
          <div className="flex items-center justify-between pb-6 border-b border-[#22221E]">
            <Link
              to="/"
              className="flex items-center gap-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <img
                src={brandAssets.mark}
                alt=""
                className="w-6 h-7 object-contain brightness-125"
              />
              <span className="font-display font-semibold text-lg tracking-widest text-white">
                CANEVIA
              </span>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close navigation menu"
              className="text-white"
            >
              <X className="w-6 h-6" />
            </Button>
          </div>

          <nav className="flex flex-col py-8 gap-6 flex-1">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between text-2xl font-display font-medium text-white border-b border-[#1C1C18] pb-4"
            >
              <span>Overview</span>
              <ArrowRight className="w-5 h-5 text-[#D4AF37]" />
            </Link>
            <Link
              to="/collection"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between text-2xl font-display font-medium text-white border-b border-[#1C1C18] pb-4"
            >
              <span>Our Products</span>
              <ArrowRight className="w-5 h-5 text-[#D4AF37]" />
            </Link>
            <a
              href="/#packaging"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between text-2xl font-display font-medium text-white border-b border-[#1C1C18] pb-4"
            >
              <span>Packaging & Freshness</span>
              <ArrowRight className="w-5 h-5 text-[#D4AF37]" />
            </a>
            <a
              href="/#heritage"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between text-2xl font-display font-medium text-white border-b border-[#1C1C18] pb-4"
            >
              <span>Purity & Process</span>
              <ArrowRight className="w-5 h-5 text-[#D4AF37]" />
            </a>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                setB2BOpen(true);
              }}
              className="flex items-center justify-between text-2xl font-display font-medium text-white border-b border-[#1C1C18] pb-4 text-left"
            >
              <span>Wholesale Orders</span>
              <ArrowRight className="w-5 h-5 text-[#D4AF37]" />
            </button>
            <Link
              to="/account"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between text-2xl font-display font-medium text-[#D4AF37] border-b border-[#1C1C18] pb-4"
            >
              <span>Contact & Concierge</span>
              <ArrowRight className="w-5 h-5 text-[#D4AF37]" />
            </Link>
          </nav>

          <div className="pt-6 border-t border-[#22221E] flex flex-col gap-2 text-xs text-[#706E66]">
            <p className="font-medium text-white">Kothule Industries · Pune, Maharashtra</p>
            <p>FSSAI Lic. No. 10022022000543</p>
            <p>Direct Sales Channel: +91 99223 41509</p>
          </div>
        </div>
      )}
    </>
  );
}

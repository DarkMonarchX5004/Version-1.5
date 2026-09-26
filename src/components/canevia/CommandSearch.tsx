import { useEffect } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Sparkles, ShieldCheck, ArrowRight, Package } from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useCart } from "@/lib/cart-context";
import { products, purityPillars, type ProductId } from "@/lib/products";

export function CommandSearch() {
  const { isSearchOpen, setSearchOpen, setB2BOpen, setBagOpen } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [setSearchOpen]);

  const handleSelectProduct = (id: ProductId) => {
    setSearchOpen(false);
    navigate({ to: "/product/$id", params: { id } });
  };

  return (
    <CommandDialog open={isSearchOpen} onOpenChange={setSearchOpen}>
      <div className="bg-[#0C0C0B] text-[#FAF7F0] border border-[#242420] rounded-2xl overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.85)]">
        <CommandInput
          placeholder="Search jaggery varieties, pairings, standards, FSSAI..."
          className="h-14 bg-transparent text-xs sm:text-sm text-white placeholder:text-[#706E66] border-none outline-none focus:ring-0"
        />

        <CommandList className="max-h-[380px] p-2 overflow-y-auto">
          <CommandEmpty className="py-8 text-center text-xs text-[#706E66]">
            No matching products found.
          </CommandEmpty>

          <CommandGroup
            heading="Pure Jaggery Varieties"
            className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase px-2 py-1.5"
          >
            {Object.values(products).map((product) => (
              <CommandItem
                key={product.id}
                onSelect={() => handleSelectProduct(product.id)}
                className="flex items-center justify-between p-3 rounded-xl hover:bg-[#161613] cursor-pointer text-xs transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Package className="w-4 h-4 text-[#D4AF37]" />
                  <div className="flex flex-col">
                    <span className="font-display font-medium text-white text-sm">
                      {product.name}
                    </span>
                    <span className="text-[11px] text-[#706E66]">{product.note}</span>
                  </div>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-[#706E66]" />
              </CommandItem>
            ))}
          </CommandGroup>

          <CommandGroup
            heading="Our Standards & Process"
            className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase px-2 py-1.5 mt-2"
          >
            {purityPillars.map((pillar) => (
              <CommandItem
                key={pillar.number}
                onSelect={() => {
                  setSearchOpen(false);
                  window.location.hash = "heritage";
                }}
                className="flex items-center justify-between p-3 rounded-xl hover:bg-[#161613] cursor-pointer text-xs transition-colors"
              >
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                  <div className="flex flex-col">
                    <span className="font-medium text-white">{pillar.title}</span>
                    <span className="text-[10px] text-[#706E66]">{pillar.subtitle}</span>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-[#D4AF37]">{pillar.badge}</span>
              </CommandItem>
            ))}
          </CommandGroup>

          <CommandGroup
            heading="Quick Actions"
            className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase px-2 py-1.5 mt-2"
          >
            <CommandItem
              onSelect={() => {
                setSearchOpen(false);
                setBagOpen(true);
              }}
              className="flex items-center justify-between p-3 rounded-xl hover:bg-[#161613] cursor-pointer text-xs transition-colors"
            >
              <div className="flex items-center gap-3">
                <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                <span className="font-medium text-white">Review Bag</span>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-[#706E66]" />
            </CommandItem>
            <CommandItem
              onSelect={() => {
                setSearchOpen(false);
                setB2BOpen(true);
              }}
              className="flex items-center justify-between p-3 rounded-xl hover:bg-[#161613] cursor-pointer text-xs transition-colors"
            >
              <div className="flex items-center gap-3">
                <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                <span className="font-medium text-[#D4AF37]">
                  Wholesale & Bulk Orders (50kg+)
                </span>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37]" />
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </div>
    </CommandDialog>
  );
}

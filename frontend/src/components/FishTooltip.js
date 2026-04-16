import { useState, useRef, useEffect } from "react";
import { fishDatabase } from "@/data/fishData";

const getRarityClass = (rarity) => {
  if (!rarity) return "rarity-common";
  return `rarity-${rarity.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
};

const fishLookup = {};
fishDatabase.forEach(f => {
  fishLookup[f.fish.toLowerCase()] = f;
});

const findFish = (name) => {
  return fishLookup[name.toLowerCase()] || null;
};

const FishTooltip = ({ fishName }) => {
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState("bottom");
  const triggerRef = useRef(null);
  const tooltipRef = useRef(null);

  const fish = findFish(fishName);

  useEffect(() => {
    if (!open || !triggerRef.current || !tooltipRef.current) return;

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const spaceBelow = window.innerHeight - triggerRect.bottom;
    const spaceAbove = triggerRect.top;

    if (spaceBelow < 280 && spaceAbove > spaceBelow) {
      setPosition("top");
    } else {
      setPosition("bottom");
    }

    // Adjust horizontal position to prevent clipping
    requestAnimationFrame(() => {
      if (!tooltipRef.current) return;
      const tipRect = tooltipRef.current.getBoundingClientRect();
      const offset = 8;
      if (tipRect.left < offset) {
        tooltipRef.current.style.left = '0';
        tooltipRef.current.style.transform = `translateX(${offset - triggerRect.left}px)`;
      } else if (tipRect.right > window.innerWidth - offset) {
        const shift = tipRect.right - window.innerWidth + offset;
        tooltipRef.current.style.transform = `translateX(calc(-50% - ${shift}px))`;
      }
    });
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handleClickOutside = (e) => {
      if (
        triggerRef.current && !triggerRef.current.contains(e.target) &&
        tooltipRef.current && !tooltipRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  if (!fish) {
    return <span className="text-sm text-zinc-300">{fishName}</span>;
  }

  return (
    <span className="relative inline-block">
      <button
        ref={triggerRef}
        data-testid={`fish-tooltip-trigger-${fishName.toLowerCase().replace(/\s+/g, "-")}`}
        className="text-sm text-blue-400 hover:text-blue-300 underline decoration-blue-500/30 underline-offset-2 cursor-pointer transition-colors font-medium"
        onClick={() => setOpen(!open)}
        onMouseEnter={() => {
          if (window.innerWidth > 768) setOpen(true);
        }}
        onMouseLeave={() => {
          if (window.innerWidth > 768) setOpen(false);
        }}
      >
        {fishName}
      </button>

      {open && (
        <div
          ref={tooltipRef}
          data-testid={`fish-tooltip-popup-${fishName.toLowerCase().replace(/\s+/g, "-")}`}
          className={`absolute z-50 w-48
            ${position === "bottom" ? "top-full mt-3" : "bottom-full mb-3"}
          `}
          style={{ left: '50%', transform: 'translateX(-50%)' }}
        >
          {/* Triangle pointer */}
          <div
            className={`absolute left-1/2 -translate-x-1/2 w-0 h-0
              ${position === "bottom"
                ? "-top-2 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-[#121212]"
                : "-bottom-2 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#121212]"
              }
            `}
          />

          {/* Card */}
          <div className="bg-[#121212] border border-white/20 rounded-sm overflow-hidden shadow-xl shadow-black/60">
            {/* Fish Image */}
            <div className="w-full h-28 bg-black/60 flex items-center justify-center p-3 border-b border-white/10">
              <img
                src={fish.icon}
                alt={fish.fish}
                className="max-h-full max-w-full object-contain"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>

            {/* Fish Name */}
            <div className="px-3 py-2 border-b border-white/10 text-center">
              <p className="text-sm font-heading font-bold text-white">{fish.fish}</p>
            </div>

            {/* Rarity + Location row */}
            <div className="grid grid-cols-2 divide-x divide-white/10">
              <div className="px-3 py-2 text-center">
                <span className="block text-[8px] font-bold uppercase tracking-[0.15em] text-zinc-600 mb-1">Rarity</span>
                <span className={`inline-block px-1.5 py-0.5 rounded-sm text-[9px] font-bold uppercase tracking-wider ${getRarityClass(fish.rarity)}`}>
                  {fish.rarity}
                </span>
              </div>
              <div className="px-3 py-2 text-center">
                <span className="block text-[8px] font-bold uppercase tracking-[0.15em] text-zinc-600 mb-1">Location</span>
                <span className="text-[11px] text-zinc-300 leading-tight">{fish.zone}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </span>
  );
};

export default FishTooltip;

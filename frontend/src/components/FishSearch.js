import { useState, useRef, useEffect, useCallback } from "react";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { fishDatabase, slugify, getFishEntryId } from "@/data/fishData";

const getRarityClass = (rarity) => {
  if (!rarity) return "rarity-common";
  return `rarity-${rarity.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
};

const FishSearch = ({ onResultClick }) => {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  const trimmed = query.trim().toLowerCase();

  const matches = trimmed
    ? fishDatabase
        .filter(e => e.fish.toLowerCase().includes(trimmed))
        .sort((a, b) => {
          const aStarts = a.fish.toLowerCase().startsWith(trimmed) ? 0 : 1;
          const bStarts = b.fish.toLowerCase().startsWith(trimmed) ? 0 : 1;
          if (aStarts !== bStarts) return aStarts - bStarts;
          return a.fish.localeCompare(b.fish);
        })
        .slice(0, 12)
    : [];

  const handleResultClick = useCallback((entry) => {
    const fishId = getFishEntryId(entry);
    const zoneId = slugify(entry.zone);

    // Clear old highlights
    document.querySelectorAll(".zone-card-highlighted").forEach(el => el.classList.remove("zone-card-highlighted"));
    document.querySelectorAll(".fish-row-highlight").forEach(el => el.classList.remove("fish-row-highlight"));

    const targetRow = document.getElementById(fishId);
    const zoneCard = document.getElementById(zoneId);

    if (targetRow && zoneCard) {
      zoneCard.classList.add("zone-card-highlighted");
      targetRow.classList.add("fish-row-highlight");
      targetRow.scrollIntoView({ behavior: "smooth", block: "center" });

      setTimeout(() => {
        zoneCard.classList.remove("zone-card-highlighted");
        targetRow.classList.remove("fish-row-highlight");
      }, 3000);
    }

    setQuery("");
    if (onResultClick) onResultClick();
  }, [onResultClick]);

  return (
    <div className="w-full max-w-2xl mx-auto" data-testid="fish-search-panel">
      <div className="relative">
        <MagnifyingGlass
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500"
        />
        <input
          ref={inputRef}
          data-testid="fish-search-input"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search fish, zone, rebirth, upgrade..."
          className="w-full pl-10 pr-4 py-2.5 bg-[#0A0A0A] border border-white/20 rounded-sm text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 transition-colors"
        />
      </div>

      {trimmed && (
        <div className="mt-2 border border-white/15 rounded-sm bg-[#0A0A0A] max-h-80 overflow-y-auto" data-testid="search-results">
          {matches.length === 0 ? (
            <p className="p-4 text-sm text-zinc-500" data-testid="search-empty">
              No fish matched that search.
            </p>
          ) : (
            <div data-testid="search-results-body">
              {matches.map((entry, i) => (
                <button
                  key={`${entry.zone}-${entry.fish}`}
                  data-testid={`search-result-${i}`}
                  onClick={() => handleResultClick(entry)}
                  className="w-full flex items-center gap-3 px-4 py-3 text-left border-b border-white/5 last:border-b-0 hover:bg-white/5 transition-colors"
                >
                  <img
                    src={entry.icon}
                    alt={entry.fish}
                    className="w-7 h-7 object-contain rounded-sm flex-shrink-0"
                    loading="lazy"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                  <span className="text-sm font-medium text-white truncate">{entry.fish}</span>
                  <span className={`inline-block px-2 py-0.5 rounded-sm text-[10px] font-bold uppercase tracking-wider flex-shrink-0 ${getRarityClass(entry.rarity)}`}>
                    {entry.rarity}
                  </span>
                  <span className="text-xs text-zinc-500 truncate ml-auto">{entry.zone}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default FishSearch;

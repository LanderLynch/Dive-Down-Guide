import { useState, useEffect } from "react";
import { Fish, Waves, Lightning, ArrowsClockwise, MagnifyingGlass, Question, CaretDown, CaretUp } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { fishDatabase, galleryImages, slugify, getFishEntryId, getGroupedZones, specialZones } from "@/data/fishData";
import FishSearch from "@/components/FishSearch";

const getRarityClass = (rarity) => {
  if (!rarity) return "rarity-common";
  return `rarity-${rarity.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
};

/* ── Quick Access Cards ── */
const quickCards = [
  { label: "Fish Database", icon: Fish, desc: "Browse all fish by zone", href: "#database" },
  { label: "Zones", icon: Waves, desc: "Navigate biome zones", href: "#zones-container" },
  { label: "Mutations", icon: Lightning, desc: "Multiplier reference", href: "#mutation-guide" },
  { label: "Rebirth Guide", icon: ArrowsClockwise, desc: "Permanent upgrades", href: "/rebirth", isRoute: true },
  { label: "Tips & Tricks", icon: Lightning, desc: "Farming strategies", href: "#tips" },
  { label: "FAQs", icon: Question, desc: "Common questions", href: "#faq" },
];

/* ── FAQ Data ── */
const faqItems = [
  {
    q: "When do Secrets and Divines spawn?",
    a: "Secret spawns are completely random. By collecting fish in that area, it increases the chance of a Secret or Divine to spawn!"
  },
  {
    q: "Is there a cooldown on Secret or Divine spawns?",
    a: "No, there is no cooldown timers for Secret or Divine fish to spawn."
  },
  {
    q: "Will I lose all my fish or money if I Rebirth?",
    a: "No! You do not lose anything when you rebirth other than the money and fish required for each rebirth."
  },
  {
    q: "When is Admin Abuse?",
    a: "Admin abuse is before updates. They will be announced in this Discord."
  },
  {
    q: "Do mutations stack? Can I get more than one mutation on a fish?",
    a: "No, currently fish can only have one mutation. Example: If your fish has Rainbow, gold, or silver, it cannot receive other mutations like chocolate, shocked, or frozen."
  },
  {
    q: "Can I trade fish?",
    a: "Trading is not currently in the game. Currently, the only way to transfer fish from one person to another is to steal it using Robux."
  },
  {
    q: "I followed the steps to get my group reward fish, why haven't I received it yet?",
    a: "Receiving your group reward can take a few minutes. Be patient, and you will receive it in no time."
  },
  {
    q: "Are there any Codes for Dive Down?",
    a: "No, there are currently no codes, but that is one of the many things our Dev Team is working on!"
  },
  {
    q: "How do I get more Secrets to spawn?",
    a: "Catching fish in the area you want a secret to spawn in rapidly increases the chances of secrets to spawn."
  }
];

/* ── FAQ Item ── */
const FaqItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-white/15 rounded-sm overflow-hidden" data-testid={`faq-item-${slugify(q).slice(0, 30)}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-white/5 transition-colors"
        data-testid="faq-question-btn"
      >
        <span className="text-sm font-semibold text-white pr-4">{q}</span>
        {open ? <CaretUp size={16} className="text-blue-500 flex-shrink-0" /> : <CaretDown size={16} className="text-blue-500 flex-shrink-0" />}
      </button>
      {open && (
        <div className="px-5 pb-4 text-sm text-zinc-400 leading-relaxed border-t border-white/5">
          <p className="pt-3">{a}</p>
        </div>
      )}
    </div>
  );
};

/* ── Zone Card ── */
const ZoneCard = ({ zone, fishList }) => {
  const zoneId = slugify(zone);
  return (
    <section id={zoneId} className="border border-white/15 rounded-sm overflow-hidden scroll-mt-20" data-testid={`zone-card-${zoneId}`}>
      <div className="px-5 py-4 border-b border-white/10 bg-[#0A0A0A]">
        <h3 className="font-heading text-lg font-semibold text-white">{zone}</h3>
        <p className="text-xs text-zinc-500 mt-0.5">{fishList.length} fish listed</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/20">
              <th className="text-left px-5 py-3 text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-500 bg-black/40">Fish Name</th>
              <th className="text-left px-5 py-3 text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-500 bg-black/40">Rarity</th>
              <th className="text-left px-5 py-3 text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-500 bg-black/40">Notes</th>
            </tr>
          </thead>
          <tbody>
            {fishList.map(entry => (
              <tr
                key={getFishEntryId(entry)}
                id={getFishEntryId(entry)}
                className="border-b border-white/5 hover:bg-white/[0.03] transition-colors"
                data-testid={`fish-row-${slugify(entry.fish)}`}
              >
                <td className="px-5 py-3 font-medium text-white">{entry.fish}</td>
                <td className="px-5 py-3">
                  <span className={`inline-block px-2 py-0.5 rounded-sm text-[10px] font-bold uppercase tracking-wider ${getRarityClass(entry.rarity)}`}>
                    {entry.rarity || "Unknown"}
                  </span>
                </td>
                <td className="px-5 py-3 text-zinc-400">{entry.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

/* ── Main Page ── */
const HomePage = () => {
  const groupedZones = getGroupedZones();
  const allGallery = [...galleryImages, ...galleryImages];

  const handleSectionClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="pb-20">
      {/* Hero */}
      <section
        id="home"
        className="relative overflow-hidden border-b border-white/10"
        data-testid="hero-section"
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(https://static.prod-images.emergentagent.com/jobs/b453fa35-5837-49a0-a139-620d07c28b27/images/de3f012b96552f100de9e54c023680da94412c37d26b612e3b7a1db0d0a19b58.png)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black" />
        <div className="relative px-6 md:px-12 pt-16 pb-12 max-w-4xl">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-500 mb-3" data-testid="hero-eyebrow">
            Merged fish database
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-white mb-4" data-testid="hero-title">
            Dive Down Guide
          </h1>
          <p className="text-base text-zinc-400 leading-relaxed max-w-xl mb-8" data-testid="hero-description">
            Track every known biome catch from Sunlight Zone to Kraken World and plan your next deep-sea farming route with the current Sportskeeda rarity list.
          </p>

          {/* Search in hero */}
          <div className="mb-8">
            <FishSearch />
          </div>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-3">
            <div className="px-3 py-1.5 border border-white/20 rounded-sm text-xs text-zinc-300">
              <span className="text-white font-bold">{fishDatabase.length}</span> Fish
            </div>
            <div className="px-3 py-1.5 border border-white/20 rounded-sm text-xs text-zinc-300">
              <span className="text-white font-bold">{Object.keys(groupedZones).length}</span> Zones
            </div>
            <div className="px-3 py-1.5 border border-white/20 rounded-sm text-xs text-zinc-300">
              <span className="text-white font-bold">10</span> Rebirths
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Cards */}
      <section className="px-6 md:px-12 py-10" data-testid="quick-access-section">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 stagger-children">
          {quickCards.map(card => (
            card.isRoute ? (
              <Link
                key={card.label}
                to={card.href}
                className="group border border-white/15 rounded-sm p-4 hover:border-blue-500 hover:-translate-y-1 transition-all bg-[#0A0A0A]"
                data-testid={`quick-card-${slugify(card.label)}`}
              >
                <card.icon size={24} weight="duotone" className="text-blue-500 mb-2" />
                <p className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">{card.label}</p>
                <p className="text-[11px] text-zinc-500 mt-0.5">{card.desc}</p>
              </Link>
            ) : (
              <a
                key={card.label}
                href={card.href}
                onClick={(e) => handleSectionClick(e, card.href)}
                className="group border border-white/15 rounded-sm p-4 hover:border-blue-500 hover:-translate-y-1 transition-all bg-[#0A0A0A]"
                data-testid={`quick-card-${slugify(card.label)}`}
              >
                <card.icon size={24} weight="duotone" className="text-blue-500 mb-2" />
                <p className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">{card.label}</p>
                <p className="text-[11px] text-zinc-500 mt-0.5">{card.desc}</p>
              </a>
            )
          ))}
        </div>
      </section>

      {/* Database Section */}
      <section id="database" className="px-6 md:px-12 py-8 scroll-mt-20" data-testid="database-section">
        <div className="flex items-center gap-4 mb-6">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-white whitespace-nowrap">Fish Database</h2>
          <div className="flex-1 h-px bg-white/10" />
        </div>
        <div className="text-sm text-zinc-400 space-y-1 mb-8">
          <p>This database now includes biome fish, special event fish, Kraken egg fish, and mutation multipliers.</p>
          <p>Use it to track rarities, special spawns, and high-value mutation rolls in one place.</p>
        </div>

        {/* Gallery */}
        <div
          className="relative mb-8 overflow-hidden border border-white/15 rounded-sm"
          data-testid="gallery-section"
        >
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
          <div className="gallery-track flex gap-4 w-max p-4" data-testid="gallery-track">
            {allGallery.map((img, i) => (
              <div key={i} className="flex-shrink-0 w-[36rem] h-52 overflow-hidden border border-white/10 rounded-sm">
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Mutation Guide */}
        <section id="mutation-guide" className="mb-10 scroll-mt-20" data-testid="mutation-section">
          <h3 className="font-heading text-xl font-semibold text-white mb-4">Mutation Multipliers</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-white/15 rounded-sm p-5 bg-[#0A0A0A]" data-testid="mutation-card-ocean">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-500 mb-4">Ocean Mutation</h4>
              <div className="space-y-3">
                {[
                  { name: "Rainbow", val: "3.0x" },
                  { name: "Gold", val: "2.7x" },
                  { name: "Silver", val: "2.4x" },
                  { name: "Normal", val: "1.0x" },
                ].map(m => (
                  <div key={m.name} className="flex justify-between items-center pb-3 border-b border-white/5 last:border-0 last:pb-0">
                    <span className="text-sm text-zinc-400">{m.name}</span>
                    <span className="text-sm font-bold text-white tabular-nums">{m.val}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="border border-white/15 rounded-sm p-5 bg-[#0A0A0A]" data-testid="mutation-card-weather">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-500 mb-4">Weather Mutation</h4>
              <div className="space-y-3">
                {[
                  { name: "Evil", val: "2.8x" },
                  { name: "Magma", val: "2.5x" },
                  { name: "Infected", val: "2.3x" },
                  { name: "Chocolate", val: "2.2x" },
                  { name: "Shocked", val: "1.9x" },
                  { name: "Frozen", val: "1.5x" },
                  { name: "Dry", val: "1.1x" },
                ].map(m => (
                  <div key={m.name} className="flex justify-between items-center pb-3 border-b border-white/5 last:border-0 last:pb-0">
                    <span className="text-sm text-zinc-400">{m.name}</span>
                    <span className="text-sm font-bold text-white tabular-nums">{m.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Zone Cards */}
        <div id="zones-container" className="space-y-6 scroll-mt-20" data-testid="zones-container">
          {Object.entries(groupedZones).map(([zone, fishList]) => (
            <ZoneCard key={zone} zone={zone} fishList={fishList} />
          ))}
        </div>
      </section>

      {/* Tips */}
      <section id="tips" className="px-6 md:px-12 py-8 scroll-mt-20" data-testid="tips-section">
        <div className="flex items-center gap-4 mb-6">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-white whitespace-nowrap">Tips & Tricks</h2>
          <div className="flex-1 h-px bg-white/10" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 stagger-children">
          {[
            {
              title: "Zone Farming",
              text: "Farm by zone instead of diving randomly. Each biome has its own fish pool, so targeted runs are much more efficient."
            },
            {
              title: "Check Rarity Conflicts",
              text: "When the two sources disagree, treat the fish as a priority to verify in-game before planning a long grind around it."
            },
            {
              title: "Late-Game Route",
              text: "Push your upgrades before farming Deep Dark, Trenches, Atlantis, Shell Reef, and Kraken World to avoid wasted dives."
            }
          ].map(tip => (
            <div
              key={tip.title}
              className="border border-white/15 rounded-sm p-5 bg-[#0A0A0A] hover:border-blue-500 hover:-translate-y-1 transition-all"
              data-testid={`tip-card-${slugify(tip.title)}`}
            >
              <h3 className="text-sm font-bold text-blue-400 mb-2">{tip.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{tip.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="px-6 md:px-12 py-8 scroll-mt-20" data-testid="faq-section">
        <div className="flex items-center gap-4 mb-6">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-white whitespace-nowrap">Frequently Asked Questions</h2>
          <div className="flex-1 h-px bg-white/10" />
        </div>
        <div className="space-y-3 max-w-3xl">
          {faqItems.map(item => (
            <FaqItem key={item.q} q={item.q} a={item.a} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-12 py-8 border-t border-white/10 mt-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-600">Dive Down Guide by Monaco_m2</p>
          <a
            href="https://www.roblox.com/games/131756752872026/Dive-Down"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-zinc-500 hover:text-blue-400 transition-colors"
            data-testid="footer-roblox-link"
          >
            Play Dive Down on Roblox
          </a>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;

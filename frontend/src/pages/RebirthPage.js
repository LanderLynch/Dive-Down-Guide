import { Link } from "react-router-dom";
import { ArrowLeft, Lightning, Backpack, CurrencyDollar, PersonSimpleSwim } from "@phosphor-icons/react";
import { rebirthData } from "@/data/rebirthData";

const RebirthPage = () => {
  return (
    <div className="pb-20">
      {/* Hero */}
      <section
        className="relative overflow-hidden border-b border-white/10"
        data-testid="rebirth-hero"
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: `url(https://static.prod-images.emergentagent.com/jobs/b453fa35-5837-49a0-a139-620d07c28b27/images/8660c19ab54846626332e04560296368613eb7a2bec3d1adf564b4da5fb5ceb5.png)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black" />
        <div className="relative px-6 md:px-12 pt-12 pb-10">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs text-zinc-500 hover:text-blue-400 transition-colors mb-6"
            data-testid="rebirth-back-link"
          >
            <ArrowLeft size={14} />
            Back to Fish Database
          </Link>
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-500 mb-3">
            Permanent progression
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl font-black tracking-tighter text-white mb-4" data-testid="rebirth-title">
            Rebirth Guide
          </h1>
          <p className="text-base text-zinc-400 leading-relaxed max-w-xl">
            Rebirthing in Dive Down gives permanent upgrades without wiping your overall progress. You keep your money, gear, and fish outside of the fish and money consumed by each rebirth requirement.
          </p>
        </div>
      </section>

      {/* How Rebirth Works */}
      <section className="px-6 md:px-12 py-10" data-testid="rebirth-how-section">
        <div className="flex items-center gap-4 mb-6">
          <h2 className="font-heading text-2xl font-bold tracking-tight text-white whitespace-nowrap">How Rebirth Works</h2>
          <div className="flex-1 h-px bg-white/10" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 stagger-children">
          {[
            { title: "No Full Reset", text: "Unlike many games, rebirth does not reset your whole account. It only uses the fish and money required for that rebirth tier." },
            { title: "Permanent Perks", text: "Each rebirth increases swim speed, backpack space, and your cash multiplier, making every next farm route faster and richer." },
            { title: "Plan Ahead", text: "Save the required fish before spending or selling them so you can chain rebirths more efficiently when your money is ready." },
          ].map(card => (
            <div
              key={card.title}
              className="border border-white/15 rounded-sm p-5 bg-[#0A0A0A] hover:border-blue-500 hover:-translate-y-1 transition-all"
              data-testid={`rebirth-tip-${card.title.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <h3 className="text-sm font-bold text-blue-400 mb-2">{card.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{card.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Rebirth Requirements */}
      <section className="px-6 md:px-12 py-8" data-testid="rebirth-list-section">
        <div className="flex items-center gap-4 mb-6">
          <h2 className="font-heading text-2xl font-bold tracking-tight text-white whitespace-nowrap">Rebirth Requirements & Perks</h2>
          <div className="flex-1 h-px bg-white/10" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4" data-testid="rebirth-container">
          {rebirthData.map(rebirth => (
            <article
              key={rebirth.tier}
              className="border border-white/15 rounded-sm p-5 bg-[#0A0A0A] hover:border-blue-500 transition-colors"
              data-testid={`rebirth-card-${rebirth.badge.toLowerCase()}`}
            >
              <div className="w-10 h-10 border border-blue-500/30 rounded-sm flex items-center justify-center text-blue-400 font-heading font-black text-sm mb-3 bg-blue-500/10">
                {rebirth.badge}
              </div>
              <h3 className="font-heading text-lg font-semibold text-white mb-1">{rebirth.tier}</h3>
              <p className="text-blue-400 text-sm font-bold mb-4 tabular-nums">{rebirth.money}</p>

              <div className="mb-3">
                <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 mb-1.5">Required Fish</span>
                <p className="text-sm text-zinc-300">{rebirth.fish.join(", ")}</p>
              </div>

              <div>
                <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 mb-1.5">Rewards</span>
                <ul className="space-y-1">
                  {rebirth.rewards.map(reward => (
                    <li key={reward} className="text-sm text-zinc-400">{reward}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Final Totals */}
      <section className="px-6 md:px-12 py-8" data-testid="rebirth-totals-section">
        <div className="flex items-center gap-4 mb-6">
          <h2 className="font-heading text-2xl font-bold tracking-tight text-white whitespace-nowrap">Final Totals</h2>
          <div className="flex-1 h-px bg-white/10" />
        </div>
        <div className="border border-white/15 rounded-sm p-6 bg-[#0A0A0A]" data-testid="totals-card">
          <p className="text-sm text-zinc-400 mb-5">Complete all rebirths to gain these permanent bonuses.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: "Swim Speed", value: "+28", icon: PersonSimpleSwim },
              { label: "Backpack Space", value: "+225", icon: Backpack },
              { label: "Cash Multiplier", value: "+2.25x", icon: CurrencyDollar },
            ].map(stat => (
              <div
                key={stat.label}
                className="border border-white/10 rounded-sm p-4 bg-black/40"
                data-testid={`total-stat-${stat.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <stat.icon size={16} weight="duotone" className="text-blue-500" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-500">{stat.label}</span>
                </div>
                <span className="text-2xl font-heading font-black text-white tabular-nums">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-12 py-8 border-t border-white/10 mt-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-600">Dive Down Guide by Monaco_m2</p>
          <Link to="/" className="text-xs text-zinc-500 hover:text-blue-400 transition-colors">
            Back to Fish Database
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default RebirthPage;

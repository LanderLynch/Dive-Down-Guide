import { useState, useEffect, useCallback } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { List, X, ArrowUp, MagnifyingGlass, Fish, Waves, Lightning, Question, ArrowsClockwise, GameController } from "@phosphor-icons/react";
import { fishDatabase, slugify, getGroupedZones, specialZones } from "@/data/fishData";
import FishSearch from "@/components/FishSearch";

const navSections = [
  { label: "Home", href: "/#home", icon: Waves },
  { label: "Mutations", href: "/#mutation-guide", icon: Lightning },
];

const helpLinks = [
  { label: "Tips & Tricks", href: "/#tips", icon: Lightning },
  { label: "FAQs", href: "/#faq", icon: Question },
];

const Layout = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();
  const groupedZones = getGroupedZones();

  const biomeZones = Object.keys(groupedZones).filter(z => !specialZones.has(z));
  const special = Object.keys(groupedZones).filter(z => specialZones.has(z));

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setSearchOpen(false);
  }, [location]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const handleNavClick = useCallback((e, href) => {
    if (href.startsWith("/#")) {
      const id = href.slice(2);
      if (location.pathname === "/") {
        e.preventDefault();
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    }
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-black text-white font-body">
      {/* Header */}
      <header
        className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-xl border-b border-white/15"
        data-testid="main-header"
      >
        <div className="flex items-center justify-between px-4 md:px-6 h-14">
          <div className="flex items-center gap-3">
            <button
              data-testid="mobile-menu-toggle"
              className="lg:hidden p-2 border border-white/20 rounded-sm hover:border-white/50 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={20} /> : <List size={20} />}
            </button>
            <Link to="/" className="flex items-center gap-2.5" data-testid="logo-link">
              <img src="/photos/Logo Side menu.png" alt="Dive Down" className="h-8 w-auto" />
              <span className="font-heading font-bold text-lg tracking-tight hidden sm:inline">
                Dive Down Guide
              </span>
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <button
              data-testid="search-toggle-btn"
              className="p-2 border border-white/20 rounded-sm hover:border-blue-500 hover:text-blue-400 transition-colors"
              onClick={() => setSearchOpen(!searchOpen)}
            >
              <MagnifyingGlass size={20} />
            </button>
            <a
              href="https://www.roblox.com/games/131756752872026/Dive-Down"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 px-3 py-1.5 border border-white/20 rounded-sm text-xs font-bold uppercase tracking-wider hover:border-white/50 transition-colors"
              data-testid="roblox-badge"
            >
              <GameController size={16} weight="duotone" />
              <span>Play on Roblox</span>
            </a>
          </div>
        </div>

        {/* Search dropdown */}
        {searchOpen && (
          <div className="border-t border-white/10 bg-black/90 backdrop-blur-xl px-4 py-3">
            <FishSearch onResultClick={() => setSearchOpen(false)} />
          </div>
        )}
      </header>

      {/* Mobile backdrop */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setMenuOpen(false)}
          data-testid="mobile-backdrop"
        />
      )}

      {/* Sidebar */}
      <aside
        data-testid="sidebar"
        className={`fixed top-14 left-0 bottom-0 w-64 bg-black border-r border-white/15 z-40 overflow-y-auto transition-transform duration-200 
          ${menuOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      >
        <nav className="p-4 space-y-1">
          {/* Main */}
          {navSections.map(item => (
            <Link
              key={item.label}
              to={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="flex items-center gap-2.5 px-3 py-2 text-sm text-zinc-300 hover:text-white hover:bg-white/5 rounded-sm transition-colors"
              data-testid={`nav-${slugify(item.label)}`}
            >
              <item.icon size={16} weight="duotone" className="text-blue-500 flex-shrink-0" />
              {item.label}
            </Link>
          ))}

          {/* Biomes */}
          <div className="pt-4">
            <span className="block px-3 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-500 mb-2">
              Biomes
            </span>
            {biomeZones.map(zone => (
              <Link
                key={zone}
                to={`/#${slugify(zone)}`}
                onClick={(e) => handleNavClick(e, `/#${slugify(zone)}`)}
                className="flex items-center gap-2.5 px-3 py-1.5 text-sm text-zinc-400 hover:text-white hover:bg-white/5 rounded-sm transition-colors"
                data-testid={`nav-${slugify(zone)}`}
              >
                <Fish size={14} weight="duotone" className="text-blue-500/60 flex-shrink-0" />
                {zone}
              </Link>
            ))}
          </div>

          {/* Special */}
          <div className="pt-4">
            <span className="block px-3 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-500 mb-2">
              Special
            </span>
            {special.map(zone => (
              <Link
                key={zone}
                to={`/#${slugify(zone)}`}
                onClick={(e) => handleNavClick(e, `/#${slugify(zone)}`)}
                className="flex items-center gap-2.5 px-3 py-1.5 text-sm text-zinc-400 hover:text-white hover:bg-white/5 rounded-sm transition-colors"
                data-testid={`nav-${slugify(zone)}`}
              >
                <Lightning size={14} weight="duotone" className="text-blue-500/60 flex-shrink-0" />
                {zone}
              </Link>
            ))}
          </div>

          {/* Help */}
          <div className="pt-4">
            <span className="block px-3 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-500 mb-2">
              Help
            </span>
            {helpLinks.map(item => (
              <Link
                key={item.label}
                to={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="flex items-center gap-2.5 px-3 py-2 text-sm text-zinc-400 hover:text-white hover:bg-white/5 rounded-sm transition-colors"
                data-testid={`nav-${slugify(item.label)}`}
              >
                <item.icon size={14} weight="duotone" className="text-blue-500/60 flex-shrink-0" />
                {item.label}
              </Link>
            ))}
          </div>

          {/* More */}
          <div className="pt-4">
            <span className="block px-3 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-500 mb-2">
              More
            </span>
            <Link
              to="/rebirth"
              className="flex items-center gap-2.5 px-3 py-2 text-sm text-zinc-400 hover:text-white hover:bg-white/5 rounded-sm transition-colors"
              data-testid="nav-rebirth-guide"
            >
              <ArrowsClockwise size={14} weight="duotone" className="text-blue-500/60 flex-shrink-0" />
              Rebirth Guide
            </Link>
          </div>

          {/* Footer */}
          <div className="pt-6 mt-4 border-t border-white/10 px-3">
            <p className="text-[11px] text-zinc-600">Created by Monaco_m2</p>
          </div>
        </nav>
      </aside>

      {/* Main content */}
      <main className="lg:ml-64 pt-14 min-h-screen">
        <Outlet />
      </main>

      {/* Scroll to top */}
      {showScrollTop && (
        <button
          data-testid="scroll-top-button"
          onClick={scrollToTop}
          className="fixed bottom-16 right-6 z-50 w-10 h-10 bg-blue-600 hover:bg-blue-500 text-white rounded-sm flex items-center justify-center transition-all shadow-lg shadow-blue-600/30"
        >
          <ArrowUp size={18} weight="bold" />
        </button>
      )}
    </div>
  );
};

export default Layout;

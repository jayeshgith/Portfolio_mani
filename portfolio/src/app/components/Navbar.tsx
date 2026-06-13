"use client";

import { useState, useEffect, useCallback } from "react";

const NAV_ITEMS = ["Home", "About", "Education", "Skills", "Projects", "Certifications", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Determine active section based on scroll position
      const sections = NAV_ITEMS.map((item) => {
        const el = document.getElementById(item.toLowerCase());
        if (el) {
          const rect = el.getBoundingClientRect();
          return { id: item, offset: Math.abs(rect.top) };
        }
        return { id: item, offset: Infinity };
      });
      
      const closest = sections.reduce((min, sec) => (sec.offset < min.offset ? sec : min), { id: "Home", offset: Infinity });
      if (closest.offset < window.innerHeight / 2) {
        setActiveItem(closest.id);
      }
    };
    
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = useCallback((e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setActiveItem(id);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  }, []);

  return (
    <nav
      className={`fixed left-0 right-0 z-50 transition-all duration-500 ease-out px-4 ${
        scrolled ? "top-3" : "top-5"
      }`}
    >
      <div
        className={`mx-auto max-w-5xl transition-all duration-500 ease-out rounded-full border px-6 py-2.5 flex items-center justify-between ${
          scrolled
            ? "bg-dark-2/70 backdrop-blur-xl border-white/8 shadow-2xl shadow-black/40 py-2"
            : "bg-white/[0.02] backdrop-blur-md border-white/5 py-3"
        }`}
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => scrollTo(e, "home")}
          className="text-lg font-black tracking-tight text-white hover:text-emerald-400 transition-colors duration-300 flex items-center gap-1 group"
        >
          <span className="text-emerald-400 group-hover:-translate-x-0.5 transition-transform duration-300">&lt;</span>
          Manish
          <span className="text-emerald-400 group-hover:translate-x-0.5 transition-transform duration-300">/&gt;</span>
        </a>

        {/* Desktop menu */}
        <ul className="hidden md:flex items-center gap-1.5 bg-white/[0.03] border border-white/5 rounded-full p-1">
          {NAV_ITEMS.map((item) => {
            const isActive = activeItem === item;
            return (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => scrollTo(e, item)}
                  className={`relative block px-4 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-full transition-all duration-300 ${
                    isActive
                      ? "text-emerald-300 bg-emerald-500/10 border border-emerald-500/15"
                      : "text-slate-400 hover:text-white border border-transparent"
                  }`}
                >
                  {item}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white flex items-center justify-center h-9 w-9 rounded-full bg-white/5 border border-white/5 hover:bg-emerald-500/10 hover:border-emerald-500/20 text-xl focus:outline-none transition-all duration-300"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <i className={`fas ${menuOpen ? "fa-times" : "fa-bars"} text-sm`} />
        </button>
      </div>

      {/* Mobile drop down menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-500 ease-in-out mt-2"
        style={{
          maxHeight: menuOpen ? "420px" : "0",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
        }}
      >
        <div className="rounded-3xl border border-white/8 bg-dark-2/95 backdrop-blur-2xl shadow-2xl p-2.5 space-y-1">
          {NAV_ITEMS.map((item) => {
            const isActive = activeItem === item;
            return (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => scrollTo(e, item)}
                className={`block px-5 py-3 rounded-2xl font-semibold text-sm transition-all duration-300 ${
                  isActive
                    ? "bg-emerald-500/15 text-emerald-300 border border-emerald-500/10"
                    : "text-slate-400 hover:bg-white/5 hover:text-white border border-transparent"
                }`}
              >
                {item}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

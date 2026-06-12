"use client";

import { useState, useEffect, useCallback } from "react";

const NAV_ITEMS = ["Home", "About", "Education", "Skills", "Projects", "Certifications", "Contact"];

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  /* Apply dark mode to body */
  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  /* Navbar shadow on scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = useCallback((e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(15, 23, 42, 0.95)" : "rgba(15, 23, 42, 0.82)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        boxShadow: scrolled ? "0 12px 36px rgba(0, 0, 0, 0.25)" : "none",
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
        <a
          href="#home"
          onClick={(e) => scrollTo(e, "home")}
          className="text-2xl font-extrabold tracking-wide text-white hover:text-emerald-300 transition-colors duration-200"
          style={{ textShadow: "0 2px 14px rgba(0,0,0,0.35)" }}
        >
          Manish Kunthoor
        </a>

        <ul className="hidden md:flex items-center gap-2">
          {NAV_ITEMS.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                onClick={(e) => scrollTo(e, item)}
                className="nav-link text-white"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setDarkMode(!darkMode)}
            className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/20 hover:text-emerald-300"
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>

          <button
            className="md:hidden text-white text-2xl focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <i className={`fas ${menuOpen ? "fa-times" : "fa-bars"}`} />
          </button>
        </div>
      </div>

      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: menuOpen ? "320px" : "0",
          opacity: menuOpen ? 1 : 0,
          background: "rgba(15, 23, 42, 0.96)",
        }}
      >
        <ul className="flex flex-col px-6 py-4 gap-3">
          {NAV_ITEMS.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                onClick={(e) => scrollTo(e, item)}
                className="block rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white font-medium transition hover:bg-white/10 hover:text-emerald-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

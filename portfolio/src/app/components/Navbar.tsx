"use client";

import { useState, useEffect, useCallback, useRef } from "react";

const NAV_ITEMS = ["Home", "About", "Education", "Skills", "Projects", "Certifications", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");
  const [indicatorStyle, setIndicatorStyle] = useState<React.CSSProperties>({});
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "dark" | "light" | null;
    const initialTheme = savedTheme || "dark";
    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("theme", nextTheme);
  };
  
  const navRefs = useRef<{ [key: string]: HTMLAnchorElement | null }>({});

  useEffect(() => {
    const activeLink = navRefs.current[activeItem];
    if (activeLink) {
      const { offsetLeft, offsetWidth } = activeLink;
      setIndicatorStyle({
        left: `${offsetLeft}px`,
        width: `${offsetWidth}px`,
        opacity: 1,
      });
    } else {
      setIndicatorStyle({ opacity: 0 });
    }
  }, [activeItem]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // Setup IntersectionObserver for highly accurate section tracking
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -55% 0px", // Focus on viewport center area
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          const matchedItem = NAV_ITEMS.find((item) => item.toLowerCase() === id);
          if (matchedItem) {
            setActiveItem(matchedItem);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    NAV_ITEMS.forEach((item) => {
      const el = document.getElementById(item.toLowerCase());
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  const scrollTo = useCallback((e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setActiveItem(id);
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      const offset = 90; // Adjust for sticky navbar gap
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setMenuOpen(false);
  }, []);

  return (
    <nav
      className={`fixed left-0 right-0 z-50 transition-all duration-500 ease-out px-4 ${
        scrolled ? "top-3" : "top-6"
      }`}
    >
      <div
        className={`mx-auto max-w-5xl transition-all duration-500 ease-out rounded-full border px-6 flex items-center justify-between ${
          scrolled
            ? "bg-[#050711]/75 backdrop-blur-xl border-white/5 shadow-xl shadow-black/40 py-2.5"
            : "bg-white/[0.01] backdrop-blur-md border-white/5 py-4"
        }`}
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => scrollTo(e, "home")}
          className="text-lg font-black tracking-tight text-white hover:text-emerald-400 transition-all duration-300 flex items-center gap-1 group font-outfit"
        >
          <span className="text-emerald-400 group-hover:-translate-x-0.5 transition-transform duration-300">&lt;</span>
          Manish
          <span className="text-emerald-400 group-hover:translate-x-0.5 transition-transform duration-300">/&gt;</span>
        </a>

        {/* Desktop Menu Options */}
        <ul className="relative hidden md:flex items-center gap-1 bg-white/[0.01] border border-white/5 rounded-full p-1 shadow-inner">
          {/* Sliding Indicator Pill */}
          <div
            className="absolute top-1 bottom-1 bg-emerald-500/10 border border-emerald-500/15 shadow-sm shadow-emerald-500/5 rounded-full transition-all duration-300 ease-out"
            style={indicatorStyle}
          />

          {NAV_ITEMS.map((item) => {
            const isActive = activeItem === item;
            return (
              <li key={item} className="z-10">
                <a
                  ref={(el) => {
                    navRefs.current[item] = el;
                  }}
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => scrollTo(e, item)}
                  className={`relative block px-4.5 py-2 text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300 ${
                    isActive
                      ? "text-emerald-300"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {item}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center h-10 w-10 rounded-full bg-white/5 border border-white/5 hover:bg-emerald-500/10 hover:border-emerald-500/20 focus:outline-none transition-all duration-300 cursor-pointer text-slate-300 hover:text-white"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? (
              <i className="fas fa-sun text-sm" />
            ) : (
              <i className="fas fa-moon text-sm" />
            )}
          </button>

          {/* Mobile Menu Activation Toggle */}
          <button
            className="md:hidden text-white flex items-center justify-center h-10 w-10 rounded-full bg-white/5 border border-white/5 hover:bg-emerald-500/10 hover:border-emerald-500/20 focus:outline-none transition-all duration-300 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-5 h-4 flex flex-col justify-between items-center relative">
              <span className={`w-5 h-0.5 bg-white rounded transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
              <span className={`w-5 h-0.5 bg-white rounded transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`w-5 h-0.5 bg-white rounded transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile drop down menu panel */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out mt-3 ${
          menuOpen ? "max-h-[500px] opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="rounded-3xl border border-white/5 bg-[#050711]/95 backdrop-blur-2xl shadow-2xl p-4 space-y-2">
          {NAV_ITEMS.map((item, idx) => {
            const isActive = activeItem === item;
            return (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => scrollTo(e, item)}
                style={{
                  transitionDelay: `${idx * 40}ms`,
                  transform: menuOpen ? "translateX(0)" : "translateX(-12px)",
                  opacity: menuOpen ? 1 : 0,
                }}
                className={`block px-5 py-3 rounded-2xl font-bold text-sm tracking-wide transition-all duration-300 ${
                  isActive
                    ? "bg-emerald-500/10 text-emerald-300 border border-emerald-500/15"
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

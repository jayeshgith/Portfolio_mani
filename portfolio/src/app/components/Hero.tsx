"use client";

import Image from "next/image";
import { useCallback, useState, useEffect } from "react";
import { MagneticContainer } from "./AntigravityEffects";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/manish-kunthoor-99ba00279",
    icon: "fab fa-linkedin-in",
    label: "LinkedIn",
    color: "hover:text-blue-400 hover:border-blue-500/30 hover:bg-blue-500/10",
  },
  {
    href: "https://github.com/jayeshgith",
    icon: "fab fa-github",
    label: "GitHub",
    color: "hover:text-white hover:border-white/20 hover:bg-white/10",
  },
  {
    href: "mailto:manishkunthoor@gmail.com",
    icon: "fas fa-envelope",
    label: "Email",
    color: "hover:text-emerald-400 hover:border-emerald-500/30 hover:bg-emerald-500/10",
  },
  {
    href: "tel:+917019974493",
    icon: "fas fa-phone",
    label: "Phone",
    color: "hover:text-violet-400 hover:border-violet-500/30 hover:bg-violet-500/10",
  },
];

const TERMINAL_LINES = [
  '# Loading developer settings...',
  '# Initializing stack configurations...',
  'const developer = {',
  '  name: "Manish Kunthoor",',
  '  degree: "BE Computer Science & Engineering",',
  '  training: "Fabsol Bangalore Trainee",',
  '  coreStack: ["FastAPI", "React.js", "PyTorch", "Prompt Engineering", "Ollama OCR"],',
  '  motto: "Optimize. Architect. Deliver."',
  '};'
];

export default function Hero() {
  const [typedLines, setTypedLines] = useState<string[]>([]);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (lineIndex < TERMINAL_LINES.length) {
      const currentFullLine = TERMINAL_LINES[lineIndex];
      if (charIndex < currentFullLine.length) {
        const timeout = setTimeout(() => {
          setTypedLines((prev) => {
            const copy = [...prev];
            if (!copy[lineIndex]) {
              copy[lineIndex] = "";
            }
            copy[lineIndex] += currentFullLine[charIndex];
            return copy;
          });
          setCharIndex((prev) => prev + 1);
        }, 12);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setLineIndex((prev) => prev + 1);
          setCharIndex(0);
        }, 80);
        return () => clearTimeout(timeout);
      }
    }
  }, [lineIndex, charIndex]);

  const scrollTo = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-32 pb-20"
    >
      {/* Visual background layers */}
      <div className="grid-bg" />
      <div className="bg-blur-container">
        <div className="bg-blur-blob blob-1" />
        <div className="bg-blur-blob blob-2" />
        <div className="bg-blur-blob blob-3" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 w-full z-10">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          
          {/* Left Column: Key profile summaries */}
          <div className="space-y-8 text-left">
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-1.5 text-[0.72rem] font-bold uppercase tracking-[0.25em] text-emerald-300 shadow-sm shadow-emerald-500/5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-glow" />
                AI & Prompt Engineer
              </div>
            </div>

            <div className="space-y-6 animate-slide-up">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black leading-[1.08] tracking-tight text-white font-outfit">
                Manish Kunthoor
              </h1>
              <p className="max-w-2xl text-slate-400 leading-relaxed text-[1.05rem]">
                AI Engineer building intelligent systems with PyTorch, Ollama, FastAPI, and React.
              </p>
            </div>

            {/* Direct Calls Action Group */}
            <div className="flex flex-wrap gap-4 items-center animate-fade-in delay-200">
              <MagneticContainer>
                <button
                  onClick={() => scrollTo("contact")}
                  className="btn-primary inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-bold cursor-pointer transition-all duration-300"
                >
                  Get in Touch
                  <i className="fas fa-arrow-right text-xs" />
                </button>
              </MagneticContainer>
              <MagneticContainer>
                <button
                  onClick={() => scrollTo("projects")}
                  className="btn-secondary inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-bold cursor-pointer transition-all duration-300"
                >
                  <i className="fas fa-code text-xs" />
                  View Projects
                </button>
              </MagneticContainer>
            </div>

            {/* Social Anchor Dock */}
            <div className="flex items-center gap-5 pt-4 animate-fade-in delay-300">
              <span className="text-[0.72rem] font-bold uppercase tracking-[0.25em] text-slate-500">
                Connect
              </span>
              <div className="w-12 h-px bg-slate-800" />
              <div className="flex items-center gap-3">
                {socialLinks.map(({ href, icon, label, color }) => (
                  <MagneticContainer key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={label}
                      className={`flex h-10 w-10 items-center justify-center rounded-2xl border border-white/5 bg-white/[0.02] text-sm text-slate-400 transition-all duration-300 ${color} shadow-sm`}
                    >
                      <i className={icon} />
                    </a>
                  </MagneticContainer>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Code Shell Terminal + Mini Profile Card */}
          <div className="relative animate-scale-in delay-100 flex flex-col items-center">
            
            {/* Soft decorative background glows */}
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 via-blue-500/5 to-violet-500/10 rounded-[2.5rem] blur-3xl -z-10" />

            <div className="w-full max-w-[460px] space-y-6">
              
              {/* Code window console container */}
              <div className="glass-card rounded-[1.75rem] overflow-hidden border border-white/5 shadow-2xl relative">
                <div className="code-header px-5 py-3.5 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3.5 h-3.5 rounded-full bg-red-500/70 border border-red-600/20" />
                    <span className="w-3.5 h-3.5 rounded-full bg-yellow-500/70 border border-yellow-600/20" />
                    <span className="w-3.5 h-3.5 rounded-full bg-green-500/70 border border-green-600/20" />
                  </div>
                  <span className="text-[0.7rem] font-mono text-slate-400 select-none tracking-wider">
                    developer.json
                  </span>
                  <div className="w-12" />
                </div>
                <div className="p-6 font-mono text-[0.78rem] leading-relaxed text-slate-300 h-56 overflow-y-auto bg-[#030408]/75">
                  {typedLines.map((line, idx) => {
                    const isComment = line.startsWith('#');
                    const isKeyword = line.includes('const ') || line.includes('let ');
                    return (
                      <div key={idx} className={isComment ? "text-slate-500 font-style-italic" : "text-slate-300"}>
                        {isKeyword ? (
                          <>
                            <span className="text-violet-400">const</span>{" "}
                            <span className="text-blue-400">{line.substring(6, 15)}</span>
                            {line.substring(15)}
                          </>
                        ) : (
                          line
                        )}
                        {idx === typedLines.length - 1 && lineIndex < TERMINAL_LINES.length && (
                          <span className="inline-block w-1.5 h-3.5 bg-emerald-400 ml-0.5 animate-pulse" />
                        )}
                      </div>
                    );
                  })}
                  {lineIndex === TERMINAL_LINES.length && (
                    <div className="text-emerald-400 mt-2 font-bold animate-pulse">
                      &gt; terminal settings: loaded
                      <span className="inline-block w-1.5 h-3.5 bg-emerald-400 ml-1" />
                    </div>
                  )}
                </div>
              </div>

              {/* Profile Card details */}
              <div className="glass-card rounded-[1.75rem] p-5 flex items-center gap-4 border border-white/5 shadow-xl">
                <div className="relative h-16 w-16 overflow-hidden rounded-2xl border border-white/10 shrink-0 shadow-md">
                  <Image
                    src="/mypic.jpg"
                    alt="Manish Kunthoor"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    priority
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-bold text-white truncate font-outfit">Manish Kunthoor</h3>
                  <p className="text-[0.72rem] text-emerald-400 font-extrabold uppercase tracking-wider mt-0.5">BE - Computer Science</p>
                  <p className="text-[0.68rem] text-slate-500 truncate mt-1">Bangalore, Karnataka, IN</p>
                </div>
              </div>

              {/* Numeric Stats dashboard */}
              <div className="grid grid-cols-2 gap-4">
                <MagneticContainer>
                  <div className="glass-card rounded-[1.5rem] p-5 text-center border border-white/5 shadow-md hover:border-emerald-500/20 hover:shadow-emerald-500/10">
                    <p className="text-3xl font-black text-white bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent font-outfit">4+</p>
                    <p className="text-[0.68rem] font-extrabold uppercase tracking-widest text-slate-400 mt-1.5">
                      Core Projects
                    </p>
                  </div>
                </MagneticContainer>
                <MagneticContainer>
                  <div className="glass-card rounded-[1.5rem] p-5 text-center border border-white/5 shadow-md hover:border-blue-500/20 hover:shadow-blue-500/10">
                    <p className="text-3xl font-black text-white bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent font-outfit">3+ mo</p>
                    <p className="text-[0.68rem] font-extrabold uppercase tracking-widest text-slate-400 mt-1.5">
                      Industry Training
                    </p>
                  </div>
                </MagneticContainer>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

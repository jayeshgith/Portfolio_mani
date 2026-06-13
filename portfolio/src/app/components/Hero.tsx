"use client";

import Image from "next/image";
import { useCallback } from "react";

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

export default function Hero() {
  const scrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-16"
    >
      {/* Background visual components */}
      <div className="grid-bg" />
      <div className="bg-blur-container">
        <div className="bg-blur-blob blob-1" />
        <div className="bg-blur-blob blob-2" />
        <div className="bg-blur-blob blob-3" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 w-full z-10">
        <div className="grid gap-16 lg:grid-cols-[1.25fr_1fr] lg:items-center">
          
          {/* Left Column: Heading and description */}
          <div className="space-y-8 text-left">
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4.5 py-1.5 text-[0.7rem] font-extrabold uppercase tracking-[0.25em] text-emerald-300 shadow-sm shadow-emerald-500/5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-glow" />
                Available for Opportunities
              </div>
            </div>

            <div className="space-y-6 animate-slide-up">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-slate-500">
                Full-Stack Engineer
              </p>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black leading-[1.08] tracking-tight text-white">
                Building{" "}
                <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-blue-400 bg-clip-text text-transparent">
                  modern web
                </span>
                <br />
                experiences
              </h1>
              <p className="max-w-2xl text-slate-400 leading-relaxed text-[1.05rem]">
                I specialize in Next.js, React, Node.js, and MongoDB. Focused on
                clean architecture, responsive layouts, and solving real-world challenges.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 animate-fade-in delay-200">
              <button
                onClick={() => scrollTo("contact")}
                className="btn-primary inline-flex items-center gap-2 rounded-full px-8 py-4.5 text-sm font-bold cursor-pointer"
              >
                Get in Touch
                <i className="fas fa-arrow-right text-xs transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => scrollTo("projects")}
                className="btn-secondary inline-flex items-center gap-2 rounded-full px-8 py-4.5 text-sm font-bold cursor-pointer"
              >
                <i className="fas fa-code text-xs" />
                View Projects
              </button>
            </div>

            {/* Social Dock */}
            <div className="flex items-center gap-5 pt-4 animate-fade-in delay-400">
              <span className="text-[0.7rem] font-bold uppercase tracking-[0.25em] text-slate-500">
                Connect
              </span>
              <div className="w-12 h-px bg-slate-800" />
              <div className="flex items-center gap-3">
                {socialLinks.map(({ href, icon, label, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={label}
                    className={`flex h-10 w-10 items-center justify-center rounded-2xl border border-white/5 bg-white/[0.02] text-sm text-slate-400 transition-all duration-300 ${color} hover:-translate-y-1 shadow-sm`}
                  >
                    <i className={icon} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Premium Code Window + Profile Visual */}
          <div className="relative animate-scale-in delay-100 flex flex-col items-center">
            
            {/* Visual glow behind */}
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/15 via-blue-500/8 to-violet-500/15 rounded-[2.5rem] blur-3xl -z-10" />

            <div className="w-full max-w-[440px] space-y-6">
              
              {/* Code Editor Window */}
              <div className="glass-card rounded-[1.5rem] overflow-hidden shadow-2xl border border-white/5">
                <div className="bg-dark-3/60 px-4 py-3 border-b border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500/70" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                    <span className="w-3 h-3 rounded-full bg-green-500/70" />
                  </div>
                  <span className="text-[0.68rem] font-mono text-slate-500 select-none">
                    developer.json
                  </span>
                  <div className="w-12" />
                </div>
                <div className="p-5 font-mono text-[0.8rem] leading-relaxed text-slate-300 overflow-x-auto">
                  <div>
                    <span className="text-violet-400">const</span>{" "}
                    <span className="text-blue-400">developer</span> = &#123;
                  </div>
                  <div className="pl-4">
                    <span className="text-emerald-400">&quot;name&quot;</span>:{" "}
                    <span className="text-amber-300">&quot;Manish Kunthoor&quot;</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-emerald-400">&quot;role&quot;</span>:{" "}
                    <span className="text-amber-300">&quot;Full-Stack Engineer&quot;</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-emerald-400">&quot;focus&quot;</span>:{" "}
                    <span className="text-amber-300">&quot;Scalable Web Apps&quot;</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-emerald-400">&quot;stack&quot;</span>: [
                  </div>
                  <div className="pl-8 text-amber-300">
                    &quot;Next.js&quot;, &quot;TypeScript&quot;, &quot;Node.js&quot;, &quot;MongoDB&quot;
                  </div>
                  <div className="pl-4">],</div>
                  <div className="pl-4">
                    <span className="text-emerald-400">&quot;motto&quot;</span>:{" "}
                    <span className="text-amber-300">&quot;Clean Code, Real Solutions&quot;</span>
                  </div>
                  <div>&#125;;</div>
                </div>
              </div>

              {/* Profile card & Stats container */}
              <div className="glass-card rounded-[1.5rem] p-5 flex items-center gap-4 relative overflow-hidden border border-white/5">
                <div className="relative h-16 w-16 overflow-hidden rounded-2xl border border-white/10 shrink-0">
                  <Image
                    src="/mypic.jpg"
                    alt="Manish Kunthoor"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-bold text-white truncate">Manish Kunthoor</h3>
                  <p className="text-[0.72rem] text-emerald-400 font-semibold mt-0.5">BE - Computer Science</p>
                  <p className="text-[0.68rem] text-slate-500 truncate mt-1">Bangalore, Karnataka, IN</p>
                </div>
              </div>

              {/* Numeric Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="glass-card rounded-[1.25rem] p-4.5 text-center border border-white/5">
                  <p className="text-2xl font-black text-white bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">4+</p>
                  <p className="text-[0.68rem] font-bold uppercase tracking-widest text-slate-400 mt-1">
                    Projects
                  </p>
                </div>
                <div className="glass-card rounded-[1.25rem] p-4.5 text-center border border-white/5">
                  <p className="text-2xl font-black text-white bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent">6+ mo</p>
                  <p className="text-[0.68rem] font-bold uppercase tracking-widest text-slate-400 mt-1">
                    Experience
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

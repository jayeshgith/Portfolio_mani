"use client";

import { MagneticContainer } from "./AntigravityEffects";

const highlights = [
  { 
    label: "Full-Stack Architecture", 
    detail: "Next.js routing, React patterns, backend controllers, and MongoDB storage mapping.",
    icon: "fas fa-laptop-code"
  },
  { 
    label: "Identity & Security", 
    detail: "Secure middleware validation, NextAuth session validation, and JWT validation checks.",
    icon: "fas fa-shield-alt"
  },
  { 
    label: "Relational Mapping", 
    detail: "Scalable MongoDB architectures, Mongoose validations, lookup pipelines, and indexes.",
    icon: "fas fa-database"
  },
  { 
    label: "Endpoint Orchestration", 
    detail: "RESTful configurations, Stripe payment checkout pipelines, and Zod validator schemas.",
    icon: "fas fa-network-wired"
  },
];

export default function About() {
  return (
    <section id="about" className="py-28 relative">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mx-auto max-w-4xl space-y-4 text-center">
          <p className="section-overline">About Me</p>
        </div>

        {/* Content Layout Grid */}
        <div className="mt-16 grid gap-8 lg:grid-cols-[1.3fr_0.9fr] lg:items-start">
          
          {/* Left Column: Narrative Card */}
          <div className="glass-card rounded-[2rem] p-8 lg:p-10 border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl" />
            
            <div className="space-y-6 text-slate-400 leading-relaxed text-[0.98rem]">
              <p>
                I build intelligent, component-driven interfaces using <strong className="text-white font-bold font-outfit">React.js</strong> and <strong className="text-white font-bold font-outfit">Next.js</strong>, powered by robust AI-driven backends with <strong className="text-white font-bold font-outfit">FastAPI</strong>, <strong className="text-white font-bold font-outfit">PyTorch</strong>, <strong className="text-white font-bold font-outfit">Ollama OCR</strong>, and custom prompt design.
              </p>
            </div>

            {/* Core Badges Toolkit */}
            <div className="mt-8 pt-6 border-t border-white/5">
              <p className="text-[0.68rem] font-extrabold uppercase tracking-widest text-slate-500 mb-4">Toolkit Highlights</p>
              <div className="flex flex-wrap gap-2.5">
                {["PyTorch", "FastAPI", "Ollama OCR", "Prompt Engineering", "React.js", "Next.js", "Python"].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-emerald-500/5 px-4.5 py-2 text-xs font-bold text-emerald-300 border border-emerald-500/10 shadow-sm transition-all duration-300 hover:bg-emerald-500/10 hover:border-emerald-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
          {/* Right Column: Speciality Cards */}
          <div className="grid gap-4">
            {highlights.map((item, i) => (
              <MagneticContainer key={item.label}>
                <div
                  className="relative p-[1px] rounded-[1.5rem] bg-white/5 hover:bg-gradient-to-r hover:from-emerald-500/30 hover:via-blue-500/20 hover:to-indigo-500/30 transition-all duration-500 group"
                >
                  <div className="w-full h-full bg-[#050711]/95 rounded-[1.42rem] p-5 flex items-start gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-tr from-emerald-500/10 to-teal-500/20 text-emerald-400 shrink-0 border border-emerald-500/10 group-hover:scale-110 transition-all duration-300">
                      <i className={`${item.icon} text-base`} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[0.68rem] font-extrabold uppercase tracking-widest text-emerald-400/80 mb-1">
                        Capability 0{i + 1}
                      </p>
                      <h4 className="text-base font-bold text-white tracking-tight mb-1 font-outfit">
                        {item.label}
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                </div>
              </MagneticContainer>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

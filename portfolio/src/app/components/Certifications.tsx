"use client";

interface Certification {
  name: string;
  emoji: string;
  org: string;
  period?: string;
  desc: string;
}

const certifications: Certification[] = [
  {
    name: "AI-Data Quality Analyst Internship",
    emoji: "🤖",
    org: "Rooman Technologies",
    period: "Sep 2024 - Feb 2025",
    desc: "Worked on validation datasets, dataset cleaning architectures, and data analysis pipelines for AI models.",
  },
  {
    name: "Full-Stack Development Trainee",
    emoji: "🌐",
    org: "Fabsol Bangalore",
    period: "Jan - Mar 2026",
    desc: "Completed hands-on practical training building enterprise web apps, integrating APIs, and managing databases.",
  },
  {
    name: "AI Integration for Improving Sensor Data Quality in Predictive Maintenance",
    emoji: "🧠",
    org: "IBM",
    period: "2024 - 2025",
    desc: "Learned predictive analysis strategies, anomaly detection, and data ingestion architectures using AI tools.",
  },
  {
    name: "JavaScript Programming Certification Course",
    emoji: "⚡",
    org: "Udemy",
    period: "2025",
    desc: "Deep-dive course covering JavaScript ES6+, async architectures, promises, closures, and DOM patterns.",
  },
  {
    name: "React.JS Crash Course: The Complete Course for Beginners",
    emoji: "⚛️",
    org: "Udemy",
    period: "2025",
    desc: "Mastered component lifecycles, states, hooks, custom hooks, context API, and client routing.",
  },
  {
    name: "Delta Web Full-Stack Development",
    emoji: "🚀",
    org: "Apna College",
    period: "2024 - 2025",
    desc: "Completed extensive web curriculum spanning HTML/CSS layout methods, database modeling, and backend endpoints.",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-28 relative">
      
      {/* Decorative blurred orbit background */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="mx-auto max-w-4xl space-y-4 text-center">
          <p className="section-overline">Certifications</p>
        </div>

        {/* Card Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <article
              key={index}
              className="glass-card rounded-[2rem] p-6 flex flex-col justify-between border border-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/25 relative group overflow-hidden"
            >
              {/* Badge visual background glow */}
              <div className="absolute -right-8 -top-8 w-24 h-24 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-full blur-xl pointer-events-none transition-all duration-500 group-hover:scale-150" />

              <div>
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="h-12 w-12 rounded-2xl bg-[#050711] border border-white/5 flex items-center justify-center text-xl shrink-0 shadow-inner group-hover:border-emerald-500/20 group-hover:scale-105 transition-all duration-300">
                    {cert.emoji}
                  </div>
                  <div className="min-w-0">
                    <span className="text-[0.62rem] font-black uppercase tracking-widest text-emerald-400">
                      {cert.org}
                    </span>
                    {cert.period && (
                      <p className="text-[0.65rem] text-slate-500 font-bold uppercase mt-0.5 tracking-wider">
                        {cert.period}
                      </p>
                    )}
                  </div>
                </div>
                
                <h3 className="text-base font-bold text-white tracking-tight leading-snug mb-3 group-hover:text-emerald-300 transition-colors duration-300 font-outfit">
                  {cert.name}
                </h3>
                
                <p className="text-slate-400 text-xs leading-relaxed">
                  {cert.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

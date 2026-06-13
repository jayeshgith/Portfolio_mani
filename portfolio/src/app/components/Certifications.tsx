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
    name: "AI Integration for Predictive Maintenance",
    emoji: "🧠",
    org: "IBM",
    period: "2024 - 2025",
    desc: "Learned predictive analysis strategies, anomaly detection, and data ingestion architectures using AI tools.",
  },
  {
    name: "JavaScript Programming Masterclass",
    emoji: "⚡",
    org: "Udemy",
    period: "2025",
    desc: "Deep-dive course covering JavaScript ES6+, async architectures, promises, closures, and DOM patterns.",
  },
  {
    name: "React.JS Core Training",
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
          <h2 className="section-title">
            Internships, training, and industry credentials.
          </h2>
          <p className="section-description">
            Validated credentials demonstrating commitment to continuous architectural learning and full-stack code validation.
          </p>
        </div>

        {/* Card Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <article
              key={index}
              className="glass-card rounded-[1.75rem] p-6.5 flex flex-col justify-between border border-white/5 hover:border-emerald-500/15 group"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-5">
                  <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-lg shrink-0 group-hover:scale-105 transition-transform duration-300">
                    {cert.emoji}
                  </div>
                  <span className="rounded-full bg-white/5 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-widest text-slate-400 border border-white/5 truncate max-w-[150px]">
                    {cert.org}
                  </span>
                </div>
                
                <h3 className="text-base font-bold text-white tracking-tight leading-snug mb-2 group-hover:text-emerald-400 transition-colors duration-300">
                  {cert.name}
                </h3>
                
                {cert.period && (
                  <p className="text-[0.68rem] font-extrabold uppercase tracking-widest text-emerald-400 mb-3">
                    {cert.period}
                  </p>
                )}
                
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

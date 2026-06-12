"use client";

interface Certification {
  name: string;
  emoji: string;
  org: string;
  period?: string;
}

const certifications: Certification[] = [
  {
    name: "AI-Data Quality Analyst Internship",
    emoji: "🤖",
    org: "Rooman Technologies",
    period: "Sep 2024 - Feb 2025",
  },
  {
    name: "Full-Stack Development Trainee",
    emoji: "🌐",
    org: "Fabsol Bangalore",
    period: "Jan - Mar 2026",
  },
  {
    name: "AI Integration for Predictive Maintenance",
    emoji: "🧠",
    org: "IBM",
    period: "2024-2025",
  },
  {
    name: "JavaScript Programming Course",
    emoji: "⚡",
    org: "Udemy",
    period: "2025",
  },
  { name: "React.JS Crash Course", emoji: "⚛️", org: "Udemy", period: "2025" },
  {
    name: "Delta Web Full-Stack Development",
    emoji: "🚀",
    org: "Apna College",
    period: "2024-2025",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="bg-slate-950/90 py-24 text-white">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-4xl space-y-4 text-center">
          <p className="section-overline">Certifications</p>
          <h2 className="section-title">
            Internships, training, and industry certifications.
          </h2>
          <p className="section-description">
            Hands-on experience and recognized credentials demonstrating
            commitment to continuous learning and skill development.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <article
              key={index}
              className="glass-card rounded-[2rem] border border-white/10 p-6 shadow-xl shadow-slate-950/30 transition duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-3xl">{cert.emoji}</span>
                <span className="rounded-full bg-slate-900/80 px-2 py-1 text-xs uppercase tracking-[0.2em] text-slate-400">
                  {cert.org}
                </span>
              </div>
              <h3 className="mt-6 text-lg font-semibold text-white">
                {cert.name}
              </h3>
              {cert.period && (
                <p className="mt-3 text-xs text-emerald-300">{cert.period}</p>
              )}
              <p className="mt-4 text-slate-400 text-sm leading-6">
                Industry-recognized training and credentials supporting my
                full-stack development expertise.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

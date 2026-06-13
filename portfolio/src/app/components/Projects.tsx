"use client";

interface Project {
  title: string;
  type: string;
  description: string;
  tech: string[];
  features: string[];
  emoji: string;
  link?: string;
  github?: string;
}

const projects: Project[] = [
  {
    title: "Fabinex",
    type: "Full-Stack App",
    description:
      "A comprehensive finance dashboard that enables users to track incomes, expenses, and cashflow details.",
    tech: ["Next.js", "MongoDB", "Stripe", "Zod", "NextAuth"],
    features: [
      "Secure user signup, login, and profile tracking",
      "Interactive analytics charts for monthly summaries",
      "Dynamic receipt file uploads and automated alerts",
      "Stripe integration with checkout sandbox simulation"
    ],
    emoji: "💰",
    link: "https://fab-inex.vercel.app/",
    github: "https://github.com/jayeshgith",
  },
  {
    title: "Kabaddi Scorecard Automation",
    type: "AI & Computer Vision",
    description:
      "A scoring pipeline using camera inputs to detect custom hand gestures and update tournament tables in real time.",
    tech: ["Python", "MediaPipe", "WebSocket", "JavaScript"],
    features: [
      "Real-time hand gesture extraction using MediaPipe models",
      "WebSocket stream relaying coordinates to clients instantly",
      "Dynamic browser dashboard showing scoreboard states"
    ],
    emoji: "🏆",
    link: "https://github.com/jayeshgith",
    github: "https://github.com/jayeshgith",
  },
  {
    title: "REST API Architecture",
    type: "Backend API",
    description:
      "Robust post management backend demonstrating structured REST design principles and data security protocols.",
    tech: ["Node.js", "Express", "MongoDB", "Mongoose"],
    features: [
      "Clean modular router endpoints with standard responses",
      "Strict data validation schemas on requests to block SQL/JSON injection",
      "Global Express error handling middlewares"
    ],
    emoji: "🔌",
    link: "https://github.com/jayeshgith/REST_API_Project",
    github: "https://github.com/jayeshgith/REST_API_Project",
  },
  {
    title: "My Portfolio",
    type: "Web Design",
    description:
      "Fully responsive developer portfolio showcasing projects, credentials, and interactive interfaces.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "CSS3"],
    features: [
      "Animated background mesh blobs and layout grid alignment",
      "Floating island glass navbar responding dynamically to scrolls",
      "Clean metadata SEO setup with responsive layout compatibility"
    ],
    emoji: "🌐",
    link: "https://my-site-newpage.vercel.app/",
    github: "https://github.com/jayeshgith/Portfolio_mani",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 relative">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/[0.01] to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <div className="mx-auto max-w-4xl space-y-4 text-center">
          <p className="section-overline">Featured Projects</p>
          <h2 className="section-title">
            Real-world applications built with modern tools.
          </h2>
          <p className="section-description">
            Full-stack projects demonstrating end-to-end development, from client interface designs to backend business layers and persistent storage schemas.
          </p>
        </div>

        {/* Project Grid */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={index}
              className="glass-card rounded-[2rem] p-6 lg:p-8 flex flex-col justify-between border border-white/5 relative group"
            >
              <div>
                {/* Upper block */}
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3.5">
                    <div className="h-11 w-11 rounded-2xl bg-gradient-to-tr from-emerald-500/10 to-teal-500/20 text-xl flex items-center justify-center shrink-0 border border-emerald-500/10">
                      {project.emoji}
                    </div>
                    <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-emerald-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>
                  <span className="rounded-full bg-white/5 border border-white/5 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-widest text-slate-400">
                    {project.type}
                  </span>
                </div>

                <p className="text-slate-400 leading-relaxed text-sm mb-6">
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-emerald-500/5 px-3 py-1 text-[0.7rem] font-bold text-emerald-300 border border-emerald-500/10 shadow-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Features Checklist */}
                <div className="rounded-2xl bg-white/[0.01] p-5.5 border border-white/5 mb-8">
                  <p className="text-[0.65rem] font-bold uppercase tracking-widest text-emerald-400 mb-3">
                    Architectural Features
                  </p>
                  <ul className="space-y-2.5">
                    {project.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-400 leading-normal">
                        <span className="flex h-4.5 w-4.5 items-center justify-center rounded-full bg-emerald-500/10 text-[0.5rem] text-emerald-400 shrink-0 border border-emerald-500/10 mt-0.5">
                          <i className="fas fa-check" />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-4 border-t border-white/5 pt-5 mt-auto">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors duration-300 font-bold text-xs uppercase tracking-wider group/link cursor-pointer"
                  >
                    <span>Live Preview</span>
                    <i className="fas fa-arrow-right text-[0.65rem] transition-transform duration-300 group-hover/link:translate-x-1" />
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors duration-300 font-bold text-xs uppercase tracking-wider ml-auto cursor-pointer"
                  >
                    <i className="fab fa-github text-sm" />
                    <span>Source</span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

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
  githubFrontend?: string;
  githubBackend?: string;
}

const projects: Project[] = [
  {
    title: "DocuVerse AI",
    type: "AI Document Extraction",
    description:
      "An AI-powered document extraction and analysis platform featuring automatic classification, hybrid OCR extraction, and an interactive chat assistant.",
    tech: ["React", "FastAPI", "PyTesseract", "Ollama", "OCR"],
    features: [
      "Automated document classification using custom OCR processing pipelines",
      "Hybrid data extraction utilizing FastAPI backend engine capabilities",
      "Interactive chat assistant powered by Ollama for document queries"
    ],
    emoji: "📄",
    link: "https://pdf-extraction-tool-three.vercel.app/login",
    githubFrontend: "https://github.com/jayeshgith/pdf_extraction_tool",
    githubBackend: "https://github.com/jayeshgith/docuverse-ai-backend",
  },
  {
    title: "Fabinex",
    type: "Personal Finance",
    description:
      "A responsive web application to manage personal/family finances, including income-expense tracking and cashflow insights.",
    tech: ["Next.js", "MongoDB", "Stripe", "Zod", "NextAuth"],
    features: [
      "Secure user authentication and multi-tenant session locks",
      "Interactive data charts showcasing monthly transaction summaries",
      "Dynamic receipt storage layers and automated status updates",
      "Stripe payment gateway sandbox pipeline integrations"
    ],
    emoji: "💰",
    link: "https://fab-inex.vercel.app/",
    github: "https://github.com/jayeshgith",
  },
  {
    title: "Kabaddi Scorecard Automation",
    type: "AI & Computer Vision",
    description:
      "A scorecard automation system using camera inputs to detect custom hand gestures and update tournament tables in real time.",
    tech: ["Python", "MediaPipe", "WebSocket", "JavaScript"],
    features: [
      "Real-time hand gesture coordinate extraction using MediaPipe models",
      "Full-duplex WebSocket stream feeding client terminals instantly",
      "Dynamic browser overlays updating scores with zero-lag parity"
    ],
    emoji: "🏆",
    link: "https://github.com/jayeshgith",
    github: "https://github.com/jayeshgith",
  },
  {
    title: "REST API Project",
    type: "Backend API",
    description:
      "A simple, full-stack application demonstrating basic CRUD operations using a RESTful Post Management API architecture.",
    tech: ["Node.js", "Express", "MongoDB", "Mongoose"],
    features: [
      "Decoupled route endpoints with clean JSON response shapes",
      "Advanced query sanitization filters blocking injection threats",
      "Global server exception capture and routing error handlers"
    ],
    emoji: "🔌",
    link: "https://github.com/jayeshgith/REST_API_Project",
    github: "https://github.com/jayeshgith/REST_API_Project",
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
        </div>

        {/* Project Grid */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={index}
              className="glass-card rounded-[2rem] border border-white/5 overflow-hidden flex flex-col justify-between relative group hover:border-emerald-500/20"
            >
              <div>
                {/* Mock Window Header */}
                <div className="bg-[#04060d] border-b border-white/5 px-5 py-3.5 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  </div>
                  <span className="text-[0.62rem] font-mono text-slate-500 tracking-widest uppercase">
                    {project.title.toLowerCase().replace(/\s+/g, '_')}.exe
                  </span>
                  <div className="w-8" />
                </div>

                <div className="p-6 lg:p-8">
                  {/* Title block */}
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-emerald-500/10 to-teal-500/20 text-lg flex items-center justify-center shrink-0 border border-emerald-500/10">
                        {project.emoji}
                      </div>
                      <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-emerald-400 transition-colors duration-300 font-outfit">
                        {project.title}
                      </h3>
                    </div>
                    <span className="rounded-full bg-white/5 border border-white/5 px-3 py-1 text-[0.65rem] font-extrabold uppercase tracking-widest text-slate-400">
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
                  <div className="rounded-2xl bg-white/[0.01] p-5 border border-white/5">
                    <p className="text-[0.65rem] font-extrabold uppercase tracking-widest text-emerald-400 mb-3.5">
                      Operational Integrity
                    </p>
                    <ul className="space-y-3">
                      {project.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-3 text-xs text-slate-400 leading-normal">
                          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[0.52rem] text-emerald-400 shrink-0 shadow-sm mt-0.5 transition-transform duration-300 group-hover:scale-105">
                            <i className="fas fa-check" />
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 px-6 lg:px-8 py-5 border-t border-white/5 bg-[#030408]/30">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-emerald-500/20 bg-emerald-500/5 text-[0.7rem] font-extrabold uppercase tracking-wider text-emerald-300 hover:bg-emerald-500/10 hover:border-emerald-500/35 transition-all duration-300 cursor-pointer"
                  >
                    <span>Launch App</span>
                    <i className="fas fa-external-link-alt text-[0.6rem]" />
                  </a>
                )}
                
                {/* Spacer to push repositories to the right */}
                {!project.link && <div className="mr-auto" />}

                <div className="flex items-center gap-2 ml-auto">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-white/5 bg-white/[0.02] text-[0.7rem] font-extrabold uppercase tracking-wider text-slate-300 hover:bg-white/5 hover:border-white/10 hover:text-white transition-all duration-300 cursor-pointer"
                    >
                      <i className="fab fa-github text-[0.75rem]" />
                      <span>Repository</span>
                    </a>
                  )}
                  {project.githubFrontend && (
                    <a
                      href={project.githubFrontend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-white/5 bg-white/[0.02] text-[0.7rem] font-extrabold uppercase tracking-wider text-slate-300 hover:bg-white/5 hover:border-white/10 hover:text-white transition-all duration-300 cursor-pointer"
                      title="Frontend Repository"
                    >
                      <i className="fab fa-github text-[0.75rem]" />
                      <span>Frontend</span>
                    </a>
                  )}
                  {project.githubBackend && (
                    <a
                      href={project.githubBackend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-white/5 bg-white/[0.02] text-[0.7rem] font-extrabold uppercase tracking-wider text-slate-300 hover:bg-white/5 hover:border-white/10 hover:text-white transition-all duration-300 cursor-pointer"
                      title="Backend Repository"
                    >
                      <i className="fab fa-github text-[0.75rem]" />
                      <span>Backend</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

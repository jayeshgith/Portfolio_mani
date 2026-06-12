"use client";

interface Project {
  title: string;
  type: string;
  description: string;
  tech: string;
  back: string;
  emoji: string;
  link?: string;
}

const projects: Project[] = [
  {
    title: "Fabinex",
    type: "Full-Stack",
    description:
      "Personal & family finance management app with income-expense tracking and cashflow insights.",
    tech: "Next.js, MongoDB, Stripe, Zod",
    back: "Secure authentication, profile management, dashboards with charts, file uploads, notifications, and Stripe test checkout integration.",
    emoji: "💰",
  },
  {
    title: "Kabaddi Scorecard Automation",
    type: "AI/Vision",
    description:
      "Real-time scorecard automation using gesture recognition with WebSocket integration.",
    tech: "Python, MediaPipe, WebSocket, JavaScript",
    back: "Live gesture recognition system with real-time dashboard and WebSocket communication for instant updates.",
    emoji: "🏆",
    link: "https://github.com/jayeshgith",
  },
  {
    title: "REST API Project",
    type: "Backend API",
    description:
      "Full-stack post management API demonstrating CRUD operations with RESTful architecture.",
    tech: "Node.js, Express, MongoDB",
    back: "Designed clean endpoints, input validation, error handling, and reliable data persistence for real-world use.",
    emoji: "🔌",
    link: "https://github.com/jayeshgith/REST_API_Project",
  },
  {
    title: "My Portfolio",
    type: "Full-Stack",
    description:
      "Personal portfolio website showcasing projects, skills, education, and experience.",
    tech: "Next.js, TypeScript, Tailwind CSS",
    back: "Responsive design with smooth animations, optimized performance, and clear information architecture.",
    emoji: "🌐",
    link: "https://my-site-newpage.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 text-white">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-4xl space-y-4 text-center">
          <p className="section-overline">Featured Projects</p>
          <h2 className="section-title">
            Real-world applications built with modern tools.
          </h2>
          <p className="section-description">
            Full-stack projects demonstrating end-to-end development from
            frontend UI to backend APIs and databases.
          </p>
        </div>

        <div className="mt-14 grid gap-8 xl:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={index}
              className="glass-card rounded-[2rem] border border-white/10 p-6 shadow-xl shadow-slate-950/30 transition duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="text-3xl">{project.emoji}</div>
                <span className="rounded-full bg-slate-900/80 px-3 py-1 text-xs uppercase tracking-[0.28em] text-slate-300">
                  {project.type}
                </span>
              </div>

              <h3 className="mt-6 text-2xl font-semibold text-white">
                {project.title}
              </h3>
              <p className="mt-4 text-slate-300 leading-7">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-sm text-emerald-300">
                  {project.tech}
                </span>
              </div>

              <div className="mt-6 rounded-3xl bg-slate-900/80 p-4 text-slate-300 transition group-hover:bg-slate-800/90">
                <p className="text-sm text-white">Details</p>
                <p className="mt-2 text-sm leading-6">{project.back}</p>
              </div>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-emerald-300 hover:text-emerald-200 transition"
                >
                  <span>View Project</span>
                  <i className="fas fa-arrow-right text-xs" />
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

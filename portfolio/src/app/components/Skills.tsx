"use client";

interface Skill {
  name: string;
  icon: string;
  color: string;
  colorRgb: string;
}

const frontendSkills: Skill[] = [
  { name: "Next.js (App Router)", icon: "fas fa-layer-group", color: "#ffffff", colorRgb: "255, 255, 255" },
  { name: "React.js", icon: "fab fa-react", color: "#61dafb", colorRgb: "97, 218, 251" },
  { name: "JavaScript (ES6+)", icon: "fab fa-js", color: "#f7df1e", colorRgb: "247, 223, 30" },
  { name: "TypeScript", icon: "fas fa-code", color: "#3178c6", colorRgb: "49, 120, 198" },
  { name: "Tailwind CSS", icon: "fas fa-paint-brush", color: "#38bdf8", colorRgb: "56, 189, 248" },
  { name: "Recharts", icon: "fas fa-chart-bar", color: "#ff7300", colorRgb: "255, 115, 0" },
  { name: "HTML5 & CSS3", icon: "fab fa-html5", color: "#e34f26", colorRgb: "227, 79, 38" },
];

const backendSkills: Skill[] = [
  { name: "Next.js API Routes", icon: "fas fa-route", color: "#ffffff", colorRgb: "255, 255, 255" },
  { name: "REST API Integration", icon: "fas fa-plug", color: "#10b981", colorRgb: "16, 185, 129" },
  { name: "Node.js & Express", icon: "fab fa-node-js", color: "#68a063", colorRgb: "104, 160, 99" },
  { name: "MongoDB & Mongoose", icon: "fas fa-database", color: "#47a248", colorRgb: "71, 162, 72" },
  { name: "SQL Databases", icon: "fas fa-server", color: "#00bcff", colorRgb: "0, 188, 255" },
  { name: "NextAuth & JWT Sessions", icon: "fas fa-key", color: "#a78bfa", colorRgb: "167, 139, 250" },
  { name: "bcryptjs Encryption", icon: "fas fa-lock", color: "#f43f5e", colorRgb: "244, 63, 94" },
];

const toolsSkills: Skill[] = [
  { name: "Git & GitHub", icon: "fab fa-git-alt", color: "#f05032", colorRgb: "240, 80, 50" },
  { name: "npm Package Manager", icon: "fab fa-npm", color: "#cb3837", colorRgb: "203, 56, 55" },
  { name: "VS Code Editor", icon: "fas fa-terminal", color: "#007acc", colorRgb: "0, 122, 204" },
  { name: "Problem Solving", icon: "fas fa-brain", color: "#f87171", colorRgb: "248, 113, 113" },
  { name: "Self Learning", icon: "fas fa-lightbulb", color: "#fbbf24", colorRgb: "251, 191, 36" },
  { name: "Teamwork & Collaboration", icon: "fas fa-users", color: "#34d399", colorRgb: "52, 211, 153" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 relative">
      
      {/* Subtle section background blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-emerald-500/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="mx-auto max-w-4xl space-y-4 text-center">
          <p className="section-overline">Skills</p>
          <h2 className="section-title">
            Technical stack & engineering workflows.
          </h2>
          <p className="section-description">
            Core toolkit indicators covering frontend client layouts, secure API endpoints, and database mapping standards.
          </p>
        </div>

        {/* Content Grid Dashboard */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3 lg:items-stretch">
          
          {/* Column 1: Frontend Tech */}
          <div className="glass-card rounded-[2rem] p-6 lg:p-8 border border-white/5 flex flex-col justify-between">
            <div className="space-y-2 mb-6">
              <span className="text-[0.65rem] font-extrabold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/15 px-3 py-1 rounded-full">
                Interactivity
              </span>
              <h3 className="text-xl font-bold text-white tracking-tight pt-2 font-outfit">
                Frontend & Web
              </h3>
              <p className="text-slate-400 text-xs">
                Libraries and styling frameworks focused on user interaction, state integrity, and display fidelity.
              </p>
            </div>

            <div className="space-y-3">
              {frontendSkills.map((skill) => (
                <div
                  key={skill.name}
                  style={{ "--tech-color-rgb": skill.colorRgb } as React.CSSProperties}
                  className="tech-card flex items-center gap-3.5 rounded-2xl p-3 border"
                >
                  <div
                    className="h-9 w-9 rounded-xl flex items-center justify-center shrink-0 border border-white/5"
                    style={{ backgroundColor: `${skill.color}10` }}
                  >
                    <i
                      className={`${skill.icon} text-sm`}
                      style={{ color: skill.color }}
                    />
                  </div>
                  <p className="font-semibold text-slate-200 text-xs">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Backend & Database */}
          <div className="glass-card rounded-[2rem] p-6 lg:p-8 border border-white/5 flex flex-col justify-between">
            <div className="space-y-2 mb-6">
              <span className="text-[0.65rem] font-extrabold uppercase tracking-widest text-blue-400 bg-blue-500/10 border border-blue-500/15 px-3 py-1 rounded-full">
                Processing
              </span>
              <h3 className="text-xl font-bold text-white tracking-tight pt-2 font-outfit">
                Backend & Security
              </h3>
              <p className="text-slate-400 text-xs">
                Server configurations, session verifications, and relational/no-SQL database endpoints.
              </p>
            </div>

            <div className="space-y-3">
              {backendSkills.map((skill) => (
                <div
                  key={skill.name}
                  style={{ "--tech-color-rgb": skill.colorRgb } as React.CSSProperties}
                  className="tech-card flex items-center gap-3.5 rounded-2xl p-3 border"
                >
                  <div
                    className="h-9 w-9 rounded-xl flex items-center justify-center shrink-0 border border-white/5"
                    style={{ backgroundColor: `${skill.color}10` }}
                  >
                    <i
                      className={`${skill.icon} text-sm`}
                      style={{ color: skill.color }}
                    />
                  </div>
                  <p className="font-semibold text-slate-200 text-xs">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Professional Workflows */}
          <div className="glass-card rounded-[2rem] p-6 lg:p-8 border border-white/5 flex flex-col justify-between">
            <div className="space-y-2 mb-6">
              <span className="text-[0.65rem] font-extrabold uppercase tracking-widest text-violet-400 bg-violet-500/10 border border-violet-500/15 px-3 py-1 rounded-full">
                Workflow
              </span>
              <h3 className="text-xl font-bold text-white tracking-tight pt-2 font-outfit">
                Tools & Traits
              </h3>
              <p className="text-slate-400 text-xs">
                Development environments, source code pipelines, and personal engineering traits.
              </p>
            </div>

            <div className="space-y-3">
              {toolsSkills.map((skill) => (
                <div
                  key={skill.name}
                  style={{ "--tech-color-rgb": skill.colorRgb } as React.CSSProperties}
                  className="tech-card flex items-center gap-3.5 rounded-2xl p-3 border"
                >
                  <div
                    className="h-9 w-9 rounded-xl flex items-center justify-center shrink-0 border border-white/5"
                    style={{ backgroundColor: `${skill.color}10` }}
                  >
                    <i
                      className={`${skill.icon} text-sm`}
                      style={{ color: skill.color }}
                    />
                  </div>
                  <p className="font-semibold text-slate-200 text-xs">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

"use client";

interface Skill {
  name: string;
  icon: string;
  color: string;
  colorRgb: string;
}

const aiSkills: Skill[] = [
  { name: "Python", icon: "fab fa-python", color: "#306998", colorRgb: "48, 105, 152" },
  { name: "PyTorch", icon: "fas fa-brain", color: "#ee4c2c", colorRgb: "238, 76, 44" },
  { name: "Ollama OCR", icon: "fas fa-eye", color: "#10b981", colorRgb: "16, 185, 129" },
  { name: "Prompt Design & Optimization", icon: "fas fa-terminal", color: "#a78bfa", colorRgb: "167, 139, 250" },
  { name: "NLP & RAG Pipelines", icon: "fas fa-project-diagram", color: "#61dafb", colorRgb: "97, 218, 251" },
  { name: "Computer Vision & MediaPipe", icon: "fas fa-camera", color: "#ff7300", colorRgb: "255, 115, 0" },
];

const webSkills: Skill[] = [
  { name: "Next.js (App Router)", icon: "fas fa-layer-group", color: "#ffffff", colorRgb: "255, 255, 255" },
  { name: "React.js", icon: "fab fa-react", color: "#61dafb", colorRgb: "97, 218, 251" },
  { name: "JavaScript (ES6+)", icon: "fab fa-js", color: "#f7df1e", colorRgb: "247, 223, 30" },
  { name: "TypeScript", icon: "fas fa-code", color: "#3178c6", colorRgb: "49, 120, 198" },
  { name: "Tailwind CSS", icon: "fas fa-paint-brush", color: "#38bdf8", colorRgb: "56, 189, 248" },
  { name: "Recharts", icon: "fas fa-chart-bar", color: "#ff7300", colorRgb: "255, 115, 0" },
];

const backendSkills: Skill[] = [
  { name: "FastAPI (Python backend)", icon: "fas fa-bolt", color: "#00bcff", colorRgb: "0, 188, 255" },
  { name: "Node.js & Express", icon: "fab fa-node-js", color: "#68a063", colorRgb: "104, 160, 99" },
  { name: "MongoDB & Mongoose", icon: "fas fa-database", color: "#47a248", colorRgb: "71, 162, 72" },
  { name: "SQL Databases", icon: "fas fa-server", color: "#34d399", colorRgb: "52, 211, 243" },
  { name: "NextAuth & JWT Sessions", icon: "fas fa-key", color: "#a78bfa", colorRgb: "167, 139, 250" },
  { name: "Git & GitHub", icon: "fab fa-git-alt", color: "#f05032", colorRgb: "240, 80, 50" },
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
        </div>

        {/* Content Grid Dashboard */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3 lg:items-stretch">
          
          {/* Column 1: AI & Intelligence */}
          <div className="glass-card rounded-[2rem] p-6 lg:p-8 border border-white/5 flex flex-col justify-between">
            <div className="space-y-2 mb-6">
              <span className="text-[0.65rem] font-extrabold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/15 px-3 py-1 rounded-full">
                Intelligence
              </span>
              <h3 className="text-xl font-bold text-white tracking-tight pt-2 font-outfit">
                AI & Prompt Engineering
              </h3>
            </div>

            <div className="space-y-3">
              {aiSkills.map((skill) => (
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

          {/* Column 2: Frontend & Web */}
          <div className="glass-card rounded-[2rem] p-6 lg:p-8 border border-white/5 flex flex-col justify-between">
            <div className="space-y-2 mb-6">
              <span className="text-[0.65rem] font-extrabold uppercase tracking-widest text-blue-400 bg-blue-500/10 border border-blue-500/15 px-3 py-1 rounded-full">
                Interactivity
              </span>
              <h3 className="text-xl font-bold text-white tracking-tight pt-2 font-outfit">
                Frontend & Web
              </h3>
            </div>

            <div className="space-y-3">
              {webSkills.map((skill) => (
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

          {/* Column 3: Backend & Infrastructure */}
          <div className="glass-card rounded-[2rem] p-6 lg:p-8 border border-white/5 flex flex-col justify-between">
            <div className="space-y-2 mb-6">
              <span className="text-[0.65rem] font-extrabold uppercase tracking-widest text-violet-400 bg-violet-500/10 border border-violet-500/15 px-3 py-1 rounded-full">
                Processing
              </span>
              <h3 className="text-xl font-bold text-white tracking-tight pt-2 font-outfit">
                Backend & Infrastructure
              </h3>
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

        </div>
      </div>
    </section>
  );
}

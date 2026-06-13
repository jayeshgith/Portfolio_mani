"use client";

interface Skill {
  name: string;
  icon: string;
  color: string;
}

const frontendSkills: Skill[] = [
  { name: "Next.js", icon: "fas fa-layer-group", color: "#ffffff" },
  { name: "React.js", icon: "fab fa-react", color: "#61dafb" },
  { name: "TypeScript", icon: "fas fa-code", color: "#3178c6" },
  { name: "JavaScript", icon: "fab fa-js", color: "#f7df1e" },
  { name: "Tailwind CSS", icon: "fas fa-paint-brush", color: "#38bdf8" },
  { name: "HTML5", icon: "fab fa-html5", color: "#e34f26" },
  { name: "CSS3", icon: "fab fa-css3-alt", color: "#1572b6" },
];

const backendSkills: Skill[] = [
  { name: "Node.js", icon: "fab fa-node-js", color: "#68a063" },
  { name: "REST APIs", icon: "fas fa-plug", color: "#10b981" },
  { name: "MongoDB", icon: "fas fa-database", color: "#47a248" },
  { name: "Mongoose", icon: "fas fa-link", color: "#880000" },
  { name: "Git & GitHub", icon: "fab fa-git-alt", color: "#f05032" },
];

const softSkills = [
  { 
    name: "Self Learning", 
    icon: "fas fa-lightbulb", 
    color: "#fbbf24",
    desc: "Constantly acquiring new frameworks and programming patterns."
  },
  { 
    name: "Teamwork", 
    icon: "fas fa-users", 
    color: "#a78bfa",
    desc: "Collaborating efficiently within agile developer workflows."
  },
  { 
    name: "Problem Solving", 
    icon: "fas fa-brain", 
    color: "#f87171",
    desc: "Breaking down complex systems into structured algorithms."
  },
  { 
    name: "Communication", 
    icon: "fas fa-comments", 
    color: "#34d399",
    desc: "Expressing architectural decisions and technical needs clearly."
  },
];

export default function Skills() {
  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>, color: string) => {
    e.currentTarget.style.borderColor = `${color}35`; // ~20% opacity
    e.currentTarget.style.boxShadow = `0 10px 30px -10px rgba(0, 0, 0, 0.5), 0 0 20px -2px ${color}12`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.04)";
    e.currentTarget.style.boxShadow = "none";
  };

  return (
    <section id="skills" className="py-28 relative">
      
      {/* Subtle section background blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-emerald-500/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="mx-auto max-w-4xl space-y-4 text-center">
          <p className="section-overline">Skills</p>
          <h2 className="section-title">
            Modern tools and technologies for full-stack development.
          </h2>
          <p className="section-description">
            Proficiency in modern frontend libraries, server runtimes, databases, and version control workflows.
          </p>
        </div>

        {/* Content Grid */}
        <div className="mt-16 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          
          {/* Left Column: Technical Skills divided by category */}
          <div className="glass-card rounded-[2rem] p-8 border border-white/5 space-y-8">
            <div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Technical Expertise
              </h3>
              <p className="text-slate-400 text-sm mt-1">
                Divided by domain to showcase specialized stack capabilities.
              </p>
            </div>

            {/* Frontend Subgrid */}
            <div className="space-y-4">
              <p className="text-[0.68rem] font-bold uppercase tracking-wider text-slate-500 border-b border-white/5 pb-2">
                Frontend Tech
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {frontendSkills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3.5 rounded-2xl bg-white/[0.02] p-3.5 border border-white/5 transition-all duration-300 hover:-translate-y-0.5"
                    onMouseEnter={(e) => handleMouseEnter(e, skill.color)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div
                      className="h-10 w-10 rounded-xl flex items-center justify-center shrink-0 border border-white/5"
                      style={{ backgroundColor: `${skill.color}10` }}
                    >
                      <i
                        className={`${skill.icon} text-base`}
                        style={{ color: skill.color }}
                      />
                    </div>
                    <p className="font-semibold text-slate-200 text-sm">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend Subgrid */}
            <div className="space-y-4">
              <p className="text-[0.68rem] font-bold uppercase tracking-wider text-slate-500 border-b border-white/5 pb-2">
                Backend, Databases & Core Tools
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {backendSkills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3.5 rounded-2xl bg-white/[0.02] p-3.5 border border-white/5 transition-all duration-300 hover:-translate-y-0.5"
                    onMouseEnter={(e) => handleMouseEnter(e, skill.color)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div
                      className="h-10 w-10 rounded-xl flex items-center justify-center shrink-0 border border-white/5"
                      style={{ backgroundColor: `${skill.color}10` }}
                    >
                      <i
                        className={`${skill.icon} text-base`}
                        style={{ color: skill.color }}
                      />
                    </div>
                    <p className="font-semibold text-slate-200 text-sm">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Professional Strengths */}
          <div className="glass-card rounded-[2rem] p-8 border border-white/5 flex flex-col justify-between">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white tracking-tight">
                Professional Attributes
              </h3>
              <p className="text-slate-400 text-sm mt-1">
                Core traits that facilitate product success and teamwork.
              </p>
            </div>

            <div className="grid gap-4">
              {softSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="rounded-2.5xl bg-white/[0.02] p-4.5 border border-white/5 transition-all duration-300 hover:bg-white/[0.04] hover:-translate-y-0.5 hover:border-emerald-500/10 group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className="h-9 w-9 rounded-lg flex items-center justify-center border border-white/5"
                      style={{ backgroundColor: `${skill.color}12` }}
                    >
                      <i
                        className={`${skill.icon} text-sm`}
                        style={{ color: skill.color }}
                      />
                    </div>
                    <p className="text-[0.7rem] uppercase tracking-widest text-emerald-400 font-extrabold">
                      {skill.name}
                    </p>
                  </div>
                  <p className="text-slate-400 text-xs leading-relaxed pl-1">
                    {skill.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

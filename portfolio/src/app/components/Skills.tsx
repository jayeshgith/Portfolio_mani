interface Skill {
  name: string;
  icon: string;
  color: string;
}

const technicalSkills: Skill[] = [
  { name: "JavaScript", icon: "fab fa-js", color: "#f7df1e" },
  { name: "TypeScript", icon: "fas fa-code", color: "#3178c6" },
  { name: "React.js", icon: "fab fa-react", color: "#61dafb" },
  { name: "Next.js", icon: "fas fa-layer-group", color: "#fff" },
  { name: "Node.js", icon: "fab fa-node", color: "#68a063" },
  { name: "HTML5", icon: "fab fa-html5", color: "#e34f26" },
  { name: "CSS3", icon: "fab fa-css3-alt", color: "#1572b6" },
  { name: "Tailwind CSS", icon: "fas fa-paint-brush", color: "#38bdf8" },
  { name: "MongoDB", icon: "fas fa-database", color: "#47a248" },
  { name: "REST APIs", icon: "fas fa-plug", color: "#10b981" },
  { name: "Git & GitHub", icon: "fab fa-git-alt", color: "#f05032" },
  { name: "Mongoose", icon: "fas fa-link", color: "#880000" },
];

const softSkills: Skill[] = [
  { name: "Self Learning", icon: "fas fa-lightbulb", color: "#fbbf24" },
  { name: "Teamwork", icon: "fas fa-users", color: "#a78bfa" },
  { name: "Problem Solving", icon: "fas fa-brain", color: "#f87171" },
  { name: "Communication", icon: "fas fa-comments", color: "#34d399" },
];

function SkillCard({ skill }: { skill: Skill }) {
  return (
    <div className="glass-card rounded-3xl border border-white/10 p-6 text-center text-white transition duration-300 hover:-translate-y-1">
      <div
        className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl"
        style={{ backgroundColor: `${skill.color}22` }}
      >
        <i
          className={`${skill.icon} text-2xl`}
          style={{ color: skill.color }}
        />
      </div>
      <p className="mt-6 text-sm font-semibold tracking-[0.12em] uppercase text-slate-300">
        {skill.name}
      </p>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="bg-slate-950/90 py-24 text-white">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-4xl space-y-4 text-center">
          <p className="section-overline">Skills</p>
          <h2 className="section-title">
            Modern tools and technologies for full-stack development.
          </h2>
          <p className="section-description">
            Proficiency in frontend, backend, and database technologies to build
            complete, scalable web applications.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <div className="glass-card rounded-[2rem] border border-white/10 p-8 shadow-xl shadow-slate-950/40">
            <h3 className="text-2xl font-semibold text-white">
              Core technologies
            </h3>
            <p className="mt-4 text-slate-300">
              Full-stack expertise covering frontend frameworks, backend
              runtimes, and database systems.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {technicalSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-4 rounded-3xl bg-slate-900/80 p-4"
                >
                  <div
                    className="h-12 w-12 rounded-3xl flex items-center justify-center"
                    style={{ backgroundColor: `${skill.color}22` }}
                  >
                    <i
                      className={`${skill.icon} text-xl`}
                      style={{ color: skill.color }}
                    />
                  </div>
                  <p className="font-medium text-slate-100">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-[2rem] border border-white/10 p-8 shadow-xl shadow-slate-950/40">
            <h3 className="text-2xl font-semibold text-white">
              Professional strengths
            </h3>
            <p className="mt-4 text-slate-300">
              Focused on clean code, effective problem-solving, and reliable
              application architecture.
            </p>
            <div className="mt-8 grid gap-4">
              {softSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="rounded-3xl bg-slate-900/80 p-5"
                >
                  <p className="text-sm uppercase tracking-[0.24em] text-emerald-300">
                    {skill.name}
                  </p>
                  <p className="mt-3 text-white">
                    High impact teamwork and problem solving for product-focused
                    development.
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

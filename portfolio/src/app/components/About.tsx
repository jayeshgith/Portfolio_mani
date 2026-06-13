"use client";

export default function About() {
  const highlights = [
    { 
      label: "Full-Stack Web Development", 
      detail: "Next.js, React, Node.js, and MongoDB integration.",
      icon: "fas fa-laptop-code"
    },
    { 
      label: "Secure Authentication", 
      detail: "NextAuth.js, JWT tokens, and bcryptjs hashing.",
      icon: "fas fa-shield-alt"
    },
    { 
      label: "Database Architecture", 
      detail: "Relational modeling using MongoDB with Mongoose.",
      icon: "fas fa-database"
    },
    { 
      label: "API Orchestration", 
      detail: "REST endpoints, Stripe checkouts, and Zod verification.",
      icon: "fas fa-network-wired"
    },
  ];

  return (
    <section id="about" className="py-28 relative">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mx-auto max-w-4xl space-y-4 text-center">
          <p className="section-overline">About Me</p>
          <h2 className="section-title">
            Full-Stack Developer focused on scalable applications.
          </h2>
          <p className="section-description">
            Entry-level Full-Stack Developer with hands-on experience in Next.js, React, Node.js, and MongoDB. Completed 3 months of rigorous industry training with a proven ability to build scalable web products.
          </p>
        </div>

        {/* Content Grid */}
        <div className="mt-16 grid gap-8 lg:grid-cols-[1.3fr_0.9fr] lg:items-start">
          
          {/* Left Block: Narrative Card */}
          <div className="glass-card rounded-[2rem] p-8 lg:p-10 border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl" />
            
            <h3 className="mb-6 text-2xl font-bold text-white tracking-tight">
              My Core Capabilities
            </h3>
            
            <div className="space-y-6 text-slate-400 leading-relaxed text-[0.98rem]">
              <p>
                I specialize in building modular, highly interactive web interfaces using <strong className="text-white font-semibold">React.js</strong> and <strong className="text-white font-semibold">Next.js</strong>. I am comfortable implementing modern layouts with fluid animations and complete mobile responsiveness.
              </p>
              <p>
                On the backend, I design reliable APIs using <strong className="text-white font-semibold">Node.js</strong> and <strong className="text-white font-semibold">Express</strong>, manage persistent storage using <strong className="text-white font-semibold">MongoDB</strong>, and integrate payment services like Stripe, keeping security and code modularity at the forefront.
              </p>
            </div>

            {/* Quick Skills Pills */}
            <div className="mt-8 pt-6 border-t border-white/5">
              <p className="text-[0.68rem] font-bold uppercase tracking-widest text-slate-500 mb-4">Core Toolkit</p>
              <div className="flex flex-wrap gap-2.5">
                {["Next.js", "React.js", "Node.js", "MongoDB", "TypeScript", "Express.js"].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-emerald-500/10 px-4.5 py-2 text-xs font-semibold text-emerald-300 border border-emerald-500/10 shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Block: Vertical Specialty highlights */}
          <div className="grid gap-4.5">
            {highlights.map((item, i) => (
              <div
                key={item.label}
                className="glass-card rounded-[1.5rem] p-5.5 flex items-start gap-4 border border-white/5 relative group"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-tr from-emerald-500/10 to-teal-500/20 text-emerald-400 shrink-0 border border-emerald-500/10 group-hover:scale-105 transition-transform duration-300">
                  <i className={`${item.icon} text-base`} />
                </div>
                <div className="min-w-0">
                  <p className="text-[0.68rem] font-bold uppercase tracking-widest text-emerald-400/80 mb-1">
                    Specialty {i + 1}
                  </p>
                  <h4 className="text-base font-bold text-white tracking-tight mb-1">
                    {item.label}
                  </h4>
                  <p className="text-sm text-slate-400 leading-normal">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

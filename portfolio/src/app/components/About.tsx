export default function About() {
  const highlights = [
    { label: "Full-Stack", detail: "Next.js, React, Node.js, MongoDB" },
    { label: "Authentication", detail: "NextAuth.js, JWT, bcryptjs" },
    { label: "Database Design", detail: "MongoDB with Mongoose" },
    { label: "API Integration", detail: "REST APIs, Stripe, Zod validation" },
  ];

  return (
    <section id="about" className="bg-slate-950/90 py-24 text-white">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-4xl space-y-4 text-center">
          <p className="section-overline">About Me</p>
          <h2 className="section-title">
            Full-Stack Developer focused on scalable applications.
          </h2>
          <p className="section-description">
            Entry-level Full-Stack Developer with hands-on experience in
            Next.js, React.js, Node.js, and MongoDB. Completed 3-month industry
            training with proven ability to build scalable web applications.
          </p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1.3fr_0.9fr] lg:items-start">
          <div className="glass-card p-8 shadow-[0_32px_80px_-30px_rgba(0,0,0,0.75)]">
            <h3 className="mb-6 text-2xl font-semibold text-white">
              What I can do
            </h3>
            <div className="space-y-5 text-slate-300 leading-8">
              <p>
                Build responsive web applications using modern frameworks.
                Handle both frontend development with React/Next.js and backend
                with Node.js. Design and implement databases with MongoDB.
              </p>
              <p>
                Integrate APIs, implement authentication systems, handle file
                uploads, create dashboards with data visualization, and deploy
                production-ready applications.
              </p>
            </div>
          </div>

          <div className="grid gap-4">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="rounded-3xl border border-white/10 bg-slate-900/90 p-6 shadow-lg shadow-slate-950/40 transition hover:-translate-y-1 hover:border-emerald-400/20"
              >
                <p className="text-sm uppercase tracking-[0.32em] text-emerald-300">
                  {item.label}
                </p>
                <p className="mt-3 text-lg font-semibold text-white">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

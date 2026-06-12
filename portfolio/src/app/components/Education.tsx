interface EducationItem {
  title: string;
  institution: string;
  period: string;
  details: string;
  icon: string;
}

const educationData: EducationItem[] = [
  {
    title: "Bachelor of Engineering in Computer Science & Engineering",
    institution:
      "Vivekananda College of Engineering & Technology, Puttur (VTU)",
    period: "2021 – 2025",
    details: "CGPA 7.6",
    icon: "fas fa-graduation-cap",
  },
  {
    title: "Pre-University (PU - PCMB)",
    institution: "GPUC Kadaba, Dakshina Kannada",
    period: "2020 – 2021",
    details: "85%",
    icon: "fas fa-school",
  },
  {
    title: "Secondary School Leaving Certificate (SSLC)",
    institution: "St. George High School Kunthoor-Padavu, Kadaba",
    period: "2019",
    details: "87.84%",
    icon: "fas fa-book",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 text-white">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-4xl space-y-4 text-center">
          <p className="section-overline">Education</p>
          <h2 className="section-title">
            Strong academic foundation with practical experience.
          </h2>
          <p className="section-description">
            Pursuing B.E in Computer Science with industry training and
            real-world project experience.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {educationData.map((edu, index) => (
            <article
              key={index}
              className="glass-card border border-white/10 p-6 shadow-xl shadow-slate-950/40 transition duration-300 hover:-translate-y-1"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-sky-500 to-emerald-400 text-white shadow-lg shadow-sky-500/20">
                <i className={`${edu.icon} text-xl`} />
              </div>
              <h3 className="mt-6 text-xl font-semibold tracking-tight text-white">
                {edu.title}
              </h3>
              <p className="mt-4 text-sm text-slate-300">{edu.institution}</p>
              <p className="mt-4 text-sm uppercase tracking-[0.28em] text-emerald-300">
                {edu.period}
              </p>
              <span className="mt-6 inline-flex rounded-full bg-slate-950/80 px-4 py-2 text-sm font-semibold text-white">
                {edu.details}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

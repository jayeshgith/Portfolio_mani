"use client";

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
    institution: "Vivekananda College of Engineering & Technology, Puttur (VTU)",
    period: "2021 - 2025",
    details: "CGPA 7.6",
    icon: "fas fa-graduation-cap",
  },
  {
    title: "Pre-University Education (PU - PCMB)",
    institution: "Government Pre-University College Kadaba, Dakshina Kannada",
    period: "2020 - 2021",
    details: "Percentage 85%",
    icon: "fas fa-school",
  },
  {
    title: "Secondary School Leaving Certificate (SSLC)",
    institution: "St. George High School Kunthoor-Padavu, Kadaba",
    period: "2019",
    details: "Percentage 87.84%",
    icon: "fas fa-book",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-28 relative">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="mx-auto max-w-4xl space-y-4 text-center">
          <p className="section-overline">Education</p>
          <h2 className="section-title">
            Strong academic foundation with practical learning.
          </h2>
          <p className="section-description">
            Acquiring technical methodologies in software engineering, programming structures, and database principles.
          </p>
        </div>

        {/* Timeline Block */}
        <div className="mt-16 max-w-3xl mx-auto relative pl-8 sm:pl-12">
          
          {/* Vertical connecting line */}
          <div className="timeline-line" />

          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <div key={index} className="relative group">
                
                {/* Checkpoint Dot */}
                <div className="timeline-dot group-hover:scale-125 group-hover:border-emerald-300 transition-all duration-300 mt-2" />

                {/* Timeline Card */}
                <div className="glass-card rounded-[1.5rem] p-6.5 ml-4 sm:ml-6 border border-white/5 relative group-hover:border-emerald-500/15">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-4">
                    <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-300 bg-emerald-500/10 border border-emerald-500/10 px-3.5 py-1 rounded-full shadow-sm">
                      {edu.period}
                    </span>
                    <div className="flex items-center gap-2 text-slate-500 text-sm">
                      <i className={`${edu.icon} text-emerald-400`} />
                      <span className="font-bold uppercase tracking-wider text-[0.68rem]">{edu.details}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white tracking-tight leading-snug mb-1">
                    {edu.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-normal">
                    {edu.institution}
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

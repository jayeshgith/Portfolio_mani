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
    institution: "Vivekananda College of Engineering & Technology, Puttur (VTU), Karnataka",
    period: "2021 - 2025",
    details: "CGPA: 7.6",
    icon: "fas fa-graduation-cap",
  },
  {
    title: "Pre-University Education (PU - PCMB)",
    institution: "Government Pre-University College Kadaba, Dakshina Kannada, Karnataka",
    period: "2020 - 2021",
    details: "Score: 85%",
    icon: "fas fa-school",
  },
  {
    title: "Secondary School Leaving Certificate (SSLC)",
    institution: "St. George High School Kunthoor-Padavu, Kadaba, Karnataka",
    period: "2019",
    details: "Score: 87.84%",
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
        </div>

        {/* Timeline track container */}
        <div className="mt-16 max-w-3xl mx-auto relative pl-8 sm:pl-12">
          
          {/* Glowing vertical connector line */}
          <div className="absolute left-[2.45rem] sm:left-[3.45rem] top-0 bottom-0 w-[2.5px] bg-white/5 rounded-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-500 via-blue-500 to-indigo-500 animate-pulse" />
          </div>

          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <div key={index} className="relative group">
                
                {/* Expanding Timeline Checkpoint dot */}
                <div className="absolute left-[0.22rem] sm:left-[1.22rem] top-7 w-[13px] h-[13px] rounded-full bg-slate-950 border-[2.5px] border-emerald-500 shadow-[0_0_12px_#059669] group-hover:scale-125 group-hover:border-emerald-300 transition-all duration-300 z-10" />

                {/* Info Card */}
                <div className="glass-card rounded-[1.75rem] p-6 sm:p-8 ml-4 sm:ml-6 border border-white/5 transition-all duration-400 hover:-translate-y-1 hover:border-emerald-500/20 hover:shadow-2xl hover:shadow-emerald-500/5 relative">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
                    <span className="inline-flex text-[0.68rem] font-extrabold uppercase tracking-widest text-emerald-300 bg-emerald-500/10 border border-emerald-500/15 px-3.5 py-1 rounded-full shadow-sm max-w-max">
                      {edu.period}
                    </span>
                    <div className="flex items-center gap-2 text-slate-400 text-xs font-semibold">
                      <div className="h-6 px-3 rounded-full bg-white/5 border border-white/5 flex items-center justify-center gap-1.5 shrink-0">
                        <i className={`${edu.icon} text-emerald-400 text-[0.68rem]`} />
                        <span className="font-extrabold uppercase tracking-wider text-[0.68rem] text-slate-300">{edu.details}</span>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white tracking-tight leading-snug mb-2 font-outfit">
                    {edu.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-normal font-medium">
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

const EMAIL = "manishkunthoor@gmail.com";
const PHONE = "+91 7019974493";
const LINKEDIN = "https://www.linkedin.com/in/manish-kunthoor-99ba00279";
const GITHUB = "https://github.com/jayeshgith";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 bg-[#020205]/80 relative overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 h-40 bg-emerald-500/5 rounded-full blur-[80px] -z-10 pointer-events-none" />

      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-base font-black text-white font-outfit tracking-tight">
              <span className="text-emerald-400">&lt;</span>
              Manish Kunthoor
              <span className="text-emerald-400">/&gt;</span>
            </p>
            <p className="text-xs text-slate-500 mt-2 font-medium tracking-wide">
              © {new Date().getFullYear()} • Crafted with Next.js & Tailwind CSS. All rights reserved.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 items-center">
            {[
              { href: LINKEDIN, icon: "fab fa-linkedin-in", label: "LinkedIn" },
              { href: GITHUB, icon: "fab fa-github", label: "GitHub" },
              { href: `mailto:${EMAIL}`, icon: "fas fa-envelope", label: "Email" },
              { href: `tel:${PHONE}`, icon: "fas fa-phone", label: "Phone" }
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.label !== "Email" && link.label !== "Phone" ? "_blank" : undefined}
                rel="noreferrer noopener"
                className="group flex items-center gap-2 rounded-full border border-white/5 bg-white/[0.01] px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-400 transition-all duration-300 hover:border-emerald-500/30 hover:text-emerald-300 hover:bg-emerald-500/5 hover:-translate-y-0.5"
              >
                <i className={`${link.icon} text-slate-500 group-hover:text-emerald-400 transition-colors duration-300`} />
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

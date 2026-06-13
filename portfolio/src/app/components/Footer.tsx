const EMAIL = "manishkunthoor@gmail.com";
const PHONE = "+91 7019974493";
const LINKEDIN = "https://www.linkedin.com/in/manish-kunthoor-99ba00279";
const GITHUB = "https://github.com/jayeshgith";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-bold text-white">
              <span className="text-emerald-400">&lt;</span>
              Manish
              <span className="text-emerald-400">/&gt;</span>
            </p>
            <p className="text-sm text-slate-500 mt-2">
              © 2026 Manish Kunthoor. Built with Next.js & Tailwind CSS
            </p>
          </div>

          <div className="flex flex-wrap gap-3 items-center">
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer noopener"
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-400 transition hover:border-emerald-400/30 hover:text-emerald-300 hover:bg-emerald-500/10"
            >
              <i className="fab fa-linkedin-in mr-2" />
              LinkedIn
            </a>
            <a
              href={GITHUB}
              target="_blank"
              rel="noreferrer noopener"
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-400 transition hover:border-emerald-400/30 hover:text-emerald-300 hover:bg-emerald-500/10"
            >
              <i className="fab fa-github mr-2" />
              GitHub
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-400 transition hover:border-emerald-400/30 hover:text-emerald-300 hover:bg-emerald-500/10"
            >
              <i className="fas fa-envelope mr-2" />
              {EMAIL}
            </a>
            <a
              href={`tel:${PHONE}`}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-400 transition hover:border-emerald-400/30 hover:text-emerald-300 hover:bg-emerald-500/10"
            >
              <i className="fas fa-phone mr-2" />
              {PHONE}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

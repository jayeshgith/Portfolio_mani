const EMAIL = "manishkunthoor@gmail.com";
const PHONE = "+91 7019974493";
const LINKEDIN = "https://www.linkedin.com/in/manish-kunthoor-99ba00279";
const GITHUB = "https://github.com/jayeshgith";

export default function Footer() {
  return (
    <footer className="bg-slate-950/90 border-t border-white/10 py-10 text-slate-300">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm text-white/80">© 2026 Manish Kunthoor</p>
            <p className="text-sm text-white/60 mt-1">
              Built with Next.js · Tailwind CSS · professional portfolio layout
            </p>
          </div>

          <div className="flex flex-wrap gap-3 items-center text-sm">
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer noopener"
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white transition hover:border-emerald-300 hover:text-emerald-300"
            >
              LinkedIn
            </a>
            <a
              href={GITHUB}
              target="_blank"
              rel="noreferrer noopener"
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white transition hover:border-sky-300 hover:text-sky-300"
            >
              GitHub
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white transition hover:border-emerald-300 hover:text-emerald-300"
            >
              {EMAIL}
            </a>
            <a
              href={`tel:${PHONE}`}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white transition hover:border-emerald-300 hover:text-emerald-300"
            >
              {PHONE}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

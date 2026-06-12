"use client";

import Image from "next/image";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/manish-kunthoor-99ba00279",
    icon: "fab fa-linkedin-in",
    label: "LinkedIn",
    external: true,
  },
  {
    href: "https://github.com/jayeshgith",
    icon: "fab fa-github",
    label: "GitHub",
    external: true,
  },
  {
    href: "mailto:manishkunthoor@gmail.com",
    icon: "fas fa-envelope",
    label: "Email",
    external: false,
  },
  {
    href: "tel:+917019974493",
    icon: "fas fa-phone",
    label: "Phone",
    external: false,
  },
];

const stats = [
  { label: "Projects", value: "4+" },
  { label: "Experience", value: "6+ mo" },
  { label: "Tech Stack", value: "Next.js" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-slate-950/90 px-6 py-28 text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.22),_transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(79,70,229,0.2),_transparent_30%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.45fr_1fr] lg:items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-800/70 px-4 py-2 text-xs uppercase tracking-[0.4em] text-emerald-300 shadow-xl shadow-emerald-500/20">
            Personal Portfolio
          </div>

          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-400">
              Full-Stack Developer
            </p>
            <h1 className="max-w-3xl text-5xl font-black leading-tight tracking-tight sm:text-6xl">
              Full-Stack developer building scalable, modern web applications.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-300">
              I specialize in Next.js, React, Node.js, and MongoDB. Focused on
              clean code, responsive design, and real-world problem solving.
            </p>
          </div>

          <div className="grid gap-4 sm:max-w-md sm:grid-cols-2">
            <a
              href="#contact"
              className="btn-primary inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-semibold shadow-lg shadow-emerald-500/20 transition hover:-translate-y-0.5"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="btn-secondary inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-semibold transition hover:-translate-y-0.5"
            >
              View Projects
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-3xl border border-white/10 bg-slate-900/70 p-5 text-center backdrop-blur-md"
              >
                <p className="text-3xl font-bold text-white">{item.value}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.32em] text-slate-400">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {socialLinks.map(({ href, icon, label, external }) => (
              <a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer noopener" : undefined}
                aria-label={label}
                className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-xl text-white transition hover:border-emerald-300 hover:text-emerald-300"
              >
                <i className={icon} />
              </a>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl">
          <div className="hero-ring absolute inset-0 -z-10 rounded-[2.5rem] bg-gradient-to-br from-emerald-400/15 via-sky-500/10 to-violet-500/10 blur-3xl" />
          <div className="glass-card relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/85 p-6 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.85)]">
            <div className="relative mx-auto mb-8 h-[300px] w-[300px] overflow-hidden rounded-full border border-white/10 bg-slate-950/90 shadow-2xl shadow-slate-950/40 sm:h-[340px] sm:w-[340px]">
              <Image
                src="/mypic.jpg"
                alt="Manish Kunthoor"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="space-y-4 rounded-3xl bg-slate-800/70 p-6 text-slate-200">
              <p className="text-sm uppercase tracking-[0.32em] text-emerald-300">
                About Me
              </p>
              <p className="leading-7 text-slate-300">
                Entry-level Full-Stack Developer with hands-on experience
                building scalable applications. Strong foundation in Next.js,
                React, Node.js, and MongoDB.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-slate-900/80 p-4">
                  <p className="text-sm text-slate-400">Primary stack</p>
                  <p className="mt-2 font-semibold text-white">
                    Next.js + MongoDB
                  </p>
                </div>
                <div className="rounded-3xl bg-slate-900/80 p-4">
                  <p className="text-sm text-slate-400">Focus</p>
                  <p className="mt-2 font-semibold text-white">
                    Full-Stack Web Apps
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

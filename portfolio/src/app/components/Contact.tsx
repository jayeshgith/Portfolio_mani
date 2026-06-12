"use client";

import { useState, FormEvent } from "react";

const CONTACT_INFO = [
  {
    icon: "fas fa-envelope",
    label: "Email",
    value: "manishkunthoor@gmail.com",
    href: "mailto:manishkunthoor@gmail.com",
    color: "#38bdf8",
  },
  {
    icon: "fas fa-phone",
    label: "Phone",
    value: "+91 7019974493",
    href: "tel:+917019974493",
    color: "#34d399",
  },
  {
    icon: "fab fa-linkedin-in",
    label: "LinkedIn",
    value: "manish-kunthoor",
    href: "https://www.linkedin.com/in/manish-kunthoor-99ba00279",
    color: "#0ea5e9",
    external: true,
  },
  {
    icon: "fab fa-github",
    label: "GitHub",
    value: "jayeshgith",
    href: "https://github.com/jayeshgith",
    color: "#a78bfa",
    external: true,
  },
];

interface FormData {
  from_name: string;
  from_email: string;
  subject: string;
  message: string;
}

const initialForm: FormData = {
  from_name: "",
  from_email: "",
  subject: "",
  message: "",
};

export default function Contact() {
  const [formData, setFormData] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData(initialForm);
      setSubmitted(false);
    }, 2200);
  };

  return (
    <section id="contact" className="py-24 text-white">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <p className="section-overline">Contact</p>
          <h2 className="section-title">
            Let&apos;s build something memorable together.
          </h2>
          <p className="section-description">
            Reach out for web development, portfolio builds, or API-driven app
            work.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.35fr_0.9fr]">
          <form
            onSubmit={handleSubmit}
            className="glass-card rounded-[2rem] border border-white/10 p-8 shadow-xl shadow-slate-950/30"
          >
            <div className="space-y-6">
              {submitted ? (
                <div className="space-y-4 text-center">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-300/10 text-4xl text-emerald-300">
                    ✅
                  </div>
                  <h3 className="text-2xl font-semibold text-white">
                    Message Sent
                  </h3>
                  <p className="text-slate-300">
                    Thanks for reaching out — I&apos;ll follow up shortly.
                  </p>
                </div>
              ) : (
                <>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <label className="block">
                      <span className="text-sm font-semibold text-slate-300">
                        Name
                      </span>
                      <input
                        id="from_name"
                        type="text"
                        value={formData.from_name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        className="contact-input mt-3 w-full rounded-3xl bg-slate-100/95 text-slate-950"
                      />
                    </label>
                    <label className="block">
                      <span className="text-sm font-semibold text-slate-300">
                        Email
                      </span>
                      <input
                        id="from_email"
                        type="email"
                        value={formData.from_email}
                        onChange={handleChange}
                        required
                        placeholder="you@example.com"
                        className="contact-input mt-3 w-full rounded-3xl bg-slate-100/95 text-slate-950"
                      />
                    </label>
                  </div>

                  <label className="block">
                    <span className="text-sm font-semibold text-slate-300">
                      Subject
                    </span>
                    <input
                      id="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Project or collaboration"
                      className="contact-input mt-3 w-full rounded-3xl bg-slate-100/95 text-slate-950"
                    />
                  </label>

                  <label className="block">
                    <span className="text-sm font-semibold text-slate-300">
                      Message
                    </span>
                    <textarea
                      id="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell me about your idea..."
                      className="contact-input mt-3 w-full rounded-3xl bg-slate-100/95 text-slate-950"
                    />
                  </label>

                  <button
                    type="submit"
                    className="btn-primary w-full rounded-full px-6 py-4 text-base font-semibold"
                  >
                    Send Message
                  </button>
                </>
              )}
            </div>
          </form>

          <aside className="glass-card rounded-[2rem] border border-white/10 p-8 shadow-xl shadow-slate-950/30">
            <div className="space-y-6">
              <div>
                <p className="text-sm uppercase tracking-[0.32em] text-emerald-300">
                  Let&apos;s connect
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-white">
                  Available for freelance, internships, and full-stack projects.
                </h3>
                <p className="mt-4 text-slate-300 leading-7">
                  I respond quickly and enjoy working on portfolio websites,
                  dashboard experiences, and backend automation systems.
                </p>
              </div>

              <div className="space-y-4">
                {CONTACT_INFO.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noreferrer noopener" : undefined}
                    className="contact-info-card"
                  >
                    <span
                      className="flex h-12 w-12 items-center justify-center rounded-3xl text-xl"
                      style={{
                        backgroundColor: `${item.color}22`,
                        color: item.color,
                      }}
                    >
                      <i className={item.icon} />
                    </span>
                    <div>
                      <p className="text-sm text-slate-400">{item.label}</p>
                      <p className="text-base font-semibold text-white">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState, FormEvent } from "react";

const CONTACT_INFO = [
  {
    icon: "fas fa-envelope",
    label: "Email",
    value: "manishkunthoor@gmail.com",
    href: "mailto:manishkunthoor@gmail.com",
    color: "#38bdf8",
    hoverGlow: "hover:border-sky-500/20 hover:shadow-sky-500/5",
  },
  {
    icon: "fas fa-phone",
    label: "Phone",
    value: "+91 7019974493",
    href: "tel:+917019974493",
    color: "#34d399",
    hoverGlow: "hover:border-emerald-500/20 hover:shadow-emerald-500/5",
  },
  {
    icon: "fab fa-linkedin-in",
    label: "LinkedIn",
    value: "manish-kunthoor",
    href: "https://www.linkedin.com/in/manish-kunthoor-99ba00279",
    color: "#0ea5e9",
    external: true,
    hoverGlow: "hover:border-blue-500/20 hover:shadow-blue-500/5",
  },
  {
    icon: "fab fa-github",
    label: "GitHub",
    value: "jayeshgith",
    href: "https://github.com/jayeshgith",
    color: "#a78bfa",
    external: true,
    hoverGlow: "hover:border-purple-500/20 hover:shadow-purple-500/5",
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
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate sending message
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setTimeout(() => {
        setFormData(initialForm);
        setSubmitted(false);
      }, 2500);
    }, 1000);
  };

  return (
    <section id="contact" className="py-28 relative">
      
      {/* Decorative blurred background blob */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-violet-500/5 rounded-full blur-[130px] -z-10 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <p className="section-overline">Contact</p>
          <h2 className="section-title">
            Let&apos;s build something memorable together.
          </h2>
          <p className="section-description">
            Feel free to reach out for internship programs, full-stack projects, or custom web design opportunities.
          </p>
        </div>

        {/* Content Grid */}
        <div className="mt-16 grid gap-8 lg:grid-cols-[1.3fr_0.9fr]">
          
          {/* Left Block: Form Container */}
          <form
            onSubmit={handleSubmit}
            className="glass-card rounded-[2rem] p-8 border border-white/5 relative min-h-[420px] flex flex-col justify-center"
          >
            {submitted ? (
              <div className="space-y-4 text-center py-12 animate-scale-in">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/10 border-2 border-emerald-500/20 text-emerald-400 animate-glow">
                  <i className="fas fa-check text-3xl" />
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Message Transmitted!
                </h3>
                <p className="text-slate-400 text-sm max-w-sm mx-auto leading-relaxed">
                  Thanks for reaching out, Manish. Your query has been logged. I will follow up shortly.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                
                <div className="grid gap-6 sm:grid-cols-2">
                  <label className="block">
                    <span className="text-[0.68rem] font-bold uppercase tracking-widest text-slate-500 pl-1">
                      Your Name
                    </span>
                    <input
                      id="from_name"
                      type="text"
                      value={formData.from_name}
                      onChange={handleChange}
                      required
                      placeholder="e.g. John Doe"
                      className="contact-input mt-2"
                    />
                  </label>
                  <label className="block">
                    <span className="text-[0.68rem] font-bold uppercase tracking-widest text-slate-500 pl-1">
                      Email Address
                    </span>
                    <input
                      id="from_email"
                      type="email"
                      value={formData.from_email}
                      onChange={handleChange}
                      required
                      placeholder="e.g. john@example.com"
                      className="contact-input mt-2"
                    />
                  </label>
                </div>

                <label className="block">
                  <span className="text-[0.68rem] font-bold uppercase tracking-widest text-slate-500 pl-1">
                    Subject Line
                  </span>
                  <input
                    id="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Collaboration Opportunity"
                    className="contact-input mt-2"
                  />
                </label>

                <label className="block">
                  <span className="text-[0.68rem] font-bold uppercase tracking-widest text-slate-500 pl-1">
                    Message Detail
                  </span>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Describe your project, timeline, or query..."
                    className="contact-input mt-2 resize-none"
                  />
                </label>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full rounded-full px-6 py-4.5 text-sm font-bold flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <span>Sending...</span>
                      <i className="fas fa-spinner animate-spin text-sm" />
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <i className="fas fa-paper-plane text-xs" />
                    </>
                  )}
                </button>
              </div>
            )}
          </form>

          {/* Right Block: Sidebar Info */}
          <aside className="glass-card rounded-[2rem] p-8 border border-white/5 flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <p className="text-[0.68rem] font-bold uppercase tracking-widest text-emerald-400">
                  Quick Connect
                </p>
                <h3 className="mt-4 text-xl font-bold text-white tracking-tight leading-snug">
                  Let&apos;s build web structures together.
                </h3>
                <p className="mt-3 text-slate-400 text-xs leading-relaxed">
                  I typically respond to inquiries within 24 hours. Connect with me directly through social handles or contact lines.
                </p>
              </div>

              {/* Action Info List */}
              <div className="space-y-3.5">
                {CONTACT_INFO.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noreferrer noopener" : undefined}
                    className={`contact-info-card group/card ${item.hoverGlow}`}
                  >
                    <span
                      className="flex h-10 w-10 items-center justify-center rounded-xl text-sm shrink-0 border border-white/5 group-hover/card:scale-105 transition-transform duration-300"
                      style={{
                        backgroundColor: `${item.color}12`,
                        color: item.color,
                      }}
                    >
                      <i className={item.icon} />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[0.65rem] font-bold uppercase tracking-widest text-slate-500 mb-0.5">{item.label}</p>
                      <p className="text-sm font-bold text-white truncate leading-none">
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

"use client";

import { useState, FormEvent } from "react";
import { MagneticContainer } from "./AntigravityEffects";

const CONTACT_INFO = [
  {
    icon: "fas fa-envelope",
    label: "Secure Email",
    value: "manishkunthoor@gmail.com",
    href: "mailto:manishkunthoor@gmail.com",
    color: "#059669",
    hoverGlow: "hover:border-emerald-500/20 hover:shadow-emerald-500/5",
  },
  {
    icon: "fas fa-phone",
    label: "Direct Line",
    value: "+91 7019974493",
    href: "tel:+917019974493",
    color: "#2563eb",
    hoverGlow: "hover:border-blue-500/20 hover:shadow-blue-500/5",
  },
  {
    icon: "fab fa-linkedin-in",
    label: "LinkedIn Portal",
    value: "manish-kunthoor",
    href: "https://www.linkedin.com/in/manish-kunthoor-99ba00279",
    color: "#4f46e5",
    external: true,
    hoverGlow: "hover:border-indigo-500/20 hover:shadow-indigo-500/5",
  },
  {
    icon: "fab fa-github",
    label: "GitHub Source",
    value: "jayeshgith",
    href: "https://github.com/jayeshgith",
    color: "#f43f5e",
    external: true,
    hoverGlow: "hover:border-rose-500/20 hover:shadow-rose-500/5",
  },
];

interface FormData {
  company_name: string;
  company_email: string;
  subject: string;
  message: string;
}

const initialForm: FormData = {
  company_name: "",
  company_email: "",
  subject: "",
  message: "",
};

export default function Contact() {
  const [formData, setFormData] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setSubmitted(true);
      setFormData(initialForm);
      setTimeout(() => setSubmitted(false), 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-28 relative">
      
      {/* Decorative blurred background blob */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-[#059669]/5 rounded-full blur-[130px] -z-10 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <p className="section-overline">Contact</p>
        </div>

        {/* Content Grid */}
        <div className="mt-16 grid gap-8 lg:grid-cols-[1.3fr_0.9fr]">
          
          {/* Left Block: Form Container */}
          <form
            onSubmit={handleSubmit}
            className="glass-card rounded-[2rem] p-8 border border-white/5 relative min-h-[440px] flex flex-col justify-center"
          >
            {submitted ? (
              <div className="space-y-4 text-center py-12 animate-scale-in">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 animate-glow shadow-[0_0_25px_rgba(5,150,105,0.2)]">
                  <i className="fas fa-check text-3xl animate-bounce" />
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight font-outfit">
                  Message Sent
                </h3>
                <p className="text-slate-400 text-xs max-w-sm mx-auto leading-relaxed font-medium">
                  Your message has been sent successfully. Manish will get back to you shortly.
                </p>
              </div>
            ) : (
              <div className="space-y-8">
                
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="relative w-full group">
                    <input
                      id="company_name"
                      type="text"
                      value={formData.company_name}
                      onChange={handleChange}
                      required
                      placeholder=" "
                      className="block w-full py-3.5 px-1 text-sm text-white bg-transparent border-0 border-b border-white/10 appearance-none focus:outline-none focus:ring-0 focus:border-emerald-400 transition-all duration-300 peer"
                    />
                    <label
                      htmlFor="company_name"
                      className="absolute text-[0.7rem] font-bold uppercase tracking-widest text-slate-500 duration-300 transform -translate-y-7 scale-75 top-3.5 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7 peer-focus:text-emerald-400"
                    >
                      Your Name
                    </label>
                  </div>
                  
                  <div className="relative w-full group">
                    <input
                      id="company_email"
                      type="email"
                      value={formData.company_email}
                      onChange={handleChange}
                      required
                      placeholder=" "
                      className="block w-full py-3.5 px-1 text-sm text-white bg-transparent border-0 border-b border-white/10 appearance-none focus:outline-none focus:ring-0 focus:border-emerald-400 transition-all duration-300 peer"
                    />
                    <label
                      htmlFor="company_email"
                      className="absolute text-[0.7rem] font-bold uppercase tracking-widest text-slate-500 duration-300 transform -translate-y-7 scale-75 top-3.5 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7 peer-focus:text-emerald-400"
                    >
                      Your Email
                    </label>
                  </div>
                </div>

                <div className="relative w-full group">
                  <input
                    id="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder=" "
                    className="block w-full py-3.5 px-1 text-sm text-white bg-transparent border-0 border-b border-white/10 appearance-none focus:outline-none focus:ring-0 focus:border-emerald-400 transition-all duration-300 peer"
                  />
                  <label
                    htmlFor="subject"
                    className="absolute text-[0.7rem] font-bold uppercase tracking-widest text-slate-500 duration-300 transform -translate-y-7 scale-75 top-3.5 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7 peer-focus:text-emerald-400"
                  >
                    Opportunity / Subject
                  </label>
                </div>

                <div className="relative w-full group">
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder=" "
                    className="block w-full py-3.5 px-1 text-sm text-white bg-transparent border-0 border-b border-white/10 appearance-none focus:outline-none focus:ring-0 focus:border-emerald-400 transition-all duration-300 peer resize-none"
                  />
                  <label
                    htmlFor="message"
                    className="absolute text-[0.7rem] font-bold uppercase tracking-widest text-slate-500 duration-300 transform -translate-y-7 scale-75 top-3.5 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7 peer-focus:text-emerald-400"
                  >
                    Message Details
                  </label>
                </div>

                {error && (
                  <p className="text-red-400 text-xs text-center font-medium">{error}</p>
                )}

                <MagneticContainer className="w-full">
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full rounded-2xl px-6 py-4 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {loading ? (
                      <>
                        <span>Sending Message...</span>
                        <i className="fas fa-spinner animate-spin text-sm" />
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <i className="fas fa-paper-plane text-xs animate-pulse" />
                      </>
                    )}
                  </button>
                </MagneticContainer>
              </div>
            )}
          </form>

          {/* Right Block: Sidebar Info */}
          <aside className="glass-card rounded-[2rem] p-8 border border-white/5 flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <p className="text-[0.68rem] font-bold uppercase tracking-widest text-emerald-400">
                  Quick Access
                </p>
              </div>

              {/* Action Info List */}
              <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-1">
                {CONTACT_INFO.map((item) => (
                  <MagneticContainer key={item.label} className="w-full">
                    <a
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
                        <p className="text-[0.65rem] font-extrabold uppercase tracking-widest text-slate-500 mb-0.5">{item.label}</p>
                        <p className="text-xs font-bold text-white truncate leading-none">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  </MagneticContainer>
                ))}
              </div>
            </div>
          </aside>

        </div>
      </div>
    </section>
  );
}

"use client";

import { FormEvent, useState } from "react";
import Section from "@/components/section";
import SectionHeading from "@/components/section-heading";
import { CONTACT } from "@/lib/resume";

type FormState = "idle" | "submitting" | "submitted";

export default function Contact() {
  const [formState, setFormState] = useState<FormState>("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (formState === "submitting") {
      return;
    }
    setFormState("submitting");
    setTimeout(() => {
      setFormState("submitted");
    }, 800);
  }

  return (
    <Section id="contact">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
        <div className="space-y-8">
          <SectionHeading
            eyebrow="Let's Connect"
            title="Open to Opportunities"
            subtitle="Whether it's a mobile app project, internship opportunity, or a tech chat — I'd love to connect. Always open to learning and growing together."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {[
              { label: "Email", value: CONTACT.email, icon: "📧" },
              { label: "Location", value: CONTACT.location, icon: "📍" },
              { label: "LinkedIn", value: "Vinay Bhogal", icon: "🔗", href: `https://${CONTACT.linkedin}` },
              { label: "GitHub", value: "@Vinay-ops", icon: "💻", href: `https://${CONTACT.github}` }
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50/50 p-4 dark:border-slate-800 dark:bg-slate-900/50">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-lg shadow-sm dark:bg-slate-800">
                  {item.icon}
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} target="_blank" className="text-sm font-semibold text-slate-700 hover:text-accent-blue dark:text-slate-200">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900/40">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-slate-400">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your Name"
                  className="w-full rounded-2xl border border-slate-100 bg-slate-50 px-5 py-4 text-sm text-slate-900 outline-none transition-all focus:border-accent-blue/50 focus:bg-white dark:border-slate-800 dark:bg-slate-900/50 dark:text-slate-100 dark:focus:border-accent-blue/50 dark:focus:bg-slate-900"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-slate-400">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="hello@example.com"
                  className="w-full rounded-2xl border border-slate-100 bg-slate-50 px-5 py-4 text-sm text-slate-900 outline-none transition-all focus:border-accent-blue/50 focus:bg-white dark:border-slate-800 dark:bg-slate-900/50 dark:text-slate-100 dark:focus:border-accent-blue/50 dark:focus:bg-slate-900"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-slate-400">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full resize-none rounded-2xl border border-slate-100 bg-slate-50 px-5 py-4 text-sm text-slate-900 outline-none transition-all focus:border-accent-blue/50 focus:bg-white dark:border-slate-800 dark:bg-slate-900/50 dark:text-slate-100 dark:focus:border-accent-blue/50 dark:focus:bg-slate-900"
              />
            </div>
            <button
              type="submit"
              disabled={formState !== "idle"}
              className="group relative flex w-full items-center justify-center overflow-hidden rounded-2xl bg-slate-900 px-8 py-5 text-sm font-bold uppercase tracking-[0.2em] text-white transition-all hover:bg-accent-blue hover:text-slate-950 disabled:opacity-50 dark:bg-accent-blue dark:text-slate-950 dark:hover:bg-sky-400"
            >
              <span className="relative z-10">
                {formState === "submitting" ? "Sending..." : formState === "submitted" ? "Message Sent! ✨" : "Send Message"}
              </span>
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
}

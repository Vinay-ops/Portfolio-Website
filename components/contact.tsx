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
      <div className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)] md:items-start">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Build Something Together"
          subtitle="Currently available for freelance opportunities or full-time roles. Reach out via the form or my social links."
        />
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800/70 dark:bg-slate-950/40 dark:shadow-[0_0_0_1px_rgba(15,23,42,0.9)]"
        >
          <div className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label
                  htmlFor="name"
                  className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none ring-0 transition focus:border-accent-blue/50 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-100 dark:focus:border-accent-blue/80 dark:focus:shadow-glow"
                />
              </div>
              <div className="space-y-1.5">
                <label
                  htmlFor="email"
                  className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none ring-0 transition focus:border-accent-blue/50 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-100 dark:focus:border-accent-blue/80 dark:focus:shadow-glow"
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <label
                htmlFor="message"
                className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none ring-0 transition focus:border-accent-blue/50 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-100 dark:focus:border-accent-blue/80 dark:focus:shadow-glow"
              />
            </div>
            <div className="mt-6 flex items-center justify-between gap-4">
              <button
                type="submit"
                disabled={formState !== "idle"}
                className="inline-flex flex-1 items-center justify-center rounded-full bg-accent-blue px-6 py-3 text-xs font-bold uppercase tracking-[0.18em] text-slate-950 shadow-sm transition enabled:hover:-translate-y-0.5 enabled:hover:bg-sky-400 disabled:cursor-not-allowed disabled:opacity-60 dark:shadow-glow"
              >
                {formState === "submitting" ? "Sending" : "Send Message"}
              </button>
              {formState === "submitted" && (
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  Message captured.
                </p>
              )}
            </div>
          </div>
        </form>
      </div>
    </Section>
  );
}

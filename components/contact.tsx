"use client";

import { FormEvent, useState } from "react";
import Section from "@/components/section";
import SectionHeading from "@/components/section-heading";
import SocialLinks from "@/components/social-links";

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
      <div className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:items-start">
        <div className="space-y-8">
          <SectionHeading
            eyebrow="Contact"
            title="Let&apos;s Build What Comes Next"
            subtitle="If you are working on products that demand polish, performance, and strong technical foundations, I would love to hear about them."
          />
          <div className="space-y-3 text-sm text-slate-400">
            <p>
              Share a bit about your product, the problems you are solving, and
              where you need an engineer who can think across mobile, backend,
              and product.
            </p>
            <p className="text-xs uppercase tracking-[0.22em] text-slate-500">
              Social
            </p>
            <SocialLinks />
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="relative rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6 shadow-[0_0_0_1px_rgba(15,23,42,0.9)]"
        >
          <div className="mb-6 space-y-1 text-xs">
            <p className="font-semibold uppercase tracking-[0.22em] text-slate-400">
              Contact form
            </p>
            <p className="text-slate-500">
              Expect a focused, thoughtful response rather than an automated
              template.
            </p>
          </div>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="mb-1 block text-xs font-medium uppercase tracking-[0.18em] text-slate-400"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full rounded-xl border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-100 outline-none ring-0 transition focus:border-accent-blue/80 focus:shadow-glow"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-1 block text-xs font-medium uppercase tracking-[0.18em] text-slate-400"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-xl border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-100 outline-none ring-0 transition focus:border-accent-blue/80 focus:shadow-glow"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-1 block text-xs font-medium uppercase tracking-[0.18em] text-slate-400"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full resize-none rounded-xl border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-100 outline-none ring-0 transition focus:border-accent-blue/80 focus:shadow-glow"
              />
            </div>
          </div>
          <div className="mt-6 flex items-center justify-between gap-4">
            <button
              type="submit"
              disabled={formState !== "idle"}
              className="inline-flex flex-1 items-center justify-center rounded-full bg-accent-blue/90 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-950 shadow-glow transition enabled:hover:-translate-y-0.5 enabled:hover:bg-sky-400 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {formState === "submitting" ? "Sending" : "Send Message"}
            </button>
            {formState === "submitted" && (
              <p className="text-[11px] text-slate-400">
                Message captured. You can wire this to your backend or email
                provider.
              </p>
            )}
          </div>
        </form>
      </div>
    </Section>
  );
}


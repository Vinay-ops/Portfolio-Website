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
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <SectionHeading
            title="Get in Touch"
            subtitle="Currently available for freelance opportunities or full-time roles. Let&apos;s build something amazing together."
          />
          <div className="mt-8 space-y-3 text-sm text-slate-600">
            <p>{CONTACT.email}</p>
            <p>{CONTACT.location}</p>
            <p>{CONTACT.linkedin}</p>
            <p>{CONTACT.github}</p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="rounded-xl bg-white p-6 shadow-sm"
        >
          <div className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="mb-1 block text-xs font-semibold text-slate-700"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your Name"
                className="w-full rounded-md bg-[#eef0fb] px-4 py-3 text-sm outline-none ring-blue-400 placeholder:text-slate-400 focus:ring-2"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-1 block text-xs font-semibold text-slate-700"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="email@example.com"
                className="w-full rounded-md bg-[#eef0fb] px-4 py-3 text-sm outline-none ring-blue-400 placeholder:text-slate-400 focus:ring-2"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-1 block text-xs font-semibold text-slate-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                placeholder="How can I help you?"
                className="w-full resize-none rounded-md bg-[#eef0fb] px-4 py-3 text-sm outline-none ring-blue-400 placeholder:text-slate-400 focus:ring-2"
              />
            </div>
            <button
              type="submit"
              disabled={formState !== "idle"}
              className="w-full rounded-md bg-blue-700 px-6 py-3 text-sm font-semibold text-white transition enabled:hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {formState === "submitting"
                ? "Sending..."
                : formState === "submitted"
                  ? "Message Sent"
                  : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </Section>
  );
}

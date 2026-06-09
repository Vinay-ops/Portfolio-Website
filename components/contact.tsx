"use client";

import { FormEvent, useState } from "react";
import Section from "@/components/section";
import SectionHeading from "@/components/section-heading";
import { CONTACT, SOCIAL_LINKS } from "@/lib/resume";

type FormState = "idle" | "submitting" | "submitted" | "error";

export default function Contact() {
  const [formState, setFormState] = useState<FormState>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (formState === "submitting") {
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const message = String(formData.get("message") ?? "");

    setFormState("submitting");

    try {
      const response = await fetch("https://formsubmit.co/ajax/vbhogal5@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: `Portfolio message from ${name}`,
          _template: "table"
        })
      });

      if (!response.ok) {
        throw new Error("Failed to send");
      }

      setFormState("submitted");
      form.reset();
    } catch {
      setFormState("error");
    }
  }

  const contactItems = [
    { label: "Email", value: CONTACT.email, icon: "📧", href: `mailto:${CONTACT.email}` },
    { label: "Location", value: CONTACT.location, icon: "📍" },
    ...SOCIAL_LINKS.map((link) => ({
      label: link.label,
      value: link.display,
      icon: link.label === "LeetCode" ? "🧩" : link.label === "GitHub" ? "💻" : "🔗",
      href: link.href
    }))
  ];

  const colors = ["bg-neo-yellow", "bg-neo-blue", "bg-neo-pink", "bg-neo-green", "bg-neo-purple"];

  return (
    <Section id="contact">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
        <div className="space-y-8">
          <SectionHeading
            eyebrow="Let&apos;s Connect"
            title="Open to Opportunities"
            subtitle="Whether it&apos;s a mobile app project, internship opportunity, or a tech chat — I&apos;d love to connect."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {contactItems.map((item, index) => (
              <div
                key={item.label}
                className="neo-card flex items-center gap-4 border-4 border-neo-black bg-neo-white p-5 shadow-neo-md dark:border-neo-white dark:bg-neo-dark-card dark:shadow-neo-dark-md"
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center border-4 border-neo-black ${colors[index % colors.length]} text-2xl shadow-neo-sm dark:border-neo-white`}
                >
                  {item.icon}
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-neo-black dark:text-neo-white">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-lg font-black text-neo-pink transition-colors hover:text-neo-blue dark:text-neo-blue dark:hover:text-neo-green"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-lg font-black text-neo-black dark:text-neo-white">
                      {item.value}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="neo-card border-4 border-neo-black bg-neo-white p-8 shadow-neo-lg dark:border-neo-white dark:bg-neo-dark-card dark:shadow-neo-dark-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-3">
                <label
                  htmlFor="name"
                  className="text-xs font-black uppercase tracking-[0.3em] text-neo-black dark:text-neo-white"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your Name"
                  className="w-full border-4 border-neo-black bg-neo-white px-5 py-4 text-base font-bold text-neo-black outline-none focus:bg-neo-yellow dark:border-neo-white dark:bg-neo-dark-card dark:text-neo-white dark:focus:bg-neo-blue dark:focus:text-neo-black"
                />
              </div>
              <div className="space-y-3">
                <label
                  htmlFor="email"
                  className="text-xs font-black uppercase tracking-[0.3em] text-neo-black dark:text-neo-white"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="hello@example.com"
                  className="w-full border-4 border-neo-black bg-neo-white px-5 py-4 text-base font-bold text-neo-black outline-none focus:bg-neo-blue dark:border-neo-white dark:bg-neo-dark-card dark:text-neo-white dark:focus:bg-neo-yellow dark:focus:text-neo-black"
                />
              </div>
            </div>
            <div className="space-y-3">
              <label
                htmlFor="message"
                className="text-xs font-black uppercase tracking-[0.3em] text-neo-black dark:text-neo-white"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full resize-none border-4 border-neo-black bg-neo-white px-5 py-4 text-base font-bold text-neo-black outline-none focus:bg-neo-green dark:border-neo-white dark:bg-neo-dark-card dark:text-neo-white dark:focus:bg-neo-pink dark:focus:text-neo-black"
              />
            </div>
            <button
              type="submit"
              disabled={formState === "submitting" || formState === "submitted"}
              className="neo-btn flex w-full items-center justify-center border-4 border-neo-black bg-neo-pink px-8 py-5 text-sm font-black uppercase tracking-[0.3em] text-neo-black shadow-neo-md disabled:opacity-50 dark:border-neo-white"
            >
              {formState === "submitting"
                ? "Sending..."
                : formState === "submitted"
                  ? "Message Sent!"
                  : formState === "error"
                    ? "Failed — Try Again"
                    : "Send Message"}
            </button>
            {formState === "submitted" && (
              <p className="text-center text-sm font-bold text-neo-black dark:text-neo-white">
                Your message was sent to {CONTACT.email}.
              </p>
            )}
            {formState === "error" && (
              <p className="text-center text-sm font-bold text-neo-pink">
                Could not send. Email me directly at {CONTACT.email}.
              </p>
            )}
          </form>
        </div>
      </div>
    </Section>
  );
}

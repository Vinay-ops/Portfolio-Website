"use client";

import React from "react";
import Section from "@/components/section";
import SectionHeading from "@/components/section-heading";
import { EDUCATION, EXPERIENCE } from "@/lib/resume";
import { generateResumeHTML } from "@/lib/generate-resume-html";

const generateResumeText = () => {
  let resume = `VINAY BHOGAL
Aspiring Android & Flutter Full-Stack Developer

CONTACT
--------------------------------------------------------------------------------
Email: vbhogal5@gmail.com
LinkedIn: linkedin.com/in/vinay-bhogal-78a623319
GitHub: github.com/Vinay-ops
Instagram: @vinaybhogal

EDUCATION
--------------------------------------------------------------------------------
`;

  EDUCATION.forEach((edu) => {
    resume += `${edu.degree.toUpperCase()}\n`;
    resume += `${edu.institution} | ${edu.location}\n`;
    resume += `${edu.duration}\n`;
    if (edu.description) {
      resume += `${edu.description}\n`;
    }
    if (edu.achievements && edu.achievements.length > 0) {
      resume += `Key Highlights:\n`;
      edu.achievements.forEach((achievement) => {
        resume += `  • ${achievement}\n`;
      });
    }
    resume += `\n`;
  });

  if (EXPERIENCE.length > 0) {
    resume += `WORK EXPERIENCE
--------------------------------------------------------------------------------
`;
    EXPERIENCE.forEach((exp) => {
      resume += `${exp.title.toUpperCase()}\n`;
      resume += `${exp.company} | ${exp.location}\n`;
      resume += `${exp.duration}\n`;
      resume += `${exp.description}\n`;
      if (exp.achievements && exp.achievements.length > 0) {
        resume += `Key Achievements:\n`;
        exp.achievements.forEach((achievement) => {
          resume += `  • ${achievement}\n`;
        });
      }
      resume += `\n`;
    });
  }

  resume += `TECHNICAL SKILLS
--------------------------------------------------------------------------------
Programming Languages: Java, Kotlin, Python, Dart, C#
Frameworks: Flutter, Jetpack Compose, Material 3, Unity
Databases: Firebase, MySQL, PostgreSQL, Room, SQLite
Tools & Platforms: Git, Android Studio, VS Code, AI Integration

PROJECTS
--------------------------------------------------------------------------------
Pay Sahayak - AI-Powered UPI Issue Resolution
• Created multilingual merchant complaint management app with Gemini AI
• Tech: Kotlin, Jetpack Compose, Firebase, Gemini AI

DayLedger - Daily Habit Tracker
• Built modern habit tracking app with Material 3 design
• Tech: Kotlin, Room, Coroutines, MVVM

Password Manager
• Local-first Android app for secure credential management
• Tech: Java, Android, SQLite

--------------------------------------------------------------------------------
Generated from Vinay Bhogal's Portfolio
`;

  return resume;
};

const downloadResume = () => {
  const resumeText = generateResumeText();
  const blob = new Blob([resumeText], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "Vinay_Bhogal_Resume.txt";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

const previewResume = () => {
  const resumeHTML = generateResumeHTML();
  const previewWindow = window.open("", "_blank");
  if (previewWindow) {
    previewWindow.document.write(resumeHTML);
    previewWindow.document.close();
  }
};

const printResume = () => {
  const resumeHTML = generateResumeHTML();

  const iframe = document.createElement("iframe");
  iframe.style.position = "fixed";
  iframe.style.right = "0";
  iframe.style.bottom = "0";
  iframe.style.width = "0";
  iframe.style.height = "0";
  iframe.style.border = "0";
  iframe.srcdoc = resumeHTML;
  document.body.appendChild(iframe);

  const win = iframe.contentWindow;
  if (win) {
    win.focus();
    win.onload = () => {
      setTimeout(() => {
        try {
          win.print();
        } finally {
          document.body.removeChild(iframe);
        }
      }, 250);
    };
  } else {
    const printWindow = window.open("", "_blank");
    if (printWindow) {
      printWindow.document.write(resumeHTML);
      printWindow.document.close();
      printWindow.onload = () => {
        printWindow.focus();
        setTimeout(() => {
          printWindow.print();
        }, 250);
      };
    }
  }
};

export default function Resume() {
  const experienceCount = EXPERIENCE.length;
  const educationCount = EDUCATION.length;
  const latestEducation = EDUCATION[0];

  return (
    <Section id="resume">
      <div className="grid gap-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Resume"
            title="Experience & Education"
            subtitle="A compact snapshot of the work, study, and technical direction behind my portfolio."
          />
          <div className="flex flex-wrap gap-3 items-center">
            <button
              onClick={printResume}
              title="Print resume"
              className="group inline-flex items-center gap-2 rounded-full border border-slate-700/70 bg-slate-950/50 px-4 py-2 text-sm font-semibold text-slate-100 transition-transform hover:-translate-y-0.5 hover:border-accent-blue/70 hover:bg-slate-900/80"
            >
              <svg
                className="h-5 w-5 transition-transform group-hover:scale-110"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Print
            </button>
            <button
              onClick={previewResume}
              className="group inline-flex items-center gap-2 rounded-full border border-slate-700/70 bg-slate-950/50 px-4 py-2 text-sm font-medium text-slate-200 transition-transform hover:-translate-y-0.5 hover:border-slate-500 hover:bg-slate-900/80 hover:text-white"
            >
              <svg
                className="h-5 w-5 transition-transform group-hover:rotate-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
              Preview
            </button>
            <button
              onClick={downloadResume}
              className="group inline-flex items-center gap-2 rounded-full border border-slate-700/70 bg-slate-950/50 px-4 py-2 text-sm font-medium text-slate-200 transition-transform hover:-translate-y-0.5 hover:border-slate-600 hover:bg-slate-900/80"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              TXT
            </button>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[340px_minmax(0,1fr)] lg:items-start">
          <aside className="relative overflow-hidden rounded-3xl border border-slate-800/70 bg-gradient-to-b from-slate-950/90 via-slate-950/75 to-slate-900/40 p-6 shadow-[0_0_0_1px_rgba(15,23,42,0.9)]">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -right-12 top-0 h-36 w-36 rounded-full bg-accent-blue/18 blur-3xl" />
              <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-sky-500/10 blur-3xl" />
            </div>
            <div className="relative space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-700/80 bg-slate-900/80 text-lg font-semibold text-accent-blue shadow-[0_0_0_1px_rgba(15,23,42,0.8)]">
                  VB
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent-blue">
                    Portfolio Resume
                  </p>
                  <h3 className="mt-2 text-xl font-semibold tracking-tight text-slate-50">
                    Vinay Bhogal
                  </h3>
                  <p className="mt-1 text-sm text-slate-400">
                    Android and Flutter full-stack developer
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-slate-800/80 bg-slate-900/60 p-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-slate-500">
                    Experience
                  </p>
                  <p className="mt-2 text-2xl font-semibold text-slate-50">
                    {experienceCount}
                  </p>
                  <p className="mt-1 text-xs text-slate-400">active roles</p>
                </div>
                <div className="rounded-2xl border border-slate-800/80 bg-slate-900/60 p-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-slate-500">
                    Education
                  </p>
                  <p className="mt-2 text-2xl font-semibold text-slate-50">
                    {educationCount}
                  </p>
                  <p className="mt-1 text-xs text-slate-400">milestones</p>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-800/80 bg-slate-900/50 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                  Focus
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  Building useful mobile products with a clean interface, solid
                  architecture, and pragmatic engineering choices.
                </p>
              </div>

              {latestEducation && (
                <div className="rounded-2xl border border-slate-800/80 bg-slate-900/50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                    Current Study
                  </p>
                  <p className="mt-2 text-sm font-semibold text-slate-50">
                    {latestEducation.degree}
                  </p>
                  <p className="mt-1 text-sm text-slate-400">
                    {latestEducation.institution}
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    {latestEducation.duration}
                  </p>
                </div>
              )}
            </div>
          </aside>

          <div className="grid gap-6">
            <section className="rounded-3xl border border-slate-800/70 bg-slate-950/40 p-6 shadow-[0_0_0_1px_rgba(15,23,42,0.85)]">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent-blue">
                    Education
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-slate-50">
                    Academic foundation
                  </h3>
                </div>
                <div className="rounded-full border border-slate-700/80 bg-slate-900/70 px-3 py-1 text-xs font-medium text-slate-300">
                  {educationCount} entries
                </div>
              </div>

              <div className="mt-6 grid gap-4">
                {EDUCATION.map((edu) => (
                  <article
                    key={`${edu.degree}-${edu.institution}`}
                    className="rounded-2xl border border-slate-800/80 bg-slate-900/45 p-5 transition-transform hover:-translate-y-0.5 hover:border-accent-blue/50 hover:bg-slate-900/70"
                  >
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div className="space-y-2">
                        <h4 className="text-base font-semibold tracking-tight text-slate-50">
                          {edu.degree}
                        </h4>
                        <div className="flex flex-wrap items-center gap-2 text-sm text-slate-400">
                          <span className="font-medium text-accent-blue">
                            {edu.institution}
                          </span>
                          <span className="text-slate-600">•</span>
                          <span>{edu.location}</span>
                        </div>
                      </div>
                      <span className="inline-flex w-fit rounded-full border border-slate-700/80 bg-slate-950/70 px-3 py-1 text-xs font-medium text-slate-300">
                        {edu.duration}
                      </span>
                    </div>

                    {edu.description && (
                      <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-300">
                        {edu.description}
                      </p>
                    )}

                    {edu.achievements && edu.achievements.length > 0 && (
                      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                        {edu.achievements.map((achievement) => (
                          <li
                            key={achievement}
                            className="flex items-start gap-3 rounded-xl border border-slate-800/70 bg-slate-950/50 px-3 py-2 text-sm text-slate-400"
                          >
                            <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-blue" />
                            <span className="leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </article>
                ))}
              </div>
            </section>

            {EXPERIENCE.length > 0 && (
              <section className="rounded-3xl border border-slate-800/70 bg-slate-950/40 p-6 shadow-[0_0_0_1px_rgba(15,23,42,0.85)]">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent-blue">
                      Experience
                    </p>
                    <h3 className="mt-2 text-xl font-semibold text-slate-50">
                      Professional background
                    </h3>
                  </div>
                  <div className="rounded-full border border-slate-700/80 bg-slate-900/70 px-3 py-1 text-xs font-medium text-slate-300">
                    {experienceCount} entries
                  </div>
                </div>

                <div className="mt-6 grid gap-4">
                  {EXPERIENCE.map((exp) => (
                    <article
                      key={`${exp.title}-${exp.company}`}
                      className="rounded-2xl border border-slate-800/80 bg-slate-900/45 p-5 transition-transform hover:-translate-y-0.5 hover:border-accent-blue/50 hover:bg-slate-900/70"
                    >
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                        <div className="space-y-2">
                          <h4 className="text-base font-semibold tracking-tight text-slate-50">
                            {exp.title}
                          </h4>
                          <div className="flex flex-wrap items-center gap-2 text-sm text-slate-400">
                            <span className="font-medium text-accent-blue">
                              {exp.company}
                            </span>
                            <span className="text-slate-600">•</span>
                            <span>{exp.location}</span>
                          </div>
                        </div>
                        <span className="inline-flex w-fit rounded-full border border-slate-700/80 bg-slate-950/70 px-3 py-1 text-xs font-medium text-slate-300">
                          {exp.duration}
                        </span>
                      </div>

                      <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-300">
                        {exp.description}
                      </p>

                      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                        {exp.achievements.map((achievement) => (
                          <li
                            key={achievement}
                            className="flex items-start gap-3 rounded-xl border border-slate-800/70 bg-slate-950/50 px-3 py-2 text-sm text-slate-400"
                          >
                            <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-blue" />
                            <span className="leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}

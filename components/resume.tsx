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
  return (
    <Section id="resume">
      <div className="grid gap-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <SectionHeading
            eyebrow="Resume"
            title="Experience & Education"
            subtitle="My professional journey and academic foundation in software engineering."
          />
          <div className="flex flex-wrap gap-3 items-center">
            <button
              onClick={printResume}
              title="Print resume"
              className="group flex items-center gap-2 rounded-lg border border-slate-700/60 bg-slate-800/40 px-4 py-2 text-sm font-semibold text-slate-100 transition-all hover:bg-slate-800 hover:text-white"
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
              className="group flex items-center gap-2 rounded-lg border border-slate-700/60 bg-slate-800/40 px-4 py-2 text-sm font-medium text-slate-200 transition-all hover:border-slate-500 hover:bg-slate-800"
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
              className="group flex items-center gap-2 rounded-lg border border-slate-700/60 bg-slate-800/40 px-4 py-2 text-sm font-medium text-slate-200 transition-all hover:border-slate-600 hover:bg-slate-800"
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

        {/* Experience Section */}
        {EXPERIENCE.length > 0 && (
          <div className="space-y-8">
            <h3 className="text-lg font-semibold text-slate-100">
              Work Experience
            </h3>
            <div className="space-y-8">
              {EXPERIENCE.map((exp, index) => (
              <article
                key={index}
                className="group relative border-l-2 border-slate-800/70 pl-8 pb-10 last:pb-0 transition-colors hover:border-accent-blue/50"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full border-2 border-slate-800/70 bg-slate-950 transition-all duration-300 group-hover:scale-125 group-hover:border-accent-blue group-hover:bg-accent-blue/20">
                  <div className="absolute inset-0 m-auto h-1.5 w-1.5 rounded-full bg-accent-blue opacity-0 transition-opacity group-hover:opacity-100" />
                </div>

                <div className="space-y-3">
                  {/* Header */}
                  <div className="space-y-1">
                    <h4 className="text-base font-semibold text-slate-100">
                      {exp.title}
                    </h4>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                      <span className="font-medium text-accent-blue">
                        {exp.company}
                      </span>
                      <span className="text-slate-500">•</span>
                      <span className="text-slate-400">{exp.location}</span>
                      <span className="text-slate-500">•</span>
                      <span className="text-slate-400">{exp.duration}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-slate-300">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm text-slate-400"
                      >
                        <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-accent-blue/70" />
                        <span className="leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
        )}

        {/* Education Section */}
        <div className="space-y-8">
          <h3 className="text-lg font-semibold text-slate-100">Education</h3>
          <div className="space-y-8">
            {EDUCATION.map((edu, index) => (
              <article
                key={index}
                className="group relative border-l-2 border-slate-800/70 pl-8 pb-10 last:pb-0 transition-colors hover:border-accent-blue/50"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full border-2 border-slate-800/70 bg-slate-950 transition-all duration-300 group-hover:scale-125 group-hover:border-accent-blue group-hover:bg-accent-blue/20">
                  <div className="absolute inset-0 m-auto h-1.5 w-1.5 rounded-full bg-accent-blue opacity-0 transition-opacity group-hover:opacity-100" />
                </div>

                <div className="space-y-3">
                  {/* Header */}
                  <div className="space-y-1">
                    <h4 className="text-base font-semibold text-slate-100">
                      {edu.degree}
                    </h4>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                      <span className="font-medium text-accent-blue">
                        {edu.institution}
                      </span>
                      <span className="text-slate-500">•</span>
                      <span className="text-slate-400">{edu.location}</span>
                      <span className="text-slate-500">•</span>
                      <span className="text-slate-400">{edu.duration}</span>
                    </div>
                  </div>

                  {/* Description */}
                  {edu.description && (
                    <p className="text-sm leading-relaxed text-slate-300">
                      {edu.description}
                    </p>
                  )}

                  {/* Achievements */}
                  {edu.achievements && edu.achievements.length > 0 && (
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-sm text-slate-400"
                        >
                          <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-accent-blue/70" />
                          <span className="leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

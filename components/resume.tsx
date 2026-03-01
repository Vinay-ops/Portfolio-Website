"use client";

import React from "react";
import Section from "@/components/section";
import SectionHeading from "@/components/section-heading";
import { EDUCATION, EXPERIENCE } from "@/lib/resume";
import { generateResumeHTML } from "@/lib/generate-resume-html";

const generateResumeText = () => {
  let resume = `VINAY BHOGAL
Aspiring Android & Flutter Full-Stack Developer (native apps with Dart & Flutter)

Email: vbhogal5@gmail.com
LinkedIn: linkedin.com/in/vinay-bhogal-78a623319
GitHub: github.com/Vinay-ops
Instagram: @vinaybhogal

================================================================================
EDUCATION
================================================================================

`;

  EDUCATION.forEach((edu) => {
    resume += `${edu.degree}\n`;
    resume += `${edu.institution} | ${edu.location}\n`;
    resume += `${edu.duration}\n`;
    if (edu.description) {
      resume += `${edu.description}\n`;
    }
    if (edu.achievements && edu.achievements.length > 0) {
      resume += `\nKey Highlights:\n`;
      edu.achievements.forEach((achievement) => {
        resume += `• ${achievement}\n`;
      });
    }
    resume += `\n`;
  });

  if (EXPERIENCE.length > 0) {
    resume += `\n================================================================================
WORK EXPERIENCE
================================================================================

`;
    EXPERIENCE.forEach((exp) => {
      resume += `${exp.title}\n`;
      resume += `${exp.company} | ${exp.location}\n`;
      resume += `${exp.duration}\n`;
      resume += `${exp.description}\n\n`;
      resume += `Key Achievements:\n`;
      exp.achievements.forEach((achievement) => {
        resume += `• ${achievement}\n`;
      });
      resume += `\n`;
    });
  }

  resume += `\n================================================================================
TECHNICAL SKILLS
================================================================================

Programming Languages: Java, Kotlin, Python, Dart
Frameworks: Flutter, Jetpack Compose, Material 3
Databases: Firebase, MySQL, PostgreSQL, Room, SQLite
Tools & Platforms: Git, Android Studio, VS Code, Unity
Other: Native mobile app development (Dart / Flutter), MVVM Architecture, REST APIs, Coroutines, AI Integration

================================================================================
PROJECTS
================================================================================

DayLedger - Daily Habit Tracker
• Built modern habit tracking app with Jetpack Compose and Material 3
• Implemented streak tracking and calendar-based completion history
• Tech: Kotlin, Room, Coroutines, MVVM

Pay Sahayak - UPI Issue Resolution
• Created AI-powered multilingual app for merchant complaint management
• Integrated Gemini AI for automated guidance and complaint drafting
• Tech: Kotlin, Jetpack Compose, Firebase, Gemini AI

AI Chat Pro
• Developed lightning-fast AI chat with Groq's inference API
• Achieved sub-second response times with multiple AI models
• Tech: Python, CustomTkinter, Groq API

Space Shooter 3D & Red Light Green Light
• Created immersive 3D games with Unity engine
• Implemented AI opponents and mobile-optimized controls
• Tech: Unity, C#, 3D Graphics

Password Manager
• Built secure credential storage application for Android
• Focused on local encryption and user-friendly interface
• Tech: Java, Android Studio, SQLite

================================================================================

Generated from portfolio website
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

const printResume = () => {
  const resumeHTML = generateResumeHTML();
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
};

export default function Resume() {
  return (
    <Section id="resume">
      <div className="grid gap-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <SectionHeading
            eyebrow="Resume"
            title="Education"
            subtitle="Academic journey and continuous learning in software development and technology."
          />
          <div className="flex flex-wrap gap-3">
            <button
              onClick={printResume}
              className="group flex items-center gap-2 rounded-xl border border-accent-blue/70 bg-accent-blue/10 px-5 py-2.5 text-sm font-medium text-accent-blue transition-all hover:bg-accent-blue hover:text-white hover:shadow-glow"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                />
              </svg>
              Print PDF
            </button>
            <button
              onClick={downloadResume}
              className="group flex items-center gap-2 rounded-xl border border-slate-700/80 bg-slate-900/60 px-5 py-2.5 text-sm font-medium text-slate-100 transition-all hover:border-accent-blue/70 hover:bg-slate-800/80 hover:shadow-glow"
            >
              <svg
                className="h-5 w-5 transition-transform group-hover:translate-y-0.5"
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
              Download TXT
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
                className="group relative border-l-2 border-slate-800/70 pl-8 pb-8 last:pb-0 transition-colors hover:border-accent-blue/70"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-2 top-0 h-4 w-4 rounded-full border-2 border-slate-800/70 bg-slate-950 transition-colors group-hover:border-accent-blue group-hover:bg-accent-blue/20">
                  <div className="absolute inset-0 m-auto h-2 w-2 rounded-full bg-accent-blue opacity-0 transition-opacity group-hover:opacity-100" />
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
                className="group relative border-l-2 border-slate-800/70 pl-8 pb-8 last:pb-0 transition-colors hover:border-accent-blue/70"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-2 top-0 h-4 w-4 rounded-full border-2 border-slate-800/70 bg-slate-950 transition-colors group-hover:border-accent-blue group-hover:bg-accent-blue/20">
                  <div className="absolute inset-0 m-auto h-2 w-2 rounded-full bg-accent-blue opacity-0 transition-opacity group-hover:opacity-100" />
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

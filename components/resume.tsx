"use client";

import React from "react";
import Section from "@/components/section";
import SectionHeading from "@/components/section-heading";
import {
  CONTACT,
  EDUCATION,
  EXPERIENCE,
  PROFESSIONAL_SUMMARY,
  SKILL_GROUPS
} from "@/lib/resume";
import { PROJECTS } from "@/lib/projects";
import { generateResumeHTML } from "@/lib/generate-resume-html";

const generateResumeText = () => {
  let resume = `VINAY BHOGAL
Android & Flutter Developer

CONTACT
--------------------------------------------------------------------------------
Email: ${CONTACT.email}
Location: ${CONTACT.location}
LinkedIn: ${CONTACT.linkedin}
GitHub: ${CONTACT.github}
LeetCode: ${CONTACT.leetcode}

PROFESSIONAL SUMMARY
--------------------------------------------------------------------------------
${PROFESSIONAL_SUMMARY}

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
${SKILL_GROUPS.map((group) => `${group.category}: ${group.values.join(", ")}`).join("\n")}

PROJECTS
--------------------------------------------------------------------------------
${PROJECTS.slice(0, 4)
  .map(
    (project) =>
      `${project.name}
• ${project.description}
• Tech: ${project.tech.join(", ")}`
  )
  .join("\n\n")}

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
      <div className="grid gap-12">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <SectionHeading
            eyebrow="Resume"
            title="Experience & Education"
            subtitle="My professional journey and academic foundation in software engineering."
          />
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={printResume}
              title="Print resume"
              className="neo-btn group flex items-center gap-2 border-4 border-neo-black bg-neo-yellow px-5 py-3 text-xs font-black uppercase tracking-[0.2em] text-neo-black shadow-neo-sm dark:border-neo-white"
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
              className="neo-btn group flex items-center gap-2 border-4 border-neo-black bg-neo-blue px-5 py-3 text-xs font-black uppercase tracking-[0.2em] text-neo-black shadow-neo-sm dark:border-neo-white"
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
              className="neo-btn group flex items-center gap-2 border-4 border-neo-black bg-neo-green px-5 py-3 text-xs font-black uppercase tracking-[0.2em] text-neo-black shadow-neo-sm dark:border-neo-white"
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
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              TXT
            </button>
          </div>
        </div>

        {EXPERIENCE.length > 0 && (
          <div className="space-y-8">
            <h3 className="text-sm font-black uppercase tracking-[0.3em] text-neo-black dark:text-neo-white">
              Work Experience
            </h3>
            <div className="space-y-6">
              {EXPERIENCE.map((exp, index) => {
                const colors = ["bg-neo-yellow", "bg-neo-blue", "bg-neo-pink", "bg-neo-green"];
                return (
                  <article
                    key={index}
                    className="neo-card border-4 border-neo-black bg-neo-white p-8 shadow-neo-md dark:border-neo-white dark:bg-neo-dark-card dark:shadow-neo-dark-md"
                  >
                    <div className="space-y-5">
                      <div className="space-y-3">
                        <h4 className="text-xl font-black tracking-tight text-neo-black dark:text-neo-white">
                          {exp.title}
                        </h4>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-black uppercase tracking-[0.2em]">
                          <span className={`inline-block border-3 border-neo-black ${colors[index % colors.length]} px-3 py-1 dark:border-neo-white`}>
                            {exp.company}
                          </span>
                          <span className="text-neo-black dark:text-neo-white">•</span>
                          <span className="text-neo-black dark:text-neo-white">{exp.location}</span>
                          <span className="text-neo-black dark:text-neo-white">•</span>
                          <span className="text-neo-black dark:text-neo-white">{exp.duration}</span>
                        </div>
                      </div>

                      <p className="text-sm font-bold text-neo-black dark:text-neo-white">
                        {exp.description}
                      </p>

                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-4 text-sm font-bold text-neo-black dark:text-neo-white"
                          >
                            <span className="mt-2 h-2 w-2 flex-shrink-0 border-2 border-neo-black bg-neo-pink dark:border-neo-white"></span>
                            <span className="leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        )}

        <div className="space-y-8">
          <h3 className="text-sm font-black uppercase tracking-[0.3em] text-neo-black dark:text-neo-white">Education</h3>
          <div className="space-y-6">
            {EDUCATION.map((edu, index) => {
              const colors = ["bg-neo-purple", "bg-neo-orange", "bg-neo-yellow", "bg-neo-green"];
              return (
                <article
                  key={index}
                  className="neo-card border-4 border-neo-black bg-neo-white p-8 shadow-neo-md dark:border-neo-white dark:bg-neo-dark-card dark:shadow-neo-dark-md"
                >
                  <div className="space-y-5">
                    <div className="space-y-3">
                      <h4 className="text-xl font-black tracking-tight text-neo-black dark:text-neo-white">
                        {edu.degree}
                      </h4>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-black uppercase tracking-[0.2em]">
                        <span className={`inline-block border-3 border-neo-black ${colors[index % colors.length]} px-3 py-1 dark:border-neo-white`}>
                          {edu.institution}
                        </span>
                        <span className="text-neo-black dark:text-neo-white">•</span>
                        <span className="text-neo-black dark:text-neo-white">{edu.location}</span>
                        <span className="text-neo-black dark:text-neo-white">•</span>
                        <span className="text-neo-black dark:text-neo-white">{edu.duration}</span>
                      </div>
                    </div>

                    {edu.description && (
                      <p className="text-sm font-bold text-neo-black dark:text-neo-white">
                        {edu.description}
                      </p>
                    )}

                    {edu.achievements && edu.achievements.length > 0 && (
                      <ul className="space-y-3">
                        {edu.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-4 text-sm font-bold text-neo-black dark:text-neo-white"
                          >
                            <span className="mt-2 h-2 w-2 flex-shrink-0 border-2 border-neo-black bg-neo-blue dark:border-neo-white"></span>
                            <span className="leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}

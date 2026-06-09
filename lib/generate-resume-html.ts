import {
  CONTACT,
  EDUCATION,
  EXPERIENCE,
  PROFESSIONAL_SUMMARY,
  SKILL_GROUPS
} from "./resume";
import { PROJECTS } from "./projects";

export const generateResumeHTML = () => {
  const escape = (s: string) => String(s).replace(/</g, "&lt;").replace(/>/g, "&gt;");

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Vinay Bhogal — Professional Resume</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@700&display=swap" rel="stylesheet">
  <style>
    @page { size: letter; margin: 0.45in; }
    * { box-sizing: border-box; }
    html, body { margin: 0; padding: 0; background: #fff; color: #1a202c; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    body { font-family: 'Inter', sans-serif; line-height: 1.55; font-size: 11px; }
    .container { width: 100%; max-width: 7.5in; margin: 0 auto; padding: 0.05in 0; }

    .header { display: flex; justify-content: space-between; align-items: flex-end; border-bottom: 2px solid #38bdf8; padding-bottom: 18px; margin-bottom: 20px; }
    .header-info h1 { font-family: 'Playfair Display', serif; font-size: 34px; margin: 0; color: #0f172a; letter-spacing: -0.02em; line-height: 1.1; }
    .header-info p { font-size: 14px; color: #38bdf8; font-weight: 600; margin: 6px 0 0 0; text-transform: uppercase; letter-spacing: 0.1em; }

    .contact-grid { text-align: right; font-size: 10px; color: #64748b; line-height: 1.6; }
    .contact-grid div { margin-bottom: 1px; }
    .contact-grid a { color: inherit; text-decoration: none; }

    .summary { font-size: 11.5px; color: #334155; text-align: justify; line-height: 1.65; margin-bottom: 20px; }

    .section { margin-bottom: 18px; }
    .section-title { font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.15em; color: #0f172a; border-bottom: 1px solid #e2e8f0; padding-bottom: 5px; margin-bottom: 12px; }

    .entry { margin-bottom: 14px; break-inside: avoid; page-break-inside: avoid; }
    .entry-header { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 3px; gap: 12px; }
    .entry-title { font-size: 12px; font-weight: 700; color: #0f172a; }
    .entry-date { font-size: 10px; font-weight: 600; color: #64748b; text-transform: uppercase; white-space: nowrap; }
    .entry-sub { display: flex; justify-content: space-between; gap: 12px; font-size: 10.5px; font-weight: 500; color: #38bdf8; margin-bottom: 6px; }

    .bullets { margin: 6px 0 0 0; padding: 0; list-style: none; }
    .bullets li { position: relative; padding-left: 14px; margin-bottom: 4px; color: #475569; font-size: 11px; line-height: 1.5; }
    .bullets li::before { content: '•'; position: absolute; left: 0; color: #38bdf8; font-weight: bold; }

    .skills-container { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px 16px; }
    .skill-item { display: flex; gap: 8px; line-height: 1.5; }
    .skill-label { font-weight: 700; color: #0f172a; min-width: 118px; flex-shrink: 0; }
    .skill-values { color: #475569; }

    .projects-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; break-inside: avoid; page-break-inside: avoid; }
    .project-card { border: 1px solid #e2e8f0; padding: 10px 11px; border-radius: 8px; background: #f8fafc; break-inside: avoid; page-break-inside: avoid; min-height: 88px; }
    .project-name { font-size: 11px; font-weight: 700; color: #0f172a; margin-bottom: 3px; }
    .project-tech { font-size: 9px; font-weight: 600; color: #38bdf8; text-transform: uppercase; margin-bottom: 6px; line-height: 1.45; }
    .project-desc { font-size: 10px; color: #64748b; line-height: 1.5; }

    @media print {
      body { font-size: 11px; }
      .section:last-child { margin-bottom: 0; }
    }
  </style>
</head>
<body>
  <div class="container">
    <header class="header">
      <div class="header-info">
        <h1>VINAY BHOGAL</h1>
        <p>Android & Flutter Developer</p>
      </div>
      <div class="contact-grid">
        <div>${escape(CONTACT.email)}</div>
        <div>${escape(CONTACT.location)}</div>
        <div><a href="https://${escape(CONTACT.linkedin)}">${escape(CONTACT.linkedin)}</a></div>
        <div><a href="https://${escape(CONTACT.github)}">${escape(CONTACT.github)}</a></div>
        <div><a href="https://${escape(CONTACT.leetcode)}">${escape(CONTACT.leetcode)}</a></div>
      </div>
    </header>

    <div class="summary">${escape(PROFESSIONAL_SUMMARY)}</div>

    <section class="section">
      <div class="section-title">Technical Skills</div>
      <div class="skills-container">
        ${SKILL_GROUPS.map(s => `
          <div class="skill-item">
            <span class="skill-label">${escape(s.category)}:</span>
            <span class="skill-values">${escape(s.values.join(", "))}</span>
          </div>
        `).join("")}
      </div>
    </section>

    <section class="section">
      <div class="section-title">Experience</div>
      ${EXPERIENCE.map(exp => `
        <div class="entry">
          <div class="entry-header">
            <span class="entry-title">${escape(exp.title)}</span>
            <span class="entry-date">${escape(exp.duration)}</span>
          </div>
          <div class="entry-sub">
            <span>${escape(exp.company)}</span>
            <span>${escape(exp.location)}</span>
          </div>
          <ul class="bullets">
            ${exp.achievements.map(a => `<li>${escape(a)}</li>`).join("")}
          </ul>
        </div>
      `).join("")}
    </section>

    <section class="section">
      <div class="section-title">Education</div>
      ${EDUCATION.map(edu => `
        <div class="entry">
          <div class="entry-header">
            <span class="entry-title">${escape(edu.degree)}</span>
            <span class="entry-date">${escape(edu.duration)}</span>
          </div>
          <div class="entry-sub">
            <span>${escape(edu.institution)}</span>
            <span>${escape(edu.location)}</span>
          </div>
          ${edu.achievements && edu.achievements.length > 0 ? `
            <ul class="bullets">
              ${edu.achievements.map(a => `<li>${escape(a)}</li>`).join("")}
            </ul>
          ` : ""}
        </div>
      `).join("")}
    </section>

    <section class="section">
      <div class="section-title">Selected Projects</div>
      <div class="projects-grid">
        ${PROJECTS.slice(0, 4).map(p => `
          <div class="project-card">
            <div class="project-name">${escape(p.name)}</div>
            <div class="project-tech">${escape(p.tech.join(" • "))}</div>
            <div class="project-desc">${escape(p.description)}</div>
          </div>
        `).join("")}
      </div>
    </section>
  </div>
</body>
</html>`;
};

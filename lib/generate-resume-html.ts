import {
  CONTACT,
  EDUCATION,
  EXPERIENCE,
  PROFESSIONAL_SUMMARY,
  SKILL_GROUPS
} from "./resume";
import { PROJECTS } from "./projects";

const truncate = (text: string, max = 110) => {
  const t = text.trim();
  return t.length <= max ? t : `${t.slice(0, max).trimEnd()}…`;
};

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
    @page { margin: 0; size: auto; }
    html, body { margin: 0; padding: 0; background: #fff; color: #1a202c; -webkit-print-color-adjust: exact; }
    body { font-family: 'Inter', sans-serif; line-height: 1.45; font-size: 10.5px; padding: 0.4in; }
    .container { max-width: 800px; margin: 0 auto; }

    .header { text-align: left; border-bottom: 2px solid #38bdf8; padding-bottom: 14px; margin-bottom: 16px; display: flex; justify-content: space-between; align-items: flex-end; break-inside: avoid; page-break-inside: avoid; }
    .header-info h1 { font-family: 'Playfair Display', serif; font-size: 32px; margin: 0; color: #0f172a; letter-spacing: -0.02em; }
    .header-info p { font-size: 14px; color: #38bdf8; font-weight: 600; margin: 5px 0 0 0; text-transform: uppercase; letter-spacing: 0.1em; }

    .contact-grid { text-align: right; font-size: 10px; color: #64748b; }
    .contact-grid div { margin-bottom: 2px; }
    .contact-grid a { color: inherit; text-decoration: none; }

    .section { margin-bottom: 14px; break-inside: avoid; page-break-inside: avoid; }
    .section-title { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.15em; color: #0f172a; border-bottom: 1px solid #e2e8f0; padding-bottom: 3px; margin-bottom: 8px; }

    .summary { font-size: 10.5px; color: #334155; text-align: justify; line-height: 1.5; margin-bottom: 14px; }

    .entry { margin-bottom: 10px; break-inside: avoid; page-break-inside: avoid; }
    .entry-compact { margin-bottom: 6px; }
    .entry-header { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 2px; }
    .entry-title { font-size: 12px; font-weight: 700; color: #0f172a; }
    .entry-date { font-size: 10px; font-weight: 600; color: #64748b; text-transform: uppercase; }
    .entry-sub { display: flex; justify-content: space-between; font-size: 10.5px; font-weight: 500; color: #38bdf8; margin-bottom: 5px; }

    .bullets { margin: 4px 0 0 15px; padding: 0; list-style-type: none; }
    .bullets li { position: relative; padding-left: 15px; margin-bottom: 2px; color: #475569; }
    .bullets li::before { content: '•'; position: absolute; left: 0; color: #38bdf8; font-weight: bold; }

    .skills-container { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; break-inside: avoid; }
    .skill-item { display: flex; gap: 8px; break-inside: avoid; }
    .skill-label { font-weight: 700; color: #0f172a; min-width: 90px; }
    .skill-values { color: #475569; }

    .projects-section { margin-bottom: 0; }
    .projects-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px; break-inside: avoid; page-break-inside: avoid; }
    .project-card { border: 1px solid #f1f5f9; padding: 7px 8px; border-radius: 6px; background: #f8fafc; break-inside: avoid; page-break-inside: avoid; }
    .project-name { font-size: 10px; font-weight: 700; color: #0f172a; margin-bottom: 1px; }
    .project-tech { font-size: 8px; font-weight: 600; color: #38bdf8; text-transform: uppercase; margin-bottom: 3px; line-height: 1.3; }
    .project-desc { font-size: 9px; color: #64748b; line-height: 1.35; }
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
      ${EDUCATION.map((edu, index) => `
        <div class="${index === 0 ? "entry" : "entry entry-compact"}">
          <div class="entry-header">
            <span class="entry-title">${escape(edu.degree)}</span>
            <span class="entry-date">${escape(edu.duration)}</span>
          </div>
          <div class="entry-sub">
            <span>${escape(edu.institution)}</span>
            <span>${escape(edu.location)}</span>
          </div>
          ${index === 0 && edu.achievements && edu.achievements.length > 0 ? `
            <ul class="bullets">
              ${edu.achievements.slice(0, 2).map(a => `<li>${escape(a)}</li>`).join("")}
            </ul>
          ` : ""}
        </div>
      `).join("")}
    </section>

    <section class="section projects-section">
      <div class="section-title">Selected Projects</div>
      <div class="projects-grid">
        ${PROJECTS.slice(0, 4).map(p => `
          <div class="project-card">
            <div class="project-name">${escape(p.name)}</div>
            <div class="project-tech">${escape(p.tech.join(" • "))}</div>
            <div class="project-desc">${escape(truncate(p.description))}</div>
          </div>
        `).join("")}
      </div>
    </section>
  </div>
</body>
</html>`;
};

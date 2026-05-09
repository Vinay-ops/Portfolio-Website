import { EDUCATION, EXPERIENCE } from "./resume";
import { PROJECTS } from "./projects";
  const escape = (s: string) => String(s).replace(/</g, "&lt;").replace(/>/g, "&gt;");

  const strongFirst = (text: string) => {
    if (!text) return "";
    const t = text.trim();
    const idx = t.indexOf(" ");
    if (idx === -1) return `<strong>${escape(t)}</strong>`;
    const first = escape(t.slice(0, idx));
    const rest = escape(t.slice(idx + 1));
    return `<strong>${first}</strong> ${rest}`;
  };

  // static skills grouped as requested
  const SKILLS: { category: string; values: string[] }[] = [
    { category: "Languages", values: ["Java", "Kotlin", "Dart", "Python", "C#"] },
    { category: "Frameworks", values: ["Flutter", "Jetpack Compose", "Material 3", "Unity"] },
    { category: "Databases & Tools", values: ["Firebase", "MySQL", "PostgreSQL", "Room", "SQLite", "Git"] }
  ];

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Vinay Bhogal — Resume</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">
  <style>
    /* Margins: 0.5in on all sides */
    @page { margin: 0.5in; }
    html,body{height:100%;margin:0;padding:0}
    body{font-family:Inter,system-ui,Segoe UI,Roboto,Arial,sans-serif;color:#0f172a;background:#fff;padding:0.5in}
    .container{max-width:780px;margin:0 auto}

    /* Name & contact centered */
    .name{font-size:28px;font-weight:800;text-align:center;margin:0}
    .tagline{font-size:14px;text-align:center;margin-top:6px;color:#2563eb;font-style:italic}
    .contact{font-size:12px;text-align:center;color:#475569;margin-top:8px}
    .contact a{color:inherit;text-decoration:none}

    /* Single column sections, consistent spacing */
    .section{margin-top:18px;margin-bottom:18px}
    .section-header{font-size:12px;font-weight:800;letter-spacing:0.08em;text-transform:uppercase;margin-bottom:6px}
    .section-line{height:1px;background:#e6edf3;width:100%;margin-top:6px}

    /* Title row with date right-aligned */
    .title-row{display:flex;justify-content:space-between;align-items:flex-start;gap:12px}
    .title{font-size:13px;font-weight:700}
    .date{font-size:12px;color:#6b7280;white-space:nowrap}

    /* Description and bullets */
    .desc{font-size:12px;color:#374151;margin-top:6px}
    ul.bullets{margin:8px 0 0 18px;padding-left:0}
    ul.bullets li{margin-bottom:6px;font-size:12px;color:#374151;line-height:1.4}

    /* Skills table: left column category, right column comma-separated values */
    .skills-table{width:100%;border-collapse:collapse;margin-top:6px}
    .skills-table td{vertical-align:top;padding:6px 8px}
    .skills-cat{width:160px;font-weight:600;color:#0f172a}
    .skills-val{color:#374151}

    /* Projects grid is simple single column cards */
    .project{margin-top:8px;padding:8px;border-radius:6px;border:1px solid #eef2f7}

    footer{font-size:10px;color:#94a3b8;margin-top:18px;text-align:right}
  </style>
</head>
<body>
  <div class="container">
    <h1 class="name">VINAY BHOGAL</h1>
    <div class="tagline">Aspiring Android & Flutter Full-Stack Developer</div>
    <div class="contact">vbhogal5@gmail.com &nbsp; | &nbsp; linkedin.com/in/vinay-bhogal-78a623319 &nbsp; | &nbsp; github.com/Vinay-ops</div>

    <!-- Education -->
    <section class="section">
      <div class="section-header">Education</div>
      <div class="section-line"></div>
      ${EDUCATION.map(edu => `
        <div style="margin-top:10px">
          <div class="title-row">
            <div class="title">${escape(edu.degree)}</div>
            <div class="date">${escape(edu.duration)}</div>
          </div>
          <div class="desc">${escape(edu.institution)} • ${escape(edu.location)}</div>
          ${edu.description ? `<div class="desc">${escape(edu.description)}</div>` : ''}
          ${edu.achievements && edu.achievements.length>0 ? `<ul class="bullets">${edu.achievements.map(a=>`<li>${strongFirst(a)}</li>`).join('')}</ul>` : ''}
        </div>
      `).join('')}
    </section>

    <!-- Experience -->
    ${EXPERIENCE.length>0 ? `
    <section class="section">
      <div class="section-header">Experience</div>
      <div class="section-line"></div>
      ${EXPERIENCE.map(exp=>`
        <div style="margin-top:10px">
          <div class="title-row">
            <div class="title">${escape(exp.title)} — ${escape(exp.company)}</div>
            <div class="date">${escape(exp.duration)}</div>
          </div>
          <div class="desc">${escape(exp.location)}</div>
          <div class="desc">${escape(exp.description)}</div>
          ${exp.achievements && exp.achievements.length>0 ? `<ul class="bullets">${exp.achievements.map(a=>`<li>${strongFirst(a)}</li>`).join('')}</ul>` : ''}
        </div>
      `).join('')}
    </section>
    ` : ''}

    <!-- Skills -->
    <section class="section">
      <div class="section-header">Skills</div>
      <div class="section-line"></div>
      <table class="skills-table">
        ${SKILLS.map(s=>`
          <tr>
            <td class="skills-cat">${s.category}</td>
            <td class="skills-val">${s.values.join(', ')}</td>
          </tr>
        `).join('')}
      </table>
    </section>

    <!-- Projects -->
    <section class="section">
      <div class="section-header">Key Projects</div>
      <div class="section-line"></div>
      ${PROJECTS.slice(0,6).map(p=>`
        <div class="project">
          <div style="font-weight:700">${escape(p.name)}</div>
          <div style="font-size:12px;color:#2563eb;margin-top:4px">${p.tech.join(', ')}</div>
          <div class="desc">${escape(p.description)}</div>
        </div>
      `).join('')}
    </section>

    <footer>Generated from Vinay Bhogal's portfolio</footer>
  </div>
</body>
</html>`;
};

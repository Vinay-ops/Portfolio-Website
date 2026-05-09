import { EDUCATION, EXPERIENCE } from "./resume";
import { PROJECTS } from "./projects";

export const generateResumeHTML = () => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vinay Bhogal - Resume</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    :root {
      --primary: #2563eb;
      --primary-dark: #1d4ed8;
      --text-main: #1e293b;
      --text-light: #64748b;
      --border: #e2e8f0;
      --bg-light: #f8fafc;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      line-height: 1.5;
      color: var(--text-main);
      background: white;
      -webkit-font-smoothing: antialiased;
    }
    
    .page {
      max-width: 210mm;
      margin: 0 auto;
      padding: 20mm;
      min-height: 297mm;
    }
    
    @media print {
      body {
        background: white;
      }
      .page {
        margin: 0;
        padding: 15mm;
        width: 100%;
      }
      @page {
        size: A4;
        margin: 0;
      }
    }
    
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 2px solid var(--primary);
      padding-bottom: 20px;
      margin-bottom: 25px;
    }
    
    .header-left h1 {
      font-size: 32px;
      font-weight: 700;
      color: var(--text-main);
      letter-spacing: -0.02em;
      line-height: 1.1;
      margin-bottom: 4px;
    }
    
    .header-left .title {
      font-size: 16px;
      color: var(--primary);
      font-weight: 600;
      margin-bottom: 8px;
    }

    .header-right .profile-img {
      width: 100px;
      height: 100px;
      border-radius: 12px;
      object-fit: cover;
      border: 3px solid var(--primary);
    }
    
    .contact-grid {
      display: grid;
      grid-template-columns: repeat(2, auto);
      gap: 6px 20px;
      margin-top: 10px;
    }
    
    .contact-item {
      font-size: 12px;
      color: var(--text-light);
      display: flex;
      align-items: center;
      gap: 6px;
      text-decoration: none;
    }

    .contact-item svg {
      width: 14px;
      height: 14px;
      color: var(--primary);
    }
    
    .main-content {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 30px;
    }
    
    .section {
      margin-bottom: 25px;
    }
    
    .section-title {
      font-size: 14px;
      font-weight: 700;
      color: var(--primary);
      text-transform: uppercase;
      letter-spacing: 0.1em;
      border-bottom: 1px solid var(--border);
      padding-bottom: 6px;
      margin-bottom: 15px;
    }
    
    .experience-item, .education-item {
      margin-bottom: 18px;
    }
    
    .item-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-bottom: 2px;
    }
    
    .item-title {
      font-size: 15px;
      font-weight: 600;
      color: var(--text-main);
    }
    
    .item-date {
      font-size: 12px;
      color: var(--text-light);
      font-weight: 500;
    }
    
    .item-subtitle {
      font-size: 13px;
      color: var(--primary);
      font-weight: 500;
      margin-bottom: 6px;
    }
    
    .item-description {
      font-size: 12px;
      color: var(--text-main);
      margin-bottom: 4px;
    }
    
    .bullet-list {
      list-style: none;
    }
    
    .bullet-list li {
      font-size: 11.5px;
      color: #334155;
      padding-left: 14px;
      position: relative;
      margin-bottom: 4px;
    }
    
    .bullet-list li:before {
      content: "";
      position: absolute;
      left: 0;
      top: 6px;
      width: 4px;
      height: 4px;
      background-color: var(--primary);
      border-radius: 50%;
    }
    
    .skills-section {
      background-color: var(--bg-light);
      padding: 15px;
      border-radius: 8px;
    }
    
    .skill-group {
      margin-bottom: 15px;
    }
    
    .skill-group-title {
      font-size: 12px;
      font-weight: 700;
      color: var(--text-main);
      margin-bottom: 6px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    
    .skill-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
    }
    
    .skill-tag {
      font-size: 11px;
      background: white;
      border: 1px solid var(--border);
      padding: 2px 8px;
      border-radius: 4px;
      color: var(--text-main);
    }
    
    .project-item {
      margin-bottom: 15px;
    }
    
    .project-title {
      font-size: 13px;
      font-weight: 600;
      color: var(--text-main);
      margin-bottom: 2px;
    }

    .project-tech {
      font-size: 11px;
      color: var(--primary);
      font-weight: 500;
      margin-bottom: 4px;
    }
  </style>
</head>
<body>
  <div class="page">
    <header class="header">
      <div class="header-left">
        <h1>VINAY BHOGAL</h1>
        <div class="title">Aspiring Android & Flutter Full-Stack Developer</div>
        <div class="contact-grid">
          <a href="mailto:vbhogal5@gmail.com" class="contact-item">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            vbhogal5@gmail.com
          </a>
          <a href="https://linkedin.com/in/vinay-bhogal-78a623319" class="contact-item">
            <svg fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            linkedin.com/in/vinay-bhogal-78a623319
          </a>
          <a href="https://github.com/Vinay-ops" class="contact-item">
            <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            github.com/Vinay-ops
          </a>
        </div>
      </div>
      <div class="header-right">
        <img class="profile-img" src="/image/VinayProfilePic.jpg" alt="Vinay Bhogal">
      </div>
    </header>

    <div class="main-content">
      <div class="left-col">
        <section class="section">
          <h2 class="section-title">Education</h2>
          ${EDUCATION.map(
            (edu) => `
            <div class="education-item">
              <div class="item-header">
                <div class="item-title">${edu.degree}</div>
                <div class="item-date">${edu.duration}</div>
              </div>
              <div class="item-subtitle">${edu.institution} | ${edu.location}</div>
              ${edu.description ? `<p class="item-description">${edu.description}</p>` : ""}
              ${
                edu.achievements && edu.achievements.length > 0
                  ? `
                <ul class="bullet-list">
                  ${edu.achievements.map((achievement) => `<li>${achievement}</li>`).join("")}
                </ul>
              `
                  : ""
              }
            </div>
          `
          ).join("")}
        </section>

        ${
          EXPERIENCE.length > 0
            ? `
        <section class="section">
          <h2 class="section-title">Experience</h2>
          ${EXPERIENCE.map(
            (exp) => `
            <div class="experience-item">
              <div class="item-header">
                <div class="item-title">${exp.title}</div>
                <div class="item-date">${exp.duration}</div>
              </div>
              <div class="item-subtitle">${exp.company} | ${exp.location}</div>
              <p class="item-description">${exp.description}</p>
              <ul class="bullet-list">
                ${exp.achievements.map((achievement) => `<li>${achievement}</li>`).join("")}
              </ul>
            </div>
          `
          ).join("")}
        </section>
        `
            : ""
        }

        <section class="section">
          <h2 class="section-title">Projects</h2>
          ${PROJECTS.slice(0, 4).map(
            (project) => `
            <div class="project-item">
              <div class="project-title">${project.name}</div>
              <div class="project-tech">${project.tech.join(", ")}</div>
              <p class="item-description">${project.description}</p>
            </div>
          `
          ).join("")}
        </section>
      </div>

      <div class="right-col">
        <section class="section">
          <h2 class="section-title">Technical Skills</h2>
          <div class="skills-section">
            <div class="skill-group">
              <div class="skill-group-title">Languages</div>
              <div class="skill-tags">
                <span class="skill-tag">Java</span>
                <span class="skill-tag">Kotlin</span>
                <span class="skill-tag">Dart</span>
                <span class="skill-tag">Python</span>
                <span class="skill-tag">C#</span>
              </div>
            </div>
            <div class="skill-group">
              <div class="skill-group-title">Frameworks</div>
              <div class="skill-tags">
                <span class="skill-tag">Flutter</span>
                <span class="skill-tag">Jetpack Compose</span>
                <span class="skill-tag">Material 3</span>
                <span class="skill-tag">Unity</span>
              </div>
            </div>
            <div class="skill-group">
              <div class="skill-group-title">Backend & DB</div>
              <div class="skill-tags">
                <span class="skill-tag">Firebase</span>
                <span class="skill-tag">SQLite</span>
                <span class="skill-tag">Room</span>
                <span class="skill-tag">PostgreSQL</span>
              </div>
            </div>
            <div class="skill-group">
              <div class="skill-group-title">Tools</div>
              <div class="skill-tags">
                <span class="skill-tag">Git</span>
                <span class="skill-tag">Android Studio</span>
                <span class="skill-tag">VS Code</span>
                <span class="skill-tag">AI Integration</span>
              </div>
            </div>
          </div>
        </section>

        <section class="section">
          <h2 class="section-title">Languages</h2>
          <ul class="bullet-list">
            <li>English (Professional)</li>
            <li>Hindi (Native)</li>
            <li>Marathi (Native)</li>
          </ul>
        </section>

        <section class="section">
          <h2 class="section-title">Interests</h2>
          <ul class="bullet-list">
            <li>Android Development</li>
            <li>AI & Machine Learning</li>
            <li>3D Game Development</li>
            <li>UI/UX Design</li>
          </ul>
        </section>
      </div>
    </div>
  </div>
</body>
</html>
  `;
};

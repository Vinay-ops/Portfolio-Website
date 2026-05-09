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
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    :root {
      --primary: #2563eb;
      --primary-dark: #1e40af;
      --primary-light: #eff6ff;
      --text-main: #0f172a;
      --text-muted: #475569;
      --text-light: #94a3b8;
      --border: #e2e8f0;
      --sidebar-bg: #f8fafc;
    }

    @media print {
      @page {
        size: A4;
        margin: 0;
      }
      body {
        -webkit-print-color-adjust: exact;
      }
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: 'Inter', -apple-system, sans-serif;
      line-height: 1.6;
      color: var(--text-main);
      background: white;
      -webkit-font-smoothing: antialiased;
    }
    import { EDUCATION, EXPERIENCE } from "./resume";
    import { PROJECTS } from "./projects";

    export const generateResumeHTML = () => {
      return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Vinay Bhogal — Resume</title>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
      <style>
        :root{
          --primary:#2563eb; --muted:#6b7280; --text:#0f172a; --border:#e6edf3;
          --sidebar:#f8fafc; --accent-bg:#eff6ff;
        }
        html,body{height:100%;margin:0;padding:0}
        *{box-sizing:border-box}
        body{font-family:Inter,system-ui,Segoe UI,Roboto,Helvetica,Arial,sans-serif;color:var(--text);background:#ffffff}
        @media print{body{background:white} .container{box-shadow:none}}

        .page{max-width:210mm;margin:12mm auto;padding:0;display:flex;gap:24px;background:white}
        .sidebar{width:72mm;background:var(--sidebar);padding:22px;border-radius:8px;border:1px solid var(--border)}
        .profile{display:flex;flex-direction:column;align-items:center;text-align:center;margin-bottom:18px}
        .profile img{width:110px;height:110px;border-radius:12px;object-fit:cover;border:3px solid white;box-shadow:0 6px 18px rgba(2,6,23,0.06)}
        .name{font-size:14px;font-weight:700;color:var(--text);margin-top:10px}
        .role{font-size:12px;color:var(--primary);font-weight:600;margin-top:4px}

        .section-title{font-size:11px;font-weight:700;color:var(--text);text-transform:uppercase;letter-spacing:.08em;margin:10px 0}
        .contact a{display:block;color:var(--muted);text-decoration:none;font-size:12px;margin:6px 0}
        .skill-tags{display:flex;flex-wrap:wrap;gap:6px}
        .tag{background:white;border:1px solid var(--border);padding:6px 8px;border-radius:6px;font-size:11px;color:var(--text)}

        .main{flex:1;padding:22px;border-radius:8px;border:1px solid var(--border)}
        header{display:flex;flex-direction:column;margin-bottom:12px}
        header h1{font-size:26px;margin:0;letter-spacing:-0.01em}
        header .subtitle{font-size:13px;color:var(--muted);margin-top:6px}

        .block{margin-bottom:14px}
        .item{margin-bottom:12px}
        .item .title{font-weight:700;color:var(--text);font-size:13px}
        .meta{font-size:11px;color:var(--muted);margin-top:4px}
        .desc{font-size:12px;color:var(--muted);margin-top:8px;line-height:1.45}
        ul.bullets{padding-left:16px;margin:8px 0}
        ul.bullets li{margin-bottom:6px;font-size:12px;color:var(--muted)}

        .projects{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:12px}
        .project{padding:10px;border-radius:8px;border:1px solid var(--border);background:#fff}
        .project .tech{font-size:11px;color:var(--primary);font-weight:700;margin-bottom:6px}
      </style>
    </head>
    <body>
      <div class="page">
        <aside class="sidebar">
          <div class="profile">
            <img src="/image/VinayProfilePic.jpg" alt="Vinay Bhogal">
            <div class="name">VINAY BHOGAL</div>
            <div class="role">Aspiring Android & Flutter Full-Stack Developer</div>
          </div>

          <div class="contact">
            <div class="section-title">Contact</div>
            <a href="mailto:vbhogal5@gmail.com">vbhogal5@gmail.com</a>
            <a href="https://linkedin.com/in/vinay-bhogal-78a623319">linkedin.com/in/vinay-bhogal-78a623319</a>
            <a href="https://github.com/Vinay-ops">github.com/Vinay-ops</a>
          </div>

          <div style="margin-top:12px">
            <div class="section-title">Expertise</div>
            <div class="skill-group">
              <div style="font-size:11px;color:var(--muted);margin-bottom:6px">Languages</div>
              <div class="skill-tags">
                <span class="tag">Java</span><span class="tag">Kotlin</span><span class="tag">Dart</span><span class="tag">Python</span>
              </div>
            </div>
            <div class="skill-group" style="margin-top:8px">
              <div style="font-size:11px;color:var(--muted);margin-bottom:6px">Frameworks</div>
              <div class="skill-tags">
                <span class="tag">Flutter</span><span class="tag">Jetpack Compose</span><span class="tag">Material 3</span>
              </div>
            </div>
          </div>

          <div style="margin-top:12px">
            <div class="section-title">Languages</div>
            <div style="font-size:12px;color:var(--muted)">
              <div>English — Professional</div>
              <div>Hindi — Native</div>
              <div>Marathi — Native</div>
            </div>
          </div>
        </aside>

        <main class="main">
          <header>
            <h1>VINAY BHOGAL</h1>
            <div class="subtitle">Aspiring Android & Flutter Full-Stack Developer</div>
          </header>

          <section class="block">
            <div class="section-title">Education</div>
            ${EDUCATION.map(
              (edu) => `
              <div class="item">
                <div class="title">${edu.degree}</div>
                <div class="meta">${edu.institution} • ${edu.location} • ${edu.duration}</div>
                ${edu.description ? `<div class="desc">${edu.description}</div>` : ""}
                ${edu.achievements && edu.achievements.length > 0 ? `<ul class="bullets">${edu.achievements.map(a => `<li>${a}</li>`).join("")}</ul>` : ""}
              </div>
            `
            ).join("")}
          </section>

          ${EXPERIENCE.length > 0 ? `
          <section class="block">
            <div class="section-title">Experience</div>
            ${EXPERIENCE.map(exp => `
              <div class="item">
                <div class="title">${exp.title}</div>
                <div class="meta">${exp.company} • ${exp.location} • ${exp.duration}</div>
                <div class="desc">${exp.description}</div>
                <ul class="bullets">${exp.achievements.map(a => `<li>${a}</li>`).join("")}</ul>
              </div>
            `).join("")}
          </section>
          ` : ""}

          <section class="block">
            <div class="section-title">Key Projects</div>
            <div class="projects">
              ${PROJECTS.slice(0, 6).map(p => `
                <div class="project">
                  <div class="project-name" style="font-weight:700;font-size:13px">${p.name}</div>
                  <div class="tech">${p.tech.join(' • ')}</div>
                  <div class="desc">${p.description}</div>
                </div>
              `).join("")}
            </div>
          </section>
        </main>
      </div>
    </body>
    </html>`;
    };
    }

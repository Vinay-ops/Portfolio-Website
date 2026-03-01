import { EDUCATION, EXPERIENCE } from "./resume";

export const generateResumeHTML = () => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vinay Bhogal - Resume</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 210mm;
      margin: 0 auto;
      padding: 20mm;
      background: white;
    }
    
    @media print {
      body {
        padding: 10mm;
      }
    }
    
    .header {
      text-align: center;
      border-bottom: 3px solid #2563eb;
      padding-bottom: 15px;
      margin-bottom: 20px;
    }
    
    .header h1 {
      font-size: 32px;
      font-weight: 700;
      color: #1e293b;
      margin-bottom: 8px;
    }
    
    .header .title {
      font-size: 16px;
      color: #2563eb;
      font-weight: 600;
      margin-bottom: 10px;
    }
    
    .contact {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 15px;
      font-size: 12px;
      color: #64748b;
    }
    
    .contact-item {
      white-space: nowrap;
    }
    
    .section {
      margin: 25px 0;
    }
    
    .section-title {
      font-size: 20px;
      font-weight: 700;
      color: #1e293b;
      border-bottom: 2px solid #e2e8f0;
      padding-bottom: 8px;
      margin-bottom: 15px;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    
    .entry {
      margin-bottom: 20px;
    }
    
    .entry-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-bottom: 5px;
    }
    
    .entry-title {
      font-size: 16px;
      font-weight: 600;
      color: #1e293b;
    }
    
    .entry-duration {
      font-size: 13px;
      color: #64748b;
      font-style: italic;
    }
    
    .entry-subtitle {
      font-size: 14px;
      color: #2563eb;
      margin-bottom: 5px;
    }
    
    .entry-description {
      font-size: 13px;
      color: #475569;
      margin-bottom: 8px;
    }
    
    .entry-list {
      list-style: none;
      padding-left: 0;
    }
    
    .entry-list li {
      font-size: 13px;
      color: #475569;
      padding-left: 20px;
      position: relative;
      margin-bottom: 5px;
    }
    
    .entry-list li:before {
      content: "•";
      color: #2563eb;
      font-weight: bold;
      position: absolute;
      left: 5px;
    }
    
    .skills-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 15px;
    }
    
    .skill-category {
      margin-bottom: 10px;
    }
    
    .skill-category-title {
      font-size: 14px;
      font-weight: 600;
      color: #1e293b;
      margin-bottom: 5px;
    }
    
    .skill-tags {
      font-size: 12px;
      color: #475569;
      line-height: 1.8;
    }
    
    @page {
      size: A4;
      margin: 15mm;
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>VINAY BHOGAL</h1>
    <div class="title">Aspiring Android & Flutter Full-Stack Developer (native apps with Dart & Flutter)</div>
    <div class="contact">
      <span class="contact-item">📧 vbhogal5@gmail.com</span>
      <span class="contact-item">🔗 linkedin.com/in/vinay-bhogal-78a623319</span>
      <span class="contact-item">💻 github.com/Vinay-ops</span>
      <span class="contact-item">📸 @vinaybhogal</span>
    </div>
  </div>

  <div class="section">
    <h2 class="section-title">Education</h2>
    ${EDUCATION.map(
      (edu) => `
      <div class="entry">
        <div class="entry-header">
          <div class="entry-title">${edu.degree}</div>
          <div class="entry-duration">${edu.duration}</div>
        </div>
        <div class="entry-subtitle">${edu.institution} | ${edu.location}</div>
        ${edu.description ? `<div class="entry-description">${edu.description}</div>` : ""}
        ${
          edu.achievements && edu.achievements.length > 0
            ? `
          <ul class="entry-list">
            ${edu.achievements.map((achievement) => `<li>${achievement}</li>`).join("")}
          </ul>
        `
            : ""
        }
      </div>
    `
    ).join("")}
  </div>

  ${
    EXPERIENCE.length > 0
      ? `
  <div class="section">
    <h2 class="section-title">Work Experience</h2>
    ${EXPERIENCE.map(
      (exp) => `
      <div class="entry">
        <div class="entry-header">
          <div class="entry-title">${exp.title}</div>
          <div class="entry-duration">${exp.duration}</div>
        </div>
        <div class="entry-subtitle">${exp.company} | ${exp.location}</div>
        <div class="entry-description">${exp.description}</div>
        <ul class="entry-list">
          ${exp.achievements.map((achievement) => `<li>${achievement}</li>`).join("")}
        </ul>
      </div>
    `
    ).join("")}
  </div>
  `
      : ""
  }

  <div class="section">
    <h2 class="section-title">Technical Skills</h2>
    <div class="skills-grid">
      <div class="skill-category">
        <div class="skill-category-title">Programming Languages</div>
        <div class="skill-tags">Java, Kotlin, Python, Dart, C#</div>
      </div>
      <div class="skill-category">
        <div class="skill-category-title">Frameworks & Libraries</div>
        <div class="skill-tags">Flutter (Dart), Jetpack Compose, Material 3, Unity</div>
      </div>
      <div class="skill-category">
        <div class="skill-category-title">Databases</div>
        <div class="skill-tags">Firebase, MySQL, PostgreSQL, Room, SQLite</div>
      </div>
      <div class="skill-category">
        <div class="skill-category-title">Tools & Platforms</div>
        <div class="skill-tags">Git, Android Studio, VS Code, Unity, Groq API</div>
      </div>
    </div>
  </div>

  <div class="section">
    <h2 class="section-title">Key Projects</h2>
    
    <div class="entry">
      <div class="entry-title">Password Manager</div>
      <ul class="entry-list">
        <li>Local-first Android password manager with PIN-based access and on-device storage</li>
        <li>Add, view, copy, and delete saved credentials with a minimal, privacy-focused UI</li>
        <li>Technologies: Java, Android, SharedPreferences / Local DB</li>
      </ul>
    </div>

    <div class="entry">
      <div class="entry-title">Pay Sahayak - AI-Powered UPI Issue Resolution</div>
      <ul class="entry-list">
        <li>Created multilingual (Hindi, Marathi, English) merchant complaint management app</li>
        <li>Integrated Gemini AI for automated guidance, urgency classification, and complaint drafting</li>
        <li>Technologies: Kotlin, Jetpack Compose, Firebase, Gemini AI API</li>
      </ul>
    </div>

    <div class="entry">
      <div class="entry-title">Unity Game Development - Space Shooter 3D & Red Light Green Light</div>
      <ul class="entry-list">
        <li>Created immersive 3D games with Unity engine featuring AI opponents</li>
        <li>Implemented mobile-optimized controls, physics, and game mechanics</li>
        <li>Technologies: Unity, C#, 3D Graphics, ShaderLab</li>
      </ul>
    </div>

    <div class="entry">
      <div class="entry-title">DayLedger - Daily Habit Tracker</div>
      <ul class="entry-list">
        <li>Built modern habit tracking app with Jetpack Compose and Material 3 design</li>
        <li>Implemented streak tracking, calendar-based completion history, and MVVM architecture</li>
        <li>Technologies: Kotlin, Room Database, Coroutines, StateFlow</li>
      </ul>
    </div>
  </div>

</body>
</html>
  `;
};

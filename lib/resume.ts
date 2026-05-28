export type Education = {
  degree: string;
  institution: string;
  location: string;
  duration: string;
  description?: string;
  achievements?: string[];
};

export type Experience = {
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string;
  achievements: string[];
};

export type Contact = {
  email: string;
  location: string;
  linkedin: string;
  github: string;
};

export type SkillGroup = {
  category: string;
  values: string[];
};

export const CONTACT: Contact = {
  email: "vbhogal5@gmail.com",
  location: "Mumbai, India",
  linkedin: "linkedin.com/in/vinay-bhogal-78a623319",
  github: "github.com/Vinay-ops"
};

export const PROFESSIONAL_SUMMARY =
  "B.Tech Information Technology student at SAKEC focused on Android, Flutter, and Full Stack development. I build production-ready mobile applications like Pay Sahayak and Best Buy Clone with clean architecture, intuitive UX, and robust data layers. Actively seeking software engineering internship opportunities to solve complex real-world problems.";

export const SKILL_GROUPS: SkillGroup[] = [
  { category: "Languages", values: ["Java", "Kotlin", "Dart", "Python", "C#", "SQL"] },
  {
    category: "Frameworks",
    values: ["Jetpack Compose", "Flutter", "React", "Node.js", "MVVM", "Provider"]
  },
  {
    category: "Databases & Cloud",
    values: ["Firebase", "Room", "PostgreSQL", "MySQL", "Unity 3D"]
  },
  {
    category: "Developer Tools",
    values: ["Android Studio", "VS Code", "Git", "GitHub", "Postman", "Unity"]
  }
];

export const EDUCATION: Education[] = [
  {
    degree: "Bachelor of Technology in Information Technology",
    institution: "Shah and Anchor Kutchhi Engineering College",
    location: "Mumbai, India",
    duration: "2024 - 2028",
    description:
      "Pursuing core coursework in data structures, object-oriented programming, databases, and software engineering.",
    achievements: [
      "Building end-to-end mobile applications as project-based practical work",
      "Applying modern Android and Flutter patterns in independent projects",
      "Strengthening system design and API integration fundamentals"
    ]
  },
  {
    degree: "Higher Secondary Certificate (12th Grade)",
    institution: "Shubhamraje Engineering College",
    location: "India",
    duration: "2023 - 2024",
    description: "Completed 12th grade with focus on Science and Mathematics"
  },
  {
    degree: "Secondary School Certificate (10th Grade)",
    institution: "St Xavier's English High School",
    location: "India",
    duration: "2021 - 2022",
    description: "Completed secondary education with strong foundation in core subjects"
  }
];

export const EXPERIENCE: Experience[] = [
  {
    title: "Independent Android & Flutter Developer",
    company: "Personal Projects",
    location: "Mumbai, India",
    duration: "2023 - Present",
    description:
      "Designing and building mobile products to solve real user problems, from planning and UI implementation to data persistence and release-ready polishing.",
    achievements: [
      "Built and shipped multiple Android and Flutter applications with clean, maintainable codebases",
      "Integrated Firebase and AI services for authentication, data sync, and intelligent user workflows",
      "Implemented MVVM architecture, local databases, and state management to improve reliability and scalability"
    ]
  }
];

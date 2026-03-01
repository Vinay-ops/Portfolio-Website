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

export const EDUCATION: Education[] = [
  {
    degree: "Bachelor of Technology in Information Technology",
    institution: "Shah and Anchor Kutchhi Engineering College",
    location: "Mumbai, India",
    duration: "2024 - 2028",
    description: "Currently pursuing BTech with focus on software development and mobile technologies",
    achievements: [
      "Specializing in mobile app development and full-stack technologies",
      "Working on personal projects to build practical development skills",
      "Learning modern frameworks including Flutter, Android, and web technologies"
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

export const EXPERIENCE: Experience[] = [];

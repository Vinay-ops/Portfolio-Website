export type Project = {
  name: string;
  description: string;
  tech: string[];
  github: string;
  live?: string;
};

export const PROJECTS: Project[] = [
  {
    name: "DayLedger",
    description:
      "Modern daily habit tracker with animated calendar, streak tracking, and Material 3 design. Features 100% Jetpack Compose UI, Room persistence, and comprehensive habit management including detailed analytics and completion history.",
    tech: ["Kotlin", "Jetpack Compose", "Room", "Material 3", "MVVM", "Coroutines"],
    github: "https://github.com/Vinay-ops/DayLedger"
  },
  {
    name: "Pay Sahayak",
    description:
      "AI-powered UPI issue resolution app for small merchants. Features multilingual support (Hindi, Marathi, English), Gemini AI integration for complaint drafting, urgency classification, and actionable guidance with Firebase backend for issue tracking.",
    tech: ["Kotlin", "Jetpack Compose", "Gemini AI", "Firebase", "MVVM"],
    github: "https://github.com/Vinay-ops/AppStack_Pay-Sahayak"
  },
  {
    name: "AI Chat Pro",
    description:
      "Lightning-fast AI chat application powered by Groq's inference API with sub-second response times. Supports multiple models (Llama 3.1, Mixtral), features modern dark UI, conversation export, real-time chat, and customizable themes.",
    tech: ["Python", "CustomTkinter", "Groq API", "OpenAI SDK"],
    github: "https://github.com/Vinay-ops/AI_CHAT"
  },
  {
    name: "Space Shooter 3D",
    description:
      "Immersive mobile 3D space shooter with dynamic enemy wave spawning. Optimized for mobile with touch controls, features stunning space visuals, explosions, sound effects, and challenging gameplay across multiple levels.",
    tech: ["Unity", "C#", "3D Graphics"],
    github: "https://github.com/Vinay-ops/Space-Shooter-3D"
  },
  {
    name: "Red Light Green Light",
    description:
      "Squid Game-inspired Unity game with AI opponents. Features third-person controls, randomized light timers, death animations, and intelligent AI players that compete using similar detection and elimination rules.",
    tech: ["Unity", "C#", "AI", "ShaderLab"],
    github: "https://github.com/Vinay-ops/Red-Light-Green-Light"
  },
  {
    name: "Password Manager",
    description:
      "Secure Android password management application for storing and organizing credentials safely. Built with Java and Android Studio, focusing on local encryption and user-friendly interface for password security.",
    tech: ["Java", "Android Studio", "SQLite"],
    github: "https://github.com/Vinay-ops/Password_Manager"
  }
];

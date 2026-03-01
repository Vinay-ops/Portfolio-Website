export type Project = {
  name: string;
  description: string;
  tech: string[];
  github: string;
  live?: string;
};

export const PROJECTS: Project[] = [
  {
    name: "Password Manager",
    description:
      "A simple, local-first Android Password Manager app with PIN-based login for securely storing and managing credentials. Focuses on privacy by keeping all data on-device and providing a clean, minimal UI for adding, viewing, copying and deleting saved passwords.",
    tech: ["Java", "Android", "XML", "SharedPreferences", "Local DB"],
    github: "https://github.com/Vinay-ops/Password_Manager"
  },
  {
    name: "Pay Sahayak",
    description:
      "AI-powered UPI issue resolution app for small merchants. Features multilingual support (Hindi, Marathi, English), Gemini AI integration for complaint drafting, urgency classification, and actionable guidance with Firebase backend for issue tracking.",
    tech: ["Kotlin", "Jetpack Compose", "Gemini AI", "Firebase", "MVVM"],
    github: "https://github.com/Vinay-ops/AppStack_Pay-Sahayak"
  },
  {
    name: "Space Shooter 3D",
    description:
      "Immersive mobile 3D space shooter with dynamic enemy wave spawning. Optimized for mobile with touch controls, features space visuals, explosions, sound effects, and multiple levels.",
    tech: ["Unity", "C#", "3D Graphics"],
    github: "https://github.com/Vinay-ops/Space-Shooter-3D"
  },
  {
    name: "Red Light Green Light",
    description:
      "Squid Game-inspired Unity game with AI opponents and randomized light timers. Includes third-person controls, death animations, and competitive AI players.",
    tech: ["Unity", "C#", "AI", "ShaderLab"],
    github: "https://github.com/Vinay-ops/Red-Light-Green-Light"
  },
  {
    name: "DayLedger",
    description:
      "Modern daily habit tracker with animated calendar, streak tracking, and Material 3 design. Features Jetpack Compose UI, Room persistence, and comprehensive habit management including analytics and completion history.",
    tech: ["Kotlin", "Jetpack Compose", "Room", "Material 3", "MVVM", "Coroutines"],
    github: "https://github.com/Vinay-ops/DayLedger"
  }
];

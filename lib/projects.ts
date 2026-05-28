export type Project = {
  name: string;
  description: string;
  tech: string[];
  github: string;
  live?: string;
};

export const PROJECTS: Project[] = [
  {
    name: "Pay Sahayak",
    description:
      "AI-powered UPI issue resolution app for small merchants. Features multilingual support (Hindi, Marathi, English), Gemini AI integration for complaint drafting, urgency classification, and actionable guidance with Firebase backend for issue tracking.",
    tech: ["Kotlin", "Jetpack Compose", "Gemini AI", "Firebase", "MVVM"],
    github: "https://github.com/Vinay-ops/AppStack_Pay-Sahayak"
  },
  {
    name: "Best Buy Clone",
    description:
      "A mobile e‑commerce app built with Flutter and Dart showcasing product listings, search, cart interactions, and mobile-friendly state management—implemented as a Best Buy clone for mobile.",
    tech: ["Flutter", "Dart", "Provider", "REST API"],
    github: "https://github.com/Vinay-ops/Best_Buy_Project"
  },
  {
    name: "Password Manager",
    description:
      "A local-first Android app with PIN-based login for securely managing credentials. Focuses on privacy by keeping all data on-device with a clean, minimal UI.",
    tech: ["Java", "Android", "Room", "SharedPreferences"],
    github: "https://github.com/Vinay-ops/Password_Manager"
  },
  {
    name: "Space Shooter 3D",
    description:
      "Immersive mobile 3D space shooter with dynamic enemy wave spawning. Optimized for mobile with touch controls, featuring high-quality space visuals and explosions.",
    tech: ["Unity", "C#", "3D Graphics", "Mobile Dev"],
    github: "https://github.com/Vinay-ops/Space-Shooter-3D"
  },
  {
    name: "Red Light Green Light",
    description:
      "Squid Game-inspired game with AI opponents and randomized light timers. Includes third-person controls, death animations, and competitive AI players.",
    tech: ["Unity", "C#", "AI", "ShaderLab"],
    github: "https://github.com/Vinay-ops/Red-Light-Green-Light"
  }
];

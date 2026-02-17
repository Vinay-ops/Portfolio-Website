export type Project = {
  name: string;
  description: string;
  tech: string[];
  github: string;
  live?: string;
};

export const PROJECTS: Project[] = [
  {
    name: "Red Light Green Light",
    description:
      "An interactive game project. See the repository for implementation details and how to run it.",
    tech: ["Unity", "C#"],
    github: "https://github.com/Vinay-ops/Red-Light-Green-Light",
    live: ""
  },
  {
    name: "Password Manager",
    description:
      "A secure password management application. Check the repo for features and setup instructions.",
    tech: ["Android Studio", "Java"],
    github: "https://github.com/Vinay-ops/Password_Manager",
    live: ""
  },
  {
    name: "AppStack Pay-Sahayak",
    description:
      "Payment helper app under the AppStack umbrella. Refer to the repository for architecture and usage.",
    tech: ["Android Studio", "Kotlin", "Jetpack Compose"],
    github: "https://github.com/Vinay-ops/AppStack_Pay-Sahayak",
    live: ""
  }
];


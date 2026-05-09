import Section from "@/components/section";
import SectionHeading from "@/components/section-heading";

type SkillCategory = {
  label: string;
  items: string[];
};

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    label: "Languages",
    items: ["Java", "Kotlin", "Python", "Dart", "C#"]
  },
  {
    label: "Frameworks",
    items: ["Flutter", "Jetpack Compose", "Material 3", "Unity"]
  },
  {
    label: "Databases & Cloud",
    items: ["Firebase", "SQLite", "Room", "PostgreSQL", "MySQL"]
  },
  {
    label: "Tools & Core",
    items: ["Git", "Android Studio", "VS Code", "AI APIs", "MVVM"]
  }
];

export default function Skills() {
  return (
    <Section id="skills">
      <div className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)] md:items-start">
        <SectionHeading
          eyebrow="Expertise"
          title="Modern Stack, Native Performance"
          subtitle="Specializing in Android and Flutter development with a deep focus on clean architecture, AI integration, and robust data persistence."
        />
        <div className="grid w-full gap-5 sm:grid-cols-2">
          {SKILL_CATEGORIES.map((category) => (
            <article
              key={category.label}
              className="group rounded-2xl border border-slate-800/50 bg-slate-950/40 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent-blue/40 hover:bg-slate-900/40 hover:shadow-[0_0_20px_rgba(37,99,235,0.1)]"
            >
              <h3 className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-500 transition-colors group-hover:text-accent-blue/80">
                {category.label}
              </h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-slate-700/50 bg-slate-900/30 px-3 py-1.5 text-[11px] font-medium text-slate-300 transition-all duration-300 group-hover:border-slate-600 group-hover:text-slate-100"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}


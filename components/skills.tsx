import Section from "@/components/section";
import SectionHeading from "@/components/section-heading";

type SkillCategory = {
  label: string;
  items: string[];
};

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    label: "Programming",
    items: ["Java", "Kotlin", "Python", "Dart"]
  },
  {
    label: "Frameworks",
    items: ["Flutter"]
  },
  {
    label: "Databases",
    items: ["Firebase", "MySQL", "PostgreSQL"]
  },
  {
    label: "Tools",
    items: ["Git", "VS Code", "Android Studio"]
  }
];

export default function Skills() {
  return (
    <Section id="skills">
      <div className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)] md:items-start">
        <SectionHeading
          eyebrow="Skills"
          title="A Stack Built For Shipping"
          subtitle="Mobile-first engineering with a backend mindset. Focused on robust delivery, observability, and experiences that feel tightly tuned."
        />
        <div className="grid w-full gap-5 sm:grid-cols-2">
          {SKILL_CATEGORIES.map((category) => (
            <article
              key={category.label}
              className="group rounded-2xl border border-slate-800/70 bg-slate-950/40 p-5 shadow-[0_0_0_1px_rgba(15,23,42,0.9)] transition-transform duration-200 hover:-translate-y-1 hover:border-accent-blue/70 hover:shadow-glow"
            >
              <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                {category.label}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-slate-700/80 bg-slate-900/60 px-3 py-1 text-xs font-medium text-slate-100 transition-colors group-hover:border-accent-blue/80"
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


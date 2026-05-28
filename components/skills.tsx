import Section from "@/components/section";
import SectionHeading from "@/components/section-heading";
import { SKILL_GROUPS } from "@/lib/resume";

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
          {SKILL_GROUPS.map((group) => (
            <article
              key={group.category}
              className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-accent-blue/50 hover:shadow-md dark:border-slate-800/70 dark:bg-slate-950/40 dark:shadow-[0_0_0_1px_rgba(15,23,42,0.9)] dark:hover:border-accent-blue/70 dark:hover:shadow-glow"
            >
              <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400 dark:text-slate-500">
                {group.category}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.values.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600 transition-colors group-hover:border-accent-blue/50 dark:border-slate-700/80 dark:bg-slate-900/60 dark:text-slate-100 dark:group-hover:border-accent-blue/80"
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

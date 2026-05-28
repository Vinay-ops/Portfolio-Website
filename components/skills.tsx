import Section from "@/components/section";
import SectionHeading from "@/components/section-heading";
import { SKILL_GROUPS } from "@/lib/resume";

export default function Skills() {
  return (
    <Section id="skills">
      <div className="grid gap-12">
        <SectionHeading
          eyebrow="Tech Stack"
          title="Skills & Learning Path"
          subtitle="A comprehensive toolkit focused on mobile-first architecture and full-stack systems."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_GROUPS.map((group) => (
            <article
              key={group.category}
              className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent-blue/50 hover:shadow-md dark:border-slate-800/70 dark:bg-slate-900/40 dark:shadow-[0_0_0_1px_rgba(15,23,42,0.9)] dark:hover:border-accent-blue/70 dark:hover:shadow-glow"
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
                  {group.category}
                </h3>
                <div className="h-2 w-2 rounded-full bg-accent-blue/40" />
              </div>
              <div className="flex flex-wrap gap-2">
                {group.values.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-lg border border-slate-100 bg-slate-50/50 px-3 py-2 transition-colors group-hover:border-accent-blue/20 dark:border-slate-800 dark:bg-slate-900/50"
                  >
                    <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}

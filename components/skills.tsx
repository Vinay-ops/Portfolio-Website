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
          subtitle="A comprehensive toolkit focused on mobile-first architecture and Android development."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_GROUPS.map((group, index) => {
            const colors = ["bg-neo-yellow", "bg-neo-blue", "bg-neo-pink", "bg-neo-green", "bg-neo-purple", "bg-neo-orange"];
            return (
              <article
                key={group.category}
                className="neo-card flex flex-col border-4 border-neo-black bg-neo-white p-6 shadow-neo-md dark:border-neo-white dark:bg-neo-dark-card dark:shadow-neo-dark-md"
              >
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="text-sm font-black uppercase tracking-[0.3em] text-neo-black dark:text-neo-white">
                    {group.category}
                  </h3>
                  <div className={`h-6 w-6 border-3 border-neo-black ${colors[index % colors.length]} dark:border-neo-white`}></div>
                </div>
                <div className="flex flex-wrap gap-3">
                  {group.values.map((item, i) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 border-3 border-neo-black bg-neo-white px-4 py-3 shadow-neo-sm dark:border-neo-white dark:bg-neo-dark-card dark:shadow-neo-dark-sm"
                    >
                      <span className="text-sm font-black text-neo-black dark:text-neo-white">{item}</span>
                    </div>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

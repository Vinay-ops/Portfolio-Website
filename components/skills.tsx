import Section from "@/components/section";
import SectionHeading from "@/components/section-heading";
import { SKILL_GROUPS } from "@/lib/resume";

export default function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        title="Core Skills"
        subtitle="A comprehensive toolkit focused on modern standards and scalability."
        centered
      />
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {SKILL_GROUPS.map((group) => (
          <article
            key={group.category}
            className="rounded-xl bg-white p-6 text-center shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <p className="text-base font-bold text-blue-700">
              {group.category.split(" ")[0]}
            </p>
            <p className="mt-4 text-sm font-semibold text-slate-900">
              {group.category}
            </p>
            <p className="mt-2 text-xs leading-5 text-slate-500">
              {group.values.slice(0, 4).join(", ")}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}

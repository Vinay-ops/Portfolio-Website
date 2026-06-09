import Section from "@/components/section";
import SectionHeading from "@/components/section-heading";
import { EDUCATION, EXPERIENCE, PROFESSIONAL_SUMMARY } from "@/lib/resume";
import { PROJECTS } from "@/lib/projects";

export default function About() {
  const primaryEducation = EDUCATION[0];
  const primaryExperience = EXPERIENCE[0];

  return (
    <Section id="about">
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <SectionHeading title="About Me" />
          <p className="mt-5 text-[15px] leading-7 text-slate-600">
            {PROFESSIONAL_SUMMARY}
          </p>
          <p className="mt-4 text-[15px] leading-7 text-slate-600">
            I specialize in Android development and full stack systems where the
            details matter. From designing APIs and data models to tuning
            rendering on low-end devices, I focus on the invisible layers that
            make products feel fast, stable, and considered.
          </p>
          <div className="mt-8 flex gap-14">
            <div>
              <p className="text-4xl font-bold text-blue-700">{PROJECTS.length}+</p>
              <p className="mt-1 text-xs font-semibold tracking-wider text-slate-500">
                PROJECTS COMPLETED
              </p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-700">2+</p>
              <p className="mt-1 text-xs font-semibold tracking-wider text-slate-500">
                YEARS BUILDING
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-5">
          {primaryEducation && (
            <article className="rounded-xl bg-white px-6 py-5 shadow-sm">
              <p className="text-sm font-semibold text-slate-900">
                {primaryEducation.degree}
              </p>
              <p className="mt-1 text-sm text-slate-500">
                {primaryEducation.institution}, {primaryEducation.duration}
              </p>
            </article>
          )}
          {primaryExperience && (
            <article className="rounded-xl bg-white px-6 py-5 shadow-sm">
              <p className="text-sm font-semibold text-slate-900">
                {primaryExperience.title}
              </p>
              <p className="mt-1 text-sm text-slate-500">
                {primaryExperience.company}, {primaryExperience.duration}
              </p>
            </article>
          )}
        </div>
      </div>
    </Section>
  );
}

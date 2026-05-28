import Section from "@/components/section";
import SectionHeading from "@/components/section-heading";
import { PROJECTS } from "@/lib/projects";

export default function About() {
  return (
    <Section id="about">
      <div className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)] md:items-start">
        <SectionHeading
          eyebrow="About"
          title="I Design Software That Feels Invisible"
          subtitle="Engineering should disappear behind the experience. I combine mobile, backend, and product thinking to ship systems that are fast, stable, and quietly elegant."
        />
        <div className="space-y-6 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
          <p>
            I specialise in Android development and full stack systems where
            the details matter. From designing APIs and data models to tuning
            rendering on low-end devices, I focus on the invisible layers that
            make products feel fast, stable, and considered.
          </p>
          <p>
            Working end-to-end means I can collaborate with teams across
            product, design, and infrastructure, align on constraints early, and
            ship solutions that scale without sacrificing experience.
          </p>
          <div className="pt-4 flex gap-12">
            <div>
              <p className="text-3xl font-bold text-accent-blue">{PROJECTS.length}+</p>
              <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
                Projects
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold text-accent-blue">2+</p>
              <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
                Years
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

import Section from "@/components/section";
import SectionHeading from "@/components/section-heading";
import { PROJECTS } from "@/lib/projects";

export default function Projects() {
  return (
    <Section id="projects">
      <div className="grid gap-10">
        <SectionHeading
          eyebrow="Projects"
          title="Selected Work"
          subtitle="A sample of systems and products that balance strong architecture with considered interaction design."
        />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {PROJECTS.map((project) => (
            <article
              key={project.name}
              className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-accent-blue/50 hover:shadow-md dark:border-slate-800/70 dark:bg-slate-950/40 dark:shadow-[0_0_0_1px_rgba(15,23,42,0.9)] dark:hover:border-accent-blue/70 dark:hover:shadow-glow"
            >
              <div>
                <h3 className="text-lg font-semibold tracking-tight text-slate-900 dark:text-slate-50">
                  {project.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                  {project.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600 dark:border-slate-700/80 dark:bg-slate-900/70 dark:text-slate-100"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600 transition-colors hover:border-accent-blue/70 hover:text-slate-900 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-100 dark:hover:text-white"
                >
                  GitHub
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-accent-blue/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-950 shadow-sm transition-transform hover:-translate-y-0.5 hover:bg-sky-400 dark:shadow-glow"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}

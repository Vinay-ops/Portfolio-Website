import Section from "@/components/section";
import SectionHeading from "@/components/section-heading";
import { PROJECTS } from "@/lib/projects";

export default function Projects() {
  return (
    <Section id="projects">
      <div className="grid gap-12">
        <SectionHeading
          eyebrow="GitHub Portfolio"
          title="Real Projects"
          subtitle="A selection of work spanning mobile applications, full-stack systems, and game development."
        />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <article
              key={project.name}
              className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent-blue/50 hover:shadow-md dark:border-slate-800/70 dark:bg-slate-900/40 dark:shadow-[0_0_0_1px_rgba(15,23,42,0.9)] dark:hover:border-accent-blue/70 dark:hover:shadow-glow"
            >
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex gap-2">
                    {project.live && (
                      <span className="flex h-2 w-2 rounded-full bg-emerald-500" />
                    )}
                  </div>
                </div>
                <h3 className="text-lg font-bold tracking-tight text-slate-900 dark:text-slate-50">
                  {project.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-8">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-xs font-bold uppercase tracking-widest text-slate-600 transition-colors hover:border-accent-blue/70 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 dark:hover:text-white"
                >
                  View on GitHub
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}

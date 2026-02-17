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
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {PROJECTS.map((project) => (
            <article
              key={project.name}
              className="group flex flex-col justify-between rounded-2xl border border-slate-800/70 bg-slate-950/40 p-6 shadow-[0_0_0_1px_rgba(15,23,42,0.9)] transition-transform duration-200 hover:-translate-y-1 hover:border-accent-blue/70 hover:shadow-glow"
            >
              <div>
                <h3 className="text-lg font-semibold tracking-tight text-slate-50">
                  {project.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  {project.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-slate-700/80 bg-slate-900/70 px-3 py-1 text-xs font-medium text-slate-100"
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
                  className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-100 transition-colors hover:border-accent-blue/70 hover:text-white"
                >
                  GitHub
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-accent-blue/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-950 shadow-glow transition-transform hover:-translate-y-0.5 hover:bg-sky-400"
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


import Section from "@/components/section";
import SectionHeading from "@/components/section-heading";
import { PROJECTS } from "@/lib/projects";

export default function Projects() {
  return (
    <Section id="projects">
      <SectionHeading
        title="Selected Projects"
        subtitle="A collection of work spanning mobile apps, AI integration, and game development."
      />
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {PROJECTS.slice(0, 4).map((project) => (
          <article
            key={project.name}
            className="overflow-hidden rounded-xl bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="flex h-48 items-center justify-center bg-gradient-to-br from-blue-50 to-slate-100">
              <p className="px-6 text-center text-lg font-semibold text-slate-700">
                {project.name}
              </p>
            </div>
            <div className="p-6">
              <div className="mb-4 flex flex-wrap gap-2">
                {project.tech.slice(0, 4).map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-semibold text-slate-900">{project.name}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {project.description}
              </p>
              <div className="mt-4 flex gap-5 text-sm font-medium text-blue-700">
                {project.live && (
                  <a href={project.live} target="_blank" rel="noreferrer">
                    Live Demo
                  </a>
                )}
                <a href={project.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

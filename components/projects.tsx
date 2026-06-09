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
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, index) => {
            const colors = ["bg-neo-yellow", "bg-neo-blue", "bg-neo-pink", "bg-neo-green", "bg-neo-purple", "bg-neo-orange"];
            return (
              <article
                key={project.name}
                className="neo-card flex flex-col justify-between border-4 border-neo-black bg-neo-white p-6 shadow-neo-md dark:border-neo-white dark:bg-neo-dark-card dark:shadow-neo-dark-md"
              >
                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <div className={`inline-block border-3 border-neo-black ${colors[index % colors.length]} px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-neo-black shadow-neo-sm dark:border-neo-white`}>
                      {project.tech[0] || "PROJECT"}
                    </div>
                    {project.live && (
                      <div className="flex h-4 w-4 items-center justify-center">
                        <div className="h-3 w-3 rounded-full bg-neo-green border-2 border-neo-black dark:border-neo-white"></div>
                      </div>
                    )}
                  </div>
                  <h3 className="text-xl font-black tracking-tight text-neo-black dark:text-neo-white">
                    {project.name}
                  </h3>
                  <p className="mt-4 text-sm font-bold text-neo-black dark:text-neo-white">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((item, i) => (
                      <span
                        key={item}
                        className="inline-block border-2 border-neo-black bg-neo-white px-2 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-neo-black dark:border-neo-white dark:bg-neo-dark-card dark:text-neo-white"
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
                    className="neo-btn flex w-full items-center justify-center border-4 border-neo-black bg-neo-yellow px-6 py-4 text-xs font-black uppercase tracking-[0.3em] text-neo-black shadow-neo-sm dark:border-neo-white"
                  >
                    View on GitHub →
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

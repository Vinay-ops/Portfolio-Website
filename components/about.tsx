import Section from "@/components/section";
import SectionHeading from "@/components/section-heading";
import { PROJECTS } from "@/lib/projects";

export default function About() {
  return (
    <Section id="about">
      <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
        <div className="relative">
          <SectionHeading
            eyebrow="About Me"
            title="Turning curiosity into code"
          />
          <div className="mt-8 space-y-6 text-base font-bold text-neo-black dark:text-neo-white">
            <p>
              I'm Vinay — an Information Technology student from Mumbai working towards becoming a high-impact Software Engineer. I'm sharpening my skills in Android, Flutter, and Full Stack development while building real-world projects.
            </p>
            <p>
              I specialize in building mobile products where details matter. From designing scalable APIs to tuning rendering on low-end devices, I focus on the layers that make products feel fast and stable.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              {["Android", "Full Stack", "Mobile UX", "System Design", "Firebase"].map((tag, index) => {
                const colors = ["bg-neo-yellow", "bg-neo-blue", "bg-neo-pink", "bg-neo-green", "bg-neo-purple"];
                return (
                  <span key={tag} className={`inline-block border-4 border-neo-black ${colors[index % colors.length]} px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-neo-black shadow-neo-sm dark:border-neo-white`}>
                    {tag}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
        
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-4">
            <div className="neo-card border-4 border-neo-black bg-neo-white p-6 shadow-neo-md dark:border-neo-white dark:bg-neo-dark-card dark:shadow-neo-dark-md h-full flex flex-col justify-center">
              <p className="text-5xl font-black text-neo-pink">{PROJECTS.length}</p>
              <p className="mt-2 text-xs font-black uppercase tracking-[0.3em] text-neo-black dark:text-neo-white">GitHub Repos</p>
            </div>
            <div className="neo-card border-4 border-neo-black bg-neo-white p-6 shadow-neo-md dark:border-neo-white dark:bg-neo-dark-card dark:shadow-neo-dark-md h-full flex flex-col justify-center">
              <p className="text-5xl font-black text-neo-blue">2+</p>
              <p className="mt-2 text-xs font-black uppercase tracking-[0.3em] text-neo-black dark:text-neo-white">Years Experience</p>
            </div>
          </div>
          <div className="space-y-4 sm:mt-0">
            <div className="neo-card border-4 border-neo-black bg-neo-green p-6 shadow-neo-md dark:border-neo-white dark:shadow-neo-dark-md h-full flex flex-col justify-center">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-neo-black">Location</p>
              <p className="mt-2 text-lg font-black text-neo-black">Thane, Maharashtra</p>
            </div>
            <div className="neo-card border-4 border-neo-black bg-neo-yellow p-6 shadow-neo-md dark:border-neo-white dark:shadow-neo-dark-md h-full flex flex-col justify-center">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-neo-black">Status</p>
              <p className="mt-2 text-lg font-black text-neo-black">🟢 Open to roles</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

import Section from "@/components/section";
import SectionHeading from "@/components/section-heading";
import { PROJECTS } from "@/lib/projects";

export default function About() {
  return (
    <Section id="about">
      <div className="grid gap-16 md:grid-cols-2 md:items-center">
        <div className="relative">
          <SectionHeading
            eyebrow="About Me"
            title="Turning curiosity into code"
          />
          <div className="mt-8 space-y-6 text-base leading-relaxed text-slate-500 dark:text-slate-400">
            <p>
              I'm Vinay — an Information Technology student from Mumbai working towards becoming a high-impact Software Engineer. I'm sharpening my skills in Android, Flutter, and Full Stack development while building real-world projects.
            </p>
            <p>
              I specialize in building mobile products where details matter. From designing scalable APIs to tuning rendering on low-end devices, I focus on the layers that make products feel fast and stable.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              {["Android", "Full Stack", "Mobile UX", "System Design", "Firebase"].map((tag) => (
                <span key={tag} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-bold text-slate-500 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/50">
              <p className="text-3xl font-bold text-accent-blue">{PROJECTS.length}</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-widest text-slate-400">GitHub Repos</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/50">
              <p className="text-3xl font-bold text-accent-blue">2+</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-widest text-slate-400">Years Experience</p>
            </div>
          </div>
          <div className="mt-8 space-y-4 sm:mt-0">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/50">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Location</p>
              <p className="mt-2 text-sm font-semibold text-slate-700 dark:text-slate-200">Mumbai, India</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/50">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Status</p>
              <p className="mt-2 text-sm font-semibold text-emerald-500">🟢 Open to roles</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

import Section from "@/components/section";
import SectionHeading from "@/components/section-heading";

const GITHUB_USERNAME = "Vinay-ops";

export default function GithubActivity() {
  return (
    <Section id="github">
      <div className="grid gap-10">
        <SectionHeading
          eyebrow="GitHub"
          title="Consistent, Deliberate Shipping"
          subtitle="A snapshot of recent activity. I value steady progress, maintainable systems, and thoughtful collaboration over noisy commits."
        />
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800/70 dark:bg-slate-900/40 dark:shadow-[0_0_0_1px_rgba(15,23,42,0.9)]">
          <div className="mb-4 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
            <span className="uppercase tracking-[0.2em]">GitHub streak</span>
            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-accent-blue hover:text-sky-400"
            >
              @{GITHUB_USERNAME}
            </a>
          </div>
          <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/50">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-accent-blue/5 via-transparent to-sky-500/5 dark:from-accent-blue/10 dark:to-sky-500/10" />
            <div className="relative">
              <img
                src={`https://github-readme-streak-stats.herokuapp.com?user=${GITHUB_USERNAME}&theme=highcontrast&hide_border=true&background=0d1117&fire=38bdf8&ring=38bdf8&currStreakLabel=ffffff&sideNums=9ca3af&sideLabels=6b7280`}
                alt="GitHub contribution streak"
                className="block w-full dark:opacity-100 opacity-90"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}


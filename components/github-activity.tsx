import Section from "@/components/section";
import SectionHeading from "@/components/section-heading";

const GITHUB_USERNAME = "Vinay-ops";

export default function GithubActivity() {
  return (
    <Section id="github">
      <div className="grid gap-12">
        <SectionHeading
          eyebrow="GitHub"
          title="Consistent, Deliberate Shipping"
          subtitle="A snapshot of recent activity. I value steady progress, maintainable systems, and thoughtful collaboration over noisy commits."
        />
        <div className="neo-card overflow-hidden border-4 border-neo-black bg-neo-white p-6 shadow-neo-md dark:border-neo-white dark:bg-neo-dark-card dark:shadow-neo-dark-md">
          <div className="mb-6 flex items-center justify-between text-xs font-black text-neo-black dark:text-neo-white">
            <span className="uppercase tracking-[0.3em]">GitHub streak</span>
            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noreferrer"
              className="font-black text-neo-pink hover:text-neo-blue transition-colors dark:text-neo-blue dark:hover:text-neo-green"
            >
              @{GITHUB_USERNAME}
            </a>
          </div>
          <div className="overflow-hidden border-4 border-neo-black bg-neo-white dark:border-neo-white dark:bg-neo-dark-card">
            <div className="relative">
              <img
                src={`https://github-readme-streak-stats.herokuapp.com?user=${GITHUB_USERNAME}&theme=highcontrast&hide_border=true&background=f8f8f8&fire=FF6B6B&ring=4ECDC4&currStreakLabel=111111&sideNums=111111&sideLabels=111111&dates=111111`}
                alt="GitHub contribution streak"
                className="block w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

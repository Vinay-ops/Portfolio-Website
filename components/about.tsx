import Image from "next/image";
import Section from "@/components/section";
import SectionHeading from "@/components/section-heading";
import { PROJECTS } from "@/lib/projects";

const STAT_CARDS = [
  {
    value: String(PROJECTS.length),
    label: "GitHub Repos",
    valueClass: "text-neo-pink",
    cardClass: "bg-neo-white dark:bg-neo-dark-card"
  },
  {
    value: "2+",
    label: "Years Experience",
    valueClass: "text-neo-blue",
    cardClass: "bg-neo-white dark:bg-neo-dark-card"
  },
  {
    value: "Thane",
    label: "Location",
    valueClass: "text-neo-black dark:text-neo-white",
    cardClass: "bg-neo-green"
  },
  {
    value: "🟢 Open",
    label: "Status",
    valueClass: "text-neo-black",
    cardClass: "bg-neo-yellow"
  }
];

export default function About() {
  return (
    <Section id="about">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
        <div className="relative">
          <SectionHeading
            eyebrow="About Me"
            title="Turning curiosity into code"
          />
          <div className="mt-8 space-y-6 text-base font-bold text-neo-black dark:text-neo-white">
            <p>
              I&apos;m Vinay — an Information Technology student from Mumbai working
              towards becoming a high-impact Software Engineer. I&apos;m sharpening my
              skills in Android and Flutter development while building real-world
              projects.
            </p>
            <p>
              I specialize in building mobile products where details matter. From
              designing scalable APIs to tuning rendering on low-end devices, I focus
              on the layers that make products feel fast and stable.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              {["Android", "Flutter", "Mobile UX", "Kotlin", "Firebase"].map(
                (tag, index) => {
                  const colors = [
                    "bg-neo-yellow",
                    "bg-neo-blue",
                    "bg-neo-pink",
                    "bg-neo-green",
                    "bg-neo-purple"
                  ];
                  return (
                    <span
                      key={tag}
                      className={`inline-block border-4 border-neo-black ${colors[index % colors.length]} px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-neo-black shadow-neo-sm dark:border-neo-white`}
                    >
                      {tag}
                    </span>
                  );
                }
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 lg:items-end">
          <div className="w-full max-w-[220px] border-4 border-neo-black bg-neo-white p-2 shadow-neo-md dark:border-neo-white dark:bg-neo-dark-card dark:shadow-neo-dark-md">
            <div className="relative aspect-[3/4] w-full overflow-hidden border-4 border-neo-black dark:border-neo-white">
              <Image
                src="/image/VinayProfilePic.jpg"
                alt="Vinay Bhogal"
                fill
                className="object-cover"
                sizes="220px"
                priority
              />
            </div>
            <p className="mt-2 text-center text-xs font-black uppercase tracking-[0.2em] text-neo-black dark:text-neo-white">
              Vinay Bhogal
            </p>
          </div>

          <div className="grid w-full max-w-sm grid-cols-2 gap-3">
            {STAT_CARDS.map((card) => (
              <div
                key={card.label}
                className={`neo-card flex flex-col justify-center border-4 border-neo-black p-3 shadow-neo-sm dark:border-neo-white dark:shadow-neo-dark-sm ${card.cardClass}`}
              >
                <p className={`text-2xl font-black leading-none ${card.valueClass}`}>
                  {card.value}
                </p>
                <p className="mt-1 text-[10px] font-black uppercase tracking-[0.2em] text-neo-black dark:text-neo-white">
                  {card.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

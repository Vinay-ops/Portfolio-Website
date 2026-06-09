import Image from "next/image";
import Section from "@/components/section";
import SectionHeading from "@/components/section-heading";
import { CONTACT, PROFESSIONAL_SUMMARY } from "@/lib/resume";
import { PROJECTS } from "@/lib/projects";

const HIGHLIGHTS = [
  "Android & Flutter apps with clean architecture and polished UI",
  "Firebase, Room, and API integrations for real-world products",
  "Active on LeetCode — sharpening problem-solving alongside builds"
];

const STAT_CARDS = [
  {
    value: String(PROJECTS.length),
    label: "Projects",
    valueClass: "text-neo-pink",
    cardClass: "bg-neo-white dark:bg-neo-dark-card"
  },
  {
    value: "2+",
    label: "Years Building",
    valueClass: "text-neo-blue",
    cardClass: "bg-neo-white dark:bg-neo-dark-card"
  },
  {
    value: "2028",
    label: "Graduating",
    valueClass: "text-neo-black dark:text-neo-white",
    cardClass: "bg-neo-green"
  },
  {
    value: "Open",
    label: "To Roles",
    valueClass: "text-neo-black",
    cardClass: "bg-neo-yellow"
  }
];

export default function About() {
  return (
    <Section id="about">
      <div className="grid gap-10 lg:grid-cols-[240px_minmax(0,1fr)] lg:items-start lg:gap-12">
        <aside className="mx-auto flex w-full max-w-[240px] flex-col gap-4 lg:mx-0">
          <div className="border-4 border-neo-black bg-neo-white p-2 shadow-neo-md dark:border-neo-white dark:bg-neo-dark-card dark:shadow-neo-dark-md">
            <div className="relative aspect-[3/4] w-full overflow-hidden border-4 border-neo-black dark:border-neo-white">
              <Image
                src="/image/VinayProfilePic.jpg"
                alt="Vinay Bhogal"
                fill
                className="object-cover"
                sizes="240px"
                priority
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {STAT_CARDS.map((card) => (
              <div
                key={card.label}
                className={`neo-card flex min-h-[72px] flex-col justify-center border-4 border-neo-black p-3 shadow-neo-sm dark:border-neo-white dark:shadow-neo-dark-sm ${card.cardClass}`}
              >
                <p className={`text-xl font-black leading-none ${card.valueClass}`}>
                  {card.value}
                </p>
                <p className="mt-1 text-[9px] font-black uppercase tracking-[0.18em] text-neo-black dark:text-neo-white">
                  {card.label}
                </p>
              </div>
            ))}
          </div>
        </aside>

        <div className="min-w-0">
          <SectionHeading
            eyebrow="About Me"
            title="Turning curiosity into code"
          />

          <div className="mt-8 space-y-5 text-base font-bold leading-relaxed text-neo-black dark:text-neo-white">
            <p>{PROFESSIONAL_SUMMARY}</p>
            <p>
              Based in {CONTACT.location}, I enjoy building mobile products end to end —
              from UI and state management to databases, APIs, and release-ready polish.
            </p>

            <ul className="space-y-3 border-l-4 border-neo-black pl-5 dark:border-neo-white">
              {HIGHLIGHTS.map((item) => (
                <li key={item} className="text-sm sm:text-base">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}

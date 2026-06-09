import Image from "next/image";
import Link from "next/link";
import Section from "@/components/section";
import SectionHeading from "@/components/section-heading";
import {
  CONTACT,
  EDUCATION,
  PROFESSIONAL_SUMMARY,
  SOCIAL_LINKS
} from "@/lib/resume";
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
  const primaryEducation = EDUCATION[0];

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
            <div className="mt-3 space-y-1 text-center">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-neo-black dark:text-neo-white">
                Vinay Bhogal
              </p>
              <p className="text-xs font-bold text-neo-black/70 dark:text-neo-white/70">
                {CONTACT.location}
              </p>
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

            {primaryEducation && (
              <div className="border-4 border-neo-black bg-neo-blue px-5 py-4 shadow-neo-sm dark:border-neo-white dark:shadow-neo-dark-sm">
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-neo-black">
                  Education
                </p>
                <p className="mt-2 text-sm font-black text-neo-black sm:text-base">
                  {primaryEducation.degree}
                </p>
                <p className="mt-1 text-sm text-neo-black/80">
                  {primaryEducation.institution} · {primaryEducation.duration}
                </p>
              </div>
            )}

            <div className="flex flex-wrap gap-3 pt-1">
              {["Android", "Flutter", "Kotlin", "Firebase", "LeetCode"].map(
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
                      className={`inline-block border-4 border-neo-black ${colors[index % colors.length]} px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-neo-black shadow-neo-sm dark:border-neo-white sm:px-4 sm:py-2 sm:text-xs`}
                    >
                      {tag}
                    </span>
                  );
                }
              )}
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              {SOCIAL_LINKS.map((link, index) => {
                const colors = [
                  "bg-neo-yellow",
                  "bg-neo-blue",
                  "bg-neo-pink"
                ];
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`neo-btn inline-flex items-center gap-2 border-4 border-neo-black ${colors[index % colors.length]} px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-neo-black shadow-neo-sm dark:border-neo-white sm:text-xs`}
                  >
                    {link.label}
                    <span className="opacity-70">{link.display}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

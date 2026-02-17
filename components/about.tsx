import Section from "@/components/section";
import SectionHeading from "@/components/section-heading";

const HIGHLIGHTS = [
  "Performance-first architecture",
  "User-focused product thinking",
  "Scalable backend systems",
  "Clean, intentional UI"
];

export default function About() {
  return (
    <Section id="about">
      <div className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)] md:items-start">
        <SectionHeading
          eyebrow="About"
          title="I Design Software That Feels Invisible"
          subtitle="Engineering should disappear behind the experience. I combine mobile, backend, and product thinking to ship systems that are fast, stable, and quietly elegant."
        />
        <div className="space-y-6 text-sm leading-relaxed text-slate-400">
          <ul className="grid gap-3 sm:grid-cols-2">
            {HIGHLIGHTS.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl border border-slate-800/70 bg-slate-900/40 px-4 py-3 text-slate-200"
              >
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent-blue" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p>
            I specialise in Android development and full stack systems where
            the details matter. From designing APIs and data models to tuning
            rendering on low-end devices, I focus on the invisible layers that
            make products feel fast, stable, and considered.
          </p>
          <p>
            Working end-to-end means I can collaborate with teams across
            product, design, and infrastructure, align on constraints early, and
            ship solutions that scale without sacrificing experience.
          </p>
        </div>
      </div>
    </Section>
  );
}


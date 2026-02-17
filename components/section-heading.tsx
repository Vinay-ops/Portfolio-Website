type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

export default function SectionHeading(props: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      {props.eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-accent-blue">
          {props.eyebrow}
        </p>
      )}
      <h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
        {props.title}
      </h2>
      {props.subtitle && (
        <p className="mt-4 text-sm leading-relaxed text-slate-400">
          {props.subtitle}
        </p>
      )}
    </div>
  );
}


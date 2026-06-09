type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
};

export default function SectionHeading(props: SectionHeadingProps) {
  return (
    <div className={`max-w-2xl ${props.centered ? "mx-auto text-center" : ""}`}>
      {props.eyebrow && (
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-blue-700">
          {props.eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        {props.title}
      </h2>
      {props.subtitle && (
        <p className="mt-3 text-sm leading-relaxed text-slate-500 sm:text-base">
          {props.subtitle}
        </p>
      )}
    </div>
  );
}

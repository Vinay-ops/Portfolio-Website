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
        <div className="mb-4 inline-block border-4 border-neo-black bg-neo-yellow px-4 py-2 shadow-neo-sm dark:border-neo-white dark:shadow-neo-dark-sm">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-neo-black">
            {props.eyebrow}
          </p>
        </div>
      )}
      <h2 className="text-4xl font-black tracking-tight text-neo-black sm:text-5xl dark:text-neo-white">
        {props.title}
      </h2>
      {props.subtitle && (
        <p className="mt-6 text-base font-bold text-neo-black dark:text-neo-white">
          {props.subtitle}
        </p>
      )}
    </div>
  );
}

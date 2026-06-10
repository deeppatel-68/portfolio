type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <div className="mb-12 max-w-2xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-teal-400">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-lg leading-relaxed text-slate-400">
          {subtitle}
        </p>
      )}
    </div>
  );
}

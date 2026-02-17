interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : "text-left"} ${className}`}>
      <h2 className="text-3xl md:text-4xl font-serif font-bold text-patriotic-navy mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
      )}
      <div
        className={`mt-4 h-1.5 bg-patriotic-red w-24 ${centered ? "mx-auto" : ""}`}
      />
    </div>
  );
}

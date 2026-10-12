import Link from "next/link";

type PillarLinkProps = {
  description: string;
  href: string;
  label: string;
  tone: "orange" | "blue" | "sage" | "ink";
};

const toneClasses = {
  orange: "before:bg-orange",
  blue: "before:bg-blue",
  sage: "before:bg-sage",
  ink: "before:bg-ink",
} as const;

export function PillarLink({
  description,
  href,
  label,
  tone,
}: PillarLinkProps) {
  return (
    <Link
      className={`relative inline-flex min-h-12 items-center gap-3 rounded-full border border-line bg-surface py-2 pr-5 pl-3 text-sm font-semibold transition-[transform,border-color] before:size-3 before:shrink-0 before:rounded-full hover:-translate-y-0.5 hover:border-ink active:translate-y-0 ${toneClasses[tone]}`}
      href={href}
    >
      <span>{label}</span>
      <span className="sr-only">: {description}</span>
    </Link>
  );
}

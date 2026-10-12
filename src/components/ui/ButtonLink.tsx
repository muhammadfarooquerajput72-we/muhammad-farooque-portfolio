import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  children: ReactNode;
  href: string;
  tone?: "primary" | "quiet";
};

const toneClasses = {
  primary: "bg-ink text-canvas hover:-translate-y-0.5",
  quiet: "border border-line bg-surface text-ink hover:border-ink",
} as const;

export function ButtonLink({
  children,
  href,
  tone = "primary",
}: ButtonLinkProps) {
  return (
    <Link
      className={`inline-flex min-h-12 w-fit items-center justify-center rounded-full px-5 text-sm font-semibold transition-[transform,border-color] active:translate-y-0 ${toneClasses[tone]}`}
      href={href}
    >
      {children}
    </Link>
  );
}

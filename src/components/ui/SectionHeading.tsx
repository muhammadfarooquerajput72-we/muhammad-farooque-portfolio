import type { ReactNode } from "react";

type SectionHeadingProps = {
  children: ReactNode;
  eyebrow: string;
};

export function SectionHeading({ children, eyebrow }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <p className="font-mono text-sm font-semibold tracking-[0.16em] text-muted uppercase">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-4xl font-semibold tracking-[-0.045em] text-balance sm:text-5xl">
        {children}
      </h2>
    </div>
  );
}

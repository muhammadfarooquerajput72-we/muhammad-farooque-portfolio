import type { ReactNode } from "react";

type ContentSurfaceProps = {
  as?: "article" | "section";
  children: ReactNode;
};

export function ContentSurface({
  as: Element = "section",
  children,
}: ContentSurfaceProps) {
  return (
    <Element className="border-y border-line bg-surface px-5 py-6 shadow-[var(--shadow-surface)] sm:px-7 sm:py-8">
      {children}
    </Element>
  );
}

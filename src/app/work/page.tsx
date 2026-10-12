import type { Metadata } from "next";

import { experience } from "@/content/profile";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected work and practical experiments by Muhammad Farooque across four connected technology disciplines.",
};

export default function WorkPage() {
  return (
    <section className="mx-auto min-h-[70dvh] max-w-[var(--page-width)] px-[var(--page-gutter)] py-16 sm:py-24">
      <p className="font-mono text-sm font-semibold tracking-[0.16em] text-orange uppercase">
        01 / Work
      </p>
      <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.05em] text-balance sm:text-7xl">
        Work in progress
      </h1>
      <p className="mt-8 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
        Support, security, software, and AI-powered media, documented with
        honest context, clear contributions, and evidence where it exists.
      </p>

      <section aria-labelledby="experience-title" className="mt-20 border-t border-line pt-10 sm:mt-28 sm:pt-14">
        <h2 className="text-3xl font-semibold tracking-[-0.04em] sm:text-5xl" id="experience-title">
          Experience
        </h2>
        <div className="mt-10 border-t [border-color:var(--line-strong)]">
          {experience.map((item, index) => (
            <article
              className="grid gap-5 border-b border-line py-8 md:grid-cols-[10rem_minmax(0,1fr)] md:gap-12 md:py-10"
              key={item.title}
            >
              <div>
                <p className="m-0 font-mono text-xs font-semibold tracking-[0.1em] text-muted uppercase">
                  {item.dates}
                </p>
                <p className="mt-2 font-mono text-xs leading-5 text-muted">{item.location}</p>
              </div>
              <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(17rem,0.85fr)] lg:gap-12">
                <div>
                  <span className="font-mono text-xs text-muted">0{index + 1}</span>
                  <h3 className="mt-2 text-2xl font-semibold tracking-[-0.035em] sm:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 font-semibold text-orange-dark">{item.organization}</p>
                </div>
                <p className="m-0 max-w-xl text-base leading-7 text-muted">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
}

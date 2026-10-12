import type { Metadata } from "next";

import { SocialLinks } from "@/components/contact/SocialLinks";
import { education } from "@/content/profile";

export const metadata: Metadata = {
  title: "About",
  description:
    "Muhammad Farooque's background, direction, capabilities, and ways to connect.",
};

export default function AboutPage() {
  return (
    <section className="mx-auto min-h-[70dvh] max-w-[var(--page-width)] px-[var(--page-gutter)] py-16 sm:py-24">
      <p className="font-mono text-sm font-semibold tracking-[0.16em] text-blue uppercase">
        03 / About
      </p>
      <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.05em] text-balance sm:text-7xl">
        A practical learner across disciplines
      </h1>
      <p className="mt-8 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
        Muhammad is developing useful skills across technical support,
        cybersecurity, AI-assisted development, and content systems while
        sharing the process openly and honestly.
      </p>
      <section aria-labelledby="education-title" className="mt-20 border-t border-line pt-10 sm:mt-28 sm:pt-14">
        <h2 className="text-3xl font-semibold tracking-[-0.04em] sm:text-5xl" id="education-title">
          Education
        </h2>
        {education.map((item) => (
          <article
            className="mt-10 grid gap-5 border-y [border-color:var(--line-strong)] py-8 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end sm:gap-10"
            key={item.institution}
          >
            <div>
              <h3 className="text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">{item.institution}</h3>
              <p className="mt-3 text-base text-muted">{item.program}</p>
            </div>
            <p className="m-0 font-mono text-xs font-semibold tracking-[0.1em] text-sage-dark uppercase">
              {item.status}
            </p>
          </article>
        ))}
      </section>
      <section
        aria-labelledby="contact-title"
        className="mt-20 scroll-mt-28 border-t border-line pt-10 sm:mt-28 sm:pt-14"
        id="contact"
      >
        <div className="grid gap-12 lg:grid-cols-[minmax(16rem,0.7fr)_minmax(0,1.3fr)] lg:gap-20">
          <div>
            <h2
              className="max-w-lg text-3xl font-semibold tracking-[-0.04em] text-balance sm:text-5xl"
              id="contact-title"
            >
              Open to useful work and honest conversations.
            </h2>
            <p className="mt-5 max-w-md text-base leading-7 text-muted">
              Reach out about technical support, cybersecurity learning,
              AI-assisted development, or content and video workflows.
            </p>
          </div>

          <address className="not-italic"><SocialLinks /></address>
        </div>
      </section>
    </section>
  );
}

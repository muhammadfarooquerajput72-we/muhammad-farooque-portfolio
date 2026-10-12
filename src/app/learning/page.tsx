import type { Metadata } from "next";

import { certifications } from "@/content/profile";

export const metadata: Metadata = {
  title: "Learning",
  description:
    "Public notes from Muhammad Farooque's ongoing technical learning and Virtual University experience.",
};

export default function LearningPage() {
  return (
    <section className="mx-auto min-h-[70dvh] max-w-[var(--page-width)] px-[var(--page-gutter)] py-16 sm:py-24">
      <p className="font-mono text-sm font-semibold tracking-[0.16em] text-sage uppercase">
        02 / Learning
      </p>
      <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.05em] text-balance sm:text-7xl">
        Learning in public
      </h1>
      <p className="mt-8 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
        Cybersecurity, AI development, and Virtual University student life,
        shared as field notes from an active learner, not claims of mastery.
      </p>

      <section aria-labelledby="credentials-title" className="mt-20 border-t border-line pt-10 sm:mt-28 sm:pt-14">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-[-0.04em] sm:text-5xl" id="credentials-title">
            Certifications and training
          </h2>
          <p className="mt-5 text-base leading-7 text-muted">
            Formal certificates and independent training that support Muhammad&apos;s current technical direction.
          </p>
        </div>

        <div className="mt-10 grid border-t [border-color:var(--line-strong)] md:grid-cols-2">
          {certifications.map((item, index) => (
            <article
              className="border-b border-line py-7 md:min-h-52 md:px-8 md:py-8 md:odd:border-r md:odd:pl-0"
              key={`${item.title}-${item.issuer}`}
            >
              <div className="flex items-start justify-between gap-6">
                <span className="font-mono text-xs text-muted">0{index + 1}</span>
                {"issued" in item ? (
                  <span className="font-mono text-xs tracking-[0.08em] text-muted uppercase">{item.issued}</span>
                ) : null}
              </div>
              <h3 className="mt-8 max-w-md text-xl font-semibold tracking-[-0.025em] sm:text-2xl">
                {item.title}
              </h3>
              <p className="mt-2 text-sm font-semibold text-sage-dark">{item.issuer}</p>
              {"credentialId" in item ? (
                <p className="mt-5 break-all font-mono text-[0.68rem] leading-5 text-muted">
                  Credential ID {item.credentialId}
                </p>
              ) : null}
            </article>
          ))}
        </div>
      </section>
    </section>
  );
}

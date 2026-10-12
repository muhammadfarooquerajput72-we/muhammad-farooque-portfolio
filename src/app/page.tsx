import type { Metadata } from "next";
import Link from "next/link";

import { ScrollCinematic } from "@/components/intro/ScrollCinematic";
import { PortfolioJourney } from "@/components/journey/PortfolioJourney";
import { HomepageMotion } from "@/components/motion/HomepageMotion";
import { CapabilityAtlas } from "@/components/orbit/CapabilityAtlas";
import { profile } from "@/content/profile";

export const metadata: Metadata = {
  title: { absolute: "Muhammad Farooque | Learning Across Tech" },
  description:
    "Muhammad Farooque is learning across technical support, cybersecurity, AI-assisted development, and AI-powered media.",
};

const atlasFields = [
  {
    id: "support",
    index: "A",
    label: "Support",
    description: "Practical IT and technical support",
    detail:
      "Helping people keep everyday systems working through setup, troubleshooting, software configuration, and clear first-line support.",
    status: "Practical foundation",
    href: "/work#support",
  },
  {
    id: "secure",
    index: "B",
    label: "Secure",
    description: "Cybersecurity learning and authorized labs",
    detail:
      "Developing defensive thinking through structured study, safe lab practice, and careful documentation without presenting exploration as professional pentesting.",
    status: "Learning deeper",
    href: "/learning#cybersecurity",
  },
  {
    id: "build",
    index: "C",
    label: "Build",
    description: "Rapid software development with AI",
    detail:
      "Using AI-assisted tools to move from a clear problem to a working web or mobile prototype, then testing what was actually built.",
    status: "Building practical systems",
    href: "/work#build",
  },
  {
    id: "create",
    index: "D",
    label: "Create",
    description: "AI video, advertising, and YouTube workflows",
    detail:
      "Combining AI video, advertising concepts, and repeatable YouTube workflows to turn ideas into media people can understand and act on.",
    status: "50K+ growth · context pending",
    href: "/work#create",
  },
] as const;

const proofPoints = [
  {
    title: "Multidisciplinary portfolio",
    status: "Building now",
    copy: "The system you are using is designed and built to make several developing capabilities understandable without overstating them.",
    href: "/work",
    action: "Inspect the build",
  },
  {
    title: "50K+ YouTube growth",
    status: "Attribution being documented",
    copy: "A real channel-growth result that will be published with Muhammad’s exact role, timeframe, and supporting context.",
    href: "/work",
    action: "See evidence status",
  },
  {
    title: "Learning in public",
    status: "Active field notes",
    copy: "Cybersecurity practice, AI-assisted development, and honest observations from Virtual University student life.",
    href: "/learning",
    action: "Read the field notes",
  },
] as const;

export default function HomePage() {
  return (
    <>
      <ScrollCinematic>
        <section className="atlas-hero" aria-labelledby="home-title">
        <div className="atlas-registration" aria-hidden="true">
          <span>33.6844° N</span>
          <span>73.0479° E</span>
        </div>

        <div className="atlas-hero__copy">
          <p className="atlas-location">Islamabad · Pakistan</p>
          <h1 id="home-title">{profile.name}</h1>
          <p className="atlas-statement">{profile.positioning}</p>
          <p className="atlas-intro">
            Exploring where reliable support, safer systems, rapid software,
            and useful media meet.
          </p>

          <div className="atlas-actions" aria-label="Homepage actions">
            <Link className="atlas-button atlas-button--primary" href="#work">
              View selected work <span aria-hidden="true">↗</span>
            </Link>
            <Link className="atlas-button atlas-button--secondary" href="#learning">
              Follow the learning <span aria-hidden="true">↓</span>
            </Link>
          </div>
        </div>

        <CapabilityAtlas fields={atlasFields} />

        <div className="atlas-proof-preview" aria-label="Featured evidence">
          <span className="atlas-proof-preview__number">50K+</span>
          <span className="atlas-proof-preview__label">YouTube channel growth</span>
          <span className="atlas-proof-preview__status">Attribution being documented</span>
        </div>
        </section>
      </ScrollCinematic>

      <section
        className="field-guide"
        aria-labelledby="field-guide-title"
        data-motion-field-guide
      >
        <div className="field-guide__intro">
          <p className="section-index">02 / Operating system</p>
          <h2 id="field-guide-title">Four directions. One way of working.</h2>
          <p>
            Understand the problem, make the system safer, build a useful
            response, and communicate it clearly.
          </p>
        </div>

        <ol className="field-guide__list">
          {atlasFields.map((field, index) => (
            <li
              className={`field-guide__item field-guide__item--${field.id}`}
              data-motion-field
              key={field.id}
            >
              <span className="field-guide__marker">{field.index}</span>
              <span className="field-guide__number" aria-hidden="true">0{index + 1}</span>
              <div className="field-guide__content">
                <h3>{field.label}</h3>
                <p>{field.description}</p>
                <Link href={field.href} aria-label={`Explore ${field.label}`}>
                  Explore <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section
        className="evidence-spine"
        aria-labelledby="evidence-title"
        data-motion-evidence
      >
        <div className="evidence-spine__heading">
          <p className="section-index">03 / Evidence ledger</p>
          <h2 id="evidence-title">Proof, with the status visible.</h2>
          <p>
            Finished work, active learning, and evidence still being assembled
            are labelled differently because credibility begins with context.
          </p>
        </div>

        <div className="evidence-spine__items">
          {proofPoints.map((item, index) => (
            <article className="evidence-item" data-motion-proof key={item.title}>
              <span className="evidence-item__index">0{index + 1}</span>
              <div>
                <p className="evidence-item__status">{item.status}</p>
                <h3>{item.title}</h3>
                <p className="evidence-item__copy">{item.copy}</p>
              </div>
              <Link href={item.href}>
                {item.action} <span aria-hidden="true">↗</span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section
        className="atlas-closing"
        aria-labelledby="closing-title"
        data-motion-closing
      >
        <div className="atlas-closing__mark" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
        </div>
        <div>
          <p className="section-index">04 / Live trajectory</p>
          <h2 id="closing-title">The direction is still being built.</h2>
          <p>
            Follow the experiments, field notes, and practical work as the
            intersection becomes deeper and more useful.
          </p>
        </div>
        <Link className="atlas-button atlas-button--primary" href="#work">
          Continue to selected work <span aria-hidden="true">↓</span>
        </Link>
      </section>
      <PortfolioJourney />
      <HomepageMotion />
    </>
  );
}

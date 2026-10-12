import Link from "next/link";
import Image from "next/image";

import { SocialLinks } from "@/components/contact/SocialLinks";
import { certifications, education, experience } from "@/content/profile";

export function PortfolioJourney() {
  return (
    <div className="portfolio-journey">
      <section className="journey-section journey-work" data-journey-section id="work">
        <div className="journey-intro journey-intro--work">
          <div className="journey-heading">
            <p>Selected work</p>
            <h2>Experience grounded in practical contribution.</h2>
            <span>Support operations, digital coordination, and content systems with the scope stated clearly.</span>
          </div>
          <figure className="journey-media journey-media--work" data-journey-media>
            <Image alt="A helpdesk work scene" fill sizes="(max-width: 800px) 100vw, 40vw" src="/media/helpdesk-start.webp" />
            <span className="journey-media__index" aria-hidden="true">01 / PRACTICE</span>
          </figure>
        </div>

        <div className="journey-timeline">
          {experience.map((item, index) => (
            <article className="journey-role" key={item.title}>
              <span className="journey-role__number">0{index + 1}</span>
              <div className="journey-role__identity">
                <h3>{item.title}</h3>
                <p>{item.organization}</p>
              </div>
              <div className="journey-role__detail">
                <p>{item.description}</p>
                <small>{item.dates}<br />{item.location}</small>
              </div>
            </article>
          ))}
        </div>

        <Link className="journey-text-link" href="/work">Open the complete work page <span aria-hidden="true">↗</span></Link>
      </section>

      <section className="journey-section journey-learning" data-journey-section id="learning">
        <div className="journey-intro journey-intro--learning">
          <div className="journey-heading">
            <p>Learning in public</p>
            <h2>Building depth without pretending mastery.</h2>
            <span>Formal education, focused training, and public notes show where the learning is going next.</span>
          </div>
          <figure className="journey-media journey-media--learning" data-journey-media>
            <Image alt="A visual map of intersecting learning directions" fill sizes="(max-width: 800px) 100vw, 40vw" src="/brand/candidate-b-banner.png" />
          </figure>
        </div>

        <div className="journey-learning__body">
          <article className="journey-education">
            <span>Education</span>
            <h3>{education[0].institution}</h3>
            <p>{education[0].program}</p>
            <small>{education[0].status}</small>
          </article>

          <div className="journey-certifications" aria-label="Featured certifications">
            {certifications.slice(0, 4).map((item, index) => (
              <article key={`${item.title}-${item.issuer}`}>
                <span>0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.issuer}</p>
              </article>
            ))}
          </div>
        </div>

        <Link className="journey-text-link" href="/learning">Explore all learning and certifications <span aria-hidden="true">↗</span></Link>
      </section>

      <section className="journey-section journey-contact" data-journey-section id="contact">
        <div className="journey-contact__copy">
          <p>Start a conversation</p>
          <h2>Useful work begins with a clear message.</h2>
          <span>Reach out about IT support, cybersecurity learning, AI-assisted development, or AI-powered media workflows.</span>
        </div>
        <SocialLinks />
      </section>
    </div>
  );
}

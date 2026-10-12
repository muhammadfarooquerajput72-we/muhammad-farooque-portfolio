"use client";

import { useEffect } from "react";

export function HomepageMotion() {
  useEffect(() => {
    if (process.env.NODE_ENV === "test") return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;

    let disposed = false;
    let teardown: (() => void) | undefined;

    const initialise = async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);

      if (disposed) return;
      gsap.registerPlugin(ScrollTrigger);

      const context = gsap.context(() => {
        const fields = gsap.utils.toArray<HTMLElement>("[data-motion-field]");

        fields.forEach((field) => {
          const number = field.querySelector<HTMLElement>(".field-guide__number");
          const content = field.querySelector<HTMLElement>(".field-guide__content");

          gsap.fromTo(
            field,
            { "--field-reveal": 0 },
            {
              "--field-reveal": 1,
              ease: "none",
              scrollTrigger: {
                trigger: field,
                start: "top 92%",
                end: "center 48%",
                scrub: 0.55,
              },
            },
          );

          if (number) {
            gsap.fromTo(
              number,
              { autoAlpha: 0.16, xPercent: -34, rotate: -7 },
              {
                autoAlpha: 1,
                xPercent: 0,
                rotate: 0,
                ease: "none",
                scrollTrigger: {
                  trigger: field,
                  start: "top 90%",
                  end: "center 52%",
                  scrub: 0.5,
                },
              },
            );
          }

          if (content) {
            gsap.fromTo(
              content,
              { autoAlpha: 0.2, y: 72, filter: "blur(9px)" },
              {
                autoAlpha: 1,
                y: 0,
                filter: "blur(0px)",
                ease: "none",
                scrollTrigger: {
                  trigger: field,
                  start: "top 88%",
                  end: "center 52%",
                  scrub: 0.6,
                },
              },
            );
          }
        });

        const evidence = document.querySelector<HTMLElement>("[data-motion-evidence]");
        if (evidence) {
          gsap.fromTo(
            evidence,
            { "--evidence-progress": 0 },
            {
              "--evidence-progress": 1,
              ease: "none",
              scrollTrigger: {
                trigger: evidence,
                start: "top 72%",
                end: "bottom 72%",
                scrub: 0.5,
              },
            },
          );
        }

        const proofs = gsap.utils.toArray<HTMLElement>("[data-motion-proof]");
        proofs.forEach((proof) => {
          gsap.fromTo(
            proof,
            { autoAlpha: 0.22, y: 36, filter: "blur(8px)" },
            {
              autoAlpha: 1,
              y: 0,
              filter: "blur(0px)",
              ease: "power3.out",
              scrollTrigger: {
                trigger: proof,
                start: "top 88%",
                end: "top 58%",
                scrub: 0.45,
              },
            },
          );
        });

        const closing = document.querySelector<HTMLElement>("[data-motion-closing]");
        const closingMark = closing?.querySelector<HTMLElement>(".atlas-closing__mark");
        if (closing && closingMark) {
          gsap.fromTo(
            closingMark,
            { rotate: -38, scale: 0.58 },
            {
              rotate: 0,
              scale: 1,
              ease: "none",
              scrollTrigger: {
                trigger: closing,
                start: "top 90%",
                end: "center 58%",
                scrub: 0.65,
              },
            },
          );
        }

        const journeySections = gsap.utils.toArray<HTMLElement>("[data-journey-section]");
        journeySections.forEach((section) => {
          const heading = section.querySelector<HTMLElement>(".journey-heading, .journey-contact__copy");
          const body = section.querySelector<HTMLElement>(".journey-timeline, .journey-learning__body, .social-links");
          const media = section.querySelector<HTMLElement>("[data-journey-media]");

          if (heading) {
            gsap.fromTo(
              heading,
              { autoAlpha: 0.32, y: 72, filter: "blur(8px)" },
              {
                autoAlpha: 1,
                y: 0,
                filter: "blur(0px)",
                ease: "none",
                scrollTrigger: {
                  trigger: section,
                  start: "top 82%",
                  end: "top 38%",
                  scrub: 0.65,
                },
              },
            );
          }

          if (media) {
            gsap.fromTo(
              media,
              { autoAlpha: 0.25, x: 72, scale: 0.92, rotate: 2.5 },
              {
                autoAlpha: 1,
                x: 0,
                scale: 1,
                rotate: 0,
                ease: "none",
                scrollTrigger: {
                  trigger: section,
                  start: "top 84%",
                  end: "top 34%",
                  scrub: 0.75,
                },
              },
            );
          }

          if (body) {
            gsap.fromTo(
              body,
              { autoAlpha: 0.28, y: 96 },
              {
                autoAlpha: 1,
                y: 0,
                ease: "none",
                scrollTrigger: {
                  trigger: body,
                  start: "top 92%",
                  end: "top 58%",
                  scrub: 0.7,
                },
              },
            );
          }
        });
      });

      ScrollTrigger.refresh();
      teardown = () => context.revert();
    };

    void initialise();

    return () => {
      disposed = true;
      teardown?.();
    };
  }, []);

  return null;
}

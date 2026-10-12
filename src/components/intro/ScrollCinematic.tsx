"use client";

import type { ReactNode } from "react";
import { useEffect, useRef } from "react";
import Image from "next/image";

import styles from "./ScrollCinematic.module.css";

const thoughts = [
  { label: "IT Support", question: "This is practical. Should I grow here?" },
  { label: "Cybersecurity", question: "This has a future. Should I go deeper?" },
  { label: "AI Engineering", question: "Could I build useful things faster with AI?" },
  { label: "Content Creation", question: "Could I turn ideas into something people notice?" },
] as const;

type ScrollCinematicProps = { children: ReactNode };

export function ScrollCinematic({ children }: ScrollCinematicProps) {
  const rootRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const video = videoRef.current;
    const progress = progressRef.current;
    if (!root || !video || !progress) return;

    const hero = root.querySelector<HTMLElement>("[data-film-hero]");
    const still = root.querySelector<HTMLElement>("[data-film-still]");
    const bridge = root.querySelector<HTMLElement>("[data-film-bridge]");
    const reducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    if (reducedMotion?.matches) return;

    let disposed = false;
    let teardown: (() => void) | undefined;

    const revealFallback = () => {
      root.dataset.mediaFailed = "true";
      hero?.removeAttribute("inert");
      hero?.removeAttribute("aria-hidden");
    };
    video.addEventListener("error", revealFallback);

    const initialise = async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (disposed) return;

      gsap.registerPlugin(ScrollTrigger);
      video.pause();

      const duration = Math.max(video.duration || 8, 0.1);
      const playhead = { time: 0 };
      const cueElements = gsap.utils.toArray<HTMLElement>(root.querySelectorAll("[data-film-cue]"));
      const nodes = gsap.utils.toArray<HTMLElement>(root.querySelectorAll("[data-film-node]"));
      const constellation = root.querySelector<HTMLElement>("[data-film-constellation]");

      gsap.set(cueElements, { autoAlpha: 0, scale: 0.92, y: 24 });
      gsap.set(nodes, { autoAlpha: 0, scale: 0.4 });
      gsap.set(constellation, { autoAlpha: 0 });
      gsap.set(video, { autoAlpha: 0, scale: 1 });
      gsap.set(still, { autoAlpha: 1, scale: 1 });
      gsap.set(bridge, { autoAlpha: 0, scale: 1.025 });
      if (hero) {
        hero.setAttribute("inert", "");
        hero.setAttribute("aria-hidden", "true");
        gsap.set(hero, { autoAlpha: 0 });
      }

      const timeline = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.7,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            progress.style.transform = `scaleX(${self.progress})`;
            root.style.setProperty("--film-progress", self.progress.toFixed(4));
            if (hero) {
              const available = self.progress > 0.96;
              hero.toggleAttribute("inert", !available);
              hero.setAttribute("aria-hidden", String(!available));
            }
          },
        },
      });

      const cueWindows = [[0.05, 0.17], [0.17, 0.29], [0.29, 0.41], [0.41, 0.53]] as const;
      cueElements.forEach((cue, index) => {
        const [start, end] = cueWindows[index];
        const fade = 0.025;
        timeline
          .to(cue, { autoAlpha: 1, scale: 1, y: 0, duration: fade, ease: "power2.out" }, start)
          .to(cue, { autoAlpha: 1, duration: end - start - fade * 2 }, start + fade)
          .to(cue, { autoAlpha: 0.14, scale: 0.97, y: -10, duration: fade }, end - fade);
      });

      timeline.to(constellation, { autoAlpha: 1, duration: 0.035 }, 0.49);
      timeline.to(nodes, { autoAlpha: 1, scale: 1, duration: 0.07, stagger: 0.012, ease: "back.out(1.5)" }, 0.5);
      timeline.to(cueElements, { autoAlpha: 0, duration: 0.045 }, 0.52);
      timeline.to(nodes, { y: 76, scale: 0.64, duration: 0.08 }, 0.55);
      timeline.to(constellation, { autoAlpha: 0, duration: 0.045 }, 0.61);
      timeline.to(video, { autoAlpha: 1, duration: 0.055 }, 0.54);
      timeline.to(still, { autoAlpha: 0, scale: 1.025, duration: 0.075 }, 0.55);

      timeline.to(playhead, {
        time: duration - 0.04,
        duration: 0.34,
        onUpdate: () => {
          if (Math.abs(video.currentTime - playhead.time) > 0.012) video.currentTime = playhead.time;
        },
      }, 0.56);

      timeline.to(video, {
        scale: 2.16,
        transformOrigin: "48% 55%",
        duration: 0.1,
        ease: "power2.inOut",
      }, 0.87);
      timeline.to(bridge, { autoAlpha: 1, scale: 1, duration: 0.055 }, 0.925);
      timeline.to(video, { autoAlpha: 0, duration: 0.045 }, 0.93);
      if (hero) timeline.to(hero, { autoAlpha: 1, duration: 0.035 }, 0.965);
      timeline.to(bridge, { autoAlpha: 0, duration: 0.03 }, 0.97);
      timeline.to({}, { duration: 0.01 });

      ScrollTrigger.refresh();
      teardown = () => {
        hero?.removeAttribute("inert");
        hero?.removeAttribute("aria-hidden");
        timeline.scrollTrigger?.kill();
        timeline.kill();
      };
    };

    const onMetadata = () => void initialise();
    if (video.readyState >= 1) void initialise();
    else video.addEventListener("loadedmetadata", onMetadata, { once: true });

    return () => {
      disposed = true;
      video.removeEventListener("loadedmetadata", onMetadata);
      video.removeEventListener("error", revealFallback);
      teardown?.();
    };
  }, []);

  return (
    <section aria-label="A scroll-controlled introduction to Muhammad Farooque" className={styles.sequence} id="home" ref={rootRef}>
      <div className={styles.stage}>
        <Image alt="" aria-hidden="true" className={styles.still} data-film-still height={1080} priority sizes="100vw" src="/media/helpdesk-start.webp" width={1920} />
        <video aria-hidden="true" className={styles.film} muted playsInline poster="/media/helpdesk-start.webp" preload="auto" ref={videoRef} tabIndex={-1}>
          <source src="/media/helpdesk-scrub.mp4" type="video/mp4" />
        </video>
        <div className={styles.vignette} aria-hidden="true" />
        <div className={styles.thoughts} aria-hidden="true">
          {thoughts.map((thought, index) => (
            <article className={`${styles.thought} ${styles[`thought${index + 1}`]}`} data-film-cue key={thought.label}>
              <span>0{index + 1}</span><strong>{thought.label}</strong><p>{thought.question}</p>
            </article>
          ))}
        </div>
        <div className={styles.constellation} data-film-constellation aria-hidden="true">
          <span data-film-node /><span data-film-node /><span data-film-node /><span data-film-node />
        </div>
        <Image alt="" aria-hidden="true" className={styles.bridge} data-film-bridge height={1080} sizes="100vw" src="/media/portfolio-screen.webp" width={1920} />
        <div className={styles.heroLayer} data-film-hero>{children}</div>
        <div className={styles.rail} aria-hidden="true"><span ref={progressRef} /></div>
        <p className={styles.accessibleCopy}>Muhammad considers IT support, cybersecurity, AI engineering, and content creation before bringing the four directions together through practical work.</p>
      </div>
    </section>
  );
}

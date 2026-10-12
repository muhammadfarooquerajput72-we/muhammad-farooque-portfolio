"use client";

import { BookOpen, Briefcase, EnvelopeSimple, House } from "@phosphor-icons/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navigationLinks = [
  { href: "/#home", label: "Home", section: "home", Icon: House },
  { href: "/#work", label: "Work", section: "work", Icon: Briefcase },
  { href: "/#learning", label: "Learning", section: "learning", Icon: BookOpen },
  { href: "/#contact", label: "Contact", section: "contact", Icon: EnvelopeSimple },
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    if (pathname !== "/") return;

    const sections = navigationLinks
      .map((link) => document.getElementById(link.section))
      .filter((section): section is HTMLElement => Boolean(section));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveSection(visible.target.id);
      },
      { rootMargin: "-24% 0px -58%", threshold: [0, 0.2, 0.55] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="site-header__brand" href="/#home" aria-label="Muhammad Farooque, home">
          <span className="site-header__brand-full">Muhammad Farooque</span>
          <span className="site-header__brand-short" aria-hidden="true">MF</span>
        </Link>
        <nav aria-label="Primary" className="site-header__nav">
          <ul>
            {navigationLinks.map(({ href, label, section, Icon }) => {
              const current = pathname === "/" && activeSection === section;
              return (
                <li key={href}>
                  <Link aria-current={current ? "location" : undefined} className="site-header__link" href={href}>
                    <Icon aria-hidden="true" size={18} weight={current ? "fill" : "regular"} />
                    <span>{label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}

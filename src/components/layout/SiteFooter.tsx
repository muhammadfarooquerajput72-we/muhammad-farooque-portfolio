import Link from "next/link";
import { ArrowUpRight, EnvelopeSimple } from "@phosphor-icons/react/dist/ssr";

import { SocialLinks } from "@/components/contact/SocialLinks";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__lead">
          <p className="site-footer__eyebrow">Open to useful conversations</p>
          <h2>Let&apos;s build something clear, capable, and worth using.</h2>
          <a className="site-footer__email" href="mailto:muhammadfarooquerajput72@gmail.com">
            <EnvelopeSimple aria-hidden="true" size={22} />
            <span>muhammadfarooquerajput72@gmail.com</span>
            <ArrowUpRight aria-hidden="true" size={20} />
          </a>
        </div>

        <div className="site-footer__connect">
          <p>Learning across tech and documenting the process from Islamabad.</p>
          <SocialLinks compact />
        </div>

        <div className="site-footer__base">
          <p>© 2026 Muhammad Farooque</p>
          <nav aria-label="Footer navigation">
            <Link aria-label="Go to home section from footer" href="/#home">Home</Link>
            <Link aria-label="Go to work section from footer" href="/#work">Work</Link>
            <Link aria-label="Go to learning section from footer" href="/#learning">Learning</Link>
            <Link href="/#contact">Get in touch</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

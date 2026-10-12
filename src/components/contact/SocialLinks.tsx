import { EnvelopeSimple, GithubLogo, InstagramLogo, LinkedinLogo, Phone } from "@phosphor-icons/react/dist/ssr";

const contactLinks = [
  { label: "Call", accessibleLabel: "Call Muhammad Farooque", href: "tel:+923123047675", detail: "+92 312 3047675", Icon: Phone, external: false },
  { label: "Gmail", accessibleLabel: "Email Muhammad Farooque on Gmail", href: "mailto:muhammadfarooquerajput72@gmail.com", detail: "Send an email", meta: "muhammadfarooquerajput72@gmail.com", Icon: EnvelopeSimple, external: false },
  { label: "LinkedIn", accessibleLabel: "Open Muhammad Farooque on LinkedIn", href: "https://www.linkedin.com/in/muhammad-farooque-4b7bb4387/", detail: "Professional profile", Icon: LinkedinLogo, external: true },
  { label: "GitHub", accessibleLabel: "Open Muhammad Farooque on GitHub", href: "https://github.com/muhammadfarooquerajput72-we", detail: "Code and projects", Icon: GithubLogo, external: true },
  { label: "Instagram", accessibleLabel: "Open Muhammad Farooque on Instagram", href: "https://www.instagram.com/muhammad_far00que/?utm_source=ig_web_button_share_sheet", detail: "Social updates", Icon: InstagramLogo, external: true },
] as const;

export function SocialLinks({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "social-links social-links--compact" : "social-links"}>
      {contactLinks.map(({ accessibleLabel, detail, external, href, Icon, label, ...link }) => (
        <a aria-label={accessibleLabel} className="social-link" href={href} key={label} rel={external ? "noreferrer" : undefined} target={external ? "_blank" : undefined}>
          <span className="social-link__icon" aria-hidden="true"><Icon size={compact ? 22 : 28} weight="regular" /></span>
          <span className="social-link__copy">
            <strong>{label}</strong>
            {!compact ? <small>{detail}</small> : null}
            {!compact && "meta" in link ? <span className="social-link__meta">{link.meta}</span> : null}
          </span>
        </a>
      ))}
    </div>
  );
}

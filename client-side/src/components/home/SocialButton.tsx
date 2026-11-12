import type { CSSProperties } from "react";
import type { FOOTER } from "@/lib/content";

type Social = (typeof FOOTER.socials)[number];

/**
 * Round footer button for one contact channel. The icon is painted twice
 * (see `.social-btn__icons`) so the hover can roll one copy out and the
 * other in. A channel without a destination yet renders as a disabled,
 * non-interactive button instead of a link to nowhere.
 */
export function SocialButton({
  social,
  className,
  iconClassName,
}: {
  social: Social;
  className: string;
  iconClassName: string;
}) {
  const icon = { "--icon": `url(${social.icon})` } as CSSProperties;
  const icons = (
    <span aria-hidden className={`social-btn__icons ${iconClassName}`}>
      <span className="icon-mask" style={icon} />
      <span className="icon-mask" style={icon} />
    </span>
  );
  const classes = `social-btn flex items-center justify-center bg-white ${className}`;

  if (!social.href) {
    return (
      <span
        role="link"
        aria-disabled="true"
        aria-label={`${social.name} (coming soon)`}
        title={`${social.name}: coming soon`}
        className={classes}
      >
        {icons}
      </span>
    );
  }

  const external = social.href.startsWith("http");
  return (
    <a
      href={social.href}
      aria-label={social.name}
      className={classes}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {icons}
    </a>
  );
}

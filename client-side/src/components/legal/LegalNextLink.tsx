/**
 * Link to the companion legal document. The arrow (white, in a plum disc) is
 * hidden at rest and slides in beside the label on hover or keyboard focus,
 * taking no space until then. Touch screens cannot hover, so there it is always shown.
 * Styles live in globals.css (`.legal-next`).
 */
function Arrow() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden className="size-[0.75rem]">
      <path
        d="M2.5 8h11M9 3.5 13.5 8 9 12.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LegalNextLink({
  href,
  label,
  className = "",
}: {
  href: string;
  label: string;
  className?: string;
}) {
  return (
    <a href={href} className={`legal-next ${className}`}>
      <span className="legal-next__label">Read our {label}</span>
      <span className="legal-next__arrow">
        <span className="flex size-[1.625rem] items-center justify-center rounded-full bg-plum text-white">
          <Arrow />
        </span>
      </span>
    </a>
  );
}

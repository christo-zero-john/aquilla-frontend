import {
  Footer as FooterDesktop,
  NavBar as NavBarDesktop,
} from "@/components/home/HomeDesktop";
import { Footer as FooterMobile } from "@/components/home/HomeMobile";
import { MobileNav } from "@/components/home/MobileNav";
import type { LegalDoc, LegalSection } from "@/lib/content";
import { LegalNextLink } from "./LegalNextLink";
import { LegalToc } from "./LegalToc";

/**
 * A long-form legal document (terms, privacy) inside the site's own header
 * and footer. Like the home page, desktop and mobile are separate trees
 * swapped at lg. Desktop keeps a sticky contents list beside the text.
 *
 * Header and footer links take `base="/"` so section links lead back to the
 * home page instead of looking for `#about` on this one.
 */

function SectionBody({ section, size }: { section: LegalSection; size: "lg" | "sm" }) {
  const text =
    size === "lg"
      ? "text-[1rem] leading-[1.6875rem] text-body"
      : "text-[0.875rem] leading-[1.375rem] text-body";
  return (
    <div className="flex flex-col gap-[0.75rem]">
      {section.paragraphs.map((p) => (
        <p key={p} className={text}>
          {p}
        </p>
      ))}
      {section.bullets ? (
        <ul className="flex flex-col gap-[0.5rem]">
          {section.bullets.map((b) => (
            <li key={b} className={`flex gap-[0.75rem] ${text}`}>
              <span
                aria-hidden
                className={`shrink-0 bg-plum ${size === "lg" ? "mt-[0.6875rem]" : "mt-[0.5625rem]"} size-[0.3125rem]`}
              />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

function LegalDesktop({ doc }: { doc: LegalDoc }) {
  return (
    <div className="flex w-full flex-col items-start bg-white">
      <NavBarDesktop base="/" />

      <section className="w-full bg-cream px-[5rem] pb-[4.5rem] pt-[6rem]">
        <div className="flex max-w-[50rem] flex-col gap-[1.5rem]">
          <p className="font-outfit text-[0.875rem] font-bold tracking-[0.08rem] text-plum uppercase">
            {doc.eyebrow}
          </p>
          <h1 className="text-[3.5rem] leading-[3.5rem] tracking-[-0.14rem] text-ink">
            {doc.title}
          </h1>
          <p className="max-w-[42rem] text-[1.125rem] leading-[1.6875rem] text-muted">
            {doc.intro}
          </p>
          <p className="font-jakarta text-[0.875rem] text-muted">
            Last updated {doc.updated}
          </p>
        </div>
      </section>

      <section className="flex w-full items-start gap-[5rem] px-[5rem] py-[5rem]">
        <nav
          aria-label="On this page"
          className="sticky top-[2.5rem] flex w-[17.5rem] shrink-0 flex-col gap-[1rem]"
        >
          <p className="font-outfit text-[0.875rem] font-bold text-ink uppercase">
            On this page
          </p>
          <LegalToc sections={doc.sections} />
          <LegalNextLink
            href={doc.other.href}
            label={doc.other.label}
            className="link-underline mt-[1rem] self-start text-[0.875rem] font-medium text-plum"
          />
        </nav>

        <div className="flex min-w-0 max-w-[45rem] flex-1 flex-col">
          {doc.sections.map((s, i) => (
            <article
              key={s.id}
              id={s.id}
              className="flex scroll-mt-[2.5rem] flex-col gap-[1rem] border-b border-line py-[2.5rem] first:pt-0 last:border-b-0"
            >
              <h2 className="flex items-baseline gap-[1rem] text-[1.75rem] leading-[2.25rem] tracking-[-0.035rem] text-ink-soft">
                <span className="text-[1rem] tabular-nums text-faint">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {s.title}
              </h2>
              <SectionBody section={s} size="lg" />
            </article>
          ))}
        </div>
      </section>

      <FooterDesktop base="/" />
    </div>
  );
}

function LegalMobile({ doc }: { doc: LegalDoc }) {
  return (
    <div className="flex w-full flex-col items-start bg-white">
      <MobileNav base="/" />

      <section className="flex w-full flex-col gap-[1rem] bg-cream px-[1rem] py-[3rem]">
        <p className="font-outfit text-[0.75rem] font-bold tracking-[0.06rem] text-plum uppercase">
          {doc.eyebrow}
        </p>
        <h1 className="text-[1.75rem] leading-[2.125rem] tracking-[-0.035rem] text-ink">
          {doc.title}
        </h1>
        <p className="text-[0.875rem] leading-[1.25rem] text-muted">{doc.intro}</p>
        <p className="font-jakarta text-[0.75rem] text-muted">Last updated {doc.updated}</p>
      </section>

      <section className="flex w-full flex-col px-[1rem] py-[2rem]">
        {doc.sections.map((s, i) => (
          <article
            key={s.id}
            id={s.id}
            className="flex scroll-mt-[4.5rem] flex-col gap-[0.75rem] border-b border-line py-[1.5rem] first:pt-0 last:border-b-0"
          >
            <h2 className="flex items-baseline gap-[0.625rem] text-[1.25rem] leading-[1.625rem] text-ink">
              <span className="text-[0.8125rem] tabular-nums text-faint">
                {String(i + 1).padStart(2, "0")}
              </span>
              {s.title}
            </h2>
            <SectionBody section={s} size="sm" />
          </article>
        ))}

        <LegalNextLink
          href={doc.other.href}
          label={doc.other.label}
          className="mt-[1rem] w-full justify-center rounded-[0.25rem] border border-line bg-mist p-[0.875rem] text-[0.875rem] font-semibold text-plum"
        />
      </section>

      <FooterMobile base="/" />
    </div>
  );
}

export function LegalPage({ doc }: { doc: LegalDoc }) {
  return (
    <>
      <div className="hidden lg:block">
        <LegalDesktop doc={doc} />
      </div>
      <div className="lg:hidden">
        <LegalMobile doc={doc} />
      </div>
    </>
  );
}

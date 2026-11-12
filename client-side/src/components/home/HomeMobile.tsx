import Image from "next/image";
import { HeroPlaque } from "./HeroPlaque";
import { MobileNav } from "./MobileNav";
import { AboutCarousel } from "./AboutCarousel";
import { SocialButton } from "./SocialButton";
import {
  ABOUT_STATEMENT,
  CONTACT,
  ENQUIRY_CATEGORIES,
  FOOTER,
  HERO,
  SERVICES,
  SERVICES_HEADING,
  STANDARDS,
  STANDARDS_HEADING,
} from "@/lib/content";

/**
 * Mobile composition — Figma node 1:668, drawn on a 374 frame.
 *
 * This is a separate composition rather than a reflow of the desktop frame:
 * the hero stacks, services become bordered cards, standards become badged
 * cards, and the standards list stops one row short. Design values are in rem
 * against a fixed 16px root, so 1rem === 1 design pixel; blocks are full-width
 * so the frame fills any handset.
 *
 * Up to the lg switch this tree also serves tablets, so lists open into two
 * columns from sm and text blocks keep a readable measure. Sections carry a
 * scroll margin equal to the sticky header, so in-page links land below it.
 */

const SECTION_OFFSET = "scroll-mt-[4.5rem]";

/** The badge is 141.003 wide on this frame, against 267.158 on desktop. */
const PLAQUE_WIDTH = 141.003;

function Hero() {
  return (
    <section className="flex min-h-[48.875rem] w-full flex-col items-start justify-between overflow-hidden bg-plum pb-[1rem] pt-[5.5rem]">
      <div className="mx-auto flex w-full max-w-[36rem] flex-col items-center justify-center gap-[1.75rem] px-[1.5rem] pb-[5rem]">
        <div className="flex w-full flex-col items-start gap-[1rem] text-center">
          <h1 className="w-full text-[1.75rem] leading-[2.125rem] tracking-[-0.035rem] text-white">
            {HERO.headingLines.map((line, i) => (
              <span key={line} className="hero-line">
                <span
                  className="hero-line__inner"
                  style={{ "--hero-delay": `${200 + i * 120}ms` } as React.CSSProperties}
                >
                  {line}
                </span>
              </span>
            ))}
          </h1>
          <p
            className="hero-fade w-full text-[1rem] leading-[1.5rem] text-on-dark"
            style={{ "--hero-delay": "520ms" } as React.CSSProperties}
          >
            {HERO.body}
          </p>
        </div>
        <a
          href="#contact"
          style={{ "--hero-delay": "640ms" } as React.CSSProperties}
          className="hero-fade btn-wipe flex min-h-[3rem] items-center justify-center rounded-[0.25rem] border-l-4 border-r-4 border-l-plum-accent border-r-transparent bg-mist px-[1rem] py-[0.75rem] font-jakarta text-[0.9375rem] font-semibold whitespace-nowrap text-ink hover:text-white focus-visible:text-white"
        >
          {HERO.ctaMobile}
        </a>
      </div>

      <div
        className="hero-panel hero-panel--up relative h-[22.375rem] w-full shrink-0"
        style={{
          backgroundImage:
            "linear-gradient(118.466deg, rgb(42,42,42) 9.2845%, rgb(0,0,0) 66.561%)",
        }}
      >
        {/* Tiled at natural size, matching the desktop panel. */}
        <div aria-hidden className="hero-texture">
          <div
            className="hero-texture__sheet"
            style={{
              backgroundImage: "url(/assets/hero/texture.png)",
              backgroundRepeat: "repeat",
              backgroundSize: "559px 605px",
            }}
          />
        </div>
        {/* Badge centre sits at 48.5% of the frame in the design. */}
        <div className="absolute left-[48.5%] top-[5.956875rem] -translate-x-1/2">
          <div className="hero-plaque">
            <HeroPlaque width={PLAQUE_WIDTH} />
          </div>
        </div>
      </div>
    </section>
  );
}

function Mission() {
  return (
    <section
      id="about"
      className={`flex w-full flex-col items-center bg-white px-[1.5rem] py-[3rem] ${SECTION_OFFSET}`}
    >
      <div data-reveal-stagger className="flex w-full max-w-[40rem] flex-col items-center gap-[1.25rem] pt-[1.5rem]">
        <img
          src="/assets/brand/aquila-eagle.png"
          alt=""
          className="h-[2.233rem] w-[3.113rem] rotate-[0.82deg] object-contain"
        />
        <div className="flex w-full flex-col items-center justify-center gap-[4rem]">
          <p className="w-full text-center text-[1.375rem] leading-[1.33] text-black">
            {ABOUT_STATEMENT}
          </p>
          <AboutCarousel width={190.88} />
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section
      id="services"
      className={`flex w-full flex-col gap-[2rem] bg-mist px-[1rem] py-[3rem] ${SECTION_OFFSET}`}
    >
      <div data-reveal-stagger className="flex max-w-[36rem] flex-col gap-[0.75rem]">
        <h2 className="text-[1.75rem] leading-[2.125rem] text-ink">
          {SERVICES_HEADING.mobile}
        </h2>
        <p className="font-jakarta text-[0.9375rem] leading-[1.375rem] text-muted">
          {SERVICES_HEADING.body}
        </p>
      </div>

      <div data-reveal-stagger className="grid grid-cols-1 gap-[0.5rem] sm:grid-cols-2">
        {SERVICES.map((service) => (
          <article
            key={service.title}
            className="relative flex h-[13.375rem] w-full flex-col items-start justify-end overflow-hidden"
          >
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <Image
                src={service.image}
                alt=""
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
              {"imageOverlay" in service && service.imageOverlay ? (
                <Image
                  src={service.imageOverlay}
                  alt=""
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              ) : null}
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(102,102,102,0)_19.82%,rgba(0,0,0,0.8)_92.55%)]" />
            </div>
            <div className="relative flex w-full flex-col gap-[0.25rem] p-[1rem] text-white">
              <h3 className="text-[1.125rem] font-semibold leading-[1.6875rem] tracking-[-0.01em]">
                {service.title}
              </h3>
              <p className="text-[0.875rem] leading-[1.5]">{service.body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Standards() {
  return (
    <section
      id="standards"
      className={`flex w-full flex-col gap-[1.5rem] bg-cream px-[1rem] py-[3rem] ${SECTION_OFFSET}`}
    >
      <div data-reveal-stagger className="flex max-w-[36rem] flex-col gap-[0.5rem]">
        <h2 className="text-[1.75rem] leading-[2.125rem] text-ink">
          {STANDARDS_HEADING.title}
        </h2>
        <p className="text-[0.9375rem] leading-[1.375rem] text-muted">
          {STANDARDS_HEADING.body}
        </p>
      </div>

      <div data-reveal-stagger className="grid grid-cols-1 gap-[0.75rem] gap-y-[3px] sm:grid-cols-2">
        {STANDARDS.filter((standard) => standard.onMobile).map((standard) => (
          <article
            key={standard.code}
            className="flex flex-col gap-[1rem] bg-white pb-[1rem] pl-[1rem]"
          >
            <div className="flex h-[5.75rem] items-stretch justify-start gap-[2px]">
              <div className="flex min-w-0 flex-1 flex-col justify-between pt-[1rem]">
                <p className="text-[1.25rem] leading-[1.5rem] text-faint">
                  {standard.mobileCode}
                </p>
                <p className="text-[1rem] font-medium leading-[1.5rem] text-ink">
                  {standard.area}
                </p>
              </div>
              <div className="relative min-h-[5.75rem] w-[10.625rem] shrink-0 overflow-hidden">
                <Image
                  src={standard.image}
                  alt=""
                  fill
                  sizes="10.625rem"
                  className="object-cover"
                  style={{ objectPosition: standard.objectPosition }}
                />
              </div>
            </div>
            <p className="pr-[1rem] text-[0.75rem] leading-[1.125rem] text-muted">
              {standard.body}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      className={`flex w-full flex-col gap-[2rem] bg-white px-[1rem] py-[3rem] ${SECTION_OFFSET}`}
    >
      <div className="flex w-full max-w-[36rem] flex-col gap-[1.125rem]">
        <div data-reveal-stagger className="flex flex-col gap-[1rem]">
          <h2 className="text-[1.625rem] leading-[2rem] text-ink">
            {CONTACT.headingDesktop}
          </h2>
          <p className="text-[0.875rem] leading-[1.25rem] text-muted">{CONTACT.body}</p>
        </div>

        <div className="flex flex-col gap-[0.625rem]">
          <p className="text-[0.875rem] font-medium leading-[1.125rem] text-ink">
            ENQUIRY CATEGORIES
          </p>
          <div data-reveal-stagger className="flex flex-col gap-[0.1875rem]">
            {ENQUIRY_CATEGORIES.map((category, index) => (
              <div
                key={`${category}-${index}`}
                className="flex w-full items-center gap-[0.75rem] border-b border-[rgba(0,0,0,0.09)] py-[0.75rem] last:border-b-0"
              >
                <div className="flex size-[1.5rem] shrink-0 items-center justify-center bg-chip">
                  <img src="/assets/icons/check.svg" alt="" className="size-[0.875rem]" />
                </div>
                <p className="text-[1rem] leading-[1.5rem] text-body">{category}</p>
              </div>
            ))}
          </div>
        </div>

        <div data-reveal className="flex flex-col gap-[0.5rem] rounded-[0.375rem] bg-[#f6f6f6] p-[1rem]">
          <p className="text-[0.75rem] font-medium leading-[1rem] text-plum">
            {CONTACT.accreditationLabel}
          </p>
          <p className="text-[0.8125rem] leading-[1.125rem] text-ink">
            {CONTACT.accreditationBody}
          </p>
        </div>
      </div>

      <div data-reveal className="relative isolate flex min-h-[25.125rem] w-full flex-col justify-between gap-[4rem] overflow-hidden rounded-[0.75rem] bg-cream p-[1.5rem]">
        <img
          src="/assets/icons/phone-call-loop-lg.svg"
          alt=""
          aria-hidden
          className="pointer-events-none absolute right-0 top-[9.9375rem] -z-10 size-[14.75rem] max-w-none -scale-x-100"
        />

        <div className="flex w-full flex-col gap-[1.25rem]">
          <p className="text-[1.375rem] leading-[1.8125rem] text-ink">{CONTACT.cardHeading}</p>

          <div className="flex flex-col gap-[1rem]">
            <a href={`mailto:${CONTACT.email}`} className="flex min-h-[2.75rem] items-center gap-[0.75rem]">
              <span className="flex size-[2rem] shrink-0 items-center justify-center rounded-[6.25rem] bg-[rgba(84,82,82,0.1)] text-plum">
                <span
                  aria-hidden
                  className="icon-mask size-[0.875rem]"
                  style={{ "--icon": "url(/assets/icons/mail.svg)" } as React.CSSProperties}
                />
              </span>
              <span className="flex min-w-px flex-1 flex-col gap-[0.125rem]">
                <span className="text-[0.6875rem] leading-[0.875rem] text-muted">EMAIL US</span>
                <span className="text-[0.875rem] font-medium leading-[1.125rem] break-all text-plum-deep">
                  {CONTACT.email}
                </span>
              </span>
            </a>

            <a
              href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
              className="flex min-h-[2.75rem] items-center gap-[0.75rem]"
            >
              <span className="flex size-[2rem] shrink-0 items-center justify-center rounded-[6.25rem] bg-[rgba(84,82,82,0.1)] text-plum">
                <span
                  aria-hidden
                  className="icon-mask size-[0.875rem]"
                  style={{ "--icon": "url(/assets/icons/phone.svg)" } as React.CSSProperties}
                />
              </span>
              <span className="flex min-w-px flex-1 flex-col gap-[0.125rem]">
                <span className="text-[0.6875rem] leading-[0.875rem] text-muted">CALL US</span>
                <span className="text-[0.875rem] font-medium leading-[1.125rem] whitespace-nowrap text-plum-deep">
                  {CONTACT.phone}
                </span>
              </span>
            </a>
          </div>
        </div>

        <a
          href={`mailto:${CONTACT.email}`}
          className="btn-fill-center btn-fill-invert flex min-h-[2.875rem] w-full items-center justify-center rounded-[0.375rem] bg-plum p-[0.875rem] text-[0.875rem] font-semibold leading-[1.125rem] whitespace-nowrap text-white hover:text-plum focus-visible:text-plum"
        >
          Get a Quote Now
        </a>
      </div>
    </section>
  );
}

/** `base` prefixes section anchors, as on the desktop footer. */
export function Footer({ base = "" }: { base?: string } = {}) {
  return (
    <footer className="flex w-full flex-col gap-[2rem] bg-plum-deep px-[1rem] pb-[1.5rem] pt-[2.5rem]">
      <div className="flex flex-col gap-[0.75rem]">
        <div className="flex items-center gap-[0.5rem]">
          {/* Shares the desktop footer's light mark. Figma's 24px export of
              this node dropped the glyph and clipped to a white square. */}
          <img
            src="/assets/brand/aquila-mark-light.svg"
            alt=""
            className="size-[1.5rem]"
          />
          <p className="text-[0.9375rem] font-medium whitespace-nowrap text-white">
            ACQUILA
          </p>
        </div>
        <p className="font-jakarta text-[0.75rem] leading-[1.125rem] text-on-dark-soft">
          {FOOTER.blurb}
        </p>
      </div>

      <div className="flex flex-col items-start whitespace-nowrap">
        <p className="mb-[0.25rem] font-outfit text-[0.75rem] font-bold text-white">RESOURCES</p>
        {FOOTER.resources.map((item) => (
          <a
            key={item.label}
            href={`${base}${item.href}`}
            className="group flex min-h-[2.75rem] items-center font-jakarta text-[0.9375rem] text-on-dark-soft transition-colors duration-300 hover:text-white focus-visible:text-white"
          >
            <span className="link-underline link-underline-light">{item.label}</span>
          </a>
        ))}
      </div>

      <div className="flex flex-col gap-[1.25rem] border-t border-[rgba(229,231,235,0.13)] pt-[1.25rem]">
        <div className="flex items-start gap-[0.75rem]">
          {FOOTER.socials.map((social) => (
            <SocialButton
              key={social.name}
              social={social}
              className="size-[2.75rem]"
              iconClassName="size-[1rem]"
            />
          ))}
        </div>
        <div className="flex flex-wrap items-center justify-between gap-x-[1rem] font-jakarta text-[0.75rem] whitespace-nowrap text-on-dark-faint">
          <p>{FOOTER.copyright}</p>
          <div className="flex items-center gap-[1rem]">
            {FOOTER.legalMobile.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="link-underline link-underline-light py-[0.75rem] transition-colors duration-300 hover:text-white focus-visible:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export function HomeMobile() {
  return (
    <div id="top" className="flex w-full flex-col items-start bg-white">
      <MobileNav />
      <Hero />
      <Mission />
      <Services />
      <Standards />
      <Contact />
      <Footer />
    </div>
  );
}

import Image from "next/image";
import { HeroPlaque } from "./HeroPlaque";
import {
  ABOUT_STATEMENT,
  CONTACT,
  ENQUIRY_CATEGORIES_MOBILE,
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
 */

/** The badge is 141.003 wide on this frame, against 267.158 on desktop. */
const PLAQUE_WIDTH = 141.003;

function NavBar() {
  return (
    <header className="flex w-full items-center justify-between border-b border-line bg-white px-[1rem] py-[0.875rem]">
      <div className="flex items-end gap-[0.368812rem]">
        <img
          src="/assets/brand/aquila-mark.svg"
          alt=""
          className="h-[2.221188rem] w-[2.226rem]"
        />
        <div className="relative h-[1.560812rem] w-[6.743875rem]">
          <img
            src="/assets/brand/aquila-wordmark.svg"
            alt="Acquila"
            className="absolute left-[0.001875rem] top-[-0.16875rem] h-[1.552188rem] w-[6.738562rem] max-w-none"
          />
        </div>
      </div>
      <a
        href="#contact"
        className="shrink-0 rounded-[0.25rem] bg-plum-deep px-[1rem] py-[0.5rem] text-[0.75rem] font-semibold whitespace-nowrap text-white"
      >
        Get Quote
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section className="flex h-[48.875rem] w-full flex-col items-start justify-between overflow-hidden bg-plum pb-[1rem] pt-[6.5rem]">
      <div className="flex w-full flex-col items-center justify-center gap-[1.75rem] px-[1.5rem] pb-[5rem]">
        <div className="flex w-full flex-col items-start gap-[1rem] text-center">
          <h1 className="w-full text-[1.75rem] leading-[2.125rem] tracking-[-0.035rem] text-white">
            {HERO.headingMobile}
          </h1>
          <p className="w-full text-[0.875rem] leading-[1.25rem] text-on-dark">
            {HERO.body}
          </p>
        </div>
        <a
          href="#contact"
          className="flex items-start justify-center rounded-[0.25rem] border-l-4 border-plum-accent bg-mist px-[1rem] py-[0.75rem] font-jakarta text-[0.9375rem] font-semibold whitespace-nowrap text-ink"
        >
          {HERO.ctaMobile}
        </a>
      </div>

      <div
        className="relative h-[22.375rem] w-full shrink-0"
        style={{
          backgroundImage:
            "linear-gradient(118.466deg, rgb(42,42,42) 9.2845%, rgb(0,0,0) 66.561%)",
        }}
      >
        {/* Tiled at natural size, matching the desktop panel. */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            backgroundImage: "url(/assets/hero/texture.png)",
            backgroundRepeat: "repeat",
            backgroundSize: "559px 605px",
          }}
        />
        {/* Badge centre sits at 48.5% of the frame in the design. */}
        <div className="absolute left-[48.5%] top-[5.956875rem] -translate-x-1/2">
          <HeroPlaque width={PLAQUE_WIDTH} />
        </div>
      </div>
    </section>
  );
}

function Mission() {
  return (
    <section id="about" className="w-full bg-cream px-[1rem] py-[3rem]">
      <p className="text-[1.125rem] font-medium leading-[1.5625rem] text-ink">
        {ABOUT_STATEMENT}
      </p>
    </section>
  );
}

function Services() {
  return (
    <section
      id="services"
      className="flex w-full flex-col gap-[2rem] bg-mist px-[1rem] py-[3rem]"
    >
      <div className="flex flex-col gap-[0.75rem]">
        <h2 className="text-[1.75rem] leading-[2.125rem] text-ink">
          {SERVICES_HEADING.mobile}
        </h2>
        <p className="font-jakarta text-[0.875rem] leading-[1.25rem] text-muted">
          {SERVICES_HEADING.body}
        </p>
      </div>

      <div className="flex flex-col gap-[1rem]">
        {SERVICES.map((service) => (
          <article
            key={service.title}
            className="flex flex-col gap-[0.75rem] rounded-[0.5rem] border border-line bg-white p-[1rem]"
          >
            <div className="relative h-[10rem] w-full overflow-hidden rounded-[0.375rem]">
              <Image
                src={service.image}
                alt=""
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
            <h3 className="text-[1.125rem] font-semibold text-plum">
              {service.title}
            </h3>
            <p className="text-[0.8125rem] leading-[1.125rem] text-muted">
              {service.body}
            </p>
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
      className="flex w-full flex-col gap-[1.5rem] bg-cream px-[1rem] py-[3rem]"
    >
      <div className="flex flex-col gap-[0.5rem]">
        <h2 className="text-[1.75rem] leading-[2.125rem] text-ink">
          {STANDARDS_HEADING.title}
        </h2>
        <p className="text-[0.875rem] leading-[1.25rem] text-muted">
          {STANDARDS_HEADING.body}
        </p>
      </div>

      <div className="flex flex-col gap-[0.75rem]">
        {STANDARDS.filter((standard) => standard.onMobile).map((standard) => (
          <article
            key={standard.code}
            className="flex flex-col gap-[0.75rem] rounded-[0.5rem] border border-line bg-white p-[1rem]"
          >
            <div className="flex items-center justify-between gap-[0.5rem]">
              <p className="text-[1.375rem] whitespace-nowrap text-plum">
                {standard.mobileCode}
              </p>
              <div className="shrink-0 rounded-[6.25rem] bg-cream px-[0.625rem] py-[0.25rem]">
                <p className="text-[0.6875rem] font-medium whitespace-nowrap text-plum-deep">
                  {standard.area}
                </p>
              </div>
            </div>
            <p className="text-[0.8125rem] leading-[1.125rem] text-muted">
              {standard.body}
            </p>
            <div className="relative h-[8.75rem] w-full overflow-hidden rounded-[0.375rem]">
              <Image
                src={standard.image}
                alt=""
                fill
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[rgba(0,0,0,0.1)]" />
            </div>
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
      className="flex w-full flex-col gap-[2rem] bg-white px-[1rem] py-[3rem]"
    >
      <div className="flex flex-col gap-[1rem]">
        <h2 className="text-[1.625rem] leading-[2rem] text-ink">
          {CONTACT.headingDesktop}
        </h2>
        <p className="text-[0.875rem] leading-[1.25rem] text-muted">{CONTACT.body}</p>
      </div>

      <div className="flex flex-col gap-[0.625rem]">
        <p className="text-[0.875rem] font-medium whitespace-nowrap text-ink">
          ENQUIRY CATEGORIES
        </p>
        {ENQUIRY_CATEGORIES_MOBILE.map((category) => (
          <div
            key={category}
            className="flex w-full items-center gap-[0.625rem] rounded-[0.25rem] border border-line bg-mist p-[0.75rem]"
          >
            <img
              src="/assets/icons/check.svg"
              alt=""
              className="size-[1rem] shrink-0"
            />
            <p className="text-[0.875rem] whitespace-nowrap text-ink">{category}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-[0.5rem] rounded-[0.375rem] bg-cream p-[1rem]">
        <p className="text-[0.75rem] whitespace-nowrap text-plum">
          {CONTACT.accreditationLabel}
        </p>
        <p className="text-[0.8125rem] leading-[1.125rem] text-ink">
          {CONTACT.accreditationBody}
        </p>
      </div>

      <div className="flex flex-col gap-[1.25rem] rounded-[0.75rem] bg-cream p-[1.5rem]">
        <p className="text-[1.375rem] text-ink">{CONTACT.cardHeading}</p>

        <div className="flex flex-col gap-[1rem]">
          <div className="flex items-center gap-[0.75rem]">
            <div className="flex size-[2rem] shrink-0 items-center justify-center rounded-[6.25rem] bg-[rgba(84,82,82,0.1)]">
              <img src="/assets/icons/mail.svg" alt="" className="size-[0.875rem]" />
            </div>
            <div className="flex min-w-px flex-1 flex-col gap-[0.125rem]">
              <p className="text-[0.6875rem] whitespace-nowrap text-muted">EMAIL US</p>
              <a
                href={`mailto:${CONTACT.email}`}
                className="text-[0.875rem] font-medium whitespace-nowrap text-plum-deep"
              >
                {CONTACT.email}
              </a>
            </div>
          </div>

          <div className="flex items-center gap-[0.75rem]">
            <div className="flex size-[2rem] shrink-0 items-center justify-center rounded-[6.25rem] bg-[rgba(84,82,82,0.1)]">
              <img
                src="/assets/icons/phone.svg"
                alt=""
                className="size-[0.875rem]"
              />
            </div>
            <div className="flex min-w-px flex-1 flex-col gap-[0.125rem]">
              <p className="text-[0.6875rem] whitespace-nowrap text-muted">CALL US</p>
              <a
                href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                className="text-[0.875rem] font-medium whitespace-nowrap text-plum-deep"
              >
                {CONTACT.phone}
              </a>
            </div>
          </div>
        </div>

        <a
          href={`mailto:${CONTACT.email}`}
          className="flex w-full items-center justify-center rounded-[0.375rem] bg-plum p-[0.875rem] text-[0.875rem] font-semibold whitespace-nowrap text-white"
        >
          Get a Quote Now
        </a>
      </div>
    </section>
  );
}

function Footer() {
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

      <div className="flex flex-col items-start gap-[0.75rem] whitespace-nowrap">
        <p className="font-outfit text-[0.75rem] font-bold text-white">RESOURCES</p>
        {FOOTER.resources.map((item) => (
          <a
            key={item}
            href="#"
            className="font-jakarta text-[0.8125rem] text-on-dark-soft"
          >
            {item}
          </a>
        ))}
      </div>

      <div className="flex flex-col gap-[1.25rem] border-t border-[rgba(229,231,235,0.13)] pt-[1.25rem]">
        <div className="flex items-start gap-[0.75rem]">
          {FOOTER.socials.map((social) => (
            <a
              key={social.name}
              href="#"
              aria-label={social.name}
              className="flex size-[1.75rem] items-center justify-center rounded-[6.25rem] bg-white"
            >
              <img src={social.icon} alt="" className="size-[0.75rem]" />
            </a>
          ))}
        </div>
        <div className="flex items-start justify-between font-jakarta text-[0.6875rem] whitespace-nowrap text-on-dark-faint">
          <p>{FOOTER.copyright}</p>
          <div className="flex items-start gap-[0.75rem]">
            {FOOTER.legalMobile.map((item) => (
              <a key={item} href="#">
                {item}
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
    <div className="flex w-full flex-col items-start bg-white">
      <NavBar />
      <Hero />
      <Mission />
      <Services />
      <Standards />
      <Contact />
      <Footer />
    </div>
  );
}

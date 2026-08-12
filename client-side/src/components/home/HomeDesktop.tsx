import Image from "next/image";
import { AboutCarousel } from "./AboutCarousel";
import { HeroPlaque } from "./HeroPlaque";
import {
  ABOUT_STATEMENT,
  CONTACT,
  ENQUIRY_CATEGORIES_DESKTOP,
  FOOTER,
  HERO,
  NAV_LINKS,
  SERVICES,
  SERVICES_HEADING,
  STANDARDS,
  STANDARDS_HEADING,
} from "@/lib/content";

/**
 * Desktop composition — Figma node 1:438, drawn on a 1440 frame.
 *
 * Design values are in rem against a fixed 16px root, so 1rem === 1 design
 * pixel and the render is 1:1 with the frame at 1440. Section backgrounds run
 * full-bleed and their columns are flexible, so the page fills 100vw at any
 * width and compresses below 1440 rather than overflowing and being clipped.
 */

function Wordmark({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const suffix = tone === "light" ? "-light" : "";
  return (
    <div className="flex items-end gap-[0.368812rem]">
      <img
        src={`/assets/brand/aquila-mark${suffix}.svg`}
        alt=""
        className="h-[2.221188rem] w-[2.226rem]"
      />
      <div className="relative h-[1.560812rem] w-[6.743875rem]">
        <img
          src={`/assets/brand/aquila-wordmark${suffix}.svg`}
          alt="Acquila"
          className="absolute left-[0.001875rem] top-[-0.16875rem] h-[1.552188rem] w-[6.738562rem] max-w-none"
        />
      </div>
    </div>
  );
}

function NavBar() {
  return (
    <header className="flex h-[4.6875rem] w-full items-center justify-between border-b border-line bg-white px-[5rem]">
      <div className="flex h-full flex-col items-center justify-center py-[0.875rem]">
        <Wordmark />
      </div>
      <nav className="flex items-center gap-[2.5rem] pb-[0.1875rem] text-[1rem] font-medium leading-[1.5rem] text-body">
        {NAV_LINKS.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="link-underline whitespace-nowrap transition-colors duration-300 hover:text-plum focus-visible:text-plum"
          >
            {link}
          </a>
        ))}
      </nav>
      <div className="flex items-center">
        <a
          href="#contact"
          className="btn-fill-center flex items-center justify-center border border-[rgba(61,61,61,0.48)] px-[1.75rem] py-[0.875rem] text-[1rem] font-semibold whitespace-nowrap text-[#1f1f1f] shadow-[0rem_0.625rem_0.75rem_rgba(0,0,0,0.08)] hover:border-plum hover:text-white focus-visible:border-plum focus-visible:text-white"
        >
          {HERO.ctaDesktop}
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative h-[43.8125rem] w-full overflow-hidden bg-plum">
      {/* Dark panel. Width is the design's 618.98/1440 as a percentage so the
          split holds at any viewport instead of a fixed width that can overrun
          a narrow one and get clipped. */}
      <div
        className="absolute inset-y-0 right-0 w-[42.985%] overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(208.956deg, rgb(42,42,42) 9.2845%, rgb(0,0,0) 66.561%)",
        }}
      >
        {/* Tiled at its natural size rather than stretched to cover, so the
            pattern keeps its own scale and repeats across the panel. */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            backgroundImage: "url(/assets/hero/texture.png)",
            backgroundRepeat: "repeat",
            backgroundSize: "559px 605px",
          }}
        />
        {/* Badge centre sits at 52.1% of the panel in the design. */}
        <div className="absolute left-[52.1%] top-[13.41rem] -translate-x-1/2">
          <HeroPlaque />
        </div>
      </div>

      {/* Statement */}
      {/* Gutter and column are the design's 73.76/1440 and 512.8/1440, kept as
          percentages so the statement never runs under the dark panel. */}
      <div className="absolute left-[5.12%] top-[calc(50%-1.7575rem)] w-[35.6%] -translate-y-1/2">
        <div className="flex flex-col gap-[2.5rem]">
          <div className="flex flex-col gap-[1.75rem]">
            <h1 className="text-[3.5rem] leading-[3.5rem] tracking-[-0.14rem] text-white">
              {HERO.headingLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
            <p className="text-[1.125rem] leading-[1.6875rem] text-on-dark">{HERO.body}</p>
          </div>
          {/* The right border is transparent, so it paints the button's own
              background — leaving a stroke in the resting fill colour once the
              wipe has covered the interior. */}
          <a
            href="#contact"
            className="btn-wipe flex items-center justify-center self-start border-l-4 border-r-4 border-l-plum-accent border-r-transparent bg-mist px-[1.75rem] py-[0.875rem] font-jakarta text-[1rem] font-semibold whitespace-nowrap text-[#242424] shadow-[0rem_0.625rem_0.75rem_rgba(0,0,0,0.08)] hover:text-white focus-visible:text-white"
          >
            {HERO.ctaDesktop}
          </a>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section
      id="about"
      className="flex h-[38.9375rem] w-full items-center justify-center overflow-hidden px-[5rem]"
    >
      <div className="flex w-full items-center justify-between gap-[3rem]">
        <p className="min-w-0 max-w-[41.835938rem] flex-1 text-[2rem] leading-[1.48] text-black">
          {ABOUT_STATEMENT}
        </p>
        <AboutCarousel />
      </div>
    </section>
  );
}

function Services() {
  return (
    <section
      id="services"
      className="flex w-full flex-col items-start gap-[4rem] overflow-hidden bg-mist px-[5rem] py-[7.5rem]"
    >
      <div className="flex w-full flex-col items-center gap-[1rem] rounded-[1.25rem] p-[2.5rem] text-center">
        <h2 className="w-full max-w-[40rem] text-[3rem] leading-[3.25rem] tracking-[-0.12rem] text-ink-soft">
          {SERVICES_HEADING.desktop}
        </h2>
        <p className="w-full max-w-[40rem] font-jakarta text-[1rem] leading-[1.5rem] text-body">
          {SERVICES_HEADING.body}
        </p>
      </div>

      <div className="flex w-full items-start gap-[0.5rem]">
        {SERVICES.map((service) => (
          <article
            key={service.title}
            className="relative flex h-[28.5625rem] min-w-px flex-1 flex-col items-start justify-end gap-[2.1875rem] overflow-hidden pb-[1.5rem]"
          >
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <Image
                src={service.image}
                alt=""
                fill
                sizes="25vw"
                className="object-cover"
              />
              {"imageOverlay" in service && service.imageOverlay ? (
                <Image
                  src={service.imageOverlay}
                  alt=""
                  fill
                  sizes="25vw"
                  className="object-cover"
                />
              ) : null}
              <div
                className="absolute inset-0"
                style={{ backgroundImage: service.scrim }}
              />
            </div>
            <div className="relative h-[16.5rem] w-full shrink-0 rounded-br-[43.75rem]" />
            {/* `relative` is load-bearing: the art sits in an absolutely
                positioned overlay, which would otherwise paint over this
                static text. */}
            <div className="relative flex h-[6.625rem] w-full shrink-0 items-start px-[1.5rem]">

              <div className="flex min-w-px flex-1 flex-col gap-[0.75rem] text-white">
                <h3 className="text-[1.25rem] font-semibold tracking-[-0.0125rem]">
                  {service.title}
                </h3>
                <p className="text-[0.875rem] leading-[1.5]">{service.body}</p>
              </div>
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
      className="flex w-full items-start overflow-hidden bg-cream px-[4.5rem] py-[7.5rem]"
    >
      <div className="flex w-full flex-col gap-[4rem]">
        <div className="flex items-start gap-[4rem] xl:gap-[7.5rem]">
          <h2 className="w-[35rem] min-w-0 shrink text-[3rem] leading-[3.25rem] tracking-[-0.12rem] text-ink-soft">
            {STANDARDS_HEADING.title}
          </h2>
          <p className="w-[26.875rem] min-w-0 shrink text-[1rem] leading-[1.6875rem] text-muted">
            {STANDARDS_HEADING.body}
          </p>
        </div>

        <div className="flex flex-col gap-[0.125rem]">
          {STANDARDS.map((standard) => (
            <div
              key={standard.code}
              className="flex h-[8.25rem] w-full items-center overflow-hidden bg-white"
            >
              <div className="flex h-full min-w-0 shrink flex-col justify-center p-[1.5rem]">
                <div className="w-[20.3125rem] min-w-0">
                  <p className="w-[16.98875rem] min-w-0 max-w-full text-[1.75rem] leading-[2.25rem] text-faint">
                    {standard.code}
                  </p>
                </div>
              </div>
              {/* Description and image share the remaining track evenly, which
                  reproduces the design's 407/407 split at 1440 while letting the
                  row compress on narrower screens instead of overflowing. */}
              <div className="flex h-full min-w-px flex-1 items-center gap-[3rem] xl:gap-[6.75rem]">
                <div className="flex h-full min-w-0 flex-1 flex-col gap-[0.5rem] py-[1.5rem]">
                  <div className="w-[18.75rem]">
                    <p className="w-[17.25rem] text-[1.125rem] font-medium leading-[1.6875rem] text-ink">
                      {standard.area}
                    </p>
                  </div>
                  <p className="text-[0.875rem] leading-[1.25rem] text-muted">
                    {standard.body}
                  </p>
                </div>
                <div className="relative h-full min-w-0 flex-1 overflow-hidden bg-white">
                  <Image
                    src={standard.image}
                    alt=""
                    fill
                    sizes="25.4375rem"
                    className="object-cover"
                    style={{ objectPosition: standard.objectPosition }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      className="flex w-full items-start gap-[2rem] bg-white px-[5rem] py-[7.5rem]"
    >
      <div className="flex min-w-px flex-1 flex-col gap-[2rem]">
        <div className="flex w-full max-w-[39rem] flex-col gap-[2.5rem] pr-[2.5rem]">
          <div className="flex flex-col gap-[0.75rem]">
            <h2 className="w-full max-w-[33.105688rem] text-[2.5rem] leading-[2.6875rem] tracking-[-0.1rem] text-ink-soft">
              {CONTACT.headingDesktop}
            </h2>
            <p className="text-[1rem] leading-[1.6] text-body">{CONTACT.body}</p>
          </div>

          <div className="flex flex-col gap-[1rem]">
            <p className="text-[1.125rem] font-medium tracking-[-0.03375rem] whitespace-nowrap text-ink">
              Enquiry categories
            </p>
            <div className="flex flex-col gap-[0.75rem]">
              <img
                src="/assets/icons/phone-call-loop-sm.svg"
                alt=""
                className="size-[1.5rem]"
              />
              {ENQUIRY_CATEGORIES_DESKTOP.map((category, index) => (
                <div
                  key={`${category}-${index}`}
                  className="flex w-full items-center gap-[0.75rem] border-b border-[rgba(0,0,0,0.09)] py-[0.75rem]"
                >
                  <div className="flex size-[1.5rem] shrink-0 items-center justify-center overflow-hidden bg-chip">
                    <img
                      src="/assets/icons/check.svg"
                      alt=""
                      className="size-[0.875rem]"
                    />
                  </div>
                  <p className="text-[1rem] leading-[1.5rem] whitespace-nowrap text-body">
                    {category}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col pr-[2.5rem]">
          <div className="flex w-full flex-col gap-[0.75rem] bg-cream p-[1rem]">
            <p className="text-[0.75rem] text-plum-deep">
              {CONTACT.accreditationLabel}
            </p>
            <p className="text-[1rem] tracking-[-0.02rem] text-slate-900">
              {CONTACT.accreditationBody}
            </p>
          </div>
        </div>
      </div>

      <div
        className="relative flex w-[39rem] min-w-0 shrink flex-col gap-[2.5rem] self-stretch overflow-hidden p-[3rem]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.56), rgba(255,255,255,0.56)), linear-gradient(rgb(242,239,233), rgb(242,239,233))",
        }}
      >
        <div className="absolute left-[15.875rem] top-[22.375rem] size-[26.0625rem] -scale-y-100 rotate-180">
          <img
            src="/assets/icons/phone-call-loop-lg.svg"
            alt=""
            className="size-full"
          />
        </div>

        <div className="relative flex w-full flex-col gap-[2.5rem]">
          <div className="flex flex-col gap-[0.5rem]">
            <h2 className="text-[2.5rem] leading-[2.6875rem] tracking-[-0.1rem] text-ink-soft">
              {CONTACT.cardHeading}
            </h2>
            <p className="text-[0.875rem] text-body">{CONTACT.cardSub}</p>
          </div>

          <div className="flex flex-col gap-[1.5rem]">
            <div className="flex items-start gap-[1rem]">
              <div className="flex size-[2.5rem] shrink-0 items-center justify-center bg-[rgba(84,82,82,0.05)]">
                <img
                  src="/assets/icons/mail.svg"
                  alt=""
                  className="size-[1.125rem]"
                />
              </div>
              <div className="flex min-w-px flex-1 flex-col gap-[0.25rem]">
                <p className="text-[0.75rem] text-slate-600">EMAIL US</p>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-[1.125rem] font-medium leading-[1.6875rem] tracking-[-0.0225rem] text-slate-900"
                >
                  {CONTACT.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-[1rem]">
              <div className="flex size-[2.5rem] shrink-0 items-center justify-center bg-[rgba(84,82,82,0.05)]">
                <img
                  src="/assets/icons/phone.svg"
                  alt=""
                  className="size-[1.125rem]"
                />
              </div>
              <div className="flex min-w-px flex-1 flex-col gap-[0.25rem]">
                <p className="text-[0.75rem] text-slate-600">
                  {CONTACT.accreditationLabel}
                </p>
                <a
                  href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                  className="text-[1.125rem] font-medium leading-[1.6875rem] tracking-[-0.0225rem] text-slate-900"
                >
                  {CONTACT.phone}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* mt-auto absorbs the leftover height, so the button sits on the card
            floor and the gap above it grows with the card instead of being a
            fixed step after the contact details. */}
        <div className="relative mt-auto flex w-full flex-col pt-[1rem]">
          <a
            href={`mailto:${CONTACT.email}`}
            className="flex w-full items-center justify-center bg-plum px-[1.75rem] py-[1.6875rem] text-[1.125rem] font-semibold leading-[1.6875rem] whitespace-nowrap text-white drop-shadow-[0rem_0.625rem_0.75rem_rgba(0,0,0,0.08)]"
          >
            {HERO.ctaDesktop}
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="flex w-full flex-col gap-[4rem] bg-plum-deep px-[5rem] pb-[2.5rem] pt-[5rem]">
      <div className="flex w-full items-start justify-between">
        <div className="flex w-[22.5rem] flex-col gap-[1rem]">
          <div className="flex h-[4.6875rem] flex-col items-start justify-center py-[0.875rem]">
            <Wordmark tone="light" />
          </div>
          <p className="font-jakarta text-[0.875rem] leading-[1.5] text-on-dark-soft">
            {FOOTER.blurb}
          </p>
        </div>

        <div className="flex items-start gap-[5rem]">
          <div className="flex flex-col items-start gap-[1rem] text-[0.875rem] whitespace-nowrap">
            <p className="font-outfit font-bold text-white">RESOURCES</p>
            {FOOTER.resources.map((item) => (
              <a
                key={item}
                href="#"
                className="link-underline link-underline-light font-jakarta text-on-dark-soft transition-colors duration-300 hover:text-white focus-visible:text-white"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex flex-col items-start gap-[1rem]">
            <p className="font-outfit text-[0.875rem] font-bold whitespace-nowrap text-white">
              CONNECT
            </p>
            <div className="flex items-start gap-[0.75rem]">
              {FOOTER.socials.map((social) => (
                <a
                  key={social.name}
                  href="#"
                  aria-label={social.name}
                  className="flex size-[2.25rem] items-center justify-center rounded-[1.125rem] border border-line bg-white"
                >
                  <img src={social.icon} alt="" className="size-[0.875rem]" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full items-start justify-between border-t border-[rgba(229,231,235,0.21)] pt-[1.5rem] font-jakarta text-[0.8125rem] whitespace-nowrap text-on-dark-faint">
        <p>{FOOTER.copyright}</p>
        <div className="flex items-start gap-[1.5rem]">
          {FOOTER.legalDesktop.map((item) => (
            <a key={item} href="#">
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export function HomeDesktop() {
  return (
    <div className="flex w-full flex-col items-start bg-white">
      <NavBar />
      <Hero />
      <About />
      <Services />
      <Standards />
      <Contact />
      <Footer />
    </div>
  );
}

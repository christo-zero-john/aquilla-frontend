/**
 * Content lifted from the Acquila Figma file.
 *
 * Desktop (node 1:438) and mobile (node 1:668) are separate compositions and
 * their copy differs in places — where it does, both variants are recorded here
 * rather than reconciled, so each breakpoint stays faithful to its own frame.
 */

export const NAV_LINKS = ["About", "Standards", "Services", "Contact"] as const;

export const HERO = {
  /** Desktop sets the line break explicitly; mobile lets it wrap. */
  headingLines: ["Clarity to see further.", "Precision to meet the standard."],
  headingMobile: "Clarity to see further. Precision to meet the standard.",
  body: "Acquila supports organisations across management system and industry standards with practical implementation, training, and readiness support.",
  ctaDesktop: "Get a Quote",
  ctaMobile: "Request Quote Process",
} as const;

export const ABOUT_STATEMENT =
  "We turn complex standard requirements into clear, workable systems - helping organisations strengthen processes, responsibilities, documentation, and team readiness across day-to-day operations.";

/** About-section carousel. Order is the Figma stacking order (index 0 is the base layer). */
export const CAROUSEL = [
  { src: "/assets/carousel/automotive.png", alt: "Automotive production line" },
  { src: "/assets/carousel/food-lab.png", alt: "Food testing laboratory" },
  { src: "/assets/carousel/aerospace.png", alt: "Aerospace assembly" },
  { src: "/assets/carousel/solar.png", alt: "Solar installation" },
  { src: "/assets/carousel/pharma.png", alt: "Pharmaceutical production" },
  { src: "/assets/carousel/data-center.png", alt: "Data centre" },
] as const;

export const SERVICES_HEADING = {
  desktop: "Focused support for every stage of certification readiness.",
  mobile: "Focused support for every stage of certification.",
  body: "Four clear service areas, designed to help organisations build stronger systems and prepare with confidence.",
} as const;

export const SERVICES = [
  {
    title: "Certification Support",
    body: "Guidance through assessment, implementation, and preparation for certification.",
    image: "/assets/services/certification-support.png",
    /** Desktop card scrim, straight from the Figma fill stack. */
    scrim:
      "linear-gradient(to bottom, rgba(102,102,102,0) 34.057%, rgba(17,30,45,0.8) 100%)",
  },
  {
    title: "Management System Assessment",
    body: "Practical support to build, improve, and maintain effective management systems.",
    image: "/assets/services/management-system-a.png",
    /** This card layers a second photo above the first on desktop only. */
    imageOverlay: "/assets/services/management-system-b.png",
    scrim: "linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2))",
  },
  {
    title: "Training & Awareness",
    body: "Focused training to help teams understand standards, responsibilities, and best practices.",
    image: "/assets/services/training-awareness.png",
    scrim: "linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2))",
  },
  {
    title: "Audit Readiness Support",
    body: "Gap reviews, documentation checks, and preparation for external audits.",
    image: "/assets/services/audit-readiness.png",
    scrim:
      "linear-gradient(to bottom, rgba(102,102,102,0) 34.057%, rgba(0,0,0,0.8) 100%)",
  },
] as const;

export const STANDARDS_HEADING = {
  title: "Standards We Support",
  body: "Explore the management system and industry standards Acquila currently supports.",
} as const;

/**
 * `objectPosition` reproduces the per-row image crop from the desktop frame,
 * where Figma expressed it as an oversized image with a negative top offset.
 * `mobileCode` differs for AS9100; `mobileOnly: false` marks the row the mobile
 * frame omits.
 */
export const STANDARDS = [
  {
    code: "ISO 9001",
    mobileCode: "ISO 9001",
    area: "Quality Management",
    body: "Improve quality consistency, customer satisfaction and continual improvement.",
    image: "/assets/standards/iso-9001.png",
    objectPosition: "center 58.5%",
    onMobile: true,
  },
  {
    code: "ISO 14001",
    mobileCode: "ISO 14001",
    area: "Environmental Management",
    body: "Manage environmental responsibilities, impacts and performance through a structured system.",
    image: "/assets/standards/iso-14001.png",
    objectPosition: "center 60.8%",
    onMobile: true,
  },
  {
    code: "ISO 45001",
    mobileCode: "ISO 45001",
    area: "Occupational Health & Safety",
    body: "Manage workplace health and safety risks through a structured management system.",
    image: "/assets/standards/iso-45001.png",
    objectPosition: "center 84.1%",
    onMobile: true,
  },
  {
    code: "ISO 27001",
    mobileCode: "ISO 27001",
    area: "Information Security",
    body: "Manage information security risks and protect critical business information.",
    image: "/assets/standards/iso-27001.png",
    objectPosition: "center",
    onMobile: true,
  },
  {
    code: "ISO 50001",
    mobileCode: "ISO 50001",
    area: "Energy Management",
    body: "Improve energy performance, monitoring and operational efficiency.",
    image: "/assets/standards/iso-50001.png",
    objectPosition: "center",
    onMobile: true,
  },
  {
    code: "ISO 13485",
    mobileCode: "ISO 13485",
    area: "Medical Devices",
    body: "Establish quality management processes for medical device organisations.",
    image: "/assets/standards/iso-13485.png",
    objectPosition: "center",
    onMobile: true,
  },
  {
    code: "ISO 22000",
    mobileCode: "ISO 22000",
    area: "Food Safety",
    body: "Manage food safety risks across production, handling and supply processes.",
    image: "/assets/standards/iso-22000.png",
    objectPosition: "center 70%",
    onMobile: true,
  },
  {
    code: "AS9100, AS9110, AS9120",
    mobileCode: "AS9100 Series",
    area: "Aerospace",
    body: "Strengthen quality, traceability and risk management across aerospace operations.",
    image: "/assets/standards/as9100.png",
    objectPosition: "center",
    onMobile: true,
  },
  {
    code: "IATF 16949",
    mobileCode: "IATF 16949",
    area: "Automotive",
    body: "Support consistent quality and continual improvement across automotive operations.",
    image: "/assets/standards/iatf-16949.png",
    objectPosition: "center",
    onMobile: true,
  },
  {
    code: "FSSC 22000",
    mobileCode: "FSSC 22000",
    area: "Food Safety (FSMS)",
    body: "Support structured food safety management across relevant operations and processes.",
    image: "/assets/standards/fssc-22000.png",
    objectPosition: "center",
    // The mobile frame stops at IATF 16949.
    onMobile: false,
  },
] as const;

export const CONTACT = {
  headingDesktop: "Build stronger systems with practical support.",
  body: "For certification support, training, documentation, or commercial enquiries, speak directly with the Acquila team.",
  cardHeading: "Let's discuss your requirements.",
  cardSub: "Contact the Acquila team directly.",
  email: "directors@acquilacert.com",
  phone: "+91 999 999",
  accreditationLabel: "ACCREDITATION STATUS",
  accreditationBody:
    "Acquila is currently in the process of accreditation. Contact the team for the latest service scope and status.",
} as const;

/**
 * The desktop frame lists four rows, two of which read "Documentation support";
 * the mobile frame lists three. Both are reproduced as drawn.
 */
export const ENQUIRY_CATEGORIES_DESKTOP = [
  "Certification support",
  "Documentation support",
  "Documentation support",
  "Commercial quotations",
] as const;

export const ENQUIRY_CATEGORIES_MOBILE = [
  "Certification support",
  "Documentation support",
  "Commercial quotations",
] as const;

export const FOOTER = {
  blurb:
    "Practical compliance planning, documentation systems, and training support across major international management system standards.",
  resources: ["About Us", "Standards", "Services", "Contact"],
  copyright: "© 2026 Acquila",
  legalDesktop: ["Privacy Policy", "Terms of Service"],
  legalMobile: ["Privacy Policy", "Terms"],
  socials: [
    { name: "LinkedIn", icon: "/assets/icons/linkedin.svg" },
    { name: "Twitter", icon: "/assets/icons/twitter.svg" },
    { name: "Facebook", icon: "/assets/icons/facebook.svg" },
  ],
} as const;

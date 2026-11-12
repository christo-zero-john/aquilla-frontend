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
  ctaMobile: "Request a Quote",
} as const;

export const ABOUT_STATEMENT =
  "We turn complex standard requirements into clear, workable systems — helping organisations strengthen processes, responsibilities, documentation, and team readiness across day-to-day operations.";

/** About-section carousel. Order is the Figma stacking order (index 0 is the base layer). */
export const CAROUSEL = [
  { src: "/assets/carousel/automotive.png", alt: "Automotive production line", label: "Automotive" },
  { src: "/assets/carousel/food-lab.png", alt: "Food testing laboratory", label: "Food safety" },
  { src: "/assets/carousel/aerospace.png", alt: "Aerospace assembly", label: "Aerospace" },
  { src: "/assets/carousel/solar.png", alt: "Solar installation", label: "Renewable energy" },
  { src: "/assets/carousel/pharma.png", alt: "Pharmaceutical production", label: "Pharmaceuticals" },
  { src: "/assets/carousel/data-center.png", alt: "Data centre", label: "Data centres" },
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
    mobileCode: "AS9100, AS9110, AS9120",
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
  phone: "+91 80782 30105",
  phoneLabel: "CALL US",
  accreditationLabel: "ACCREDITATION STATUS",
  accreditationBody:
    "Acquila is currently in the process of accreditation. Contact the team for the latest service scope and status.",
} as const;

/**
 * One list for both breakpoints, matching the enquiry types named in
 * CONTACT.body. (The Figma desktop frame repeated "Documentation support".)
 */
export const ENQUIRY_CATEGORIES = [
  "Certification support",
  "Training & awareness",
  "Documentation support",
  "Commercial quotations",
] as const;

export const FOOTER = {
  blurb:
    "Practical compliance planning, documentation systems, and training support across major international management system standards.",
  resources: [
    { label: "About Us", href: "#about" },
    { label: "Standards", href: "#standards" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ],
  copyright: "© 2026 Acquila",
  legalDesktop: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
  legalMobile: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
  /** No destinations supplied yet — swap `href` when the accounts exist. */
  socials: [
    { name: "LinkedIn", icon: "/assets/icons/linkedin.svg", href: "#" },
    { name: "Twitter", icon: "/assets/icons/twitter.svg", href: "#" },
    { name: "Facebook", icon: "/assets/icons/facebook.svg", href: "#" },
  ],
} as const;

/**
 * Legal pages (/terms, /privacy). Starting copy written for Acquila's
 * consultancy services; have it reviewed by counsel before publishing.
 * Each section's `id` is its anchor in the page's contents list.
 */
export type LegalSection = {
  id: string;
  title: string;
  paragraphs: readonly string[];
  bullets?: readonly string[];
};

export type LegalDoc = {
  eyebrow: string;
  title: string;
  updated: string;
  intro: string;
  sections: readonly LegalSection[];
  other: { label: string; href: string };
};

export const TERMS: LegalDoc = {
  eyebrow: "Legal",
  title: "Terms & Conditions",
  updated: "12 November 2026",
  intro:
    "These terms govern your use of the Acquila website and the certification support, documentation, training and audit readiness services we provide. By using the site or engaging our services, you agree to them.",
  sections: [
    {
      id: "about",
      title: "About these terms",
      paragraphs: [
        "In these terms, \"Acquila\", \"we\" and \"us\" mean Acquila and its directors. \"You\" means the person or organisation using the website or engaging our services.",
        "Where a separate proposal, quotation or engagement letter is agreed with you, its terms apply alongside these. If they conflict, the signed engagement takes precedence.",
      ],
    },
    {
      id: "services",
      title: "Our services",
      paragraphs: [
        "Acquila provides consultancy support to help organisations prepare for certification against management system and industry standards. The scope, deliverables, timelines and fees for each engagement are set out in your quotation.",
        "Acquila is currently in the process of accreditation. We are not a certification body and do not issue certificates. Certification decisions are made independently by the accredited body you appoint.",
      ],
    },
    {
      id: "no-guarantee",
      title: "No guarantee of certification",
      paragraphs: [
        "Our work is designed to strengthen your systems and readiness, but the outcome of any external audit depends on your organisation's implementation and the judgement of the certification body. We do not guarantee that certification will be granted or maintained.",
      ],
    },
    {
      id: "responsibilities",
      title: "Your responsibilities",
      paragraphs: ["To help us deliver the engagement well, you agree to:"],
      bullets: [
        "Provide accurate, complete and timely information and access to relevant people and records.",
        "Implement and maintain the processes and documentation agreed during the engagement.",
        "Keep any login details or shared materials we provide confidential.",
        "Use our materials only for your own organisation's internal purposes.",
      ],
    },
    {
      id: "fees",
      title: "Quotations, fees and payment",
      paragraphs: [
        "Quotations are valid for 30 days unless stated otherwise. Fees are exclusive of applicable taxes, which will be added to invoices.",
        "Invoices are payable within the period stated on the invoice. We may pause work on an engagement while an invoice remains overdue.",
      ],
    },
    {
      id: "ip",
      title: "Intellectual property",
      paragraphs: [
        "Templates, training materials, tools and methods we bring to an engagement remain ours. On full payment, you receive a non-exclusive licence to use the deliverables we prepare for you within your organisation.",
        "Standards such as ISO 9001 are owned by their publishers. You are responsible for obtaining your own licensed copies of any standard.",
      ],
    },
    {
      id: "confidentiality",
      title: "Confidentiality",
      paragraphs: [
        "Each party will keep the other's confidential information private and use it only for the purposes of the engagement, except where disclosure is required by law.",
      ],
    },
    {
      id: "liability",
      title: "Limitation of liability",
      paragraphs: [
        "To the extent permitted by law, our total liability arising from an engagement is limited to the fees you paid for that engagement. We are not liable for indirect or consequential loss, including loss of profit, business or certification.",
        "Website content is provided for general information and does not constitute professional advice for your specific circumstances.",
      ],
    },
    {
      id: "cancellation",
      title: "Cancellation and termination",
      paragraphs: [
        "Either party may end an engagement with written notice. You will pay for work completed and any non-refundable costs incurred up to the date of termination.",
      ],
    },
    {
      id: "law",
      title: "Governing law",
      paragraphs: [
        "These terms are governed by the laws of India, and the courts of India have exclusive jurisdiction over any dispute arising from them.",
      ],
    },
    {
      id: "changes",
      title: "Changes and contact",
      paragraphs: [
        "We may update these terms from time to time. The date at the top of this page shows when they last changed.",
        "Questions about these terms can be sent to directors@acquilacert.com.",
      ],
    },
  ],
  other: { label: "Privacy Policy", href: "/privacy" },
};

export const PRIVACY: LegalDoc = {
  eyebrow: "Legal",
  title: "Privacy Policy",
  updated: "12 November 2026",
  intro:
    "This policy explains what personal information Acquila collects when you visit our website or work with us, how we use it, and the choices you have.",
  sections: [
    {
      id: "collect",
      title: "Information we collect",
      paragraphs: ["We collect only what we need to respond to you and deliver our services:"],
      bullets: [
        "Contact details you share with us, such as your name, organisation, role, email address and phone number.",
        "Details of your enquiry, the standards you are interested in and information shared during an engagement.",
        "Basic technical information when you visit the site, such as browser type, device and pages viewed.",
      ],
    },
    {
      id: "use",
      title: "How we use it",
      paragraphs: ["We use your information to:"],
      bullets: [
        "Respond to enquiries and prepare quotations.",
        "Plan and deliver certification support, documentation, training and audit readiness services.",
        "Send invoices and keep business records.",
        "Improve our website and services.",
      ],
    },
    {
      id: "basis",
      title: "Why we're allowed to",
      paragraphs: [
        "We process personal information with your consent, to take steps at your request before entering a contract, to perform our contract with you, and to meet our legal obligations, in line with applicable data protection law including India's Digital Personal Data Protection Act, 2023.",
      ],
    },
    {
      id: "sharing",
      title: "Sharing your information",
      paragraphs: [
        "We do not sell your personal information. We share it only with service providers who help us run our business (such as email, hosting and accounting), with a certification body when you ask us to, or where required by law.",
      ],
    },
    {
      id: "cookies",
      title: "Cookies",
      paragraphs: [
        "Our website uses only the cookies needed for it to work and, where enabled, privacy-friendly analytics to understand how pages are used. You can block cookies in your browser settings.",
      ],
    },
    {
      id: "retention",
      title: "How long we keep it",
      paragraphs: [
        "We keep enquiry details for up to two years, and engagement records for as long as needed to meet our contractual, tax and legal obligations. After that, we delete or anonymise them.",
      ],
    },
    {
      id: "security",
      title: "Keeping it secure",
      paragraphs: [
        "We use appropriate technical and organisational measures to protect your information, and limit access to people who need it to do their work.",
      ],
    },
    {
      id: "rights",
      title: "Your rights",
      paragraphs: ["You can ask us to:"],
      bullets: [
        "Tell you what personal information we hold about you.",
        "Correct or update inaccurate information.",
        "Delete your information where we no longer need it.",
        "Withdraw your consent at any time.",
      ],
    },
    {
      id: "contact",
      title: "Contact us",
      paragraphs: [
        "To exercise your rights or ask about this policy, email directors@acquilacert.com. We may update this policy from time to time; the date at the top shows when it last changed.",
      ],
    },
  ],
  other: { label: "Terms & Conditions", href: "/terms" },
};

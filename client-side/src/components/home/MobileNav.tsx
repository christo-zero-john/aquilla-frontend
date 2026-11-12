"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { NAV_LINKS } from "@/lib/content";

/**
 * Phone header: brand, quote button and a menu that opens the section links.
 * Sticky so the menu and the quote button stay in reach on a long page; the
 * sections below carry a matching scroll margin so anchors land under it.
 */
export function MobileNav({ base = "" }: { base?: string } = {}) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-line bg-white">
      <div className="flex h-[4.5rem] w-full items-center justify-between gap-[0.75rem] px-[1rem]">
        <Link
          href={base ? "/" : "#top"}
          aria-label={base ? "Acquila home" : "Acquila, back to top"}
          className="flex shrink-0 items-end gap-[0.368812rem]"
        >
          <img
            src="/assets/brand/aquila-mark.svg"
            alt=""
            className="h-[2.221188rem] w-[2.226rem]"
          />
          <span className="relative block h-[1.560812rem] w-[6.743875rem]">
            <img
              src="/assets/brand/aquila-wordmark.svg"
              alt="Acquila"
              className="absolute left-[0.001875rem] top-[-0.16875rem] h-[1.552188rem] w-[6.738562rem] max-w-none"
            />
          </span>
        </Link>

        <div className="flex items-center gap-[0.5rem]">
          <a
            href={`${base}#contact`}
            className="btn-fill-center btn-fill-invert hidden min-h-[2.75rem] shrink-0 items-center rounded-[0.25rem] bg-plum-deep px-[1rem] text-[0.875rem] font-semibold whitespace-nowrap text-white hover:text-plum-deep focus-visible:text-plum-deep min-[360px]:inline-flex"
          >
            Get Quote
          </a>
          <button
            type="button"
            aria-expanded={open}
            aria-controls={panelId}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
            className="flex size-[2.75rem] shrink-0 flex-col items-center justify-center gap-[0.3125rem] rounded-[0.25rem] border border-line text-ink"
          >
            <span
              className={`block h-[2px] w-[1.125rem] rounded-full bg-current transition-transform duration-300 ${open ? "translate-y-[7px] rotate-45" : ""}`}
            />
            <span
              className={`block h-[2px] w-[1.125rem] rounded-full bg-current transition-opacity duration-200 ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-[2px] w-[1.125rem] rounded-full bg-current transition-transform duration-300 ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Overlays the page instead of pushing it down, and eases open: its
          height grows (grid rows 0fr -> 1fr) while the links fade in one
          after another. Closed, it is inert, so its links are unreachable by
          keyboard and screen readers, as `hidden` made them before. */}
      <nav
        id={panelId}
        aria-label="Sections"
        data-open={open}
        inert={!open}
        className="mobile-menu absolute inset-x-0 top-full"
      >
        <div className="mobile-menu__body bg-white px-[1rem]">
        <ul className="flex flex-col py-6">
          {NAV_LINKS.map((link, i) => (
            <li
              key={link}
              className="mobile-menu__item flex h-16 flex-col border-b border-line"
              style={{ "--i": i } as React.CSSProperties}
            >
              <a
                href={`${base}#${link.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="flex min-h-[4rem] items-center text-[20px] font-medium text-body transition-colors duration-300 hover:text-plum focus-visible:text-plum"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
        <div
          className="mobile-menu__item mb-[1.25rem] mt-[1rem]"
          style={{ "--i": NAV_LINKS.length } as React.CSSProperties}
        >
          <a
            href={`${base}#contact`}
            onClick={() => setOpen(false)}
            className="btn-fill-center btn-fill-invert flex min-h-[3rem] w-full items-center justify-center rounded-[0.375rem] bg-plum text-[0.9375rem] font-semibold text-white hover:text-plum focus-visible:text-plum"
          >
            Get a Quote
          </a>
        </div>
        </div>
      </nav>
    </header>
  );
}

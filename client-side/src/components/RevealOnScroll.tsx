"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Scroll reveals, driven by markup instead of wrapper components:
 *
 * - `data-reveal` on an element fades it up into place as it enters view.
 * - `data-reveal-stagger` does the same for each direct child, one after
 *   another, so a list or a row of cards arrives as a sequence.
 *
 * Reveals replay: when an element drops back out of view below the screen
 * (you scrolled back up past it), it is reset, so scrolling down again plays
 * its entrance again. Elements that leave through the top stay revealed, so
 * scrolling up never shows content rising in from the wrong side.
 *
 * The hidden starting state only applies once `html.reveal-ready` is set
 * here, so the page is fully visible without JavaScript. Anything already on
 * screen when this runs is marked revealed first, so nothing above the fold
 * blinks out and back in. The CSS lives in globals.css.
 */
const STAGGER_MS = 90;
const MAX_STAGGER_STEPS = 6;

export function RevealOnScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>(
        "[data-reveal]:not(.is-revealed), [data-reveal-stagger]:not(.is-revealed)",
      ),
    );

    for (const el of targets) {
      if (el.hasAttribute("data-reveal-stagger")) {
        Array.from(el.children).forEach((child, i) => {
          (child as HTMLElement).style.setProperty(
            "--reveal-delay",
            `${Math.min(i, MAX_STAGGER_STEPS) * STAGGER_MS}ms`,
          );
        });
      }
      const rect = el.getBoundingClientRect();
      const laidOut = el.getClientRects().length > 0;
      if (laidOut && rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add("is-revealed");
      }
    }

    document.documentElement.classList.add("reveal-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
          } else if (entry.boundingClientRect.top >= window.innerHeight) {
            // Wholly below the screen again: arm it to play on the way down.
            // (Not merely past the -8% trigger line, or it would vanish while
            // still peeking in at the bottom edge.)
            entry.target.classList.remove("is-revealed");
          }
        }
      },
      // Fire a little before the element is fully in, so it is already moving
      // as it crosses into the lower part of the screen.
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );

    for (const el of targets) observer.observe(el);
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}

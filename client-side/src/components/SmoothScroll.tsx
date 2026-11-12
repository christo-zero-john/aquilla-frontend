"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Eased, momentum-style page scrolling.
 *
 * Lenis intercepts wheel and touch input and interpolates the scroll position
 * each frame, which is what gives the weighted feel rather than the browser's
 * immediate stepping. It also takes over in-page anchor jumps so the nav links
 * ease to their target instead of snapping.
 *
 * Native scrolling is left alone entirely when the visitor has asked for
 * reduced motion — hijacking it there is the one case where this actively
 * hurts.
 */
/**
 * The page renders a desktop and a phone tree, swapped by CSS, and both carry
 * the same section ids. A plain `#about` lookup finds the hidden desktop copy
 * on a phone, so anchors resolve to the copy that is actually laid out.
 */
function findVisibleTarget(hash: string): HTMLElement | null {
  const id = decodeURIComponent(hash.slice(1));
  if (!id) return null;
  const matches = Array.from(
    document.querySelectorAll<HTMLElement>(`[id="${CSS.escape(id)}"]`),
  );
  return matches.find((el) => el.getClientRects().length > 0) ?? null;
}

/** Honours the section's scroll margin, which clears the sticky phone header. */
function scrollOffset(el: HTMLElement) {
  return -(parseFloat(getComputedStyle(el).scrollMarginTop) || 0);
}

export function SmoothScroll() {
  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // Without Lenis, anchors still need resolving to the visible copy.
    const onPlainClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const link = target?.closest?.('a[href^="#"]') as HTMLAnchorElement | null;
      const href = link?.getAttribute("href");
      if (!href || href === "#") return;
      const destination = findVisibleTarget(href);
      if (!destination) return;
      event.preventDefault();
      window.scrollTo({
        top: destination.getBoundingClientRect().top + window.scrollY + scrollOffset(destination),
      });
    };

    if (reduceMotion) {
      document.addEventListener("click", onPlainClick);
      return () => document.removeEventListener("click", onPlainClick);
    }

    const lenis = new Lenis({
      // `lerp` closes a fraction of the remaining distance every frame, so the
      // page keeps tracking the wheel continuously. The duration+easing mode it
      // replaces runs a fixed-length tween per event, which reads as lag once
      // the tween is longer than the gap between wheel ticks.
      // Settle time to 95% is ln(0.05)/ln(1 - lerp) frames:
      //   0.20 -> ~13 frames (0.22s), near-native
      //   0.12 -> ~24 frames (0.40s), close to native, little glide
      //   0.075 -> ~39 frames (0.65s)  <- current: a visible glide that still follows the hand
      //   0.04 -> ~73 frames (1.22s), lags the wheel and reads as drag
      lerp: 0.075,
      smoothWheel: true,
      // Distance covered per wheel tick, as a multiple of the browser's native
      // step. Raising this is what makes one flick travel further.
      // Slightly under 1 so each tick travels a little less than native, which
      // pairs with the glide above to read as calm rather than fast.
      wheelMultiplier: 0.85,
      // Touch devices already have native momentum; overriding it feels wrong.
      syncTouch: false,
    });

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    // Route same-page anchor clicks through Lenis so they ease as well.
    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const link = target?.closest?.('a[href^="#"]') as HTMLAnchorElement | null;
      if (!link) return;

      const id = link.getAttribute("href");
      if (!id || id === "#") return;

      const destination = findVisibleTarget(id);
      if (!destination) return;

      event.preventDefault();
      // Lenis reads the target's scroll margin itself, so no extra offset here.
      lenis.scrollTo(destination, {
        offset: 0,
        // A fixed, eased glide for jumps: lerp alone would rush the start of
        // a long jump and crawl through its last few hundred pixels.
        duration: 1.1,
        easing: (t) => 1 - Math.pow(1 - t, 4),
      });
    };

    // Lenis only intercepts wheel and touch. Keyboard scrolling bypasses it and
    // falls through to the browser's instant jump, so those keys are handled
    // here and routed through the same animation.
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.metaKey || event.ctrlKey || event.altKey) return;

      // Never hijack typing, or keys inside a control that handles them itself.
      const active = document.activeElement as HTMLElement | null;
      if (
        active &&
        (active.isContentEditable ||
          ["INPUT", "TEXTAREA", "SELECT", "OPTION"].includes(active.tagName))
      ) {
        return;
      }

      const viewport = window.innerHeight;
      // Browsers leave a couple of lines of overlap on a page jump so the reader
      // keeps their place; matching that keeps the behaviour familiar.
      const page = viewport * 0.9;
      const step = 100;
      const current = lenis.animatedScroll ?? window.scrollY;
      const bottom = lenis.limit ?? document.documentElement.scrollHeight - viewport;

      let target: number | null = null;
      switch (event.key) {
        case "ArrowDown":
          target = current + step;
          break;
        case "ArrowUp":
          target = current - step;
          break;
        case "PageDown":
          target = current + page;
          break;
        case "PageUp":
          target = current - page;
          break;
        case "Home":
          target = 0;
          break;
        case "End":
          target = bottom;
          break;
        case " ":
          target = current + (event.shiftKey ? -page : page);
          break;
        default:
          return;
      }

      event.preventDefault();
      lenis.scrollTo(Math.max(0, Math.min(target, bottom)));
    };

    document.addEventListener("click", onClick);
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener("keydown", onKeyDown);
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return null;
}

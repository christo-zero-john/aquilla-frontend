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
export function SmoothScroll() {
  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) return;

    const lenis = new Lenis({
      // `lerp` closes a fraction of the remaining distance every frame, so the
      // page keeps tracking the wheel continuously. The duration+easing mode it
      // replaces runs a fixed-length tween per event, which reads as lag once
      // the tween is longer than the gap between wheel ticks.
      // Settle time to 95% is ln(0.05)/ln(1 - lerp) frames:
      //   0.20 -> ~13 frames (0.22s), near-native
      //   0.14 -> ~20 frames (0.33s)
      //   0.08 -> ~36 frames (0.60s)   <- current
      //   0.05 -> ~58 frames (0.97s), very floaty
      lerp: 0.1,
      smoothWheel: true,
      // Distance covered per wheel tick, as a multiple of the browser's native
      // step. Raising this is what makes one flick travel further.
      wheelMultiplier: 1,
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

      const destination = document.querySelector(id);
      if (!destination) return;

      event.preventDefault();
      lenis.scrollTo(destination as HTMLElement, { offset: 0 });
    };

    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("click", onClick);
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return null;
}

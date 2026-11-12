"use client";

import { useEffect } from "react";

/**
 * Touch screens have no hover, so a tap shows the hover look instead, as a
 * press. `:active` alone is not enough: on a quick tap it lasts a frame or
 * two (the fill never gets going), and iOS Safari skips it unless the page
 * listens for touches. So a touch adds `is-pressed` to the link or button
 * and keeps it for at least MIN_PRESS_MS, long enough to read as a press.
 * The press styles live in globals.css under `@media (hover: none)`.
 */
const MIN_PRESS_MS = 280;
const PRESSABLE = "a[href], button, [role='link']";

export function TouchPress() {
  useEffect(() => {
    let pressed: HTMLElement | null = null;
    let pressedAt = 0;
    let timer = 0;

    const release = () => {
      if (!pressed) return;
      const el = pressed;
      pressed = null;
      const wait = Math.max(0, MIN_PRESS_MS - (performance.now() - pressedAt));
      timer = window.setTimeout(() => el.classList.remove("is-pressed"), wait);
    };

    const onDown = (event: PointerEvent) => {
      if (event.pointerType === "mouse") return;
      const el = (event.target as HTMLElement | null)?.closest<HTMLElement>(PRESSABLE);
      if (!el || el.getAttribute("aria-disabled") === "true") return;
      window.clearTimeout(timer);
      pressed?.classList.remove("is-pressed");
      pressed = el;
      pressedAt = performance.now();
      el.classList.add("is-pressed");
    };

    document.addEventListener("pointerdown", onDown, { passive: true });
    document.addEventListener("pointerup", release, { passive: true });
    document.addEventListener("pointercancel", release, { passive: true });
    return () => {
      window.clearTimeout(timer);
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("pointerup", release);
      document.removeEventListener("pointercancel", release);
    };
  }, []);

  return null;
}

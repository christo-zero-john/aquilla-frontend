"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { CAROUSEL } from "@/lib/content";

/**
 * About-section image sequence.
 *
 * An editorial, slow cut rather than a slideshow: each image is uncovered by a
 * soft wipe from the bottom while it settles out of a slight zoom (a Ken Burns
 * drift that runs the whole time it is on screen). The image it replaces sinks
 * back and darkens underneath, so every cut has depth. A caption row under the
 * frame names the industry and fills a segmented progress bar for the slide on
 * screen.
 *
 * Only the outgoing and incoming layers are animated; the rest are not mounted,
 * and the timer stops when the frame is off screen.
 */

/** Seconds each image stays on screen (six images: a 21.6 s loop). */
const HOLD = 3.6;
/** Seconds the wipe takes to uncover the next image. */
const WIPE = 1.25;
/** Expressive in-out: a slow start, a decisive middle, a long settle. */
const EASE_WIPE: [number, number, number, number] = [0.76, 0, 0.24, 1];
const EASE_SETTLE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** Natural (desktop) width in design px; `width` scales the whole frame. */
const NATURAL_W = 345.148;
const NATURAL_H = 322.881;

/** Insets the artwork sits at inside its frame (from the Figma layer). */
const IMAGE_BOX = {
  left: "0.97%",
  top: "1.03%",
  width: "97.9%",
  height: "97.92%",
} as const;

export function AboutCarousel({ width = NATURAL_W }: { width?: number } = {}) {
  const k = width / NATURAL_W;
  const frameW = `${(NATURAL_W * k) / 16}rem`;
  const frameH = `${(NATURAL_H * k) / 16}rem`;
  const compact = k < 0.75;

  const reduceMotion = useReducedMotion();
  const frameRef = useRef<HTMLDivElement>(null);
  const inView = useInView(frameRef, { margin: "200px" });

  const [index, setIndex] = useState(0);
  const [previous, setPrevious] = useState<number | null>(null);

  useEffect(() => {
    if (!inView || reduceMotion) return;
    const timer = window.setTimeout(() => {
      setPrevious(index);
      setIndex((index + 1) % CAROUSEL.length);
    }, HOLD * 1000);
    return () => window.clearTimeout(timer);
  }, [index, inView, reduceMotion]);

  const current = CAROUSEL[index];

  return (
    <figure
      className="flex shrink-0 flex-col"
      style={{ width: frameW, gap: compact ? "0.875rem" : "1.125rem" }}
    >
      <div
        ref={frameRef}
        className="relative overflow-hidden"
        style={{ width: frameW, height: frameH }}
      >
        {reduceMotion ? (
          <img
            src={current.src}
            alt={current.alt}
            className="absolute max-w-none"
            style={IMAGE_BOX}
          />
        ) : (
          <>
            {previous !== null ? (
              <motion.div
                key={`out-${previous}-${index}`}
                aria-hidden
                className="absolute inset-0"
                initial={{ scale: 1, filter: "brightness(1)" }}
                animate={{ scale: 0.94, filter: "brightness(0.55)" }}
                transition={{ duration: WIPE, ease: EASE_WIPE }}
              >
                <img
                  src={CAROUSEL[previous].src}
                  alt=""
                  className="absolute max-w-none"
                  style={IMAGE_BOX}
                />
              </motion.div>
            ) : null}

            <motion.div
              key={`in-${index}`}
              className="absolute inset-0 overflow-hidden"
              style={{ willChange: "clip-path" }}
              initial={
                previous === null
                  ? false
                  : { clipPath: "inset(100% 0% 0% 0%)" }
              }
              animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
              transition={{ duration: WIPE, ease: EASE_WIPE }}
            >
              <motion.img
                src={current.src}
                alt={current.alt}
                className="absolute max-w-none"
                style={{ ...IMAGE_BOX, willChange: "transform" }}
                initial={{ scale: 1.16, y: "4%" }}
                animate={{ scale: 1, y: "0%" }}
                transition={{ duration: HOLD + WIPE, ease: EASE_SETTLE }}
              />
            </motion.div>
          </>
        )}
      </div>

      <figcaption className="flex flex-col gap-[0.625rem]">
        <div
          className={`flex items-baseline gap-[0.75rem] text-ink ${compact ? "justify-center" : ""}`}
        >
          <span className="font-jakarta text-[0.75rem] font-medium tabular-nums tracking-[0.04em] text-muted">
            {String(index + 1).padStart(2, "0")}
            <span className="text-faint"> / {String(CAROUSEL.length).padStart(2, "0")}</span>
          </span>
          <span className="relative block h-[1.25rem] min-w-0 flex-1 overflow-hidden" aria-live="polite">
            <motion.span
              key={current.label}
              className={`absolute inset-x-0 top-0 block truncate font-outfit text-[0.8125rem] font-semibold uppercase tracking-[0.12em] ${compact ? "text-center" : ""}`}
              initial={reduceMotion ? false : { y: "110%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ duration: 0.7, ease: EASE_SETTLE, delay: 0.35 }}
            >
              {current.label}
            </motion.span>
          </span>
        </div>

        {reduceMotion ? null : (
          <div className="flex gap-[0.25rem]" aria-hidden>
            {CAROUSEL.map((image, i) => (
              <span
                key={image.src}
                className="relative block h-[2px] flex-1 overflow-hidden bg-[rgba(0,0,0,0.1)]"
              >
                {i < index ? (
                  <span className="absolute inset-0 bg-plum" />
                ) : i === index ? (
                  <motion.span
                    key={`bar-${index}`}
                    className="absolute inset-0 origin-left bg-plum"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: inView ? 1 : 0 }}
                    transition={{ duration: HOLD, ease: "linear" }}
                  />
                ) : null}
              </span>
            ))}
          </div>
        )}
      </figcaption>
    </figure>
  );
}

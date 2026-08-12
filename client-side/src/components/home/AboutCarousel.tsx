"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion, type Easing } from "motion/react";
import { CAROUSEL } from "@/lib/content";

/**
 * Image carousel from the about section (Figma node 1:510).
 *
 * Per the file's motion data this is a single 21.6s looping timeline, not six
 * independent ones: each layer sits stacked and reveals in turn — scaling up
 * from 15% at an offset that lands it centred — one every 1/6 of the loop.
 * Layer 0 is the base and never animates.
 */

const DURATION = 21.6;
const REVEAL = 0.0556; // fraction of the timeline each reveal occupies
const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

/** Design frame, in rem so it tracks the page's fluid root font size. */
const FRAME_W = `${345.148 / 16}rem`;
const FRAME_H = `${322.881 / 16}rem`;

/**
 * Reveal offset, in design pixels. Applied about the default centre origin,
 * this is what starts each image small in the bottom-right corner: scaling to
 * 0.15 about the centre, then translating by this, puts the image's centre at
 * (316, 296) in the 345x323 frame — its bottom-right corner.
 */
const OFFSET_X = 143.612 / 16;
const OFFSET_Y = 134.385 / 16;

export function AboutCarousel() {
  const reduceMotion = useReducedMotion();
  const frameRef = useRef<HTMLDivElement>(null);
  // Five large images tweening forever costs frames even when nobody can see
  // them, which shows up as stutter while scrolling elsewhere on the page.
  const inView = useInView(frameRef, { margin: "200px" });

  return (
    <div
      ref={frameRef}
      className="relative shrink-0 overflow-hidden"
      style={{ width: FRAME_W, height: FRAME_H }}
    >
      {CAROUSEL.map((image, index) => {
        const start = index / CAROUSEL.length;
        const isBase = index === 0;

        // Static layers still need the base image visible underneath.
        if (isBase || reduceMotion) {
          return (
            <img
              key={image.src}
              src={image.src}
              alt={image.alt}
              className="absolute max-w-none"
              style={{
                left: "0.97%",
                top: "1.03%",
                right: "1.13%",
                bottom: "1.05%",
                width: "97.9%",
                height: "97.92%",
              }}
            />
          );
        }

        const transition = {
          duration: DURATION,
          times: [0, start, start + REVEAL, 1],
          ease: ["linear", EASE, "linear"] as Easing[],
          repeat: Infinity,
        };

        return (
          <motion.img
            key={image.src}
            src={image.src}
            alt={image.alt}
            className="absolute max-w-none"
            style={{
              left: "0.97%",
              top: "1.03%",
              width: "97.9%",
              height: "97.92%",
              // Origin stays at the default centre — the offset below is what
              // places the shrunk image in the bottom-right corner.
              // Promote to its own compositor layer so scaling these large
              // rasters does not repaint on the main thread each frame.
              willChange: "transform, opacity",
            }}
            initial={{
              opacity: 0,
              scale: 0.15,
              x: `${OFFSET_X}rem`,
              y: `${OFFSET_Y}rem`,
            }}
            animate={
              inView
                ? {
                    opacity: [0, 0, 1, 1],
                    scale: [0.15, 0.15, 1, 1],
                    x: [`${OFFSET_X}rem`, `${OFFSET_X}rem`, "0rem", "0rem"],
                    y: [`${OFFSET_Y}rem`, `${OFFSET_Y}rem`, "0rem", "0rem"],
                  }
                : undefined
            }
            transition={{
              opacity: transition,
              scale: transition,
              x: transition,
              y: transition,
            }}
          />
        );
      })}
    </div>
  );
}

"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import type { LegalSection } from "@/lib/content";

/**
 * Desktop "On this page" list that follows the reader. The section being
 * read (the last one whose top has passed a line 30% down the screen) is the
 * active one: its entry turns plum and a marker slides along the rail to it.
 *
 * Section ids exist twice (the desktop and mobile trees are both in the
 * page), so each id is resolved to the copy that is actually laid out.
 */
export function LegalToc({ sections }: { sections: readonly LegalSection[] }) {
  const [active, setActive] = useState(sections[0]?.id ?? "");
  const listRef = useRef<HTMLOListElement>(null);
  const [marker, setMarker] = useState<{ top: number; height: number } | null>(null);

  useEffect(() => {
    const visibleCopy = (id: string) =>
      Array.from(document.querySelectorAll<HTMLElement>(`[id="${CSS.escape(id)}"]`)).find(
        (el) => el.getClientRects().length > 0,
      );
    const targets = sections
      .map((s) => visibleCopy(s.id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (targets.length === 0) return;

    // The active section is the last one whose top has passed the reading
    // line, 30% down the screen. (Picking whichever section overlaps a band
    // lags by one: the previous section's tail is still in the band.)
    let frame = 0;
    const pick = () => {
      frame = 0;
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      if (atBottom) {
        // The last sections can never reach the line once the page stops.
        setActive(sections[sections.length - 1].id);
        return;
      }
      const line = window.innerHeight * 0.3;
      let current = targets[0].id;
      for (const el of targets) {
        if (el.getBoundingClientRect().top <= line) current = el.id;
        else break;
      }
      setActive(current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(pick);
    };

    pick();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [sections]);

  // Move the rail marker to the active entry.
  useLayoutEffect(() => {
    const item = listRef.current?.querySelector<HTMLElement>(`[data-toc="${active}"]`);
    if (item) setMarker({ top: item.offsetTop, height: item.offsetHeight });
  }, [active]);

  return (
    <ol ref={listRef} className="relative flex flex-col border-l border-line">
      {marker ? (
        <span
          aria-hidden
          className="toc-marker absolute left-[-1px] w-[2px] bg-plum"
          style={{ top: marker.top, height: marker.height }}
        />
      ) : null}
      {sections.map((s, i) => {
        const isActive = s.id === active;
        return (
          <li key={s.id} data-toc={s.id}>
            <a
              href={`#${s.id}`}
              aria-current={isActive ? "location" : undefined}
              onClick={() => setActive(s.id)}
              className={`toc-link flex gap-[0.75rem] py-[0.375rem] pl-[1rem] text-[0.875rem] leading-[1.25rem] ${isActive ? "is-active text-plum" : "text-muted hover:text-ink"}`}
            >
              <span className={`tabular-nums ${isActive ? "text-plum" : "text-faint"}`}>
                {String(i + 1).padStart(2, "0")}
              </span>
              {s.title}
            </a>
          </li>
        );
      })}
    </ol>
  );
}

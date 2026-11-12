import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { HERO } from "@/lib/content";

/**
 * Link preview card (WhatsApp, LinkedIn, Slack, iMessage...). Rendered once
 * at build time, in the hero's own composition: the plum statement panel and
 * the dark badge panel. Next wires the og:image and twitter:image tags.
 */

export const alt = "Acquila: certification and management system support";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const mark = await readFile(
    join(process.cwd(), "public/assets/brand/aquila-mark-light.svg"),
    "base64",
  );
  const markSrc = `data:image/svg+xml;base64,${mark}`;

  return new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%", background: "#612244" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: 760,
            padding: "72px 72px 64px",
            color: "#ffffff",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <img src={markSrc} width={44} height={44} alt="" />
            <div style={{ fontSize: 30, fontWeight: 700, letterSpacing: 4 }}>ACQUILA</div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: 62,
                lineHeight: 1.05,
                letterSpacing: -2,
              }}
            >
              {HERO.headingLines.map((line) => (
                <div key={line}>{line}</div>
              ))}
            </div>
            <div style={{ fontSize: 24, lineHeight: 1.45, color: "rgba(255,255,255,0.72)" }}>
              Certification support, documentation, training and audit readiness across
              ISO and industry standards.
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(209deg, #2a2a2a 9%, #000000 67%)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 250,
              height: 250,
              borderRadius: 36,
              border: "2px solid rgba(255,255,255,0.28)",
              background: "radial-gradient(closest-side, rgba(255,222,244,0.16), rgba(0,0,0,0))",
            }}
          >
            <img src={markSrc} width={150} height={150} alt="" />
          </div>
        </div>
      </div>
    ),
    size,
  );
}

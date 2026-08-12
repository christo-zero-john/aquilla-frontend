/**
 * The Acquila badge from the hero panel (Figma node 1:491).
 *
 * Figma's flattened export of this node bakes in the parent's purple fill, and
 * the glow layer (node 1:492) exports as an empty SVG, so the badge is rebuilt
 * from its component layers here, using the design's own geometry.
 *
 * Internals are expressed in `em` where 1em == 1 design pixel of the 267.158
 * wide badge, and the wrapper's font-size carries the scale. That keeps the
 * badge proportional under the page's fluid root font size without any of the
 * layer offsets needing to know the current scale.
 */

const NATURAL_W = 267.158;
const NATURAL_H = 276.873;

export function HeroPlaque({ width = NATURAL_W }: { width?: number }) {
  return (
    <div
      className="relative"
      style={{
        // 1em === 1 design px, expressed in rem so it scales with the page.
        fontSize: `${width / NATURAL_W / 16}rem`,
        width: `${NATURAL_W}em`,
        height: `${NATURAL_H}em`,
      }}
    >
      {/* Glow behind the badge. Node 1:492 exports empty, so it is recreated to
          match the soft bloom in the rendered design. */}
      <div
        className="absolute"
        style={{
          left: "1.5em",
          top: "11em",
          width: "264em",
          height: "264.5em",
          background:
            "radial-gradient(closest-side, rgba(255,222,244,0.26), rgba(255,200,236,0.07) 68%, transparent 100%)",
          filter: "blur(0.75em)",
        }}
      />

      {/* Badge face */}
      <img
        src="/assets/hero/plaque-face.png"
        alt=""
        className="absolute max-w-none"
        style={{
          left: "1.525em",
          top: "11.072em",
          width: "263.944em",
          height: "264.494em",
        }}
      />

      {/* ACQUILA wordmark */}
      <img
        src="/assets/hero/plaque-wordmark.svg"
        alt=""
        className="absolute max-w-none"
        style={{
          left: "8.128em",
          top: "30.751em",
          width: "236.408em",
          height: "75.792em",
        }}
      />

      {/* Eagle — wing, then head. Both carry the design's 0.82deg tilt. */}
      <div
        className="absolute"
        style={{
          left: "33.82em",
          top: "121.07em",
          width: "169.11em",
          height: "122.46em",
        }}
      >
        <img
          src="/assets/hero/plaque-glyph-b.png"
          alt=""
          className="absolute max-w-none"
          style={{
            left: "-2.28em",
            top: 0,
            width: "173.68em",
            height: "129.37em",
            transform: "rotate(0.82deg)",
          }}
        />
      </div>
      <div
        className="absolute"
        style={{
          left: "108.84em",
          top: "155.27em",
          width: "44.99em",
          height: "25.25em",
        }}
      >
        <img
          src="/assets/hero/plaque-glyph-a.png"
          alt=""
          className="absolute max-w-none"
          style={{
            left: "-2.27em",
            top: 0,
            width: "49.53em",
            height: "32.19em",
            transform: "rotate(0.82deg)",
          }}
        />
      </div>

      {/* Specular highlights */}
      <img
        src="/assets/hero/plaque-shine-1.svg"
        alt=""
        className="absolute max-w-none"
        style={{
          left: "-17.62em",
          top: "-6.69em",
          width: "302.24em",
          height: "54.78em",
        }}
      />
      <img
        src="/assets/hero/plaque-shine-2.svg"
        alt=""
        className="absolute max-w-none"
        style={{
          left: "73.71em",
          top: "138.27em",
          width: "113.76em",
          height: "49.47em",
        }}
      />
      <div
        className="absolute flex items-center justify-center"
        style={{
          left: "15.1em",
          top: "119.21em",
          width: "198.163em",
          height: "131.942em",
        }}
      >
        <div
          className="relative shrink-0"
          style={{
            width: "211.287em",
            height: "30.367em",
            transform: "rotate(30deg)",
          }}
        >
          <img
            src="/assets/hero/plaque-shine-3.svg"
            alt=""
            className="absolute max-w-none"
            style={{
              left: "-18.55em",
              top: "-18.55em",
              width: "248.39em",
              height: "67.48em",
            }}
          />
        </div>
      </div>
    </div>
  );
}

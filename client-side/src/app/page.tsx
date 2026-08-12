import { HomeDesktop } from "@/components/home/HomeDesktop";
import { HomeMobile } from "@/components/home/HomeMobile";

/**
 * The Figma file draws desktop (1:438) and mobile (1:668) as separate
 * compositions with different structure and copy, so each is rendered from its
 * own tree and swapped at the lg breakpoint rather than reflowed.
 */
export default function Home() {
  return (
    <>
      <div className="lg:hidden">
        <HomeMobile />
      </div>
      <div className="hidden lg:block">
        <HomeDesktop />
      </div>
    </>
  );
}

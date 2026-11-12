import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { PRIVACY } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy Policy — Acquila",
  description: "How Acquila collects, uses and protects personal information.",
};

export default function Page() {
  return <LegalPage doc={PRIVACY} />;
}

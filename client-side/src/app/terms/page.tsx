import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { TERMS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Terms & Conditions — Acquila",
  description: "The terms that govern use of the Acquila website and services.",
};

export default function Page() {
  return <LegalPage doc={TERMS} />;
}

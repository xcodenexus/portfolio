import type { Metadata } from "next";
import { PORTFOLIO_URL } from "@/lib/playbook-config";

// The about page is a client component, so its canonical tag is set here.
// Title and description are inherited from the root layout.
export const metadata: Metadata = {
    alternates: { canonical: `${PORTFOLIO_URL}/about` },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return children;
}
import type { Metadata } from "next";
import { pageUrl } from "@/lib/playbook-config";

const ABOUT_URL = pageUrl("/about");
const OG_TITLE = "About Olakanla Olayide | Full-Stack Developer";
const OG_DESCRIPTION =
    "Full-stack developer from Oyo State, Nigeria, building secure web applications and security tools.";
const OG_IMAGE = pageUrl("/og/home.jpg");

// The about page is a client component, so its canonical and social tags are set here.
// The page <title> and description are inherited from the root layout.
export const metadata: Metadata = {
    alternates: { canonical: ABOUT_URL },
    openGraph: {
        type: "profile",
        url: ABOUT_URL,
        siteName: "XCODE NEXUS",
        title: OG_TITLE,
        description: OG_DESCRIPTION,
        images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: OG_TITLE }],
    },
    twitter: {
        card: "summary_large_image",
        title: OG_TITLE,
        description: OG_DESCRIPTION,
        images: [OG_IMAGE],
    },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return children;
}
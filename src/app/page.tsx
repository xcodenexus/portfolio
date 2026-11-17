import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import AIResources from "@/components/AIResources";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MotionProvider from "@/components/MotionProvider";
import type { Metadata } from "next";
import { PORTFOLIO_URL, pageUrl } from "@/lib/playbook-config";

const TITLE = "Web Developer in Nigeria | Secure Websites and Web Apps | XcodeNexus";
const DESCRIPTION =
  "Olakanla Olayide builds fast, secure websites and web apps with React and Next.js for businesses. Security built in from day one. Live in weeks, not months. Based in Nigeria.";
const OG_IMAGE = pageUrl("/og/home.jpg"); // 1200x630. Replace public/og/home.jpg to change the share image.

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PORTFOLIO_URL },
  openGraph: {
    type: "website",
    url: PORTFOLIO_URL,
    siteName: "XCODE NEXUS",
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: TITLE }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
};

const SERVICE_ID = `${PORTFOLIO_URL}/#service`;
const PERSON_ID = `${PORTFOLIO_URL}/#person`;
const SOCIAL_PROFILES = [
  "https://github.com/xcodenexus",
  "https://www.linkedin.com/in/olakanlajohn/",
  "https://x.com/xcodenexus",
];

// Person + ProfessionalService structured data. No ratings or reviews, on purpose.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": SERVICE_ID,
      name: "XcodeNexus",
      url: PORTFOLIO_URL,
      description: DESCRIPTION,
      image: OG_IMAGE,
      address: { "@type": "PostalAddress", addressRegion: "Oyo State", addressCountry: "NG" },
      serviceType: [
        "Website design and development",
        "Web application development",
        "Website security review and hardening",
      ],
      founder: { "@id": PERSON_ID },
      sameAs: SOCIAL_PROFILES,
    },
    {
      "@type": "Person",
      "@id": PERSON_ID,
      name: "Olakanla Olayide",
      jobTitle: "Full-stack developer",
      url: PORTFOLIO_URL,
      worksFor: { "@id": SERVICE_ID },
      knowsAbout: ["React", "Next.js", "Web application security"],
      sameAs: SOCIAL_PROFILES,
    },
  ],
};

// Without JavaScript, scroll-reveal sections would stay invisible. This makes them readable.
const NO_JS_VISIBLE = '[style*="opacity:0"]{opacity:1!important;transform:none!important}';

export default function Home() {
  return (
    <MotionProvider>
      <main className="min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
        <noscript>
          <style dangerouslySetInnerHTML={{ __html: NO_JS_VISIBLE }} />
        </noscript>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <AIResources />
        <Contact />
        <Footer />
      </main>
    </MotionProvider>
  );
}

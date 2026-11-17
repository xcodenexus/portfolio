import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import AIResources from "@/components/AIResources";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import { PORTFOLIO_URL, pageUrl } from "@/lib/playbook-config";

const OG_TITLE = "Olakanla Olayide | Web Developer & Cybersecurity Enthusiast";
const OG_DESCRIPTION =
  "Portfolio of Olakanla Olayide, a Web Developer specializing in React, Next.js and Cybersecurity. Plus free AI lessons and guides.";
const OG_IMAGE = pageUrl("/og/home.jpg");

// The page <title> and description are inherited from the root layout.
export const metadata: Metadata = {
  alternates: { canonical: PORTFOLIO_URL },
  openGraph: {
    type: "website",
    url: PORTFOLIO_URL,
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

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <AIResources />
      <Contact />
      <Footer />
    </main>
  );
}

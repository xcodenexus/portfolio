/**
 * All portfolio projects. Nothing is deleted from this file.
 *
 * - FEATURED_PROJECTS: shown on the homepage by default, in this order.
 * - MORE_PROJECTS: shown after clicking "More projects".
 * - ARCHIVED_PROJECTS: kept as data but not shown on the homepage grid.
 *
 * `result` is optional. When it has text, it is shown on the card as a short
 * outcome line; leave it empty ("") or omit it and nothing is rendered.
 */
export interface Project {
    name: string;
    desc: string;
    tech: string[];
    github: string;
    live: string;
    image: string;
    result?: string;
}

export const FEATURED_PROJECTS: readonly Project[] = [
    {
        name: "Agape Comfort Care",
        desc: "Rebuilt a home care and VA benefits service for U.S. veterans, migrating the site from Wix to a modern React build with a Sanity-powered blog and Cloudflare bot protection.",
        tech: ["React", "Sanity", "Cloudflare"],
        github: "#",
        live: "https://www.agapecomfort.com/",
        image: "/agape.png",
        result: "",
    },
    {
        name: "Apex Roofing Co.",
        desc: "Roofing, repairs and restoration for a Greater Manchester and Cheshire contractor — full-bleed hero, service breakdown, project gallery, reviews, FAQs and a free-quote flow.",
        tech: ["React", "TypeScript", "Tailwind CSS"],
        github: "#",
        live: "https://apex-roofing-co-webs-8y8m.bolt.host/",
        image: "/apex.png",
        result: "",
    },
    {
        name: "Northline Plumbing",
        desc: "Residential plumbing and heating specialist in Greater Manchester — 24/7 emergency callouts, boiler and bathroom services, testimonials and a tell–diagnose–fix booking journey.",
        tech: ["React", "TypeScript", "Tailwind CSS"],
        github: "#",
        live: "https://northline-plumb-pro.lovable.app/",
        image: "/northline.png",
        result: "",
    },
    {
        name: "Pearl Restaurant",
        desc: "Fine-dining site for an oceanfront restaurant in Eko Atlantic, Lagos — signature menu, experience story and a reservation flow wrapped in a dark, editorial layout.",
        tech: ["React", "Vite", "Tailwind CSS"],
        github: "#",
        live: "https://pearl-resturant.lovable.app/",
        image: "/pearl-lovable.png",
        result: "",
    },
    {
        name: "Dwellora",
        desc: "Real estate marketplace for finding homes and investment properties — buy/rent search, curated listings, agent profiles and a list-your-property flow.",
        tech: ["React", "TypeScript", "Tailwind CSS"],
        github: "#",
        live: "https://panel-rush-93809697.figma.site/",
        image: "/dwellora.png",
        result: "",
    },
    {
        name: "SoleMate",
        desc: "Premium footwear storefront — category browsing, featured drops, cart and checkout, customer reviews and newsletter capture in a neon dark-mode UI.",
        tech: ["React", "TypeScript", "Tailwind CSS", "E-Commerce"],
        github: "#",
        live: "https://solessale.netlify.app/",
        image: "/sole.png",
        result: "",
    },
];

export const MORE_PROJECTS: readonly Project[] = [
    {
        name: "Xremova",
        desc: "One-click background remover — drop in an image and get a clean, high-resolution cutout in seconds. Fully automatic, no signup, no editing skills needed.",
        tech: ["React", "TypeScript", "Image Processing"],
        github: "#",
        live: "https://x-remova.netlify.app/",
        image: "/xremova.png",
        result: "",
    },
    {
        name: "Pearl Restaurant II",
        desc: "A second take on the Pearl brand — cinematic full-bleed hero, scroll-driven storytelling and the same reservation flow rebuilt with a more editorial rhythm.",
        tech: ["React", "Tailwind CSS", "Motion Design"],
        github: "#",
        live: "https://pearlrest.netlify.app/",
        image: "/pearl.png",
        result: "",
    },
    {
        name: "Lumen",
        desc: "A polished frontend for a fictional AI product called Lumen, a workspace for building and running custom AI agents.",
        tech: ["Next.js", "TypeScript", "Tailwind CSS"],
        github: "https://github.com/xcodenexus/Lumen",
        live: "#",
        image: "/lumen.png",
        result: "",
    },
    {
        name: "Olume",
        desc: "A mindfulness dashboard for people who want to take their mental health as seriously as their fitness — without the hustle-culture noise.",
        tech: ["Next.js", "TypeScript", "CSS", "JavaScript"],
        github: "https://github.com/xcodenexus/Olume",
        live: "#",
        image: "/olume.png",
        result: "",
    },
];

/** Kept in the repo, intentionally not rendered on the homepage. */
export const ARCHIVED_PROJECTS: readonly Project[] = [
    {
        name: "ThreatMonitor",
        desc: "Real-time web vulnerability scanner that checks for OWASP Top 10 issues.",
        tech: ["Node.js", "Express", "Cybersecurity", "React"],
        github: "#",
        live: "#",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
        result: "",
    },
    {
        name: "Owlsniper",
        desc: "Automated Solana meme coin trading bot with real-time token sniping, market analysis, and lightning-fast trade execution on the Solana blockchain.",
        tech: ["Node.js", "TypeScript", "Solana Web3.js", "DeFi"],
        github: "https://github.com/xcodenexus/-OwlSniperMVP",
        live: "#",
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80",
        result: "",
    },
    {
        name: "OwlLoc",
        desc: "Windows desktop app that spoofs GPS location on iOS devices via USB cable. No jailbreak required. Supports iOS 12–17+ with automatic RSD tunnel handling.",
        tech: ["Python", "PyQt6", "pymobiledevice3", "Leaflet.js"],
        github: "https://github.com/xcodenexus/owlloc",
        live: "#",
        image: "https://images.unsplash.com/photo-1512054502232-10a0a035d672?auto=format&fit=crop&w=800&q=80",
        result: "",
    },
];

"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowRight } from "lucide-react";

const projects = [
    {
        name: "Agape Comfort Care",
        desc: "Rebuilt a home care and VA benefits service for U.S. veterans, migrating the site from Wix to a modern React build with a Sanity-powered blog and Cloudflare bot protection.",
        tech: ["React", "Sanity", "Cloudflare"],
        github: "#",
        live: "https://www.agapecomfort.com/",
        image: "/agape.png",
    },
    {
        name: "Pearl Restaurant",
        desc: "Fine-dining site for an oceanfront restaurant in Eko Atlantic, Lagos — signature menu, experience story and a reservation flow wrapped in a dark, editorial layout.",
        tech: ["React", "Vite", "Tailwind CSS"],
        github: "#",
        live: "https://pearl-resturant.lovable.app/",
        image: "/pearl-lovable.png",
    },
    {
        name: "Dwellora",
        desc: "Real estate marketplace for finding homes and investment properties — buy/rent search, curated listings, agent profiles and a list-your-property flow.",
        tech: ["React", "TypeScript", "Tailwind CSS"],
        github: "#",
        live: "https://panel-rush-93809697.figma.site/",
        image: "/dwellora.png",
    },
    {
        name: "SoleMate",
        desc: "Premium footwear storefront — category browsing, featured drops, cart and checkout, customer reviews and newsletter capture in a neon dark-mode UI.",
        tech: ["React", "TypeScript", "Tailwind CSS", "E-Commerce"],
        github: "#",
        live: "https://solessale.netlify.app/",
        image: "/sole.png",
    },
    {
        name: "Xremova",
        desc: "One-click background remover — drop in an image and get a clean, high-resolution cutout in seconds. Fully automatic, no signup, no editing skills needed.",
        tech: ["React", "TypeScript", "Image Processing"],
        github: "#",
        live: "https://x-remova.netlify.app/",
        image: "/xremova.png",
    },
    {
        name: "Pearl Restaurant II",
        desc: "A second take on the Pearl brand — cinematic full-bleed hero, scroll-driven storytelling and the same reservation flow rebuilt with a more editorial rhythm.",
        tech: ["React", "Tailwind CSS", "Motion Design"],
        github: "#",
        live: "https://pearlrest.netlify.app/",
        image: "/pearl.png",
    },
    {
        name: "Lumen",
        desc: "A polished frontend for a fictional AI product called Lumen, a workspace for building and running custom AI agents.",
        tech: ["Next.js", "TypeScript", "Tailwind CSS"],
        github: "https://github.com/xcodenexus/Lumen",
        live: "#",
        image: "/lumen.png",
    },
    {
        name: "Olume",
        desc: "A mindfulness dashboard for people who want to take their mental health as seriously as their fitness — without the hustle-culture noise.",
        tech: ["Next.js", "TypeScript", "CSS", "JavaScript"],
        github: "https://github.com/xcodenexus/Olume",
        live: "#",
        image: "/olume.png",
    },
    {
        name: "ThreatMonitor",
        desc: "Real-time web vulnerability scanner that checks for OWASP Top 10 issues.",
        tech: ["Node.js", "Express", "Cybersecurity", "React"],
        github: "#",
        live: "#",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
    },
    {
        name: "Owlsniper",
        desc: "Automated Solana meme coin trading bot with real-time token sniping, market analysis, and lightning-fast trade execution on the Solana blockchain.",
        tech: ["Node.js", "TypeScript", "Solana Web3.js", "DeFi"],
        github: "https://github.com/xcodenexus/-OwlSniperMVP",
        live: "#",
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80",
    },
    {
        name: "OwlLoc",
        desc: "Windows desktop app that spoofs GPS location on iOS devices via USB cable. No jailbreak required. Supports iOS 12–17+ with automatic RSD tunnel handling.",
        tech: ["Python", "PyQt6", "pymobiledevice3", "Leaflet.js"],
        github: "https://github.com/xcodenexus/owlloc",
        live: "#",
        image: "https://images.unsplash.com/photo-1512054502232-10a0a035d672?auto=format&fit=crop&w=800&q=80",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-32 px-6 lg:px-20 bg-[#F8F7F2]">
            <div className="max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-end justify-between mb-24 gap-12">
                    <div>
                        <div className="flex items-center gap-2 mb-6 uppercase tracking-[0.2em] font-bold text-xs text-accent">
                            <span className="text-lg">✱</span> Latest Projects
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-black leading-[1.1] tracking-tight">
                            Take A Look At My <br /> Projects
                        </h2>
                    </div>
                    <p className="max-w-md text-gray-500 text-lg leading-relaxed font-medium lg:mb-1">
                        A selection of my best work in web development, AI integration, and cybersecurity. Each project is built with performance and security in mind.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={project.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white rounded-sm overflow-hidden border border-gray-100 group hover:shadow-2xl hover:shadow-black/5 transition-all duration-500"
                        >
                            <div className="aspect-video overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-700">
                                <img src={project.image} alt={project.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                                    {project.github !== "#" && (
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`${project.name} on GitHub`} className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-accent hover:text-white transition-all">
                                            <Github size={20} />
                                        </a>
                                    )}
                                    {project.live !== "#" && (
                                        <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.name}`} className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-accent hover:text-white transition-all">
                                            <ExternalLink size={20} />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <div className="p-10">
                                <h3 className="text-2xl font-black text-black mb-4 tracking-tight group-hover:text-accent transition-colors">
                                    {project.name}
                                </h3>

                                <p className="text-gray-500 mb-8 line-clamp-2 leading-relaxed font-medium">{project.desc}</p>

                                <div className="flex flex-wrap gap-3 mb-10">
                                    {project.tech.map((t) => (
                                        <span key={t} className="text-[10px] font-bold uppercase tracking-widest px-4 py-1 bg-[#F8F7F2] text-gray-400 rounded-sm">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                {project.live !== "#" ? (
                                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] group-hover:gap-5 transition-all">
                                        View Project <ArrowRight size={16} className="text-accent" />
                                    </a>
                                ) : project.github !== "#" ? (
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] group-hover:gap-5 transition-all">
                                        View Code <ArrowRight size={16} className="text-accent" />
                                    </a>
                                ) : (
                                    <span className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-gray-300">
                                        Private Build
                                    </span>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Work that can't be shown publicly */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 border border-dashed border-gray-300 rounded-sm py-10 px-8 md:px-12 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 text-center md:text-left"
                >
                    <span className="text-accent text-lg leading-none">✱</span>
                    <p className="text-gray-500 font-medium leading-relaxed max-w-2xl">
                        This is selected work only. Several client projects are covered by NDAs and can&apos;t be
                        listed publicly, so what you see here is a slice of the whole.
                    </p>
                    <a
                        href="#contact"
                        className="shrink-0 text-[10px] font-black uppercase tracking-[0.2em] text-black hover:text-accent transition-colors inline-flex items-center gap-2"
                    >
                        Ask Me About Them <ArrowRight size={14} className="text-accent" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}

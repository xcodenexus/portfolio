"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowRight } from "lucide-react";

const projects = [
    {
        name: "SecureVault",
        desc: "A high-security note-taking app with end-to-end encryption and biometric unlock.",
        tech: ["Next.js", "TypeScript", "Tailwind", "Firebase"],
        github: "#",
        live: "#",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    },
    {
        name: "AI CodeGen",
        desc: "AI-powered tool that generates boilerplate code from natural language prompts.",
        tech: ["React", "Python", "OpenAI API", "HuggingFace"],
        github: "#",
        live: "#",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
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
                                    <a href={project.github} className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-accent hover:text-white transition-all">
                                        <Github size={20} />
                                    </a>
                                    <a href={project.live} className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-accent hover:text-white transition-all">
                                        <ExternalLink size={20} />
                                    </a>
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

                                <a href={project.live} className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] group-hover:gap-5 transition-all">
                                    View Project <ArrowRight size={16} className="text-accent" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

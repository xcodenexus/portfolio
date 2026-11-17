"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowRight, ChevronDown } from "lucide-react";
import { LogoMark } from "./Logo";
import Testimonials from "./Testimonials";
import { FEATURED_PROJECTS, MORE_PROJECTS, type Project } from "@/data/projects";
import { REVEAL_VIEWPORT } from "@/lib/motion";

function ProjectCard({ project, idx }: { project: Project; idx: number }) {
    return (
        <motion.div
            initial={{ opacity: 0.35, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={REVEAL_VIEWPORT}
            transition={{ delay: (idx % 3) * 0.1 }}
            className="bg-white rounded-sm overflow-hidden border border-gray-100 group hover:shadow-2xl hover:shadow-black/5 transition-all duration-500 flex flex-col"
        >
            {/* Fixed aspect ratio + lazy loading: no layout shift, and below-the-fold images wait until needed */}
            <div className="aspect-video overflow-hidden relative">
                <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
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

            <div className="p-10 flex flex-col flex-1">
                <h3 className="text-2xl font-black text-black mb-4 tracking-tight group-hover:text-accent transition-colors">
                    {project.name}
                </h3>

                <p className="text-gray-500 mb-8 leading-relaxed font-medium">{project.desc}</p>

                {/* Optional outcome line. Only rendered when a result is filled in. */}
                {project.result && project.result.trim() !== "" && (
                    <p className="text-sm font-black text-black mb-8 border-l-2 border-accent pl-4 leading-snug">
                        {project.result}
                    </p>
                )}

                <div className="flex flex-wrap gap-3 mb-10 mt-auto">
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
    );
}

export default function Projects() {
    const [showMore, setShowMore] = useState(false);

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
                        Websites and web apps built for real businesses. Each project is built with performance and security in mind.
                    </p>
                </div>

                <div id="project-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {FEATURED_PROJECTS.map((project, idx) => (
                        <ProjectCard key={project.name} project={project} idx={idx} />
                    ))}

                    {/* Expands in place. All of this data stays in src/data/projects.ts either way. */}
                    <div className="col-span-full flex justify-center">
                        <button
                            type="button"
                            onClick={() => setShowMore((open) => !open)}
                            aria-expanded={showMore}
                            aria-controls="project-grid"
                            className="inline-flex items-center gap-3 border border-black text-black px-8 py-4 rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all"
                        >
                            {showMore ? "Show fewer projects" : "More projects"}
                            <ChevronDown
                                size={16}
                                aria-hidden
                                className={`text-accent transition-transform ${showMore ? "rotate-180" : ""}`}
                            />
                        </button>
                    </div>

                    {showMore &&
                        MORE_PROJECTS.map((project, idx) => (
                            <ProjectCard key={project.name} project={project} idx={idx} />
                        ))}

                    {/* Fills the trailing gap so the grid always ends on a complete line */}
                    <motion.div
                        initial={{ opacity: 0.35, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={REVEAL_VIEWPORT}
                        transition={{ delay: 0.1 }}
                        className={`md:col-span-2 ${showMore ? "lg:col-span-2" : "lg:col-span-3"} relative overflow-hidden rounded-sm bg-black text-white group`}
                    >
                        {/* Dot-grid texture */}
                        <div
                            aria-hidden
                            className="absolute inset-0 opacity-[0.18]"
                            style={{
                                backgroundImage: "radial-gradient(rgba(255,255,255,0.9) 1px, transparent 1px)",
                                backgroundSize: "22px 22px",
                            }}
                        />

                        <div className="relative flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-14 p-10 lg:p-14 h-full">
                            {/* The XCODE NEXUS mark, same one used in the navbar and favicon */}
                            <motion.div
                                className="shrink-0 mx-auto lg:mx-0"
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <LogoMark className="w-44 lg:w-64 h-auto drop-shadow-[0_0_45px_rgba(255,92,0,0.35)] group-hover:scale-105 transition-transform duration-700" />
                            </motion.div>

                            <div className="text-center lg:text-left">
                                <div className="flex items-center justify-center lg:justify-start gap-2 mb-5 uppercase tracking-[0.2em] font-bold text-xs text-accent">
                                    <span className="text-lg">✱</span> Open Slot
                                </div>

                                <h3 className="text-3xl md:text-4xl font-black tracking-tight leading-[1.1] mb-5">
                                    Your Project <br className="hidden lg:block" /> Could Be Next
                                </h3>

                                <p className="text-gray-400 leading-relaxed font-medium mb-8 max-w-md mx-auto lg:mx-0">
                                    There is room on this grid for what you are building. Tell me the idea and I will
                                    tell you exactly how I would ship it — scope, stack and timeline.
                                </p>

                                <a
                                    href="#contact"
                                    className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-white hover:gap-5 transition-all"
                                >
                                    Start A Project <ArrowRight size={16} className="text-accent" />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Testimonials render here (between the project grid and the NDA note), and only when approved */}
                <Testimonials />

                {/* Work that can't be shown publicly */}
                <motion.div
                    initial={{ opacity: 0.35, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={REVEAL_VIEWPORT}
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

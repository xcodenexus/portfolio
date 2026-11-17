"use client";

import { motion } from "framer-motion";
import { REVEAL_VIEWPORT } from "@/lib/motion";

const experiences = [
    {
        year: "2019 - Present",
        role: "Full Stack Developer",
        company: "xcodenexus",
    },
    {
        year: "2017 - 2025",
        role: "Graphic Designer",
        company: "xcodenexus",
    },
    {
        year: "2017 - 2024",
        role: "Web Designer",
        company: "xcodenexus",
    },
];

const education = [
    {
        year: "2014 - 2020",
        degree: "Federal Government College",
        school: "Ogbomoso, Oyo State, Nigeria",
    },
    {
        year: "2020 - 2026",
        degree: "Ladoke Akintola University of Technology",
        school: "Ogbomoso, Oyo State, Nigeria",
    },
];

const skillGroups = [
    { label: "Frontend", tools: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
    { label: "Backend and databases", tools: ["Node.js", "Python", "Laravel", "PostgreSQL", "MongoDB"] },
    { label: "Security", tools: ["OWASP Top 10", "Burp Suite", "nmap", "gobuster", "OSINT Tools"] },
    { label: "Tools", tools: ["Git", "CI/CD", "Linux (Ubuntu)", "Kali Linux", "CLI"] },
];

export default function Skills() {
    return (
        <section id="skills" className="py-32 px-6 lg:px-20 bg-black text-white">
            <div className="max-w-[1400px] mx-auto">
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0.35, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={REVEAL_VIEWPORT}
                        className="flex items-center justify-center gap-2 mb-6 uppercase tracking-[0.2em] font-bold text-xs text-accent"
                    >
                        <span className="text-lg">✱</span> Skills / Experiences
                    </motion.div>
                    <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">Check My Skills And Work Experiences</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Combining modern web technologies with a security-first mindset and AI-driven efficiency.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">

                    {/* Left: Experience & Education (7/12) */}
                    <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-16">
                        <div>
                            <h3 className="text-2xl font-black mb-12 border-b border-gray-800 pb-6 uppercase tracking-widest">Work Experiences</h3>
                            <div className="space-y-12">
                                {experiences.map((exp, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0.35, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={REVEAL_VIEWPORT}
                                        transition={{ delay: i * 0.1 }}
                                    >
                                        <p className="text-gray-500 font-bold text-xs uppercase tracking-[0.2em] mb-3">{exp.year}</p>
                                        <h4 className="text-xl font-black mb-1">{exp.role}</h4>
                                        <p className="text-accent text-sm font-bold">- {exp.company}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-black mb-12 border-b border-gray-800 pb-6 uppercase tracking-widest">Education</h3>
                            <div className="space-y-12">
                                {education.map((edu, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0.35, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={REVEAL_VIEWPORT}
                                        transition={{ delay: i * 0.1 }}
                                    >
                                        <p className="text-gray-500 font-bold text-xs uppercase tracking-[0.2em] mb-3">{edu.year}</p>
                                        <h4 className="text-xl font-black mb-1">{edu.degree}</h4>
                                        <p className="text-accent text-sm font-bold">- {edu.school}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right: grouped skill chips (5/12) */}
                    <motion.div
                        initial={{ opacity: 0.35, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={REVEAL_VIEWPORT}
                        className="lg:col-span-5"
                    >
                        <h3 className="text-2xl font-black mb-12 border-b border-gray-800 pb-6 uppercase tracking-widest">My Stack</h3>
                        <div className="space-y-10">
                            {skillGroups.map((group) => (
                                <div key={group.label}>
                                    <p className="text-xs font-black uppercase tracking-[0.2em] text-gray-500 mb-4">{group.label}</p>
                                    <div className="flex flex-wrap gap-3">
                                        {group.tools.map((tool) => (
                                            <span key={tool} className="text-[10px] font-bold uppercase tracking-widest px-4 py-2 border border-gray-800 text-gray-300 rounded-sm">
                                                {tool}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

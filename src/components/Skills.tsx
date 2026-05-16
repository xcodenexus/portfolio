"use client";

import { motion } from "framer-motion";
import { Figma, Code, Database, Globe, Server, Layers, GitBranch } from "lucide-react";

const skills = [
    { name: "React / Next.js", level: 95, icon: Globe },
    { name: "TypeScript", level: 90, icon: Code },
    { name: "Tailwind CSS", level: 98, icon: Figma },
    { name: "Node.js", level: 85, icon: Server },
    { name: "Python", level: 85, icon: Code },
    { name: "PostgreSQL", level: 80, icon: Database },
    { name: "Laravel", level: 75, icon: Layers },
    { name: "CI/CD", level: 80, icon: GitBranch },
];

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

const stack = [
    { label: "Environment", tools: ["Linux (Ubuntu)", "Kali Linux", "CLI", "Git"] },
    { label: "Security", tools: ["Burp Suite", "nmap", "gobuster", "OSINT Tools"] },
];

export default function Skills() {
    return (
        <section id="skills" className="py-32 px-6 lg:px-20 bg-black text-white">
            <div className="max-w-[1400px] mx-auto">
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center gap-2 mb-6 uppercase tracking-[0.2em] font-bold text-xs text-accent"
                    >
                        <span className="text-lg">✱</span> Skills / Experiences
                    </motion.div>
                    <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">Check My Skills And Work Experiences</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Combining modern web technologies with a security-first mindset and AI-driven efficiency.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">

                    {/* Left: Experience, Education & Stack (7/12) */}
                    <div className="lg:col-span-7 flex flex-col gap-16">

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                            <div>
                                <h3 className="text-2xl font-black mb-12 border-b border-gray-800 pb-6 uppercase tracking-widest">Work Experiences</h3>
                                <div className="space-y-12">
                                    {experiences.map((exp, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
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
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
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

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-2xl font-black mb-12 border-b border-gray-800 pb-6 uppercase tracking-widest">My Stack</h3>
                            <div className="space-y-8">
                                {stack.map((category) => (
                                    <div key={category.label}>
                                        <p className="text-xs font-black uppercase tracking-[0.2em] text-gray-500 mb-4">{category.label}</p>
                                        <div className="flex flex-wrap gap-3">
                                            {category.tools.map((tool) => (
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

                    {/* Right: Skills Progress Bars (5/12) */}
                    <div className="lg:col-span-1" /> {/* Spacer */}
                    <div className="lg:col-span-4 bg-[#F8F7F2] p-12 rounded-sm text-black">
                        <h3 className="text-xl font-black mb-12 text-center uppercase tracking-[0.2em]">Tech Stack</h3>
                        <div className="space-y-10">
                            {skills.map((skill, i) => (
                                <div key={skill.name}>
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center">
                                                <skill.icon size={18} />
                                            </div>
                                            <p className="font-black text-lg tracking-tight">{skill.name}</p>
                                        </div>
                                        <p className="text-gray-400 font-bold text-sm">{skill.level}%</p>
                                    </div>
                                    <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1.5, ease: "easeOut" }}
                                            className="h-full bg-accent"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

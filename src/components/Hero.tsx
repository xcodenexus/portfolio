"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function Hero() {
    return (
        <section id="home" className="relative min-h-[90vh] flex items-center pt-32 pb-20 px-6 lg:px-20 overflow-hidden bg-[#F8F7F2]">
            <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Left Side Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="z-10"
                >
                    <div className="flex items-center gap-2 mb-8 uppercase tracking-[0.2em] font-bold text-xs text-gray-500">
                        <span className="text-accent text-lg">✱</span> Full-Stack Developer | Building Secure Software & Web Applications
                    </div>

                    <h1 className="text-[4rem] md:text-[6.5rem] font-black leading-[1.1] mb-10 tracking-tight text-black">
                        Hello! I'm <br />
                        <span className="text-accent">Olakanla John</span>
                    </h1>

                    <p className="text-sm md:text-base text-gray-500 max-w-2xl mb-14 leading-relaxed font-medium">
                        I specialize in building modern web applications using React, Next.js, TypeScript, Tailwind CSS, HTML, CSS, JavaScript, and Python, enhanced with AI-assisted workflows and strong problem-solving skills. I also have cybersecurity education and assist non-technical people in understanding and using technology effectively. Based in Nigeria, available for remote work worldwide.
                    </p>

                    <div className="flex flex-wrap items-center gap-10 mb-16">
                        <motion.a
                            href="#contact"
                            whileHover={{ backgroundColor: "#000000" }}
                            className="bg-accent text-white px-10 py-5 rounded-sm font-black text-sm tracking-widest uppercase transition-all shadow-xl shadow-accent/20"
                        >
                            Let's Talk ↗
                        </motion.a>
                        <motion.a
                            href="#projects"
                            className="text-black font-black text-sm tracking-widest uppercase flex items-center gap-2 hover:text-accent transition-all group"
                        >
                            View Projects <span className="text-xl group-hover:translate-x-1 transition-transform">↗</span>
                        </motion.a>
                    </div>

                    <div className="flex items-center gap-8">
                        <div className="flex items-center gap-4">
                            <span className="text-xs font-bold uppercase tracking-widest text-black border-r border-gray-300 pr-8">Check Out My</span>
                            <div className="flex gap-4">
                                {[
                                    { Icon: Github, href: "https://github.com/xcodenexus" },
                                    { Icon: Linkedin, href: "https://www.linkedin.com/in/olakanlajohn/" },
                                    { Icon: Twitter, href: "https://x.com/xcodenexus" },
                                ].map(({ Icon, href }) => (
                                    <motion.a
                                        key={href}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.1, backgroundColor: "#000" }}
                                        className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-accent transition-all"
                                    >
                                        <Icon size={16} />
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Right Side Portrait */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="relative flex justify-center items-center"
                >
                    {/* Decorative Background Shape */}
                    <div className="absolute -z-10 w-[110%] h-[110%] flex items-center justify-center translate-x-10">
                        <svg width="600" height="600" viewBox="0 0 600 600" className="text-accent fill-current opacity-90 drop-shadow-2xl">
                            <rect x="270" y="50" width="60" height="500" rx="30" transform="rotate(45 300 300)" />
                            <rect x="270" y="50" width="60" height="500" rx="30" transform="rotate(-45 300 300)" />
                            <rect x="270" y="50" width="60" height="500" rx="30" transform="rotate(0 300 300)" />
                            <rect x="270" y="50" width="60" height="500" rx="30" transform="rotate(90 300 300)" />
                        </svg>
                    </div>

                    {/* Portrait Container */}
                    <div className="relative w-full max-w-[480px] aspect-[4/5] z-10">
                        <img
                            src="/pic.PNG"
                            alt="Olakanla John"
                            className="w-full h-full object-cover rounded-3xl drop-shadow-2xl"
                        />
                    </div>
                </motion.div>

            </div>

            {/* Background Section Text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[35rem] font-black text-black/[0.015] select-none pointer-events-none uppercase tracking-tighter">
                John
            </div>
        </section>
    );
}

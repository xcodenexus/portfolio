"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const focusAreas = [
    {
        title: "Application Security & Penetration Testing",
        desc: "Understanding how systems break so I can build them stronger.",
    },
    {
        title: "OSINT & Intelligence Automation",
        desc: "Building tools that aggregate and automate information gathering.",
    },
    {
        title: "Blockchain & Solana Ecosystem",
        desc: "Exploring decentralized systems and their security implications.",
    },
    {
        title: "Ancient Knowledge & Modern Technology",
        desc: "How different worldviews and knowledge systems shape how we build technology.",
    },
];

const socials = [
    { Icon: Mail, href: "mailto:xcodenexus@gmail.com", label: "xcodenexus@gmail.com" },
    { Icon: Twitter, href: "https://x.com/xcodenexus", label: "@xcodenexus" },
    { Icon: Github, href: "https://github.com/xcodenexus", label: "github.com/xcodenexus" },
    { Icon: Linkedin, href: "https://www.linkedin.com/in/olakanlajohn/", label: "Olakanla John" },
];

export default function AboutPage() {
    return (
        <>
            <Navbar />
            <main>

                {/* Intro */}
                <section className="relative min-h-[70vh] flex items-center pt-40 pb-24 px-6 lg:px-20 bg-[#F8F7F2] overflow-hidden">
                    <div className="max-w-[1400px] mx-auto w-full">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <div className="flex items-center gap-2 mb-8 uppercase tracking-[0.2em] font-bold text-xs text-gray-500">
                                <span className="text-accent text-lg">✱</span> My Story
                            </div>
                            <h1 className="text-[3.5rem] md:text-[6rem] font-black leading-[1.1] mb-10 tracking-tight text-black">
                                Behind <br />
                                <span className="text-accent">The Code</span>
                            </h1>
                            <p className="text-lg text-gray-500 max-w-2xl leading-relaxed font-medium">
                                I'm a full-stack developer from Oyo State, Nigeria, building secure web applications and security tools. My journey into tech started with curiosity, grew through constraint, and has become a mission to make technology more accessible and secure.
                            </p>
                        </motion.div>
                    </div>
                    <div className="absolute top-1/2 right-0 -translate-y-1/2 text-[20rem] font-black text-black/[0.015] select-none pointer-events-none uppercase tracking-tighter">
                        Story
                    </div>
                </section>

                {/* The Beginning + Finding Space */}
                <section className="py-32 px-6 lg:px-20 bg-white">
                    <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">

                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            <div className="flex items-center gap-2 mb-8 uppercase tracking-[0.2em] font-bold text-xs text-gray-500">
                                <span className="text-accent text-lg">✱</span> The Beginning
                            </div>
                            <h2 className="text-3xl md:text-4xl font-black mb-8 tracking-tight text-black leading-[1.1]">
                                A Computer Shop in Rural Nigeria
                            </h2>
                            <div className="space-y-6 text-gray-500 leading-relaxed font-medium">
                                <p>
                                    My story with computers started in the early 2000s in a rural part of Oyo State, where computers were rare. My father owned a computer shop, and I'd spend time watching people use these fascinating machines. That's where the seed was planted.
                                </p>
                                <p>
                                    Around 2013, my parents brought home two laptops (an HP 655 with 2GB of RAM), purchased on installment. They weren't meant for me, but I used them secretly whenever I could. Then one day, I accidentally corrupted the Windows OS.
                                </p>
                                <p>
                                    That moment of debugging a broken system and bringing it back to life made me fall in love with computers.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            <div className="flex items-center gap-2 mb-8 uppercase tracking-[0.2em] font-bold text-xs text-gray-500">
                                <span className="text-accent text-lg">✱</span> Finding Space to Learn
                            </div>
                            <h2 className="text-3xl md:text-4xl font-black mb-8 tracking-tight text-black leading-[1.1]">
                                Six Years of Consistent Access
                            </h2>
                            <div className="space-y-6 text-gray-500 leading-relaxed font-medium">
                                <p>
                                    When I got admission to Federal Government College Ogbomoso, everything shifted. For six years, I finally had consistent access to computers and the internet, something I didn't have at home.
                                </p>
                                <p>
                                    Back then, electricity was scarce, so I'd strategically charge my laptop during church services and use those windows of time to learn. It wasn't ideal, but it made me resourceful.
                                </p>
                                <p>
                                    At school, we had a Cisco ICT program where I studied operating systems, networking basics, and IoT. I also learned web development through tutorials and by editing templates, skills that serve me well today.
                                </p>
                            </div>
                        </motion.div>

                    </div>
                </section>

                {/* University + Why Security Matters */}
                <section className="py-32 px-6 lg:px-20 bg-black text-white">
                    <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-5"
                        >
                            <div className="flex items-center gap-2 mb-8 uppercase tracking-[0.2em] font-bold text-xs text-accent">
                                <span className="text-lg">✱</span> University & Beyond
                            </div>
                            <h2 className="text-3xl md:text-4xl font-black mb-8 tracking-tight leading-[1.1]">
                                Ladoke Akintola University of Technology
                            </h2>
                            <div className="space-y-6 text-gray-400 leading-relaxed font-medium">
                                <p>
                                    I studied Computer Science at LAUTECH, Ogbomoso. The journey wasn't easy, but it deepened my understanding of how systems work at a fundamental level.
                                </p>
                                <p>
                                    After graduation, I've been shipping projects, learning in public, and building tools that solve real problems, from web applications to security tooling.
                                </p>
                            </div>
                        </motion.div>

                        <div className="lg:col-span-1" />

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.15 }}
                            className="lg:col-span-6"
                        >
                            <div className="flex items-center gap-2 mb-8 uppercase tracking-[0.2em] font-bold text-xs text-accent">
                                <span className="text-lg">✱</span> Why Security Matters
                            </div>
                            <h2 className="text-3xl md:text-4xl font-black mb-8 tracking-tight leading-[1.1]">
                                It Became Personal
                            </h2>
                            <div className="space-y-6 text-gray-400 leading-relaxed font-medium">
                                <p>
                                    My commitment to cybersecurity became real when my mom was socially engineered. Someone targeted her to steal her OTP and gain access to her accounts. I was able to help her understand what happened and prevent the attack.
                                </p>
                                <p>
                                    That moment showed me that security isn't just about technical exploits. It's about protecting real people from harm. Now, I build with security in mind from day one.
                                </p>
                            </div>
                            <blockquote className="mt-10 border-l-2 border-accent pl-8">
                                <p className="text-xl font-black tracking-tight leading-snug">
                                    "Security isn't just about technical exploits. It's about protecting real people from harm."
                                </p>
                            </blockquote>
                        </motion.div>

                    </div>
                </section>

                {/* Focus Areas */}
                <section className="py-32 px-6 lg:px-20 bg-[#F8F7F2]">
                    <div className="max-w-[1400px] mx-auto">
                        <div className="mb-20">
                            <div className="flex items-center gap-2 mb-6 uppercase tracking-[0.2em] font-bold text-xs text-accent">
                                <span className="text-lg">✱</span> What I'm Focused On Now
                            </div>
                            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-black leading-[1.1]">
                                Current Explorations
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {focusAreas.map((area, idx) => (
                                <motion.div
                                    key={area.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="bg-white p-10 rounded-sm border border-gray-100 hover:shadow-xl hover:shadow-black/5 transition-all"
                                >
                                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-accent mb-4">0{idx + 1}</p>
                                    <h3 className="text-xl font-black text-black mb-4 tracking-tight">{area.title}</h3>
                                    <p className="text-gray-500 font-medium leading-relaxed">{area.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Beyond the Terminal */}
                <section className="py-32 px-6 lg:px-20 bg-white">
                    <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center gap-2 mb-8 uppercase tracking-[0.2em] font-bold text-xs text-gray-500">
                                <span className="text-accent text-lg">✱</span> Outside of Code
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black mb-10 tracking-tight text-black leading-[1.1]">
                                Beyond the Terminal
                            </h2>
                            <div className="space-y-6 text-gray-500 leading-relaxed font-medium">
                                <p>
                                    I'm curious about spirituality, ancient history, and civilizations. I spend time thinking about how technology reflects and shapes human consciousness, and how ancient wisdom systems might offer different perspectives on modern problems.
                                </p>
                                <p>
                                    I'm also exploring crypto trading and the economics of decentralized systems. The intersection of technology and financial sovereignty is something I find deeply compelling.
                                </p>
                                <p>
                                    Above all, I'm passionate about making tech accessible to non-technical people — helping others understand how computers work, why security matters, and how technology connects with different perspectives on the world.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-[#F8F7F2] p-12 rounded-sm"
                        >
                            <div className="space-y-10">
                                {[
                                    { number: "2019", label: "Started Full-Stack Development" },
                                    { number: "20+", label: "Projects Shipped" },
                                    { number: "7+", label: "Years in Tech" },
                                    { number: "∞", label: "Things Still to Learn" },
                                ].map((stat) => (
                                    <div key={stat.label} className="border-b border-gray-200 pb-10 last:border-0 last:pb-0">
                                        <p className="text-5xl font-black text-black tracking-tighter mb-2">{stat.number}</p>
                                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                    </div>
                </section>

                {/* Let's Connect */}
                <section className="py-32 px-6 lg:px-20 bg-black text-white">
                    <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center gap-2 mb-8 uppercase tracking-[0.2em] font-bold text-xs text-accent">
                                <span className="text-lg">✱</span> Let's Connect
                            </div>
                            <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.1] mb-10">
                                Interested in Building Together?
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed font-medium max-w-md">
                                If you're interested in building secure software, exploring security automation, or just want to chat about technology and ideas, I'd love to hear from you.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            {socials.map(({ Icon, href, label }, i) => (
                                <motion.a
                                    key={href}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    whileHover={{ x: 8 }}
                                    className="flex items-center gap-6 group"
                                >
                                    <div className="w-14 h-14 rounded-full border border-gray-800 flex items-center justify-center text-gray-400 group-hover:bg-accent group-hover:border-accent group-hover:text-white transition-all">
                                        <Icon size={20} />
                                    </div>
                                    <span className="text-gray-400 font-bold group-hover:text-white transition-colors tracking-wide">{label}</span>
                                </motion.a>
                            ))}
                        </motion.div>

                    </div>
                </section>

            </main>
            <Footer />
        </>
    );
}

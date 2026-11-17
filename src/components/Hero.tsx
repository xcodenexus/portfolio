"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, ArrowUpRight } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";

const WHATSAPP_NUMBER = "2349033211222";
const WHATSAPP_MESSAGE = "Hi Olakanla, I'd like a website for my business.";
const WHATSAPP_CHAT_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export default function Hero() {
    return (
        <section id="home" className="relative min-h-[90vh] flex items-center pt-32 pb-20 px-6 lg:px-20 overflow-hidden bg-[#F8F7F2]">
            <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Left Side Content. Only slides in (never starts invisible), so the text is readable before JS loads. */}
                <motion.div
                    initial={{ y: 30 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="z-10"
                >
                    <div className="flex items-center gap-2 mb-8 uppercase tracking-[0.2em] font-bold text-xs text-gray-500">
                        <span className="text-accent text-lg">✱</span> Olakanla Olayide, full-stack developer
                    </div>

                    <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[4.25rem] font-black leading-[1.1] mb-8 tracking-tight text-black">
                        Fast, secure websites for businesses that want <span className="text-accent">more customers.</span>
                    </h1>

                    <p className="text-base md:text-lg text-gray-500 max-w-2xl mb-12 leading-relaxed font-medium">
                        I build modern websites and web apps with React and Next.js, with security built in from day one. Live in weeks, not months.
                    </p>

                    <div className="flex flex-wrap items-center gap-x-8 gap-y-6 mb-16">
                        <motion.a
                            href="#contact"
                            whileHover={{ backgroundColor: "#000000" }}
                            className="bg-accent text-white px-10 py-5 rounded-full font-black text-sm tracking-widest uppercase transition-all shadow-xl shadow-accent/20 inline-flex items-center gap-2"
                        >
                            Start A Project <ArrowUpRight size={18} strokeWidth={3} />
                        </motion.a>
                        <motion.a
                            href={WHATSAPP_CHAT_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border-2 border-black text-black px-8 py-[18px] rounded-full font-black text-sm tracking-widest uppercase inline-flex items-center gap-2 hover:bg-black hover:text-white transition-all"
                        >
                            <WhatsAppIcon size={18} /> WhatsApp Me
                        </motion.a>
                        <motion.a
                            href="#projects"
                            className="text-black font-black text-sm tracking-widest uppercase flex items-center gap-2 hover:text-accent transition-all group"
                        >
                            View Projects <ArrowUpRight size={18} strokeWidth={3} className="group-hover:translate-x-1 transition-transform" />
                        </motion.a>
                        <motion.a
                            href="/about"
                            className="text-black font-black text-sm tracking-widest uppercase flex items-center gap-2 hover:text-accent transition-all group"
                        >
                            My Story <ArrowUpRight size={18} strokeWidth={3} className="group-hover:translate-x-1 transition-transform" />
                        </motion.a>
                    </div>

                    <div className="flex items-center gap-8">
                        <div className="flex items-center gap-4">
                            <span className="text-xs font-bold uppercase tracking-widest text-black border-r border-gray-300 pr-8">Socials</span>
                            <div className="flex gap-4">
                                {[
                                    { Icon: Github, href: "https://github.com/xcodenexus" },
                                    { Icon: Linkedin, href: "https://www.linkedin.com/in/olakanlajohn/" },
                                    { Icon: Twitter, href: "https://x.com/xcodenexus" },
                                    { Icon: WhatsAppIcon, href: "https://wa.me/2349033211222" },
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
                    initial={{ scale: 0.92 }}
                    animate={{ scale: 1 }}
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

                    {/* Portrait Container: fixed aspect ratio, so there is no layout shift while it loads */}
                    <div className="relative w-full max-w-[480px] aspect-[4/5] z-10">
                        <Image
                            src="/pic.PNG"
                            alt="Olakanla Olayide"
                            fill
                            priority
                            sizes="(min-width: 1024px) 480px, 90vw"
                            className="object-cover rounded-3xl drop-shadow-2xl"
                        />
                    </div>
                </motion.div>

            </div>

            {/* Background Section Text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[35rem] font-black text-black/[0.015] select-none pointer-events-none uppercase tracking-tighter">
                Olayide
            </div>
        </section>
    );
}

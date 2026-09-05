"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import Logo from "./Logo";

export default function Footer() {
    return (
        <footer className="py-20 px-6 lg:px-20 border-t border-gray-100 bg-[#F8F7F2]">
            <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-10">

                {/* Brand lockup */}
                <Logo />

                <p className="text-gray-400 text-[10px] font-black uppercase tracking-[0.2em] text-center md:text-left">
                    © {new Date().getFullYear()} Olakanla Olayide. All rights reserved. <br className="md:hidden" />
                    <span className="hidden md:inline"> | </span>
                    Built with Next.js & Framer Motion.
                </p>

                <div className="flex gap-6">
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
                            whileHover={{ y: -5, color: "#FF5C00" }}
                            className="text-black hover:text-accent transition-all bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-sm border border-gray-100"
                        >
                            <Icon size={18} />
                        </motion.a>
                    ))}
                </div>
            </div>
        </footer>
    );
}

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { LEARN_LINKS } from "@/lib/learn-links";
import { REVEAL_VIEWPORT } from "@/lib/motion";

export default function AIResources() {
    return (
        <section id="learn" className="py-24 px-6 lg:px-20 bg-white border-b border-gray-100">
            <div className="max-w-[1400px] mx-auto">
                <div className="mb-14 max-w-2xl">
                    <div className="flex items-center gap-2 mb-6 uppercase tracking-[0.2em] font-bold text-xs text-accent">
                        <span className="text-lg">✱</span> Learn
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-black leading-[1.1] tracking-tight mb-6">
                        Free AI Resources
                    </h2>
                    <p className="text-gray-500 text-lg leading-relaxed font-medium">
                        I also teach. Start with the free pieces, and go deeper if you want a full plan.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {LEARN_LINKS.map((item, idx) => (
                        <motion.div
                            key={item.href}
                            initial={{ opacity: 0.35, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={REVEAL_VIEWPORT}
                            transition={{ delay: idx * 0.1 }}
                            className="relative flex flex-col bg-[#F8F7F2] border border-gray-100 rounded-sm p-8 hover:border-accent/40 hover:shadow-lg hover:shadow-black/5 transition-all duration-500 group has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-accent"
                        >
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-accent mb-4">
                                {item.tag}
                            </span>
                            <h3 className="text-xl font-black text-black tracking-tight mb-3 group-hover:text-accent transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-gray-500 font-medium leading-relaxed mb-8 flex-1">{item.desc}</p>
                            <Link
                                href={item.href}
                                className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] group-hover:gap-5 transition-all after:absolute after:inset-0 focus:outline-none"
                            >
                                {item.cta}
                                <span className="sr-only">: {item.title}</span>
                                <ArrowRight size={16} className="text-accent" aria-hidden />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
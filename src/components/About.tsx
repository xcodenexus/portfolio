"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { REVEAL_VIEWPORT } from "@/lib/motion";

const offers = [
    {
        title: "Business website",
        promise: "A fast, mobile-friendly site that helps customers find you and contact you.",
        includes: ["Design and build", "SEO basics", "Contact or booking form"],
    },
    {
        title: "Web app or custom build",
        promise: "A custom tool, dashboard or online store built to fit how your business works.",
        includes: ["React/Next.js build", "Database and login if needed", "Launch support"],
    },
    {
        title: "Security check and hardening",
        promise: "Protect your site or app from common attacks.",
        includes: ["Review against common vulnerabilities (OWASP Top 10)", "Fixes", "Advice"],
    },
];

const steps = [
    "Tell me the idea",
    "I send scope and quote",
    "I build it in weeks",
    "Launch and ongoing support",
];

const strengths = ["AI-assisted workflow, faster delivery", "Security-first builds"];

export default function About() {
    return (
        <section id="about" className="py-32 px-6 lg:px-20 bg-[#F8F7F2]">
            <div className="max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">

                    {/* Left Column (5/12) */}
                    <div className="lg:col-span-5">
                        <div className="flex items-center gap-2 mb-8 uppercase tracking-[0.2em] font-bold text-xs text-gray-500">
                            <span className="text-accent text-lg">✱</span> What I Can Do
                        </div>

                        <h2 className="text-5xl md:text-6xl font-black mb-10 leading-[1.1] text-black tracking-tight">
                            What Can I <br />
                            Do For You
                        </h2>

                        <p className="text-lg text-gray-500 mb-12 leading-relaxed font-medium max-w-lg">
                            I specialize in building high-performance web applications using modern technologies and AI-assisted workflows. My focus is on creating secure, scalable, and visually stunning digital experiences.
                        </p>

                        <div className="grid grid-cols-2 gap-12 mb-12">
                            <div>
                                <p className="text-4xl font-black text-black mb-2 tracking-tighter">30+</p>
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest leading-loose">Projects <br /> Completed</p>
                            </div>
                            <div>
                                <p className="text-4xl font-black text-black mb-2 tracking-tighter">7+</p>
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest leading-loose">Years Of <br /> Experiences</p>
                            </div>
                        </div>

                        <ul className="space-y-4">
                            {strengths.map((item) => (
                                <li key={item} className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] text-black">
                                    <span className="text-accent text-lg leading-none">✱</span> {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Column: the three offers */}
                    <div className="lg:col-span-1" /> {/* Spacer */}
                    <div className="lg:col-span-6 space-y-4">
                        {offers.map((offer, idx) => (
                            <motion.div
                                key={offer.title}
                                initial={{ opacity: 0.35, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={REVEAL_VIEWPORT}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white p-8 rounded-sm border border-gray-100 hover:shadow-xl hover:shadow-black/5 transition-all"
                            >
                                <h3 className="text-xl sm:text-2xl font-black text-black mb-3 tracking-tight">{offer.title}</h3>
                                <p className="text-gray-500 font-medium leading-relaxed mb-6">{offer.promise}</p>

                                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-3">Includes</p>
                                <ul className="space-y-2 mb-8">
                                    {offer.includes.map((item) => (
                                        <li key={item} className="flex items-start gap-3 text-sm font-bold text-black">
                                            <span className="text-accent leading-tight">✱</span> {item}
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href="#contact"
                                    className="inline-flex items-center gap-2 border border-black text-black px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:bg-accent hover:text-white hover:border-accent transition-all"
                                >
                                    Get a quote <ArrowUpRight size={14} strokeWidth={3} />
                                </a>
                            </motion.div>
                        ))}
                    </div>

                </div>

                {/* How it works */}
                <div className="mt-24">
                    <div className="flex items-center gap-2 mb-8 uppercase tracking-[0.2em] font-bold text-xs text-gray-500">
                        <span className="text-accent text-lg">✱</span> How It Works
                    </div>
                    <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {steps.map((step, idx) => (
                            <motion.li
                                key={step}
                                initial={{ opacity: 0.35, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={REVEAL_VIEWPORT}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white p-8 rounded-sm border border-gray-100"
                            >
                                <p className="text-4xl font-black text-accent tracking-tighter mb-4">{idx + 1}</p>
                                <p className="text-lg font-black text-black tracking-tight leading-snug">{step}</p>
                            </motion.li>
                        ))}
                    </ol>
                </div>
            </div>
        </section>
    );
}

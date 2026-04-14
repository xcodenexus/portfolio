"use client";

import { motion } from "framer-motion";
import { Search, ArrowUpRight } from "lucide-react";

const services = [
    {
        title: "Web Development",
        projects: "50+ Projects Done",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=200&q=80",
    },
    {
        title: "AI-Assisted Workflow",
        projects: "10x Faster Coding",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=200&q=80",
    },
    {
        title: "Cybersecurity",
        projects: "Secure Coding Expert",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=200&q=80",
    }
];

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
                                <p className="text-4xl font-black text-black mb-2 tracking-tighter">20+</p>
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest leading-loose">Projects <br /> Completed</p>
                            </div>
                            <div>
                                <p className="text-4xl font-black text-black mb-2 tracking-tighter">7+</p>
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest leading-loose">Years Of <br /> Experiences</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-6">
                            <div className="bg-black text-white px-8 py-6 rounded-sm flex flex-col justify-center min-w-[220px]">
                                <p className="text-lg font-black tracking-tight leading-tight mb-1">Modern Web <br /> Expert</p>
                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Professional Developer</p>
                            </div>
                            <motion.div
                                whileHover={{ scale: 1.1, backgroundColor: "#FF5C00" }}
                                className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center cursor-pointer transition-all hover:border-accent group"
                            >
                                <Search size={20} className="text-black group-hover:text-white" />
                            </motion.div>
                        </div>
                    </div>

                    {/* Right Column (7/12) */}
                    <div className="lg:col-span-1" /> {/* Spacer */}
                    <div className="lg:col-span-6 space-y-4">
                        {services.map((service, idx) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white p-6 rounded-sm border border-gray-100 flex items-center justify-between group hover:shadow-xl hover:shadow-black/5 transition-all cursor-pointer"
                            >
                                <div className="flex items-center gap-8">
                                    <div className="w-24 h-24 overflow-hidden rounded-sm grayscale group-hover:grayscale-0 transition-all duration-500">
                                        <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-black text-black mb-1 tracking-tight">{service.title}</h3>
                                        <p className="text-gray-400 text-sm font-bold uppercase tracking-widest">{service.projects}</p>
                                    </div>
                                </div>
                                <div className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all">
                                    <ArrowUpRight size={20} />
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}

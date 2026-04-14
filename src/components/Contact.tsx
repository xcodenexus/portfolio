"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
    const [status, setStatus] = useState<Status>("idle");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus("loading");

        const form = e.currentTarget;

        try {
            const res = await fetch("https://formspree.io/f/xvzdgody", {
                method: "POST",
                body: new FormData(form),
                headers: { Accept: "application/json" },
            });

            if (res.ok) {
                setStatus("success");
                form.reset();
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    }

    return (
        <section id="contact" className="py-32 px-6 lg:px-20 bg-white">
            <div className="max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">

                    {/* Left: Contact Info */}
                    <div>
                        <div className="flex items-center gap-2 mb-8 uppercase tracking-[0.2em] font-bold text-xs text-accent">
                            <span className="text-lg">✱</span> Get In Touch
                        </div>
                        <h2 className="text-5xl md:text-6xl font-black text-black mb-10 leading-[1.1] tracking-tight">Let's Work Together</h2>
                        <p className="text-gray-500 text-lg mb-16 max-w-md leading-relaxed font-medium">
                            Have a project in mind? Reach out and let's build something amazing together. I'm always open to discussing new opportunities.
                        </p>

                        <div className="space-y-12">
                            <div className="flex gap-8 items-center">
                                <div className="w-16 h-16 rounded-full bg-[#F8F7F2] flex items-center justify-center text-accent">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-gray-400 border-b border-gray-100 pb-2 uppercase tracking-[0.2em] mb-3">Email Me</p>
                                    <p className="text-2xl font-black tracking-tight">xcodenexus@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex gap-8 items-center">
                                <div className="w-16 h-16 rounded-full bg-[#F8F7F2] flex items-center justify-center text-accent">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-gray-400 border-b border-gray-100 pb-2 uppercase tracking-[0.2em] mb-3">Location</p>
                                    <p className="text-2xl font-black tracking-tight">Ogbomoso, Nigeria</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-[#F8F7F2] p-12 rounded-sm"
                    >
                        {status === "success" ? (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="h-full flex flex-col items-center justify-center text-center gap-6 py-16"
                            >
                                <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                                    <CheckCircle size={40} />
                                </div>
                                <h3 className="text-3xl font-black text-black tracking-tight">Message Sent!</h3>
                                <p className="text-gray-500 font-medium max-w-xs leading-relaxed">
                                    Thanks for reaching out. I'll get back to you as soon as possible.
                                </p>
                                <button
                                    onClick={() => setStatus("idle")}
                                    className="text-[10px] font-black uppercase tracking-[0.2em] text-accent hover:text-black transition-colors mt-4"
                                >
                                    Send Another Message
                                </button>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label htmlFor="name" className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Name</label>
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            placeholder="John Doe"
                                            required
                                            className="w-full bg-white border-none rounded-sm px-6 py-4 focus:ring-2 focus:ring-accent transition-all font-medium text-black placeholder:text-gray-300"
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <label htmlFor="email" className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Email</label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="john@example.com"
                                            required
                                            className="w-full bg-white border-none rounded-sm px-6 py-4 focus:ring-2 focus:ring-accent transition-all font-medium text-black placeholder:text-gray-300"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <label htmlFor="subject" className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Subject</label>
                                    <input
                                        id="subject"
                                        name="subject"
                                        type="text"
                                        placeholder="Project Inquiry"
                                        required
                                        className="w-full bg-white border-none rounded-sm px-6 py-4 focus:ring-2 focus:ring-accent transition-all font-medium text-black placeholder:text-gray-300"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label htmlFor="message" className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        placeholder="Tell me about your project..."
                                        required
                                        className="w-full bg-white border-none rounded-sm px-6 py-4 focus:ring-2 focus:ring-accent transition-all resize-none font-medium text-black placeholder:text-gray-300"
                                    />
                                </div>

                                {status === "error" && (
                                    <p className="text-xs font-bold text-red-500 uppercase tracking-widest">
                                        Something went wrong. Please try again or email directly.
                                    </p>
                                )}

                                <motion.button
                                    type="submit"
                                    disabled={status === "loading"}
                                    whileHover={status !== "loading" ? { backgroundColor: "#000000" } : {}}
                                    transition={{ duration: 0.3 }}
                                    className="w-full bg-accent text-white py-5 rounded-sm font-black uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-3 shadow-xl shadow-accent/20 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {status === "loading" ? "Sending..." : (<>Send Message <Send size={16} /></>)}
                                </motion.button>
                            </form>
                        )}
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

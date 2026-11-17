"use client";

import { motion } from "framer-motion";
import { getApprovedTestimonials } from "@/data/testimonials";
import { REVEAL_VIEWPORT } from "@/lib/motion";

/** Renders nothing at all unless at least one testimonial is approved. */
export default function Testimonials() {
    const items = getApprovedTestimonials();
    if (items.length === 0) return null;

    const columns = items.length >= 3 ? "md:grid-cols-2 lg:grid-cols-3" : "md:grid-cols-2";

    return (
        <div className="mt-24">
            <div className="flex items-center gap-2 mb-6 uppercase tracking-[0.2em] font-bold text-xs text-accent">
                <span className="text-lg">✱</span> Client Feedback
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-black leading-[1.1] tracking-tight mb-12">
                What clients say
            </h2>

            <ul className={`grid grid-cols-1 gap-6 ${columns}`}>
                {items.map((item, idx) => (
                    <motion.li
                        key={`${item.label}-${idx}`}
                        initial={{ opacity: 0.35, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={REVEAL_VIEWPORT}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-white rounded-sm border border-gray-100 p-10"
                    >
                        <figure className="flex h-full flex-col">
                            <blockquote className="text-lg text-black font-medium leading-relaxed mb-8 flex-1">
                                &ldquo;{item.quote}&rdquo;
                            </blockquote>
                            <figcaption className="text-[10px] font-black uppercase tracking-[0.2em] text-accent">
                                {item.label}
                            </figcaption>
                        </figure>
                    </motion.li>
                ))}
            </ul>

            <p className="mt-8 text-sm text-gray-400 font-medium">
                Some clients prefer to stay anonymous. Their words are shared with their permission.
            </p>
        </div>
    );
}

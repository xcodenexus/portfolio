"use client";

import { track } from "@vercel/analytics";
import { useHrefWithUtm } from "@/lib/selar";

type Variant = "onOrange" | "onWhite" | "onDark" | "ghost" | "light";

interface CtaLinkProps {
    /** Target URL (site-relative or absolute). The visitor's utm_* params are appended. */
    href: string;
    /** Where the button sits, sent with the click event (e.g. "ai_guide_step_1"). */
    location: string;
    variant?: Variant;
    large?: boolean;
    /** Smaller padding and text, for use inside bars. */
    compact?: boolean;
    /** Open in a new tab (for external destinations such as WhatsApp). */
    newTab?: boolean;
    /** Overrides the default rel ("noopener noreferrer") when newTab is set. */
    rel?: string;
    className?: string;
    children: React.ReactNode;
}

const VARIANT_CLASSES: Record<Variant, string> = {
    onOrange: "bg-[#1A1A1F] text-white hover:bg-black focus-visible:outline-white",
    onWhite: "bg-[#D9540B] text-white hover:bg-[#B94509] focus-visible:outline-[#1A1A1F]",
    onDark: "bg-[#F26A1B] text-[#1A1A1F] hover:bg-[#FF8040] focus-visible:outline-white",
    ghost: "border-2 border-[#D9540B] text-[#D9540B] hover:bg-[#FFF1E6] focus-visible:outline-[#1A1A1F]",
    light: "bg-white text-[#1A1A1F] hover:bg-[#FFF1E6] focus-visible:outline-[#1A1A1F]",
};

/** Internal call-to-action link: passes utm_* along and records a click event. */
export default function CtaLink({
    href,
    location,
    variant = "onWhite",
    large = false,
    compact = false,
    newTab = false,
    rel = "noopener noreferrer",
    className = "",
    children,
}: CtaLinkProps) {
    const target = useHrefWithUtm(href);
    const size = compact ? "px-4 py-2 text-sm" : large ? "px-8 py-5 text-lg" : "px-6 py-4 text-base";

    return (
        <a
            href={target}
            onClick={() => track("cta_click", { location, target: href })}
            {...(newTab ? { target: "_blank", rel } : {})}
            className={`inline-flex items-center justify-center rounded-full font-bold text-center transition-colors focus-visible:outline-[3px] focus-visible:outline-offset-4 ${size} ${VARIANT_CLASSES[variant]} ${className}`}
        >
            {children}
        </a>
    );
}

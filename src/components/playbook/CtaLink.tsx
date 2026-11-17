"use client";

import { track } from "@vercel/analytics";
import { useHrefWithUtm } from "@/lib/selar";

type Variant = "onOrange" | "onWhite" | "onDark" | "ghost";

interface CtaLinkProps {
    /** Site-relative target. The visitor's utm_* params are appended. */
    href: string;
    /** Where the button sits, sent with the click event (e.g. "ai_guide_step_1"). */
    location: string;
    variant?: Variant;
    large?: boolean;
    className?: string;
    children: React.ReactNode;
}

const VARIANT_CLASSES: Record<Variant, string> = {
    onOrange: "bg-[#1A1A1F] text-white hover:bg-black focus-visible:outline-white",
    onWhite: "bg-[#D9540B] text-white hover:bg-[#B94509] focus-visible:outline-[#1A1A1F]",
    onDark: "bg-[#F26A1B] text-[#1A1A1F] hover:bg-[#FF8040] focus-visible:outline-white",
    ghost: "border-2 border-[#D9540B] text-[#D9540B] hover:bg-[#FFF1E6] focus-visible:outline-[#1A1A1F]",
};

/** Internal call-to-action link: passes utm_* along and records a click event. */
export default function CtaLink({
    href,
    location,
    variant = "onWhite",
    large = false,
    className = "",
    children,
}: CtaLinkProps) {
    const target = useHrefWithUtm(href);

    return (
        <a
            href={target}
            onClick={() => track("cta_click", { location, target: href })}
            className={`inline-flex items-center justify-center rounded-full font-bold text-center transition-colors focus-visible:outline-[3px] focus-visible:outline-offset-4 ${
                large ? "px-8 py-5 text-lg" : "px-6 py-4 text-base"
            } ${VARIANT_CLASSES[variant]} ${className}`}
        >
            {children}
        </a>
    );
}

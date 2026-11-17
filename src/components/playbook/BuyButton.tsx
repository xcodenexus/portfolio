"use client";

import { track } from "@vercel/analytics";
import { useSelarHref } from "@/lib/selar";

type Variant = "onOrange" | "onWhite";

interface BuyButtonProps {
    /** Where the button sits, sent with the click event (e.g. "hero"). */
    location: string;
    variant?: Variant;
    large?: boolean;
    className?: string;
    children: React.ReactNode;
}

const VARIANT_CLASSES: Record<Variant, string> = {
    onOrange:
        "bg-[#1A1A1F] text-white hover:bg-black focus-visible:outline-white",
    onWhite:
        "bg-[#D9540B] text-white hover:bg-[#B94509] focus-visible:outline-[#1A1A1F]",
};

export default function BuyButton({
    location,
    variant = "onWhite",
    large = false,
    className = "",
    children,
}: BuyButtonProps) {
    const href = useSelarHref();

    return (
        <a
            href={href}
            onClick={() => track("selar_click", { location })}
            className={`inline-flex items-center justify-center rounded-full font-bold text-center transition-colors focus-visible:outline-[3px] focus-visible:outline-offset-4 ${
                large ? "px-8 py-5 text-lg" : "px-6 py-4 text-base"
            } ${VARIANT_CLASSES[variant]} ${className}`}
        >
            {children}
        </a>
    );
}

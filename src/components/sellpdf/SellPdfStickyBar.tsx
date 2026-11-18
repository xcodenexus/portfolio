"use client";

import { useEffect, useState } from "react";
import { SELL_PDF_PRICE_LABEL } from "@/lib/playbook-config";
import SellPdfBuyButton from "./SellPdfBuyButton";

export const SELL_PDF_HERO_ID = "sellpdf-hero";

/** Mobile-only bottom bar that appears once the hero has scrolled out of view. */
export default function SellPdfStickyBar() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const hero = document.getElementById(SELL_PDF_HERO_ID);
        if (!hero) return;

        const observer = new IntersectionObserver(([entry]) => {
            setIsVisible(!entry.isIntersecting);
        });
        observer.observe(hero);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            className={`fixed inset-x-0 bottom-0 z-40 border-t border-[#1A1A1F]/10 bg-white py-3 pl-4 pr-20 shadow-[0_-4px_16px_rgba(0,0,0,0.08)] transition-transform duration-200 md:hidden ${
                isVisible ? "translate-y-0" : "invisible translate-y-full"
            }`}
        >
            <SellPdfBuyButton location="sellpdf_sticky_bar" className="w-full">
                Get it on Selar, {SELL_PDF_PRICE_LABEL}
            </SellPdfBuyButton>
        </div>
    );
}

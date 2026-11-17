"use client";

import { useEffect, useState } from "react";
import { PRICE_LABEL } from "@/lib/playbook-config";
import BuyButton from "./BuyButton";

export const HERO_ID = "pb-hero";

/** Mobile-only bottom bar that appears once the hero has scrolled out of view. */
export default function StickyBuyBar() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const hero = document.getElementById(HERO_ID);
        if (!hero) return;

        const observer = new IntersectionObserver(([entry]) => {
            setIsVisible(!entry.isIntersecting);
        });
        observer.observe(hero);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            className={`fixed inset-x-0 bottom-0 z-40 border-t border-[#1A1A1F]/10 bg-white px-4 py-3 shadow-[0_-4px_16px_rgba(0,0,0,0.08)] transition-transform duration-200 md:hidden ${
                isVisible ? "translate-y-0" : "invisible translate-y-full"
            }`}
        >
            <BuyButton location="sticky_bar" className="w-full">
                Get the Playbook, {PRICE_LABEL}
            </BuyButton>
        </div>
    );
}

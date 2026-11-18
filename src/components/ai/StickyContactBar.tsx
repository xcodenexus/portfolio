"use client";

import { useEffect, useState } from "react";
import { CONTACT_URL, PORTFOLIO_URL } from "@/lib/playbook-config";
import CtaLink from "@/components/playbook/CtaLink";

export const AI_HERO_ID = "ai-hero";

/**
 * Mobile-only bottom bar with the portfolio and contact links. It appears once
 * the hero scrolls out of view. The right side is left clear for the live-chat bubble.
 */
export default function StickyContactBar() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const hero = document.getElementById(AI_HERO_ID);
        if (!hero) return;

        const observer = new IntersectionObserver(([entry]) => {
            setIsVisible(!entry.isIntersecting);
        });
        observer.observe(hero);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            className={`fixed inset-x-0 bottom-0 z-40 flex gap-3 border-t border-[#1A1A1F]/10 bg-white py-3 pl-4 pr-20 shadow-[0_-4px_16px_rgba(0,0,0,0.08)] transition-transform duration-200 md:hidden ${
                isVisible ? "translate-y-0" : "invisible translate-y-full"
            }`}
        >
            <CtaLink href={PORTFOLIO_URL} location="ai_sticky_portfolio" variant="ghost" compact className="flex-1 !py-3">
                Portfolio
            </CtaLink>
            <CtaLink href={CONTACT_URL} location="ai_sticky_contact" variant="onWhite" compact className="flex-1 !py-3">
                Contact
            </CtaLink>
        </div>
    );
}

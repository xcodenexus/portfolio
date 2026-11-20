"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

type GtagFn = (command: "event", name: string, params?: Record<string, unknown>) => void;

const WHATSAPP_HOSTS = ["wa.me", "api.whatsapp.com"];
const CONTACT_LABEL = /\b(get a quote|hire me|start a project|contact me|work with me)\b/i;

function sendEvent(name: string, params: Record<string, unknown>): void {
    const gtag = (window as unknown as { gtag?: GtagFn }).gtag;
    if (typeof gtag === "function") gtag("event", name, params);
}

function isWhatsAppLink(href: string): boolean {
    try {
        return WHATSAPP_HOSTS.includes(new URL(href, window.location.href).hostname);
    } catch {
        return false;
    }
}

function isContactLink(link: HTMLAnchorElement, href: string): boolean {
    return href === "#contact" || CONTACT_LABEL.test(link.textContent ?? "");
}

function classifyClick(link: HTMLAnchorElement): string | null {
    const href = link.getAttribute("href") ?? "";
    if (!href) return null;
    if (isWhatsAppLink(href)) return "whatsapp_click";
    if (isContactLink(link, href)) return "contact_click";
    if (link.closest("#projects")) return "project_click";
    return null;
}

/**
 * Google Analytics 4 event tracking. Renders nothing.
 * - page_view on client-side route changes (the first load is already sent by gtag('config')).
 * - whatsapp_click / contact_click / project_click via one delegated click listener.
 */
export default function GoogleAnalyticsEvents() {
    const pathname = usePathname();
    const isFirstRender = useRef(true);

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
        sendEvent("page_view", { page_path: pathname });
    }, [pathname]);

    useEffect(() => {
        const onClick = (event: MouseEvent) => {
            const target = event.target;
            if (!(target instanceof Element)) return;
            const link = target.closest("a");
            if (!link) return;
            const eventName = classifyClick(link);
            if (!eventName) return;
            sendEvent(eventName, {
                link_url: link.href,
                link_text: (link.textContent ?? "").trim().slice(0, 80),
                page_path: window.location.pathname,
            });
        };
        document.addEventListener("click", onClick);
        return () => document.removeEventListener("click", onClick);
    }, []);

    return null;
}

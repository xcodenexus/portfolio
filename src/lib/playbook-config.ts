/**
 * Single place to edit everything shared by the three pages:
 *   /aisidehustleplaybook, /how-to-write-better-prompts and /ai
 */

export const SELAR_URL = "https://selar.com/8339444mw9";
export const PRICE_LABEL = "₦8,500";
/** Numeric price for structured data (Product JSON-LD). Keep in sync with PRICE_LABEL. */
export const PRICE_AMOUNT = "8500";
export const PRICE_CURRENCY = "NGN";

export const WHATSAPP_URL = "https://wa.me/2349033211222";
export const PORTFOLIO_URL = "https://xcodenexus.com";

export const PLAYBOOK_URL = "/aisidehustleplaybook";
export const PROMPT_LESSON_URL = "/how-to-write-better-prompts";
export const AI_GUIDE_URL = "/ai";

/** ISO date. Shown as "Last updated" and used for Article dateModified. */
export const LAST_UPDATED = "2026-11-17";
export const DATE_PUBLISHED = "2026-11-17";

export const PRODUCT_NAME = "The AI Side Hustle Playbook";
export const BRAND_NAME = "XcodeNexus";

/** Images live in /public/aisidehustleplaybook/ (cover + previews) and /public/og/. */
const ASSET_BASE = "/aisidehustleplaybook";
export const COVER_IMAGE = `${ASSET_BASE}/cover.webp`;
export const OG_IMAGE_PLAYBOOK = `${ASSET_BASE}/og.jpg`; // 1200x630
export const OG_IMAGE_LESSON = "/og/prompt-lesson.jpg"; // 1200x630
export const OG_IMAGE_AI = "/og/ai-guide.jpg"; // 1200x630

/** Aspect ratio of the PDF pages (A5-style), used to avoid layout shift. */
export const PAGE_RATIO = "420 / 595";

export const PREVIEW_IMAGES = [
    { src: `${ASSET_BASE}/preview-1.webp`, alt: "Contents page of The AI Side Hustle Playbook", label: "Contents" },
    { src: `${ASSET_BASE}/preview-2.webp`, alt: "The delivery workflow page from Path A", label: "Delivery workflow" },
    { src: `${ASSET_BASE}/preview-3.webp`, alt: "A copy-this-prompt page from Path B", label: "Copy-ready prompts" },
    { src: `${ASSET_BASE}/preview-4.webp`, alt: "Outreach scripts page", label: "Outreach scripts" },
];

/** Refunds are handled on Selar, not by you. */
export const REFUND_TEXT =
    "I don't handle payments or refunds myself. Your purchase is processed by Selar, so check Selar's refund terms on the checkout page before you buy.";

export function pageUrl(path: string): string {
    return `${PORTFOLIO_URL}${path}`;
}

export function isLinkSet(url: string): boolean {
    return url !== "" && url !== "TODO";
}

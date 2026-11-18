import type { FaqItem } from "@/components/playbook/Faq";
import { REFUND_TEXT, SELL_PDF_PAGES } from "@/lib/playbook-config";

export const SELL_PDF_PROMISE =
    "Pick a niche, build with AI, and sell on Selar, Gumroad and Stan Store.";

export const WHO_FOR: readonly string[] = [
    "Nigerians who want to turn what they know into a PDF, guide, template or workbook people pay for.",
    "Creators, teachers and freelancers who already have knowledge worth packaging.",
    "Beginners. You do not need design or coding skills to follow it.",
];

export const WHAT_YOU_LEARN: readonly string[] = [
    "Score a niche on four points before you spend time on it.",
    "Check trends and demand so you build what people already look for.",
    "Use AI to draft your product, with copy-and-paste prompts.",
    "Design and price your PDF in naira.",
    "Compare Selar, Gumroad and Stan Store, and pick one for Nigeria payouts.",
    "Write a sales page that is clear and honest.",
    "Plan TikTok and WhatsApp content to get your first visitors.",
    "Avoid copyright and PLR mistakes, and keep basic tax records.",
];

export const WHATS_INSIDE: readonly string[] = [
    "Four-part niche scoring",
    "Trend and demand research",
    "AI workflow with copy-paste prompts",
    "Design and pricing in naira",
    "Selar vs Gumroad vs Stan Store (fees and Nigeria payouts)",
    "Sales page structure",
    "TikTok and WhatsApp content plan",
    "Small-budget ads guide (Meta and TikTok rules)",
    "Affiliate scripts",
    "Copyright and PLR warnings",
    "Tax and records basics",
    "Mistakes to avoid",
    "A 30-day launch plan",
];

export const NOT_FOR: readonly string[] = [
    "Anyone who wants guaranteed income. No book can promise that.",
    "Anyone looking for a no-work shortcut. You still have to build, publish and promote.",
];

export const HONEST_NOTE =
    "Platform fees and rules change. The fee and Nigeria payout details in the book were checked in November 2026, so confirm them on each platform before you decide. This is educational content. It makes no income promises and is not legal, tax or financial advice.";

export const SELL_PDF_FAQS: readonly FaqItem[] = [
    {
        q: "What format is it?",
        a: `A ${SELL_PDF_PAGES}-page PDF. It opens on a phone, tablet or laptop, and you can print it if you like.`,
    },
    {
        q: "How does delivery work?",
        a: "You pay on Selar and the download is available straight after payment. Selar also sends a copy to the email you used at checkout.",
    },
    {
        q: "Does it work from Nigeria?",
        a: "Yes. It is written for Nigerian creators. Prices are in naira and the platform comparison covers Nigeria payouts. The ideas also work if you are elsewhere.",
    },
    {
        q: "What about refunds and support?",
        a: `${REFUND_TEXT} For questions about the book itself, message me on WhatsApp.`,
    },
    {
        q: "Is it beginner friendly?",
        a: "Yes. It starts from choosing a niche and ends with a 30-day launch plan, with the AI prompts written out for you to copy.",
    },
];

import { PORTFOLIO_URL, PRICE_LABEL, REFUND_TEXT } from "@/lib/playbook-config";
import BuyButton from "./BuyButton";
import Faq, { type FaqItem } from "./Faq";

const YOU_GET = [
    "The full 46-page PDF",
    "Five paths to your first client",
    "12 copy-ready prompts",
    "Outreach scripts",
    "Nigeria payout guide (Payoneer, Grey, local payments)",
    "A scam-safety chapter",
    "A 30-day plan",
];

export const PLAYBOOK_FAQS: readonly FaqItem[] = [
    {
        q: "Do I need experience?",
        a: "No. The playbook is written for beginners. If you can use a phone or laptop and follow steps, you can start.",
    },
    {
        q: "Do I need money to start?",
        a: "You don't need a big budget. The playbook focuses on free or low-cost tools. You will need data and a phone or laptop. Some optional tools have paid plans.",
    },
    {
        q: "Is it only for Nigeria?",
        a: "No. The ideas work anywhere. The payout guide covers options for Nigerians (Payoneer, Grey and local payments), and the examples are written with Nigerian readers in mind.",
    },
    {
        q: "Which path should I choose?",
        a: "Pick the one that matches your skills and how you like to work. Start with one path, not all five.",
    },
    {
        q: "Is income guaranteed?",
        a: "No. Results depend on your effort, your skills and your market. This is educational content, not a promise of income.",
    },
    {
        q: "What format is it?",
        a: "A 46-page PDF. You get an instant download after payment on Selar. It works on a phone, tablet or laptop.",
    },
    {
        q: "What about refunds?",
        a: REFUND_TEXT,
    },
];

const H2 = "text-3xl font-extrabold tracking-tight md:text-4xl";

export function PriceSection() {
    return (
        <section className="pb-glow px-5 py-16 md:py-24">
            <div className="relative mx-auto max-w-xl">
                <span className="absolute -top-4 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#F26A1B] px-4 py-1.5 text-sm font-extrabold text-[#1A1A1F] shadow-lg">
                    Instant PDF download via Selar
                </span>
                <div className="rounded-3xl bg-white p-6 pt-10 text-center shadow-2xl md:p-10 md:pt-12">
                    <h2 className={H2}>Get the Playbook</h2>
                    <p className="mt-4 text-6xl font-extrabold text-[#D9540B]">{PRICE_LABEL}</p>
                    <p className="mt-1 text-sm font-semibold text-[#1A1A1F]/75">One payment. No subscription.</p>
                    <ul className="mx-auto mt-6 max-w-sm space-y-2 text-left text-[#1A1A1F]/90">
                        {YOU_GET.map((item) => (
                            <li key={item} className="flex gap-3">
                                <span aria-hidden="true" className="font-bold text-[#D9540B]">✓</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                    <BuyButton location="price_box" large className="mt-8 w-full shadow-lg shadow-[#D9540B]/30">
                        Get the Playbook
                    </BuyButton>
                    <p className="mt-4 text-sm text-[#1A1A1F]/75">Payment is handled securely by Selar.</p>
                </div>
            </div>
        </section>
    );
}

export function AuthorSection() {
    return (
        <section className="px-5 py-16 md:py-24">
            <div className="pb-reveal mx-auto flex max-w-3xl flex-col gap-5 rounded-3xl border border-[#1A1A1F]/10 bg-[#FFF1E6] p-6 md:flex-row md:items-center md:p-10">
                <span
                    aria-hidden="true"
                    className="grid size-16 shrink-0 place-items-center rounded-2xl bg-[#1A1A1F] text-xl font-extrabold text-[#F26A1B]"
                >
                    XN
                </span>
                <div>
                    <h2 className={H2}>About the author</h2>
                    <p className="mt-2 font-bold text-[#D9540B]">XcodeNexus: Build. Secure. Scale.</p>
                    <p className="mt-3 text-lg text-[#1A1A1F]/85">
                        I&apos;m a solo full-stack developer with a cybersecurity background. I build
                        websites and web apps for clients.
                    </p>
                    <a
                        href={PORTFOLIO_URL}
                        className="mt-4 inline-block font-bold text-[#D9540B] underline underline-offset-4 focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-[#D9540B]"
                    >
                        See my portfolio
                    </a>
                </div>
            </div>
        </section>
    );
}

export function FaqSection() {
    return (
        <section className="bg-[#FFF1E6] px-5 py-16 md:py-24">
            <div className="mx-auto max-w-3xl">
                <h2 className={`${H2} mb-8`}>Questions, answered</h2>
                <Faq items={PLAYBOOK_FAQS} />
            </div>
        </section>
    );
}

export function FinalCta() {
    return (
        <section className="pb-hero px-5 py-20 text-center md:py-28">
            <div className="mx-auto max-w-2xl">
                <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-5xl">
                    Ready to find your first client?
                </h2>
                <p className="mt-4 text-lg font-medium text-[#1A1A1F]">
                    Get the playbook and start with one path today.
                </p>
                <BuyButton location="final_cta" variant="onOrange" large className="mt-8 w-full shadow-xl shadow-black/20 sm:w-auto">
                    Get the Playbook, {PRICE_LABEL}
                </BuyButton>
            </div>
        </section>
    );
}

import Image from "next/image";
import Faq from "@/components/playbook/Faq";
import {
    HONEST_NOTE,
    NOT_FOR,
    SELL_PDF_FAQS,
    SELL_PDF_PROMISE,
    WHAT_YOU_LEARN,
    WHATS_INSIDE,
    WHO_FOR,
} from "@/content/sell-your-pdf";
import {
    SELL_PDF_COVER,
    SELL_PDF_FULL_TITLE,
    SELL_PDF_NAME,
    SELL_PDF_PAGES,
    SELL_PDF_PRICE_LABEL,
} from "@/lib/playbook-config";
import SellPdfBuyButton from "./SellPdfBuyButton";
import { SELL_PDF_HERO_ID } from "./SellPdfStickyBar";

const H2 = "text-3xl font-extrabold tracking-tight md:text-4xl";
const SECTION = "px-5 py-14 md:py-20";

function Ticks({ items, mark = "✓" }: { items: readonly string[]; mark?: string }) {
    return (
        <ul className="space-y-3 text-lg text-[#1A1A1F]/90">
            {items.map((item) => (
                <li key={item} className="flex gap-3">
                    <span aria-hidden="true" className="font-bold text-[#D9540B]">{mark}</span>
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    );
}

export function SellPdfHero() {
    return (
        <section id={SELL_PDF_HERO_ID} className="pb-hero px-5 pb-14 pt-12 md:pb-20 md:pt-20">
            <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
                <div>
                    <p className="inline-flex items-center gap-2 rounded-full bg-white/25 px-4 py-1.5 text-sm font-bold text-[#1A1A1F] ring-1 ring-white/50">
                        <span aria-hidden="true" className="size-2 rounded-full bg-[#1A1A1F]" />
                        A {SELL_PDF_PAGES}-page PDF guide
                    </p>
                    <h1 className="mt-5 text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
                        {SELL_PDF_NAME}.
                    </h1>
                    <p className="mt-3 text-lg font-bold text-[#1A1A1F]">
                        The Nigerian Creator&apos;s Guide to Making and Selling Digital Products
                    </p>
                    <p className="mt-5 max-w-xl text-lg font-medium text-[#1A1A1F] md:text-xl">
                        {SELL_PDF_PROMISE}
                    </p>
                    <p className="mt-6 text-4xl font-extrabold text-white">{SELL_PDF_PRICE_LABEL}</p>
                    <div className="mt-4 flex flex-col items-start gap-3">
                        <SellPdfBuyButton location="sellpdf_hero" variant="onOrange" large className="w-full shadow-xl shadow-black/20 sm:w-auto">
                            Get it on Selar
                        </SellPdfBuyButton>
                        <p className="text-sm font-semibold text-[#1A1A1F]">
                            Instant PDF download via Selar. Visitors outside Nigeria see the price converted at checkout.
                        </p>
                    </div>
                </div>

                <div className="mx-auto w-full max-w-[260px] md:max-w-[340px]">
                    <div className="pb-cover relative aspect-square overflow-hidden rounded-2xl bg-[#F26A1B]">
                        <Image
                            src={SELL_PDF_COVER}
                            alt={`Cover of ${SELL_PDF_FULL_TITLE}`}
                            fill
                            priority
                            sizes="(min-width: 768px) 340px, 260px"
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export function WhoItIsFor() {
    return (
        <section className={SECTION}>
            <div className="mx-auto max-w-3xl">
                <h2 className={`${H2} mb-6`}>Who it is for</h2>
                <Ticks items={WHO_FOR} />
            </div>
        </section>
    );
}

export function WhatYouWillLearn() {
    return (
        <section className={`${SECTION} bg-[#FFF1E6]`}>
            <div className="mx-auto max-w-3xl">
                <h2 className={`${H2} mb-6`}>What you will learn</h2>
                <Ticks items={WHAT_YOU_LEARN} />
            </div>
        </section>
    );
}

export function WhatsInside() {
    return (
        <section className={SECTION}>
            <div className="mx-auto max-w-3xl">
                <h2 className={`${H2} mb-6`}>What&apos;s inside</h2>
                <ul className="grid gap-x-8 gap-y-3 text-lg text-[#1A1A1F]/90 sm:grid-cols-2">
                    {WHATS_INSIDE.map((item) => (
                        <li key={item} className="flex gap-3">
                            <span aria-hidden="true" className="font-bold text-[#D9540B]">•</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export function WhoItIsNotFor() {
    return (
        <section className={`${SECTION} bg-[#FFF1E6]`}>
            <div className="mx-auto max-w-3xl">
                <h2 className={`${H2} mb-6`}>Who it is not for</h2>
                <Ticks items={NOT_FOR} mark="✕" />
            </div>
        </section>
    );
}

export function HonestNote() {
    return (
        <section className="px-5 py-10 md:py-14">
            <aside className="mx-auto max-w-3xl rounded-2xl border-l-8 border-[#F26A1B] bg-[#FFF1E6] p-6">
                <h2 className="text-lg font-extrabold">A note before you buy</h2>
                <p className="mt-2 text-[#1A1A1F]/90">{HONEST_NOTE}</p>
            </aside>
        </section>
    );
}

export function SellPdfFaq() {
    return (
        <section className={`${SECTION} bg-[#FFF1E6]`}>
            <div className="mx-auto max-w-3xl">
                <h2 className={`${H2} mb-8`}>Questions, answered</h2>
                <Faq items={SELL_PDF_FAQS} />
            </div>
        </section>
    );
}

export function SellPdfFinalCta() {
    return (
        <section className="pb-hero px-5 py-20 text-center md:py-28">
            <div className="mx-auto max-w-2xl">
                <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-5xl">
                    Ready to create and sell your own PDF product?
                </h2>
                <p className="mt-4 text-lg font-medium text-[#1A1A1F]">
                    {SELL_PDF_PRICE_LABEL}. Instant PDF download via Selar.
                </p>
                <SellPdfBuyButton location="sellpdf_final_cta" variant="onOrange" large className="mt-8 w-full shadow-xl shadow-black/20 sm:w-auto">
                    Get it on Selar
                </SellPdfBuyButton>
            </div>
        </section>
    );
}

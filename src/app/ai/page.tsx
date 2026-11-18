import PageShell from "@/components/playbook/PageShell";
import { ClosingBlock, HeroCtas } from "@/components/ai/AuthorCtas";
import StickyContactBar, { AI_HERO_ID } from "@/components/ai/StickyContactBar";
import Faq, { faqJsonLd } from "@/components/playbook/Faq";
import {
    AuthorExample,
    BestHabits,
    FullPlan,
    GoodAndBad,
    Myths,
    NextFewYears,
    SellPdfOffer,
    StartToday,
    TableOfContents,
    WhatAiIs,
    WhyNigeria,
} from "@/components/ai/AiGuide";
import {
    AI_FAQS,
    GUIDE_FULL_TITLE,
    GUIDE_SUBHEAD,
    GUIDE_TITLE,
    READING_MINUTES,
} from "@/content/ai-guide";
import { AI_GUIDE_URL, LAST_UPDATED, OG_IMAGE_AI } from "@/lib/playbook-config";
import { articleJsonLd, buildMetadata } from "@/lib/seo";

const SEO = {
    title: GUIDE_FULL_TITLE,
    description:
        "A plain-English guide to AI: what it is, what it is good and bad at, the myths to drop, and simple habits to make the most of it. About an 8-minute read.",
    path: AI_GUIDE_URL,
    image: OG_IMAGE_AI,
};

export const metadata = buildMetadata(SEO);

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [articleJsonLd(SEO, `PT${READING_MINUTES}M`), faqJsonLd(AI_FAQS)],
};

const updatedLabel = new Date(LAST_UPDATED).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
});

export default function AiGuidePage() {
    return (
        <PageShell label="AI guide" hasStickyBar showAuthorCtas jsonLd={jsonLd}>
            <header id={AI_HERO_ID} className="pb-hero pb-slant px-5 pt-14 text-white md:pt-20">
                <div className="mx-auto max-w-5xl">
                    <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#1A1A1F]">
                        The beginner&apos;s guide
                    </p>
                    <h1 className="mt-3 text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl">
                        {GUIDE_TITLE}
                    </h1>
                    <p className="mt-5 max-w-xl text-lg font-medium text-[#1A1A1F] md:text-2xl">
                        {GUIDE_SUBHEAD}
                    </p>
                    <HeroCtas />
                </div>
            </header>

            <div className="mx-auto max-w-5xl px-5">
                <p className="-mt-2 flex flex-wrap gap-x-4 gap-y-1 py-5 text-sm font-semibold text-[#1A1A1F]/75">
                    <span>
                        Last updated: <time dateTime={LAST_UPDATED}>{updatedLabel}</time>
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{READING_MINUTES} min read</span>
                </p>

                <div className="pb-10 lg:grid lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-12">
                    <TableOfContents />
                    <article className="max-w-3xl">
                        <WhatAiIs />
                        <GoodAndBad />
                        <Myths />
                        <NextFewYears />
                        <BestHabits />
                        <AuthorExample />
                        <WhyNigeria />
                        <StartToday />
                        <FullPlan />
                        <SellPdfOffer />
                        <section id="faq" className="py-12 md:py-14">
                            <h2 className="scroll-mt-6 mb-6 text-3xl font-extrabold tracking-tight md:text-4xl">
                                Questions
                            </h2>
                            <Faq items={AI_FAQS} />
                        </section>
                        <ClosingBlock />
                    </article>
                </div>
            </div>
            <StickyContactBar />
        </PageShell>
    );
}
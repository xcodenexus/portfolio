import {
    BAD_AT,
    FUTURE_NOTE,
    FUTURE_POINTS,
    GOOD_AT,
    HABITS,
    MAKES_THINGS_UP,
    MYTHS,
    NIGERIA,
    PLAYBOOK_BLURB,
    START_STEPS,
    TOC,
    WHAT_AI_IS,
    type Confidence,
} from "@/content/ai-guide";
import Image from "next/image";
import {
    PLAYBOOK_URL,
    PORTFOLIO_URL,
    PROMPT_LESSON_URL,
    SELL_PDF_COVER,
    SELL_PDF_FULL_TITLE,
    SELL_PDF_PRICE_LABEL,
    SELL_PDF_URL,
} from "@/lib/playbook-config";
import CtaLink from "@/components/playbook/CtaLink";
import SellPdfBuyButton from "@/components/sellpdf/SellPdfBuyButton";
import { TocCtas } from "./AuthorCtas";

const H2 = "scroll-mt-6 text-3xl font-extrabold tracking-tight md:text-4xl";
const EYEBROW = "mb-2 text-xs font-extrabold uppercase tracking-[0.16em] text-[#D9540B]";
const SECTION = "py-12 md:py-14";
const CARD = "pb-card rounded-2xl border border-[#EBDDD2] bg-white p-5";

function Badge({ label }: { label: Confidence }) {
    const isLikely = label === "Likely";
    return (
        <span
            className={`inline-block rounded-full px-3 py-1 text-xs font-extrabold uppercase tracking-wider ${
                isLikely ? "bg-[#1A1A1F] text-white" : "border-2 border-[#1A1A1F] text-[#1A1A1F]"
            }`}
        >
            {label}
        </span>
    );
}

/** A real example from the author's own work. */
export function AuthorExample() {
    return (
        <aside className="my-8 rounded-2xl border-l-8 border-[#F26A1B] bg-[#FFF1E6] p-6">
            <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#D9540B]">
                From my own work
            </p>
            <p className="mt-2 text-lg">
                I used AI to rebuild an outdated Wix website. I built the new site with Claude
                Code, and the job earned me about $500.
            </p>
            <p className="mt-3 text-sm font-semibold text-[#1A1A1F]/75">
                That is one real example, not a typical result or a promise. What you earn
                depends on your skills, your market and the work you put in.
            </p>
            <p className="mt-4">
                <a
                    href={PORTFOLIO_URL}
                    className="font-bold text-[#D9540B] underline underline-offset-4 focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-[#D9540B]"
                >
                    See my portfolio <span aria-hidden="true">→</span>
                </a>
            </p>
        </aside>
    );
}

export function TableOfContents() {
    const links = (
        <ol className="space-y-1 text-[15px]">
            {TOC.map((item, index) => (
                <li key={item.id}>
                    <a
                        href={`#${item.id}`}
                        className="flex gap-2 rounded-lg px-2 py-1.5 font-semibold text-[#1A1A1F]/80 hover:bg-[#FFF1E6] hover:text-[#D9540B] focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[#D9540B]"
                    >
                        <span aria-hidden="true" className="text-[#D9540B]">{index + 1}.</span>
                        {item.title}
                    </a>
                </li>
            ))}
        </ol>
    );

    return (
        <>
            <details className="group mb-8 rounded-2xl border border-[#EBDDD2] bg-[#FFF8F2] p-4 lg:hidden">
                <summary className="flex cursor-pointer list-none items-center justify-between font-bold focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-[#D9540B] [&::-webkit-details-marker]:hidden">
                    On this page
                    <span aria-hidden="true" className="text-[#D9540B] transition-transform group-open:rotate-180">▾</span>
                </summary>
                <nav aria-label="On this page" className="mt-3">{links}</nav>
            </details>

            <aside className="hidden lg:block">
                <div className="sticky top-6 space-y-4">
                    <nav aria-label="On this page" className="rounded-2xl border border-[#EBDDD2] bg-[#FFF8F2] p-4">
                        <p className="mb-2 px-2 text-xs font-extrabold uppercase tracking-[0.16em] text-[#D9540B]">On this page</p>
                        {links}
                    </nav>
                    <TocCtas />
                </div>
            </aside>
        </>
    );
}

export function WhatAiIs() {
    return (
        <section id="what-ai-is" className={SECTION}>
            <p className={EYEBROW}>The basics</p>
            <h2 className={H2}>What AI actually is</h2>
            <div className="mt-4 space-y-4 text-lg">
                {WHAT_AI_IS.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                ))}
            </div>
            <div className="mt-6 rounded-2xl bg-[#1A1A1F] p-6 text-white">
                <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#FF9B5E]">{WHAT_AI_IS.analogyTitle}</p>
                <p className="mt-2 text-lg">{WHAT_AI_IS.analogy}</p>
            </div>
        </section>
    );
}

export function GoodAndBad() {
    return (
        <section id="good-and-bad" className={SECTION}>
            <p className={EYEBROW}>Strengths and limits</p>
            <h2 className={H2}>What it&apos;s good at, and what it&apos;s bad at</h2>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
                <div className="rounded-2xl border-t-8 border-[#F26A1B] bg-[#FFF1E6] p-5">
                    <h3 className="text-xl font-bold">Good at</h3>
                    <ul className="mt-3 space-y-3">
                        {GOOD_AT.map((item) => (
                            <li key={item.title}>
                                <strong>{item.title}.</strong> {item.text}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="rounded-2xl border-t-8 border-[#1A1A1F] bg-[#F6F3EF] p-5">
                    <h3 className="text-xl font-bold">Bad at</h3>
                    <ul className="mt-3 space-y-3">
                        {BAD_AT.map((item) => (
                            <li key={item.title}>
                                <strong>{item.title}.</strong> {item.text}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <p className="mt-6 rounded-2xl border-l-8 border-[#D9540B] bg-white p-5 text-lg font-bold shadow-sm">
                {MAKES_THINGS_UP}
            </p>
        </section>
    );
}

export function Myths() {
    return (
        <section id="myths" className={SECTION}>
            <p className={EYEBROW}>Straight answers</p>
            <h2 className={H2}>Myths worth dropping</h2>
            <dl className="mt-6 space-y-4">
                {MYTHS.map((item) => (
                    <div key={item.myth} className={CARD}>
                        <dt className="text-lg font-extrabold">
                            <span className="mr-2 text-xs uppercase tracking-widest text-[#D9540B]">Myth</span>
                            {item.myth}
                        </dt>
                        <dd className="mt-2 text-[#1A1A1F]/85">
                            <strong className="text-[#D9540B]">Truth: </strong>
                            {item.answer}
                        </dd>
                    </div>
                ))}
            </dl>
        </section>
    );
}

export function NextFewYears() {
    return (
        <section id="next-few-years" className={SECTION}>
            <p className={EYEBROW}>Looking ahead</p>
            <h2 className={H2}>What&apos;s likely in the next few years</h2>
            <p className="mt-3 text-lg text-[#1A1A1F]/85">{FUTURE_NOTE}</p>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                {FUTURE_POINTS.map((point) => (
                    <li key={point.title} className={CARD}>
                        <Badge label={point.label} />
                        <h3 className="mt-3 text-lg font-bold">{point.title}</h3>
                        <p className="mt-1 text-[#1A1A1F]/85">{point.text}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export function BestHabits() {
    return (
        <section id="best-habits" className={SECTION}>
            <p className={EYEBROW}>Four habits</p>
            <h2 className={H2}>How to make the best of it</h2>
            <ol className="mt-6 grid gap-4 sm:grid-cols-2">
                {HABITS.map((habit, index) => (
                    <li key={habit.title} className={`${CARD} relative overflow-hidden`}>
                        <span aria-hidden="true" className="pb-letter">{index + 1}</span>
                        <h3 className="relative text-lg font-bold">{habit.title}</h3>
                        <p className="relative mt-1 text-[#1A1A1F]/85">{habit.text}</p>
                    </li>
                ))}
            </ol>
        </section>
    );
}

export function WhyNigeria() {
    return (
        <section id="nigeria" className={SECTION}>
            <p className={EYEBROW}>Closer to home</p>
            <h2 className={H2}>Why this matters in Nigeria</h2>
            <p className="mt-3 text-lg">{NIGERIA.intro}</p>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
                <div>
                    <h3 className="text-xl font-bold">What helps</h3>
                    <ul className="mt-3 space-y-3">
                        {NIGERIA.opportunities.map((item) => (
                            <li key={item.title} className="rounded-2xl bg-[#FFF1E6] p-4">
                                <strong>{item.title}.</strong> {item.text}
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-bold">What gets in the way</h3>
                    <ul className="mt-3 space-y-3">
                        {NIGERIA.obstacles.map((item) => (
                            <li key={item.title} className="rounded-2xl bg-[#F6F3EF] p-4">
                                <strong>{item.title}.</strong> {item.text}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

export function StartToday() {
    return (
        <section id="start-today" className={SECTION}>
            <p className={EYEBROW}>Do something small</p>
            <h2 className={H2}>Start today: 3 free steps</h2>
            <ol className="mt-6 space-y-4">
                {START_STEPS.map((step, index) => (
                    <li key={step.title} className="flex gap-4">
                        <span aria-hidden="true" className="grid size-10 shrink-0 place-items-center rounded-full bg-[#F26A1B] font-extrabold text-[#1A1A1F]">
                            {index + 1}
                        </span>
                        <div>
                            <h3 className="text-lg font-bold">{step.title}</h3>
                            <p className="text-[#1A1A1F]/85">{step.text}</p>
                        </div>
                    </li>
                ))}
            </ol>
            <CtaLink href={PROMPT_LESSON_URL} location="ai_guide_free_lesson" large className="mt-8 w-full sm:w-auto">
                Take the free prompt lesson
            </CtaLink>
        </section>
    );
}

export function FullPlan() {
    return (
        <section id="full-plan" className={SECTION}>
            <div className="pb-hero rounded-3xl p-7 md:p-10">
                <h2 className="scroll-mt-6 text-3xl font-extrabold tracking-tight text-white md:text-4xl">Want the full plan?</h2>
                <p className="mt-4 text-lg font-medium text-[#1A1A1F]">{PLAYBOOK_BLURB.text}</p>
                <p className="mt-3 font-semibold text-[#1A1A1F]">{PLAYBOOK_BLURB.forYou}</p>
                <p className="mt-1 font-semibold text-[#1A1A1F]">{PLAYBOOK_BLURB.notForYou}</p>
                <CtaLink href={PLAYBOOK_URL} location="ai_guide_playbook" variant="onOrange" large className="mt-6 w-full sm:w-auto">
                    See the Playbook
                </CtaLink>
            </div>
        </section>
    );
}

/** A separate book from the Playbook, shown as its own card under "Want the full plan?". */
export function SellPdfOffer() {
    return (
        <section id="sell-your-pdf" className="pb-12 md:pb-14">
            <div className="flex flex-col gap-6 rounded-3xl border border-[#1A1A1F]/10 bg-[#FFF1E6] p-6 sm:flex-row sm:items-center md:p-8">
                <Image
                    src={SELL_PDF_COVER}
                    alt={`Cover of ${SELL_PDF_FULL_TITLE}`}
                    width={800}
                    height={800}
                    sizes="(min-width: 640px) 176px, 160px"
                    className="size-40 shrink-0 rounded-2xl sm:size-44"
                />
                <div>
                    <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">Sell Your PDF</h2>
                    <p className="mt-3 text-lg text-[#1A1A1F]/90">
                        Ready to create and sell your own PDF product? A 51-page guide for Nigerian
                        creators, from picking a niche to a 30-day launch plan.
                    </p>
                    <p className="mt-3 text-2xl font-extrabold text-[#D9540B]">{SELL_PDF_PRICE_LABEL}</p>
                    <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
                        <SellPdfBuyButton location="ai_guide_sellpdf" className="w-full sm:w-auto">
                            Get it on Selar
                        </SellPdfBuyButton>
                        <a
                            href={SELL_PDF_URL}
                            className="text-center font-bold text-[#D9540B] underline underline-offset-4 focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-[#D9540B]"
                        >
                            Read more
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
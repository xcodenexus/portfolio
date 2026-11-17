import Image from "next/image";
import {
    AI_GUIDE_URL,
    PAGE_RATIO,
    PREVIEW_IMAGES,
    PROMPT_LESSON_URL,
} from "@/lib/playbook-config";
import CtaLink from "./CtaLink";

const PATHS = [
    { id: "A", title: "AI-assisted freelancing", promise: "Use AI to deliver writing, design or admin work faster, and pitch it with confidence." },
    { id: "B", title: "AI chatbots for small businesses", promise: "Set up a simple chatbot that answers customer questions, then offer it as a service." },
    { id: "C", title: "AI-built websites for local businesses", promise: "Build a clean one-page site for a local business and show it to the owner." },
    { id: "D", title: "AI digital products", promise: "Create and package a small digital product that people can download." },
    { id: "E", title: "Faceless content and affiliate income", promise: "Make content without showing your face, and learn how affiliate links work." },
];

const EXTRAS = [
    "12 copy-ready prompts",
    "Outreach scripts",
    "Nigeria payout guide (Payoneer, Grey, local payments)",
    "A scam-safety chapter",
    "A 30-day plan",
];

const MISSING = [
    { n: "1", label: "An offer", note: "Something clear that a person can say yes to." },
    { n: "2", label: "Proof", note: "A small piece of work that shows you can deliver." },
    { n: "3", label: "A first client", note: "A real person who pays you for it." },
];

const FOR_YOU = [
    "You are a beginner who wants clear, practical steps.",
    "You have a phone or laptop and an internet connection.",
    "You are ready to put in the hours, even small ones each day.",
    "You are comfortable messaging business owners to offer your help.",
];

const NOT_FOR_YOU = [
    "You want money overnight. This is not a get-rich-quick scheme.",
    "You want a guaranteed income. No one can promise that, and we don't.",
    "You are not willing to reach out to people or do the work.",
    "You want an advanced coding course.",
];

const H2 = "text-3xl font-extrabold tracking-tight md:text-4xl";
const CONTAINER = "mx-auto w-full max-w-5xl";
const EYEBROW = "text-sm font-bold uppercase tracking-[0.18em] text-[#D9540B]";

export function ProblemSection() {
    return (
        <section className="pb-dark px-5 py-16 text-white md:py-24">
            <div className={CONTAINER}>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#F26A1B]">The honest problem</p>
                <h2 className={`${H2} mt-3 max-w-2xl`}>Tools are not your problem.</h2>
                <div className="mt-6 max-w-2xl space-y-4 text-lg text-white/85">
                    <p>Most &quot;make money with AI&quot; guides give you a list of tools.</p>
                    <p>
                        But beginners don&apos;t fail for lack of tools. They fail for lack of an
                        offer, proof and a first client.
                    </p>
                </div>

                <ol className="mt-10 grid gap-4 md:grid-cols-3">
                    {MISSING.map((item) => (
                        <li key={item.n} className="pb-reveal rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                            <span className="grid size-10 place-items-center rounded-full bg-[#F26A1B] font-extrabold text-[#1A1A1F]">
                                {item.n}
                            </span>
                            <p className="mt-4 text-xl font-bold">{item.label}</p>
                            <p className="mt-1 text-white/75">{item.note}</p>
                        </li>
                    ))}
                </ol>
                <p className="mt-8 max-w-2xl text-lg text-white/85">
                    This playbook starts there. You get a clear offer to sell, a way to build
                    proof of your work, and scripts to reach your first client.
                </p>
            </div>
        </section>
    );
}

export function InsideSection() {
    return (
        <section className="bg-[#FFF1E6] px-5 py-16 md:py-24">
            <div className={CONTAINER}>
                <p className={EYEBROW}>What&apos;s inside</p>
                <h2 className={`${H2} mt-3`}>Five paths. Pick the one that fits you.</h2>

                <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {PATHS.map((path) => (
                        <li key={path.id} className="pb-card pb-reveal relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm">
                            <span aria-hidden="true" className="pb-letter">{path.id}</span>
                            <p className={EYEBROW}>Path {path.id}</p>
                            <h3 className="mt-2 text-xl font-bold">{path.title}</h3>
                            <p className="mt-2 text-[#1A1A1F]/85">{path.promise}</p>
                        </li>
                    ))}
                    <li className="pb-reveal flex items-center rounded-2xl bg-[#F26A1B] p-6 text-[#1A1A1F]">
                        <p className="text-xl font-extrabold leading-snug">
                            Start with one path, not all five.
                        </p>
                    </li>
                </ul>

                <h3 className="mt-14 text-xl font-bold">Plus these extras</h3>
                <ul className="mt-4 flex flex-wrap gap-3">
                    {EXTRAS.map((extra) => (
                        <li
                            key={extra}
                            className="flex items-center gap-2 rounded-full border-2 border-[#D9540B] bg-white px-4 py-2 font-semibold"
                        >
                            <span aria-hidden="true" className="size-2 rounded-full bg-[#F26A1B]" />
                            {extra}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export function PreviewSection() {
    return (
        <section className="px-5 py-16 md:py-24">
            <div className={CONTAINER}>
                <p className={EYEBROW}>A look inside</p>
                <h2 className={`${H2} mt-3`}>Real pages from the book</h2>
                <p className="mt-3 text-lg text-[#1A1A1F]/85">Swipe to see them.</p>
            </div>
            <div
                role="region"
                aria-label="Sample pages from the ebook"
                tabIndex={0}
                className={`${CONTAINER} mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto px-1 pb-6 focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-[#D9540B]`}
            >
                {PREVIEW_IMAGES.map((image) => (
                    <figure key={image.src} className="w-56 shrink-0 snap-center md:w-64">
                        <div
                            className="pb-card relative overflow-hidden rounded-xl border border-[#1A1A1F]/10 bg-[#FFF1E6] shadow-lg"
                            style={{ aspectRatio: PAGE_RATIO }}
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                loading="lazy"
                                sizes="(min-width: 768px) 256px, 224px"
                                className="object-cover"
                            />
                        </div>
                        <figcaption className="mt-3 text-center text-sm font-bold text-[#D9540B]">
                            {image.label}
                        </figcaption>
                    </figure>
                ))}
            </div>
        </section>
    );
}

export function AudienceSection() {
    return (
        <section className="bg-[#FFF1E6] px-5 py-16 md:py-24">
            <div className={CONTAINER}>
                <p className={EYEBROW}>Be honest with yourself</p>
                <h2 className={`${H2} mt-3`}>Is this for you?</h2>
                <div className="mt-10 grid gap-5 md:grid-cols-2">
                    <div className="pb-reveal rounded-2xl border-t-8 border-[#F26A1B] bg-white p-6 shadow-sm">
                        <h3 className="text-xl font-bold">This is for you if...</h3>
                        <ul className="mt-4 space-y-3 text-[#1A1A1F]/90">
                            {FOR_YOU.map((item) => (
                                <li key={item} className="flex gap-3">
                                    <span aria-hidden="true" className="font-bold text-[#D9540B]">✓</span>
                                    <span><span className="sr-only">Yes: </span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="pb-reveal rounded-2xl border-t-8 border-[#1A1A1F] bg-white p-6 shadow-sm">
                        <h3 className="text-xl font-bold">This is NOT for you if...</h3>
                        <ul className="mt-4 space-y-3 text-[#1A1A1F]/90">
                            {NOT_FOR_YOU.map((item) => (
                                <li key={item} className="flex gap-3">
                                    <span aria-hidden="true" className="font-bold">✕</span>
                                    <span><span className="sr-only">No: </span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <p className="mt-6 font-semibold">
                    Results depend on your effort, your skills and your market. There are no income promises.
                </p>
            </div>
        </section>
    );
}

export function FreeLessonSection() {
    return (
        <section className="px-5 py-16 md:py-24">
            <div className="pb-reveal mx-auto max-w-5xl overflow-hidden rounded-3xl bg-[#1A1A1F] p-8 text-white md:p-12">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#F26A1B]">Not sure yet?</p>
                <h2 className={`${H2} mt-3 max-w-xl`}>Start with the free prompt lesson.</h2>
                <p className="mt-4 max-w-xl text-lg text-white/85">
                    Learn the R-C-T-F method and try the prompt builder. It takes about 10
                    minutes, and there is nothing to sign up for.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                    <CtaLink href={PROMPT_LESSON_URL} location="playbook_free_lesson" variant="onDark" large>
                        Take the free lesson
                    </CtaLink>
                    <CtaLink
                        href={AI_GUIDE_URL}
                        location="playbook_ai_guide"
                        variant="ghost"
                        className="!border-white/60 !text-white hover:!bg-white/10"
                    >
                        New to AI? Read the beginner&apos;s guide
                    </CtaLink>
                </div>
            </div>
        </section>
    );
}

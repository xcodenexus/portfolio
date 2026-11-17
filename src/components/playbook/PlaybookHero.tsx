import Image from "next/image";
import { COVER_IMAGE, PAGE_RATIO, PRICE_LABEL, PROMPT_LESSON_URL } from "@/lib/playbook-config";
import BuyButton from "./BuyButton";
import CtaLink from "./CtaLink";
import { HERO_ID } from "./StickyBuyBar";

const TICKER = [
    "46 pages",
    "5 paths to a first client",
    "12 copy-ready prompts",
    "Outreach scripts",
    "Nigeria payout guide",
    "Scam-safety chapter",
    "30-day plan",
];

function TickerRow({ hidden = false }: { hidden?: boolean }) {
    return (
        <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
            {TICKER.map((item) => (
                <li key={item} className="flex items-center whitespace-nowrap px-5 text-sm font-bold uppercase tracking-widest text-white">
                    {item}
                    <span aria-hidden="true" className="ml-10 text-[#F26A1B]">✦</span>
                </li>
            ))}
        </ul>
    );
}

export default function PlaybookHero() {
    return (
        <>
            <section id={HERO_ID} className="pb-hero px-5 pb-14 pt-12 md:pb-20 md:pt-20">
                <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
                    <div>
                        <p className="inline-flex items-center gap-2 rounded-full bg-white/25 px-4 py-1.5 text-sm font-bold text-[#1A1A1F] ring-1 ring-white/50">
                            <span aria-hidden="true" className="size-2 rounded-full bg-[#1A1A1F]" />
                            A 46-page PDF guide
                        </p>
                        <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
                            Turn AI into your first{" "}
                            <span className="underline decoration-[#1A1A1F] decoration-[6px] underline-offset-[10px] [text-decoration-skip-ink:none]">
                                paying client.
                            </span>
                        </h1>
                        <p className="mt-6 max-w-xl text-lg font-medium text-[#1A1A1F] md:text-xl">
                            Five proven paths, with the prompts, scripts and checklists to do it.
                        </p>
                        <div className="mt-8 flex flex-col items-start gap-4">
                            <BuyButton location="hero" variant="onOrange" large className="w-full shadow-xl shadow-black/20 sm:w-auto">
                                Get the Playbook, {PRICE_LABEL}
                            </BuyButton>
                            <CtaLink
                                href={PROMPT_LESSON_URL}
                                location="hero_free_lesson"
                                variant="ghost"
                                className="!border-[#1A1A1F] !text-[#1A1A1F] hover:!bg-white/30"
                            >
                                Try the free prompt lesson first
                            </CtaLink>
                            <p className="text-sm font-semibold text-[#1A1A1F]">Instant PDF download via Selar</p>
                        </div>
                    </div>

                    <div className="mx-auto w-full max-w-[250px] md:max-w-[320px]">
                        <div
                            className="pb-cover relative overflow-hidden rounded-2xl bg-[#FFF1E6]"
                            style={{ aspectRatio: PAGE_RATIO }}
                        >
                            <Image
                                src={COVER_IMAGE}
                                alt="Cover of The AI Side Hustle Playbook"
                                fill
                                priority
                                sizes="(min-width: 768px) 320px, 250px"
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <div className="overflow-hidden bg-[#1A1A1F] py-4" role="presentation">
                <div className="pb-marquee">
                    <TickerRow />
                    <TickerRow hidden />
                </div>
            </div>
        </>
    );
}

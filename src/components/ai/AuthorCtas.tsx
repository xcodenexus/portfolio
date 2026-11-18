import Image from "next/image";
import {
    CONTACT_URL,
    PORTFOLIO_URL,
    SELL_PDF_COVER,
    SELL_PDF_PRICE_LABEL,
    SELL_PDF_URL,
    WHATSAPP_AI_URL,
} from "@/lib/playbook-config";
import CtaLink from "@/components/playbook/CtaLink";
import SellPdfBuyButton from "@/components/sellpdf/SellPdfBuyButton";

/** Orange card beside the table of contents (desktop), under the "Work with me" card. */
export function SellPdfSideCard() {
    return (
        <div className="pb-hero hidden rounded-2xl p-4 text-[#1A1A1F] lg:block">
            <div className="flex items-center gap-3">
                <Image
                    src={SELL_PDF_COVER}
                    alt="Cover of Sell Your PDF"
                    width={56}
                    height={56}
                    className="size-14 shrink-0 rounded-lg ring-2 ring-white/70"
                />
                <div>
                    <p className="text-xs font-extrabold uppercase tracking-[0.16em]">New ebook</p>
                    <p className="text-lg font-extrabold leading-tight text-white">Start selling PDFs</p>
                </div>
            </div>
            <SellPdfBuyButton location="ai_side_sellpdf" variant="onOrange" compact className="mt-3 w-full">
                Get it on Selar, {SELL_PDF_PRICE_LABEL}
            </SellPdfBuyButton>
            <a
                href={SELL_PDF_URL}
                className="mt-2 block text-center text-sm font-bold underline underline-offset-4 focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-[#1A1A1F]"
            >
                Read more
            </a>
        </div>
    );
}

/** Slim orange strip under the hero for phones and tablets, where the sidebar is hidden. */
export function SellPdfStrip() {
    return (
        <div className="pb-hero mb-2 flex items-center gap-3 rounded-2xl p-3 text-[#1A1A1F] lg:hidden">
            <Image
                src={SELL_PDF_COVER}
                alt="Cover of Sell Your PDF"
                width={56}
                height={56}
                className="size-14 shrink-0 rounded-lg ring-2 ring-white/70"
            />
            <div className="min-w-0 flex-1">
                <p className="font-extrabold leading-tight text-white">Start selling PDFs</p>
                <a
                    href={SELL_PDF_URL}
                    className="text-sm font-bold underline underline-offset-4 focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-[#1A1A1F]"
                >
                    Read more
                </a>
            </div>
            <SellPdfBuyButton location="ai_strip_sellpdf" variant="onOrange" compact className="shrink-0">
                Get it, {SELL_PDF_PRICE_LABEL}
            </SellPdfBuyButton>
        </div>
    );
}

/** Two buttons under the hero headline: the portfolio and the contact form. */
export function HeroCtas() {
    return (
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CtaLink href={PORTFOLIO_URL} location="ai_hero_portfolio" variant="onOrange" large className="w-full sm:w-auto">
                Visit my portfolio <span aria-hidden="true" className="ml-2">→</span>
            </CtaLink>
            <CtaLink href={CONTACT_URL} location="ai_hero_contact" variant="light" large className="w-full sm:w-auto">
                Contact me
            </CtaLink>
            <CtaLink
                href={SELL_PDF_URL}
                location="ai_hero_sellpdf"
                variant="ghost"
                large
                className="w-full !border-[#1A1A1F] !text-[#1A1A1F] hover:!bg-white/30 sm:w-auto"
            >
                Sell PDFs <span aria-hidden="true" className="ml-2">→</span>
            </CtaLink>
        </div>
    );
}

/** Small card that stays in view beside the table of contents on desktop. */
export function TocCtas() {
    return (
        <div className="hidden rounded-2xl bg-[#1A1A1F] p-4 text-white [@media(min-height:800px)]:block">
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#FF9B5E]">Work with me</p>
            <p className="mt-2 text-sm text-white/80">
                Full-stack developer. Websites, web apps and security checks.
            </p>
            <div className="mt-4 flex flex-col gap-2">
                <CtaLink href={PORTFOLIO_URL} location="ai_toc_portfolio" variant="onDark" compact className="w-full">
                    Visit my portfolio
                </CtaLink>
                <CtaLink href={CONTACT_URL} location="ai_toc_contact" variant="light" compact className="w-full">
                    Contact me
                </CtaLink>
            </div>
        </div>
    );
}

/** Dark block at the end of the guide, for readers who reached the bottom. */
export function ClosingBlock() {
    return (
        <section id="work-with-me" className="py-12 md:py-14">
            <div className="pb-dark rounded-3xl p-7 text-white md:p-10">
                <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#FF9B5E]">Work with me</p>
                <h2 className="mt-3 scroll-mt-6 text-3xl font-extrabold tracking-tight md:text-4xl">
                    Need a website, web app or security check?
                </h2>
                <p className="mt-4 max-w-xl text-lg text-white/85">
                    I&apos;m Olakanla, a full-stack developer. See my work, or tell me the idea and
                    I&apos;ll send you a scope and a quote.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <CtaLink href={PORTFOLIO_URL} location="ai_closing_portfolio" variant="onDark" large className="w-full sm:w-auto">
                        Visit my portfolio <span aria-hidden="true" className="ml-2">→</span>
                    </CtaLink>
                    <CtaLink href={CONTACT_URL} location="ai_closing_contact" variant="light" large className="w-full sm:w-auto">
                        Contact me
                    </CtaLink>
                    <CtaLink
                        href={WHATSAPP_AI_URL}
                        location="ai_closing_whatsapp"
                        variant="ghost"
                        large
                        newTab
                        className="w-full !border-white/60 !text-white hover:!bg-white/10 sm:w-auto"
                    >
                        WhatsApp me
                    </CtaLink>
                </div>
            </div>
        </section>
    );
}

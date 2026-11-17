import type { Metadata } from "next";
import PageShell from "@/components/playbook/PageShell";
import PlaybookHero from "@/components/playbook/PlaybookHero";
import StickyBuyBar from "@/components/playbook/StickyBuyBar";
import { faqJsonLd } from "@/components/playbook/Faq";
import {
    AudienceSection,
    FreeLessonSection,
    InsideSection,
    PreviewSection,
    ProblemSection,
} from "@/components/playbook/ContentSections";
import {
    AuthorSection,
    FaqSection,
    FinalCta,
    PLAYBOOK_FAQS,
    PriceSection,
} from "@/components/playbook/CommerceSections";
import {
    BRAND_NAME,
    OG_IMAGE_PLAYBOOK,
    PLAYBOOK_URL,
    PORTFOLIO_URL,
    PRICE_AMOUNT,
    PRICE_CURRENCY,
    PRICE_LABEL,
    PRODUCT_NAME,
    SELAR_URL,
    pageUrl,
} from "@/lib/playbook-config";

const TITLE = `${PRODUCT_NAME}: a 46-page guide to your first AI client`;
const DESCRIPTION =
    "Five paths to your first paying client using AI, with prompts, outreach scripts and a 30-day plan. 46-page PDF, instant download. " +
    PRICE_LABEL +
    ".";
const CANONICAL = pageUrl(PLAYBOOK_URL);

export const metadata: Metadata = {
    metadataBase: new URL(PORTFOLIO_URL),
    title: { absolute: TITLE },
    description: DESCRIPTION,
    alternates: { canonical: CANONICAL },
    openGraph: {
        type: "website",
        url: CANONICAL,
        title: TITLE,
        description: DESCRIPTION,
        siteName: BRAND_NAME,
        images: [{ url: OG_IMAGE_PLAYBOOK, width: 1200, height: 630, alt: PRODUCT_NAME }],
    },
    twitter: {
        card: "summary_large_image",
        title: TITLE,
        description: DESCRIPTION,
        images: [OG_IMAGE_PLAYBOOK],
    },
};

// Product + FAQ structured data. No ratings or reviews on purpose.
const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Product",
            name: PRODUCT_NAME,
            description: DESCRIPTION,
            image: pageUrl(OG_IMAGE_PLAYBOOK),
            brand: { "@type": "Brand", name: BRAND_NAME },
            offers: {
                "@type": "Offer",
                url: SELAR_URL,
                price: PRICE_AMOUNT,
                priceCurrency: PRICE_CURRENCY,
                availability: "https://schema.org/InStock",
            },
        },
        faqJsonLd(PLAYBOOK_FAQS),
    ],
};

export default function AiSideHustlePlaybookPage() {
    return (
        <PageShell label="The AI Side Hustle Playbook" hasStickyBar jsonLd={jsonLd}>
            <PlaybookHero />
            <ProblemSection />
            <InsideSection />
            <PreviewSection />
            <AudienceSection />
            <FreeLessonSection />
            <PriceSection />
            <AuthorSection />
            <FaqSection />
            <FinalCta />
            <StickyBuyBar />
        </PageShell>
    );
}

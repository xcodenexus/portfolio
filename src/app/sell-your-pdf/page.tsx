import type { Metadata } from "next";
import PageShell from "@/components/playbook/PageShell";
import { faqJsonLd } from "@/components/playbook/Faq";
import SellPdfStickyBar from "@/components/sellpdf/SellPdfStickyBar";
import {
    HonestNote,
    SellPdfFaq,
    SellPdfFinalCta,
    SellPdfHero,
    WhatYouWillLearn,
    WhatsInside,
    WhoItIsFor,
    WhoItIsNotFor,
} from "@/components/sellpdf/SellPdfSections";
import { SELL_PDF_FAQS } from "@/content/sell-your-pdf";
import {
    BRAND_NAME,
    PORTFOLIO_URL,
    SELL_PDF_COVER,
    SELL_PDF_FULL_TITLE,
    SELL_PDF_NAME,
    SELL_PDF_OG_IMAGE,
    SELL_PDF_PAGES,
    SELL_PDF_PRICE_AMOUNT,
    SELL_PDF_PRICE_LABEL,
    SELL_PDF_SELAR_URL,
    SELL_PDF_URL,
    pageUrl,
} from "@/lib/playbook-config";

const TITLE = `${SELL_PDF_NAME}: a ${SELL_PDF_PAGES}-page guide to selling digital products in Nigeria`;
const DESCRIPTION = `Pick a niche, build a PDF with AI and sell it on Selar, Gumroad or Stan Store. A ${SELL_PDF_PAGES}-page guide for Nigerian creators. ${SELL_PDF_PRICE_LABEL}, instant download.`;
const CANONICAL = pageUrl(SELL_PDF_URL);

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
        images: [{ url: SELL_PDF_OG_IMAGE, width: 1200, height: 630, alt: SELL_PDF_FULL_TITLE }],
    },
    twitter: {
        card: "summary_large_image",
        title: TITLE,
        description: DESCRIPTION,
        images: [SELL_PDF_OG_IMAGE],
    },
};

// Product + FAQ structured data. No ratings or reviews on purpose.
const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Product",
            name: SELL_PDF_FULL_TITLE,
            description: DESCRIPTION,
            image: pageUrl(SELL_PDF_COVER),
            brand: { "@type": "Brand", name: BRAND_NAME },
            offers: {
                "@type": "Offer",
                url: SELL_PDF_SELAR_URL,
                price: SELL_PDF_PRICE_AMOUNT,
                priceCurrency: "NGN",
                availability: "https://schema.org/InStock",
            },
        },
        faqJsonLd(SELL_PDF_FAQS),
    ],
};

export default function SellYourPdfPage() {
    return (
        <PageShell label="Sell Your PDF" hasStickyBar jsonLd={jsonLd}>
            <SellPdfHero />
            <WhoItIsFor />
            <WhatYouWillLearn />
            <WhatsInside />
            <WhoItIsNotFor />
            <HonestNote />
            <SellPdfFaq />
            <SellPdfFinalCta />
            <SellPdfStickyBar />
        </PageShell>
    );
}

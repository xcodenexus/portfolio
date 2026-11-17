import type { Metadata } from "next";
import {
    BRAND_NAME,
    DATE_PUBLISHED,
    LAST_UPDATED,
    PORTFOLIO_URL,
    pageUrl,
} from "@/lib/playbook-config";

interface SeoInput {
    title: string;
    description: string;
    path: string;
    image: string;
}

/** Title, description, canonical, Open Graph and Twitter tags for an article-style page. */
export function buildMetadata({ title, description, path, image }: SeoInput): Metadata {
    const canonical = pageUrl(path);
    return {
        metadataBase: new URL(PORTFOLIO_URL),
        title: { absolute: title },
        description,
        alternates: { canonical },
        openGraph: {
            type: "article",
            url: canonical,
            title,
            description,
            siteName: BRAND_NAME,
            publishedTime: DATE_PUBLISHED,
            modifiedTime: LAST_UPDATED,
            images: [{ url: image, width: 1200, height: 630, alt: title }],
        },
        twitter: { card: "summary_large_image", title, description, images: [image] },
    };
}

/** schema.org Article. No ratings or reviews on purpose. */
export function articleJsonLd({ title, description, path, image }: SeoInput, timeRequired?: string) {
    const author = { "@type": "Organization", name: BRAND_NAME, url: PORTFOLIO_URL };
    return {
        "@type": "Article",
        headline: title,
        description,
        image: pageUrl(image),
        author,
        publisher: author,
        datePublished: DATE_PUBLISHED,
        dateModified: LAST_UPDATED,
        mainEntityOfPage: pageUrl(path),
        inLanguage: "en",
        ...(timeRequired ? { timeRequired } : {}),
    };
}
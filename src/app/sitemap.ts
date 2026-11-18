import type { MetadataRoute } from "next";
import {
    AI_GUIDE_URL,
    LAST_UPDATED,
    PLAYBOOK_URL,
    PROMPT_LESSON_URL,
    SELL_PDF_URL,
    pageUrl,
} from "@/lib/playbook-config";

const EXISTING_PATHS = ["/", "/about"];
const NEW_PATHS = [AI_GUIDE_URL, PROMPT_LESSON_URL, PLAYBOOK_URL, SELL_PDF_URL];

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        ...EXISTING_PATHS.map((path) => ({ url: pageUrl(path === "/" ? "" : path) })),
        ...NEW_PATHS.map((path) => ({ url: pageUrl(path), lastModified: LAST_UPDATED })),
    ];
}
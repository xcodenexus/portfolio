import type { MetadataRoute } from "next";
import { pageUrl } from "@/lib/playbook-config";

/** Allow all crawlers and point them at the sitemap (served from /sitemap.xml). */
export default function robots(): MetadataRoute.Robots {
    return {
        rules: { userAgent: "*", allow: "/" },
        sitemap: pageUrl("/sitemap.xml"),
    };
}
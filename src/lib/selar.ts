"use client";

import { useMemo, useSyncExternalStore } from "react";
import { SELAR_URL } from "@/lib/playbook-config";

/** Returns only the utm_* params from a query string, as a plain object. */
export function readUtm(search: string): Record<string, string> {
    const params = new URLSearchParams(search);
    const utm: Record<string, string> = {};
    params.forEach((value, key) => {
        if (key.startsWith("utm_") && value) utm[key] = value;
    });
    return utm;
}

/**
 * Appends the visitor's utm_* params to a URL (absolute or site-relative)
 * without touching its other params. Relative URLs stay relative.
 */
export function withUtm(target: string, search: string): string {
    const isRelative = target.startsWith("/");
    const url = new URL(target, "https://placeholder.invalid");
    for (const [key, value] of Object.entries(readUtm(search))) {
        url.searchParams.set(key, value);
    }
    return isRelative ? `${url.pathname}${url.search}${url.hash}` : url.toString();
}

const subscribe = () => () => {};
const getSearch = () => window.location.search;
const getServerSearch = () => "";

/** Link to `target` carrying the visitor's utm_* params. Server render = plain link. */
export function useHrefWithUtm(target: string): string {
    const search = useSyncExternalStore(subscribe, getSearch, getServerSearch);
    return useMemo(() => withUtm(target, search), [target, search]);
}

export function useSelarHref(): string {
    return useHrefWithUtm(SELAR_URL);
}

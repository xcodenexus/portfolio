/**
 * Shared scroll-reveal settings.
 *
 * The positive bottom margin starts each animation ~200px BEFORE the element
 * scrolls into view, so content is already visible by the time you reach it
 * instead of leaving blank gaps while it fades in.
 */
export const REVEAL_VIEWPORT = { once: true, margin: "0px 0px 200px 0px" } as const;

/**
 * Client testimonials.
 *
 * Only entries with `approved: true` AND a non-empty quote are shown on the
 * homepage. If none qualify, the whole section is hidden (nothing is rendered).
 * Clients asked not to be named, so `label` is the only attribution.
 *
 * To publish an entry: paste the quote text into `quote`, then set
 * `approved` to true.
 */
export interface Testimonial {
    quote: string;
    label: string;
    approved: boolean;
}

export const TESTIMONIALS: readonly Testimonial[] = [
    {
        approved: true,
        label: "Website client",
        quote: "He delivered much faster than I expected, did exactly what he said he would, and suggested a better approach than the one I had in mind.",
    },
    {
        approved: true,
        label: "Security audit client",
        quote: "I noticed someone trying to get unauthorised access to my website, and he secured it quickly.",
    },
    {
        // Hidden until you fill in the quote and flip `approved` to true.
        approved: false,
        label: "Website revamp client",
        quote: "",
    },
];

export function getApprovedTestimonials(): Testimonial[] {
    return TESTIMONIALS.filter((item) => item.approved && item.quote.trim() !== "");
}

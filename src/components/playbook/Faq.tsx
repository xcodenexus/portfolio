export interface FaqItem {
    q: string;
    a: string;
}

/** Accessible accordion built on native <details>/<summary>. No JavaScript. */
export default function Faq({ items }: { items: readonly FaqItem[] }) {
    return (
        <div className="space-y-3">
            {items.map((item) => (
                <details key={item.q} className="group rounded-2xl border border-[#1A1A1F]/10 bg-white p-5 shadow-sm open:border-[#F26A1B]">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold text-[#1A1A1F] focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-[#D9540B] [&::-webkit-details-marker]:hidden">
                        {item.q}
                        <span
                            aria-hidden="true"
                            className="grid size-8 shrink-0 place-items-center rounded-full bg-[#FFF1E6] text-xl text-[#D9540B] transition-transform group-open:rotate-45"
                        >
                            +
                        </span>
                    </summary>
                    <p className="mt-3 text-[#1A1A1F]/85">{item.a}</p>
                </details>
            ))}
        </div>
    );
}

export function faqJsonLd(items: readonly FaqItem[]) {
    return {
        "@type": "FAQPage",
        mainEntity: items.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
    };
}

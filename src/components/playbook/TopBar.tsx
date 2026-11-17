import { AI_GUIDE_URL, PLAYBOOK_URL, PROMPT_LESSON_URL } from "@/lib/playbook-config";

const LINKS = [
    { label: "AI guide", href: AI_GUIDE_URL },
    { label: "Free lesson", href: PROMPT_LESSON_URL },
    { label: "Playbook", href: PLAYBOOK_URL },
];

const FOCUS = "focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-white";

export default function TopBar({ label }: { label: string }) {
    return (
        <header className="bg-[#1A1A1F] text-white">
            <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3 sm:gap-4 sm:px-5">
                <a href="https://xcodenexus.com" className={`shrink-0 text-xs font-extrabold tracking-[0.08em] sm:text-sm sm:tracking-[0.12em] ${FOCUS}`}>
                    XCODENEXUS
                </a>
                <nav aria-label={label}>
                    <ul className="flex items-center gap-3 text-xs font-semibold max-[340px]:gap-2 max-[340px]:text-[11px] sm:gap-4 sm:text-sm">
                        {LINKS.map((link) => (
                            <li key={link.href}>
                                <a href={link.href} className={`whitespace-nowrap text-white/80 hover:text-white ${FOCUS}`}>
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}

import {
    AI_GUIDE_URL,
    CONTACT_URL,
    PLAYBOOK_URL,
    PORTFOLIO_URL,
    PROMPT_LESSON_URL,
    SELL_PDF_URL,
} from "@/lib/playbook-config";
import CtaLink from "./CtaLink";

const LINKS = [
    { label: "AI guide", href: AI_GUIDE_URL },
    { label: "Free lesson", href: PROMPT_LESSON_URL },
    { label: "Playbook", href: PLAYBOOK_URL },
    { label: "Sell PDFs", href: SELL_PDF_URL },
];

const FOCUS = "focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-white";

interface TopBarProps {
    label: string;
    /** Show "Portfolio" and "Contact" in the bar (used on /ai). The other links then hide on phones. */
    showAuthorCtas?: boolean;
}

export default function TopBar({ label, showAuthorCtas = false }: TopBarProps) {
    return (
        <header className="bg-[#1A1A1F] text-white">
            <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3 sm:gap-4 sm:px-5">
                <a href={PORTFOLIO_URL} className={`shrink-0 text-xs font-extrabold tracking-[0.08em] sm:text-sm sm:tracking-[0.12em] ${FOCUS}`}>
                    XCODENEXUS
                </a>
                <nav aria-label={label}>
                    <ul className="flex items-center gap-3 text-xs font-semibold max-[400px]:gap-2 max-[400px]:text-[11px] sm:gap-4 sm:text-sm">
                        {LINKS.map((link) => (
                            <li key={link.href} className={showAuthorCtas ? "hidden md:block" : undefined}>
                                <a href={link.href} className={`whitespace-nowrap text-white/80 hover:text-white ${FOCUS}`}>
                                    {link.label}
                                </a>
                            </li>
                        ))}
                        {showAuthorCtas && (
                            <>
                                <li>
                                    <a href={PORTFOLIO_URL} className={`whitespace-nowrap font-bold text-white underline underline-offset-4 ${FOCUS}`}>
                                        Portfolio
                                    </a>
                                </li>
                                <li>
                                    <CtaLink href={CONTACT_URL} location="ai_topbar_contact" variant="onDark" compact>
                                        Contact
                                    </CtaLink>
                                </li>
                            </>
                        )}
                    </ul>
                </nav>
            </div>
        </header>
    );
}

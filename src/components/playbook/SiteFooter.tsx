import {
    AI_GUIDE_URL,
    PLAYBOOK_URL,
    PORTFOLIO_URL,
    PROMPT_LESSON_URL,
    WHATSAPP_URL,
} from "@/lib/playbook-config";

const LINK =
    "font-semibold text-white underline underline-offset-4 focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-white";

export default function SiteFooter() {
    return (
        <footer className="pb-dark px-5 py-12 text-white/85">
            <div className="mx-auto max-w-5xl">
                <h2 className="text-xl font-bold text-white">Find me</h2>
                <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
                    <li><a href={PORTFOLIO_URL} className={LINK}>Portfolio</a></li>
                    <li>
                        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={LINK}>
                            WhatsApp
                        </a>
                    </li>
                </ul>

                <h2 className="mt-8 text-xl font-bold text-white">Read and learn</h2>
                <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
                    <li><a href={AI_GUIDE_URL} className={LINK}>AI, explained simply</a></li>
                    <li><a href={PROMPT_LESSON_URL} className={LINK}>Free prompt lesson</a></li>
                    <li><a href={PLAYBOOK_URL} className={LINK}>The AI Side Hustle Playbook</a></li>
                </ul>

                <p className="mt-8 max-w-3xl text-sm">
                    This is educational content. It makes no income promises. It is not legal,
                    tax or financial advice. AI tools change often and can be wrong, so always
                    check the results. Your results depend on your effort, skills and market.
                </p>
            </div>
        </footer>
    );
}

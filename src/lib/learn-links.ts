import { AI_GUIDE_URL, PLAYBOOK_URL, PROMPT_LESSON_URL } from "@/lib/playbook-config";

/** The three free-resource links shown in the homepage section and the footer. */
export const LEARN_LINKS = [
    {
        tag: "Free lesson",
        title: "How to write better prompts",
        desc: "A 10-minute lesson with a live prompt builder. No signup.",
        href: PROMPT_LESSON_URL,
        cta: "Take the free lesson",
        footerLabel: "Prompt lesson",
    },
    {
        tag: "Guide",
        title: "AI, explained simply",
        desc: "What AI really is, what it can't do, and how to make the most of it.",
        href: AI_GUIDE_URL,
        cta: "Read the AI guide",
        footerLabel: "AI guide",
    },
    {
        tag: "Ebook",
        title: "The AI Side Hustle Playbook",
        desc: "A 46-page guide to your first AI client. ₦8,500, instant PDF download.",
        href: PLAYBOOK_URL,
        cta: "See the ebook",
        footerLabel: "The Playbook",
    },
] as const;
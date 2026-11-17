import PageShell from "@/components/playbook/PageShell";
import { faqJsonLd } from "@/components/playbook/Faq";
import {
    BuilderBlock,
    ExamplesBlock,
    ExerciseBlock,
    HabitsBlock,
    LESSON_FAQS,
    LessonCtaAndFaq,
    LessonHero,
    MethodBlock,
    ProblemBlock,
} from "@/components/lesson/LessonSections";
import { OG_IMAGE_LESSON, PROMPT_LESSON_URL } from "@/lib/playbook-config";
import { articleJsonLd, buildMetadata } from "@/lib/seo";

const SEO = {
    title: "How to Write Better AI Prompts: a free 10-minute lesson",
    description:
        "A free 10-minute lesson: the R-C-T-F method for writing AI prompts that give clear, usable results, with a prompt builder you can use right now.",
    path: PROMPT_LESSON_URL,
    image: OG_IMAGE_LESSON,
};

export const metadata = buildMetadata(SEO);

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [articleJsonLd(SEO, "PT10M"), faqJsonLd(LESSON_FAQS)],
};

export default function HowToWriteBetterPromptsPage() {
    return (
        <PageShell label="Free lesson" jsonLd={jsonLd}>
            <LessonHero />
            <ProblemBlock />
            <MethodBlock />
            <BuilderBlock />
            <ExamplesBlock />
            <HabitsBlock />
            <ExerciseBlock />
            <LessonCtaAndFaq />
        </PageShell>
    );
}
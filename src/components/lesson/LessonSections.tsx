import { AI_GUIDE_URL, PLAYBOOK_URL } from "@/lib/playbook-config";
import CtaLink from "@/components/playbook/CtaLink";
import Faq, { type FaqItem } from "@/components/playbook/Faq";
import PromptBuilder from "./PromptBuilder";

export const LESSON_FAQS: readonly FaqItem[] = [
    {
        q: "Which AI tool should I use?",
        a: "Any of the main assistants works, such as ChatGPT, Claude or Gemini, and most have a free tier. The method in this lesson works with all of them.",
    },
    {
        q: "Do longer prompts always work better?",
        a: "No. Clearer prompts work better. Include what the AI needs to avoid guessing, and leave out everything else.",
    },
    {
        q: "Can I trust the answer?",
        a: "Treat it as a draft. Check facts, numbers and names yourself, and use the [CHECK] tag to find the weak spots quickly.",
    },
];

const RCTF = [
    { letter: "R", title: "Role", text: "Who should the AI act as? \"A recruiter in Lagos.\"" },
    { letter: "C", title: "Context", text: "Who is it for, and what is the situation? Paste real details." },
    { letter: "T", title: "Task", text: "Exactly what to produce, with limits on length and style." },
    { letter: "F", title: "Format", text: "How the answer should look: a table, bullets, plain text." },
];

const EXERCISE = [
    "Pick one real task you do this week: a message, a caption, a CV line, a reply.",
    "Write your old, short prompt and save the answer.",
    "Rebuild it using the four parts in the builder above.",
    "Run the critique pass once and compare the two answers.",
    "Keep the version that worked. Save it as a template you can reuse.",
];

const H2 = "text-3xl font-extrabold tracking-tight md:text-4xl";
const H3 = "text-lg font-bold";
const EYEBROW = "mb-2 text-xs font-extrabold uppercase tracking-[0.16em] text-[#D9540B]";
const WRAP = "mx-auto w-full max-w-3xl px-5";

function BeforeAfter({ weak, strong }: { weak: string; strong: string }) {
    return (
        <div className="my-5 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-[#EBDDD2] bg-[#F6F3EF] p-4 text-[15.5px]">
                <span className="mb-1.5 block text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#5B5B66]">Weak prompt</span>
                <p>{weak}</p>
            </div>
            <div className="rounded-2xl border-l-[5px] border-[#F26A1B] bg-[#FFF1E6] p-4 text-[15.5px]">
                <span className="mb-1.5 block text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#D9540B]">Strong prompt</span>
                <p>{strong}</p>
            </div>
        </div>
    );
}

export function LessonHero() {
    return (
        <header className="pb-hero pb-slant px-5 pt-14 text-white">
            <div className="mx-auto max-w-3xl">
                <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#1A1A1F]">
                    Free lesson · 10 minutes · no signup
                </p>
                <h1 className="mt-3 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl">
                    How to write AI prompts that actually work
                </h1>
                <p className="mt-5 max-w-xl text-lg font-medium text-[#1A1A1F] md:text-xl">
                    Most people get weak answers from AI because they ask weak questions. Learn
                    one simple method, then practise it with the builder below.
                </p>
                <ul className="mt-6 flex flex-wrap gap-2">
                    {["The R-C-T-F method", "Live prompt builder", "3 real examples"].map((chip) => (
                        <li key={chip} className="rounded-full border border-white/50 bg-white/20 px-3 py-1 text-sm font-semibold text-[#1A1A1F]">
                            {chip}
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
}

export function ProblemBlock() {
    return (
        <section className="py-12 md:py-16">
            <div className={WRAP}>
                <p className={EYEBROW}>The problem</p>
                <h2 className={H2}>Why most prompts fail</h2>
                <p className="mt-3">
                    AI cannot read your mind. When you type a short, vague request, it fills the
                    gaps with the most average guess. That is why the answer feels generic.
                </p>
                <BeforeAfter
                    weak="Write my CV."
                    strong="You are a recruiter in Lagos. My client is a final-year accounting student applying for audit trainee roles. Rewrite the CV below to open with a 3-line profile and show achievements, not duties. Keep it to one page. Never invent facts: write [ASK CLIENT] if a detail is missing."
                />
                <p>
                    The strong prompt is not longer for the sake of it. Every sentence removes a
                    guess the AI would otherwise make for you.
                </p>
            </div>
        </section>
    );
}

export function MethodBlock() {
    return (
        <section className="bg-[#FFF8F2] py-12 md:py-16">
            <div className="mx-auto w-full max-w-4xl px-5">
                <p className={EYEBROW}>The method</p>
                <h2 className={H2}>R-C-T-F: four parts of a good prompt</h2>
                <p className="mt-3">
                    Give the AI these four things, in any order, and your results improve
                    straight away.
                </p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {RCTF.map((card) => (
                        <li key={card.letter} className="pb-card rounded-2xl border border-[#EBDDD2] bg-white p-4">
                            <span className="mb-3 grid size-9 place-items-center rounded-full bg-[#F26A1B] font-extrabold text-[#1A1A1F]">
                                {card.letter}
                            </span>
                            <h3 className={H3}>{card.title}</h3>
                            <p className="mt-1 text-[15px] text-[#5B5B66]">{card.text}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export function BuilderBlock() {
    return (
        <section id="builder" className="py-12 md:py-16">
            <div className={WRAP}>
                <p className={EYEBROW}>Try it</p>
                <h2 className={H2}>Build your own prompt</h2>
                <p className="mb-6 mt-3">
                    Fill in the four parts, or tap an example to see how it works. Your finished
                    prompt appears at the bottom. Copy it into ChatGPT, Claude or Gemini.
                </p>
                <PromptBuilder />
            </div>
        </section>
    );
}

export function ExamplesBlock() {
    return (
        <section className="bg-[#FFF8F2] py-12 md:py-16">
            <div className={WRAP}>
                <p className={EYEBROW}>Examples</p>
                <h2 className={H2}>Two more before-and-afters</h2>

                <h3 className={`${H3} mt-6`}>Social media captions</h3>
                <BeforeAfter
                    weak="Write Instagram captions for my business."
                    strong="You are a social media writer for hair salons in Ibadan. Glow Hair Studio sells braids and wigs to women aged 20 to 35 and takes bookings on WhatsApp. Write 10 captions for next week, each with a hook, one benefit and a booking call to action. Numbered list, under 40 words each. Mark any claim you invented with [CHECK]."
                />

                <h3 className={`${H3} mt-6`}>Replying to a customer</h3>
                <BeforeAfter
                    weak="Reply to this customer."
                    strong="You are the friendly assistant for a phone accessories shop in Ibadan. A customer asks if the 20,000 mAh power bank is available and whether we deliver. Stock: 12 units, ₦18,500. Delivery: ₦2,000 within Ibadan, same day before 4pm. Write a short WhatsApp reply in simple English and end by asking for their address."
                />
            </div>
        </section>
    );
}

export function HabitsBlock() {
    return (
        <section className="py-12 md:py-16">
            <div className={WRAP}>
                <p className={EYEBROW}>Two habits that separate good from great</p>
                <h2 className={H2}>Check the answer, then challenge it</h2>

                <h3 className={`${H3} mt-5`}>1. Tag what the AI is unsure about</h3>
                <p className="mt-1">
                    Tell the AI to write [CHECK] next to anything it is guessing. AI often sounds
                    confident when it is wrong, and this simple tag shows you exactly what to
                    verify before you use it.
                </p>

                <h3 className={`${H3} mt-5`}>2. Run a critique pass</h3>
                <p className="mt-1">
                    After the first answer, send a second message. The AI nearly always finds real
                    weaknesses in its own work.
                </p>

                <div className="my-5 rounded-2xl bg-[#1A1A1F] p-5 text-white">
                    <span className="mb-1.5 block text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#FF9B5E]">
                        Copy this follow-up
                    </span>
                    <p>
                        Now act as a tough reviewer who has 10 seconds to read this. List the 5
                        biggest weaknesses, then rewrite it fixing all 5. Mark anything you had to
                        guess with [CHECK].
                    </p>
                </div>

                <div className="rounded-2xl bg-[#FFF1E6] p-5">
                    <span className="mb-1.5 block text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#D9540B]">
                        Protect private information
                    </span>
                    <p>
                        Never paste ID numbers, bank details, passwords or other people&apos;s
                        private data into an AI tool. Replace names and numbers with placeholders
                        such as [NAME], then put the real details back yourself.
                    </p>
                </div>
            </div>
        </section>
    );
}

export function ExerciseBlock() {
    return (
        <section className="bg-[#FFF8F2] py-12 md:py-16">
            <div className={WRAP}>
                <p className={EYEBROW}>Your 5-minute exercise</p>
                <h2 className={H2}>Do this today</h2>
                <ol className="mt-5 space-y-3">
                    {EXERCISE.map((step, index) => (
                        <li key={step} className="flex gap-4">
                            <span aria-hidden="true" className="grid size-7 shrink-0 place-items-center rounded-full bg-[#F26A1B] text-sm font-extrabold text-[#1A1A1F]">
                                {index + 1}
                            </span>
                            <span>{step}</span>
                        </li>
                    ))}
                </ol>
                <p className="mt-5">Do this three times and you will write better prompts without thinking about it.</p>
            </div>
        </section>
    );
}

export function LessonCtaAndFaq() {
    return (
        <section className="py-12 md:py-16">
            <div className={WRAP}>
                <div className="pb-hero rounded-3xl p-7 text-white md:p-10">
                    <h2 className="text-3xl font-extrabold tracking-tight">Ready to turn this skill into income?</h2>
                    <p className="mt-3 text-lg font-medium text-[#1A1A1F]">
                        The AI Side Hustle Playbook shows you five paths to your first paying
                        client, with prompts, scripts and a 30-day plan.
                    </p>
                    <CtaLink href={PLAYBOOK_URL} location="lesson_cta" variant="onOrange" large className="mt-6 w-full sm:w-auto">
                        See the Playbook
                    </CtaLink>
                    <p className="mt-4 text-sm font-medium text-[#1A1A1F]">
                        Free to read. No income promises: results depend on your effort and market.
                    </p>
                </div>

                <p className="mt-6 text-center">
                    <CtaLink href={AI_GUIDE_URL} location="lesson_ai_guide" variant="ghost">
                        Read the beginner&apos;s guide to AI
                    </CtaLink>
                </p>

                <h2 className="mb-5 mt-12 text-2xl font-extrabold tracking-tight">Quick questions</h2>
                <Faq items={LESSON_FAQS} />
            </div>
        </section>
    );
}
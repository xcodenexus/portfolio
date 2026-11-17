/**
 * Content for /ai ("AI, Explained Simply"), kept as plain data.
 * Each exported block is self-contained, so any section can later be lifted
 * into its own blog post without touching the page layout.
 */

import type { FaqItem } from "@/components/playbook/Faq";

export const GUIDE_TITLE = "AI, Explained Simply";
export const GUIDE_FULL_TITLE =
    "AI, Explained Simply: What It Really Is and How to Make the Most of It";
export const GUIDE_SUBHEAD = "No hype, no jargon. Just what AI is and how to use it.";
export const READING_MINUTES = 8;

export const TOC = [
    { id: "what-ai-is", title: "What AI actually is" },
    { id: "good-and-bad", title: "What it's good and bad at" },
    { id: "myths", title: "Myths worth dropping" },
    { id: "next-few-years", title: "The next few years" },
    { id: "best-habits", title: "How to make the best of it" },
    { id: "nigeria", title: "Why this matters in Nigeria" },
    { id: "start-today", title: "Start today: 3 free steps" },
    { id: "full-plan", title: "Want the full plan?" },
    { id: "faq", title: "Questions" },
] as const;

export const WHAT_AI_IS = {
    paragraphs: [
        "When people say \"AI\" today, they usually mean tools like ChatGPT, Claude and Gemini. You type a request, and they write back.",
        "These tools learn patterns from huge amounts of text and data. When you ask something, they predict a likely answer, one word at a time.",
        "They do not think or understand the way a person does. They have not lived in the world. What they are very good at is producing text that sounds right.",
    ],
    analogyTitle: "An everyday way to picture it",
    analogy:
        "Think of the autocomplete on your phone. It guesses your next word from what you have already typed. Now imagine an autocomplete that has read most of the internet. That is close to how these tools work. It is why they write so smoothly, and also why they can be confidently wrong.",
};

export const GOOD_AT = [
    { title: "Drafting", text: "First drafts of emails, posts, CVs and replies." },
    { title: "Summarising", text: "Turning long text into a few clear points." },
    { title: "Brainstorming", text: "Ideas, names and angles you had not thought of." },
    { title: "Repetitive work", text: "Rewriting in a new tone, reformatting, sorting lists." },
];

export const BAD_AT = [
    { title: "Checking facts", text: "It can state wrong things in a calm, confident voice." },
    { title: "Judgment", text: "It does not know your situation, your risks or your values. Decisions stay with you." },
    { title: "Recent events", text: "It may not know what happened lately. Even with search, double-check." },
];

export const MAKES_THINGS_UP =
    "AI can make things up. Names, numbers, quotes and sources can all be invented. Always check its output before you use it.";

export const MYTHS = [
    {
        myth: "\"AI will take all the jobs.\"",
        answer: "Some tasks will change, and some jobs will change with them. But a job is many tasks, and AI is weak at some of them. No one can say exactly how this will play out. The safer move is to learn to use it.",
    },
    {
        myth: "\"AI is magic money.\"",
        answer: "There is no button that prints income. People earn by solving a real problem for a real customer. AI can speed up the work. It does not find the customer for you.",
    },
    {
        myth: "\"You need to know how to code.\"",
        answer: "No. You can use most AI tools by typing plain sentences. Coding helps with some work, but it is not a requirement to start.",
    },
    {
        myth: "\"You need expensive tools.\"",
        answer: "No. The main assistants have free versions, and that is enough to learn on. Pay for something only when a free tool is clearly holding you back.",
    },
];

export type Confidence = "Likely" | "Uncertain";

export const FUTURE_NOTE =
    "These are reasoned guesses, not predictions. We have left out dates and numbers on purpose, because we cannot back them up.";

export const FUTURE_POINTS: { label: Confidence; title: string; text: string }[] = [
    {
        label: "Likely",
        title: "Tasks change faster than whole jobs",
        text: "Parts of a job get faster or automated first. The job title often stays while the daily work shifts.",
    },
    {
        label: "Likely",
        title: "People who use AI well get more done",
        text: "Someone who writes clear prompts and checks the results will usually finish routine work faster than someone who does not.",
    },
    {
        label: "Likely",
        title: "Basic AI skills become expected",
        text: "Like email or spreadsheets, using AI tools is becoming a normal skill that employers and clients assume you have.",
    },
    {
        label: "Uncertain",
        title: "Which tools win",
        text: "New tools appear often, and today's favourites may not last. Learn skills that carry across tools.",
    },
    {
        label: "Uncertain",
        title: "How fast it all moves",
        text: "Nobody knows how quickly change will arrive, which industries it will reach first, or how it will look locally.",
    },
    {
        label: "Uncertain",
        title: "Rules and prices",
        text: "Laws, platform rules and the cost of AI tools are still changing.",
    },
];

export const HABITS = [
    {
        title: "Learn to write clear prompts",
        text: "Say who the AI should act as, give the situation, state the task and ask for a format. Clear input gives clearer output.",
    },
    {
        title: "Always check the output",
        text: "Treat every answer as a draft. Verify facts, numbers and names before you share or act on them.",
    },
    {
        title: "Pair AI with one real skill",
        text: "AI works best as a helper to something you can already do, such as writing, design, teaching, selling or bookkeeping.",
    },
    {
        title: "Build proof of work",
        text: "Make small, real things and keep them: a sample, a before-and-after, a short case. Proof beats claims.",
    },
];

export const NIGERIA = {
    intro: "This is practical, not patriotic. Here is what is real, and what gets in the way.",
    opportunities: [
        { title: "Remote work", text: "Some clients abroad hire remotely, so you can work from where you are." },
        { title: "Local businesses that need help", text: "Many shops, salons and service businesses want better replies, captions and simple websites, but have no time to make them." },
        { title: "Low startup cost", text: "A phone, data and free tools are enough to learn and to make a first sample." },
    ],
    obstacles: [
        { title: "Payments", text: "Getting paid from abroad can be slow or awkward, and fees and rules change. Learn your options before you need them." },
        { title: "Unreliable data and power", text: "Plan around it. Batch your online tasks, work offline where you can, and keep a backup such as a power bank." },
    ],
};

export const START_STEPS = [
    {
        title: "Try the free prompt lesson",
        text: "Learn one simple method for writing prompts, and practise it with the builder. It takes about 10 minutes.",
    },
    {
        title: "Pick one tool and use it daily for a week",
        text: "Choose one assistant. Use it for one small, real task each day. By day seven you will know what it is good at.",
    },
    {
        title: "Do one small task for someone",
        text: "Help a friend, a family member or a local business with one small job. Ask for honest feedback.",
    },
];

export const PLAYBOOK_BLURB = {
    text: "If you want a full plan, The AI Side Hustle Playbook is a 46-page PDF. It covers five paths to a first paying client, with prompts, outreach scripts, a Nigeria payout guide, a scam-safety chapter and a 30-day plan.",
    forYou: "It is for beginners who are ready to do the work.",
    notForYou: "It is not for anyone who wants overnight money or a guaranteed income. Results depend on your effort and market.",
};

export const AI_FAQS: readonly FaqItem[] = [
    {
        q: "Is AI safe?",
        a: "Mostly, if you use it with care. Don't paste private details like ID numbers, bank information or passwords. Check its answers, and be extra careful with advice about health, money or law.",
    },
    {
        q: "Do I need to code?",
        a: "No. You can use most AI tools by typing plain sentences. Coding helps for some work, but you do not need it to start.",
    },
    {
        q: "Will it replace me?",
        a: "Some tasks you do may get faster with AI, or be done by it. Whether your whole job is affected depends on the work, and nobody can say for sure. The best protection is to learn the tools and pair them with real skills.",
    },
    {
        q: "Which tool should I start with?",
        a: "Any of the main assistants, such as ChatGPT, Claude or Gemini. Most have a free tier. Pick one and stay with it for a week before you compare.",
    },
];
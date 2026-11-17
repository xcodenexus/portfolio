"use client";

import { useState } from "react";

interface Fields {
    role: string;
    context: string;
    task: string;
    format: string;
}

interface Checks {
    check: boolean;
    short: boolean;
    ask: boolean;
    crit: boolean;
}

interface Example {
    label: string;
    fields: Fields;
    checks: Checks;
}

type ExampleKey = "cv" | "salon" | "shop";

const EMPTY_FIELDS: Fields = { role: "", context: "", task: "", format: "" };
const DEFAULT_CHECKS: Checks = { check: true, short: false, ask: false, crit: false };

const EXAMPLES: Record<ExampleKey, Example> = {
    cv: {
        label: "Example: CV rewrite",
        fields: {
            role: "a recruiter in Lagos who reviews CVs for graduate roles",
            context:
                "My client is a final-year accounting student applying for audit trainee roles. Their current CV is below. [paste CV here]",
            task: "Rewrite the CV to open with a 3-line profile, turn every duty into an achievement and keep it to one page.",
            format: "Clean plain text, then a short list of questions to ask the client",
        },
        checks: { check: true, short: false, ask: false, crit: true },
    },
    salon: {
        label: "Example: salon captions",
        fields: {
            role: "a social media writer for hair salons in Ibadan",
            context: "Glow Hair Studio sells braids and wigs to women aged 20 to 35 and takes bookings on WhatsApp.",
            task: "Write 10 Instagram captions for next week. Each needs a hook, one benefit and a booking call to action.",
            format: "A numbered list, under 40 words each, light Pidgin allowed",
        },
        checks: { check: true, short: true, ask: false, crit: false },
    },
    shop: {
        label: "Example: shop reply",
        fields: {
            role: "the friendly assistant for a phone accessories shop in Ibadan",
            context:
                "A customer asks if the 20,000 mAh power bank is available and whether we deliver. Stock: 12 units, ₦18,500. Delivery: ₦2,000 within Ibadan, same day before 4pm.",
            task: "Write a short WhatsApp reply and end by asking for their delivery address.",
            format: "Two or three short sentences in simple English",
        },
        checks: { check: true, short: true, ask: false, crit: false },
    },
};

const TIPS = [
    "Start with any part. Even one line helps.",
    "Good start. Add the next part to remove more guesses.",
    "Getting clearer. Two parts to go.",
    "Almost there. One part left.",
    "All four parts filled. This is a strong prompt.",
];

const CHECK_OPTIONS: { key: keyof Checks; label: string }[] = [
    { key: "check", label: "Mark anything you are unsure about with [CHECK] instead of inventing it" },
    { key: "short", label: "Use plain, simple English with no hype words" },
    { key: "ask", label: "Ask me up to 3 questions first if anything is missing" },
    { key: "crit", label: "Add a critique pass: review your own answer and improve it" },
];

const FIELD_META: { key: keyof Fields; label: string; hint: string; placeholder: string; multiline: boolean }[] = [
    { key: "role", label: "1. Role", hint: "(who should the AI act as?)", placeholder: "a social media writer for hair salons in Ibadan", multiline: false },
    { key: "context", label: "2. Context", hint: "(who is it for, what is the situation?)", placeholder: "Glow Hair Studio sells braids and wigs to women aged 20 to 35 and takes bookings on WhatsApp.", multiline: true },
    { key: "task", label: "3. Task", hint: "(exactly what should it produce?)", placeholder: "Write 10 Instagram captions for next week. Each needs a hook, one benefit and a booking call to action.", multiline: true },
    { key: "format", label: "4. Format", hint: "(how should the answer look?)", placeholder: "A numbered list, under 40 words each, light Pidgin allowed", multiline: false },
];

export function buildPrompt(fields: Fields, checks: Checks): string {
    const v = {
        role: fields.role.trim(),
        context: fields.context.trim(),
        task: fields.task.trim(),
        format: fields.format.trim(),
    };
    // Rules alone are not a prompt: stay empty until at least one part is filled.
    if (!v.role && !v.context && !v.task && !v.format) return "";

    const lines: string[] = [];
    if (v.role) lines.push(`You are ${v.role.replace(/^you are\s+/i, "").replace(/\.$/, "")}.`);
    if (v.context) lines.push(`Context: ${v.context}`);
    if (v.task) lines.push(`Task: ${v.task}`);
    if (v.format) lines.push(`Format: ${v.format}`);

    const rules: string[] = [];
    if (checks.check) rules.push("If you are unsure about a fact or detail, do not invent it. Mark it with [CHECK].");
    if (checks.short) rules.push("Use plain, simple English with no hype words.");
    if (checks.ask) rules.push("If anything important is missing, ask me up to 3 questions before you answer.");
    if (rules.length) lines.push(`Rules:\n- ${rules.join("\n- ")}`);

    if (checks.crit && lines.length) {
        lines.push(
            "After your answer, act as a tough reviewer. List the 5 biggest weaknesses, then give an improved version that fixes them.",
        );
    }
    return lines.join("\n\n");
}

const FIELD_CLASSES =
    "w-full rounded-xl border-2 border-[#EBDDD2] bg-white px-3 py-3 text-base text-[#1A1A1F] placeholder:text-[#5B5B66]/70 focus-visible:border-[#D9540B] focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[#1A1A1F]";

export default function PromptBuilder() {
    const [fields, setFields] = useState<Fields>(EXAMPLES.salon.fields);
    const [checks, setChecks] = useState<Checks>(EXAMPLES.salon.checks);
    const [copyMessage, setCopyMessage] = useState("");

    const prompt = buildPrompt(fields, checks);
    const filledCount = Object.values(fields).filter((value) => value.trim() !== "").length;
    const isEmpty = prompt === "";

    function updateField(key: keyof Fields, value: string) {
        setFields((current) => ({ ...current, [key]: value }));
        setCopyMessage("");
    }

    function updateCheck(key: keyof Checks, value: boolean) {
        setChecks((current) => ({ ...current, [key]: value }));
        setCopyMessage("");
    }

    function applyPreset(key: ExampleKey | "clear") {
        if (key === "clear") {
            setFields(EMPTY_FIELDS);
            setChecks(DEFAULT_CHECKS);
        } else {
            setFields(EXAMPLES[key].fields);
            setChecks(EXAMPLES[key].checks);
        }
        setCopyMessage("");
    }

    function copyWithFallback() {
        const textarea = document.createElement("textarea");
        textarea.value = prompt;
        textarea.setAttribute("readonly", "");
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();
        let ok = false;
        try {
            ok = document.execCommand("copy");
        } catch {
            ok = false;
        }
        document.body.removeChild(textarea);
        setCopyMessage(ok ? "Copied. Paste it into your AI tool." : "Select the text above and copy it.");
    }

    function handleCopy() {
        if (isEmpty) {
            setCopyMessage("Fill in at least one part first.");
            return;
        }
        if (navigator.clipboard?.writeText) {
            navigator.clipboard
                .writeText(prompt)
                .then(() => setCopyMessage("Copied. Paste it into your AI tool."))
                .catch(copyWithFallback);
        } else {
            copyWithFallback();
        }
    }

    return (
        <div className="rounded-3xl border border-[#EBDDD2] bg-white p-5 shadow-[0_10px_40px_rgba(26,26,31,0.08)] md:p-8">
            <div role="group" aria-label="Examples" className="mb-4 flex flex-wrap gap-2">
                {(Object.keys(EXAMPLES) as ExampleKey[]).map((key) => (
                    <button
                        key={key}
                        type="button"
                        onClick={() => applyPreset(key)}
                        className="rounded-full bg-[#FFF1E6] px-4 py-2 text-sm font-bold text-[#D9540B] transition-colors hover:bg-[#FFE2CC] focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[#1A1A1F]"
                    >
                        {EXAMPLES[key].label}
                    </button>
                ))}
                <button
                    type="button"
                    onClick={() => applyPreset("clear")}
                    className="rounded-full border-2 border-[#EBDDD2] px-4 py-2 text-sm font-bold text-[#1A1A1F] transition-colors hover:bg-[#FFF8F2] focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[#1A1A1F]"
                >
                    Clear
                </button>
            </div>

            {FIELD_META.map((meta) => (
                <div key={meta.key} className="mt-4">
                    <label htmlFor={`f-${meta.key}`} className="mb-1 block text-sm font-bold">
                        {meta.label} <small className="font-medium text-[#5B5B66]">{meta.hint}</small>
                    </label>
                    {meta.multiline ? (
                        <textarea
                            id={`f-${meta.key}`}
                            value={fields[meta.key]}
                            onChange={(event) => updateField(meta.key, event.target.value)}
                            placeholder={meta.placeholder}
                            className={`${FIELD_CLASSES} min-h-[84px] resize-y`}
                        />
                    ) : (
                        <input
                            id={`f-${meta.key}`}
                            type="text"
                            value={fields[meta.key]}
                            onChange={(event) => updateField(meta.key, event.target.value)}
                            placeholder={meta.placeholder}
                            className={FIELD_CLASSES}
                        />
                    )}
                </div>
            ))}

            <fieldset className="mt-5">
                <legend className="text-sm font-bold">Extra safety habits</legend>
                <div className="mt-2 grid gap-2">
                    {CHECK_OPTIONS.map((option) => (
                        <label key={option.key} htmlFor={`r-${option.key}`} className="flex items-start gap-3 text-[15px]">
                            <input
                                id={`r-${option.key}`}
                                type="checkbox"
                                checked={checks[option.key]}
                                onChange={(event) => updateCheck(option.key, event.target.checked)}
                                className="mt-1 size-[18px] shrink-0 accent-[#F26A1B] focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[#1A1A1F]"
                            />
                            {option.label}
                        </label>
                    ))}
                </div>
            </fieldset>

            <div className="mt-5 flex gap-1.5" aria-hidden="true">
                {[1, 2, 3, 4].map((step) => (
                    <i
                        key={step}
                        className={`h-2 flex-1 rounded-full transition-colors ${step <= filledCount ? "bg-[#F26A1B]" : "bg-[#EBDDD2]"}`}
                    />
                ))}
            </div>
            <p role="status" aria-live="polite" className="mb-3 mt-1.5 min-h-[22px] text-sm font-semibold text-[#5B5B66]">
                {TIPS[filledCount]}
            </p>

            <div
                role="region"
                aria-label="Your finished prompt"
                className={`min-h-[120px] whitespace-pre-wrap break-words rounded-xl bg-[#1A1A1F] p-4 text-[14.5px] leading-relaxed ${
                    isEmpty ? "text-[#B4B4BF]" : "text-[#F4F1EE]"
                }`}
            >
                {isEmpty ? "Your prompt will appear here as you type." : prompt}
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-3">
                <button
                    type="button"
                    onClick={handleCopy}
                    className="rounded-full bg-[#D9540B] px-6 py-3 font-bold text-white transition-colors hover:bg-[#B94509] focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-[#1A1A1F]"
                >
                    Copy prompt
                </button>
                <span role="status" aria-live="polite" className="text-sm font-bold text-[#D9540B]">
                    {copyMessage}
                </span>
            </div>
        </div>
    );
}
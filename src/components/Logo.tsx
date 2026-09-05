"use client";

type LogoMarkProps = {
    className?: string;
};

/**
 * XCODE NEXUS mark — two interlocking diamonds, drawn as transparent strokes
 * so it sits cleanly on the cream page, the white scrolled navbar, or black.
 */
export function LogoMark({ className = "" }: LogoMarkProps) {
    return (
        <svg
            viewBox="0 0 72 44"
            className={className}
            fill="none"
            aria-hidden="true"
            focusable="false"
        >
            <defs>
                <linearGradient id="xcn-mark" x1="0" y1="0" x2="72" y2="44" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FF8A3D" />
                    <stop offset="1" stopColor="#FF5C00" />
                </linearGradient>
            </defs>
            <g stroke="url(#xcn-mark)" strokeWidth="7" strokeLinejoin="round">
                <rect x="13" y="11" width="22" height="22" rx="4" transform="rotate(45 24 22)" />
                <rect x="37" y="11" width="22" height="22" rx="4" transform="rotate(45 48 22)" />
            </g>
        </svg>
    );
}

export default function Logo({ className = "" }: LogoMarkProps) {
    return (
        <div className={`flex items-center gap-3 ${className}`}>
            <LogoMark className="h-7 lg:h-8 w-auto shrink-0" />
            <span className="text-xl lg:text-2xl font-black tracking-tighter leading-none whitespace-nowrap">
                <span className="text-accent">X</span>CODE <span className="text-accent">NEXUS</span>
            </span>
        </div>
    );
}

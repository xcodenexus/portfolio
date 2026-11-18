import "./pb.css";
import SiteFooter from "./SiteFooter";
import TopBar from "./TopBar";

interface PageShellProps {
    /** Accessible label for the top navigation, e.g. "Free lesson". */
    label: string;
    /** Reserve space for the mobile sticky bar. */
    hasStickyBar?: boolean;
    /** Show "Portfolio" and "Contact" in the top bar. */
    showAuthorCtas?: boolean;
    jsonLd: Record<string, unknown>;
    children: React.ReactNode;
}

/** Shared frame: top bar, main content, dark footer and structured data. */
export default function PageShell({
    label,
    hasStickyBar = false,
    showAuthorCtas = false,
    jsonLd,
    children,
}: PageShellProps) {
    return (
        <div className="bg-white font-sans text-[#1A1A1F]">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
                }}
            />
            <TopBar label={label} showAuthorCtas={showAuthorCtas} />
            <main className={`min-h-screen ${hasStickyBar ? "pb-24 md:pb-0" : ""}`}>{children}</main>
            <SiteFooter />
        </div>
    );
}

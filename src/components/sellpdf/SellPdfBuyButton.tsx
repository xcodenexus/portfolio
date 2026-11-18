import { SELL_PDF_SELAR_URL } from "@/lib/playbook-config";
import CtaLink from "@/components/playbook/CtaLink";

type Variant = "onOrange" | "onWhite" | "onDark" | "ghost" | "light";

interface SellPdfBuyButtonProps {
    /** Where the button sits, sent with the click event (e.g. "sellpdf_hero"). */
    location: string;
    variant?: Variant;
    large?: boolean;
    className?: string;
    children: React.ReactNode;
}

/** Link to the book on Selar. Opens in a new tab and carries the visitor's utm_* params. */
export default function SellPdfBuyButton({ children, ...props }: SellPdfBuyButtonProps) {
    return (
        <CtaLink href={SELL_PDF_SELAR_URL} newTab rel="noopener" {...props}>
            {children}
        </CtaLink>
    );
}

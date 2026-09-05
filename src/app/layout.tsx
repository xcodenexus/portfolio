import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import ScrollToTop from "@/components/ScrollToTop";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const SMARTSUPP_KEY = "9493ecafa61c11c304e8d1290bd4370a6ee5e1ce";

export const metadata: Metadata = {
  title: "Olakanla Olayide | Web Developer & Cybersecurity Enthusiast",
  description: "Portfolio of Olakanla Olayide, a modern Web Developer specializing in React, Next.js, and Cybersecurity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        <ScrollToTop />
        {children}
        <Analytics />
        <SpeedInsights />

        {/* Smartsupp Live Chat.
            NOTE: the id must not be "smartsupp" — an element id becomes a window
            property, so window.smartsupp would resolve to this script element and
            the snippet's own window.smartsupp guard would skip loading the chat. */}
        <Script id="smartsupp-live-chat" strategy="afterInteractive">
          {`var _smartsupp = _smartsupp || {};
_smartsupp.key = '${SMARTSUPP_KEY}';
window.smartsupp||(function(d) {
  var s,c,o=smartsupp=function(){ o._.push(arguments)};o._=[];
  s=d.getElementsByTagName('script')[0];c=d.createElement('script');
  c.type='text/javascript';c.charset='utf-8';c.async=true;
  c.src='https://www.smartsuppchat.com/loader.js?';s.parentNode.insertBefore(c,s);
})(document);`}
        </Script>
        <noscript>
          Powered by <a href="https://www.smartsupp.com" target="_blank" rel="noopener noreferrer">Smartsupp</a>
        </noscript>
      </body>
    </html>
  );
}

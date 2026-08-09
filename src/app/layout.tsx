import type { Metadata } from "next";
import { Playfair_Display, EB_Garamond, Dancing_Script } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const garamond = EB_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const dancing = Dancing_Script({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "A Letter Back to You",
  description: "A reply, written slowly and meant fully.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${garamond.variable} ${dancing.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}

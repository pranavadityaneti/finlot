import type { Metadata } from "next";
import { TikTok_Sans, Caveat } from "next/font/google";
import "./globals.css";

const tiktok = TikTok_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Finlot - Financial Growth Simplified",
  description: "Instant loans and comprehensive insurance for the new era.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${tiktok.variable} ${caveat.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}

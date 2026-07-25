import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://chenyili0818.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Chenyi Li — Researcher",
    template: "%s · Chenyi Li",
  },
  description:
    "Chenyi Li is a Ph.D. student at Peking University working on LLM reasoning, formal theorem proving, optimization, and generative modeling.",
  keywords: [
    "Chenyi Li",
    "Peking University",
    "LLM reasoning",
    "formal theorem proving",
    "Lean 4",
    "optimization",
    "SetPO",
    "OptProver",
  ],
  authors: [{ name: "Chenyi Li", url: siteUrl }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: siteUrl,
    title: "Chenyi Li — Reasoning. Proving. Generating.",
    description:
      "Research at the intersection of LLM reasoning, formal theorem proving, optimization, and generative modeling.",
    images: [
      {
        url: "/og.png",
        width: 1734,
        height: 907,
        alt: "Chenyi Li — Reasoning. Proving. Generating.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chenyi Li — Reasoning. Proving. Generating.",
    description:
      "LLM reasoning, formal theorem proving, optimization, and generative modeling.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/profile/chenyi-li-scholar.jpg",
    shortcut: "/profile/chenyi-li-scholar.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

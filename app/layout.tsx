import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://chenyili0818.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Chenyi Li",
  description:
    "Chenyi Li is a Ph.D. student at Peking University working on LLM reasoning, formal theorem proving, and optimization.",
  authors: [{ name: "Chenyi Li", url: siteUrl }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: siteUrl,
    title: "Chenyi Li",
    description:
      "Ph.D. student at Peking University working on LLM reasoning, formal theorem proving, and optimization.",
  },
  icons: {
    icon: "/profile/chenyi-li-scholar.jpg",
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

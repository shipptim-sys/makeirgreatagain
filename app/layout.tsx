import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/data/vendors";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Top 5 Cyber Incident Response — Reviews & Rankings",
  description:
    "Independent-style overview of leading Cyber Incident Response providers. Transparent criteria, concise writeups, and source links.",
  openGraph: {
    title: "Top 5 Cyber Incident Response — Reviews & Rankings",
    description:
      "A practical overview of leading IR firms with strengths, limitations, and sources.",
    url: "/",
    siteName: "Top 5 IR",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Top 5 IR" }],
    locale: "en_GB",
    type: "website"
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
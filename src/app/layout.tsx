import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export const metadata: Metadata = {
  title: {
    default: "Tech Seeking Human | AI, SaaS & Technology Podcast",
    template: "%s | Tech Seeking Human",
  },
  description:
    "Long-form conversations exploring the human side of AI, technology, and innovation with the world's leading minds. Hosted by Dave Anderson.",
  icons: {
    icon: [
      { url: "/images/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/images/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/images/apple-touch-icon.png",
  },
  openGraph: {
    title: "Tech Seeking Human | AI, SaaS & Technology Podcast",
    description:
      "Long-form conversations exploring the human side of AI, technology, and innovation with the world's leading minds. Hosted by Dave Anderson.",
    images: [{ url: "/images/icon-512.png", width: 512, height: 512 }],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen flex flex-col selection:bg-[#8dcdff]/30">
        <GoogleAnalytics />
        <Header />
        <main className="flex-1 pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

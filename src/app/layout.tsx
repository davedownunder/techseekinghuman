import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Tech Seeking Human | AI, SaaS & Technology Podcast",
    template: "%s | Tech Seeking Human",
  },
  description:
    "Long-form conversations exploring the human side of AI, technology, and innovation with the world's leading minds. Hosted by Dave Anderson.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen flex flex-col selection:bg-[#8dcdff]/30">
        <Header />
        <main className="flex-1 pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

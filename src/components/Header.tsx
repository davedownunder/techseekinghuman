"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { SearchIcon } from "@/components/Icons";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/podcasts", label: "Episodes" },
  { href: "/blog", label: "Blog" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#111128]/60 backdrop-blur-xl shadow-[0_24px_40px_rgba(17,17,40,0.06)]">
      <div className="flex justify-between items-center w-full px-8 py-4 max-w-7xl mx-auto">
        <Link href="/" className="flex flex-col items-center leading-none gap-0">
          <span className="text-white font-headline font-bold text-lg tracking-tight">TECH</span>
          <span className="text-[#8dcdff] font-headline font-bold text-[0.6rem] tracking-[0.35em]">&lt;SEEKING&gt;</span>
          <span className="text-white font-headline font-bold text-lg tracking-tight">HUMAN</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  isActive
                    ? "text-[#8dcdff] font-bold border-b-2 border-[#8dcdff] pb-1 font-label"
                    : "text-slate-400 font-medium hover:text-white transition-colors font-label"
                }
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-6">
          <button className="text-slate-400 hover:text-white transition-colors hidden md:block">
            <SearchIcon />
          </button>
          <a
            href="https://www.youtube.com/@techseekinghuman"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-[#8dcdff] to-[#03a9f4] text-[#00344f] px-6 py-2 rounded-full font-label font-bold text-sm tracking-wide transition-transform active:scale-95"
          >
            Subscribe
          </a>
          {/* Mobile toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="md:hidden px-8 pb-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-2 text-sm font-medium text-slate-400 hover:text-white"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

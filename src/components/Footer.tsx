import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0f0f1e] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-heading text-xl font-extrabold mb-4">
              TECH <span className="text-[#03a9f4]">&lt;SEEKING&gt;</span> HUMAN
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Long-form conversations with the world&apos;s leading technologists,
              entrepreneurs, and thinkers exploring the human side of AI, SaaS, and
              technology.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://www.youtube.com/@techseekinghuman"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#FF0000]/20 flex items-center justify-center transition-colors group"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5 text-gray-400 group-hover:text-[#FF0000]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a
                href="https://podcasts.apple.com/au/podcast/tech-seeking-human/id1534682009"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-purple-500/20 flex items-center justify-center transition-colors group"
                aria-label="Apple Podcasts"
              >
                <svg className="w-5 h-5 text-gray-400 group-hover:text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M5.34 0A5.328 5.328 0 000 5.34v13.32A5.328 5.328 0 005.34 24h13.32A5.328 5.328 0 0024 18.66V5.34A5.328 5.328 0 0018.66 0H5.34zm6.525 2.568c4.988 0 8.94 3.858 9.15 8.61a.48.48 0 01-.48.504h-.024a.48.48 0 01-.456-.456c-.186-4.29-3.774-7.722-8.19-7.722S3.87 6.936 3.684 11.226a.48.48 0 01-.48.456.48.48 0 01-.48-.504c.21-4.752 4.162-8.61 9.14-8.61zM12 7.2a4.8 4.8 0 014.8 4.8c0 1.421-.62 2.7-1.608 3.576a.48.48 0 01-.672-.048.48.48 0 01.048-.672A3.84 3.84 0 0015.84 12 3.84 3.84 0 0012 8.16 3.84 3.84 0 008.16 12c0 1.104.468 2.1 1.212 2.808a.48.48 0 01-.624.72A4.8 4.8 0 0112 7.2zm-.048 3.408a1.392 1.392 0 110 2.784 1.392 1.392 0 010-2.784zM10.32 15.12c.168-.048.336.024.432.168.24.36.612.6 1.044.648h.408c.432-.048.804-.288 1.044-.648a.48.48 0 01.864.408c-.156.312-.384.6-.66.816l-.564 3.504a1.14 1.14 0 01-1.128.984 1.14 1.14 0 01-1.128-.984l-.564-3.504a2.376 2.376 0 01-.66-.816.48.48 0 01.432-.72z"/>
                </svg>
              </a>
              <a
                href="https://open.spotify.com/show/0ycSRgl5JOmFCR0MvRqMjW"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#1DB954]/20 flex items-center justify-center transition-colors group"
                aria-label="Spotify"
              >
                <svg className="w-5 h-5 text-gray-400 group-hover:text-[#1DB954]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-gray-400 mb-4">
              Explore
            </h4>
            <nav className="space-y-3">
              <Link href="/podcasts" className="block text-sm text-gray-400 hover:text-[#03a9f4] transition-colors">
                All Episodes
              </Link>
              <Link href="/blog" className="block text-sm text-gray-400 hover:text-[#03a9f4] transition-colors">
                Blog
              </Link>
              <Link href="/about" className="block text-sm text-gray-400 hover:text-[#03a9f4] transition-colors">
                About
              </Link>
              <Link href="/contact" className="block text-sm text-gray-400 hover:text-[#03a9f4] transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Listen On */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-gray-400 mb-4">
              Listen On
            </h4>
            <nav className="space-y-3">
              <a href="https://www.youtube.com/@techseekinghuman" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-400 hover:text-[#03a9f4] transition-colors">
                YouTube
              </a>
              <a href="https://podcasts.apple.com/au/podcast/tech-seeking-human/id1534682009" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-400 hover:text-[#03a9f4] transition-colors">
                Apple Podcasts
              </a>
              <a href="https://open.spotify.com/show/0ycSRgl5JOmFCR0MvRqMjW" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-400 hover:text-[#03a9f4] transition-colors">
                Spotify
              </a>
            </nav>
          </div>
        </div>

        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Tech Seeking Human. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            Hosted by Dave Anderson
          </p>
        </div>
      </div>
    </footer>
  );
}

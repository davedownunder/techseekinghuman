import Link from "next/link";
import { YouTubeIcon, SpotifyIcon, ApplePodcastIcon } from "@/components/Icons";

export default function Footer() {
  return (
    <footer className="bg-[#0c0c22] w-full py-12 px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto border-t border-white/5 pt-12">
        <div className="space-y-6">
          <div className="text-lg font-bold text-white font-headline tracking-tighter">
            Tech Seeking Human
          </div>
          <p className="text-slate-500 text-sm font-body leading-relaxed max-w-xs">
            Exploring the convergence of humanity and technology through deep-dive
            conversations with the architects of our digital future.
          </p>
          <div className="flex gap-4">
            <a href="https://www.youtube.com/@techseekinghuman" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-[#FF0000] transition-colors" aria-label="YouTube">
              <YouTubeIcon className="w-6 h-6" />
            </a>
            <a href="https://open.spotify.com/show/0ycSRgl5JOmFCR0MvRqMjW" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-[#1DB954] transition-colors" aria-label="Spotify">
              <SpotifyIcon className="w-6 h-6" />
            </a>
            <a href="https://podcasts.apple.com/au/podcast/tech-seeking-human/id1571011755" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-purple-400 transition-colors" aria-label="Apple Podcasts">
              <ApplePodcastIcon className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-[10px] uppercase tracking-[0.2em] font-label font-bold text-[#8dcdff]">Discover</p>
            <ul className="space-y-3 text-sm font-label">
              <li><Link className="text-slate-500 hover:text-[#8dcdff] transition-colors" href="/podcasts">Latest Episodes</Link></li>
              <li><Link className="text-slate-500 hover:text-[#8dcdff] transition-colors" href="/blog">The Blog</Link></li>
              <li><Link className="text-slate-500 hover:text-[#8dcdff] transition-colors" href="/about">About</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <p className="text-[10px] uppercase tracking-[0.2em] font-label font-bold text-[#8dcdff]">Listen On</p>
            <ul className="space-y-3 text-sm font-label">
              <li><a className="text-slate-500 hover:text-[#8dcdff] transition-colors" href="https://www.youtube.com/@techseekinghuman" target="_blank" rel="noopener noreferrer">YouTube</a></li>
              <li><a className="text-slate-500 hover:text-[#8dcdff] transition-colors" href="https://podcasts.apple.com/au/podcast/tech-seeking-human/id1571011755" target="_blank" rel="noopener noreferrer">Apple Podcasts</a></li>
              <li><a className="text-slate-500 hover:text-[#8dcdff] transition-colors" href="https://open.spotify.com/show/0ycSRgl5JOmFCR0MvRqMjW" target="_blank" rel="noopener noreferrer">Spotify</a></li>
            </ul>
          </div>
        </div>

        <div className="space-y-6 md:text-right">
          <p className="text-[10px] uppercase tracking-[0.2em] font-label font-bold text-[#8dcdff]">Legal & Navigation</p>
          <div className="flex flex-wrap md:justify-end gap-x-6 gap-y-2">
            <Link className="text-slate-500 hover:text-[#8dcdff] text-xs font-label" href="/contact">Contact</Link>
            <Link className="text-slate-500 hover:text-[#8dcdff] text-xs font-label" href="/about">About</Link>
          </div>
          <p className="text-[10px] text-slate-600 font-label">
            &copy; {new Date().getFullYear()} Tech Seeking Human. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

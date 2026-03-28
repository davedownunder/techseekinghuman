import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a2e] text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-heading text-lg font-bold mb-4">
              TECH <span className="text-[#03a9f4]">&lt;SEEKING&gt;</span> HUMAN
            </h3>
            <p className="text-gray-400 text-sm">
              AI, SaaS and Technology and the impact it has on our work, our
              lives and society.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-4">Links</h4>
            <nav className="space-y-2">
              <Link href="/podcasts" className="block text-sm text-gray-400 hover:text-[#03a9f4]">
                Podcasts
              </Link>
              <Link href="/blog" className="block text-sm text-gray-400 hover:text-[#03a9f4]">
                Blog
              </Link>
              <Link href="/about" className="block text-sm text-gray-400 hover:text-[#03a9f4]">
                About
              </Link>
              <Link href="/contact" className="block text-sm text-gray-400 hover:text-[#03a9f4]">
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-4">Listen On</h4>
            <div className="space-y-2">
              <a
                href="https://www.youtube.com/@techseekinghuman"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-gray-400 hover:text-[#03a9f4]"
              >
                YouTube
              </a>
              <a
                href="https://podcasts.apple.com/au/podcast/tech-seeking-human/id1534682009"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-gray-400 hover:text-[#03a9f4]"
              >
                Apple Podcasts
              </a>
              <a
                href="https://open.spotify.com/show/0ycSRgl5JOmFCR0MvRqMjW"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-gray-400 hover:text-[#03a9f4]"
              >
                Spotify
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Tech Seeking Human. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

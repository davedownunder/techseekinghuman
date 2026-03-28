import { notFound } from "next/navigation";
import Link from "next/link";
import { PlayIcon, ShareIcon, ArrowRightIcon, ArrowLeftIcon, YouTubeIcon, SpotifyIcon, ApplePodcastIcon } from "@/components/Icons";
import {
  getPodcasts,
  getPostBySlug,
  formatDate,
  getFeaturedImageUrl,
  getExcerpt,
  stripHtml,
} from "@/lib/content";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return getPodcasts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return { title: post.title, description: stripHtml(post.content).slice(0, 160) };
}

function cleanWordPressHtml(html: string): string {
  return html
    .replace(/<!-- wp:.*?-->/g, "")
    .replace(/<!-- \/wp:.*?-->/g, "")
    .replace(/wp-block-[a-z-]+/g, "")
    .replace(/class="[\s]*"/g, "")
    .trim();
}

export default async function PodcastPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const imageUrl = getFeaturedImageUrl(post);
  const cleanContent = cleanWordPressHtml(post.content);

  // Get related episodes (same category or just recent)
  const allPodcasts = getPodcasts();
  const related = allPodcasts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <div className="pb-32">
      {/* Hero Section */}
      <section className="relative w-full min-h-[500px] flex items-center justify-center px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          {imageUrl && (
            <img src={imageUrl} className="w-full h-full object-cover opacity-30" alt="" />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-[#111128]/20 via-[#111128] to-[#111128]" />
        </div>
        <div className="relative z-10 max-w-5xl w-full pt-8">
          <div className="glass-panel p-8 md:p-12 rounded-[2rem] border border-[#3e4851]/15 flex flex-col md:flex-row gap-12 items-center">
            {imageUrl && (
              <div className="w-64 h-64 flex-shrink-0 rounded-2xl overflow-hidden shadow-2xl rotate-[-2deg] border-4 border-[#282840]">
                <img src={imageUrl} alt={post.title} className="w-full h-full object-cover" />
              </div>
            )}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                {post.categories[0] && (
                  <span className="bg-[#8dcdff]/10 text-[#8dcdff] text-xs font-bold px-3 py-1 rounded-full font-label">
                    {post.categories[0]}
                  </span>
                )}
                <span className="text-[#bec8d2] text-xs font-medium font-label uppercase">
                  {formatDate(post.date)}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold font-headline leading-tight mb-6 text-white tracking-tight">
                {post.title}
              </h1>
              <p className="text-[#bec8d2] text-sm mb-6 font-label">
                Hosted by <span className="text-white font-medium">Dave Anderson</span>
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.youtube.com/@techseekinghuman"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#8dcdff] text-[#00344f] px-8 py-4 rounded-full flex items-center gap-3 font-bold hover:scale-105 transition-transform"
                >
                  <PlayIcon className="w-5 h-5" />
                  Play Episode
                </a>
                <button className="bg-[#33324b]/50 text-white px-6 py-4 rounded-full flex items-center gap-3 font-medium hover:bg-[#33324b] transition-colors">
                  <ShareIcon className="w-5 h-5" />
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 mt-12">
        {/* Left: Show Notes */}
        <div className="lg:col-span-8 space-y-12">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold font-headline text-white border-l-4 border-[#8dcdff] pl-4">Show Notes</h2>
            <div
              className="prose prose-lg max-w-none prose-custom prose-invert prose-headings:font-headline prose-headings:font-bold prose-p:text-[#bec8d2] prose-p:leading-relaxed prose-a:text-[#8dcdff]"
              dangerouslySetInnerHTML={{ __html: cleanContent }}
            />
          </div>
        </div>

        {/* Right: Sidebar */}
        <aside className="lg:col-span-4 space-y-8">
          {/* Listen On */}
          <div className="bg-[#1d1d35] rounded-3xl p-6 border border-[#3e4851]/10">
            <h4 className="text-sm font-bold font-label uppercase tracking-widest text-[#8dcdff] mb-6">Listen On</h4>
            <div className="space-y-4">
              <a href="https://www.youtube.com/@techseekinghuman" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors">
                <YouTubeIcon className="w-5 h-5 text-[#bec8d2]" />
                <span className="text-white font-medium text-sm">YouTube</span>
              </a>
              <a href="https://podcasts.apple.com/au/podcast/tech-seeking-human/id1534682009" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors">
                <ApplePodcastIcon className="w-5 h-5 text-[#bec8d2]" />
                <span className="text-white font-medium text-sm">Apple Podcasts</span>
              </a>
              <a href="https://open.spotify.com/show/0ycSRgl5JOmFCR0MvRqMjW" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors">
                <SpotifyIcon className="w-5 h-5 text-[#bec8d2]" />
                <span className="text-white font-medium text-sm">Spotify</span>
              </a>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-[#03a9f4]/20 to-transparent rounded-3xl p-8 border border-[#8dcdff]/20">
            <h4 className="text-lg font-bold font-headline text-white mb-2">Join the conversation</h4>
            <p className="text-sm text-[#bec8d2] mb-6">Subscribe to get notified when new episodes drop.</p>
            <a
              href="https://www.youtube.com/@techseekinghuman"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-white text-[#111128] py-3 rounded-full font-bold text-sm text-center hover:scale-[0.98] transition-transform"
            >
              Subscribe
            </a>
          </div>
        </aside>
      </section>

      {/* Related Episodes */}
      <section className="max-w-7xl mx-auto px-8 mt-24">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold font-headline text-white mb-2">More Episodes</h2>
            <p className="text-[#bec8d2]">Continue your journey through the conversations.</p>
          </div>
          <Link href="/podcasts" className="text-[#8dcdff] font-bold flex items-center gap-2 hover:gap-3 transition-all">
            View Archive
            <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {related.map((ep) => {
            const img = getFeaturedImageUrl(ep);
            return (
              <Link key={ep.slug} href={`/podcasts/${ep.slug}`} className="group cursor-pointer">
                <div className="relative aspect-video rounded-2xl overflow-hidden mb-4">
                  {img ? (
                    <img src={img} alt={ep.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#1d1d35] to-[#0c0c22]" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111128]/80 to-transparent" />
                </div>
                <h3 className="text-lg font-bold font-headline text-white mb-2 group-hover:text-[#8dcdff] transition-colors">{ep.title}</h3>
                <p className="text-sm text-[#bec8d2] line-clamp-2">{getExcerpt(ep)}</p>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}

import { notFound } from "next/navigation";
import Link from "next/link";
import {
  getPodcasts,
  getPostBySlug,
  formatDate,
  getFeaturedImageUrl,
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
  return {
    title: post.title,
    description: post.excerpt || post.title,
  };
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

  return (
    <>
      {/* Hero header */}
      <section className="hero-gradient text-white pt-28 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/podcasts"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-[#03a9f4] transition-colors mb-6"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            All Episodes
          </Link>
          <p className="text-[#03a9f4] text-xs font-bold uppercase tracking-widest mb-3">
            Podcast Episode
          </p>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-black leading-tight">
            {post.title}
          </h1>
          <time className="text-gray-500 text-sm mt-4 block">
            {formatDate(post.date)}
          </time>

          {/* Listen On Buttons */}
          <div className="flex flex-wrap gap-3 mt-6">
            <a
              href="https://www.youtube.com/@techseekinghuman"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              YouTube
            </a>
            <a
              href="https://podcasts.apple.com/au/podcast/tech-seeking-human/id1534682009"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors"
            >
              Apple Podcasts
            </a>
            <a
              href="https://open.spotify.com/show/0ycSRgl5JOmFCR0MvRqMjW"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors"
            >
              Spotify
            </a>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {imageUrl && (
            <div className="mb-10 -mt-8 rounded-2xl overflow-hidden shadow-xl">
              <img
                src={imageUrl}
                alt={post.title}
                className="w-full object-cover"
              />
            </div>
          )}

          <div
            className="prose prose-lg max-w-none prose-custom prose-headings:font-heading prose-headings:font-bold prose-a:text-[#03a9f4] prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl"
            dangerouslySetInnerHTML={{ __html: cleanContent }}
          />

          {/* Back link */}
          <div className="mt-12 pt-8 border-t border-gray-100">
            <Link
              href="/podcasts"
              className="inline-flex items-center gap-2 text-[#03a9f4] font-semibold hover:gap-3 transition-all"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to All Episodes
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}

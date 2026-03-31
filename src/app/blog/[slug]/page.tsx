import { notFound } from "next/navigation";
import Link from "next/link";
import { getBlogPosts, getPostBySlug, formatDate, getFeaturedImageUrl, stripHtml } from "@/lib/content";
import { ArrowLeftIcon } from "@/components/Icons";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return getBlogPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return { title: post.title, description: stripHtml(post.content).slice(0, 160) };
}

function cleanWP(html: string): string {
  return html.replace(/<!-- wp:.*?-->/g, "").replace(/<!-- \/wp:.*?-->/g, "").replace(/wp-block-[a-z-]+/g, "").replace(/class="[\s]*"/g, "").trim();
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const imageUrl = getFeaturedImageUrl(post);

  return (
    <article className="pb-0">
      {/* Header — stays dark */}
      <section className="relative min-h-[300px] flex items-end px-8 overflow-hidden pt-8 pb-12">
        {imageUrl && (
          <>
            <img src={imageUrl} className="absolute inset-0 w-full h-full object-cover opacity-20" alt="" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#111128]/40 via-[#111128] to-[#111128]" />
          </>
        )}
        <div className="relative z-10 max-w-3xl mx-auto w-full">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-[#8dcdff] transition-colors mb-6">
            <ArrowLeftIcon className="w-4 h-4" />
            Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-4">
            {post.categories[0] && (
              <span className="bg-[#8dcdff]/10 text-[#8dcdff] text-xs font-bold px-3 py-1 rounded-full">{post.categories[0]}</span>
            )}
            <span className="text-[#bec8d2] text-xs">{formatDate(post.date)}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-white tracking-tight leading-tight">{post.title}</h1>
        </div>
      </section>

      {/* Content — white background */}
      <div className="bg-white" style={{ color: '#334155' }}>
        <div className="max-w-3xl mx-auto px-8 py-16">
          {imageUrl && (
            <div className="mb-10 rounded-2xl overflow-hidden shadow-xl">
              <img src={imageUrl} alt={post.title} className="w-full object-cover" />
            </div>
          )}
          <div
            className="prose prose-lg prose-slate max-w-none prose-headings:font-headline prose-headings:font-bold"
            style={{ color: '#475569' }}
            dangerouslySetInnerHTML={{ __html: cleanWP(post.content) }}
          />
          <div className="mt-12 pt-8 border-t border-slate-200">
            <Link href="/blog" className="inline-flex items-center gap-2 text-[#03a9f4] font-bold hover:gap-3 transition-all">
              <ArrowLeftIcon className="w-4 h-4" />
              Back to Blog
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

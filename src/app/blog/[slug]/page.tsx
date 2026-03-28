import { notFound } from "next/navigation";
import { getBlogPosts, getPostBySlug, formatDate, getFeaturedImageUrl } from "@/lib/content";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return getBlogPosts().map((post) => ({ slug: post.slug }));
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

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const imageUrl = getFeaturedImageUrl(post);

  return (
    <article className="py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-8">
          <span className="text-sm font-semibold text-[#03a9f4] uppercase tracking-wide">
            Blog
          </span>
          <h1 className="font-heading text-3xl md:text-4xl font-bold mt-2">
            {post.title}
          </h1>
          <time className="text-gray-500 text-sm mt-2 block">
            {formatDate(post.date)}
          </time>
        </header>

        {imageUrl && (
          <div className="mb-8 rounded-lg overflow-hidden">
            <img
              src={imageUrl}
              alt={post.title}
              className="w-full object-cover"
            />
          </div>
        )}

        <div
          className="prose prose-lg max-w-none prose-a:text-[#03a9f4] prose-headings:font-heading"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </article>
  );
}

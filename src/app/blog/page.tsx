import type { Metadata } from "next";
import Link from "next/link";
import { getBlogPosts, getFeaturedImageUrl, getExcerpt, formatDate } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog | Insights",
  description: "Thoughts on AI, technology, and the human side of innovation.",
};

export default function BlogPage() {
  const posts = getBlogPosts();
  const featured = posts[0];
  const rest = posts.slice(1);
  const featuredImg = featured ? getFeaturedImageUrl(featured) : null;

  return (
    <div className="pb-24 px-6 max-w-7xl mx-auto">
      {/* Hero Featured */}
      {featured && (
        <section className="relative mb-24">
          <div className="relative w-full h-[600px] overflow-hidden rounded-[2rem]">
            {featuredImg ? (
              <img src={featuredImg} alt={featured.title} className="w-full h-full object-cover grayscale-[0.2] brightness-50" />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-[#1d1d35] to-[#0c0c22]" />
            )}
            <div className="absolute inset-0 flex items-center p-8 md:p-16">
              <div className="max-w-3xl glass-card p-8 md:p-12 rounded-[2.5rem] border border-[#3e4851]/15">
                <div className="flex items-center gap-3 mb-6">
                  <span className="bg-[#8dcdff]/20 text-[#8dcdff] text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full border border-[#8dcdff]/20">Featured Insight</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-[1.1] tracking-tight font-headline">
                  {featured.title}
                </h1>
                <p className="text-lg text-slate-300 mb-8 leading-relaxed font-body">
                  {getExcerpt(featured, 200)}
                </p>
                <Link href={`/blog/${featured.slug}`} className="bg-[#8dcdff] text-[#00344f] px-8 py-3 rounded-full font-bold transition-all hover:bg-[#8dcdff]/90">
                  Read the Thought
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {rest.map((post, i) => {
          const img = getFeaturedImageUrl(post);
          const isWide = i === 0 || i === 3;
          return (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className={`${isWide ? "md:col-span-8" : "md:col-span-4"} group`}
            >
              <div className={`bg-[#191930] rounded-[2rem] overflow-hidden h-full flex ${isWide ? "flex-col md:flex-row" : "flex-col"}`}>
                <div className={`${isWide ? "md:w-1/2" : ""} ${isWide ? "" : "h-48"} overflow-hidden`}>
                  {img ? (
                    <img src={img} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  ) : (
                    <div className="w-full h-full min-h-[12rem] bg-gradient-to-br from-[#1d1d35] to-[#0c0c22]" />
                  )}
                </div>
                <div className={`${isWide ? "md:w-1/2" : ""} p-8 flex flex-col justify-between flex-grow`}>
                  <div>
                    <span className="text-[#8dcdff] text-xs font-bold tracking-widest uppercase mb-3 block">
                      {post.categories[0] || "Blog"}
                    </span>
                    <h3 className={`${isWide ? "text-2xl" : "text-xl"} font-bold text-white mb-4 leading-snug font-headline group-hover:text-[#8dcdff] transition-colors`}>
                      {post.title}
                    </h3>
                    <p className="text-slate-400 font-body text-sm leading-relaxed line-clamp-3">
                      {getExcerpt(post)}
                    </p>
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-[#8dcdff] font-bold text-sm">
                    Read More
                    <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </section>

      {/* Newsletter */}
      <section className="mt-24">
        <div className="relative rounded-[3rem] overflow-hidden p-12 md:p-20 text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1d1d35] to-[#0c0c22]" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-headline">Join the Human Network</h2>
            <p className="text-slate-400 mb-10 text-lg">Weekly insights on the intersection of tech and humanity.</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input className="flex-grow bg-[#33324b] border-none rounded-full px-6 py-4 text-[#e2dfff] focus:ring-2 focus:ring-[#8dcdff] placeholder:text-slate-500 font-label" placeholder="Your email address" type="email" />
              <button className="bg-[#8dcdff] text-[#00344f] font-bold px-8 py-4 rounded-full hover:bg-[#8dcdff]/90 transition-all">Join Us</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import Link from "next/link";
import PostCard from "@/components/PostCard";
import { getPodcasts, getBlogPosts } from "@/lib/content";

export default function Home() {
  const podcasts = getPodcasts().slice(0, 6);
  const blogPosts = getBlogPosts().slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="bg-[#1a1a2e] text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl md:text-6xl font-extrabold tracking-tight">
            TECH <span className="text-[#03a9f4]">&lt;SEEKING&gt;</span> HUMAN
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            AI, SaaS and Technology and the impact it has on our work, our lives
            and society.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://www.youtube.com/@techseekinghuman"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#03a9f4] hover:bg-[#0288d1] text-white font-semibold px-6 py-3 rounded-full transition-colors"
            >
              Watch on YouTube
            </a>
            <a
              href="https://podcasts.apple.com/au/podcast/tech-seeking-human/id1534682009"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-white hover:border-[#03a9f4] hover:text-[#03a9f4] text-white font-semibold px-6 py-3 rounded-full transition-colors"
            >
              Apple Podcasts
            </a>
          </div>
        </div>
      </section>

      {/* Latest Podcasts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-heading text-3xl font-bold">
              Latest <span className="text-[#03a9f4]">Episodes</span>
            </h2>
            <Link
              href="/podcasts"
              className="text-[#03a9f4] font-semibold hover:underline"
            >
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {podcasts.map((post) => (
              <PostCard key={post.slug} post={post} basePath="/podcasts" />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl font-bold mb-6">
              About <span className="text-[#03a9f4]">the Podcast</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Tech Seeking Human is a long-form interview podcast where host
              Dave Anderson sits down with world-leading technologists,
              entrepreneurs, athletes, and thinkers to explore the human side of
              technology. From the co-founder of Siri to Olympic athletes, each
              episode dives deep into how technology shapes our lives.
            </p>
            <Link
              href="/about"
              className="inline-block mt-6 bg-[#03a9f4] hover:bg-[#0288d1] text-white font-semibold px-6 py-3 rounded-full transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      {blogPosts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-heading text-3xl font-bold">
                From the <span className="text-[#03a9f4]">Blog</span>
              </h2>
              <Link
                href="/blog"
                className="text-[#03a9f4] font-semibold hover:underline"
              >
                View All →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {blogPosts.map((post) => (
                <PostCard key={post.slug} post={post} basePath="/blog" />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

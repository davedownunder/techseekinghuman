import type { Metadata } from "next";
import PostCard from "@/components/PostCard";
import { getPodcasts } from "@/lib/content";

export const metadata: Metadata = {
  title: "All Episodes",
  description: "Browse all Tech Seeking Human podcast episodes.",
};

export default function PodcastsPage() {
  const podcasts = getPodcasts();

  return (
    <>
      {/* Hero header */}
      <section className="hero-gradient text-white pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#03a9f4] text-sm font-bold uppercase tracking-widest mb-3">
            All Episodes
          </p>
          <h1 className="font-heading text-4xl md:text-5xl font-black">
            The Conversations
          </h1>
          <p className="text-gray-400 mt-3 max-w-xl">
            {podcasts.length} episodes featuring the world&apos;s leading minds in
            AI, technology, and innovation.
          </p>
        </div>
      </section>

      {/* Episodes grid */}
      <section className="py-16 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Latest as hero */}
          {podcasts[0] && (
            <div className="mb-10">
              <PostCard
                post={podcasts[0]}
                basePath="/podcasts"
                variant="hero"
              />
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {podcasts.slice(1).map((post) => (
              <PostCard key={post.slug} post={post} basePath="/podcasts" />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

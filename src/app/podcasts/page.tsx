import type { Metadata } from "next";
import PostCard from "@/components/PostCard";
import { getPodcasts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Podcasts",
  description: "All Tech Seeking Human podcast episodes.",
};

export default function PodcastsPage() {
  const podcasts = getPodcasts();

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading text-4xl font-bold mb-2">
          All <span className="text-[#03a9f4]">Episodes</span>
        </h1>
        <p className="text-gray-600 mb-10">
          {podcasts.length} episodes and counting.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {podcasts.map((post) => (
            <PostCard key={post.slug} post={post} basePath="/podcasts" />
          ))}
        </div>
      </div>
    </section>
  );
}

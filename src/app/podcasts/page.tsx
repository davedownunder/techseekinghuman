import type { Metadata } from "next";
import { getPodcasts } from "@/lib/content";
import EpisodeCard from "@/components/EpisodeCard";

export const metadata: Metadata = {
  title: "Episode Directory",
  description: "Browse all Tech Seeking Human podcast episodes.",
};

export default function PodcastsPage() {
  const podcasts = getPodcasts();
  const totalEpisodes = podcasts.length;

  return (
    <div className="pb-24 px-8 max-w-7xl mx-auto">
      {/* Header */}
      <header className="mb-16 pt-8">
        <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight mb-6 text-glow">
          Episode <span className="text-[#8dcdff]">Directory</span>
        </h1>
        <p className="font-body text-xl text-[#bec8d2] max-w-2xl leading-relaxed">
          Exploring the intersection of humanity and technology. {totalEpisodes} episodes of conversations with the architects of our digital future.
        </p>
      </header>

      {/* Episodes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {podcasts.map((post, i) => (
          <EpisodeCard key={post.slug} post={post} index={totalEpisodes - i} />
        ))}
      </div>
    </div>
  );
}

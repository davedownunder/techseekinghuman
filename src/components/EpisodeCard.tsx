import Link from "next/link";
import { WPPost, getExcerpt, formatDate, getFeaturedImageUrl } from "@/lib/content";
import { PlayIcon } from "@/components/Icons";

interface EpisodeCardProps {
  post: WPPost;
  index?: number;
}

export default function EpisodeCard({ post, index }: EpisodeCardProps) {
  const imageUrl = getFeaturedImageUrl(post);
  const excerpt = getExcerpt(post);

  return (
    <Link href={`/podcasts/${post.slug}`} className="glass-card rounded-xl overflow-hidden group flex flex-col">
      <div className="relative h-64 overflow-hidden">
        {imageUrl ? (
          <img src={imageUrl} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#1d1d35] to-[#0c0c22]" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111128] via-transparent to-transparent" />
        {post.categories[0] && (
          <div className="absolute top-4 left-4 bg-[#8dcdff]/20 backdrop-blur-md px-3 py-1 rounded-full border border-[#8dcdff]/30">
            <span className="text-[10px] font-bold text-[#8dcdff] uppercase tracking-widest font-label">
              {post.categories[0]}
            </span>
          </div>
        )}
      </div>
      <div className="p-8 flex flex-col flex-grow">
        <div className="flex items-center gap-3 text-[#bec8d2] text-xs mb-4 font-label">
          {index !== undefined && <span>EP. {index}</span>}
          {index !== undefined && <span className="w-1 h-1 rounded-full bg-[#3e4851]" />}
          <span>{formatDate(post.date)}</span>
        </div>
        <h3 className="font-headline text-2xl font-bold mb-4 leading-tight text-white group-hover:text-[#8dcdff] transition-colors">
          {post.title}
        </h3>
        <p className="text-[#bec8d2] text-sm mb-8 line-clamp-3 leading-relaxed">{excerpt}</p>
        <div className="mt-auto flex items-center justify-between">
          <span className="flex items-center gap-2 text-[#8dcdff] font-bold font-label text-sm">
            <span className="bg-[#8dcdff] text-[#00344f] p-2 rounded-full">
              <PlayIcon className="w-4 h-4" />
            </span>
            Listen Now
          </span>
        </div>
      </div>
    </Link>
  );
}

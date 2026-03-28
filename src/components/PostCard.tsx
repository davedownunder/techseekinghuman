import Link from "next/link";
import { WPPost, getExcerpt, formatDate, getFeaturedImageUrl } from "@/lib/content";

interface PostCardProps {
  post: WPPost;
  basePath: string;
}

export default function PostCard({ post, basePath }: PostCardProps) {
  const imageUrl = getFeaturedImageUrl(post);
  const excerpt = getExcerpt(post);

  return (
    <Link
      href={`${basePath}/${post.slug}`}
      className="group block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
    >
      {imageUrl && (
        <div className="aspect-video bg-gray-100 overflow-hidden">
          <img
            src={imageUrl}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>
      )}
      <div className="p-5">
        {post.categories.length > 0 && (
          <span className="text-xs font-semibold text-[#03a9f4] uppercase tracking-wide">
            {post.categories[0]}
          </span>
        )}
        <h3 className="font-heading font-bold text-lg mt-1 group-hover:text-[#03a9f4] transition-colors line-clamp-2">
          {post.title}
        </h3>
        <p className="text-gray-600 text-sm mt-2 line-clamp-3">{excerpt}</p>
        <time className="text-xs text-gray-400 mt-3 block">
          {formatDate(post.date)}
        </time>
      </div>
    </Link>
  );
}

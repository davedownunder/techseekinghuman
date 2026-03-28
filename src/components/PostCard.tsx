import Link from "next/link";
import { WPPost, getExcerpt, formatDate, getFeaturedImageUrl } from "@/lib/content";

interface PostCardProps {
  post: WPPost;
  basePath: string;
  variant?: "default" | "hero";
}

export default function PostCard({
  post,
  basePath,
  variant = "default",
}: PostCardProps) {
  const imageUrl = getFeaturedImageUrl(post);
  const excerpt = getExcerpt(post);

  if (variant === "hero") {
    return (
      <Link
        href={`${basePath}/${post.slug}`}
        className="group block bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 md:flex"
      >
        {imageUrl && (
          <div className="md:w-1/2 aspect-video md:aspect-auto overflow-hidden bg-gray-100">
            <img
              src={imageUrl}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
          </div>
        )}
        <div className="p-6 md:p-8 md:w-1/2 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-3">
            {post.categories.length > 0 && (
              <span className="text-xs font-bold text-[#03a9f4] bg-[#03a9f4]/10 px-3 py-1 rounded-full uppercase tracking-wide">
                {post.categories[0]}
              </span>
            )}
            <span className="text-xs text-gray-400">
              {formatDate(post.date)}
            </span>
          </div>
          <h3 className="font-heading text-2xl md:text-3xl font-extrabold group-hover:text-[#03a9f4] transition-colors leading-tight">
            {post.title}
          </h3>
          <p className="text-gray-600 mt-3 line-clamp-3 leading-relaxed">
            {excerpt}
          </p>
          <div className="mt-4 flex items-center gap-2 text-[#03a9f4] text-sm font-semibold">
            <span>Listen Now</span>
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`${basePath}/${post.slug}`}
      className="group block bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      {imageUrl && (
        <div className="aspect-video bg-gray-100 overflow-hidden relative">
          <img
            src={imageUrl}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      )}
      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          {post.categories.length > 0 && (
            <span className="text-[10px] font-bold text-[#03a9f4] bg-[#03a9f4]/10 px-2 py-0.5 rounded-full uppercase tracking-wider">
              {post.categories[0]}
            </span>
          )}
        </div>
        <h3 className="font-heading font-bold text-lg group-hover:text-[#03a9f4] transition-colors leading-snug line-clamp-2">
          {post.title}
        </h3>
        <p className="text-gray-500 text-sm mt-2 line-clamp-2 leading-relaxed">
          {excerpt}
        </p>
        <time className="text-xs text-gray-400 mt-3 block">
          {formatDate(post.date)}
        </time>
      </div>
    </Link>
  );
}

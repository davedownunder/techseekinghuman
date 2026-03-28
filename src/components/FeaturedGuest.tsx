import Link from "next/link";

interface FeaturedGuestProps {
  name: string;
  title: string;
  quote: string;
  image: string;
  slug: string;
}

export default function FeaturedGuest({
  name,
  title,
  quote,
  image,
  slug,
}: FeaturedGuestProps) {
  return (
    <Link
      href={`/podcasts/${slug}`}
      className="group relative block overflow-hidden rounded-2xl aspect-[3/4] md:aspect-[2/3]"
    >
      {/* Background image */}
      <img
        src={image}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-all duration-500 group-hover:from-black/80 group-hover:via-black/30" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
        <p className="text-[#03a9f4] text-xs font-bold uppercase tracking-widest mb-2">
          Featured Episode
        </p>
        <h3 className="font-heading text-2xl md:text-3xl font-extrabold text-white leading-tight">
          {name}
        </h3>
        <p className="text-gray-300 text-sm mt-1">{title}</p>
        <p className="text-gray-400 text-sm mt-3 italic line-clamp-2">
          &ldquo;{quote}&rdquo;
        </p>
        <div className="mt-4 flex items-center gap-2 text-[#03a9f4] text-sm font-semibold opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          <span>Listen Now</span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      </div>
    </Link>
  );
}

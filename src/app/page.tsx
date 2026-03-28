import Link from "next/link";
import PostCard from "@/components/PostCard";
import FeaturedGuest from "@/components/FeaturedGuest";
import { getPodcasts, getBlogPosts } from "@/lib/content";

const featuredGuests = [
  {
    name: "Max Tegmark",
    title: "MIT Professor & Future of Life Institute Founder",
    quote:
      "We have less than 50% probability of society surviving the next 50 years.",
    image:
      "https://www.techseekinghuman.ai/wp-content/uploads/2021/03/maxtegmark.jpg",
    slug: "episode-2-max-tegmark",
  },
  {
    name: "Adam Cheyer",
    title: "Co-founder of Siri",
    quote:
      "I turned down Steve Jobs. Then I changed my mind and it changed the world.",
    image:
      "https://www.techseekinghuman.ai/wp-content/uploads/2021/07/adam_cheyer.jpg",
    slug: "adam-cheyer-siri-co-founder-on-the-rise-of-mainstream-ai",
  },
  {
    name: "Hannah Fry",
    title: "BBC Presenter, Author & Mathematician",
    quote:
      "There just always seems to be a touch of class when Hannah is in the room.",
    image:
      "https://www.techseekinghuman.ai/wp-content/uploads/2021/06/cropped-Hannah_Theatre-seats2-copy-1-scaled-1.jpeg",
    slug: "hannah-fry-cookies-cows-and-the-future-of-ai",
  },
];

export default function Home() {
  const podcasts = getPodcasts();
  const latestPodcasts = podcasts.slice(0, 7);
  const blogPosts = getBlogPosts().slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="hero-gradient text-white min-h-[100vh] flex items-center justify-center relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />

        {/* Floating guest photo collage - hidden on mobile */}
        <div className="hidden lg:block absolute inset-0 z-0">
          {/* Top left - Max Tegmark */}
          <div className="absolute top-[15%] left-[8%] w-28 h-28 rounded-full overflow-hidden border-2 border-white/10 shadow-2xl opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-500 animate-float">
            <img src="https://www.techseekinghuman.ai/wp-content/uploads/2021/03/maxtegmark.jpg" alt="Max Tegmark" className="w-full h-full object-cover" />
          </div>
          {/* Top right - Hannah Fry */}
          <div className="absolute top-[12%] right-[10%] w-24 h-24 rounded-full overflow-hidden border-2 border-white/10 shadow-2xl opacity-50 hover:opacity-100 hover:scale-110 transition-all duration-500 animate-float animation-delay-200">
            <img src="https://www.techseekinghuman.ai/wp-content/uploads/2021/06/cropped-Hannah_Theatre-seats2-copy-1-scaled-1.jpeg" alt="Hannah Fry" className="w-full h-full object-cover" />
          </div>
          {/* Middle left - Adam Cheyer */}
          <div className="absolute top-[45%] left-[4%] w-20 h-20 rounded-full overflow-hidden border-2 border-[#03a9f4]/20 shadow-2xl opacity-50 hover:opacity-100 hover:scale-110 transition-all duration-500 animate-float animation-delay-300">
            <img src="https://www.techseekinghuman.ai/wp-content/uploads/2021/07/adam_cheyer.jpg" alt="Adam Cheyer" className="w-full h-full object-cover" />
          </div>
          {/* Middle right - Gene Kim */}
          <div className="absolute top-[40%] right-[5%] w-24 h-24 rounded-full overflow-hidden border-2 border-white/10 shadow-2xl opacity-40 hover:opacity-100 hover:scale-110 transition-all duration-500 animate-float animation-delay-100">
            <img src="https://www.techseekinghuman.ai/wp-content/uploads/2021/09/Gene-Kime.jpg" alt="Gene Kim" className="w-full h-full object-cover" />
          </div>
          {/* Bottom left - Cade Metz */}
          <div className="absolute bottom-[20%] left-[12%] w-20 h-20 rounded-full overflow-hidden border-2 border-white/10 shadow-2xl opacity-40 hover:opacity-100 hover:scale-110 transition-all duration-500 animate-float animation-delay-400">
            <img src="https://www.techseekinghuman.ai/wp-content/uploads/2021/09/14TECHUSING-1-superJumbo.jpeg" alt="Cade Metz" className="w-full h-full object-cover" />
          </div>
          {/* Bottom right - Beena Ammanath */}
          <div className="absolute bottom-[18%] right-[8%] w-28 h-28 rounded-full overflow-hidden border-2 border-[#03a9f4]/20 shadow-2xl opacity-50 hover:opacity-100 hover:scale-110 transition-all duration-500 animate-float animation-delay-200">
            <img src="https://www.techseekinghuman.ai/wp-content/uploads/2023/02/beena.jpg" alt="Beena Ammanath" className="w-full h-full object-cover" />
          </div>
          {/* Center left - Dave Anderson (host) */}
          <div className="absolute bottom-[35%] left-[18%] w-16 h-16 rounded-full overflow-hidden border-2 border-[#03a9f4]/30 shadow-2xl opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-500 animate-float animation-delay-300">
            <img src="https://www.techseekinghuman.ai/wp-content/uploads/2023/03/dave-1.png" alt="Dave Anderson" className="w-full h-full object-cover" />
          </div>
          {/* Top center-right - Jana Eggers */}
          <div className="absolute top-[22%] right-[25%] w-16 h-16 rounded-full overflow-hidden border-2 border-white/10 shadow-2xl opacity-35 hover:opacity-100 hover:scale-110 transition-all duration-500 animate-float animation-delay-100">
            <img src="https://www.techseekinghuman.ai/wp-content/uploads/2021/10/maxresdefault-e1633405949727.jpeg" alt="Jana Eggers" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 py-32">
          <div className="animate-fade-in-up">
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-black tracking-tight drop-shadow-2xl">
              TECH{" "}
              <span className="text-[#03a9f4] animate-glow">
                &lt;SEEKING&gt;
              </span>{" "}
              HUMAN
            </h1>
          </div>

          <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto animate-fade-in-up animation-delay-200 opacity-0">
            Long-form conversations exploring the human side of AI, technology,
            and innovation with the world&apos;s leading minds.
          </p>

          {/* Platform buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-4 animate-fade-in-up animation-delay-300 opacity-0">
            <a
              href="https://www.youtube.com/@techseekinghuman"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#03a9f4] hover:bg-[#0288d1] text-white font-semibold px-7 py-3.5 rounded-full transition-all hover:shadow-lg hover:shadow-[#03a9f4]/25"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              Watch on YouTube
            </a>
            <a
              href="https://podcasts.apple.com/au/podcast/tech-seeking-human/id1534682009"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-[#03a9f4] text-white hover:text-[#03a9f4] font-semibold px-7 py-3.5 rounded-full transition-all"
            >
              Apple Podcasts
            </a>
            <a
              href="https://open.spotify.com/show/0ycSRgl5JOmFCR0MvRqMjW"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-[#1DB954] text-white hover:text-[#1DB954] font-semibold px-7 py-3.5 rounded-full transition-all"
            >
              Spotify
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <svg className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#0f0f1e] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-heading font-black text-white">
                {podcasts.length}+
              </div>
              <div className="text-xs md:text-sm text-gray-500 mt-1 uppercase tracking-wider font-semibold">
                Episodes
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-heading font-black text-[#03a9f4]">
                A-List
              </div>
              <div className="text-xs md:text-sm text-gray-500 mt-1 uppercase tracking-wider font-semibold">
                Guests
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-heading font-black text-white">
                AI & Tech
              </div>
              <div className="text-xs md:text-sm text-gray-500 mt-1 uppercase tracking-wider font-semibold">
                Focus
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Guests */}
      <section className="mesh-gradient py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#03a9f4] text-sm font-bold uppercase tracking-widest mb-3">
              Featured Conversations
            </p>
            <h2 className="font-heading text-3xl md:text-5xl font-black text-white">
              World-Class Guests
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredGuests.map((guest) => (
              <FeaturedGuest key={guest.slug} {...guest} />
            ))}
          </div>
        </div>
      </section>

      {/* Latest Episodes */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-[#03a9f4] text-sm font-bold uppercase tracking-widest mb-2">
                New Episodes
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-black">
                Latest Episodes
              </h2>
            </div>
            <Link
              href="/podcasts"
              className="hidden md:inline-flex items-center gap-2 text-[#03a9f4] font-semibold hover:gap-3 transition-all"
            >
              View All
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>

          {/* Hero card for latest episode */}
          {latestPodcasts[0] && (
            <div className="mb-8">
              <PostCard
                post={latestPodcasts[0]}
                basePath="/podcasts"
                variant="hero"
              />
            </div>
          )}

          {/* Grid for remaining */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestPodcasts.slice(1).map((post) => (
              <PostCard key={post.slug} post={post} basePath="/podcasts" />
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link
              href="/podcasts"
              className="inline-flex items-center gap-2 text-[#03a9f4] font-semibold"
            >
              View All Episodes →
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[#03a9f4] text-sm font-bold uppercase tracking-widest mb-3">
              The Podcast
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-black mb-6">
              Stories Behind the Innovation
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Tech Seeking Human is where technology meets humanity. Host Dave
              Anderson sits down with the world&apos;s leading minds in AI,
              technology, and innovation for in-depth conversations that go beyond
              the headlines. From the co-founder of Siri to MIT professors, each
              episode reveals the human stories driving the future.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 mt-8 bg-[#0f0f1e] hover:bg-[#1a1a2e] text-white font-semibold px-7 py-3.5 rounded-full transition-colors"
            >
              About the Show
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      {blogPosts.length > 0 && (
        <section className="py-20 bg-[#f8fafc]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="text-[#03a9f4] text-sm font-bold uppercase tracking-widest mb-2">
                  Insights & Ideas
                </p>
                <h2 className="font-heading text-3xl md:text-4xl font-black">
                  From the Blog
                </h2>
              </div>
              <Link
                href="/blog"
                className="hidden md:inline-flex items-center gap-2 text-[#03a9f4] font-semibold hover:gap-3 transition-all"
              >
                View All
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
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

      {/* Newsletter CTA */}
      <section className="hero-gradient py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-black text-white mb-4">
            Never Miss an Episode
          </h2>
          <p className="text-gray-400 mb-8">
            Subscribe to get notified when new episodes drop. No spam, just great
            conversations.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 py-3.5 rounded-full bg-white/10 border border-white/10 text-white placeholder-gray-500 focus:border-[#03a9f4] focus:outline-none focus:ring-1 focus:ring-[#03a9f4] transition-colors"
            />
            <button className="bg-[#03a9f4] hover:bg-[#0288d1] text-white font-semibold px-7 py-3.5 rounded-full transition-all hover:shadow-lg hover:shadow-[#03a9f4]/25 whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

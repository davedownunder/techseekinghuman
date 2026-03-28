import Link from "next/link";
import { getPodcasts, getBlogPosts, getFeaturedImageUrl, getExcerpt, formatDate } from "@/lib/content";
import { PlayIcon, ArrowRightIcon, HeadphonesIcon, YouTubeIcon, SpotifyIcon, ApplePodcastIcon } from "@/components/Icons";

const featuredGuests = [
  {
    name: "Max Tegmark",
    title: "MIT Professor & Future of Life Institute",
    image: "https://www.techseekinghuman.ai/wp-content/uploads/2021/03/maxtegmark.jpg",
    slug: "episode-2-max-tegmark",
  },
  {
    name: "Adam Cheyer",
    title: "Co-founder of Siri",
    image: "https://www.techseekinghuman.ai/wp-content/uploads/2021/07/adam_cheyer.jpg",
    slug: "adam-cheyer-siri-co-founder-on-the-rise-of-mainstream-ai",
  },
  {
    name: "Hannah Fry",
    title: "BBC Presenter & Mathematician",
    image: "https://www.techseekinghuman.ai/wp-content/uploads/2021/06/cropped-Hannah_Theatre-seats2-copy-1-scaled-1.jpeg",
    slug: "hannah-fry-cookies-cows-and-the-future-of-ai",
  },
];

export default function Home() {
  const podcasts = getPodcasts();
  const latest = podcasts.slice(0, 5);
  const latestImg = latest[0] ? getFeaturedImageUrl(latest[0]) : null;

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[921px] flex items-center overflow-hidden px-8">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#8dcdff]/10 rounded-full blur-[120px]" />
          <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-[#03a9f4]/5 rounded-full blur-[100px]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#33324b]/50 border border-[#3e4851]/20 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#8dcdff] animate-pulse" />
              <span className="text-xs font-label uppercase tracking-widest text-[#8dcdff]">New Episode Live Now</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-headline font-bold leading-[0.9] text-white tracking-tighter">
              Where Tech <br />
              <span className="text-[#8dcdff] text-glow italic">Seeks</span> Humanity
            </h1>
            <p className="text-xl text-[#bec8d2] max-w-xl font-body leading-relaxed">
              Deep conversations with the world&apos;s leading minds in AI, technology, and innovation. Exploring how algorithms are changing us, and how we&apos;re fighting back to stay human.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href={latest[0] ? `/podcasts/${latest[0].slug}` : "/podcasts"}
                className="flex items-center gap-3 bg-gradient-to-r from-[#8dcdff] to-[#03a9f4] text-[#00344f] px-8 py-4 rounded-full font-headline font-bold text-lg shadow-lg shadow-[#8dcdff]/20 transition-all hover:scale-105"
              >
                <PlayIcon />
                Listen to Latest
              </Link>
              <Link
                href="/podcasts"
                className="flex items-center gap-3 glass-card border border-[#3e4851]/30 text-white px-8 py-4 rounded-full font-headline font-bold text-lg hover:bg-white/10 transition-all"
              >
                View All Episodes
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="aspect-square relative rounded-3xl overflow-hidden glass-card border border-[#3e4851]/20 p-4 transform rotate-3 shadow-2xl">
              {latestImg ? (
                <img
                  src={latestImg}
                  alt={latest[0]?.title}
                  className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
                />
              ) : (
                <div className="w-full h-full rounded-2xl bg-gradient-to-br from-[#1d1d35] to-[#0c0c22]" />
              )}
              {latest[0] && (
                <div className="absolute bottom-8 left-8 right-8 p-6 glass-card rounded-xl border border-white/10">
                  <p className="text-[#8dcdff] font-label text-xs uppercase tracking-widest mb-1">Latest Episode</p>
                  <h3 className="text-xl font-headline font-bold text-white">{latest[0].title}</h3>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Episodes (Bento Grid) */}
      <section className="max-w-7xl mx-auto px-8 py-32">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-white mb-4">Latest Dialogues</h2>
            <p className="text-[#bec8d2] max-w-md font-body">Carefully curated conversations with the architects of our digital future.</p>
          </div>
          <div className="hidden md:block">
            <Link href="/podcasts" className="text-[#8dcdff] font-headline font-bold flex items-center gap-2 group">
              Browse Full Archive
              <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-2" />
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Large Card - Latest Episode */}
          {latest[0] && (
            <Link href={`/podcasts/${latest[0].slug}`} className="md:col-span-2 group relative rounded-3xl overflow-hidden bg-[#191930] border border-[#3e4851]/10 aspect-[16/9]">
              {getFeaturedImageUrl(latest[0]) && (
                <img src={getFeaturedImageUrl(latest[0])!} alt={latest[0].title} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-1000" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c22] via-[#0c0c22]/40 to-transparent" />
              <div className="absolute bottom-0 left-0 p-10 space-y-4">
                <span className="px-3 py-1 bg-[#8dcdff]/20 text-[#8dcdff] rounded text-xs font-label font-bold uppercase tracking-widest">
                  {latest[0].categories[0] || "Deep Dive"}
                </span>
                <h3 className="text-4xl font-headline font-bold text-white max-w-lg leading-tight">{latest[0].title}</h3>
                <p className="text-[#bec8d2] max-w-sm line-clamp-2">{getExcerpt(latest[0])}</p>
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#111128] transform group-hover:scale-110 transition-transform">
                  <PlayIcon />
                </div>
              </div>
            </Link>
          )}

          {/* Small Cards */}
          {latest.slice(1, 5).map((post) => {
            const img = getFeaturedImageUrl(post);
            return (
              <Link key={post.slug} href={`/podcasts/${post.slug}`} className="group glass-card rounded-3xl overflow-hidden border border-[#3e4851]/10 flex flex-col p-6 space-y-6">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  {img ? (
                    <img src={img} alt={post.title} className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#1d1d35] to-[#0c0c22]" />
                  )}
                </div>
                <div className="flex-1 space-y-2">
                  <p className="text-xs font-label text-[#bec8d2]">{formatDate(post.date)}</p>
                  <h4 className="text-xl font-headline font-bold text-white group-hover:text-[#8dcdff] transition-colors">{post.title}</h4>
                </div>
                <span className="flex items-center gap-2 text-sm font-label font-bold uppercase tracking-wider text-[#8dcdff]">
                  Listen Now <HeadphonesIcon className="w-4 h-4" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* About Host Section */}
      <section className="bg-[#191930] py-32 px-8 overflow-hidden relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative z-10 rounded-3xl overflow-hidden grayscale contrast-125 border border-white/5">
              <img
                src="https://www.techseekinghuman.ai/wp-content/uploads/2023/03/dave-1.png"
                alt="Dave Anderson"
                className="w-full object-cover"
              />
            </div>
            <div className="absolute -top-10 -left-10 w-40 h-40 border-t-2 border-l-2 border-[#8dcdff]/30 z-0" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 border-b-2 border-r-2 border-[#8dcdff]/30 z-0" />
          </div>
          <div className="lg:col-span-7 space-y-8 order-1 lg:order-2">
            <h2 className="text-5xl font-headline font-bold text-white tracking-tight">
              The Human <br /><span className="text-[#8dcdff] italic">behind</span> the tech.
            </h2>
            <div className="space-y-6">
              <p className="text-xl text-[#e2dfff] font-body leading-relaxed">
                Dave Anderson is a tech evangelist, keynote speaker, musician, and storyteller. For over a decade, he&apos;s explored the collision between humanity and technology across stages, screens, and microphones.
              </p>
              <p className="text-[#bec8d2] font-body leading-relaxed">
                &ldquo;Tech Seeking Human&rdquo; was born from a simple observation: technology is changing us faster than we can understand it. Dave interviews the people trying to bridge that gap&mdash;engineers, scientists, athletes, and renegade thinkers.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-8 pt-4">
              {featuredGuests.map((guest) => (
                <Link key={guest.slug} href={`/podcasts/${guest.slug}`} className="group text-center">
                  <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-2 border-[#8dcdff]/20 mb-3 grayscale group-hover:grayscale-0 transition-all">
                    <img src={guest.image} alt={guest.name} className="w-full h-full object-cover" />
                  </div>
                  <p className="text-sm font-headline font-bold text-white">{guest.name}</p>
                  <p className="text-xs text-[#bec8d2]">{guest.title}</p>
                </Link>
              ))}
            </div>
            <div className="pt-6">
              <Link href="/about" className="flex items-center gap-3 font-headline font-bold text-white group underline decoration-[#8dcdff] underline-offset-8 decoration-2 hover:text-[#8dcdff] transition-colors">
                Read Dave&apos;s Story
                <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="max-w-7xl mx-auto px-8 py-32 text-center">
        <div className="glass-card rounded-[3rem] p-16 border border-white/5 space-y-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#8dcdff]/5 blur-[80px] -mr-32 -mt-32" />
          <h2 className="text-5xl font-headline font-bold text-white max-w-2xl mx-auto leading-tight">
            Stay human in an <span className="text-[#8dcdff] italic">automated</span> world.
          </h2>
          <p className="text-xl text-[#bec8d2] max-w-xl mx-auto font-body">
            Get weekly insights, reading lists, and episode outtakes delivered directly to your inbox.
          </p>
          <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
            <input
              className="flex-1 bg-[#33324b] border-none rounded-full px-6 py-4 text-white focus:ring-2 focus:ring-[#8dcdff]/50 placeholder:text-slate-500 font-label"
              placeholder="Your digital mail address"
              type="email"
            />
            <button className="bg-white text-[#111128] px-8 py-4 rounded-full font-headline font-bold hover:bg-[#8dcdff] transition-colors whitespace-nowrap">
              Join The Inner Circle
            </button>
          </div>
          <p className="text-xs font-label text-slate-500 uppercase tracking-widest">No algorithms. Just humans.</p>
        </div>
      </section>
    </>
  );
}

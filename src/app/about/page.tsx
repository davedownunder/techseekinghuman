import type { Metadata } from "next";
import { getPageBySlug } from "@/lib/content";

export const metadata: Metadata = {
  title: "About the Podcast",
  description: "Learn more about Tech Seeking Human and host Dave Anderson.",
};

export default function AboutPage() {
  const page = getPageBySlug("about-the-podcast");

  return (
    <div className="pb-24 px-8 max-w-3xl mx-auto pt-8">
      <h1 className="font-headline text-5xl font-bold text-white mb-4 tracking-tight">
        About <span className="text-[#8dcdff] italic">the Podcast</span>
      </h1>
      <div className="w-20 h-1 bg-[#8dcdff] rounded-full mb-12" />

      {page ? (
        <div
          className="prose prose-lg max-w-none prose-custom prose-invert prose-headings:font-headline prose-headings:font-bold prose-p:text-[#bec8d2] prose-p:leading-relaxed prose-a:text-[#8dcdff]"
          dangerouslySetInnerHTML={{ __html: page.content }}
        />
      ) : (
        <div className="space-y-6 text-[#bec8d2] text-lg leading-relaxed">
          <p>
            Tech Seeking Human is a long-form interview podcast exploring the intersection of
            technology and humanity. Host Dave Anderson speaks with world-leading technologists,
            entrepreneurs, athletes, and thinkers about the impact of AI, SaaS, and technology
            on our work, lives, and society.
          </p>
        </div>
      )}
    </div>
  );
}

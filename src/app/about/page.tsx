import type { Metadata } from "next";
import { getPageBySlug } from "@/lib/content";

export const metadata: Metadata = {
  title: "About the Podcast",
  description: "Learn more about Tech Seeking Human and host Dave Anderson.",
};

export default function AboutPage() {
  const page = getPageBySlug("about-the-podcast");

  return (
    <section className="py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading text-4xl font-bold mb-8">
          About <span className="text-[#03a9f4]">the Podcast</span>
        </h1>

        {page ? (
          <div
            className="prose prose-lg max-w-none prose-a:text-[#03a9f4] prose-headings:font-heading"
            dangerouslySetInnerHTML={{ __html: page.content }}
          />
        ) : (
          <div className="prose prose-lg max-w-none">
            <p>
              Tech Seeking Human is a long-form interview podcast exploring the
              intersection of technology and humanity. Host Dave Anderson speaks
              with world-leading technologists, entrepreneurs, athletes, and
              thinkers about the impact of AI, SaaS, and technology on our work,
              lives, and society.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

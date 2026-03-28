import fs from "fs";
import path from "path";

export interface WPPost {
  title: string;
  slug: string;
  date: string;
  content: string;
  excerpt: string;
  categories: string[];
  tags: string[];
  featured_image_id: string;
  type: string;
}

export interface WPContent {
  site: string;
  pages: WPPost[];
  posts: WPPost[];
  attachments: Record<string, string>;
  nav_items: Array<{
    title: string;
    url: string;
    type: string;
    object: string;
    object_id: string;
    parent: string;
  }>;
  stats: { pages: number; posts: number; attachments: number };
}

let _content: WPContent | null = null;

export function getContent(): WPContent {
  if (_content) return _content;
  const filePath = path.join(process.cwd(), "wp-content.json");
  const raw = fs.readFileSync(filePath, "utf-8");
  _content = JSON.parse(raw);
  return _content!;
}

export function getAllPosts(category?: string): WPPost[] {
  const { posts } = getContent();
  const filtered = category
    ? posts.filter((p) => p.categories.includes(category))
    : posts;
  return filtered.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): WPPost | undefined {
  const { posts, pages } = getContent();
  return [...posts, ...pages].find((p) => p.slug === slug);
}

export function getPageBySlug(slug: string): WPPost | undefined {
  const { pages } = getContent();
  return pages.find((p) => p.slug === slug);
}

export function getFeaturedImageUrl(post: WPPost): string | null {
  if (!post.featured_image_id) return null;
  const { attachments } = getContent();
  return attachments[post.featured_image_id] || null;
}

export function getPodcasts(): WPPost[] {
  return getAllPosts("Podcasts");
}

export function getBlogPosts(): WPPost[] {
  return getAllPosts("Blog");
}

export function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "").trim();
}

export function getExcerpt(post: WPPost, maxLength = 160): string {
  const text = post.excerpt || stripHtml(post.content);
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
}

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-AU", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export interface EpisodeLinks {
  youtube: string | null;
  spotify: string | null;
  apple: string | null;
}

const SHOW_YOUTUBE = "https://www.youtube.com/@techseekinghuman";
const SHOW_SPOTIFY = "https://open.spotify.com/show/0ycSRgl5JOmFCR0MvRqMjW";
const SHOW_APPLE = "https://podcasts.apple.com/au/podcast/tech-seeking-human/id1534682009";

export function getEpisodeLinks(post: WPPost): EpisodeLinks {
  const content = post.content;

  const ytMatch = content.match(
    /https?:\/\/(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)[^\s"<>&]+/
  );
  const spotifyMatch = content.match(
    /https?:\/\/open\.spotify\.com\/episode\/[^\s"<>&]+/
  );
  const appleMatch = content.match(
    /https?:\/\/podcasts\.apple\.com\/[^\s"<>&]+/
  );

  return {
    youtube: ytMatch ? ytMatch[0] : SHOW_YOUTUBE,
    spotify: spotifyMatch ? spotifyMatch[0] : SHOW_SPOTIFY,
    apple: appleMatch ? appleMatch[0] : SHOW_APPLE,
  };
}

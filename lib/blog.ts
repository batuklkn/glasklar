import fs from "node:fs/promises";
import path from "node:path";

import matter from "gray-matter";

import { BlogFrontmatter, BlogPost } from "@/lib/types";

const BLOG_DIRECTORY = path.join(process.cwd(), "content", "blog");

function assertFrontmatter(frontmatter: Record<string, unknown>): BlogFrontmatter {
  return {
    title: String(frontmatter.title ?? ""),
    description: String(frontmatter.description ?? ""),
    category: (frontmatter.category as BlogFrontmatter["category"]) ?? "Tipps & Tricks",
    date: String(frontmatter.date ?? ""),
    readingTime: String(frontmatter.readingTime ?? ""),
    image: String(frontmatter.image ?? "/images/blog-default.svg"),
  };
}

export async function getPostSlugs() {
  const entries = await fs.readdir(BLOG_DIRECTORY);
  return entries
    .filter((entry) => entry.endsWith(".mdx"))
    .map((entry) => entry.replace(/\.mdx$/, ""));
}

export async function getAllPosts() {
  const slugs = await getPostSlugs();

  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const post = await getPostBySlug(slug);
      if (!post) {
        throw new Error(`Missing post for slug ${slug}`);
      }
      return post;
    }),
  );

  return posts.sort((a, b) => +new Date(b.date) - +new Date(a.date));
}

export async function getLatestPosts(limit = 3) {
  const posts = await getAllPosts();
  return posts.slice(0, limit);
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const filePath = path.join(BLOG_DIRECTORY, `${slug}.mdx`);

  try {
    const raw = await fs.readFile(filePath, "utf8");
    const parsed = matter(raw);

    return {
      slug,
      content: parsed.content,
      ...assertFrontmatter(parsed.data),
    };
  } catch {
    return null;
  }
}

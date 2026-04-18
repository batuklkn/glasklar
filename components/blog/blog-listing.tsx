"use client";

import { useMemo, useState } from "react";

import { BlogPost } from "@/lib/types";
import { BlogCard } from "@/components/blog/blog-card";

export function BlogListing({ posts }: { posts: BlogPost[] }) {
  const categories = useMemo(() => {
    const unique = new Set(posts.map((post) => post.category));
    return ["Alle", ...Array.from(unique)];
  }, [posts]);

  const [activeCategory, setActiveCategory] = useState("Alle");

  const filteredPosts = useMemo(() => {
    if (activeCategory === "Alle") return posts;
    return posts.filter((post) => post.category === activeCategory);
  }, [activeCategory, posts]);

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
              category === activeCategory
                ? "bg-navy text-white"
                : "border border-slate-200 bg-white text-slate-700 hover:border-slate-300"
            }`}
            key={category}
            onClick={() => setActiveCategory(category)}
            type="button"
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredPosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";

import { BlogPost } from "@/lib/types";
import { formatDate } from "@/lib/utils";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="overflow-hidden rounded-card border border-slate-200 bg-white shadow-card">
      <Image alt={post.title} className="h-52 w-full object-cover" height={260} src={post.image} width={460} />
      <div className="p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan">{post.category}</p>
        <h2 className="mt-3 font-heading text-xl font-bold text-navy">{post.title}</h2>
        <p className="mt-3 text-slate-600">{post.description}</p>
        <div className="mt-4 flex items-center justify-between text-sm text-slate-500">
          <span>{formatDate(post.date)}</span>
          <span>{post.readingTime}</span>
        </div>
        <Link className="mt-5 inline-flex font-semibold text-navy hover:text-cyan" href={`/blog/${post.slug}`}>
          Artikel lesen
        </Link>
      </div>
    </article>
  );
}

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { BlogPost } from "@/lib/types";
import { formatDate } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function BlogPreview({ posts }: { posts: BlogPost[] }) {
  return (
    <section className="bg-white py-section">
      <Container>
        <SectionHeading title="Ratgeber & Tipps" />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post) => (
            <article className="overflow-hidden rounded-card border border-slate-200 bg-white shadow-card" key={post.slug}>
              <Image alt={post.title} className="h-48 w-full object-cover" height={260} src={post.image} width={460} />
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan">{post.category}</p>
                <h3 className="mt-3 font-heading text-xl font-bold text-navy">{post.title}</h3>
                <p className="mt-3 text-sm text-slate-500">{formatDate(post.date)}</p>
                <Link
                  className="mt-5 inline-flex items-center gap-2 font-semibold text-navy hover:text-cyan"
                  href={`/blog/${post.slug}`}
                >
                  Artikel lesen
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link className="inline-flex items-center gap-2 font-semibold text-navy hover:text-cyan" href="/blog">
            Alle Artikel lesen
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}

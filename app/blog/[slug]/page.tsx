import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";

import { BlogCard } from "@/components/blog/blog-card";
import { mdxComponents } from "@/components/blog/mdx-components";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { getAllPosts, getPostBySlug, getPostSlugs } from "@/lib/blog";
import { createMetadata } from "@/lib/metadata";
import { formatDate } from "@/lib/utils";

export const revalidate = 3600;

export async function generateStaticParams() {
  const slugs = await getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return createMetadata({
      title: "Artikel nicht gefunden",
      description: "Der angeforderte Artikel ist nicht verfuegbar.",
      path: "/blog",
    });
  }

  return createMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
  });
}

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const allPosts = await getAllPosts();
  const relatedPosts = allPosts.filter((entry) => entry.slug !== post.slug).slice(0, 3);

  return (
    <>
      <section className="bg-navy pb-16 pt-40 text-white">
        <Container className="max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan">{post.category}</p>
          <h1 className="mt-4 font-heading text-4xl font-extrabold sm:text-5xl">{post.title}</h1>
          <p className="mt-5 text-lg text-white/85">{post.description}</p>
          <p className="mt-5 text-sm text-white/70">
            {formatDate(post.date)} · {post.readingTime}
          </p>
        </Container>
      </section>

      <section className="bg-white py-section">
        <Container className="max-w-4xl">
          <article className="prose prose-slate max-w-none">
            <MDXRemote components={mdxComponents} source={post.content} />
          </article>

          <div className="mt-10 rounded-card bg-amber p-8">
            <h2 className="font-heading text-3xl font-extrabold text-slate-950">Kostenloses Angebot anfordern</h2>
            <p className="mt-3 text-slate-900/85">Wir melden uns innerhalb von 24 Stunden bei Ihnen zurück.</p>
            <Button asChild className="mt-5" variant="navy">
              <Link href="/kontakt">Jetzt Kontakt aufnehmen</Link>
            </Button>
          </div>
        </Container>
      </section>

      <section className="bg-gray-light py-section">
        <Container>
          <h2 className="font-heading text-3xl font-extrabold text-navy">Weitere Artikel</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {relatedPosts.map((entry) => (
              <BlogCard key={entry.slug} post={entry} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

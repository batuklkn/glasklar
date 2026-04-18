import { BlogListing } from "@/components/blog/blog-listing";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { getAllPosts } from "@/lib/blog";
import { createMetadata } from "@/lib/metadata";

export const revalidate = 3600;

export const metadata = createMetadata({
  title: "Blog",
  description:
    "Ratgeber und Tipps rund um Unterhaltsreinigung, Glasreinigung, Bauendreinigung und Hausmeisterservice in Wertheim.",
  path: "/blog",
});

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <>
      <PageHero
        description="Praxisnahes Wissen für Unternehmen und Privatkunden - mit lokalem Fokus auf Wertheim und Umgebung."
        eyebrow="Blog"
        title="Ratgeber & Tipps"
      />

      <section className="bg-gray-light py-section">
        <Container>
          <BlogListing posts={posts} />
        </Container>
      </section>
    </>
  );
}

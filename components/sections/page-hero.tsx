import { Container } from "@/components/ui/container";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="bg-navy pb-16 pt-40 text-white">
      <Container>
        {eyebrow ? <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan">{eyebrow}</p> : null}
        <h1 className="mt-4 max-w-4xl font-heading text-4xl font-extrabold sm:text-5xl">{title}</h1>
        <p className="mt-5 max-w-3xl text-lg text-white/85">{description}</p>
      </Container>
    </section>
  );
}

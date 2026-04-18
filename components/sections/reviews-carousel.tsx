"use client";

import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

import { reviews } from "@/content/reviews";
import { siteConfig } from "@/lib/site";
import { formatDate } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

function visibleCardsForWidth(width: number) {
  if (width >= 1200) return 3;
  return 1;
}

export function ReviewsCarousel() {
  const [active, setActive] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1);

  useEffect(() => {
    const update = () => setVisibleCards(visibleCardsForWidth(window.innerWidth));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = useMemo(() => Math.max(reviews.length - visibleCards, 0), [visibleCards]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);

    return () => window.clearInterval(timer);
  }, [maxIndex]);

  const prevSlide = () => setActive((prev) => (prev <= 0 ? maxIndex : prev - 1));
  const nextSlide = () => setActive((prev) => (prev >= maxIndex ? 0 : prev + 1));

  return (
    <section className="bg-white py-section">
      <Container>
        <SectionHeading
          description="Echte Bewertungen von Unternehmen und Privatkunden aus der Region."
          title="Was unsere Kunden sagen"
        />

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${active * (100 / visibleCards)}%)` }}
          >
            {reviews.map((review) => (
              <article className="w-full shrink-0 px-2" key={review.id} style={{ width: `${100 / visibleCards}%` }}>
                <div className="h-full rounded-card border border-slate-200 border-l-4 border-l-cyan bg-white p-6 shadow-card">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex text-amber">
                      {Array.from({ length: review.rating }).map((_, index) => (
                        <Star className="h-4 w-4 fill-current" key={`${review.id}-${index}`} />
                      ))}
                    </div>
                    <span className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-500">
                      Google
                    </span>
                  </div>
                  <p className="text-slate-700">&bdquo;{review.quote}&ldquo;</p>
                  <div className="mt-6 border-t border-slate-100 pt-4">
                    <p className="font-semibold text-navy">{review.name}</p>
                    <p className="text-sm text-slate-500">{formatDate(review.date)}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div className="flex gap-2">
              <button
                aria-label="Vorherige Bewertung"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-slate-700"
                onClick={prevSlide}
                type="button"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                aria-label="Nächste Bewertung"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-slate-700"
                onClick={nextSlide}
                type="button"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
            <Button asChild size="sm" variant="ghost">
              <a href={siteConfig.googleReviewsUrl} rel="noreferrer" target="_blank">
                Alle Bewertungen auf Google ansehen
              </a>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

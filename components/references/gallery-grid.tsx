"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

import { referenceProjects } from "@/content/references";
import { services } from "@/content/services";

const categories = [
  { label: "Alle", value: "all" },
  ...services.map((service) => ({ label: service.name, value: service.slug })),
] as const;

export function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const projects = useMemo(() => {
    if (activeCategory === "all") return referenceProjects;
    return referenceProjects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="py-section">
      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
              activeCategory === category.value
                ? "bg-navy text-white"
                : "border border-slate-200 bg-white text-slate-600 hover:border-slate-300"
            }`}
            key={category.value}
            onClick={() => setActiveCategory(category.value)}
            type="button"
          >
            {category.label}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <article className="overflow-hidden rounded-card border border-slate-200 bg-white shadow-card" key={project.id}>
            <Image alt={project.title} className="h-56 w-full object-cover" height={320} src={project.image} width={460} />
            <div className="p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan">
                {services.find((service) => service.slug === project.category)?.name}
              </p>
              <h3 className="mt-3 font-heading text-xl font-bold text-navy">{project.title}</h3>
              <p className="mt-3 text-slate-600">{project.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

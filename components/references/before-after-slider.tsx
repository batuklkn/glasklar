"use client";

import Image from "next/image";
import { useState } from "react";

import { beforeAfterItems } from "@/content/references";

export function BeforeAfterSlider() {
  const [positions, setPositions] = useState<Record<string, number>>(
    Object.fromEntries(beforeAfterItems.map((item) => [item.id, 50])),
  );

  return (
    <section className="space-y-6">
      {beforeAfterItems.map((item) => {
        const position = positions[item.id] ?? 50;

        return (
          <article className="rounded-card border border-slate-200 bg-white p-5 shadow-card" key={item.id}>
            <h3 className="font-heading text-2xl font-bold text-navy">{item.title}</h3>
            <p className="mt-2 text-slate-600">{item.description}</p>

            <div className="relative mt-5 h-72 overflow-hidden rounded-xl border border-slate-200">
              <Image alt={`${item.title} - vorher`} className="h-full w-full object-cover" fill src={item.beforeImage} />
              <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
                <Image alt={`${item.title} - nachher`} className="h-full w-full object-cover" fill src={item.afterImage} />
              </div>
              <div className="pointer-events-none absolute inset-y-0" style={{ left: `${position}%` }}>
                <div className="h-full w-0.5 -translate-x-1/2 bg-white shadow-[0_0_0_2px_rgba(0,0,0,0.2)]" />
              </div>
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor={`${item.id}-range`}>
                Vorher / Nachher verschieben
              </label>
              <input
                className="w-full"
                id={`${item.id}-range`}
                max={100}
                min={0}
                onChange={(event) =>
                  setPositions((prev) => ({
                    ...prev,
                    [item.id]: Number(event.target.value),
                  }))
                }
                type="range"
                value={position}
              />
            </div>
          </article>
        );
      })}
    </section>
  );
}

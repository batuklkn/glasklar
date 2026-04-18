import { Container } from "@/components/ui/container";

const metrics = [
  { value: "10+", label: "Jahre Erfahrung" },
  { value: "4,9", label: "Google Rating" },
  { value: "200+", label: "Zufriedene Kunden" },
  { value: "6", label: "Leistungsbereiche" },
];

export function TrustBar() {
  return (
    <section className="border-y border-slate-200 bg-white">
      <Container>
        <div className="grid gap-4 py-10 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <article className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm" key={metric.label}>
              <div className="mb-4 h-1 w-16 rounded-full bg-cyan" />
              <p className="font-heading text-4xl font-extrabold text-navy">{metric.value}</p>
              <p className="mt-2 text-sm font-medium text-slate-600">{metric.label}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

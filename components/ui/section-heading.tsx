import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={cn("mb-12", align === "center" ? "text-center" : "text-left")}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan">{eyebrow}</p>
      ) : null}
      <h2 className="font-heading text-3xl font-extrabold text-navy sm:text-4xl">{title}</h2>
      {description ? <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600">{description}</p> : null}
    </div>
  );
}

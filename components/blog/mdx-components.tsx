import Link from "next/link";

import { cn } from "@/lib/utils";

const headingBase = "mt-10 mb-4 font-heading text-navy";

export const mdxComponents = {
  h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className={cn(headingBase, "text-3xl font-extrabold", className)} {...props} />
  ),
  h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className={cn(headingBase, "text-2xl font-bold", className)} {...props} />
  ),
  p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className={cn("mb-5 text-lg leading-relaxed text-slate-700", className)} {...props} />
  ),
  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className={cn("mb-6 list-disc space-y-2 pl-6 text-slate-700", className)} {...props} />
  ),
  ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className={cn("mb-6 list-decimal space-y-2 pl-6 text-slate-700", className)} {...props} />
  ),
  a: ({ className, href = "#", ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <Link
      className={cn("font-semibold text-cyan underline-offset-4 hover:underline", className)}
      href={href}
      {...props}
    />
  ),
  blockquote: ({ className, ...props }: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className={cn(
        "mb-6 border-l-4 border-cyan bg-cyan/5 px-5 py-4 text-slate-700 italic",
        className,
      )}
      {...props}
    />
  ),
};

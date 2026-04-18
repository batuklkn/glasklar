export type ServiceSlug =
  | "unterhaltsreinigung"
  | "glasreinigung"
  | "bauendreinigung"
  | "grundreinigung"
  | "sonderreinigung"
  | "hausmeisterservice";

export type Service = {
  slug: ServiceSlug;
  name: string;
  shortDescription: string;
  heroPromise: string;
  icon: string;
  bullets: string[];
  definition: string;
  details: string[];
  benefits: {
    title: string;
    icon: string;
    text: string;
  }[];
  targetGroups: string[];
  process: string[];
  related: ServiceSlug[];
  image: string;
  seoTitle: string;
  seoDescription: string;
};

export type Review = {
  id: string;
  name: string;
  date: string;
  rating: number;
  quote: string;
};

export type ReferenceProject = {
  id: string;
  title: string;
  category: ServiceSlug;
  description: string;
  image: string;
};

export type BeforeAfterItem = {
  id: string;
  title: string;
  description: string;
  beforeImage: string;
  afterImage: string;
};

export type BlogFrontmatter = {
  title: string;
  description: string;
  category:
    | "Unterhaltsreinigung"
    | "Glasreinigung"
    | "Bauendreinigung"
    | "Grundreinigung"
    | "Tipps & Tricks"
    | "Hausmeisterservice";
  date: string;
  readingTime: string;
  image: string;
};

export type BlogPost = BlogFrontmatter & {
  slug: string;
  content: string;
};

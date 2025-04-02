export type ContentItem = {
  type: "lead" | "paragraph" | "heading" | "quote" | "list" | "image";
  content?: string;
  items?: string[];
  src?: string;
  alt?: string;
  caption?: string;
};

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

export type BeforeAfter = {
  before: {
    image: string;
    title: string;
    items: string[];
  };
  after: {
    image: string;
    title: string;
    items: string[];
  };
};

export type Stat = {
  label: string;
  value: string;
};

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  description?: string;
  image: string | any; // Allow for imported images or strings
  stats?: Stat[];
  services: string[];
  testimonial?: Testimonial;
  relatedProjects: string[];
  beforeAfter?: BeforeAfter;
  fullContent?: ContentItem[];
};

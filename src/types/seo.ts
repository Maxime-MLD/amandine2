export type OpenGraphType = "website" | "article" | "profile";

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface PageSeoProps {
  title?: string;
  description?: string;
  canonical?: string;
  image?: string;
  imageAlt?: string;
  noindex?: boolean;
  nofollow?: boolean;
  type?: OpenGraphType;
  breadcrumbs?: readonly BreadcrumbItem[];
}

export type JsonLdPrimitive = string | number | boolean | null;

export type JsonLdValue =
  | JsonLdPrimitive
  | JsonLdObject
  | readonly JsonLdValue[];

export interface JsonLdObject {
  readonly [key: string]: JsonLdValue | undefined;
}

export interface ResolvedSeo {
  title: string;
  description: string;
  canonical: string;
  image: string;
  openGraphImageAlt: string;
  twitterImage: string;
  twitterImageAlt: string;
  type: OpenGraphType;
  robots: string;
  googleBot: string;
}

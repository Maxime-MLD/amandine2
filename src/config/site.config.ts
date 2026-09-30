import { businessConfig } from "./business.config";

const CANONICAL_URL = "https://www.amandine-gauthier.fr";
const THEME_COLOR = "#171717";
const MANIFEST_BACKGROUND_COLOR = "#fafafa";
const SITE_LANGUAGE = "fr";
const SITE_LOCALE = "fr_FR";

export interface SiteConfig {
  canonicalUrl: string;
  name: string;
  language: string;
  locale: string;
  themeColor: string;
  author: string;
  logo: string;
  icons: {
    favicon: string;
    faviconPng: string;
    appleTouchIcon: string;
  };
  socialImages: {
    openGraph: string;
    openGraphAlt: string;
    width: number;
    height: number;
    twitter: string;
    twitterAlt: string;
  };
  manifest: {
    path: string;
    name: string;
    shortName: string;
    description: string;
    startUrl: string;
    scope: string;
    display: "browser" | "standalone" | "minimal-ui" | "fullscreen";
    backgroundColor: string;
    themeColor: string;
    icons: readonly {
      src: string;
      sizes: string;
      type: string;
      purpose?: "any" | "maskable" | "monochrome";
    }[];
  };
}

export const siteConfig = {
  canonicalUrl: CANONICAL_URL,
  name: businessConfig.tradeName,
  language: SITE_LANGUAGE,
  locale: SITE_LOCALE,
  themeColor: THEME_COLOR,
  author: businessConfig.legalName,
  logo: "/icons/ag-logo.svg",
  icons: {
    favicon: "/icons/ag-logo.svg?v=round-1",
    faviconPng: "/icons/ag-logo-32.png?v=round-1",
    appleTouchIcon: "/icons/ag-logo-180.png?v=round-1",
  },
  socialImages: {
    openGraph: "/social/og.webp",
    openGraphAlt: "Amandine Gauthier, infirmière à domicile à Montagny.",
    width: 2400,
    height: 1260,
    twitter: "/social/og.webp",
    twitterAlt: "Amandine Gauthier, infirmière à domicile à Montagny.",
  },
  manifest: {
    path: "/manifest.webmanifest",
    name: businessConfig.tradeName,
    shortName: businessConfig.tradeName,
    description: businessConfig.shortDescription,
    startUrl: "/",
    scope: "/",
    display: "standalone",
    backgroundColor: MANIFEST_BACKGROUND_COLOR,
    themeColor: THEME_COLOR,
    icons: [
      {
        src: "/icons/ag-logo-192.png?v=round-1",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/ag-logo-512.png?v=round-1",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  },
} as const satisfies SiteConfig;

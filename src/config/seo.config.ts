import type { TodoValue } from "../types/business.config";
import { businessConfig } from "./business.config";
import { siteConfig } from "./site.config";

export type SchemaOrgType =
  | "LocalBusiness"
  | "ProfessionalService"
  | "HomeAndConstructionBusiness"
  | "Electrician"
  | "Plumber"
  | "GeneralContractor"
  | "LegalService"
  | "AccountingService"
  | "Dentist"
  | "MedicalBusiness"
  | "Organization"
  | TodoValue;

export interface SeoConfig {
  defaultTitle: string;
  titleTemplate: string;
  defaultDescription: string;
  keywords: readonly string[];
  primaryActivity: string;
  primaryCity: string;
  geographicArea: string;
  schemaOrgType: SchemaOrgType;
  robots: {
    index: boolean;
    follow: boolean;
    googleBot: {
      index: boolean;
      follow: boolean;
      maxImagePreview: "none" | "standard" | "large";
      maxSnippet: number;
      maxVideoPreview: number;
    };
  };
  openGraph: {
    type: "website";
    locale: string;
    siteName: string;
    defaultImage: string;
  };
  twitter: {
    card: "summary" | "summary_large_image";
    defaultImage: string;
  };
}

export const seoConfig = {
  defaultTitle: "Amandine Gauthier | Infirmière à domicile à Montagny",
  titleTemplate: `%s | ${siteConfig.name}`,
  defaultDescription: businessConfig.shortDescription,
  // La balise keywords est volontairement omise : elle n’apporte aucune valeur SEO utile ici.
  keywords: [],
  primaryActivity: businessConfig.activity,
  primaryCity: businessConfig.address.city,
  geographicArea: `${businessConfig.serviceArea.primaryArea} et environ ${businessConfig.serviceArea.radius.value} km alentours`,
  schemaOrgType: "MedicalBusiness",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxImagePreview: "large",
      maxSnippet: -1,
      maxVideoPreview: -1,
    },
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    siteName: siteConfig.name,
    defaultImage: siteConfig.socialImages.openGraph,
  },
  twitter: {
    card: "summary_large_image",
    defaultImage: siteConfig.socialImages.twitter,
  },
} as const satisfies SeoConfig;

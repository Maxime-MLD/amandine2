import { businessConfig } from "./business.config";
import { createTelHref } from "../utils/links";

export interface NavigationItem {
  label: string;
  href: string;
  ariaLabel?: string;
  external?: boolean;
  children?: readonly NavigationItem[];
}

export interface NavigationConfig {
  items: readonly NavigationItem[];
  legalItems: readonly NavigationItem[];
  appointment: { label: string; href: string; ariaLabel: string };
  labels: {
    primaryNavigation: string;
    mobileNavigation: string;
    footerNavigation: string;
    legalNavigation: string;
    openMenu: string;
    closeMenu: string;
  };
}

export const navigationConfig = {
  items: [
    {
      label: "Accueil",
      href: "/",
      ariaLabel: "Accueil",
      external: false,
    },
    {
      label: "À propos",
      href: "/#about",
      ariaLabel: "À propos d’Amandine Gauthier",
      external: false,
    },
    {
      label: "Les soins",
      href: "/services",
      ariaLabel: "Découvrir les soins infirmiers",
      external: false,
    },
  ],
  appointment: {
    label: "Prendre rendez-vous",
    href: createTelHref(businessConfig.contact.phoneNormalized) ?? "/contact",
    ariaLabel: "Contacter Amandine Gauthier pour prendre rendez-vous",
  },
  legalItems: [
    {
      label: "Mentions légales",
      href: "/mentions-legales",
      ariaLabel: "Consulter les mentions légales",
      external: false,
    },
    {
      label: "Politique de confidentialité",
      href: "/politique-confidentialite",
      ariaLabel: "Consulter la politique de confidentialité",
      external: false,
    },
  ],
  labels: {
    primaryNavigation: "Navigation principale",
    mobileNavigation: "Navigation mobile",
    footerNavigation: "Navigation de pied de page",
    legalNavigation: "Informations légales",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
  },
} as const satisfies NavigationConfig;

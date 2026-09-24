import { businessConfig } from "./business.config";
import { createTelHref } from "../utils/links";

export const contactConfig = {
  banner: {
    title: "Organisons vos prochains soins.",
    label: "Prendre rendez-vous",
    href: "/#contact",
  },
  title: "Parlons de",
  titleSecondLine: "vos besoins.",
  description: "À domicile ou au cabinet, prenons le temps d’organiser votre prise en charge.",
  phoneLabel: "Par téléphone",
  phone: businessConfig.contact.phoneDisplay,
  phoneHref: createTelHref(businessConfig.contact.phoneNormalized),
  addressLabel: "Au cabinet",
  street: businessConfig.address.street,
  city: `${businessConfig.address.postalCode} ${businessConfig.address.city}`,
  appointmentNote: "Uniquement sur rendez-vous.",
  directionsLabel: "Voir l’itinéraire ↗",
  directionsHref: businessConfig.googleMapsUrl,
  formTitle: "Votre demande de rendez-vous",
  formNote: "Ce formulaire permet de faire une demande. Votre rendez-vous sera confirmé lors de notre échange.",
  footer: {
    navigationTitle: "Navigation",
    cabinetTitle: "Le cabinet",
    legalTitle: "Informations",
    contactTitle: "Restons en contact",
    contactLabel: "Prendre rendez-vous ↗",
    creditPrefix: "Site réalisé par",
    studioName: "MLD Studio",
    studioHref: "https://www.mld-studio.fr",
    copyright: "Tous droits réservés.",
    links: [
      { label: "Accueil", href: "/#hero" },
      { label: "Les soins", href: "/#apercu-soins" },
      { label: "À propos", href: "/#about" },
      { label: "Prise en charge", href: "/#prise-en-charge" },
      { label: "Questions fréquentes", href: "/#faq" },
    ],
  },
} as const;

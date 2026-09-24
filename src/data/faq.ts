import { businessConfig } from "../config/business.config";
import { createTelHref } from "../utils/links";
import { navigationConfig } from "../config/navigation.config";

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  links?: readonly { label: string; href: string | undefined; variant: "phone" | "primary"; ariaLabel: string }[];
}

export const faqSection = {
  title: "Vos questions,",
  titleSecondLine: "simplement.",
  description: "Les informations utiles avant votre rendez-vous.",
} as const;

export const faqItems: readonly FaqItem[] = [
  {
    id: "preparer-rendez-vous",
    question: "Que faut-il prévoir pour le rendez-vous ?",
    answer: "Selon votre situation, pensez notamment à votre ordonnance médicale en cours, votre Carte Vitale à jour et au matériel éventuellement prescrit.",
  },
  {
    id: "disponibilite",
    question: "Êtes-vous disponible 24h/24 et 7j/7 ?",
    answer: "Une continuité des soins peut être assurée 24h/24 et 7j/7 selon prescription et organisation de la prise en charge.",
  },
  {
    id: "zone-intervention",
    question: "Quelle est votre zone d’intervention ?",
    answer: `Je me déplace à votre domicile dans un rayon d’environ ${businessConfig.serviceArea.radius.value} km autour de ${businessConfig.serviceArea.primaryArea}.`,
  },
  {
    id: "prendre-rendez-vous",
    question: "Comment prendre rendez-vous ?",
    answer: "Vous pouvez me contacter directement par téléphone ou par mail pour organiser vos soins à domicile ou au cabinet selon vos besoins.",
    links: [
      { label: businessConfig.contact.phoneDisplay, href: createTelHref(businessConfig.contact.phoneNormalized), variant: "phone", ariaLabel: `Appeler au ${businessConfig.contact.phoneDisplay}` },
      { label: navigationConfig.appointment.label, href: navigationConfig.appointment.href, variant: "primary", ariaLabel: "Accéder au formulaire de rendez-vous" },
    ],
  },
];

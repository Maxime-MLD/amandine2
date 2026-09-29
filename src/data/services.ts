import type { TodoValue } from "../types/business.config";

export interface ServiceItem {
  id: TodoValue | string;
  title: string;
  shortDescription: string;
  description: string;
  icon: string;
  href: string;
  featured: boolean;
}

export const services = [
  {
    id: "pansements",
    title: "Pansements",
    shortDescription: "Pansements à domicile ou au cabinet sur rendez-vous.",
    description: "Contactez Amandine pour organiser vos soins de pansement.",
    icon: "bandage",
    href: "/#contact",
    featured: true,
  },
  {
    id: "prises-de-sang",
    title: "Prises de sang",
    shortDescription: "Prises de sang à domicile ou au cabinet sur rendez-vous.",
    description: "Contactez Amandine pour organiser votre prise de sang.",
    icon: "tube",
    href: "/#contact",
    featured: true,
  },
  {
    id: "suivi-diabete",
    title: "Suivi du diabète",
    shortDescription: "Suivi infirmier du diabète selon votre prise en charge.",
    description: "Contactez Amandine pour échanger sur votre suivi du diabète.",
    icon: "drop",
    href: "/#contact",
    featured: true,
  },
  {
    id: "piluliers",
    title: "Préparation et distribution des piluliers",
    shortDescription: "Préparation et distribution des piluliers selon vos besoins.",
    description: "Contactez Amandine pour organiser la préparation et la distribution de votre pilulier.",
    icon: "pill-organizer",
    href: "/#contact",
    featured: false,
  },
  {
    id: "injections",
    title: "Injections",
    shortDescription: "Injections à domicile ou au cabinet sur rendez-vous.",
    description: "Contactez Amandine pour organiser vos injections.",
    icon: "syringe",
    href: "/#contact",
    featured: true,
  },
  {
    id: "prado-cardio",
    title: "PRADO cardio",
    shortDescription: "Accompagnement infirmier dans le cadre du PRADO cardio.",
    description: "Contactez Amandine pour échanger sur votre prise en charge PRADO cardio.",
    icon: "heart",
    href: "/#contact",
    featured: false,
  },
  {
    id: "picc-line-chambre-implantable",
    title: "Entretien de PICC Line et chambre implantable",
    shortDescription: "Entretien de PICC Line ou de chambre implantable.",
    description: "Contactez Amandine pour organiser ce soin infirmier.",
    icon: "infusion",
    href: "/#contact",
    featured: false,
  },
  {
    id: "perfusions",
    title: "Perfusions",
    shortDescription: "Perfusions selon votre prescription et votre prise en charge.",
    description: "Contactez Amandine pour organiser vos perfusions.",
    icon: "infusion",
    href: "/#contact",
    featured: true,
  },
] as const satisfies readonly ServiceItem[];

import ecoute from "../assets/images/patients/a-votre-ecoute.webp";
import cotes from "../assets/images/patients/a-vos-cotes.webp";
import tousLesAges from "../assets/images/patients/pour-tous-les-ages.webp";
import attention from "../assets/images/patients/avec-attention.webp";
import { businessConfig } from "../config/business.config";
import { createTelHref } from "../utils/links";

export const careOverview = {
  label: "Votre accompagnement infirmier",
  location: {
    title: "À domicile ou au cabinet.",
    intro: "Je vous accueille au cabinet :",
    street: businessConfig.address.street,
    city: `${businessConfig.address.postalCode} ${businessConfig.address.city}`,
    appointment: "Uniquement sur rendez-vous.",
    area: `À domicile, à ${businessConfig.serviceArea.primaryArea} et ${businessConfig.serviceArea.radius.value} km alentour.`,
    mapHref: businessConfig.googleMapsUrl,
    mapLabel: "Voir l’adresse du cabinet sur Google Maps (nouvel onglet)",
  },
  care: {
    title: "Les soins",
    subtitle: "Quelques exemples",
    items: [
      { icon: "bandage", label: "Pansements" },
      { icon: "syringe", label: "Injections" },
      { icon: "tube", label: "Prises de sang" },
      { icon: "infusion", label: "Perfusions" },
      { icon: "drop", label: "Suivi du diabète" },
      { icon: "treatment", label: "Suivi des traitements" },
    ],
  },
  contact: {
    title: "Parlons de vos besoins.",
    text: "Tous les soins ne sont pas présentés sur le site. Si votre besoin n’apparaît pas ici, contactez-moi afin que nous puissions voir ensemble si je peux assurer votre prise en charge.",
    label: "Me contacter",
    href: createTelHref(businessConfig.contact.phoneNormalized) ?? "/contact",
    ariaLabel: `Appeler Amandine Gauthier au ${businessConfig.contact.phoneDisplay}`,
  },
  photos: {
    label: "L’accompagnement en images",
    items: [
      { src: ecoute, title: "À votre écoute", alt: "Portrait éditorial d’une femme d’environ 50 ans souriant doucement sur un fond lavande." },
      { src: cotes, title: "À vos côtés", alt: "Portrait éditorial d’un homme d’environ 65 ans souriant doucement sur un fond bleu pastel." },
      { src: tousLesAges, title: "Pour tous les âges", alt: "Portrait éditorial d’une femme d’environ 30 ans souriant doucement sur un fond pêche." },
      { src: attention, title: "Avec attention", alt: "Portrait éditorial d’un couple d’environ 50 ans souriant doucement sur un fond rose poudré." },
    ],
  },
  carousel: {
    care: { previous: "Soin précédent", next: "Soin suivant", goTo: "Afficher le soin", position: "Soin", roleDescription: "carrousel manuel" },
    photos: {
      previous: "Photo précédente",
      next: "Photo suivante",
      goTo: "Afficher la photo",
      position: "Photo",
      roleDescription: "carrousel d’images",
      autoplayInterval: 3000,
    },
  },
} as const;

export type CareIconName = (typeof careOverview.care.items)[number]["icon"];

import tension from "../assets/images/patient-tension.png";
import senior from "../assets/images/patient-senior.png";
import homme from "../assets/images/patient-homme.png";
import accompagnement from "../assets/images/patient-accompagnement.png";
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
    text: "Votre soin n’est pas présenté ici ? Contactez-moi pour en discuter.",
    label: "Me contacter",
    href: createTelHref(businessConfig.contact.phoneNormalized) ?? "/contact",
    ariaLabel: `Appeler Amandine Gauthier au ${businessConfig.contact.phoneDisplay}`,
  },
  photos: {
    label: "L’accompagnement en images",
    illustration: "Photos d’illustration",
    items: [
      { src: tension, title: "À votre écoute", alt: "Portrait d’illustration d’une patiente souriante, avec un brassard de tension au bras." },
      { src: senior, title: "À chaque âge", alt: "Portrait d’illustration d’une femme âgée souriante, sur un fond doux et flou." },
      { src: homme, title: "En confiance", alt: "Portrait d’illustration d’un homme souriant, photographié en plan serré." },
      { src: accompagnement, title: "À vos côtés", alt: "Portrait d’illustration d’un homme âgé au sourire chaleureux." },
    ],
  },
  carousel: {
    care: { previous: "Soin précédent", next: "Soin suivant", goTo: "Afficher le soin", position: "Soin", roleDescription: "carrousel manuel" },
    photos: { previous: "Photo précédente", next: "Photo suivante", goTo: "Afficher la photo", position: "Photo", roleDescription: "carrousel manuel" },
  },
} as const;

export type CareIconName = (typeof careOverview.care.items)[number]["icon"];

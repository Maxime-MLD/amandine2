import nursePortrait from "../assets/images/amandine-portrait.webp";
import cabinetEspaceGuyGontier from "../assets/images/editorial/cabinet-espace-guy-gontier.webp";
import editorialCareEquipment from "../assets/images/editorial/editorial-care-equipment.png";
import editorialHomeCareCar from "../assets/images/editorial/editorial-home-care-car.png";
import editorialNurseNotes from "../assets/images/editorial/editorial-nurse-notes.png";
import editorialPillOrganizer from "../assets/images/editorial/editorial-pill-organizer.png";
import storyWheelchair from "../assets/images/editorial/story-wheelchair.png";
import storyTension from "../assets/images/editorial/story-tension.png";
import { businessConfig } from "./business.config";

const editorialLines = [
  "Besoin de soins à domicile ?",
  "Je viens à vous, ou vous accueille",
  "au cabinet sur rendez-vous.",
  "À votre écoute, je vous accompagne",
  "avec attention, pour des soins en toute confiance.",
] as const;

export const homeConfig = {
  about: {
    title: businessConfig.tradeName,
    subtitle: businessConfig.activity,
    description: [
      { text: "Infirmière à domicile", emphasis: true },
      { text: " avec " },
      { text: "10 ans d’expérience", emphasis: true },
      { text: ", Amandine vous accompagne avec " },
      { text: "écoute et attention", emphasis: true },
      { text: ", pour des " },
      { text: "soins adaptés à vos besoins", emphasis: true },
      { text: "." },
    ],
    image: {
      // TODO_REPLACE_ABOUT_PORTRAIT: illustration provisoire, pas un portrait d’Amandine.
      src: nursePortrait,
      alt: "Illustration d’une infirmière souriante en tenue blanche, sur un fond pastel.",
    },
  },
  editorial: {
    message: editorialLines.join(" "),
    lines: editorialLines,
    images: [
      {
        kind: "single",
        src: storyWheelchair,
        alt: "Portrait d’illustration d’un homme âgé souriant, assis dans un fauteuil roulant.",
      },
      {
        kind: "single",
        src: cabinetEspaceGuyGontier,
        alt: "Façade de l’Espace Guy Gontier où se trouve le cabinet infirmier.",
      },
      {
        kind: "mosaic",
        label: "Le quotidien d’une infirmière à domicile",
        items: [
          {
            src: editorialPillOrganizer,
            alt: "Pilulier hebdomadaire préparé pour organiser un traitement.",
          },
          {
            src: editorialNurseNotes,
            alt: "Infirmière en blouse blanche écrivant dans son carnet, visage hors champ.",
          },
          {
            src: editorialCareEquipment,
            alt: "Matériel de soins à domicile disposé autour d’un sac médical.",
          },
          {
            src: editorialHomeCareCar,
            alt: "Voiture blanche utilisée pour les déplacements de soins à domicile.",
          },
        ],
      },
      {
        kind: "single",
        src: storyTension,
        alt: "Portrait d’illustration d’un homme souriant, avec un brassard de tension au bras.",
      },
    ],
  },
  seo: {
    title: "Infirmière à domicile à Montagny",
    description: businessConfig.shortDescription,
  },
  hero: {
    badge: "À vos côtés, 24h/24 et 7j/7",
    titleLines: ["Vos soins infirmiers,", "à domicile et", "au cabinet."],
    description:
      "Des soins adaptés à vos besoins, à domicile ou au cabinet sur rendez-vous. Une présence attentive, au plus près de vous.",
    location: `${businessConfig.serviceArea.primaryArea} et ${businessConfig.serviceArea.radius.value} km alentour`,
    image: {
      // TODO_REPLACE_NURSE_PORTRAIT: modèle généré, à remplacer par une photo autorisée d’Amandine.
      src: nursePortrait,
      alt: "Illustration générée d’une infirmière souriante en tenue blanche, avec un stéthoscope.",
    },
  },
} as const;

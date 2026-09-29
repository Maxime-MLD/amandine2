import nursePortrait from "../assets/images/amandine-portrait.webp";
import cabinetEspaceGuyGontier from "../assets/images/editorial/cabinet-espace-guy-gontier.webp";
import editorialCareEquipment from "../assets/images/editorial/editorial-care-equipment-v2.webp";
import editorialCareNotes from "../assets/images/editorial/editorial-care-notes-v2.webp";
import editorialHomeVisit from "../assets/images/editorial/editorial-home-visit.webp";
import editorialHumanSupport from "../assets/images/editorial/editorial-human-support.webp";
import editorialPillOrganizer from "../assets/images/editorial/editorial-pill-organizer-v2.webp";
import storyTension from "../assets/images/editorial/story-tension.webp";
import { businessConfig } from "./business.config";
import { seoConfig } from "./seo.config";

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
      src: nursePortrait,
      alt: "Amandine Gauthier, infirmière à Montagny.",
    },
  },
  editorial: {
    message: editorialLines.join(" "),
    lines: editorialLines,
    images: [
      {
        kind: "single",
        src: editorialHumanSupport,
        alt: "Une infirmière tient avec douceur la main d’une personne âgée.",
      },
      {
        kind: "single",
        src: cabinetEspaceGuyGontier,
        alt: "Façade de l’Espace Guy Gontier où se trouve le cabinet infirmier.",
      },
      {
        kind: "mosaic",
        label: "Les gestes du quotidien d’une infirmière à domicile",
        items: [
          {
            src: editorialPillOrganizer,
            alt: "Pilulier hebdomadaire préparé avec soin.",
          },
          {
            src: editorialCareNotes,
            alt: "Infirmière en blouse blanche préparant les soins dans un carnet.",
          },
          {
            src: editorialCareEquipment,
            alt: "Sac de soins et tensiomètre préparés pour une intervention à domicile.",
          },
          {
            src: editorialHomeVisit,
            alt: "Infirmière portant son sac de soins à l’entrée d’un domicile.",
          },
        ],
      },
      {
        kind: "single",
        src: storyTension,
        alt: "Homme souriant avec un brassard de tension au bras.",
      },
    ],
  },
  seo: {
    title: seoConfig.defaultTitle,
    description: seoConfig.defaultDescription,
  },
  hero: {
    badge: "À vos côtés, 24h/24 et 7j/7",
    titleLines: ["Vos soins infirmiers,", "à domicile et", "au cabinet."],
    description:
      "Des soins adaptés à vos besoins, à domicile ou au cabinet sur rendez-vous. Une présence attentive, au plus près de vous.",
    location: `${businessConfig.serviceArea.primaryArea} et ${businessConfig.serviceArea.radius.value} km alentour`,
    image: {
      src: nursePortrait,
      alt: "Amandine Gauthier, infirmière à Montagny.",
    },
  },
} as const;

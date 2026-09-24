import nursePortrait from "../assets/images/TODO_REPLACE_nurse-hero.png";
import storyWheelchair from "../assets/images/story-wheelchair.png";
import storyCabinet from "../assets/images/TODO_REPLACE_story-cabinet.png";
import storyTension from "../assets/images/story-tension.png";
import storyWellbeing from "../assets/images/story-wellbeing.png";
import { businessConfig } from "./business.config";

export const homeConfig = {
  about: {
    title: businessConfig.tradeName,
    subtitle: businessConfig.activity,
    location: `À ${businessConfig.serviceArea.primaryArea}, à domicile et au cabinet.`,
    image: {
      // TODO_REPLACE_ABOUT_PORTRAIT: illustration provisoire, pas un portrait d’Amandine.
      src: nursePortrait,
      alt: "Illustration d’une infirmière souriante en tenue blanche, sur un fond pastel.",
    },
  },
  editorial: {
    message: "Besoin de soins à domicile ? Je viens à vous, ou vous accueille au cabinet sur rendez-vous. À votre écoute, je vous accompagne avec attention, pour des soins en toute confiance.",
    imagesNote: "Images d’illustration · Photo du cabinet à venir.",
    images: [
      { src: storyWheelchair, alt: "Portrait d’illustration d’un homme âgé souriant, assis dans un fauteuil roulant." },
      // TODO_REPLACE_CABINET_PHOTO: bâtiment fictif, à remplacer par une photo du vrai cabinet.
      { src: storyCabinet, alt: "Illustration provisoire d’une entrée de cabinet, ne représentant pas le cabinet d’Amandine." },
      { src: storyTension, alt: "Portrait d’illustration d’un homme noir souriant, avec un brassard de tension au bras." },
      { src: storyWellbeing, alt: "Portrait d’illustration d’une femme aux cheveux argentés, souriante dans un fauteuil." },
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

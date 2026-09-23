import nursePortrait from "../assets/images/TODO_REPLACE_nurse-hero.png";
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

import { navigationConfig } from "../config/navigation.config";

export interface CareJourneyStep {
  number: string;
  title: string;
  description: string;
  detail: string;
  tone: "lilac" | "peach" | "rose";
}

export const careJourney = {
  title: "Votre prise en charge,",
  titleSecondLine: "en toute simplicité.",
  description: "Un premier échange, un rendez-vous, puis des soins adaptés à vos besoins.",
  contact: { ...navigationConfig.appointment, label: "Me contacter" },
  steps: [
    {
      number: "01",
      title: "Prise de contact",
      description: "Appelez-moi pour me parler de vos besoins. Je suis à votre écoute pour préparer votre prise en charge.",
      detail: "Tout commence par un échange.",
      tone: "lilac",
    },
    {
      number: "02",
      title: "Prise de rendez-vous",
      description: "Nous convenons ensemble d’un créneau et du lieu de vos soins : à votre domicile ou au cabinet.",
      detail: "Un rendez-vous organisé ensemble.",
      tone: "peach",
    },
    {
      number: "03",
      title: "Vos soins",
      description: "Je vous accompagne avec attention, pour des soins adaptés et un suivi à votre écoute.",
      detail: "À domicile ou au cabinet.",
      tone: "rose",
    },
  ] satisfies CareJourneyStep[],
} as const;

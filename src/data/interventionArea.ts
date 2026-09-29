import { businessConfig } from "../config/business.config";
import { navigationConfig } from "../config/navigation.config";

export type InterventionCityTone = "blue" | "lilac" | "peach" | "rose";
export type InterventionCityPosition = "north-west" | "north-east" | "east" | "south" | "south-west";
export type InterventionCitySize = "standard" | "wide";

export interface InterventionCity {
  id: string;
  name: string;
  tone: InterventionCityTone;
  position: InterventionCityPosition;
  size: InterventionCitySize;
}

export const interventionCities = [
  { id: "coutouvre", name: "Coutouvre", tone: "blue", position: "north-west", size: "standard" },
  { id: "la-gresle", name: "La Gresle", tone: "lilac", position: "north-east", size: "standard" },
  { id: "thizy-les-bourgs", name: "Thizy-les-Bourgs", tone: "peach", position: "east", size: "wide" },
  { id: "saint-victor-sur-rhins", name: "Saint-Victor-sur-Rhins", tone: "rose", position: "south", size: "wide" },
  { id: "regny", name: "Régny", tone: "blue", position: "south-west", size: "standard" },
] as const satisfies readonly InterventionCity[];

export const interventionArea = {
  title: "À domicile,",
  titleSecondLine: `autour de ${businessConfig.serviceArea.primaryArea}.`,
  description: `Je me déplace à ${businessConfig.serviceArea.primaryArea} et dans un rayon d’environ ${businessConfig.serviceArea.radius.value} km pour assurer vos soins directement à votre domicile.`,
  note: "Votre commune n’est pas indiquée ? Contactez-moi pour vérifier si je peux intervenir à votre adresse.",
  cta: {
    label: "Vérifier ma commune",
    href: navigationConfig.appointment.href,
  },
  center: {
    name: businessConfig.serviceArea.primaryArea.toUpperCase(),
  },
  cities: interventionCities,
} as const;

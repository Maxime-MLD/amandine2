import type { BusinessConfig } from "../types/business.config";

export const businessConfig = {
  tradeName: "Amandine Gauthier",
  legalName: "Amandine Gauthier",
  owner: {
    firstName: "Amandine",
    lastName: "Gauthier",
  },
  activity: "Infirmière",
  shortDescription: "Amandine Gauthier, infirmière à domicile à Montagny et dans un rayon de 10 km. Soins à domicile et au cabinet sur rendez-vous, 7j/7 et 24h/24.",
  contact: {
    phoneDisplay: "06 77 53 58 79",
    phoneNormalized: "+33677535879",
    email: "contact@amandine-gauthier.fr",
  },
  address: {
    formatted: "39, rue de la République, 42840 Montagny",
    street: "39, rue de la République",
    postalCode: "42840",
    city: "Montagny",
    region: "Loire",
    country: "France",
    countryCode: "FR",
    latitude: 46.0328,
    longitude: 4.2346,
  },
  serviceArea: {
    primaryArea: "Montagny",
    radius: {
      value: 10,
      unit: "km",
    },
    servedCities: [
      "Coutouvre",
      "La Gresle",
      "Thizy-les-Bourgs",
      "Saint-Victor-sur-Rhins",
      "Régny",
    ],
  },
  openingHours: [] as BusinessConfig["openingHours"],
  socialLinks: [] as BusinessConfig["socialLinks"],
  legalIdentifiers: {
    legalForm: "Entrepreneur individuel",
    soleTrader: {
      enabled: true,
      legalNotice: "Amandine Gauthier exerce en qualité d’entrepreneur individuel.",
    },
    siren: "842348138",
    siret: "84234813800038",
    vatNumber: "FR38842348138",
  },
  publicationDirector: "Amandine Gauthier",
  insurance: {
    enabled: false,
    provider: "",
    policyNumber: "",
    professionalCoverage: "",
    geographicCoverage: "",
  },
  hostingProvider: {
    name: "Vercel Inc.",
    address: "440 N Barranca Avenue #4133, Covina, CA 91723, United States",
    phone: "+1 559 288 7060",
    website: "https://vercel.com",
  },
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=39%20rue%20de%20la%20R%C3%A9publique%2042840%20Montagny",
} as const satisfies BusinessConfig;

import type { BusinessConfig } from "../types/business.config";

export const businessConfig = {
  tradeName: "Amandine Gauthier",
  legalName: "Amandine Gauthier",
  owner: {
    firstName: "Amandine",
    lastName: "Gauthier",
  },
  activity: "Infirmière diplômée d’État",
  shortDescription: "Soins infirmiers à domicile à Montagny et dans un rayon de 10 km. Soins au cabinet uniquement sur rendez-vous. Disponible 24h/24, 7j/7.",
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
    region: "TODO_REGION",
    country: "TODO_COUNTRY",
    countryCode: "TODO_COUNTRY_CODE",
    latitude: "TODO_LATITUDE",
    longitude: "TODO_LONGITUDE",
  },
  serviceArea: {
    primaryArea: "Montagny",
    radius: {
      value: 10,
      unit: "km",
    },
    servedCities: ["TODO_SERVED_CITY_1", "TODO_SERVED_CITY_2"],
  },
  openingHours: [
    {
      days: ["TODO_OPENING_DAYS"],
      opens: "TODO_OPENING_TIME",
      closes: "TODO_CLOSING_TIME",
      isClosed: false,
      note: "TODO_OPENING_HOURS_NOTE",
    },
  ],
  socialLinks: [
    {
      platform: "TODO_SOCIAL_PLATFORM",
      label: "TODO_SOCIAL_LABEL",
      url: "TODO_SOCIAL_URL",
    },
  ],
  legalIdentifiers: {
    legalForm: "TODO_LEGAL_FORM",
    soleTrader: {
      enabled: false,
      legalNotice: "TODO_SOLE_TRADER_LEGAL_NOTICE_IF_APPLICABLE",
    },
    siren: "TODO_SIREN",
    siret: "TODO_SIRET",
    vatNumber: "TODO_VAT_NUMBER",
  },
  publicationDirector: "TODO_PUBLICATION_DIRECTOR",
  insurance: {
    enabled: false,
    provider: "TODO_INSURANCE_PROVIDER",
    policyNumber: "TODO_INSURANCE_POLICY_NUMBER",
    professionalCoverage: "TODO_INSURANCE_PROFESSIONAL_COVERAGE",
    geographicCoverage: "TODO_INSURANCE_GEOGRAPHIC_COVERAGE",
  },
  hostingProvider: {
    name: "TODO_HOSTING_PROVIDER_NAME",
    address: "TODO_HOSTING_PROVIDER_ADDRESS",
    phone: "TODO_HOSTING_PROVIDER_PHONE",
    website: "TODO_HOSTING_PROVIDER_URL",
  },
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=39%20rue%20de%20la%20R%C3%A9publique%2042840%20Montagny",
} as const satisfies BusinessConfig;

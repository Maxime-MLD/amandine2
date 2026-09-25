export interface FormFieldConfig {
  enabled: boolean;
  required: boolean;
}

export interface ContactFormConfig {
  fields: {
    firstName: FormFieldConfig;
    lastName: FormFieldConfig;
    phone: FormFieldConfig;
    email: FormFieldConfig;
    careLocation: FormFieldConfig;
    service: FormFieldConfig;
    message: FormFieldConfig;
    consent: FormFieldConfig;
  };
  subject: string;
  successPath: string;
  labels: {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    careLocation: string;
    service: string;
    servicePlaceholder: string;
    otherService: string;
    message: string;
    consentText: string;
    privacyPolicy: string;
    submit: string;
    loading: string;
    requiredHint: string;
    sensitiveDataHint: string;
  };
  careLocations: ReadonlyArray<{
    value: string;
    label: string;
  }>;
  messages: {
    validation: string;
    captcha: string;
    loading: string;
    success: string;
    error: string;
    configuration: string;
  };
}

export const contactFormConfig = {
  fields: {
    firstName: { enabled: false, required: false },
    lastName: { enabled: true, required: true },
    phone: { enabled: true, required: true },
    email: { enabled: true, required: false },
    careLocation: { enabled: true, required: true },
    service: { enabled: false, required: false },
    message: { enabled: true, required: true },
    consent: { enabled: true, required: true },
  },
  subject: "Nouvelle demande de rendez-vous — site Amandine Gauthier",
  successPath: "",
  labels: {
    firstName: "Prénom",
    lastName: "Nom complet",
    phone: "Téléphone",
    email: "E-mail",
    careLocation: "Lieu des soins",
    service: "Service ou type de demande",
    servicePlaceholder: "Sélectionnez une option",
    otherService: "Autre demande",
    message: "Message",
    consentText: "J’accepte que mes coordonnées soient utilisées pour répondre à ma demande. Consulter la",
    privacyPolicy: "politique de confidentialité",
    submit: "Envoyer ma demande",
    loading: "Envoi en cours…",
    requiredHint: "Les champs marqués d’un astérisque sont obligatoires.",
    sensitiveDataHint: "Merci de ne pas transmettre d’informations médicales sensibles dans ce message.",
  },
  careLocations: [
    { value: "home", label: "À domicile" },
    { value: "office", label: "Au cabinet" },
    { value: "undecided", label: "Je ne sais pas encore" },
  ],
  messages: {
    validation: "Vérifiez les champs signalés avant de continuer.",
    captcha: "Veuillez confirmer que vous n’êtes pas un robot.",
    loading: "Votre demande est en cours d’envoi.",
    success: "Votre demande a bien été envoyée. Votre rendez-vous sera confirmé lors de notre échange.",
    error: "L’envoi a échoué. Réessayez dans quelques instants ou utilisez les coordonnées de contact.",
    configuration:
      "Le formulaire est en cours d’activation. Pour organiser vos soins, contactez-moi par téléphone.",
  },
} as const satisfies ContactFormConfig;

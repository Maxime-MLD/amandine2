import type { TodoValue } from "../types/business.config";

export type PracticalInfoKind =
  | "access"
  | "appointment"
  | "parking"
  | "payment"
  | "other";

export interface PracticalInfoItem {
  id: TodoValue | string;
  kind: PracticalInfoKind;
  title: string;
  value: string;
  description?: string;
  icon?: string;
}

export const practicalInfo = [
  {
    id: "cabinet-sur-rendez-vous",
    kind: "appointment",
    title: "Soins au cabinet",
    value: "Uniquement sur rendez-vous",
    description: "39, rue de la République, 42840 Montagny.",
  },
] as const satisfies readonly PracticalInfoItem[];

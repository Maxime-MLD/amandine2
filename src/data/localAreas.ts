import type { TodoValue, ValueOrTodo } from "../types/business.config";

export interface LocalAreaItem {
  id: TodoValue | string;
  name: string;
  description: string;
  postalCodes: readonly string[];
  latitude: ValueOrTodo<number>;
  longitude: ValueOrTodo<number>;
  href?: string;
}

export const localAreas: readonly LocalAreaItem[] = [];

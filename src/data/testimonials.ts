import type { TodoValue, ValueOrTodo } from "../types/business.config";

export type TestimonialStatus = "placeholder" | "published";

export interface TestimonialItem {
  id: TodoValue | string;
  status: TestimonialStatus;
  quote: string;
  authorName: string;
  authorRole?: string;
  rating?: ValueOrTodo<number>;
  sourceUrl?: string;
}

export const testimonials: readonly TestimonialItem[] = [];

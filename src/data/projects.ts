import type { TodoValue, ValueOrTodo } from "../types/business.config";
import type { ContentImage } from "../types/images";

export interface ProjectItem {
  id: TodoValue | string;
  title: string;
  category: string;
  summary: string;
  location: string;
  year: ValueOrTodo<number>;
  image: ContentImage;
  href: string;
  featured: boolean;
}

export const projects: readonly ProjectItem[] = [];

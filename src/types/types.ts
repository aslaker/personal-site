import { type Project } from "@prisma/client";

export type ProjectWithLanguages = Project & {
  languages: Record<string, number>;
};

import type { Technology } from "../components/TechIcon/TechIcon";

export type Page = {
  id: string;
  name: string;
  headerText: string;
  aboutText?: string;
};

export type Project = {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  siteUrl?: string;
  codeUrl?: string;
  technologies: Technology[];
};

export type Post = {
  id: string;
  title: string;
  slug: string;
};

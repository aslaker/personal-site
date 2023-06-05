import { type DocumentRendererProps } from "@keystone-6/document-renderer";
import { type Page } from "@prisma/client";

export type DeserializedPage = Omit<Page, "aboutText"> & {
  aboutText: { document: DocumentRendererProps["document"] };
};

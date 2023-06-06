import {
  DocumentRenderer,
  type DocumentRendererProps,
} from "@keystone-6/document-renderer";

interface Props {
  document: DocumentRendererProps["document"];
}

export const RenderMarkup: React.FC<Props> = ({ document }) => {
  return <DocumentRenderer document={document} />;
};

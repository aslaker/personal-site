import { type DeserializedPage } from "@/keystone/types";
import { HeroSection } from "./HeroSection/HeroSection";
import { ProjectsSection } from "./ProjectsSection/ProjectsSection";
import { type ProjectWithLanguages } from "../../types/types";

interface Props {
  pageData: DeserializedPage;
  projects: ProjectWithLanguages[];
}

export const Home: React.FC<Props> = ({ pageData, projects }) => {
  return (
    <div className="flex flex-col items-center gap-24">
      <HeroSection content={pageData.aboutText.document} />
      <ProjectsSection projects={projects} />
    </div>
  );
};

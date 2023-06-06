import { type Project } from "@prisma/client";
import { type DeserializedPage } from "@/keystone/types";
import { HeroSection } from "./HeroSection/HeroSection";
import { ProjectsSection } from "./ProjectsSection/ProjectsSection";

interface Props {
  pageData: DeserializedPage;
  projects: Project[];
}

export const Home: React.FC<Props> = ({ pageData, projects }) => {
  return (
    <div className="flex flex-col items-center gap-24">
      <HeroSection content={pageData.aboutText.document} />
      <ProjectsSection projects={projects} />
    </div>
  );
};

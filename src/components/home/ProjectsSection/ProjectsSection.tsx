import { type Project } from "@prisma/client";
import { ProjectCard } from "./components/ProjectCard/ProjectCard";
import { useState } from "react";

type ProjectType =
  | "professionalProjects"
  | "personalProjects"
  | "digitalGarden";

type TabConfig = {
  name: string;
  shortName: string;
  key: ProjectType;
};

const tabConfigs: TabConfig[] = [
  // {
  //   name: "Professional Projects",
  //   shortName: "Professional",
  //   key: "professionalProjects",
  // },
  {
    name: "Personal Projects",
    shortName: "Personal",
    key: "personalProjects",
  },
  {
    name: "Digital Garden",
    shortName: "Garden",
    key: "digitalGarden",
  },
];

interface Props {
  projects: Project[];
}

function checkProjectType({
  selectedTab,
  project,
}: {
  selectedTab: ProjectType;
  project: Project;
}): boolean {
  return selectedTab === project.projectType;
}

export const ProjectsSection: React.FC<Props> = ({ projects }) => {
  const [activeTab, setActiveTab] = useState<ProjectType>("personalProjects");

  return (
    <div className="flex min-h-screen w-full max-w-5xl flex-col">
      <div className="tabs tabs-boxed max-w-fit gap-7 self-center">
        {tabConfigs.map((tab) => (
          <a
            key={tab.key}
            className={`tab ${activeTab === tab.key ? "tab-active" : ""}`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.name}
          </a>
        ))}
      </div>
      {projects
        .filter((project) =>
          checkProjectType({ project, selectedTab: activeTab })
        )
        .map((project) => (
          <div
            key={project.id}
            className="flex odd:justify-end even:justify-start"
          >
            <ProjectCard {...project} />
          </div>
        ))}
    </div>
  );
};

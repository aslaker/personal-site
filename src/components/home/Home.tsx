import { type Project } from "@prisma/client";
import Image from "next/image";
import React, { useState } from "react";
import { RenderMarkup } from "@/components/common/RenderMarkup/RenderMarkup";
import { type DeserializedPage } from "@/keystone/types";
import { useMediaQuery } from "usehooks-ts";
import tailwindConfig from "../../../tailwind.config";
import resolveConfig from "tailwindcss/resolveConfig";
import { HeroSection } from "./HeroSection/HeroSection";

type TabOption = "professionalProjects" | "personalProjects" | "digitalGarden";

type TabConfig = {
  name: string;
  shortName: string;
  key: TabOption;
};

const tabConfigs: TabConfig[] = [
  {
    name: "Professional Projects",
    shortName: "Professional",
    key: "professionalProjects",
  },
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
  pageData: DeserializedPage;
  projects: Project[];
}

export const Home: React.FC<Props> = ({ pageData, projects }) => {
  // const [isMobile, setIsMobile] = useMediaQuery(
  //   themeConfig.theme.screens.sm as string
  // );
  const [activeTab, setActiveTab] = useState<TabOption>("professionalProjects");
  return (
    <div className="flex flex-col items-center gap-24">
      <HeroSection content={pageData.aboutText.document} />
      <div className="min-h-screen">
        <div className="tabs tabs-boxed gap-7">
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
      </div>
    </div>
  );
};

import React, { ReactNode } from "react";
import { query } from ".keystone/api";
import { NextLayoutComponentType } from "next";
import type { InferGetStaticPropsType } from "next";
import { Page, Project } from "../../types/data.types";
import MainLayout from "../../layouts/MainLayout";

const ProjectsPage: NextLayoutComponentType<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ page, projects }) => {
  return (
    <div className="h-full max-h-full p-5 flex flex-col justify-start items-center gap-6">
      <h1 className="text-4xl font-bold">{page.headerText}</h1>
      <ul className="flex flex-col h-screen w-full space-y-4 overflow-y-scroll">
        {projects.map((project) => (
          <li
            className="flex flex-col h-48 rounded-md bg-gray-100  shadow-lg"
            key={project.id}
          >
            <div className="flex-auto rounded-t-md p-2 bg-primary-400">
              <span className="text-lg font-bold">{project.name}</span>
            </div>
            <div className="flex-auto max-h-full h-full rounded-md p-2">
              <p className="truncate">{project.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectsPage;

ProjectsPage.getLayout = function getLayout(page: ReactNode) {
  return <MainLayout>{page}</MainLayout>;
};

export async function getStaticProps() {
  const page: Page = await query.Page.findOne({
    where: { name: "Projects" },
    query: "name headerText",
  });
  const projects: Project[] = await query.Project.findMany({
    query: "id name description siteUrl, codeUrl",
  });
  return {
    props: { page, projects },
  };
}

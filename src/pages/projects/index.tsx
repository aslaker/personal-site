import React, { ReactNode } from "react";
import { query } from ".keystone/api";
import { NextLayoutComponentType } from "next";
import type { InferGetStaticPropsType } from "next";
import { Page, Project } from "../../types/data.types";
import MainLayout from "../../layouts/MainLayout";
import { AiFillGithub } from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import Head from "next/head";

//TODO: #4 Add technology icons based on selections from custom multi-select
//TODO: #6 Update styles to accomodate for desktop
//TODO: #7 Test styles on mobile
//TODO: #10 Stop menu from disappearing after click on desktop
const ProjectsPage: NextLayoutComponentType<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ page, projects }) => {
  return (
    <>
      <Head>
        <title>{page.name}</title>
      </Head>
      <div className="h-full p-5 flex flex-col gap-5">
        <h1 className="text-4xl font-bold">{page.headerText}</h1>
        <ul className=" h-0 flex-1 overflow-y-auto space-y-5">
          {projects.map((project) => (
            <li
              className="flex flex-col h-64 rounded-md bg-gray-100  shadow-lg"
              key={project.id}
            >
              <div className="flex justify-between items-center rounded-t-md p-2 bg-primary-400">
                <span className="text-lg font-bold">{project.name}</span>
                <a href={project.codeUrl} target="_blank" rel="noreferrer">
                  <IconContext.Provider value={{ size: "30px" }}>
                    <AiFillGithub />
                  </IconContext.Provider>
                </a>
              </div>
              <div className="max-h-full h-full rounded-md p-2">
                <p className="text-xs">{project.shortDescription}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
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
    query: "id name description siteUrl, codeUrl shortDescription",
  });
  return {
    props: { page, projects },
  };
}

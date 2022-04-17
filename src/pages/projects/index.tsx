import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { query } from ".keystone/api";
import { NextLayoutComponentType } from "next";
import type { InferGetStaticPropsType } from "next";
import Head from "next/head";
import { IconContext } from "react-icons/lib";
import { AiFillGithub } from "react-icons/ai";
import MainLayout from "../../layouts/MainLayout";
import type { Page, Project } from "../../types/data.types";
import TechIcon from "../../components/TechIcon/TechIcon";

//TODO: #4 Add technology icons based on selections from custom multi-select
//TODO: #6 Update styles to accomodate for desktop
//TODO: #7 Test styles on mobile
const ProjectsPage: NextLayoutComponentType<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ page, projects }) => {
  return (
    <>
      <Head>
        <title>{page.name}</title>
      </Head>
      <div className="h-full max-h-screen px-5 pt-5 flex flex-col gap-5">
        <h1 className="text-4xl font-bold">{page.headerText}</h1>
        <div className="projects-display">
          {projects.map((project) => (
            <div
              className="flex flex-col justify-between lg:min-h-full ltmd:h-48 rounded-md bg-gray-100 shadow-lg"
              key={project.id}
            >
              <div className="flex justify-between items-center rounded-t-md p-3 bg-primary-400">
                <span className="text-lg font-bold">{project.name}</span>
                <motion.a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{
                    className: "shadow-md",
                    position: "relative",
                    zIndex: 1,
                    scale: 1.3,
                    transition: {
                      duration: 0.2,
                    },
                  }}
                >
                  <IconContext.Provider value={{ size: "30px" }}>
                    <AiFillGithub />
                  </IconContext.Provider>
                </motion.a>
              </div>
              <div className="rounded-md p-3 h-full w-full">
                <p className="text-sm text-left">{project.shortDescription}</p>
              </div>
              <div className="flex justify-between items-center bg-gray-200 p-2 rounded-b-md">
                {project.technologies.map((tech, index) => (
                  <TechIcon
                    key={`${Math.random() * index}`}
                    technology={tech}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
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
    query: "id name headerText",
  });
  const projects: Project[] = await query.Project.findMany({
    query: "id name description siteUrl, codeUrl shortDescription technologies",
  });
  return {
    props: { page, projects },
  };
}

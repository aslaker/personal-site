import React from "react";
import { query } from ".keystone/api";
import { NextPage } from "next";
import type { InferGetStaticPropsType } from "next";
import { Page, Project } from "../../types/data.types";

const ProjectsPage = ({
  page,
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <h1>{page.headerText}</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <span>{project.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectsPage;

export async function getStaticProps() {
  const page: Page = await query.Page.findOne({
    where: { name: "Projects" },
    query: "name headerText",
  });
  const projects: Project[] = await query.Project.findMany({
    query: "id name description",
  });
  return {
    props: { page, projects },
  };
}

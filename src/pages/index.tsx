import type { ReactNode } from "react";
import type { InferGetStaticPropsType } from "next";
import MainLayout from "../layouts/MainLayout";
import type { Project } from "@prisma/client";
import { keystoneContext } from "../keystone/context";
import type { NextPageWithLayout } from "./_app";
import { Home } from "@/components/home/Home";
import { type DeserializedPage } from "@/keystone/types";
import { Octokit } from "octokit";
import { type ProjectWithLanguages } from "../types/types";
import Head from "next/head";

export async function getStaticProps() {
  const octokit = new Octokit({ auth: process.env.GITHUB_PAT });

  const page = (await keystoneContext.query.Page.findOne({
    where: { name: "Home" },
    query: "id name headerText aboutText{ document }",
  })) as DeserializedPage;

  const projects = (await keystoneContext.query.Project.findMany({
    query:
      "id name description siteUrl githubRepo shortDescription technologies projectType",
  })) as Project[];

  const projectLanguagePromises = projects.map(async (project) => {
    if (!project.githubRepo) return;
    const languageResponse = await octokit.request(
      `GET https://api.github.com/repos/aslaker/${project.githubRepo}/languages`
    );
    return languageResponse.data as Record<string, number>;
  });

  const projectLanguages = await Promise.all(projectLanguagePromises);

  const projectsWithLanguages: ProjectWithLanguages[] = projects.map(
    (project, index) => {
      return {
        ...project,
        languages: projectLanguages[index] ?? {},
      };
    }
  );

  return {
    props: { page, projects: projectsWithLanguages },
  };
}

const HomePage: NextPageWithLayout<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ page, projects }) => {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
        />
      </Head>
      <Home pageData={page} projects={projects} />
    </>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page: ReactNode) {
  return <MainLayout>{page}</MainLayout>;
};

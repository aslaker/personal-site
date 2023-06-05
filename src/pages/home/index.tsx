import type { ReactNode } from "react";
import type { InferGetStaticPropsType } from "next";
import MainLayout from "../../layouts/MainLayout";
import type { Project } from "@prisma/client";
import { keystoneContext } from "../../keystone/context";
import type { NextPageWithLayout } from "../_app";
import { Home } from "@/components/home/Home";
import { type DeserializedPage } from "@/keystone/types";

export async function getStaticProps() {
  const page = (await keystoneContext.query.Page.findOne({
    where: { name: "Home" },
    query: "id name headerText aboutText{ document }",
  })) as DeserializedPage;
  const projects = (await keystoneContext.query.Project.findMany({
    query: "id name description siteUrl, codeUrl shortDescription technologies",
  })) as Project[];
  return {
    props: { page, projects },
  };
}

const HomePage: NextPageWithLayout<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ page, projects }) => {
  return (
    <>
      <Home pageData={page} projects={projects} />
      {/* <Head>
        <title>{page.name}</title>
      </Head>
      <div className="flex h-full max-h-screen flex-col gap-5 px-5 pt-5">
        <h1 className="text-4xl font-bold">{page.headerText}</h1>
        <div className="projects-display">
          {projects.map((project) => (
            <div
              className=" flex flex-col justify-between rounded-md bg-gray-100 shadow-lg lg:min-h-full"
              key={project.id}
            >
              <div className="bg-primary-400 flex items-center justify-between rounded-t-md p-3">
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
              <div className="h-full w-full rounded-md p-3">
                <p className="text-left text-sm">{project.shortDescription}</p>
              </div>
              <div className="flex items-center justify-between rounded-b-md bg-gray-200 p-2">
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
      </div> */}
    </>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page: ReactNode) {
  return <MainLayout>{page}</MainLayout>;
};

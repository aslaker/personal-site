import { DocumentRenderer } from "@keystone-6/document-renderer";
import { type Page, type Project } from "@prisma/client";
import Image from "next/image";
import React from "react";

type Props = {
  pageData: Page;
  projects: Project[];
};

export const Home: React.FC<Props> = ({ pageData, projects }) => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex flex-col gap-20 text-center">
        <div className="avatar">
          <div className="relative w-56 rounded-full">
            <Image fill src="/logo.png" alt="logo" />
          </div>
        </div>
        <div className="prose max-w-md">
          <h1 className="text-5xl font-bold">👋🏻 Hi I&apos;m Adam</h1>
          <span>
            <DocumentRenderer document={pageData.aboutText.document} />
          </span>
          {/* {pageData.aboutText} */}
          {/* <p className="py-6">
            I&apos;m a full stack engineer with a passion for building products.
          </p>
          <p>
            I specialize in using modern technologies to craft immersive digital
            experiences. With extensive experience collaborating with product
            and design teams, I thrive on bringing complex ideas to life and
            delivering exceptional results.
          </p> */}
          <button className="btn-primary btn">Get Started</button>
        </div>
      </div>
    </div>
  );
};

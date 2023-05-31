import React, { ReactNode } from "react";
import MainLayout from "../../layouts/MainLayout";
import type { Page } from "../../types/data.types";
import { InferGetStaticPropsType, NextLayoutComponentType } from "next";
import Head from "next/head";
import { keystoneContext } from "../../keystone/context";

export async function getStaticProps() {
  const context = await keystoneContext;
  const page = (await context.query.Page.findOne({
    where: { name: "About" },
    query: "name headerText aboutText",
  })) as Page;
  return {
    props: { page },
  };
}

const AboutPage: NextLayoutComponentType<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ page }) => {
  return (
    <>
      <Head>
        <title>{page.name}</title>
      </Head>
      <h1>{page.headerText}</h1>
      <p>{page.aboutText}</p>
    </>
  );
};

AboutPage.getLayout = function getLayout(page: ReactNode) {
  return <MainLayout>{page}</MainLayout>;
};

export default AboutPage;

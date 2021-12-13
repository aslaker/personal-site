import React, { ReactNode } from "react";
import MainLayout from "../../layouts/MainLayout";
import { query } from ".keystone/api";
import type { Page } from "../../types/data.types";
import { InferGetStaticPropsType, NextLayoutComponentType } from "next";
import Head from "next/head";

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

export async function getStaticProps() {
  const page: Page = await query.Page.findOne({
    where: { name: "About" },
    query: "name headerText aboutText",
  });
  return {
    props: { page },
  };
}

export default AboutPage;

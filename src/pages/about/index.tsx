import type { ReactNode } from "react";
import MainLayout from "../../layouts/MainLayout";
import type { Page } from "../../types/data.types";
import type { InferGetStaticPropsType } from "next";
import Head from "next/head";
import { keystoneContext } from "../../keystone/context";
import type { NextPageWithLayout } from "../_app";

export async function getStaticProps() {
  const page = (await keystoneContext.query.Page.findOne({
    where: { name: "About" },
    query: "name headerText aboutText",
  })) as Page;
  return {
    props: { page },
  };
}

const AboutPage: NextPageWithLayout<
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

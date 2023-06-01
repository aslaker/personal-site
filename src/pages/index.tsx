import type { InferGetStaticPropsType, NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import type { Page } from "../types/data.types";
import { keystoneContext } from "../keystone/context";

export async function getStaticProps() {
  const page = (await keystoneContext.query.Page.findOne({
    where: { name: "Home" },
    query: "name headerText aboutText{document}",
  })) as Page;
  return {
    props: { page },
  };
}

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  page,
}) => {
  return (
    <>
      <Head>
        <title>{page.name}</title>
      </Head>
      <div className="flex min-h-screen flex-col items-end justify-center gap-12 bg-base-100 p-10">
        <div className="flex flex-col items-end justify-start md:gap-4">
          <h1 className="font-sans text-xl md:text-7xl">
            Hi my name is{" "}
            <span className="text-primary-400 font-bold">
              <span className="text-primary">Adam</span> Slaker
            </span>
          </h1>
          <span className="font-sans text-lg md:text-5xl">
            I like to develop software.
          </span>
        </div>
        <Link href="/home" className="btn-primary btn">
          Enter
        </Link>
      </div>
    </>
  );
};

export default Home;

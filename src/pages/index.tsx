import type {
  GetStaticPropsResult,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import Link from "next/link";
import { query } from ".keystone/api";
import Head from "next/head";
import { Page } from "../types/data.types";

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  page,
}) => {
  return (
    <>
      <Head>
        <title>{page.name}</title>
      </Head>
      <div className="flex flex-col p-10 justify-center items-end gap-12 min-h-screen bg-gray-900 text-white">
        <div className="flex flex-col justify-start items-end md:gap-4">
          <h1 className="font-sans text-xl md:text-7xl">
            Hi my name is{" "}
            <span className="text-primary-400 font-bold">Adam Slaker</span>
          </h1>
          <span className="font-sans text-lg md:text-5xl">
            I like to develop software.
          </span>
        </div>
        <Link href="/projects">
          <a className="flex justify-center items-center bg-primary-400 rounded-md w-24 h-12 font-bold text-white">
            Enter
          </a>
        </Link>
      </div>
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const page = await query.Page.findOne({
    where: { name: "Home" },
    query: "name headerText aboutText",
  }) as Page;
  return {
    props: { page },
  };
}

import type {
  GetStaticPropsResult,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import Link from "next/link";
import Head from "next/head";
import { Page } from "../types/data.types";
import { keystoneContext } from "../keystone/context";

export async function getStaticProps() {
  const context = await keystoneContext;
  const page = (await context.query.Page.findOne({
    where: { name: "Home" },
    query: "name headerText aboutText",
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
      <div className="flex min-h-screen flex-col items-end justify-center gap-12 bg-gray-900 p-10 text-white">
        <div className="flex flex-col items-end justify-start md:gap-4">
          <h1 className="font-sans text-xl md:text-7xl">
            Hi my name is{" "}
            <span className="text-primary-400 font-bold">Adam Slaker</span>
          </h1>
          <span className="font-sans text-lg md:text-5xl">
            I like to develop software.
          </span>
        </div>
        <Link
          href="/projects"
          className="bg-primary-400 flex h-12 w-24 items-center justify-center rounded-md font-bold text-white"
        >
          Enter
        </Link>
      </div>
    </>
  );
};

export default Home;

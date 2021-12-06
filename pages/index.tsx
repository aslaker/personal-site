import type { GetStaticPropsResult, NextPage } from "next";
import Link from "next/link";
import { query } from ".keystone/api";
import type { InferGetStaticPropsType } from "next";

type Page = {
  headerText: string;
  aboutText: string;
};

const Home: NextPage<Page> = ({ headerText, aboutText }) => {
  return (
    <div className=" flex flex-col p-10 justify-center items-end gap-12 min-h-screen bg-gray-900 text-white">
      <div className="flex flex-col items-end">
        <h1 className="font-sans text-2xl">
          Hi my name is{" "}
          <span className="text-primary-400 font-bold">Adam Slaker</span>
        </h1>
        <p className="text-xl">I like to develop software.</p>
      </div>
      <Link href="/projects">
        <a className="flex justify-center items-center bg-green-400 rounded-md w-24 h-12 font-bold text-white">
          Enter
        </a>
      </Link>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const { headerText, aboutText } = await query.Page.findOne({
    where: { name: "Home" },
    query: "headerText aboutText",
  });
  return {
    props: { headerText, aboutText },
  };
}

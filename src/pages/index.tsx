import type {
  GetStaticPropsResult,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import Link from "next/link";
import { query } from ".keystone/api";

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  headerText,
  aboutText,
}) => {
  return (
    <div className="flex flex-col p-10 justify-center items-end md:items-center gap-12 min-h-screen bg-gray-900 text-white">
      <div className="flex flex-col items-end md:items-center md:gap-4">
        <h1 className="font-sans text-xl md:text-4xl">
          Hi my name is{" "}
          <span className="text-primary-400 font-bold">Adam Slaker</span>
        </h1>
        <p className="text-xl">I like to develop software.</p>
      </div>
      <Link href="/projects">
        <a className="flex justify-center items-center bg-primary-400 rounded-md w-24 h-12 font-bold text-white">
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

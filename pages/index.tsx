import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className=" flex flex-col p-10 justify-center items-end gap-12 min-h-screen bg-gray-900 text-white">
      <div className="flex flex-col items-end">
        <h1 className="font-sans text-2xl">
          Hi my name is <span className="text-primary-400">Adam Slaker</span>
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

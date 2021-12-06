import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className=" flex flex-col p-10 justify-center gap-12 items-end min-h-screen bg-gray-900">
      <h1 className="text-white font-sans text-3xl">
        Hi my name is <span className="text-primary-400">Adam Slaker</span>,
        come see some of the cool stuff I have built
      </h1>
      <button className="bg-green-400 rounded-md w-24 h-12 font-bold text-white">
        Cool Stuff
      </button>
    </div>
  );
};

export default Home;

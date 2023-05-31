import React from "react";
import { DiReact } from "react-icons/di";
import { GrGraphQl } from "react-icons/gr";

export type Technology =
  | "react"
  | "graphql"
  | "prisma"
  | "redwoodjs"
  | "netlify"
  | "faunadb"
  | "postgresql"
  | "nextjs"
  | "vercel";

interface Props {
  technology: Technology;
}

function getIcon(technologyType: Technology) {
  switch (technologyType) {
    case "react": {
      return <DiReact />;
    }
    case "graphql": {
      return <GrGraphQl />;
    }
    default: {
      return;
    }
  }
}

const TechIcon: React.FC<Props> = ({ technology }) => {
  return (
    <div
      className="w-full cursor-pointer"
      data-bs-toggle="tooltip"
      title={technology}
    >
      {getIcon(technology)}
    </div>
  );
};

export default TechIcon;

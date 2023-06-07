import { AiFillGithub } from "react-icons/ai";
import { SlScreenDesktop } from "react-icons/sl";
import { GITHUB_BASE_URL } from "../../../../../constants/url";

interface Props {
  name: string;
  description: string;
  siteUrl?: string;
  githubRepo?: string;
  languages: Record<string, number>;
}

export const ProjectCard: React.FC<Props> = ({
  name,
  description,
  githubRepo,
  siteUrl,
  languages,
}) => {
  return (
    <div className="card w-1/2 bg-base-100 shadow-xl">
      <div className="card-body bg-base-100">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="card-actions items-center justify-between">
          <div className="flex items-center">
            {Object.entries(languages).map(([language]) => (
              <i
                key={language}
                className={`devicon-${language.toLowerCase()}-plain colored text-5xl`}
              />
            ))}
          </div>
          <div className="join">
            {githubRepo ? (
              <a
                target="_blank"
                referrerPolicy="no-referrer"
                href={`${GITHUB_BASE_URL}/${githubRepo}`}
                className="join-item btn tooltip tooltip-left flex min-w-fit items-center justify-center p-3"
                data-tip="View Code on Github"
              >
                <AiFillGithub className="text-xl" />
              </a>
            ) : null}
            {siteUrl ? (
              <a
                target="_blank"
                referrerPolicy="no-referrer"
                href={siteUrl}
                className="btn-primary join-item btn tooltip tooltip-right flex min-w-fit items-center justify-center p-3"
                data-tip="View Live Site"
              >
                <SlScreenDesktop className="text-xl" />
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

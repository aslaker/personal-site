import { AiFillGithub } from "react-icons/ai";
import { SlScreenDesktop } from "react-icons/sl";

interface Props {
  name: string;
  description: string;
  siteUrl?: string;
  codeUrl?: string;
}

export const ProjectCard: React.FC<Props> = ({
  name,
  description,
  codeUrl,
  siteUrl,
}) => {
  return (
    <div className="card w-1/2 bg-base-100 shadow-xl">
      <div className="card-body bg-base-100">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <div className="join">
            {codeUrl ? (
              <a
                target="_blank"
                referrerPolicy="no-referrer"
                href={codeUrl}
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

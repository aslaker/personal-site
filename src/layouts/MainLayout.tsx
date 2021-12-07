import React, { useState } from "react";
import Link from "next/link";
import classNames from "classnames";

const MainLayout: React.FC = ({ children }) => {
  const [hideMenu, setHideMenu] = useState(true);
  return (
    <div className="relative min-h-screen flex flex-col md:items-stretch">
      <div
        className={classNames(
          {
            "bg-secondary-300": !hideMenu,
            "text-secondary-900": !hideMenu,
            "bg-secondary-900": hideMenu,
            "text-white": hideMenu,
          },
          "flex justify-end ease-in-out duration-500 p-3"
        )}
      >
        <button onClick={() => setHideMenu(!hideMenu)}>Menu</button>
      </div>
      <div className={classNames({ "-translate-x-full": hideMenu }, "navbar")}>
        <span className="font-bold text-2xl self-center text-primary-400">
          Logo
        </span>
        <nav className="flex flex-col items-center gap-10">
          <Link href="/projects">
            <a>Projects</a>
          </Link>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
          <Link href="/blog">
            <a>About Me</a>
          </Link>
        </nav>
      </div>
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;

import React, { useState } from "react";
import useLayoutEffect from "../hooks/useIsomorphicLayoutEffect";
import Link from "next/link";
import classNames from "classnames";

const MainLayout: React.FC = ({ children }) => {
  const [hideMenu, setHideMenu] = useState<boolean | null>(null);

  useLayoutEffect(() => {
    if (typeof window !== "undefined") {
      const mediumWindow = window.matchMedia("(min-width: 768px");
      if (mediumWindow.matches) {
        setHideMenu(false);
      } else {
        setHideMenu(true);
      }
    }
  }, []);

  const handleNavClick = () => {
    setHideMenu((state) => !state);
  };

  return (
    <div className="max-h-screen min-h-screen md:flex">
      <div
        className={classNames(
          {
            "bg-secondary-300": !hideMenu,
            "text-secondary-900": !hideMenu,
            "bg-secondary-900": hideMenu,
            "text-white": hideMenu,
          },
          "flex md:hidden justify-end ease-in-out duration-500 p-3"
        )}
      >
        <button onClick={handleNavClick}>Menu</button>
      </div>
      <div className={classNames({ "-translate-x-full": hideMenu }, "navbar")}>
        <span className="font-bold text-2xl self-center text-primary-400">
          <Link href="/">
            <a>Logo</a>
          </Link>
        </span>
        <nav className="flex flex-col items-center gap-10">
          <Link href="/projects">
            <a onClick={handleNavClick}>Projects</a>
          </Link>
          <Link href="/posts">
            <a onClick={handleNavClick}>Blog</a>
          </Link>
          <Link href="/about">
            <a onClick={handleNavClick}>About Me</a>
          </Link>
        </nav>
      </div>
      <main className="h-full w-full max-h-full">{children}</main>
    </div>
  );
};

export default MainLayout;

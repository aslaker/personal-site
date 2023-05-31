import React, { useState } from "react";
import useLayoutEffect from "../hooks/useIsomorphicLayoutEffect";
import Link from "next/link";
import classNames from "classnames";

type Props = {
  children: React.ReactNode;
};

const MainLayout: React.FC<Props> = ({ children }) => {
  const [isMobile, setIsMobile] = useState<boolean>(true);
  const [hideMenu, setHideMenu] = useState<boolean | null>(true);

  useLayoutEffect(() => {
    if (typeof window !== "undefined") {
      const mediumWindow = window.matchMedia("(min-width: 768px");
      if (mediumWindow.matches) {
        setIsMobile(false);
        setHideMenu(false);
      } else {
        setIsMobile(true);
        setHideMenu(true);
      }
    }
  }, []);

  const handleNavClick = () => {
    if (isMobile) {
      setHideMenu((state) => !state);
    } else {
      return;
    }
  };

  return (
    <div className="h-screen md:flex">
      <div
        className={classNames(
          {
            "bg-secondary-300": !hideMenu,
            "text-secondary-900": !hideMenu,
            "bg-secondary-900": hideMenu,
            "text-white": hideMenu,
          },
          "flex justify-end p-3 duration-500 ease-in-out md:hidden"
        )}
      >
        <button onClick={handleNavClick}>Menu</button>
      </div>
      <div className={classNames({ "-translate-x-full": hideMenu }, "navbar")}>
        <span className="text-primary-400 self-center text-2xl font-bold">
          <Link href="/">
            Logo
          </Link>
        </span>
        <nav className="flex flex-col items-center gap-10">
          <Link href="/projects" onClick={handleNavClick}>
            Projects
          </Link>
          <Link href="/posts" onClick={handleNavClick}>
            Blog
          </Link>
          <Link href="/about" onClick={handleNavClick}>
            About Me
          </Link>
        </nav>
      </div>
      <main className="h-full w-full">{children}</main>
    </div>
  );
};

export default MainLayout;

import Link from "next/link";
import { useEffect } from "react";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { useDarkMode } from "usehooks-ts";

interface Props {
  children: React.ReactNode;
}

const LIGHT_MODE = "emerald";
const DARK_MODE = "forest";

const MainLayout: React.FC<Props> = ({ children }) => {
  const { isDarkMode, toggle } = useDarkMode();

  useEffect(() => {
    document
      .querySelector("html")
      ?.setAttribute("data-theme", isDarkMode ? DARK_MODE : LIGHT_MODE);
  }, [isDarkMode]);
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn-ghost btn text-xl normal-case">
            <span className="text-primary">Adam</span> Slaker
          </a>
        </div>
        <nav className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/home">Home</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <label className="swap swap-rotate btn">
          {/* this hidden checkbox controls the state */}
          <input type="checkbox" checked={isDarkMode} onChange={toggle} />

          {/* light mode */}
          <BsFillSunFill className="swap-on w-10 text-xl" />

          {/* dark mode */}
          <BsFillMoonFill className="swap-off w-10 text-xl" />
        </label>
      </div>
      <main>{children}</main>
    </>
  );
};

export default MainLayout;

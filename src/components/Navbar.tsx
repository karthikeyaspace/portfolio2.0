import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { FaSuitcase } from "react-icons/fa6";
import { FaFileAlt } from "react-icons/fa";

const Navbar: React.FC<{
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}> = ({ theme, setTheme }) => {
  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    const page = navelements.find((element) => element.link === path);
    document.title = `Karthikeya | ${page?.name}`;
  }, [path]);

  const navelements = [
    {
      name: "Home",
      link: "/",
      logo: FaHome,
    },
    {
      name: "Projects",
      link: "/projects",
      logo: FaSuitcase,
    },
    {
      name: "Resume",
      link: "/resume",
      logo: FaFileAlt,
    },
  ];

  const handleTheme = () => {
    setTheme((prevTheme: string) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <nav className="z-20 h-20 w-screen fixed top-0 text-secondary ">
      <div className="hidden md:flex h-full backdrop-blur-sm  justify-center items-center">
        <div className="flex items-center text-md rounded-full border border-secondary/30 bg-primary">
          {navelements.map((element) => {
            const active =
              path === element.link ? "text-pink-600" : "text-secondary";
            return (
              <Link
                to={element.link}
                key={element.name}
                className={`w-28 p-1 rounded-full hover:text-pink-500 text-center  ${active}`}
              >
                {element.name}
              </Link>
            );
          })}
          <div onClick={handleTheme} className="cursor-pointer pr-2 pl-1 ">
            {theme === "dark" ? (
              <MdOutlineLightMode size={20} />
            ) : (
              <MdDarkMode size={20} />
            )}
          </div>
        </div>
      </div>

      <div className="fixed bottom-3 left-0 right-0 w-full md:hidden z-20 ">
        <div className="h-full w-3/4 flex mx-auto rounded-full backdrop-blur-lg bg-secondary/10 items-center">
          {navelements.map((element) => {
            const active =
              path === element.link ? " text-pink-400" : " text-secondary";
            return (
              <Link
                to={element.link}
                key={element.name}
                className={`flex-1 px-6 py-3 duration-150 ${active}`}
              >
                <element.logo size={20} />
              </Link>
            );
          })}
          <div onClick={handleTheme} className="cursor-pointer flex-1 px-6">
            {theme === "dark" ? (
              <MdOutlineLightMode size={20} />
            ) : (
              <MdDarkMode size={20} />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

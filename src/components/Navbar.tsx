import React from "react";
import { FaBook } from "react-icons/fa6";
import { IoHomeSharp } from "react-icons/io5";
import { LuFileSpreadsheet } from "react-icons/lu";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC<{
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}> = ({ theme, setTheme }) => {
  const location = useLocation();
  const path = location.pathname;
  const darkTheme = theme === "dark";

  const navelements = [
    {
      name: "Home",
      link: "/",
      logo: IoHomeSharp,
    },
    {
      name: "Projects",
      link: "/projects",
      logo: FaBook,
    },
    {
      name: "Resume",
      link: "/resume",
      logo: LuFileSpreadsheet,
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
              <MdLightMode fill="white" size={20} />
            ) : (
              <MdDarkMode fill="black" size={20} />
            )}
          </div>
        </div>
      </div>

      <div className="fixed bottom-3 left-0 right-0 w-full md:hidden z-20 ">
        <div className="h-full w-64 flex mx-auto rounded-full backdrop-blur-lg bg-secondary/10 items-center">
          {navelements.map((element) => {
            const active =
              path === element.link ? "#db2777" : darkTheme ? "white" : "black";
            return (
              <Link
                to={element.link}
                key={element.name}
                className="px-6 py-3 duration-150"
              >
                <element.logo size={18} fill={active} />
              </Link>
            );
          })}
          <div onClick={handleTheme} className="cursor-pointer px-6">
            {theme === "dark" ? (
              <MdLightMode size={18} fill="white" />
            ) : (
              <MdDarkMode size={18} fill="black" />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

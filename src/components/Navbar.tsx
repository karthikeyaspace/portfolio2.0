import React from "react";
import { FaBook } from "react-icons/fa6";
import { IoHomeSharp } from "react-icons/io5";
import { LuFileSpreadsheet } from "react-icons/lu";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "./ThemeContext";
import { links } from "../data/constants";

const Navbar: React.FC = () => {
  const location = useLocation();
  const path = location.pathname;
  const { theme, toggleTheme: handleTheme } = useTheme();

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

  return (
    <nav className="z-20 h-20 w-screen fixed top-0 text-secondary ">
      <div className="hidden md:flex h-full  justify-center items-center">
        <div className="flex items-center text-md rounded-full bg-secondary/15 backdrop-blur-xl shadow-lg">
          {navelements.map((element) => {
            const active =
              path === element.link ? "text-pink-600" : "text-secondary";
            return (
              <Link
                to={element.link}
                key={element.name}
                target={element.link === links.github ? "_blank" : "_self"}
                className={`w-28 py-3 rounded-full hover:text-pink-500 transition-colors duration-500 text-center ${active}`}
              >
                {element.name}
              </Link>
            );
          })}
        </div>
      </div>

      <div className="fixed bottom-3 left-0 right-0 w-full md:hidden z-20 ">
        <div className="grid grid-cols-3 w-52 mx-auto items-center text-md rounded-full bg-secondary/15 backdrop-blur-xl shadow-lg">
          {navelements.map((element) => {
            const active =
              path === element.link
                ? "#db2777"
                : theme === "dark"
                ? "white"
                : "black";
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
        </div>
      </div>
      <div
        onClick={handleTheme}
        className="absolute top-5 right-5 cursor-pointer pr-2 pl-1 "
      >
        {theme === "dark" ? (
          <MdLightMode fill="white" size={20} />
        ) : (
          <MdDarkMode fill="black" size={20} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;

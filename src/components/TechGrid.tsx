import React from "react";
import {
  FaCss3,
  FaGitAlt,
  FaHtml5,
  FaNode,
  FaPython,
  FaReact,
} from "react-icons/fa6";
import { PiFileSqlBold } from "react-icons/pi";
import { IoLogoJavascript } from "react-icons/io5";
import { SiCplusplus, SiMongodb, SiNextdotjs, SiPrisma, SiTailwindcss, SiTypescript } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

const LangGrid: React.FC = () => {
  const languages = [
    {
      name: "C++",
      icon: SiCplusplus,
      color: "#3B82F6", // blue-500
    },
    {
      name: "Python",
      icon: FaPython,
      color: "#F59E0B", // yellow-500
    },
    {
      name: "HTML",
      icon: FaHtml5,
      color: "#EF4444", // red-500
    },
    {
      name: "CSS",
      icon: FaCss3,
      color: "#3B82F6", // blue-500
    },
    {
      name: "React",
      icon: FaReact,
      color: "#3B82F6", // blue-500
    },
    {
      name: "Git",
      icon: FaGitAlt,
      color: "#EF4444", // red-500
    },
    {
      name: "SQL",
      icon: PiFileSqlBold,
      color: "#3B82F6", // blue-500
    },
    {
      name: "JavaScript",
      icon: IoLogoJavascript,
      color: "#f7e025", // yellow-500
    },
    {
      name: "Node.js",
      icon: FaNode,
      color: "#10B981", // green-500
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
      color: "#3B82F6", // blue-500
    },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      color: "#3B82F6", // blue-500
    },
    {
      name: "MongoDB",
      icon: SiMongodb,
      color: "#10B981", // green-500
    },
    {
      name: "NextJs",
      icon: SiNextdotjs,
    },
    {
      name: "Postgres",
      icon: BiLogoPostgresql,
      color: "#3B82F6", // blue-500
    },
    {
      name: "Prisma ORM",
      icon: SiPrisma,
      color: "#000000", // blue-500
    }
  ];

  return (
    <div>
      <div className="flex flex-col mb-4 gap-2">
        <h1 className="text-3xl">Tech Stack</h1>
        <div className="w-full h-[1px] bg-secondary/20"></div>
      </div>
      <div className="flex flex-row flex-wrap gap-4 items-center justify-center md:justify-start ">
        {languages.map((lang, index) => {
          return (
            <div
              key={index}
              className="group h-14 relative px-10 py-2 bg-blue-100 rounded-md flex 
              flex-col items-center justify-center transition-all duration-300"
            >
              <lang.icon
                fill={lang.color}
                size={34}
                className="text-5xl transition-opacity 
                  duration-300 group-hover:opacity-0"
              />
              <p
                className="absolute opacity-0 text-black text-lg 
              transition-opacity duration-300 group-hover:opacity-100"
              >
                {lang.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LangGrid;

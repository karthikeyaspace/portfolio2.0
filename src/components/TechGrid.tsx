import React from "react";
import Icon, { Icons } from "./Icon";

const LangGrid: React.FC = () => {
  const languages = [
    {
      name: "C++",
      icon: "cpp",
      color: "#3B82F6", // blue-500
    },
    {
      name: "Python",
      icon: "python",
      color: "#F59E0B", // yellow-500
    },
    {
      name: "HTML",
      icon: "html",
      color: "#EF4444", // red-500
    },
    {
      name: "CSS",
      icon: "css",
      color: "#3B82F6", // blue-500
    },
    {
      name: "React",
      icon: "react",
      color: "#3B82F6", // blue-500
    },
    {
      name: "Git",
      icon: "git",
      color: "#EF4444", // red-500
    },
    {
      name: "SQL",
      icon: "sql",
      color: "#3B82F6", // blue-500
    },
    {
      name: "JavaScript",
      icon: "js",
      color: "#f7e025", // yellow-500
    },
    {
      name: "Node.js",
      icon: "node",
      color: "#10B981", // green-500
    },
    {
      name: "TypeScript",
      icon: "typescript",
      color: "#3B82F6", // blue-500
    },
    {
      name: "Tailwind CSS",
      icon: "tailwind",
      color: "#3B82F6", // blue-500
    },
    {
      name: "MongoDB",
      icon: "mongodb",
      color: "#10B981", // green-500
    },
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
              <Icon
                icon={lang.icon as Icons}
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

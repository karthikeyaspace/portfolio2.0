import React from "react";
import data from "../assets/Projectdata";
import { FaGithub } from "react-icons/fa";
import { FaSquareArrowUpRight } from "react-icons/fa6";

const Projects: React.FC = () => {
  console.log(data);
  return (
    <div className="w-full mt-10 md:mt-14 px-6 pb-20 transition-all duration-300 flex flex-row flex-wrap justify-center gap-4">
      {data.projects.map((project, index) => (
        <div
          className="max-w-96 mb-12 rounded-md overflow-hidden border-[2px] border-secondary bg-primary text-secondary"
          key={index}
        >
          <div className="px-6 py-4">
            <div className="flex flex-row justify-between mb-3  ">
              <h3 className="font-bold text-xl mb-2">{project.name}</h3>
              <div className="flex flex-row justify-center gap-2">
                <a href={project.github} target="_blank">
                  {" "}
                  <FaGithub size={24}  />{" "}
                </a>
                {project.tryout && (
                  <a href={project.tryout} target="_blank">
                    {" "}
                    <FaSquareArrowUpRight size={24} />{" "}
                  </a>
                )}
              </div>
            </div>
            <p className="text-base">{project.description}</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            {project.techStack.map((tech, index) => (
              <span
                key={index}
                className="mr-2 mb-2 px-3 py-1 text-sm text-gray-700 inline-block bg-gray-200 rounded-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;

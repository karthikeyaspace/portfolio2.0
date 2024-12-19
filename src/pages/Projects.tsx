import React from "react";
import { projects } from "../data/projects";
import { useOutletContext } from "react-router-dom";
import { SiGithub } from "react-icons/si";
import { FaLocationArrow } from "react-icons/fa6";

const Projects: React.FC = () => {
  const { theme } = useOutletContext<{ theme: string }>();
  const fillcolor = theme === "dark" ? "white" : "black";

  return (
    <div className="max-w-7xl mx-auto px-4 md:pt-10 pb-10">
      <p className="text-secondary/50 italic text-sm pb-4">
        Last updated: 7th Dec 2024
      </p>
      <div className="flex flex-row flex-wrap justify-center gap-4">
        {projects.map((project, index) => (
          <div
            className="max-w-96 mb-12 rounded-sm overflow-hidden border border-secondary/40 bg-primary text-secondary"
            key={index}
          >
            <div className="px-6 py-4">
              <div className="flex flex-row justify-between mb-3  ">
                <a href={project.github}>
                  <h3 className="text-xl mb-2">{project.name}</h3>
                </a>
                <div className="flex flex-row justify-center gap-2">
                  <a href={project.github} target="_blank">
                    {" "}
                    <SiGithub fill={fillcolor} size={18} />
                  </a>
                  {project.try && (
                    <a href={project.try} target="_blank">
                      {" "}
                      <FaLocationArrow fill={fillcolor} size={18} />
                    </a>
                  )}
                </div>
              </div>
              <p className="text-base text-secondary/80 pb-4">
                {project.description}
              </p>
              {project.tech?.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 mb-2 px-3 py-1 text-sm text-primary inline-block bg-secondary/80 rounded-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

import React from "react";
import { projects } from "../data/projects";
import { SiGithub } from "react-icons/si";
import { FaLocationArrow } from "react-icons/fa6";
import { links } from "../data/constants";
import { useTheme } from "../components/ThemeContext";
import { ProjectsSEO } from "../components/SEO";

const Projects: React.FC = () => {
  const { theme } = useTheme();
  const iconColor = theme === "dark" ? "white" : "black";

  console.log(projects)

  return (
    <div className="max-w-7xl mx-auto px-4 pt-4 md:pt-20 pb-10">
      {/* Header */}
      <ProjectsSEO />
      <div className="flex flex-row justify-between items-center mb-4">
        <div>
          <p className="text-secondary/60 text-sm mb-2">
            Last updated: 8th Jan 2025
          </p>
          <a
            href={links.github + "?tab=repositories"}
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-500 hover:text-blue-600"
          >
            See what I’m building now
          </a>
        </div>
        <p className="text-gray-500 text-sm italic">
          {projects.length} projects found
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-4 border border-secondary/20 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            {/* Project Header */}
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold hover:underline">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.name}
                </a>
              </h3>
              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80"
                >
                  <SiGithub size={18} fill={iconColor} />
                </a>
                {project.try && (
                  <a
                    href={project.try}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80"
                  >
                    <FaLocationArrow size={18} fill={iconColor} />
                  </a>
                )}
              </div>
            </div>

            {/* Project Description */}
            <p className="text-secondary/80 mb-4">{project.description}</p>

            {/* Technologies Used */}
            <div className="flex flex-wrap gap-2">
              {project.tech?.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm bg-secondary/10 rounded-lg"
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

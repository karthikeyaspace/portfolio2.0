import React from "react";
import data from "../assets/Projectdata";
import { Link } from "react-router-dom";

const Projects2: React.FC = () => {
  const homedata = Array.isArray(data.projects)
    ? data.projects.slice(0, 2)
    : [];
  return (
    <div className="w-full mt-16 flex flex-col md:max-w-[80%] lg:max-w-[50%] mx-auto">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl md:text-4xl">Projects</h1>
        <div className="w-full h-[1px] bg-secondary/20"></div>
      </div>
      <div className="mt-8 w-full transition-all duration-300  flex flex-row flex-wrap justify-between">
        {homedata.map((project, index) => (
          <div
            className=" mb-6 rounded-md overflow-hidden border-[1px] border-secondary bg-primary text-secondary"
            key={index}
          >
            <div className="p-4">
              <h3 className="font-bold text-xl mb-2">{project?.name}</h3>
              <p className="text-base">{project?.description}</p>
            </div>
            <div className="px-4 py-2">
              {project.techStack?.map((tech, index) => (
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
      <Link to="projects" className="z-10 ml-auto">
        <button className="px-4 py-1 text-xs bg-primary text-secondary border border-secondary italic">
          View More
        </button>
      </Link>
    </div>
  );
};

export default Projects2;

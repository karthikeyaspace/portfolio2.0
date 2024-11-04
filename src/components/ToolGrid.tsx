import React from "react";
import {
  SiCanva,
  SiDiscord,
  SiDocker,
  SiFramer,
  SiGithub,
  SiGooglecloud,
  SiNotion,
  SiPostman,
  SiSupabase,
  SiVercel,
  SiVisualstudiocode,
} from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";

const TechGrid: React.FC = () => {
  const technologies = [
    {
      name: "VS Code",
      icon: SiVisualstudiocode,
      color: "#007ACC", 
    },
    {
      name: "Discord",
      icon: SiDiscord,
      color: "#5865F2", 
    },
    {
      name: "Vercel",
      icon: SiVercel,
      color: "#000000", 
    },
    {
      name: "GCP",
      icon: SiGooglecloud,
      color: "#F9AB00", 
    },
    {
      name: "Postman",
      icon: SiPostman,
      color: "#FF6C37", 
    },
    {
      name: "Github",
      icon: SiGithub,
      color: "#000000", 
    },
    {
      name: "Framer",
      icon: SiFramer,
      color: "#000000", 
    },
    {
      name: "Firebase",
      icon: IoLogoFirebase,
      color: "#de3308", 
    },
    {
      name: "Supabase",
      icon: SiSupabase,
      color: "#3ECF8E", 
    },
    {
      name: "Docker",
      icon: SiDocker,
      color: "#0db7ed", 
    },
    {
      name: "Notion",
      icon: SiNotion,
      color: "#000000", 
    },
  ];

  return (
    <div className="md:max-w-[80%] lg:max-w-[50%] mx-auto">
      <div className="flex flex-col mb-4 gap-2">
        <h1 className="text-3xl">Tool Stack</h1>
        <div className="w-full h-[1px] bg-secondary/20"></div>
      </div>
      <div className="mt-8 flex flex-row flex-wrap gap-4 items-center justify-center md:justify-start">
        {technologies.map((tech, index) => {
          return (
            <div
              key={index}
              className="group h-14 relative px-10 py-2 bg-blue-100 rounded-md flex flex-col items-center justify-center transition-all duration-300 "
            >
              <tech.icon
                size={34}
                fill={tech.color}
                className="text-5xl transition-opacity duration-300 group-hover:opacity-0"
              />
              <p className="absolute opacity-0 text-black text-lg transition-opacity duration-300 group-hover:opacity-100">
                {tech.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TechGrid;

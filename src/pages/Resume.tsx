import React from "react";
import { links } from "../data/constants";

const Resume: React.FC = () => {
  return (
    <div className="pt-20 max-w-2xl mx-auto">
      <iframe
        src={links.resume + "/preview"}
        className="w-full h-screen"
      ></iframe>

      <a href={links.resume + "/view"} target="_blank">
        <button className="px-2 py-1 my-10 bg-primary text-sm text-secondary/80 border border-secondary/30">
          View in drive
        </button>
      </a>
    </div>
  );
};

export default Resume;

import React from "react";
import { links } from "../data/constants";

const Resume: React.FC = () => {
  return (
    <div className="pt-20 max-w-2xl mx-auto px-4">

      <div className="rounded-lg overflow-hidden shadow-lg bg-secondary/50">
        <iframe
          src={links.resume + "/preview"}
          className="w-full h-screen"
          title="Resume Preview"
          allowFullScreen
        />
      </div>

      <div className="flex justify-center pt-8 pb-20 md:pb-8">
        <a
          href={links.resume + "/view"}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <button className="px-4 py-2 text-sm bg-primary text-secondary/80 border border-secondary/30 rounded-lg hover:bg-secondary/10 hover:border-secondary/50 transition-all duration-300">
            View in Drive
          </button>
        </a>
      </div>
    </div>
  );
};

export default Resume;

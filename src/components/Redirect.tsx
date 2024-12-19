import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { links } from "../data/constants";

const linkMap = {
  g: links.github,
  l: links.linkedin,
  r: links.resume,
};

type SiteLetter = keyof typeof linkMap | "*";

const Redirect: React.FC<{ site: SiteLetter }> = ({ site }) => {
  const navigate = useNavigate();
  const [url, setUrl] = useState<string | undefined>(undefined);
  const [isNotFound, setIsNotFound] = useState(false);

  useEffect(() => {
    if (site in linkMap) setUrl(linkMap[site as keyof typeof linkMap]);
    else setIsNotFound(true);
  }, [site]);

  useEffect(() => {
    if (url) window.location.href = url;
  }, [url]);

  if (isNotFound) {
    return (
      <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
        <div className="max-w-5xl text-center">
          <h1 className="text-4xl font-normal text-gray-900 leading-tight">
            404
          </h1>
          <p className="text-base text-gray-600 mb-2">Page not found</p>

          <button
            className="text-lg mt-10 text-black hover:underline"
            onClick={() => navigate("/")}
          >
            Go to home
          </button>
        </div>
      </div>
    );
  } else
    return (
      <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
        <div className="flex text-center px-4 text-black gap-1">
          <p>taking you to my </p>
          <p className="lowercase">
            {site === "g" && "github"}
            {site === "l" && "linkedin"}
            {site === "r" && "resume"}
          </p>
        </div>
      </div>
    );
};

export default Redirect;

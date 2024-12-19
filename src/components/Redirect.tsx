import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { links } from "../data/constants";

const Redirect: React.FC<{ site: "g" | "l" | "r" | "*" }> = ({ site }) => {
  const navigate = useNavigate();
  const [url, setUrl] = useState<string | undefined>(undefined);
  const [isNotFound, setIsNotFound] = useState(false);

  useEffect(() => {
    switch (site) {
      case "g":
        setUrl(links.github);
        break;
      case "l":
        setUrl(links.linkedin);
        break;
      case "r":
        setUrl(links.resume);
        break;
      case "*":
        setIsNotFound(true);
        return;
      default:
        setIsNotFound(true);
        return;
    }
  }, [site]);

  useEffect(() => {
    if (url) {
      const timeoutId = setTimeout(() => {
        window.location.href = url;
      }, 1500);

      return () => clearTimeout(timeoutId);
    }
  }, [url]);

  if (isNotFound) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center">
          <h1 className="text-9xl font-bold text-gray-800 mb-4">404</h1>
          <p className="text-2xl text-gray-600 mb-8">Page Not Found</p>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="text-center">
        <h1 className="text-3xl font-semibold text-gray-700 mb-4">
          Taking you to{" "}
          {site === "g" ? "GitHub" : site === "l" ? "LinkedIn" : "Resume"}
        </h1>
        <p className="text-gray-500 mb-6">You will be redirected shortly...</p>
        <div className="flex justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
        </div>
      </div>
    </div>
  );
};

export default Redirect;

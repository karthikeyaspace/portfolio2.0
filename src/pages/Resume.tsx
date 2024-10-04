import React, { useState, useEffect } from "react";
import pdf from "../assets/resume.pdf";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const Resume: React.FC = () => {
  const [scale, setScale] = useState(1.5);

  useEffect(() => {
    const updateScale = () => {
      const width = window.innerWidth;
      if (width < 600) {
        setScale(0.6);
      } else if (width < 1000) {
        setScale(1);
      } else {
        setScale(1.5);
      }
    };
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return (
    <div className="mt-10 md:pt-10 md:mt-6 bg-primary  min-h-screen">
      <Document file={pdf} className="pdf flex justify-center">
        <Page pageNumber={1} scale={scale} />
      </Document>
      <div className="text-center mt-6 sm:mt-0">
        <a href={"https://drive.google.com/file/d/1ymfNaZMDeBEVfmCYxL4Ey1gKO8KAGOy9/view?usp=sharing"} target="_blank">
          <button className="px-2 py-1 my-10 bg-primary text-xs text-secondary/80 border border-secondary/30">
            View in drive
          </button>
        </a>
      </div>
    </div>
  );
};

export default Resume;

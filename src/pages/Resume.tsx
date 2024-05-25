import React, { useState, useEffect } from "react";
import pdf from "../assets/resume.pdf";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

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
    <div className="mt-10 md:mt-14 bg-primary  min-h-screen">
      <div className="">
        <Document file={pdf} className="pdf"  >
          <Page pageNumber={1} scale={scale}  />
        </Document>
      </div>

      <div className="text-center py-8 px-0 mt-6 sm:mt-0">
        <a href={pdf} download>
          <button className="px-6 py-3 bg-primary text-secondary italic font-bold border-2 border-secondary my-4  transition-all hover:bg-secondary hover:text-primary ">Download Resume</button>
        </a>
      </div>
    </div>
  );
}

export default Resume;

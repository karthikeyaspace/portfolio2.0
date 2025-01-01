import React from "react";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollTop";
import { Analytics } from "@vercel/analytics/react";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Redirect from "./components/Redirect";
import SEO from "./components/SEO";
import { useTheme } from "./components/ThemeContext";
import { Routes, Route } from "react-router-dom";

const App: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className={`${theme} bg-primary text-secondary`}>
      <SEO />
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="resume" element={<Resume />} />
        <Route path="g" element={<Redirect site="g" />} />
        <Route path="l" element={<Redirect site="l" />} />
        <Route path="r" element={<Redirect site="r" />} />
        <Route path="*" element={<Redirect site="*" />} />
      </Routes>
      <Analytics />
    </div>
  );
};

export default App;

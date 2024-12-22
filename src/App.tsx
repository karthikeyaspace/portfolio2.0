import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollTop";
import { Analytics } from "@vercel/analytics/react";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Redirect from "./components/Redirect";

interface OutletContextValue {
  theme: string;
}

const Root: React.FC = () => {
  const path = useLocation().pathname;
  const [theme, setTheme] = useState<string>(() => {
    const storedTheme = localStorage.getItem("theme");
    const sysTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
    return storedTheme !== null ? storedTheme : sysTheme;
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    if (path === "/projects") document.title = `Projects | Karthikeya Veruturi`;
    else if (path === "/resume")
      document.title = `Resume | Karthikeya Veruturi`;
  }, [path]);

  const context: OutletContextValue = {
    theme,
  };

  return (
    <div className={`${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} />
      <ScrollToTop />
      <div className="pt-10 bg-primary text-secondary">
        <Outlet context={context} />
      </div>
      <Analytics />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="resume" element={<Resume />} />
          <Route path="g" element={<Redirect site="g" />} />
          <Route path="l" element={<Redirect site="l" />} />
          <Route path="r" element={<Redirect site="r" />} />
          <Route path="*" element={<Redirect site="*" />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

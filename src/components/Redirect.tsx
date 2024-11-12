import { useEffect } from "react";

const Redirect = ({ site }: { site: "g" | "l" | "r" }) => {
  useEffect(() => {
    if (site === "g")
      window.location.href = "https://github.com/karthikeyaspace";
    else if (site === "l")
      window.location.href = "https://linkedin.com/in/karthikeyaveruturi";
  }, []);
  return null;
};

export default Redirect;

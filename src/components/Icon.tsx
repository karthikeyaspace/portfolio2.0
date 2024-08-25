import React from "react";
import { svgicons } from "../assets/icons";

export type Icons =
  | "github"
  | "linkedin"
  | "twitter"
  | "lightmode"
  | "darkmode"
  | "home"
  | "projects"
  | "resume"
  | "cpp"
  | "python"
  | "html"
  | "css"
  | "react"
  | "git"
  | "sql"
  | "js"
  | "node"
  | "typescript"
  | "tailwind"
  | "mongodb"
  | "vscode"
  | "gcp"
  | "canva"
  | "discord"
  | "vercel"
  | "postman"
  | "firebase"
  | "supabase"
  | "rightuparrow"
  | "projgithub"
  | "tailspin";

interface IconProps {
  icon: Icons;
  fill?: string;
  size?: number;
  className?: string;
}

const svgToDataURL = (svgString: string): string => {
  return `data:image/svg+xml;base64,${btoa(svgString)}`;
};

const Icon: React.FC<IconProps> = ({ icon, fill, size = "28", className }) => {
  const theme = localStorage.getItem("theme");
  const basefill = theme === "dark" ? "white" : "black";
  if (!fill) fill = basefill;
  const svgString = svgicons(fill)[icon];
  const svgDataURL = svgToDataURL(svgString);
  return (
    <img
      src={svgDataURL}
      alt={icon}
      width={`${size}px`}
      height={`${size}px`}
      className={className}
    />
  );
};

export default Icon;

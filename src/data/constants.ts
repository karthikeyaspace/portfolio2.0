import {
  FaCss3,
  FaGitAlt,
  FaGolang,
  FaHtml5,
  FaNode,
  FaPython,
  FaReact,
} from "react-icons/fa6";
import { PiFileSqlBold } from "react-icons/pi";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiCplusplus,
  SiFastapi,
  SiMongodb,
  SiNextdotjs,
  SiPrisma,
  SiTailwindcss,
  SiTypescript,
  SiDiscord,
  SiDocker,
  SiGithub,
  SiGooglecloud,
  SiNotion,
  SiPostman,
  SiSupabase,
  SiVercel,
  SiVisualstudiocode,
  SiAmazonwebservices,
} from "react-icons/si";
import { HiMiniArrowsRightLeft } from "react-icons/hi2";
import { BiLogoPostgresql } from "react-icons/bi";
import { IoLogoFirebase } from "react-icons/io5";
import {
  SiGraphql,
  SiSlack,
  SiTrello,
  SiFigma,
  SiMapbox,
} from "react-icons/si";

const experiences = [
  {
    role: "Frontend Next.js Developer Intern",
    company: "Intripid Inc (Remote)",
    tenure: "Jan 2025 - June 2025",
    description:
      "Developing and enhancing user-friendly UI/UX for a seamless platform for travel discovery, itinerary creation, trip management, travel planning",
    tech: [
      { name: "Next.js", icon: SiNextdotjs, color: "#696969" },
      { name: "TypeScript", icon: SiTypescript, color: "#3B82F6" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#3B82F6" },
      { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
      { name: "WebSocket", icon: HiMiniArrowsRightLeft, color: "#696969" },
      { name: "Mapbox", icon: SiMapbox, color: "#4264FB" },
    ],
    tools: [
      { name: "Slack", icon: SiSlack, color: "#da1d5b" },
      { name: "Trello", icon: SiTrello, color: "#0079BF" },
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
    ],
  },
];

const links = {
  github: "https://github.com/karthikeyaspace",
  linkedin: "https://www.linkedin.com/in/karthikeyaveruturi",
  email: "karthikeyaveruturi2004@gmail.com",
  resume: "https://drive.google.com/file/d/1ymfNaZMDeBEVfmCYxL4Ey1gKO8KAGOy9",
};

const techs = [
  {
    name: "C++",
    icon: SiCplusplus,
    color: "#3B82F6",
  },
  {
    name: "Python",
    icon: FaPython,
    color: "#F59E0B",
  },
  {
    name: "HTML",
    icon: FaHtml5,
    color: "#EF4444",
  },
  {
    name: "CSS",
    icon: FaCss3,
    color: "#3B82F6",
  },
  {
    name: "React",
    icon: FaReact,
    color: "#3B82F6",
  },
  {
    name: "Git",
    icon: FaGitAlt,
    color: "#EF4444",
  },
  {
    name: "SQL",
    icon: PiFileSqlBold,
    color: "#3B82F6",
  },
  {
    name: "JavaScript",
    icon: IoLogoJavascript,
    color: "#f7e025",
  },
  {
    name: "Node.js",
    icon: FaNode,
    color: "#10B981",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3B82F6",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#3B82F6",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "#10B981",
  },
  {
    name: "NextJs",
    icon: SiNextdotjs,
  },
  {
    name: "Postgres",
    icon: BiLogoPostgresql,
    color: "#3B82F6",
  },
  {
    name: "Prisma ORM",
    icon: SiPrisma,
    color: "#000000",
  },
  {
    name: "Fastapi",
    icon: SiFastapi,
    color: "#009485",
  },
  {
    name: "Golang",
    icon: FaGolang,
    color: "#00ADD8",
  },
];

const tools = [
  {
    name: "VS Code",
    icon: SiVisualstudiocode,
    color: "#007ACC",
  },
  {
    name: "Discord",
    icon: SiDiscord,
    color: "#5865F2",
  },
  {
    name: "Vercel",
    icon: SiVercel,
    color: "#000000",
  },
  {
    name: "GCP",
    icon: SiGooglecloud,
    color: "#F9AB00",
  },
  {
    name: "Postman",
    icon: SiPostman,
    color: "#FF6C37",
  },
  {
    name: "Github",
    icon: SiGithub,
    color: "#000000",
  },
  {
    name: "Firebase",
    icon: IoLogoFirebase,
    color: "#de3308",
  },
  {
    name: "Supabase",
    icon: SiSupabase,
    color: "#3ECF8E",
  },
  {
    name: "Docker",
    icon: SiDocker,
    color: "#0db7ed",
  },
  {
    name: "Notion",
    icon: SiNotion,
    color: "#000000",
  },
  {
    name: "AWS",
    icon: SiAmazonwebservices,
    color: "#FF9900",
  },
];

export { techs, links, tools, experiences };

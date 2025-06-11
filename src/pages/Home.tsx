import React from "react";
import Landing from "../components/Landing";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import { experiences, techs, tools } from "../data/constants";
import { projects } from "../data/projects";
import GitHubCalendar from "react-github-calendar";
import { useTheme } from "../components/ThemeContext";
import { HiHeart } from "react-icons/hi";

const Home: React.FC = () => {
  const { theme } = useTheme();
  const homedata = Array.isArray(projects) ? projects.slice(0, 2) : [];

  return (
    <div className="space-y-14 mx-auto flex flex-col items-center pt-10 ">
      <Landing />

      {/* About */}
      <div className="max-w-3xl px-4 md:px-0">
        <Reveal>
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <div className="space-y-2 text-secondary/80">
            <p className="text-lg leading-snug">
              A 3rd-year Computer Science student from Hyderabad, India, with a
              passion for Full-stack development, Generative AI, Machine
              learning and Golang. I love to build things in public and write
              clean code. I Learn new tech by building projects with it.
              Constantly seeking new opportunities to learn and grow, I thrive
              in collaborative work and team environments. Beyond tech, I enjoy
              playing basketball, cricket, and watching movies.
            </p>
            <Link
              to={"/resume"}
              className="underline text-blue-500 leading-8 italic"
            >
              peek at my resume
            </Link>
          </div>
        </Reveal>
      </div>

      {/* Tech Stack */}
      <div className="max-w-3xl px-4 md:px-0">
        <Reveal>
          <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            {techs.map((tech, index) => (
              <div
                key={index}
                className="flex items-center gap-2 p-3 bg-secondary/10 rounded-lg"
              >
                <tech.icon fill={tech.color} size={24} />
                <span className="text-secondary/80">{tech.name}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Tool Stack */}

      <div className="max-w-3xl px-4 md:px-0">
        <Reveal>
          <h2 className="text-2xl font-semibold mb-4">Tools I Use</h2>
          <div className="flex flex-wrap gap-3">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="flex items-center gap-2 p-3 bg-secondary/10 rounded-lg"
              >
                <tool.icon fill={tool.color} size={24} />
                <span className="text-secondary/80">{tool.name}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Recent experiances */}

      <div className="w-full max-w-3xl px-4 md:px-0">
        <Reveal>
          <h2 className="text-2xl font-semibold mb-4">Experiences</h2>
          <div className="space-y-6">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className="p-6 border border-secondary/20 rounded-lg"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold">{experience.role}</h3>
                  <p className="text-secondary/60 text-sm italic">
                    {experience.tenure}
                  </p>
                </div>
                <p className="text-secondary/80">{experience.company}</p>
                <p className="mt-2 text-secondary/80">
                  {experience.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {experience.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="flex items-center gap-2 px-2 py-1 text-sm bg-secondary/10 rounded-lg"
                    >
                      <tech.icon fill={tech.color} size={20} />
                      <span className="text-secondary/80">{tech.name}</span>
                    </span>
                  ))}
                  {experience.tools.map((tool, index) => (
                    <span
                      key={index}
                      className="flex items-center gap-2 px-2 py-1 text-sm bg-secondary/10 rounded-lg"
                    >
                      <tool.icon fill={tool.color} size={20} />
                      <span className="text-secondary/80">{tool.name}</span>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Recent Projects */}

      <div className="max-w-3xl px-4 md:px-0">
        <Reveal>
          <h2 className="text-2xl font-semibold mb-4">Recent Projects</h2>
          <div className="space-y-6">
            {homedata.map((project, index) => (
              <div
                key={index}
                className="p-6 border border-secondary/20 rounded-lg"
              >
                <a
                  href={project.github}
                  className="text-xl font-semibold hover:underline"
                >
                  {project.name}
                </a>
                <p className="mt-2 text-secondary/80">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech?.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm bg-secondary/10 rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <Link
            to="/projects"
            className="inline-block mt-4 text-blue-500 underline italic"
          >
            View all projects
          </Link>
        </Reveal>
      </div>

      {/* Github Stats */}

      <div className="max-w-3xl px-4 md:px-0 mx-auto w-full">
        <h1 className="text-2xl font-semibold mb-4">Github activity</h1>
        <div className="flex justify-center opacity-80 pb-8 w-full">
          <GitHubCalendar
            username="karthikeyaspace"
            blockSize={11}
            blockMargin={3}
            errorMessage="Could not load GitHub calendar of karthikeyaspace"
            colorScheme={theme === "light" ? "dark" : "light"}
            fontSize={10}
          />
        </div>
      </div>

      {/* Footer */}

      <div className="flex justify-center text-sm italic opacity-40 hover:opacity-100 cursor-pointer">
        <p className="flex items-center">
          built by{" "}
          <a
            href="https://linkedin.com/in/karthikeyaveruturi"
            target="_blank"
            className="ml-1 underline"
          >
            karthikeya
          </a>
          <HiHeart className="ml-1" color="red" />
        </p>
      </div>
    </div>
  );
};

export default Home;

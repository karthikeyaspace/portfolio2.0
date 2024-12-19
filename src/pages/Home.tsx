import React, { useState } from "react";
import Landing from "../components/Landing";
import { Link, useOutletContext } from "react-router-dom";
import Reveal from "../components/Reveal";
import { BiHeart } from "react-icons/bi";
import { techs, links, tools } from "../data/constants";
import { projects } from "../data/projects";
import GitHubCalendar from "react-github-calendar";
import axios from "axios";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

interface Mail {
  name: string;
  email: string;
  message: string;
}

const Home: React.FC = () => {
  const { theme } = useOutletContext<{ theme: string }>();
  const homedata = Array.isArray(projects) ? projects.slice(0, 2) : [];

  const [mail, setMail] = useState<Mail>({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState<boolean>(false);
  const [stats, setStats] = useState<{ message: string; type: string }>({
    message: "",
    type: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(links.api, mail);
      if (res.data.success) {
        setMail({ name: "", email: "", message: "" });
        setStats({ message: res.data.message, type: "success" });
      } else {
        setStats({ message: res.data.message, type: "error" });
      }
    } catch (error) {
      setStats({ message: "An error occured", type: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-14 mx-auto flex flex-col items-center px-4 md:px-0">
      <Landing theme={theme} />

      {/* About */}

      <div className="max-w-3xl">
        <Reveal>
          <h1 className="text-3xl mb-2">About</h1>
          <div className="h-[1px] bg-secondary/30 mb-4"></div>
          <div className="space-y-2 text-secondary/80">
            <p className="text-md">
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

      <div className="max-w-3xl">
        <Reveal>
          <h1 className="text-3xl mb-2">Tech stack</h1>
          <div className="h-[1px] bg-secondary/20 mb-4"></div>
          <div className="flex flex-row flex-wrap gap-3 items-center justify-center md:justify-start">
            {techs.map((tech, index) => (
              <div
                key={index}
                className="group h-14 relative px-10 py-2 bg-blue-100 rounded-sm flex flex-col items-center justify-center transition-all duration-300 cursor-crosshair"
              >
                <tech.icon
                  fill={tech.color}
                  size={34}
                  className="text-5xl transition-opacity duration-300 group-hover:opacity-0"
                />
                <p
                  className="absolute opacity-0 text-black text-lg 
              transition-opacity duration-300 group-hover:opacity-100"
                >
                  {tech.name}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Tool Stack */}

      <div className="max-w-3xl">
        <Reveal>
          <h1 className="text-3xl mb-2">Tool stack</h1>
          <div className="h-[1px] bg-secondary/30 mb-4"></div>
          <div className="flex flex-row flex-wrap gap-3 items-center justify-center md:justify-start">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="group h-14 relative px-10 py-2 bg-blue-100 rounded-sm flex flex-col items-center justify-center transition-all duration-300 cursor-crosshair"
              >
                <tool.icon
                  fill={tool.color}
                  size={34}
                  className="text-5xl transition-opacity duration-300 group-hover:opacity-0"
                />
                <p
                  className="absolute opacity-0 text-black text-lg 
              transition-opacity duration-300 group-hover:opacity-100"
                >
                  {tool.name}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Recent Projects */}

      <div className="max-w-3xl">
        <Reveal>
          <h1 className="text-3xl mb-2">Recent projects</h1>
          <div className="h-[1px] bg-secondary/30 mb-4"></div>
          {homedata.map((project, index) => (
            <div
              className="mb-6 rounded-sm overflow-hidden border border-secondary/50  text-secondary"
              key={index}
            >
              <div className="p-4">
                <a href={project.github}>
                  <h3 className="text-xl mb-2">{project.name}</h3>
                </a>
                <p className="text-base text-secondary/80">
                  {project.description}
                </p>
              </div>
              <div className="px-4 py-2">
                {project.tech?.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 mb-2 px-3 py-1 text-sm text-gray-700 inline-block bg-gray-200 rounded-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
          <Link to="projects" className="z-10 ml-auto">
            <button className="px-4 py-1 text-xs bg-primary text-secondary border border-secondary italic">
              /projects
            </button>
          </Link>
        </Reveal>
      </div>

      {/* Github Stats */}

      <div className="max-w-3xl mx-auto w-full">
        <h1 className="text-3xl mb-2">Github activity</h1>
        <div className="h-[1px] bg-secondary/30 mb-4"></div>
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

      {/* Contact */}

      <div className="max-w-3xl w-full">
        <Reveal>
          <h1 className="text-3xl mb-2">Contact me</h1>
          <div className="h-[1px] bg-secondary/30"></div>
          <form onSubmit={handleSubmit} className="space-y-2">
            <p
              className={`text-left text-sm py-1 italic  ${
                stats.type === "success" ? "text-green-700" : "text-red-600"
              }`}
            >
              {stats.message ? (
                stats.message
              ) : (
                <p className="text-secondary/60">send me an email</p>
              )}
            </p>

            <div className="w-full flex justify-center items-center flex-wrap gap-3">
              <input
                type="text"
                placeholder="Name"
                value={mail.name}
                className="flex-1 p-3 bg-transparent border-2 border-secondary/40 focus:border-secondary focus:border-2 focus:outline-none rounded-sm  "
                required
                onChange={(e) => setMail({ ...mail, name: e.target.value })}
              />
              <input
                type="email"
                placeholder="Email"
                value={mail.email}
                className="flex-1 p-3 bg-transparent border-2 border-secondary/40 focus:border-secondary focus:border-2 focus:outline-none rounded-sm "
                required
                onChange={(e) => setMail({ ...mail, email: e.target.value })}
              />
            </div>
            <textarea
              placeholder="Message"
              value={mail.message}
              required
              className="w-full h-40 p-4 mt-2 bg-transparent border-2 border-secondary/40 focus:border-secondary focus:border-2 focus:outline-none rounded-sm "
              onChange={(e) => setMail({ ...mail, message: e.target.value })}
            />
            <button
              type="submit"
              className="w-40 h-10 sm:w-40 mx-auto mt-4 py-3 border border-secondary text-secondary flex justify-center items-center"
              disabled={loading}
            >
              {loading ? (
                <AiOutlineLoading3Quarters
                  className="animate-spin"
                  fill={theme === "dark" ? "white" : "black"}
                  size={20}
                />
              ) : (
                "Send"
              )}
            </button>
          </form>
        </Reveal>
      </div>

      {/* Footer */}

      <div className="flex justify-center text-sm italic opacity-40">
        <p className="flex items-center">
          built by <span className="ml-1 underline">karthikeya</span>
          <BiHeart className="ml-1" />
        </p>
      </div>
    </div>
  );
};

export default Home;

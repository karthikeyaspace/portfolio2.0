import React, { useState } from "react";
import Landing from "../components/Landing";
import { Link, useOutletContext } from "react-router-dom";
import Reveal from "../components/Reveal";
import { BiHeart } from "react-icons/bi";
import { languages, links, technologies } from "../assets/constants";
import { projects } from "../assets/projects";
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
    <div className="space-y-14 md:px-0 m-auto">
      <Landing theme={theme} />

      <Reveal>
        <div className="space-y-2 md:max-w-[80%] lg:max-w-[50%] mx-auto">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl">About</h1>
            <div className="w-full h-[1px] bg-secondary/20"></div>
          </div>
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
        </div>
      </Reveal>

      <Reveal>
        <div className="md:max-w-[80%] lg:max-w-[50%]  mx-auto">
          <div className="flex flex-col mb-4 gap-2">
            <h1 className="text-3xl">Tech Stack</h1>
            <div className="w-full h-[1px] bg-secondary/20"></div>
          </div>
          <div className="flex flex-row flex-wrap gap-4 items-center justify-center md:justify-start ">
            {languages.map((lang, index) => {
              return (
                <div
                  key={index}
                  className="group h-14 relative px-10 py-2 bg-blue-100 rounded-md flex 
              flex-col items-center justify-center transition-all duration-300"
                >
                  <lang.icon
                    fill={lang.color}
                    size={34}
                    className="text-5xl transition-opacity 
                  duration-300 group-hover:opacity-0"
                  />
                  <p
                    className="absolute opacity-0 text-black text-lg 
              transition-opacity duration-300 group-hover:opacity-100"
                  >
                    {lang.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className="md:max-w-[80%] lg:max-w-[50%] mx-auto">
          <div className="flex flex-col mb-4 gap-2">
            <h1 className="text-3xl">Tool Stack</h1>
            <div className="w-full h-[1px] bg-secondary/20"></div>
          </div>
          <div className="mt-8 flex flex-row flex-wrap gap-4 items-center justify-center md:justify-start">
            {technologies.map((tech, index) => {
              return (
                <div
                  key={index}
                  className="group h-14 relative px-10 py-2 bg-blue-100 rounded-md flex flex-col items-center justify-center transition-all duration-300 "
                >
                  <tech.icon
                    size={34}
                    fill={tech.color}
                    className="text-5xl transition-opacity duration-300 group-hover:opacity-0"
                  />
                  <p className="absolute opacity-0 text-black text-lg transition-opacity duration-300 group-hover:opacity-100">
                    {tech.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className="w-full mt-16 flex flex-col md:max-w-[80%] lg:max-w-[50%] mx-auto">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl">My Recent Projects</h1>
            <div className="w-full h-[1px] bg-secondary/20"></div>
          </div>
          <div className="mt-8 w-full transition-all duration-300  flex flex-row flex-wrap justify-between">
            {homedata.map((project, index) => (
              <div
                className=" mb-6 rounded-md overflow-hidden border-[1px] border-secondary bg-primary text-secondary"
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
          </div>
          <Link to="projects" className="z-10 ml-auto">
            <button className="px-4 py-1 text-xs bg-primary text-secondary border border-secondary italic">
              View More
            </button>
          </Link>
        </div>
      </Reveal>

      <Reveal>
        <div className="md:max-w-[80%] lg:max-w-[50%] mx-auto">
          <div className="flex flex-col mb-4 gap-2">
            <h1 className="text-3xl">Github Stats</h1>
            <div className="w-full h-[1px] bg-secondary/20"></div>
          </div>
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
      </Reveal>

      <Reveal>
        <div className="md:max-w-[80%] lg:max-w-[50%] mx-auto">
          <div className="flex flex-col items-start mb-4 gap-1">
            <h1 className="text-3xl">Contact Me</h1>
            <p className="italic font-thin opacity-30 text-sm">
              send me an email{" "}
            </p>
            <div className="w-full h-[1px] bg-secondary/20"></div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="w-full sm:w-10/12 flex flex-col gap-2 mx-auto "
          >
            <p
              className={`text-left text-sm italic  ${
                stats.type === "success" ? "text-green-700" : "text-red-600"
              }`}
            >
              {stats.message ? stats.message : <>&nbsp;</>}
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
        </div>
      </Reveal>

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

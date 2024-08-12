import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const Landing: React.FC<{ theme: string }> = ({ theme }) => {
  const [img, setImg] = useState(() => {
    return theme === "light" ? "img1" : "img2";
  });

  useEffect(() => {
    setImg(theme === "light" ? "img1" : "img2");
  }, [theme]);

  return (
    <div className="w-full mb-72 lg:mb-80">
      <div className="flex flex-col mt-12 md:mt-24">
        <h1 className="text-3xl md:text-4xl font-bold z-10">Hey,</h1>
        <h1 className="text-3xl md:text-6xl z-10">
          I am
          <span className="text-5xl md:text-7xl font-extrabold">
            {" "}
            Karthikeya
          </span>
        </h1>
        <div className="flex flex-row flex-wrap gap-4 z-10">
          <TypeAnimation
            sequence={[
              "CS Student",
              2000,
              "Full Stack Developer",
              2000,
              "ML Enthusiast",
              2000,
            ]}
            wrapper="span"
            speed={90}
            style={{
              fontSize: "1.5em",
              background: "-webkit-linear-gradient(blue, skyblue)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block",
            }}
            repeat={Infinity}
          />
        </div>
        <p className="text-2xl z-10">based in Hyderabad, India </p>
        <h1 className="text-4xl mt-4 z-10">
          and I <span className="text-orange-400 text-5xl">Build</span>{" "}
          <span className="text-6xl my-1 px-1 text-orange-600 font-bold">
            THINGS
          </span>
        </h1>

        <Link to="projects" className="z-10 mt-3">
          <p className="italic text-pink-500 "></p>
        </Link>

        <div className="flex flex-row gap-4 mt-6 z-10">
          <a href="https://github.com/karthikeyaspace" target="_blank">
            {" "}
            <FaGithub size={32} />{" "}
          </a>
          <a href="https://linkedin.com/in/karthikeyaveruturi" target="_blank">
            {" "}
            <FaLinkedin size={32} />{" "}
          </a>
          <a href="https://x.com/karthikeyaspace" target="_blank">
            {" "}
            <FaTwitter size={32} />{" "}
          </a>
        </div>
        <div
          className="bgimg bg-cover bg-center absolute top-0 left-0 w-full h-full z-0"
          style={{ backgroundImage: `url('${img}.png')` }}
        ></div>
      </div>
    </div>
  );
};

export default Landing;

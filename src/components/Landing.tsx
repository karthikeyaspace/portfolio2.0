import React, { useEffect, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { useTheme } from "./ThemeContext";


const glowAnimation = {
  animate: {
    boxShadow: [
      "0 0 100px 1px rgba(59, 130, 246, 0.9)",  // even brighter blue glow
      "0 0 100px 1px rgba(168, 85, 247, 0.9)",  // even brighter purple glow
      "0 0 100px 1px rgba(59, 130, 246, 0.9)",  // back to bright blue
    ]
  }
};


const Landing: React.FC = () => {
  const roles = [
    "CS Student",
    "Full Stack Dev",
    "ML Enthusiast",
    "Backend Dev",
  ];
  const q = ["Build", "Ship", "Innovate", "Break"];
  const [i, setI] = useState(0);
  const { theme } = useTheme();
  const iconfill = theme === "dark" ? "white" : "black";
  const colorControls = useAnimationControls();

  useEffect(() => {
    const interval = setInterval(() => {
      setI((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [roles.length]);

  useEffect(() => {
    colorControls.start({
      color: ["#FF0000", "#00FF00", "#0000FF"],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "linear",
      },
    });
  }, [colorControls]);

  return (
    <motion.div
      className="w-full px-2 py-8 min-h-[calc(100vh-5rem)] flex items-center justify-center relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between w-full">
        <div className="block sm:hidden w-full mb-8">
          <motion.img
            src="/profile.png"
            alt="Profile Picture"
            className="w-40 h-40 mx-auto rounded-full shadow-lg select-none pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              ...glowAnimation.animate
            }}
            transition={{ delay: 0.3, duration: 0.6 }}
            loading="eager"
            draggable="false"
            onDragStart={(e) => e.preventDefault()}
          />
        </div>

        <div className="w-full px-4 sm:px-0 md:max-w-[60%] text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Hey, I'm{" "}
            <span className="text-5xl md:text-7xl bg-clip-text selection:text-white text-transparent bg-gradient-to-r from-blue-500 via-purple-600 to-purple-400">
              Karthikeya
            </span>
          </h1>

          <div className="text-2xl md:text-4xl sm:mb-8 overflow-hidden whitespace-nowrap">
            I'm a{" "}
            <motion.span
              className="font-semibold text-blue-500 px-2 mx-2 bg-secondary"
              animate={{ opacity: [1, 0.5, 1], ...colorControls }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {roles[i]}
            </motion.span>
          </div>

          <p className="text-xl md:text-2xl sm:mb-10">
            based in <span className="font-semibold">Hyderabad, India</span>
          </p>

          <h2 className="text-3xl md:text-5xl font-bold sm:mb-10 h-16 overflow-hidden whitespace-nowrap">
            I
            <motion.span
              className="font-semibold text-blue-500 px-2 mx-2 bg-secondary"
              animate={{ opacity: [1, 0.75, 1], ...colorControls }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {q[i]}
            </motion.span>
            <span className="text-4xl md:text-6xl font-extrabold selection:text-white bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
              THINGS
            </span>
          </h2>

          <div className="flex gap-6 items-center">
            <a
              href="https://github.com/karthikeyaspace"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-transform duration-200"
            >
              <SiGithub size={32} fill={iconfill} />
            </a>
            <a
              href="https://linkedin.com/in/karthikeyaveruturi"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-transform duration-200"
            >
              <SiLinkedin size={32} fill={iconfill} />
            </a>
          </div>
        </div>

        <div className="hidden relative sm:block md:w-[40%]">
          <motion.img
            src="/profile.png"
            alt="Profile Picture"
            className="w-full max-w-[400px] rounded-full shadow-lg select-none pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              ...glowAnimation.animate
            }}
            transition={{ delay: 0.3, duration: 0.6 }}
            loading="eager"
            draggable="false"
            onDragStart={(e) => e.preventDefault()}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Landing;

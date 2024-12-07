import React from "react";
import { Link } from "react-router-dom";

const About: React.FC = () => {
  return (
    <div className="space-y-2 md:max-w-[80%] lg:max-w-[50%] mx-auto">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl">About</h1>
        <div className="w-full h-[1px] bg-secondary/20"></div>
      </div>
      <div className="space-y-2 text-secondary/80">
        <p className="text-md">
          A 3rd-year Computer Science student from Hyderabad, India, with a
          passion for Full-stack development, Generative AI, Machine learning
          and Golang. I love to build things in public and write clean code. I
          Learn new tech by building projects with it. Constantly seeking new
          opportunities to learn and grow, I thrive in collaborative work and
          team environments. Beyond tech, I enjoy playing basketball, cricket,
          and watching movies.
        </p>
        <Link to={"/resume"} className="underline text-blue-500 leading-8 italic">
          peek at my resume
        </Link>
      </div>
    </div>
  );
};

export default About;

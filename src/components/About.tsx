import React from "react";

const About: React.FC = () => {
  return (
    <div className="space-y-2">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl">About</h1>
        <div className="w-full h-[1px] bg-secondary/20"></div>
      </div>
      <div className="space-y-2 text-secondary/80">
        <p className="text-md">
          A 3rd-year Computer Science student from Hyderabad, India, with
          a passion for full-stack development and machine learning. I love to
          build things in public and write clean code. I Learn new tech by building projects with it. 
          Constantly seeking new opportunities to learn and grow, I thrive in collaborative work and
          team environments. Beyond tech, I enjoy playing basketball, cricket, 
          and watching movies.
        </p>
        <p>
          view my v1{" "}
          <a
            href="https://karthikeyaveruturi.vercel.app"
            className="text-blue-600/70"
          >
            portfolio
          </a>{" "}
        </p>
      </div>
    </div>
  );
};

export default About;

import React from "react";
import GitHubCalendar from "react-github-calendar";

const Github: React.FC<{ theme: string }> = ({ theme }) => {
  return (
    <div>
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
  );
};

export default Github;

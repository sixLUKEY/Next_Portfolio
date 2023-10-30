import React from "react";
import Navbar from "@/components/Navbar";
import "./work.css";
import DeveloperWork from "@/components/DeveloperWork";

function Work() {
  return (
    <main>
      <Navbar />
      <div className="flex justify-between gap-5">
        <div className="flex-1 flex justify-between items-center gap-3">
          <div className="flex-1 h-[2px] bg-secondary rounded-full"></div>
          <svg
            width="39"
            height="39"
            viewBox="0 0 39 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 19H37"
              stroke="#CDCCCC"
              stroke-width='2'
              stroke-linecap="round"
            />
            <path
              d="M20 37L20 2"
              stroke="#CDCCCC"
              stroke-width='2'
              stroke-linecap="round"
            />
          </svg>
          <div className="flex-1 h-[2px] bg-secondary rounded-full"></div>
        </div>
        <h1 className="text-[120px] text-secondary workHeading relative">
          De<span className="text-primary">Veloper</span>
        </h1>
        <div className="flex-1 flex justify-between items-center gap-3">
          <div className="flex-1 h-[2px] bg-primary rounded-full"></div>
          <svg
            width="39"
            height="39"
            viewBox="0 0 39 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 19H37"
              stroke="#F99909"
              stroke-width='2'
              stroke-linecap="round"
            />
            <path
              d="M20 37L20 2"
              stroke="#F99909"
              stroke-width='2'
              stroke-linecap="round"
            />
          </svg>
          <div className="flex-1 h-[2px] bg-primary rounded-full"></div>
        </div>
      </div>

      <DeveloperWork/>

    </main>
  );
}

export default Work;

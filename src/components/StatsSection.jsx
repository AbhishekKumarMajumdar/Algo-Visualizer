import React from "react";

export default function StatsSection() {
  return (
    <>
      {/* Font import can go in index.html or global css */}
      <style>
        {`
          @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap");
          body {
            font-family: "Inter", sans-serif;
          }
        `}
      </style>

      <div
        className="relative  bg-[#F3F8FF] rounded-3xl mx-6 sm:mx-12 md:mx-20 lg:mx-32 xl:mx-48 2xl:mx-64 mt-10 mb-10 p-10 sm:p-16 flex flex-col items-center overflow-visible"
      >
        {/* Light blue lines */}
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute top-10 left-10 w-[280px] h-[180px] opacity-30"
          fill="none"
          viewBox="0 0 280 180"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 160C0 160 20 160 40 140C60 120 80 80 80 80L100 20"
            stroke="#A9C7FF"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          ></path>
          <path
            d="M120 0L110 40C110 40 100 80 80 100C60 120 20 140 0 160"
            stroke="#A9C7FF"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          ></path>
        </svg>

        <svg
          aria-hidden="true"
          className="pointer-events-none absolute top-16 right-16 w-[280px] h-[180px] opacity-30 rotate-12"
          fill="none"
          viewBox="0 0 280 180"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M280 0L260 0L240 80L220 160"
            stroke="#A9C7FF"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          ></path>
          <path
            d="M200 180L180 100L160 20"
            stroke="#A9C7FF"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          ></path>
        </svg>

        {/* Pink circle top left */}
        <div
          className="absolute left-28 top-6 w-6 h-6 rounded-full bg-gradient-to-b from-[#ff3cac] to-[#784ba0] shadow-[0_0_8px_2px_rgba(255,60,172,0.8)]"
        ></div>

        {/* Blue circle with white triangle left */}
        <div
          className="absolute left-20 top-20 w-24 h-24 rounded-full bg-gradient-to-tr from-[#5A9BFF] to-[#7DB8FF] flex items-center justify-center shadow-[inset_0_0_15px_5px_rgba(255,255,255,0.6),0_0_15px_5px_rgba(90,155,255,0.7)]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10 text-white drop-shadow-[0_0_3px_rgba(255,255,255,0.8)]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </div>

        {/* White stats container */}
        <div
          className="bg-white rounded-3xl flex flex-col sm:flex-row items-center justify-center w-full max-w-5xl shadow-lg z-10"
        >
          <div
            className="flex-1 text-center py-8 px-6 sm:px-12 border-b sm:border-b-0 sm:border-r border-[#E6E9F2]"
          >
            <p className="text-4xl font-semibold text-[#1B1F3B] leading-none">
              10+
              <span className="font-normal"> </span>
            </p>
            <p className="text-base text-[#1B1F3B] mt-2">Users</p>
          </div>

          <div
            className="flex-1 text-center py-8 px-6 sm:px-12 border-b sm:border-b-0 sm:border-r border-[#E6E9F2]"
          >
            <p className="text-4xl font-semibold text-[#1B1F3B] leading-none">
              5+
              <span className="font-normal"> </span>
            </p>
            <p className="text-base text-[#1B1F3B] mt-2">Created Projects</p>
          </div>

          <div className="flex-1 text-center py-8 px-6 sm:px-12">
            <p className="text-4xl font-semibold text-[#1B1F3B] leading-none">10+</p>
            <p className="text-base text-[#1B1F3B] mt-2">Algorithms</p>
          </div>
         
        </div>

        {/* Purple ring right */}
        <div
          className="absolute right-20 top-28 w-12 h-12 rounded-full border-8 border-purple-500 border-opacity-70 shadow-[0_0_10px_2px_rgba(123,114,247,0.7)]"
          style={{ boxSizing: "content-box" }}
        ></div>

        {/* Small green circle bottom right */}
        <div
          className="absolute right-28 top-44 w-4 h-4 rounded-full bg-gradient-to-b from-[#4de6b8] to-[#2fc9a7] shadow-[0_0_6px_1px_rgba(77,230,184,0.8)]"
        ></div>

        {/* Get Started button */}
        
      </div>
    </>
  );
}

import React from "react";
import { useNavigate } from "react-router-dom";

export const Header = () => {

  const navigate = useNavigate();
  
  function moveTo(){
    navigate("/Instruction");
  }
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-screen-sm sm:text-center sm:mx-auto">
          <a
            href="/"
            aria-label="View"
            className="inline-block mb-5 rounded-full sm:mx-auto"
          >
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
              <svg
                className="w-12 h-12 text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
          </a>
          <h2 className="mb-4 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            What 2-Back Means ?
          </h2>
          <p className="text-base text-gray-700 md:text-lg sm:px-4">
          The "2" indicates the number of steps back in the sequence you need to remember and compare the current stimulus with.
          <br></br>
          So, in a literal sense within the context of the 2-back test, "2-back" signifies the requirement to remember and compare the current stimulus with the one presented two steps back in the sequence. 
          </p>
          <hr className="w-full my-8 border-gray-300" />
        </div>
      </div>
    );
  };

  export default Header;
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Graph from "./components/dashboard"

function sumArray(arr) {
  return arr.reduce((acc, current) => acc + current, 0);
}

function Score() {
  const navigate = useNavigate();
  const location = useLocation();

  const score = location.state.id;
  const timearr = location.state.timearr;
  console.log("Score Page")
  console.log(timearr);

  var average_reaction_time = Math.round(sumArray(timearr)/timearr.length);
  console.log(average_reaction_time);
  
 

 
  

  function moveToGuideline() {
    navigate("/Home");
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-800 to-gray-600 flex items-center justify-center">
      <div className="text-center">
  

        <h1 className={`text-4xl font-bold text-white mb-4`}>
          You Got to the Score {score}.
          <br></br>
          <br></br>
          Your Average Reaction Time is {average_reaction_time} millisecond.
        </h1>

        <button
          onClick={moveToGuideline}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105">
          Back to the Home
        </button>
      </div>
    </div>
  );
}

export default Score;

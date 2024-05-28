import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Result = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;
  const { name, surname, prize } = state || {};

  const handleRestart = () => {
    navigate("/");
  };
  return (
    <div className="flex flex-col items-center  h-screen">
      <h1 className="text-3xl font-bold text-center text-white m-8">Result</h1>
      <div className="w-[500px] h-12 border-2 rounded-3xl text-white">
        <h1 className="text-center mt-2">
          Congratulations, {name} {surname}!
        </h1>
      </div>
      <div className="w-[400px] h-12 border-2 rounded-3xl text-white mt-8">
        <p className="text-center mt-2">You have won ${prize}!</p>
      </div>
      <button
        onClick={handleRestart}
        className="bg-orange-500 text-white h-10 w-24 rounded-xl mt-8"
      >
        Restart
      </button>
    </div>
  );
};

export default Result;

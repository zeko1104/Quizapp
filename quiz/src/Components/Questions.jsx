import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import questionsData from "../data/qbank.json";

const Questions = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { questionNumber, prize, name, surname } = location.state || {};
  const currentQuestion = questionsData[questionNumber - 1];

  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showNext, setShowNext] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleAnswerClick = (option) => {
    setSelectedOption(option);
    setIsAnswered(true);
    if (option === currentQuestion.correctAnswer) {
      setScore(score + 1);
    } else {
      alert("Wrong answer!");
      navigate("/");
    }
  };

  useEffect(() => {
    if (isAnswered) {
      const timer = setTimeout(() => {
        setShowNext(true);
      }, 3000); 
      return () => clearTimeout(timer);
    }
  }, [isAnswered]);

  const handleNext = () => {
    const nextQuestionNumber = questionNumber + 1;
    const nextPrize = prize + 200; 
    if (nextQuestionNumber <= questionsData.length) {
      navigate("/start", {
        state: {
          questionNumber: nextQuestionNumber,
          prize: nextPrize,
          name,
          surname,
        },
      });
    } else {
      navigate("/result", { state: { name, surname, prize: prize + 200 } }); 
    }
  };

  return (
    <div className="text-center flex flex-col items-center  mt-8 h-screen ">
      <div className="w-[500px] h-12 border-2 rounded-3xl text-white mb-4">
        <h1 className="mt-2">{currentQuestion.questionText}</h1>
      </div>
      <div className="flex flex-col items-center space-y-4">
        {currentQuestion.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswerClick(option)}
            className={`w-[300px] h-12 border-2 rounded-3xl text-white hover:border-orange-500 transition-all ease-in ${
              selectedOption === option
                ? option === currentQuestion.correctAnswer
                  ? "bg-green-500" 
                  : "bg-red-500" 
                : ""
            }`}
            disabled={isAnswered} 
          >
            {option}
          </button>
        ))}
      </div>
      {showNext && (
        <button
          onClick={handleNext}
          className="bg-orange-500 text-white h-10 w-24 rounded-xl mt-8"
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Questions;

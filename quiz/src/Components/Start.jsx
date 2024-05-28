import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Start = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;
  const { name, surname, questionNumber = 1, prize = 100 } = state || {};

  const handlePlay = () => {
    navigate('/questions', { state: { questionNumber, prize, name, surname } });
  };

  return (
    <div className='flex flex-col items-center justify-center  h-screen '>
      <div className='w-[500px] h-12 border-2 rounded-3xl text-white mt-8'>
        <h3 className='text-center mt-2'>Question {questionNumber}</h3>
      </div>
      <div className='w-[400px] h-12 border-2 rounded-3xl text-white mt-8'>
        <p className='text-center mt-2'>${prize}</p>
      </div>
      <button onClick={handlePlay} className="bg-orange-500 text-white h-10 w-24 rounded-xl mt-8">Play</button>
    </div>
  );
};

export default Start;

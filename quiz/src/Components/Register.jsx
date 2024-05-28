import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const navigate = useNavigate();

  const handleNext = () => {
    if (name && surname) {
      navigate('/start', { state: { name, surname } });
    } else {
      alert("Please enter both name and surname.");
    }
  };

  return (
    <div className="bg-blue-950  border-2 rounded-md h-[400px] w-96 mt-6 mx-auto">
      <div className="text-center pt-10 space-y-4">
        <h1 className="text-3xl font-bold text-white">Register</h1>
        <div>
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="h-16 w-72 rounded-xl px-4"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter Surname"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            className="h-16 w-72 rounded-xl px-4"
          />
        </div>
      </div>
      <div className="text-center mt-8">
        <button onClick={handleNext} className="bg-orange-500 text-white h-10 w-24 rounded-xl">
          NEXT
        </button>
      </div>
    </div>
  );
};

export default Register;

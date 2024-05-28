import React from "react";
import "./App.css";
import Register from "./Components/Register";
import Logo from "./images/million.png";
import Start from "./Components/Start";
import Questions from "./Components/Questions";
import Result from './Components/Result';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="bg-primary h-screen flex flex-col items-center justify-start">
        <img className="h-60 mt-4" src={Logo} alt="Logo" />
        <Routes>
         <Route path="/" element={<Register />} />
         <Route path="/start" element={<Start />} />
         <Route path="/questions" element={<Questions />} />
         <Route path="/result" element={<Result />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

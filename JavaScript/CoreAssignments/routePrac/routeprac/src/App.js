import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import Var from "./components/Var";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/:userInput" element={<Var />} />
        <Route path="/:userInput/:font/:back" element={<Var />} />

      </Routes>
    </div>
  );
}

export default App;

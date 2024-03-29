import React,{ useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './views/Main'
import Detail from './components/Detail';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Main/>} path="/" default />
          <Route element={<Detail/>} path="/product/:id" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

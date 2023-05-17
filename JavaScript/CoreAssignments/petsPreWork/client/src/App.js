import React,{ useEffect, useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './views/Main'
import Detail from './components/Detail';
import './App.css';
import Update from './components/Update';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <h1>Socket Test</h1>
        <Routes>
          <Route element={<Main/>} path="/" default />
          <Route element={<Detail/>} path="/pet/:id" />
          <Route element={<Update/>} path="/edit/:id" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

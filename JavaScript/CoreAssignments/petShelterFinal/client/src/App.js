import React,{ useEffect, useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Detail from './components/Detail';
import './App.css';
import Update from './components/Update';
import Create from './components/Create';
import List from './components/List';
function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<List/>} path="/" default />
          <Route element={<Create/>} path="/pets/create" />
          <Route element={<Detail/>} path="/pet/:id" />
          <Route element={<Update/>} path="/edit/:id" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

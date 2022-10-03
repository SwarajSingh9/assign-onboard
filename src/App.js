import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import First from './Components/First';
import Second from './Components/Second';
import Third from './Components/Third';
import Fourth from './Components/Fourth';
import React from 'react'
import { useNavigate  } from "react-router-dom";



function App() {
  return (
    <>
       <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<First/>}/>
      <Route exact path="/First" element={<First/>}/>
        <Route exact path="/Second" element={<Second/>}/>
        <Route exact path="/Third" element={<Third/>}/>
        <Route exact path="/Fourth" element={<Fourth/>}/>
      </Routes>
    </BrowserRouter>
    </>

    
  );
}

export default App;

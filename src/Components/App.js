import React from "react";
import { Routes, Route } from "react-router-dom";
import {Navbar, Home, About, Portfolio, Footer} from "./";

import './CSS/app.css'

function App() {
  return (
    <div className="App">
    <Navbar/>
      <div>
        <Routes>
        <Route exact path='/' element={<Home />}/>
              <Route path='/about' element={<About />}/>
              <Route path='/portfolio' element={<Portfolio />}/>
        </Routes>
      </div>
      
      <Footer />
    </div>
  );
}

export default App;

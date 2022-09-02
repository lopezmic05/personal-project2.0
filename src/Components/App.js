import React from "react";
import { Routes, Route } from "react-router-dom";
import {Navbar, Home, About, Projects} from "./";

function App() {
  return (
    <div className="App">
    <Navbar/>
      <div>
        <Routes>
        <Route exact path='/' element={<Home />}/>
              <Route path='/about' element={<About />}/>
              <Route path='/projects' element={<Projects />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";
import {Navbar, Home, About, Projects, Footer} from "./";

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
      <Footer />
    </div>
  );
}

export default App;

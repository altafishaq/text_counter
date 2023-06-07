import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { BrowserRouter as Router , Routes , Route , Link, BrowserRouter } from "react-router-dom"; 
import Contact from "./components/Contact";



function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#253138";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  const toggleModee = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#808080";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
 <BrowserRouter>
 

<div className="app">
<Navbar title="Altaf khan" aboutText="About" mode={mode} toggleMode={toggleMode} toggleModee={toggleModee}/>
      
      <Routes>
<Route exact path="/about" element={ <About mode={mode} />} />
<Route exact path="/" element={<TextForm heading="Enter Text to Analyze" mode={mode} />} />
<Route path="/contact" element={<Contact />} />
      </Routes>
</div>

 

 </BrowserRouter>
    

      
      

   


    
  );
}

export default App;

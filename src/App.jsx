import React from "react";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import About from "./pages/about";
import Service from "./pages/service";
import Contact from "./pages/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
        <Routes> 
          <Route path="/" element = {<Home></Home>}></Route>
          <Route path="/about" element = {<About></About>}></Route>
          <Route path="/service" element = {<Service></Service>}></Route>
          <Route path="/contact" element = {<Contact></Contact>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

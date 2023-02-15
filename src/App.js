import "./App.css";
import React from "react";
import Nav from "./components/Nav.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.js";
import About from "./pages/About/About.js";
import Contact from "./pages/Contact.js";
import Gallery from "./pages/Gallery.js";
import Pig from "./pages/Pig.js";
function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/pig" element={<Pig />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

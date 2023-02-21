import "./App.css";
import React from "react";
import Nav from "./components/Nav/Nav.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.js";
import About from "./pages/About/About.js";
import Contact from "./pages/Contact.js";
import Gallery from "./pages/Gallery/Gallery.js";
import Pig from "./pages/Pig.js";
import Volunteer from "./pages/Volunteer/Volunteer.js";
import Donate from "./pages/Donate/Donate.js";
import Footer from "./components/Footer/Footer.js";
import Message from "./pages/Message/Message.js";
import Faq from "./pages/FAQ/Faq.js";
import Facts from "./pages/Facts/Facts.js";

// NOTE page list as follows:
// home/nav: static page, links to everything
// about-static page, links to directions contact donate wishlist
// contact-static page, links to directions and newsletter
// gallery/meet our friends-live page, .mapped thumbnails from mongodb links to pigPage
//                         and links to video and phot galleries, perhaps as carousels
//                         or modal video windows?
// pig-static page, links to donate
// newsletter sign-up, form that saves to mongo db as subscriber? Maybe populate from their info?
//                    Have to look into mass email stuff
// NOTE that's pretty good for now, more pages to come.
// This does equate to 2 tables:
// one for pigs and the other for subscribers
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
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/message" element={<Message />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/facts" element={<Facts />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

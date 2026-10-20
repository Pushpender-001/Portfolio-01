import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./Component/Navbar.jsx";
import Footer from "./Component/Footer.jsx";
import Home from './Pages/Home.jsx';
import Contact from "./Pages/Contact.jsx"
import About from "./Pages/About.jsx"
import ScrollToTop from './Pages/ScrollToTop.jsx';
import LastPage from './Component/Footer.jsx'
import Projects from './Pages/Projects.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
         <ScrollToTop />
        <Navbar />
        <main className="flex-1 mt-16">
          <Routes>
             <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/About" element={<About />} />
            <Route path="/Projects" element={<Projects />} />
          </Routes>
        </main>
        <LastPage/>
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

// src/App.jsx
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Guidelines from './pages/Guidelines';
import Registration from './pages/Registration';
import Committee from './pages/Committee';
import Contact from './pages/Contact';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './styles/globals.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic'
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="app-container bg-gradient-to-b from-gray-900 to-gray-950 text-white min-h-screen">
        <Header />
        <main>
          <Routes>
            <Route path="/WebWars_WhiteBytes" element={<Home />} />
            <Route path="/guidelines" element={<Guidelines />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/committee" element={<Committee />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

// src/App.jsx
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
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
  const basePath = import.meta.env.MODE === 'production' ? '/WebWars_WhiteBytes' : '';
  
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
        <Header basePath={basePath} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/WebWars_WhiteBytes" element={<Home />} />
            <Route path="/guidelines" element={<Guidelines />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/committee" element={<Committee />} />
            <Route path="/contact" element={<Contact />} />
            {/* Fallback route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

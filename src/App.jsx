// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import LoadingPage from './components/LoadingPage';
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

// Enhanced ScrollToTop component with immediate scroll
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    // Force immediate scroll to top
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // Changed from 'smooth' to 'instant' for more reliable behavior
    });

    // Backup scroll for dynamic content
    const timeoutId = setTimeout(() => {
      if (window.pageYOffset > 0) {
        window.scrollTo(0, 0);
      }
    }, 50);

    return () => clearTimeout(timeoutId);
  }, [pathname]);
  
  return null;
};

// Enhanced AppContent component with scroll management
const AppContent = () => {
  const location = useLocation();

  useEffect(() => {
    // Immediate scroll reset
    window.scrollTo(0, 0);
    
    // Reset scroll for any main content container
    const mainContent = document.querySelector('main');
    if (mainContent) {
      mainContent.scrollTop = 0;
    }

    // Reset any custom scroll containers
    const scrollContainers = document.querySelectorAll('.scroll-container');
    scrollContainers.forEach(container => {
      container.scrollTop = 0;
    });

    // Reinitialize AOS animations
    if (AOS) {
      AOS.refresh();
    }
  }, [location]);

  // Prevent scroll restoration on navigation
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <div className="app-container bg-gradient-to-b from-gray-900 to-gray-950 text-white min-h-screen">
      <ScrollToTop />
      <Header />
      <main className="scroll-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/guidelines" element={<Guidelines />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/committee" element={<Committee />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

function App() {
  const basePath = import.meta.env.MODE === 'production' ? '/WebWars_WhiteBytes' : '';
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize AOS with manual trigger option
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
      startEvent: 'load'
    });

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="opacity-100 transition-opacity duration-700">
          <LoadingPage />
        </div>
      ) : (
        <div className="opacity-0 transition-opacity duration-700 opacity-100">
          <BrowserRouter basename={basePath}>
            <AppContent />
          </BrowserRouter>
        </div>
      )}
    </>
  );
}

export default App;

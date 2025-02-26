import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import LoadingPage from './components/LoadingPage';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './styles/globals.css';

// Lazy load other pages
const Guidelines = lazy(() => import('./pages/Guidelines'));
const Registration = lazy(() => import('./pages/Registration'));
const Committee = lazy(() => import('./pages/Committee'));
const Contact = lazy(() => import('./pages/Contact'));

const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });

    const timeoutId = setTimeout(() => {
      if (window.pageYOffset > 0) {
        window.scrollTo(0, 0);
      }
    }, 50);

    return () => clearTimeout(timeoutId);
  }, [pathname]);
  
  return null;
};

const AppContent = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const mainContent = document.querySelector('main');
    if (mainContent) {
      mainContent.scrollTop = 0;
    }

    const scrollContainers = document.querySelectorAll('.scroll-container');
    scrollContainers.forEach(container => {
      container.scrollTop = 0;
    });

    if (AOS) {
      AOS.refresh();
    }
  }, [location]);

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
          <Route path="/guidelines" element={
            <Suspense fallback={<LoadingPage />}>
              <Guidelines />
            </Suspense>
          } />
          <Route path="/registration" element={
            <Suspense fallback={<LoadingPage />}>
              <Registration />
            </Suspense>
          } />
          <Route path="/committee" element={
            <Suspense fallback={<LoadingPage />}>
              <Committee />
            </Suspense>
          } />
          <Route path="/contact" element={
            <Suspense fallback={<LoadingPage />}>
              <Contact />
            </Suspense>
          } />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

function App() {
  const basePath = import.meta.env.MODE === 'production' ? '/WebWars25_WhiteBytes' : '';
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
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

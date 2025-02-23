// src/components/Header.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import LogoGroup from './LogoGroup';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.position = 'static';
      document.body.style.width = 'auto';
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.position = 'static';
      document.body.style.width = 'auto';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { title: 'Home', path: '/' },
    { title: 'Guidelines', path: '/guidelines' },
    { title: 'Committee', path: '/committee' },
    { title: 'Registration', path: '/registration' },
    { title: 'Contact', path: '/contact' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/">
            <LogoGroup />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex space-x-6">
            {menuItems.map((item, index) => (
              <Link 
                key={index}
                to={item.path}
                className={`text-white font-medium text-lg tracking-wide hover:text-blue-400 transition-colors px-2 py-1 relative group ${
                  location.pathname === item.path ? 'text-blue-400' : ''
                }`}
              >
                {item.title}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-500 transition-all duration-300 ${
                  location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            ))}
            <a 
              href="https://cmt3.research.microsoft.com/ICCSAI2025" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold px-6 py-2 rounded-md hover:from-blue-700 hover:to-indigo-700"
            >
              Submit Paper
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white z-50 relative p-2"
            aria-label="Menu"
          >
            {isOpen ? (
              <FiX size={28} className="text-white" />
            ) : (
              <FiMenu size={28} className="text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Fullscreen Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={containerVariants}
            className="fixed inset-0 bg-black/95 backdrop-blur-md lg:hidden flex items-center justify-center z-40"
          >
            <motion.nav className="w-full max-w-lg mx-auto px-6">
              <motion.ul className="space-y-8 text-center">
                {menuItems.map((item, index) => (
                  <motion.li 
                    key={index}
                    variants={itemVariants}
                    className="overflow-hidden"
                  >
                    <Link 
                      to={item.path}
                      className={`text-white text-3xl font-medium hover:text-blue-400 transition-colors block ${
                        location.pathname === item.path ? 'text-blue-400' : ''
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.title}
                    </Link>
                  </motion.li>
                ))}
                <motion.li variants={itemVariants}>
                  <a 
                    href="https://cmt3.research.microsoft.com/ICCSAI2025" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xl font-bold px-8 py-3 rounded-md inline-block hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    Submit Paper
                  </a>
                </motion.li>
              </motion.ul>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;

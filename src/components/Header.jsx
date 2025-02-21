// src/components/Header.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import LogoGroup from './LogoGroup';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20
      }
    }
  };

  const menuItems = [
    { title: 'Home', path: '/' },
    { title: 'Guidelines', path: '/guidelines' },
    { title: 'Committee', path: '/committee' },
    { title: 'Registration', path: '/registration' },
    { title: 'Contact', path: '/contact' }
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <LogoGroup />

          {/* Desktop Menu */}
          <motion.nav 
            className="hidden lg:flex" 
            initial="hidden"
            animate="visible"
            variants={navVariants}
          >
            <ul className="flex space-x-6">
              {menuItems.map((item, index) => (
                <motion.li key={index} variants={itemVariants}>
                  <Link 
                    to={item.path} 
                    className="text-white font-medium text-lg tracking-wide hover:text-blue-400 transition-colors px-2 py-1 relative group"
                  >
                    {item.title}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </motion.li>
              ))}
              <motion.li variants={itemVariants}>
                <a 
                  href="https://cmt3.research.microsoft.com/ICCSAI2025" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold px-6 py-2 rounded-md hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
                >
                  Submit Paper
                </a>
              </motion.li>
            </ul>
          </motion.nav>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white"
            aria-label="Menu"
          >
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="lg:hidden overflow-hidden bg-black/95 backdrop-blur-md"
      >
        {isOpen && (
          <ul className="flex flex-col items-center p-4 space-y-4">
            {menuItems.map((item, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link 
                  to={item.path} 
                  className="text-white text-lg font-medium hover:text-blue-400 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              </motion.li>
            ))}
            <motion.li 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: menuItems.length * 0.1 }}
            >
              <a 
                href="https://cmt3.research.microsoft.com/ICCSAI2025" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold px-6 py-2 rounded-md block text-center"
                onClick={() => setIsOpen(false)}
              >
                Submit Paper
              </a>
            </motion.li>
          </ul>
        )}
      </motion.div>
    </header>
  );
};

export default Header;
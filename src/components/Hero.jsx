// src/components/Hero.jsx
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import KUTE from 'kute.js';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';

const Hero = () => {
  const blobRef = useRef(null);
  
  useEffect(() => {
    // Blob animation
    if (blobRef.current) {
      try {
        const tween = KUTE.fromTo(
          '#blob1',
          { path: '#blob1' },
          { path: '#blob2' },
          { repeat: 999, duration: 3000, yoyo: true }
        );
        tween.start();
      } catch (error) {
        console.error("KUTE animation failed:", error);
      }
    }
  }, []);

  // Use relative paths for images
  const conferenceImagePath = "./assets/slider/confSlider3.webp";

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background with blobs */}
      <div className="absolute inset-0 z-0">
        <svg
          ref={blobRef}
          viewBox="0 0 900 600"
          width="100%"
          height="100%"
          preserveAspectRatio="none"
          className="opacity-50"
        >
          <path
            id="blob1"
            d="M442.5,298.5Q423,347,381.5,379Q340,411,285,427.5Q230,444,183.5,407Q137,370,109.5,319Q82,268,97.5,207.5Q113,147,168,111.5Q223,76,286,70.5Q349,65,401.5,98.5Q454,132,458,191Q462,250,442.5,298.5Z"
            fill="url(#gradient1)"
          />
          <path
            id="blob2"
            d="M446,309.5Q433,369,386,415Q339,461,277,448.5Q215,436,166,404Q117,372,82,317Q47,262,69.5,196.5Q92,131,151,93Q210,55,280,49Q350,43,402,90Q454,137,456.5,193.5Q459,250,446,309.5Z"
            fill="url(#gradient1)"
            style={{ visibility: 'hidden' }}
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4338ca" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              ICCSAI 2025
            </h1>
            <h2 className="text-2xl md:text-3xl font-light mb-6 text-gray-300">
              <TypeAnimation
                sequence={[
                  'Communication',
                  1500,
                  'Security',
                  1500,
                  'Artificial Intelligence',
                  1500,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-blue-300"
              />
            </h2>
            <p className="text-xl md:text-2xl font-light mb-2 text-gray-200">
              4th - 6th April, 2025
            </p>
            <p className="text-lg mb-8 text-gray-400">
              Galgotias University, Greater Noida, India
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <motion.a
                href="https://cmt3.research.microsoft.com/ICCSAI2025"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold px-8 py-3 rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Submit Paper
              </motion.a>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/registration"
                  className="bg-transparent border-2 border-blue-500 text-blue-400 font-bold px-8 py-3 rounded-lg hover:bg-blue-500/10 transition-all duration-300 inline-block"
                >
                  Register Now
                </Link>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              <img
                src={conferenceImagePath}
                alt="Conference"
                className="rounded-2xl shadow-2xl transform -rotate-2 z-10 relative"
                onError={(e) => {
                  console.error("Image failed to load");
                  e.target.src = "./assets/placeholder.jpg";
                }}
              />
              <div 
                className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl z-20"
              ></div>
              <div 
                className="absolute -bottom-4 -right-4 w-full h-full border-2 border-blue-500 rounded-2xl z-0 transform rotate-2"
              ></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <div className="flex flex-col items-center">
          <span className="text-sm text-gray-400 mb-2">Scroll to explore</span>
          <motion.div 
            className="w-1 h-12 bg-gradient-to-b from-blue-500 to-transparent rounded-full"
            animate={{ 
              y: [0, 12, 0],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ 
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

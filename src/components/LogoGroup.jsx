// src/components/LogoGroup.jsx
import React from 'react';
import { motion } from 'framer-motion';

const LogoGroup = () => {
  return (
    <motion.div 
      className="flex items-center space-x-3"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <img 
        src="./assets/logos/gulogo.png" 
        alt="Galgotias University Logo" 
        className="h-10 w-auto" 
      />
      <div className="h-8 w-px bg-gray-400/30"></div>
      <img 
        src="./assets/logos/iccsai_logo.jpeg" 
        alt="ICCSAI Logo" 
        className="h-12 w-auto" 
      />
    </motion.div>
  );
};

export default LogoGroup;
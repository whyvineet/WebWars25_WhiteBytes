// src/components/Timeline.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Timeline = () => {
  const events = [
    { date: '25th December, 2024', description: 'Abstract Submission Date' },
    { date: '25th January, 2025', description: 'Full Paper Submission Date' },
    { date: '28th February, 2025', description: 'Notification of Acceptance' },
    { date: '15th March, 2025', description: 'Registration Deadline Date' },
    { date: '4th - 6th April, 2025', description: 'Conference Date' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-white"
          data-aos="fade-up"
        >
          Important <span className="text-blue-500">Dates</span>
        </motion.h2>

        <motion.div 
          className="relative"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Glowing timeline line */}
          <motion.div 
            className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-blue-500/20"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500 to-purple-600 animate-pulse"></div>
          </motion.div>

          {/* Timeline events */}
          {events.map((event, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className={`relative flex items-center mb-20 last:mb-0 group ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              } flex-col md:flex-row`}
            >
              {/* Date section */}
              <motion.div 
                className={`flex-1 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'} text-center mb-4 md:mb-0`}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-xl md:text-2xl font-bold text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                  {event.date}
                </h3>
              </motion.div>

              {/* Timeline dot */}
              <motion.div 
                className="relative mx-4 flex justify-center"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg shadow-blue-500/50 z-10 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-white group-hover:bg-cyan-200 transition-colors duration-300"></div>
                </div>
                {/* Glow effect */}
                <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>

              {/* Timeline content */}
              <motion.div 
                className="flex-1"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="p-6 mx-0 md:mx-4 rounded-xl backdrop-blur-xl bg-gradient-to-br from-blue-900/40 to-purple-900/40 border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    {event.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;

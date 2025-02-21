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

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-white"
          data-aos="fade-up"
        >
          Important <span className="text-blue-500">Dates</span>
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-indigo-800 rounded-full"></div>

          {/* Timeline events */}
          {events.map((event, index) => (
            <div 
              key={index}
              className={`relative flex items-center mb-20 last:mb-0 ${
                index % 2 === 0 ? 'flex-row-reverse' : ''
              }`}
              data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
              data-aos-delay={index * 100}
            >
              <div className="flex-1"></div>

              {/* Timeline dot */}
              <div className="w-8 h-8 rounded-full bg-blue-600 shadow-lg shadow-blue-500/50 z-10 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-white"></div>
              </div>

              {/* Timeline content */}
              <motion.div 
                className="flex-1 p-6 mx-4 rounded-lg backdrop-blur-md bg-gradient-to-br from-blue-900/30 to-indigo-900/30 border border-blue-500/30"
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-2 text-blue-400">{event.date}</h3>
                <p className="text-gray-300">{event.description}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
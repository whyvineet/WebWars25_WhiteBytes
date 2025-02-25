import React, { useState } from "react";
import { motion } from "framer-motion";

const Timeline = () => {
  const events = [
    { date: "25th December, 2024", description: "Abstract Submission Date" },
    { date: "25th January, 2025", description: "Full Paper Submission Date" },
    { date: "28th February, 2025", description: "Notification of Acceptance" },
    { date: "15th March, 2025", description: "Registration Deadline Date" },
    { date: "4th - 6th April, 2025", description: "Conference Date" },
  ];

  const [currentDate] = useState(new Date());

  const getEventStatus = (eventDate) => {
    const dateString = eventDate.split(" - ")[0];

    let standardizedDate;

    if (dateString.includes(",")) {
      const parts = dateString.match(
        /(\d+)(?:st|nd|rd|th)?\s+([A-Za-z]+),?\s+(\d+)/
      );
      if (parts) {
        const day = parseInt(parts[1]);
        const month = parts[2];
        const year = parseInt(parts[3]);
        standardizedDate = `${month} ${day}, ${year}`;
      }
    } else {
      standardizedDate = dateString;
    }

    const eventDateTime = new Date(standardizedDate);

    if (isNaN(eventDateTime)) {
      return "upcoming";
    } else if (eventDateTime < currentDate) {
      return "completed";
    } else {
      return "upcoming";
    }
  };

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
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
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
            className="absolute top-0 left-4 w-0.5 h-full bg-blue-500/20"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500 to-purple-600 animate-pulse"></div>
          </motion.div>

          {/* Timeline events */}
          {events.map((event, index) => {
            const status = getEventStatus(event.date);

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative flex items-center mb-16 last:mb-0 group"
              >
                {/* Timeline dot */}
                <motion.div
                  className={`relative z-10 w-8 h-8 rounded-full shadow-lg flex items-center justify-center mr-6 ${
                    status === "completed"
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 shadow-blue-500/60"
                      : "bg-gradient-to-r from-blue-600/30 to-purple-600/30 shadow-blue-500/20"
                  }`}
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div
                    className={`w-3 h-3 rounded-full ${
                      status === "completed" ? "bg-white" : "bg-gray-300/70"
                    }`}
                  ></div>
                  <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>

                {/* Timeline content */}
                <div
                  className={`flex-1 p-6 rounded-xl backdrop-blur-md transition-all duration-300 hover:shadow-lg ${
                    status === "completed"
                      ? "bg-gradient-to-r from-blue-700/30 to-indigo-700/30 border border-blue-300 hover:shadow-blue-400/30"
                      : "bg-gradient-to-r from-blue-800/10 to-indigo-800/10 border border-blue-400/20 hover:shadow-blue-500/10"
                  }`}
                >
                  <h3
                    className={`text-lg md:text-xl mb-2 ${
                      status === "completed"
                        ? "font-semibold text-blue-100"
                        : "font-normal text-blue-200/70"
                    }`}
                  >
                    {event.date}
                  </h3>
                  <p
                    className={`${
                      status === "completed" ? "text-gray-100" : "text-gray-400"
                    }`}
                  >
                    {event.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;

// src/components/TrackShowcase.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoIosArrowDown } from 'react-icons/io';

const TrackShowcase = () => {
  const [expandedTrack, setExpandedTrack] = useState(null);

  const tracks = [
    {
      id: 1,
      title: "Emerging Trends and Applications in Machine Learning and Deep Learning",
      chairs: []
    },
    {
      id: 2,
      title: "Immersive Futures: Merging Realities with Intelligent Systems",
      chairs: [
        "Dr. Bhanu Sharma, Chitkara University, Punjab, India",
        "Dr. Gurjinder Singh, Chitkara University, Punjab, India"
      ]
    },
    {
      id: 3,
      title: "Artificial Intelligence and Soft Computing in Power, Energy, Communication, and Security Systems",
      chairs: [
        "Dr. Anurag Dwivedi, Bansal Institute of Engineering and Technology, Lucknow, India",
        "Dr. Saurabh Kumar, Institute of Engineering and Rural Technology (IERT), Prayagraj, India",
        "Dr. Punit Kumar Chaubey, Bansal Institute of Engineering and Technology, Lucknow, India"
      ]
    },
    {
      id: 4,
      title: "Innovative and Disruptive Technologies",
      chairs: [
        "Dr. Amanpreet Kaur, Chitkara University, Punjab, India"
      ]
    },
    {
      id: 5,
      title: "The Convergence of Generative AI and Quantum Computing: Unlocking the Next Frontier of Innovation",
      chairs: [
        "Dr. Anitha Julian, Saveetha Engineering College, Tamilnadu India",
        "Dr. Ramyadevi R, Saveetha Engineering College, Tamilnadu India",
        "Dr T.Ganesh Kumar, School of Computer Science and Engineering, Galgotias University Greater Noida, India",
        "Dr Priti Rishi, SRM Institute of science and technology, Vadapalani campus, Chennai, India"
      ]
    }
  ];

  const toggleTrack = (id) => {
    setExpandedTrack(expandedTrack === id ? null : id);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          data-aos="fade-up"
        >
          Conference <span className="text-blue-500">Tracks</span>
        </motion.h2>

        <div className="max-w-4xl mx-auto grid gap-6">
          {tracks.map((track, index) => (
            <motion.div
              key={track.id}
              className="backdrop-blur-md bg-gradient-to-r from-blue-900/20 to-indigo-900/20 border border-blue-500/30 rounded-xl overflow-hidden transition-all duration-300"
              whileHover={{ boxShadow: '0 0 25px rgba(59, 130, 246, 0.2)' }}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <motion.button
                className="w-full text-left p-6 flex justify-between items-center"
                onClick={() => toggleTrack(track.id)}
              >
                <h3 className="text-xl font-semibold text-blue-300">{track.title}</h3>
                <motion.div
                  animate={{ rotate: expandedTrack === track.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <IoIosArrowDown className="text-blue-500 text-2xl" />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {expandedTrack === track.id && track.chairs.length > 0 && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <h4 className="text-gray-400 mb-3 font-medium">Track Chairs:</h4>
                      <ul className="space-y-2">
                        {track.chairs.map((chair, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -5 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="text-gray-300"
                          >
                            {chair}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrackShowcase;

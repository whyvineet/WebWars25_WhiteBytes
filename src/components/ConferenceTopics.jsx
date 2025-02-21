// src/components/ConferenceTopics.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronRight } from 'react-icons/fi';

const ConferenceTopics = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const topics = [
    {
      category: "AI & Machine Learning",
      items: [
        "Artificial Intelligence",
        "Large Language Models (LLM)",
        "Federated Learning",
        "Machine Learning",
        "Deep Learning",
        "Computer Vision and Image Processing",
        "Natural Language Processing"
      ]
    },
    {
      category: "Security & Blockchain",
      items: [
        "Blockchain Technology",
        "Cryptography",
        "Information Security",
        "Privacy and Preservation",
        "Cyber Security",
        "Digital Services and Protection",
        "Cryptocurrency",
        "Bitcoin"
      ]
    },
    {
      category: "Computing & Networks",
      items: [
        "Cloud Computing",
        "Edge Computing",
        "Fog Computing",
        "Quantum Computing",
        "5G/6G/7G Technologies",
        "IoT (Internet of Things)",
        "IIoT (Industrial IoT)",
        "IMoT (Internet of Medical Things)"
      ]
    },
    {
      category: "Emerging Technologies",
      items: [
        "AR/VR/Metaverse",
        "Robotics and Automation",
        "Smart Grid",
        "Electric Vehicles",
        "Renewable Energy",
        "Human Computer Interface",
        "Ontology",
        "Sustainability"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          data-aos="fade-up"
        >
          Conference <span className="text-blue-500">Topics</span>
        </motion.h2>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {topics.map((topic, index) => (
            <motion.button
              key={index}
              className={`px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 ${
                activeTab === index
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                  : 'bg-gray-800/70 text-gray-300 hover:bg-gray-700'
              }`}
              onClick={() => setActiveTab(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {topic.category}
            </motion.button>
          ))}
        </div>

        {/* Content */}
        <div 
          className="max-w-4xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4"
            >
              {topics[activeTab].items.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-3 group"
                >
                  <FiChevronRight className="text-blue-500 group-hover:text-blue-400 transition-colors" />
                  <span className="text-gray-300 group-hover:text-white transition-colors">{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ConferenceTopics;

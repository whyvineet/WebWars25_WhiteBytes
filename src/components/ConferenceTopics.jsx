import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronRight, FiChevronLeft, FiChevronRight as FiChevronNext } from 'react-icons/fi';

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

  const handlePrev = () => {
    setActiveTab((prev) => (prev === 0 ? topics.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveTab((prev) => (prev === topics.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Conference <span className="text-blue-500">Topics</span>
        </motion.h2>

        {/* Tabs for desktop */}
        <div className="hidden md:flex flex-wrap justify-center gap-4 mb-12">
          {topics.map((topic, index) => (
            <motion.button
              key={topic.category}
              className={`px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 ${
                activeTab === index
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                  : 'bg-gray-800/70 text-gray-300 hover:bg-gray-700'
              }`}
              onClick={() => setActiveTab(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              layout
            >
              {topic.category}
            </motion.button>
          ))}
        </div>

        {/* Buttons for mobile */}
        <div className="md:hidden flex justify-between items-center mb-12">
          <button
            className="p-2 bg-gray-800 text-gray-300 rounded-full hover:bg-gray-700"
            onClick={handlePrev}
          >
            <FiChevronLeft size={24} />
          </button>
          <h3 className="px-6 py-3 rounded-full text-xl font-semibold text-white bg-blue-600">
            {topics[activeTab].category}
          </h3>
          <button
            className="p-2 bg-gray-800 text-gray-300 rounded-full hover:bg-gray-700"
            onClick={handleNext}
          >
            <FiChevronNext size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
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
                  key={item}
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

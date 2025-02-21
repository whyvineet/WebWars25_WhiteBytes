// src/pages/Committee.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiUser } from 'react-icons/fi';

const Committee = () => {
  const [activeTab, setActiveTab] = useState('organizing');
  
  const committees = {
    organizing: [
      {
        role: "Chief Patrons",
        members: [
          {
            name: "Prof. Dhruv Galgotia",
            affiliation: "CEO, Galgotias University",
            image: "./assets/committee/dhruvSir.jpeg"
          },
          {
            name: "Suneel Galgotia",
            affiliation: "Chairman, Galgotias University",
            image: "./assets/committee/sunilSir.jpeg"
          }
        ]
      },
      {
        role: "General Chair",
        members: [
          {
            name: "Prof. Preeti Bajaj",
            affiliation: "Vice Chancellor, Galgotias University",
            image: "/assets/committee/placeholder.jpg"
          }
        ]
      },
      {
        role: "Conference Chairs",
        members: [
          {
            name: "Prof. Ravi Kumar",
            affiliation: "Director, School of Computing Science and Engineering",
            image: "/assets/committee/placeholder.jpg"
          },
          {
            name: "Prof. Anand Singh",
            affiliation: "Dean R&D, Galgotias University",
            image: "/assets/committee/placeholder.jpg"
          }
        ]
      },
      {
        role: "Organizing Secretaries",
        members: [
          {
            name: "Dr. Amit Kumar",
            affiliation: "Associate Professor, CSE",
            image: "/assets/committee/placeholder.jpg"
          },
          {
            name: "Dr. Priya Sharma",
            affiliation: "Assistant Professor, CSE",
            image: "/assets/committee/placeholder.jpg"
          },
          {
            name: "Dr. Rakesh Mahapatra",
            affiliation: "Associate Professor, ECE",
            image: "/assets/committee/placeholder.jpg"
          }
        ]
      }
    ],
    technical: [
      {
        role: "Technical Program Chairs",
        members: [
          {
            name: "Prof. Vishal Gupta",
            affiliation: "IIT Bombay, India",
            image: "/assets/committee/placeholder.jpg"
          },
          {
            name: "Prof. Sarah Johnson",
            affiliation: "University of Melbourne, Australia",
            image: "/assets/committee/placeholder.jpg"
          },
          {
            name: "Prof. James Wilson",
            affiliation: "University of Edinburgh, UK",
            image: "/assets/committee/placeholder.jpg"
          }
        ]
      },
      {
        role: "Technical Program Committee",
        members: [
          {
            name: "Dr. Rajesh Kumar",
            affiliation: "Indian Institute of Technology, Delhi",
            image: "/assets/committee/placeholder.jpg"
          },
          {
            name: "Dr. Anita Kaul",
            affiliation: "Indian Institute of Science, Bangalore",
            image: "/assets/committee/placeholder.jpg"
          },
          {
            name: "Dr. Sameer Desai",
            affiliation: "BITS Pilani, India",
            image: "/assets/committee/placeholder.jpg"
          },
          {
            name: "Dr. Liu Zhang",
            affiliation: "Tsinghua University, China",
            image: "/assets/committee/placeholder.jpg"
          },
          {
            name: "Dr. Robert Miller",
            affiliation: "MIT, USA",
            image: "/assets/committee/placeholder.jpg"
          },
          {
            name: "Dr. Emma Clarke",
            affiliation: "Imperial College London, UK",
            image: "/assets/committee/placeholder.jpg"
          }
        ]
      }
    ],
    advisory: [
      {
        role: "International Advisory Committee",
        members: [
          {
            name: "Prof. John Smith",
            affiliation: "Stanford University, USA",
            image: "/assets/committee/placeholder.jpg"
          },
          {
            name: "Prof. Maria Rodriguez",
            affiliation: "Technical University of Madrid, Spain",
            image: "/assets/committee/placeholder.jpg"
          },
          {
            name: "Prof. Hiroshi Tanaka",
            affiliation: "University of Tokyo, Japan",
            image: "/assets/committee/placeholder.jpg"
          },
          {
            name: "Prof. Klaus Mueller",
            affiliation: "Technical University of Munich, Germany",
            image: "/assets/committee/placeholder.jpg"
          }
        ]
      },
      {
        role: "National Advisory Committee",
        members: [
          {
            name: "Prof. Vijay Kumar",
            affiliation: "Indian Institute of Technology, Kanpur",
            image: "/assets/committee/placeholder.jpg"
          },
          {
            name: "Prof. Deepak Joshi",
            affiliation: "Indian Institute of Technology, Kharagpur",
            image: "/assets/committee/placeholder.jpg"
          },
          {
            name: "Prof. Sunitha Rao",
            affiliation: "Indian Institute of Science, Bangalore",
            image: "/assets/committee/placeholder.jpg"
          },
          {
            name: "Prof. Ajay Mishra",
            affiliation: "Indian Institute of Technology, Madras",
            image: "/assets/committee/placeholder.jpg"
          }
        ]
      }
    ],
    track: [
      {
        role: "Track Chairs",
        members: [
          {
            name: "Dr. Bhanu Sharma",
            affiliation: "Chitkara University, Punjab, India",
            track: "Immersive Futures: Merging Realities with Intelligent Systems",
            image: "/assets/committee/placeholder.jpg"
          },
          {
            name: "Dr. Gurjinder Singh",
            affiliation: "Chitkara University, Punjab, India",
            track: "Immersive Futures: Merging Realities with Intelligent Systems",
            image: "/assets/committee/placeholder.jpg"
          },
          {
            name: "Dr. Anurag Dwivedi",
            affiliation: "Bansal Institute of Engineering and Technology, Lucknow, India",
            track: "Artificial Intelligence and Soft Computing in Power, Energy, Communication, and Security Systems",
            image: "/assets/committee/placeholder.jpg"
          },
          {
            name: "Dr. Saurabh Kumar",
            affiliation: "Institute of Engineering and Rural Technology (IERT), Prayagraj, India",
            track: "Artificial Intelligence and Soft Computing in Power, Energy, Communication, and Security Systems",
            image: "/assets/committee/placeholder.jpg"
          },
          {
            name: "Dr. Amanpreet Kaur",
            affiliation: "Chitkara University, Punjab, India",
            track: "Innovative and Disruptive Technologies",
            image: "/assets/committee/placeholder.jpg"
          },
          {
            name: "Dr. Anitha Julian",
            affiliation: "Saveetha Engineering College, Tamilnadu India",
            track: "The Convergence of Generative AI and Quantum Computing: Unlocking the Next Frontier of Innovation",
            image: "/assets/committee/placeholder.jpg"
          }
        ]
      }
    ]
  };

  const [expandedCategory, setExpandedCategory] = useState(null);

  const toggleCategory = (index) => {
    setExpandedCategory(expandedCategory === index ? null : index);
  };

  return (
    <div className="pt-28 pb-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-center mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Conference <span className="text-gradient">Committee</span>
          </motion.h1>
          <motion.p 
            className="text-xl text-center text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Meet the dedicated individuals who make ICCSAI 2025 possible. Our committees consist of distinguished researchers and professionals from around the world.
          </motion.p>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-12 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.keys(committees).map((committee) => (
              <motion.button
                key={committee}
                className={`px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 ${
                  activeTab === committee
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                    : 'bg-gray-800/70 text-gray-300 hover:bg-gray-700'
                }`}
                onClick={() => setActiveTab(committee)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                {committee.charAt(0).toUpperCase() + committee.slice(1)} Committee
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Committee Members */}
      <section className="py-10 bg-black">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {activeTab === 'track' ? (
                // Render track chairs with expandable tracks
                <div className="max-w-5xl mx-auto">
                  {committees[activeTab].map((category, catIndex) => (
                    <div key={catIndex} className="mb-16">
                      <h2 className="text-3xl font-bold mb-10 text-center">
                        <span className="text-blue-500">{category.role}</span>
                      </h2>
                      <div className="space-y-6">
                        {category.members.map((member, memIndex) => (
                          <motion.div
                            key={memIndex}
                            className="backdrop-blur-md bg-gradient-to-r from-blue-900/10 to-indigo-900/10 border border-blue-500/30 rounded-xl overflow-hidden"
                            whileHover={{ boxShadow: '0 0 25px rgba(59, 130, 246, 0.2)' }}
                            data-aos="fade-up"
                            data-aos-delay={memIndex * 100}
                          >
                            <div className="p-6 flex flex-col md:flex-row items-center gap-6">
                              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center overflow-hidden flex-shrink-0">
                                {member.image ? (
                                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                                ) : (
                                  <FiUser className="text-4xl text-white" />
                                )}
                              </div>
                              <div className="flex-1 text-center md:text-left">
                                <h3 className="text-xl font-semibold text-blue-300">{member.name}</h3>
                                <p className="text-gray-400 mb-2">{member.affiliation}</p>
                                <div className="mt-2">
                                  <span className="text-sm bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full">
                                    {member.track}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                // Render other committees
                <div className="max-w-5xl mx-auto">
                  {committees[activeTab].map((category, catIndex) => (
                    <motion.div 
                      key={catIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: catIndex * 0.1 }}
                      className="mb-16"
                    >
                      <h2 className="text-3xl font-bold mb-10 text-center">
                        <span className="text-blue-500">{category.role}</span>
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {category.members.map((member, memIndex) => (
                          <motion.div
                            key={memIndex}
                            className="backdrop-blur-md bg-gradient-to-r from-blue-900/10 to-indigo-900/10 border border-blue-500/30 rounded-xl p-6 flex flex-col items-center text-center"
                            whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.3)' }}
                            data-aos="fade-up"
                            data-aos-delay={memIndex * 100}
                          >
                            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center overflow-hidden mb-4">
                              {member.image ? (
                                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                              ) : (
                                <FiUser className="text-4xl text-white" />
                              )}
                            </div>
                            <h3 className="text-xl font-semibold text-blue-300 mb-2">{member.name}</h3>
                            <p className="text-gray-400">{member.affiliation}</p>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Recognition */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-16"
            data-aos="fade-up"
          >
            Technical <span className="text-blue-500">Sponsors</span>
          </motion.h2>

          <motion.div 
            className="glass-card p-10 max-w-4xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 items-center justify-items-center">
              <div className="w-48 h-32 bg-white/5 rounded-lg flex items-center justify-center p-4">
                <span className="text-center text-gray-400 text-sm">
                  <img src="./assets/logos/ieee.png" alt="IEEE Logo" className="h-12 w-auto" />
                </span>
              </div>
              <div className="w-48 h-32 bg-white/5 rounded-lg flex items-center justify-center p-4">
                <span className="text-center text-gray-400 text-sm">
                  <img src="./assets/logos/ACM.png" alt="ACM Logo" className="h-12 w-auto" />
                </span>
              </div>
              <div className="w-48 h-32 bg-white/5 rounded-lg flex items-center justify-center p-4">
                <span className="text-center text-gray-400 text-sm">
                  <img src="./assets/logos/springer.png" alt="Springer Logo" className="h-12 w-auto" />
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Committee;

// src/pages/Home.jsx
import React from 'react';
import Hero from '../components/Hero';
import Timeline from '../components/Timeline';
import TrackShowcase from '../components/TrackShowcase';
import ConferenceTopics from '../components/ConferenceTopics';
import { motion } from 'framer-motion';
import { FaUniversity, FaChalkboardTeacher, FaUsers, FaGlobeAsia } from 'react-icons/fa';

const Home = () => {
  const stats = [
    { icon: <FaUniversity />, count: '50+', label: 'Universities' },
    { icon: <FaChalkboardTeacher />, count: '100+', label: 'Speakers' },
    { icon: <FaUsers />, count: '500+', label: 'Attendees' },
    { icon: <FaGlobeAsia />, count: '20+', label: 'Countries' }
  ];

  return (
    <>
      <Hero />
      
      {/* About Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              data-aos="fade-right"
              className="relative"
            >
              <div className="relative z-10">
                <img 
                  src="/assets/slider/confSlider2.webp"
                  alt="Conference Attendees" 
                  className="rounded-xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-xl"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-blue-500/50 rounded-xl z-0"></div>
              
              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-3 absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-full max-w-md">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="backdrop-blur-lg bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-blue-500/30 p-4 rounded-lg shadow-lg flex flex-col items-center"
                  >
                    <div className="text-blue-400 text-2xl mb-2">{stat.icon}</div>
                    <h4 className="text-2xl font-bold text-white">{stat.count}</h4>
                    <p className="text-gray-400 text-sm">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              data-aos="fade-left"
              className="lg:pl-8 pt-20 lg:pt-0"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                About <span className="text-gradient">ICCSAI 2025</span>
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                The International Conference on Communication, Security, and Artificial Intelligence (ICCSAI 2025) brings together researchers, academicians, and industry professionals from around the globe to exchange innovative ideas and showcase cutting-edge technologies.
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Hosted by Galgotias University, this three-day conference will feature keynote speeches, technical sessions, workshops, and networking opportunities. The conference aims to foster collaboration between academia and industry, providing a platform for sharing knowledge and exploring emerging trends in AI, communication technologies, and security.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500/20 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-blue-300">Publication</h4>
                    <p className="text-gray-400">Accepted papers will be submitted for inclusion into IEEE Xplore subject to meeting IEEE Xplore's scope and quality requirements.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500/20 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-blue-300">Networking</h4>
                    <p className="text-gray-400">Connect with leading researchers, industry professionals, and fellow academics from around the world.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Conference Tracks */}
      <TrackShowcase />
      
      {/* Conference Topics */}
      <ConferenceTopics />
      
      {/* Timeline */}
      <Timeline />
      
      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-8 text-gradient"
              data-aos="fade-up"
            >
              Submit Your Research Today
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 mb-12"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Join researchers from around the world in advancing the future of technology.
              Don't miss this opportunity to share your work and connect with peers.
            </motion.p>
            <motion.div 
              className="flex flex-wrap justify-center gap-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <a 
                href="https://cmt3.research.microsoft.com/ICCSAI2025" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Submit Paper
              </a>
              <a 
                href="/registration" 
                className="btn-secondary"
              >
                Register for Conference
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

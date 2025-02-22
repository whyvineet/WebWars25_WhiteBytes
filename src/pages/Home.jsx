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

  // Animation variants for stats
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <Hero />

      {/* About Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div data-aos="fade-right" className="space-y-8">
              {/* Image Container */}
              <div className="relative">
                <div className="relative z-10">
                  <img
                    src="./assets/slider/confSlider1.webp"
                    alt="Conference Attendees"
                    className="rounded-xl shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-xl"></div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-blue-500/50 rounded-xl z-0"></div>
              </div>
            </motion.div>

            <motion.div data-aos="fade-left" className="lg:pl-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                About{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                  ICCSAI 2025
                </span>
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                The International Conference on Communication, Security, and
                Artificial Intelligence (ICCSAI 2025) brings together
                researchers, academicians, and industry professionals from
                around the globe to exchange innovative ideas and showcase
                cutting-edge technologies.
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Hosted by Galgotias University, this three-day conference will
                feature keynote speeches, technical sessions, workshops, and
                networking opportunities. The conference aims to foster
                collaboration between academia and industry, providing a
                platform for sharing knowledge and exploring emerging trends in
                AI, communication technologies, and security.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500/20 p-3 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-blue-300">
                      Publication
                    </h4>
                    <p className="text-gray-400">
                      Accepted papers will be submitted for inclusion into IEEE
                      Xplore subject to meeting IEEE Xplore's scope and quality
                      requirements.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500/20 p-3 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-blue-300">
                      Networking
                    </h4>
                    <p className="text-gray-400">
                      Connect with leading researchers, industry professionals,
                      and fellow academics from around the world.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-24 relative"
          >
            {/* Decorative background elements */}
            <div className="absolute inset-0 grid grid-cols-4 gap-6 pointer-events-none">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="bg-blue-500/5 rounded-2xl backdrop-blur-3xl"
                />
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl transform group-hover:scale-105 transition-transform duration-300" />
                  <div className="relative backdrop-blur-lg bg-gradient-to-br from-gray-900/90 to-gray-800/90 border border-blue-500/30 p-6 rounded-2xl shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
                    <div className="flex flex-col items-center">
                      <div className="text-blue-400 text-3xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                        {stat.icon}
                      </div>
                      <h4 className="text-3xl font-bold text-white mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                        {stat.count}
                      </h4>
                      <p className="text-gray-400 font-medium">{stat.label}</p>
                    </div>

                    {/* Decorative corner accents */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-blue-500/30 rounded-tl-lg" />
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-purple-500/30 rounded-br-lg" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
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
              <pattern
                id="grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="white"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
              data-aos="fade-up"
            >
              Submit Your Research Today
            </motion.h2>
            <motion.p
              className="text-xl text-gray-300 mb-12"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Join researchers from around the world in advancing the future of
              technology. Don't miss this opportunity to share your work and
              connect with peers.
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
                className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold px-8 py-3 rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Submit Paper
              </a>
              <a
                href="/registration"
                className="bg-transparent border-2 border-blue-500 text-blue-400 font-bold px-8 py-3 rounded-lg hover:bg-blue-500/10 transition-all duration-300 hover:scale-105 active:scale-95"
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

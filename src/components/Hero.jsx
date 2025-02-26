import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Calendar, MapPin, Send, UserPlus, ChevronDown } from "react-feather";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: "./assets/slider/confSlider4.webp" },
    { src: "./assets/slider/confSlider2.webp" },
    { src: "./assets/slider/confSlider3.webp" },
    { src: "./assets/slider/confSlider5.webp" },
    { src: "./assets/slider/confSlider6.webp" },
    { src: "./assets/slider/confSlider7.webp" }
  ];

  useEffect(() => {
    let timer;
    if (isOpen) {
      timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000);
    }
    return () => clearInterval(timer);
  }, [isOpen, images.length]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gray-900 rounded-bl-[80px]">

      <div className="container mx-auto px-4 py-16 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-purple-500">
                ICCSAI 2025
              </h1>
              <div className="h-16">
                <TypeAnimation
                  sequence={[
                    "Communication",
                    1500,
                    "Security",
                    1500,
                    "Artificial Intelligence",
                    1500,
                  ]}
                  wrapper="h2"
                  speed={50}
                  repeat={Infinity}
                  className="text-2xl md:text-3xl font-light text-blue-300"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-2"
            >
              <p className="text-xl md:text-2xl font-light text-gray-200 flex items-center justify-center lg:justify-start gap-2">
                <Calendar className="text-blue-400" size={20} />
                4th - 6th April, 2025
              </p>
              <p className="text-lg text-gray-400 flex items-center justify-center lg:justify-start gap-2">
                <MapPin className="text-blue-400" size={20} />
                Galgotias University, Greater Noida
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-6 justify-center lg:justify-start pt-4"
            >
              <motion.a
                href="https://cmt3.research.microsoft.com/ICCSAI2025"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold px-8 py-4 rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Send size={18} />
                Submit Paper
              </motion.a>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/registration"
                  className="bg-transparent border-2 border-blue-500 text-blue-400 font-bold px-8 py-4 rounded-xl hover:bg-blue-500/10 transition-all duration-300 inline-flex items-center gap-2"
                >
                  <UserPlus size={18} />
                  Register Now
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            <div className="relative group cursor-pointer" onClick={() => setIsOpen(true)}>
              <motion.div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-blue-500 rounded-2xl transform rotate-2 group-hover:rotate-0 transition-transform duration-500"></motion.div>
              <motion.img
                src={images[0].src}
                alt="Conference"
                className="rounded-2xl shadow-2xl transform -rotate-2 transition-transform duration-500 group-hover:rotate-0"
                onError={(e) => {
                  console.error("Image failed to load");
                  e.target.src = "./assets/slider/confSlider4.jpg";
                }}
              />
            </div>
            {isOpen && (
              <Lightbox
                open={isOpen}
                close={() => setIsOpen(false)}
                slides={images}
                index={currentIndex}
                styles={{ container: { backgroundColor: "rgba(0, 0, 0, 0.7)" } }}
                render={{
                  slide: ({ slide }) => (
                    <div className="relative h-full flex flex-col items-center justify-center">
                      <img src={slide.src} alt="Event" className="max-h-[70vh] max-w-[70vw] rounded-lg shadow-lg" />
                    </div>
                  )
                }}
              />
            )}
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <div className="flex flex-col items-center">
          <span className="text-sm text-gray-400 mb-2">Scroll to explore</span>
          <ChevronDown className="text-blue-400 mt-2 animate-bounce" size={20} />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

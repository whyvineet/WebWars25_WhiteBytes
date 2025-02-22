// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaTwitter, FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';
import { motion } from 'framer-motion';
import LogoGroup from './LogoGroup';

const Footer = () => {
  const socialLinks = [
    { icon: <FaLinkedin />, url: '#', label: 'LinkedIn' },
    { icon: <FaTwitter />, url: '#', label: 'Twitter' },
    { icon: <FaInstagram />, url: '#', label: 'Instagram' },
    { icon: <FaFacebook />, url: '#', label: 'Facebook' },
    { icon: <FaYoutube />, url: '#', label: 'YouTube' }
  ];
  
  const quickLinks = [
    { text: 'Home', url: '/' },
    { text: 'Guidelines', url: '/guidelines' },
    { text: 'Committee', url: '/committee' },
    { text: 'Registration', url: '/registration' },
    { text: 'Contact', url: '/contact' }
  ];
  
  return (
    <footer className="pt-16 bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo and Address */}
          <div>
            <motion.div 
              className="flex items-center space-x-4 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img src="/assets/logos/gu_icon.png" alt="Galgotias University" className="h-12" />
              <img src="/assets/logos/iccsai_logo.jpeg" alt="ICCSAI 2025" className="h-12" />
            </motion.div>
            <motion.address 
              className="not-italic text-gray-400 mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Plot No. 2, Yamuna Expy,<br />
              opposite Buddha International Circuit,<br />
              Sector 17A, Greater Noida,<br />
              Uttar Pradesh 201306
            </motion.address>
            
            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold mb-4 text-blue-400">Connect With Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    aria-label={link.label}
                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-blue-600 hover:text-white transition-all duration-300"
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    title={link.label}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
          
          {/* Quick Links */}
          <div>
            <motion.h4 
              className="text-xl font-semibold mb-6 text-blue-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Quick Links
            </motion.h4>
            <motion.ul 
              className="space-y-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Link 
                    to={link.url} 
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center"
                  >
                    <span className="mr-2">→</span> {link.text}
                  </Link>
                </motion.li>
              ))}
              <motion.li 
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <a 
                  href="https://cmt3.research.microsoft.com/ICCSAI2025" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center"
                >
                  <span className="mr-2">→</span> Submit Paper
                </a>
              </motion.li>
            </motion.ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <motion.h4 
              className="text-xl font-semibold mb-6 text-blue-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Contact Us
            </motion.h4>
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex items-start space-x-3">
                <span className="text-blue-500 mt-1">✉</span>
                <div>
                  <h5 className="text-white font-medium">Email</h5>
                  <a href="mailto:iccsai2025@galgotiasuniversity.edu.in" className="text-gray-400 hover:text-blue-400 transition-colors">
                    iccsai2025@galgotiasuniversity.edu.in
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-blue-500 mt-1">☎</span>
                <div>
                  <h5 className="text-white font-medium">Phone</h5>
                  <a href="tel:+919876543210" className="text-gray-400 hover:text-blue-400 transition-colors">
                    +91 98765 43210
                  </a>
                </div>
              </div>
              <div className="pt-6">
                <a 
                  href="/contact" 
                  className="inline-block bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-medium px-6 py-3 rounded-lg hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
                >
                  Send Message
                </a>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Newsletter */}
        <motion.div 
          className="bg-gradient-to-r from-blue-900/30 to-indigo-900/30 backdrop-blur-sm p-8 rounded-xl mb-12 border border-blue-500/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2">
              <h4 className="text-xl font-bold mb-2 text-white">Subscribe to Our Newsletter</h4>
              <p className="text-gray-300">Stay updated with conference news, deadlines, and announcements</p>
            </div>
            <div>
              <form className="flex w-full">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-1 bg-gray-800 border border-gray-700 rounded-l-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <button 
                  type="submit" 
                  className="bg-blue-600 text-white px-6 py-3 rounded-r-lg hover:bg-blue-700 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </motion.div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-center md:text-left mb-4 md:mb-0">
              © 2025 ICCSAI. All rights reserved. Organized by Galgotias University.
            </p>
            <div className="flex items-center space-x-6">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

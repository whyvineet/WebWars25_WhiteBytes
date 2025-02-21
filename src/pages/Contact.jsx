// src/pages/Contact.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiUser, FiMessageSquare } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  const contactInfo = [
    {
      icon: <FiMail className="text-2xl text-blue-400" />,
      title: "Email",
      details: [
        "iccsai2025@galgotiasuniversity.edu.in",
        "iccsai.conference@gmail.com"
      ]
    },
    {
      icon: <FiPhone className="text-2xl text-blue-400" />,
      title: "Phone",
      details: [
        "+91 9876543210",
        "+91 9876543211"
      ]
    },
    {
      icon: <FiMapPin className="text-2xl text-blue-400" />,
      title: "Address",
      details: [
        "Plot No. 2, Yamuna Expy, opposite Buddha International Circuit, Sector 17A, Greater Noida, Uttar Pradesh 203201"
      ]
    }
  ];
  
  const contactPersons = [
    {
      name: "Dr. Amit Kumar",
      role: "Organizing Secretary",
      email: "amit.kumar@galgotiasuniversity.edu.in",
      phone: "+91 9812345670"
    },
    {
      name: "Dr. Priya Sharma",
      role: "Organizing Secretary",
      email: "priya.sharma@galgotiasuniversity.edu.in",
      phone: "+91 9823456781"
    },
    {
      name: "Dr. Rakesh Mahapatra",
      role: "Technical Chair",
      email: "rakesh.mahapatra@galgotiasuniversity.edu.in",
      phone: "+91 9834567892"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black pt-24">
      <div className="container mx-auto px-4 py-16">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Get in <span className="text-blue-500">Touch</span>
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info Section */}
          <motion.div 
            className="space-y-10"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div>
              <h2 className="text-2xl font-semibold mb-6 text-blue-400">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + (index * 0.1) }}
                  >
                    <div className="mt-1">{info.icon}</div>
                    <div>
                      <h3 className="text-xl font-medium text-white">{info.title}</h3>
                      <div className="mt-2 space-y-1">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-400">{detail}</p>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-6 text-blue-400">Contact Persons</h2>
              <div className="space-y-6">
                {contactPersons.map((person, index) => (
                  <motion.div 
                    key={index} 
                    className="backdrop-blur-md bg-gradient-to-r from-blue-900/20 to-indigo-900/20 border border-blue-500/30 rounded-xl p-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + (index * 0.1) }}
                    whileHover={{ scale: 1.02, boxShadow: '0 0 15px rgba(59, 130, 246, 0.2)' }}
                  >
                    <h3 className="text-xl font-medium text-white">{person.name}</h3>
                    <p className="text-blue-300 mb-2">{person.role}</p>
                    <div className="text-gray-400 space-y-1">
                      <p className="flex items-center gap-2">
                        <FiMail className="text-blue-400" /> {person.email}
                      </p>
                      <p className="flex items-center gap-2">
                        <FiPhone className="text-blue-400" /> {person.phone}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="backdrop-blur-md bg-gradient-to-r from-blue-900/10 to-indigo-900/10 border border-blue-500/20 rounded-xl p-6 md:p-8"
          >
            <h2 className="text-2xl font-semibold mb-6 text-blue-400">Send us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiUser className="text-gray-500" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-gray-800/70 border border-gray-700 rounded-lg py-3 pl-10 pr-4 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiMail className="text-gray-500" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-gray-800/70 border border-gray-700 rounded-lg py-3 pl-10 pr-4 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-gray-800/70 border border-gray-700 rounded-lg py-3 px-4 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="How can we help you?"
                  required
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Message
                </label>
                <div className="relative">
                  <div className="absolute top-3 left-3 pointer-events-none">
                    <FiMessageSquare className="text-gray-500" />
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-gray-800/70 border border-gray-700 rounded-lg py-3 pl-10 pr-4 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Write your message here..."
                    required
                  ></textarea>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex items-center justify-between"
              >
                {submitted && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-green-400 text-sm"
                  >
                    Your message has been sent successfully!
                  </motion.div>
                )}
                
                <motion.button
                  type="submit"
                  className="ml-auto bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold px-8 py-3 rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={submitting}
                >
                  {submitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend /> Send Message
                    </>
                  )}
                </motion.button>
              </motion.div>
            </form>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div 
          className="mt-16 rounded-xl overflow-hidden h-96 shadow-xl shadow-blue-900/20 border border-blue-500/20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.3374286994287!2d77.49599877519029!3d28.471709775926488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cea5339e3d6c7%3A0xad5f5f3fa69bd5b3!2sGalgotias%20University!5e0!3m2!1sen!2sin!4v1708520815889!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Galgotias University Map Location"
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;

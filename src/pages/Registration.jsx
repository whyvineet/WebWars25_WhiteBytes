// src/pages/Registration.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiCreditCard, FiCheck } from 'react-icons/fi';

const Registration = () => {
  const registrationFees = [
    {
      category: "Authors",
      subcategories: [
        { type: "IEEE Member Indian", amount: "₹5,000" },
        { type: "Non-IEEE Member Indian", amount: "₹6,000" },
        { type: "IEEE Member Foreign", amount: "$250" },
        { type: "Non-IEEE Member Foreign", amount: "$300" }
      ]
    },
    {
      category: "Listeners",
      subcategories: [
        { type: "Students", amount: "₹2,000" },
        { type: "Faculty/Industry", amount: "₹3,000" },
        { type: "Foreign Participants", amount: "$150" }
      ]
    },
    {
      category: "Additional",
      subcategories: [
        { type: "Extra Page Charge (per page)", amount: "₹1,000" },
        { type: "Additional Paper (same author)", amount: "₹4,000" }
      ]
    }
  ];

  const registrationSteps = [
    {
      title: "Paper Acceptance",
      description: "Wait for your paper to be accepted through the CMT platform. You will receive a notification email.",
      icon: <FiCheck className="text-3xl text-green-400" />
    },
    {
      title: "Fee Payment",
      description: "Make the payment using the bank details provided below. Keep the transaction receipt/screenshot for reference.",
      icon: <FiCreditCard className="text-3xl text-blue-400" />
    },
    {
      title: "Registration Form",
      description: "Fill out the registration form, upload the payment proof, and submit before the registration deadline.",
      icon: <FiDownload className="text-3xl text-purple-400" />
    }
  ];

  const bankDetails = {
    accountName: "ICCSAI 2025 Conference",
    accountNumber: "123456789012345",
    ifscCode: "BANK0001234",
    bankName: "State Bank of India",
    branch: "Greater Noida Sector-17"
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
            <span className="text-gradient">Registration</span> Information
          </motion.h1>
          <motion.p 
            className="text-xl text-center text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Complete your registration for ICCSAI 2025. Early registration is recommended for authors with accepted papers.
          </motion.p>
        </div>
      </section>

      {/* Registration Process */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-16"
            data-aos="fade-up"
          >
            Registration <span className="text-blue-500">Process</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {registrationSteps.map((step, index) => (
              <motion.div
                key={index}
                className="backdrop-blur-md bg-blue-900/10 rounded-xl overflow-hidden border border-blue-500/30 p-6 text-center"
                whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.3)' }}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-blue-300">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="mt-16 text-center"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <a 
              href="/assets/docs/ICCSAI2025_registration_form.pdf" 
              target="_blank"
              className="btn-primary inline-flex items-center gap-2"
            >
              <FiDownload />
              Download Registration Form
            </a>
          </motion.div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-16"
            data-aos="fade-up"
          >
            Registration <span className="text-blue-500">Fees</span>
          </motion.h2>

          <div className="max-w-4xl mx-auto grid gap-8">
            {registrationFees.map((section, index) => (
              <motion.div
                key={index}
                className="glass-card p-6"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <h3 className="text-2xl font-semibold mb-6 text-blue-400">{section.category}</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left py-3 px-4 text-gray-300 font-medium">Type</th>
                        <th className="text-right py-3 px-4 text-gray-300 font-medium">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      {section.subcategories.map((item, idx) => (
                        <tr 
                          key={idx} 
                          className="border-b border-gray-800 hover:bg-blue-900/10 transition-colors"
                        >
                          <td className="py-3 px-4 text-white">{item.type}</td>
                          <td className="py-3 px-4 text-right font-medium text-blue-300">{item.amount}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-12 max-w-4xl mx-auto p-6 rounded-xl backdrop-blur-md bg-gradient-to-r from-blue-900/10 to-indigo-900/10 border border-blue-500/30"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h3 className="text-xl font-semibold mb-4 text-blue-300">Important Notes:</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <FiCheck className="text-green-400 text-lg mt-1 flex-shrink-0" /> 
                At least one author must register for each accepted paper
              </li>
              <li className="flex items-start gap-2">
                <FiCheck className="text-green-400 text-lg mt-1 flex-shrink-0" /> 
                Registration deadline: 15th March, 2025
              </li>
              <li className="flex items-start gap-2">
                <FiCheck className="text-green-400 text-lg mt-1 flex-shrink-0" /> 
                Registration fee includes conference kit, lunch, and refreshments during the conference
              </li>
              <li className="flex items-start gap-2">
                <FiCheck className="text-green-400 text-lg mt-1 flex-shrink-0" /> 
                Authors must present their papers at the conference to be included in the proceedings
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Payment Details */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-16"
            data-aos="fade-up"
          >
            Payment <span className="text-blue-500">Details</span>
          </motion.h2>

          <motion.div
            className="max-w-3xl mx-auto glass-card p-8"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-6 text-blue-400">Bank Transfer</h3>
                <div className="space-y-4">
                  {Object.entries(bankDetails).map(([key, value], idx) => (
                    <div key={idx} className="flex flex-col">
                      <span className="text-gray-400 text-sm">{key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}</span>
                      <span className="text-white font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-6 text-blue-400">QR Code Payment</h3>
                <div className="flex justify-center">
                  <div className="p-4 bg-white rounded-xl">
                    <div className="w-48 h-48 bg-gray-300 rounded-md flex items-center justify-center">
                      <span className="text-gray-800 text-xs text-center px-4">
                        Payment QR code placeholder
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-yellow-500/10 border border-yellow-500/50 rounded-lg">
              <p className="text-yellow-300 text-center">
                Please mention your paper ID in the payment reference for easy tracking.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Registration;

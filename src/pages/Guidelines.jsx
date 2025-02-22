// src/pages/Guidelines.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FiFileText, FiCheckCircle, FiAlertTriangle, FiDownload } from 'react-icons/fi';

const Guidelines = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="pt-32 pb-20">
      {/* Hero section */}
      <div className="bg-gradient-to-b from-gray-900 to-black py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Author Guidelines</h1>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto">
              Important information and requirements for submitting your research to ICCSAI 2025
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar with quick links */}
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl shadow-xl hover:shadow-blue-500/10 transition-all duration-300 p-6 sticky top-24">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Quick Navigation</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#submission-guidelines" className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors">
                    <FiFileText /> Submission Guidelines
                  </a>
                </li>
                <li>
                  <a href="#paper-format" className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors">
                    <FiCheckCircle /> Paper Format
                  </a>
                </li>
                <li>
                  <a href="#ethical-guidelines" className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors">
                    <FiAlertTriangle /> Ethical Guidelines
                  </a>
                </li>
                <li>
                  <a href="#downloads" className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors">
                    <FiDownload /> Templates & Downloads
                  </a>
                </li>
              </ul>
              
              <div className="mt-8 p-4 bg-blue-900/20 rounded-lg border border-blue-500/30">
                <h4 className="font-medium text-blue-300 mb-2">Important Dates</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between">
                    <span className="text-gray-300">Abstract Submission:</span>
                    <span className="font-medium text-white">Dec 25, 2024</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-300">Paper Submission:</span>
                    <span className="font-medium text-white">Jan 25, 2025</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-300">Notification:</span>
                    <span className="font-medium text-white">Feb 28, 2025</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-300">Camera Ready:</span>
                    <span className="font-medium text-white">Mar 15, 2025</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.aside>

          {/* Main content area */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-2"
          >
            {/* Submission Guidelines Section */}
            <motion.section 
              id="submission-guidelines" 
              className="mb-16"
              variants={itemVariants}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-blue-400">Submission Guidelines</h2>
              <div className="prose prose-invert max-w-none">
                <p>
                  All papers must be submitted electronically through Microsoft CMT platform. The link for paper 
                  submission is <a href="https://cmt3.research.microsoft.com/ICCSAI2025" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">https://cmt3.research.microsoft.com/ICCSAI2025</a>.
                </p>
                <p>
                  The following guidelines must be strictly followed:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Papers must be written in English and must not exceed 6 pages in length, including figures, tables, and references.</li>
                  <li>Papers should report original work that has not been published or submitted elsewhere.</li>
                  <li>Simultaneous submission to other conferences or journals is not allowed and will result in rejection.</li>
                  <li>At least one author of each accepted paper must register for the conference and present the paper.</li>
                  <li>Papers not presented at the conference will not be included in the IEEE Xplore Digital Library.</li>
                </ul>
                
                <div className="my-6 p-4 bg-yellow-900/20 border border-yellow-600/30 rounded-lg">
                  <h4 className="text-yellow-400 font-medium mb-2">Important Note</h4>
                  <p className="text-gray-300 text-sm">
                    ICCSAI 2025 follows a double-blind review process. Authors should not include their names, affiliations, or any identifying information in the submitted paper. References to the authors' own work should be made in the third person.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Paper Format Section */}
            <motion.section 
              id="paper-format" 
              className="mb-16"
              variants={itemVariants}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-blue-400">Paper Format</h2>
              <div className="prose prose-invert max-w-none">
                <p>
                  All submissions must follow the IEEE conference format. Authors should use the templates provided by IEEE.
                </p>
                
                <h4 className="text-xl font-medium mt-6 mb-4">Paper Structure</h4>
                <p>Papers should have the following structure:</p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li><strong>Title:</strong> Concise and informative</li>
                  <li><strong>Abstract:</strong> Maximum 250 words, summarizing the problem, methodology, and main findings</li>
                  <li><strong>Keywords:</strong> 4-6 keywords or phrases</li>
                  <li><strong>Introduction:</strong> Background, motivation, and objectives</li>
                  <li><strong>Related Work:</strong> Review of relevant literature</li>
                  <li><strong>Methodology/System Design:</strong> Detailed description of methods, algorithms, or system architecture</li>
                  <li><strong>Experimental Setup/Implementation:</strong> Description of experiments or implementation details</li>
                  <li><strong>Results and Analysis:</strong> Presentation and discussion of results</li>
                  <li><strong>Conclusion:</strong> Summary of findings and future work</li>
                  <li><strong>References:</strong> IEEE citation format</li>
                </ol>
                
                <h4 className="text-xl font-medium mt-8 mb-4">Formatting Requirements</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Use the IEEE two-column format</li>
                  <li>Paper size: US letter (8.5 × 11 inches)</li>
                  <li>Margins: Top = 0.75 inch, Bottom = 1 inch, Sides = 0.625 inch</li>
                  <li>Font: Times New Roman, 10 point size</li>
                  <li>Line spacing: Single</li>
                  <li>File format: PDF only</li>
                </ul>
              </div>
            </motion.section>

            {/* Ethical Guidelines Section */}
            <motion.section 
              id="ethical-guidelines" 
              className="mb-16"
              variants={itemVariants}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-blue-400">Ethical Guidelines</h2>
              <div className="prose prose-invert max-w-none">
                <p>
                  ICCSAI 2025 is committed to maintaining the highest standards of research integrity and ethics. All authors must adhere to the following ethical guidelines:
                </p>
                
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li><strong>Originality:</strong> All submitted papers must be original work. Plagiarism in any form is unacceptable and will result in immediate rejection.</li>
                  <li><strong>Authorship:</strong> All listed authors must have made significant contributions to the work. Ghost authorship and gift authorship are prohibited.</li>
                  <li><strong>Conflicts of Interest:</strong> Authors must disclose any potential conflicts of interest that might influence the interpretation of their work.</li>
                  <li><strong>Human Subjects:</strong> Research involving human subjects or personal data must comply with relevant ethical standards and privacy regulations. Appropriate approvals must be obtained and mentioned in the paper.</li>
                  <li><strong>Data Fabrication/Falsification:</strong> Fabrication, falsification, or selective reporting of data is unacceptable.</li>
                </ul>
                
                <div className="my-6 p-4 bg-red-900/20 border border-red-600/30 rounded-lg">
                  <h4 className="text-red-400 font-medium mb-2">Violations</h4>
                  <p className="text-gray-300 text-sm">
                    Violations of these ethical guidelines may result in rejection of the paper, notification to the authors' institutions, and potential banning from future ICCSAI conferences. IEEE may also take additional actions in accordance with their policies.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Templates & Downloads Section */}
            <motion.section 
              id="downloads" 
              className="mb-8"
              variants={itemVariants}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-blue-400">Templates & Downloads</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <a 
                  href="#" 
                  className="flex items-center p-6 bg-gradient-to-br from-blue-900/20 to-indigo-900/20 border border-blue-500/30 rounded-lg hover:border-blue-400/60 transition-all duration-300"
                >
                  <div className="mr-4 text-blue-400 text-4xl">
                    <FiDownload />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-white mb-1">IEEE Word Template</h4>
                    <p className="text-sm text-gray-400">Conference paper template for Microsoft Word</p>
                  </div>
                </a>
                
                <a 
                  href="#" 
                  className="flex items-center p-6 bg-gradient-to-br from-blue-900/20 to-indigo-900/20 border border-blue-500/30 rounded-lg hover:border-blue-400/60 transition-all duration-300"
                >
                  <div className="mr-4 text-blue-400 text-4xl">
                    <FiDownload />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-white mb-1">IEEE LaTeX Template</h4>
                    <p className="text-sm text-gray-400">Conference paper template for LaTeX</p>
                  </div>
                </a>
                
                <a 
                  href="#" 
                  className="flex items-center p-6 bg-gradient-to-br from-blue-900/20 to-indigo-900/20 border border-blue-500/30 rounded-lg hover:border-blue-400/60 transition-all duration-300"
                >
                  <div className="mr-4 text-blue-400 text-4xl">
                    <FiDownload />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-white mb-1">Authorship Form</h4>
                    <p className="text-sm text-gray-400">IEEE Copyright Form</p>
                  </div>
                </a>
                
                <a 
                  href="#" 
                  className="flex items-center p-6 bg-gradient-to-br from-blue-900/20 to-indigo-900/20 border border-blue-500/30 rounded-lg hover:border-blue-400/60 transition-all duration-300"
                >
                  <div className="mr-4 text-blue-400 text-4xl">
                    <FiDownload />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-white mb-1">Checklist</h4>
                    <p className="text-sm text-gray-400">Submission checklist for authors</p>
                  </div>
                </a>
              </div>
            </motion.section>

            {/* Contact Information */}
            <motion.section variants={itemVariants}>
              <div className="p-6 backdrop-blur-md bg-white/5 border border-white/10 rounded-xl shadow-xl hover:shadow-blue-500/10 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-4 text-blue-300">Questions?</h3>
                <p className="text-gray-300 mb-4">
                  If you have any questions regarding the submission process or guidelines, please contact the Technical Program Committee:
                </p>
                <a href="mailto:iccsai2025@galgotiasuniversity.edu.in" className="text-blue-400 hover:underline">iccsai2025@galgotiasuniversity.edu.in</a>
              </div>
            </motion.section>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Guidelines;

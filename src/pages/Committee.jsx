// src/pages/Committee.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown, FiUser } from "react-icons/fi";
import { image } from "framer-motion/client";

const Committee = () => {
  const [activeTab, setActiveTab] = useState("organizing");

  const committees = {
    organizing: [
      {
        role: "Chief Patrons",
        members: [
          {
            name: "Suneel Galgotia",
            affiliation: "Chairman, Galgotias University",
            image: "./assets/committee/sunilSir.jpeg",
          },
        ],
      },
      {
        role: "Patrons",
        members: [
          {
            name: "Prof.(Dr.) S.N. Singh",
            affiliation: "Director IITM, Gwalior, India",
            image: "./assets/committee/snsingh.jpeg",
          },
          {
            name: "Dhruv Galgotia",
            affiliation: "CEO, Galgotias University",
            image: "./assets/committee/dhruvSir.jpeg",
          },
          {
            name: "Prof.(Dr.) M.K. Babu Kayala",
            affiliation: "VC, Galgotias University",
            image: "./assets/committee/vcsir.jpg",
          },
          {
            name: "Ms. Aradhana Galgotia",
            affiliation: "Director Operations, Galgotias University, India",
            image: "./assets/committee/aradhanaMaam.jpg",
          },
        ],
      },
      {
        role: "Conference General Chair",
        members: [
          {
            name: "Prof.(Dr.) Avadhesh Kumar",
            affiliation: "Pro-VC, Galgotias University, India",
            image: "./assets/committee/pvcsir.jpg",
          },
          {
            name: "Dr. Yogesh S. Chauhan",
            affiliation: "Professor, IIT Kanpur, India",
            image: "./assets/committee/yogesh1.png",
          },
        ],
      },
      {
        role: "Conference Chairs",
        members: [
          {
            name: "Dr. Aanjey M. Tripathi",
            affiliation: "Professor, Galgotias University, India",
            image: "./assets/committee/Aanjey.jpg",
          },
          {
            name: "Prof. Prashant Johri",
            affiliation: "Galgotias University, India",
            image: "./assets/committee/prashant ji.jpeg",
          },
          {
            name: "Dr. Kuldeep S. Kaswan",
            affiliation: "Professor, Galgotias University, India",
            image: "./assets/committee/kuldeepkaswan.png",
          },
        ],
      },
      {
        role: "Conference Organizing Chair",
        members: [
          {
            name: "Dr. Vimal Kumar",
            affiliation: "Professor, Galgotias University, India",
            image: "./assets/committee/vimalkumar.png",
          },
          {
            name: "Dr. Gaurav Agarwal",
            affiliation: "Professor, Galgotias University, India",
            image: "./assets/committee/gauravagarwal.jpeg",
          },
          {
            name: "Dr. Abdul Aleem",
            affiliation: "Professor, Galgotias University, India",
            image: "./assets/committee/abdulaleem.jpeg",
          },
        ],
      },
      {
        role: "Conference Technical Chair",
        members: [
          {
            name: "Dr. Suneeta Yadav",
            affiliation:
              "Dean, SCSE, Galgotias University, Greater Noida, India",
            image: "",
          },
          {
            name: "Dr. V. Khemchandani",
            affiliation:
              "Dean, SCAT, Galgotias University, Greater Noida, India",
            image: "",
          },
          {
            name: "Dr. Anurag Singh",
            affiliation: "Associate Professor, NIT Delhi, India",
            image: "",
          },
          {
            name: "Dr. Arvind Panwar",
            affiliation:
              "Professor, Galgotias University, Greater Noida, India",
            image: "",
          },
        ],
      },
      {
        role: "Publication Chairs",
        members: [
          {
            name: "Prof. Shrddha Sagar",
            affiliation: "Galgotias University, Greater Noida, India",
            image: "",
          },
          {
            name: "Prof. Ashok K. Yadav",
            affiliation: "Galgotias University, Greater Noida, India",
            image: "",
          },
        ],
      },
      {
        role: "Conference Organizing Co-Chairs",
        members: [
          {
            name: "Prof. Meenakshi Awasthi",
            affiliation: "Galgotias University, Greater Noida, India",
            image: "",
          },
          {
            name: "Prof. Deepak Soni",
            affiliation: "Galgotias University, Greater Noida, India",
            image: "",
          },
          {
            name: "Prof. Sunil Bharti",
            affiliation: "GCET, Greater Noida, India",
            image: "",
          },
        ],
      },
      {
        role: "Conference Technical Co-Chairs",
        members: [
          {
            name: "Prof. Ravi Sharma",
            affiliation: "Galgotias University, Greater Noida, India",
            image: "",
          },
          {
            name: "Prof. Tarun Kumar",
            affiliation: "Galgotias University, Greater Noida, India",
            image: "",
          },
          {
            name: "Dr. Manish Kumar",
            affiliation: "Galgotias University, Greater Noida, India",
            image: "",
          },
          {
            name: "Dr. Sonu Jha",
            affiliation: "Galgotias University, Greater Noida, India",
            image: "",
          },
          {
            name: "Dr. Sunil Kumar",
            affiliation: "Galgotias University, Greater Noida, India",
            image: "",
          },
        ],
      },
      {
        role: "Conference Secretaries",
        members: [
          {
            name: "Dr. K. K. Agrawal",
            affiliation: "Galgotias University, Greater Noida, India",
            image: "",
          },
          {
            name: "Dr. Vipin Rai",
            affiliation: "Galgotias University, Greater Noida, India",
            image: "",
          },
          {
            name: "Prof. Arunendra Mani Tripathi",
            affiliation: "Galgotias University, Greater Noida, India",
            image: "",
          },
          {
            name: "Prof. Avneesh Kumar",
            affiliation: "Galgotias University, Greater Noida, India",
            image: "",
          },
        ],
      },
      {
        role: "International Advisory Chairs",
        members: [
          {
            name: "Prof. Sanjeev K. Singh",
            affiliation: "Galgotias University, Greater Noida, India",
            image: "",
          },
          {
            name: "Prof. N. Partheeban",
            affiliation: "Galgotias University, Greater Noida, India",
            image: "",
          },
        ],
      },
      {
        role: "Publication Co-Chairs",
        members: [
          {
            name: "Dr. Sachi Mall",
            affiliation: "Galgotias University, Greater Noida, India",
            image: "",
          },
          {
            name: "Dr. Ajeet Singh",
            affiliation: "Galgotias University, Greater Noida, India",
            image: "",
          },
        ],
      },
      {
        role: "Publicity Chairs",
        members: [
          {
            name: "Prof. Ravi Sharma",
            affiliation: "Galgotias University, Greater Noida, India",
            image: "",
          },
        ],
      },
      {
        role: "Sponsorship & Industry Chairs",
        members: [
          {
            name: "Prof. Vipul Narayan Srivastava",
            affiliation: "Galgotias University, Greater Noida, India",
            image: "",
          },
        ],
      },
      {
        role: "Event Organising Chair",
        members: [
          {
            name: "Dr. Pragya Tewari",
            affiliation: "Galgotias University, Greater Noida, India",
            image: "",
          },
          {
            name: "Dr. Ambika Gupta",
            affiliation: "Galgotias University, Greater Noida, India",
            image: "",
          },
          {
            name: "Dr. Pooja Singh",
            affiliation: "Galgotias University, Greater Noida, India",
            image: "",
          },
        ],
      },
      {
        role: "Finance Chairs",
        members: [
          {
            name: "Prof. E. Rajesh",
            affiliation: "Galgotias University, Greater Noida, India",
            image: "",
          },
        ],
      },
      {
        role: "Transport Chairs",
        members: [
          {
            name: "Prof. T. Ganesh Kumar",
            affiliation: "Galgotias University, Greater Noida, India",
            image: "",
          },
        ],
      },
      {
        role: "Website & Graphics Chairs",
        members: [
          {
            name: "Mr. Pankaj Lamba",
            affiliation: "Galgotias University, Greater Noida, India",
            image: "",
          },
        ],
      },
      {
        role: "Media Chairs",
        members: [
          {
            name: "Prof. AR Pandey",
            affiliation: "Galgotias University, Greater Noida, India",
            image: "",
          },
        ],
      },
      {
        role: "Hospitality Chairs",
        members: [
          {
            name: "Prof. (Dr.) Rajiv Mishra",
            affiliation:
              "Dean of SOHT, Galgotias University, Greater Noida, India",
            image: "",
          },
          {
            name: "Ms. Monalisha Dash",
            affiliation:
              "Associate Professor, Galgotias University, Greater Noida, India",
            image: "",
          },
        ],
      },
    ],
    technical: [
      {
        role: "Technical Program Committee",
        members: [
          {
            name: "Dr. Arvind Kumar",
            affiliation: "Electronics & Comm. Engg., MNNIT, Prayagraj, India",
            image: "",
          },
          {
            name: "Prof. V. Krishna Rao Kandanvli",
            affiliation: "Electronics & Comm. Engg., MNNIT, Prayagraj, India",
            image: "",
          },
          {
            name: "Prof. P. Karuppanan",
            affiliation: "Electronics & Comm. Engg., MNNIT, Prayagraj, India",
            image: "",
          },
          {
            name: "Dr. Dharmendra Dixit",
            affiliation: "Electronics & Comm. Engg., MNNIT, Prayagraj, India",
            image: "",
          },
          {
            name: "Dr. Deepak Punetha",
            affiliation: "Electronics & Comm. Engg., MNNIT, Prayagraj, India",
            image: "",
          },
          {
            name: "Dr. Arun Kumar Saurabh",
            affiliation: "Electronics & Comm. Engg., MNNIT, Prayagraj, India",
            image: "",
          },
          {
            name: "Prof. Navdeep Singh",
            affiliation:
              "Department of Electrical Engineering, MMMUT, Gorakhpur, India",
            image: "",
          },
          {
            name: "Dr. Nirmal Ch Roy",
            affiliation: "Electronics & Comm. Engg., MNNIT, Prayagraj, India",
            image: "",
          },
          {
            name: "Prof. Priya Matta",
            affiliation:
              "SM-IEEE, Department of CSE, Tula's Institute, Dehradun, India",
            image: "",
          },
          {
            name: "Prof. Alok Katiyar",
            affiliation: "SCSE, Galgotias University, Greater Noida, India",
            image: "",
          },
          {
            name: "Prof. Dilip Yadav",
            affiliation: "Bennett University, Greater Noida, India",
            image: "",
          },
          {
            name: "Prof. SPS Chauhan",
            affiliation: "Sharda University, Greater Noida, India",
            image: "",
          },
          {
            name: "Prof. Vandana Sharma",
            affiliation: "CHRIST University, Greater Noida, India",
            image: "",
          },
        ],
      },
    ],
    advisory: [
      {
        role: "International Advisory Committee",
        members: [
          {
            name: "Dr. Liudong Xing",
            affiliation:
              "Electrical and Computer Engineering Department, University of Massachusetts, Dartmouth",
            image: "",
          },
          {
            name: "Dr. LING Tok Wang",
            affiliation:
              "Emeritus Professor, Department of Computer Science, National University of Singapore, Singapore",
            image: "",
          },
          {
            name: "Dr. Norjihan Abdul Ghani",
            affiliation:
              "HoD, Department of Information Systems, Universiti of MALAYA, Malaysia",
            image: "",
          },
          {
            name: "Dr. Norbik Bashah Bin Idris",
            affiliation: "Professor, IIUM Gombak Campus, Malaysia",
            image: "",
          },
          {
            name: "Dr. Maizatul Akmar Ismail",
            affiliation:
              "Department of Information Systems, Universiti of MALAYA, Malaysia",
            image: "",
          },
          {
            name: "Dr. Suzan Jabbar Obaiys",
            affiliation: "Multimedia Unit, Universiti of MALAYA, Malaysia",
            image: "",
          },
          {
            name: "Dr. Mufti Mahmud",
            affiliation:
              "Dept. of Computer Science, Nottingham Trent University, United Kingdom",
            image: "",
          },
          {
            name: "Dr. Deepak K Jain",
            affiliation: "Dalian University of Technology, China",
            image: "",
          },
          {
            name: "Dr. Kishore Bingi",
            affiliation: "Universiti Teknologi PETRONAS, Malaysia",
            image: "",
          },
          {
            name: "Dr. Noor Zaman Jhanjhi",
            affiliation: "Taylor's University, Malaysia",
            image: "",
          },
          {
            name: "Dr. CHAMAN VERMA",
            affiliation: "Eotvos Lorand University, Budapest, Hungary",
            image: "",
          },
          {
            name: "Dr. Manoj Kumar",
            affiliation: "University of Wollongong, Dubai, United Arab Emirate",
            image: "",
          },
          {
            name: "Dr. Sachidanand Mohanty",
            affiliation: "Singdum University, Serbia",
            image: "",
          },
          {
            name: "Dr. S.B.Goyal",
            affiliation:
              "Director, Faculty of Information Technology, City University, Malaysia",
            image: "",
          },
          {
            name: "Dr. Nagender Aneja",
            affiliation:
              "School of Digital Science, Universiti Brunei Darussalam, Brunei Darussalam",
            image: "",
          },
          {
            name: "Dr. Pradeep Kumar",
            affiliation:
              "Research Specialist, UTP Universiti Teknologi PETRONAS, Malaysia",
            image: "",
          },
          {
            name: "Dr. Mukesh Prasad",
            affiliation:
              "School of Computer Science, University of Technology Sydney, Australia",
            image: "",
          },
          {
            name: "Dr. Gavendra Singh",
            affiliation: "Haramaya University, Ethiopia",
            image: "",
          },
          {
            name: "Dr. Hoang Pham",
            affiliation: "Professor, Rutgers University, New Jersey, USA",
            image: "",
          },
          {
            name: "Dr. Nitin Kumar Saxena",
            affiliation:
              "Visiting Professor, Electrical and Computer Engineering Department, University of Denver, USA",
            image: "",
          },
          {
            name: "Prof. Utkal Mehta",
            affiliation:
              "Electrical and Electronics Engg., The University of the South Pacific (USP), Laucala Campus, Suva, Fiji",
            image: "",
          },
          {
            name: "Dr. Shafiq Ul Rehman",
            affiliation:
              "Singapore University of Technology and Design (SUTD), Singapore",
            image: "",
          },
          {
            name: "Prof. Mohammad Rashid Hussain",
            affiliation: "King Khalid University, Abha, Saudi Arabia",
            image: "",
          },
          {
            name: "Prof. Deepak L. Waikar",
            affiliation: "Singapore",
            image: "",
          },
        ],
      },
      {
        role: "National Advisory Committee",
        members: [
          {
            name: "Prof. Adarsh Anand",
            affiliation: "University Of Delhi, Delhi, India",
            image: "",
          },
          {
            name: "Prof. (Dr.) Chandra Prakash",
            affiliation: "National Institute of Technology, Delhi, India",
            image: "",
          },
          {
            name: "Prof. (Dr.) Sahil",
            affiliation: "National Institute of Technology, Delhi, India",
            image: "",
          },
          {
            name: "Prof. T. Poongodi",
            affiliation: "Dayananda Sagar University, Bangalore, India",
            image: "",
          },
          {
            name: "Prof. Mayank Pandey",
            affiliation: "Computer Science & Engg., MNNIT, Prayagraj, India",
            image: "",
          },
          {
            name: "Prof. Y. K. Prajapati",
            affiliation: "Electronics & Comm. Engg., MNNIT, Prayagraj, India",
            image: "",
          },
          {
            name: "Prof. Ela Kumar",
            affiliation: "CSE, IGDTUW, Delhi, India",
            image: "",
          },
          {
            name: "Prof. R.K. Nagaria",
            affiliation: "ECE, MNNIT, Prayagraj, India",
            image: "",
          },
          {
            name: "Prof. Arvind Pandey",
            affiliation: "Director, BIT, Gorakhpur, India",
            image: "",
          },
          {
            name: "Prof. Shashank Srivastava",
            affiliation: "BIT, Gorakhpur, India",
            image: "",
          },
          {
            name: "Dr. Dushyant Kumar Singh",
            affiliation:
              "Associate Professor, Computer Science & Engg., MNNIT, Prayagraj, India",
            image: "",
          },
          {
            name: "Prof. Nidhi Goel",
            affiliation:
              "Head of Department, Electronics & Communication Engineering, IGDTUW, Delhi, India",
            image: "",
          },
          {
            name: "Prof. S. K. Srivastava",
            affiliation:
              "PROFESSOR, Department of Electrical Engineering, MMMUT, Gorakhpur, India",
            image: "",
          },
          {
            name: "Prof. Vandana Niranjan",
            affiliation:
              "Professor, Electronics & Communication Engineering, IGDTUW, Delhi, India",
            image: "",
          },
          {
            name: "Prof. SRN Reddy",
            affiliation:
              "COMPUTER SCIENCE AND ENGINEERING, IGDTUW, Delhi, India",
            image: "",
          },
          {
            name: "Prof. Bhawna Narwal",
            affiliation:
              "Department of Information Technology, IGDTUW, Delhi, India",
            image: "",
          },
          {
            name: "Dr. Vimal Kumar Singh Yadav",
            affiliation:
              "Department of Electronics and Communication Engineering, MNNIT, Prayagraj, India",
            image: "",
          },
          {
            name: "Prof. Karuna Kadian",
            affiliation:
              "COMPUTER SCIENCE AND ENGINEERING, IGDTUW, Delhi, India",
            image: "",
          },
          {
            name: "Dr. Satish Chandra",
            affiliation:
              "Department of Electronics and Communication Engineering, MNNIT, Prayagraj, India",
            image: "",
          },
          {
            name: "Prof. Anil Kumar Sagar",
            affiliation: "Sharda University, Greater Noida, India",
            image: "",
          },
          {
            name: "Dr. Savita Yadav",
            affiliation: "Netaji Subhas University of Technology, Delhi, India",
            image: "",
          },
          {
            name: "Prof. Anurag Diwedi",
            affiliation: "BIET, Lucknow, India",
            image: "",
          },
          {
            name: "Prof. Deependra Rastogi",
            affiliation: "IILM University, India",
            image: "",
          },
          {
            name: "Prof. N.Gayathri",
            affiliation: "GITAM University, Bangalore, India",
            image: "",
          },
          {
            name: "Prof. S.Rakesh Kumar",
            affiliation: "GITAM University, Bangalore, India",
            image: "",
          },
          {
            name: "Prof. Anoop Kumar Patel",
            affiliation: "NIT Kurukshetra, India",
            image: "",
          },
          {
            name: "Prof. R.P. Yadav",
            affiliation: "Galgotias University, Greater Noida, India",
            image: "",
          },
        ],
      },
    ],
    track: [
      {
        role: "Keynote Speakers",
        members: [
          {
            name: "Prof.(Dr.) S.N. Singh",
            affiliation: "Director IIITM, Gwalior, India",
            track: "Track Title (Description)",
            image: "./assets/committee/snsingh.jpeg",
          },
          {
            name: "Dr. Yogesh S. Chauhan",
            affiliation:
              "Professor, Indian Institute of Technology Kanpur Kanpur, U.P., India",
            track: "Track Title (Description)",
            image: "./assets/committee/yogesh1.png",
          },
          {
            name: "Prof.J. Ramkumar",
            affiliation: "Dean (Planning), IIT Kanpur, India",
            track: "Track Title (Description)",
            image: "./assets/committee/jramkumar.jpg",
          },
          {
            name: "Dr. Liudong Xing",
            affiliation:
              "Professor, Director (R), University of Massachusetts, Dartmouth",
            track: "Track Title (Description)",
            image: "./assets/committee/Liudong1.png",
          },
          {
            name: "Ts. Dr. Nurfadhlina Mohd Sharef",
            affiliation: "Assoc. Professor, UKM, Malaysia",
            track: "Track Title (Description)",
            image: "./assets/committee/nurfa.png",
          },
          {
            name: "Dr. Ahmed A. Elngar",
            affiliation: "Associate Professor, Beni-Suef University, Egypt",
            track: "Track Title (Description)",
            image: "./assets/committee/elngar.jpg",
          },
          {
            name: "Prof. Ts. Dr. Murali Raman",
            affiliation:
              "Deputy Vice Chancellor, Asia Pacific University, Malaysia",
            track: "Track Title (Description)",
            image: "",
          },
          {
            name: "Dr. Rajeev Srivastava",
            affiliation: "Professor, IIT BHU, Varanasi, India",
            track: "Track Title (Description)",
            image: "./assets/committee/RajeevPhoto1.png",
          },
          {
            name: "Dr. Asheesh Kumar Singh",
            affiliation: "Professor, MNNIT Allahabad, India",
            track: "Track Title (Description)",
            image: "./assets/committee/AKS_pic.jpg",
          },
        ],
      },
    ],
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
            Conference{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Committee
            </span>
          </motion.h1>
          <motion.p
            className="text-xl text-center text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Meet the dedicated individuals who make ICCSAI 2025 possible. Our
            committees consist of distinguished researchers and professionals
            from around the world.
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
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                    : "bg-gray-800/70 text-gray-300 hover:bg-gray-700"
                }`}
                onClick={() => setActiveTab(committee)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                {committee.charAt(0).toUpperCase() + committee.slice(1)}{" "}
                Committee
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
              {activeTab === "track" ? (
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
                            whileHover={{
                              boxShadow: "0 0 25px rgba(59, 130, 246, 0.2)",
                            }}
                            data-aos="fade-up"
                            data-aos-delay={memIndex * 100}
                          >
                            <div className="p-6 flex flex-col md:flex-row items-center gap-6">
                              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center overflow-hidden flex-shrink-0">
                                {member.image ? (
                                  <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover"
                                  />
                                ) : (
                                  <FiUser className="text-4xl text-white" />
                                )}
                              </div>
                              <div className="flex-1 text-center md:text-left">
                                <h3 className="text-xl font-semibold text-blue-300">
                                  {member.name}
                                </h3>
                                <p className="text-gray-400 mb-2">
                                  {member.affiliation}
                                </p>
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
                            whileHover={{
                              y: -5,
                              boxShadow:
                                "0 10px 25px -5px rgba(59, 130, 246, 0.3)",
                            }}
                            data-aos="fade-up"
                            data-aos-delay={memIndex * 100}
                          >
                            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center overflow-hidden mb-4">
                              {member.image ? (
                                <img
                                  src={member.image}
                                  alt={member.name}
                                  className="w-full h-full object-cover"
                                />
                              ) : (
                                <FiUser className="text-4xl text-white" />
                              )}
                            </div>
                            <h3 className="text-xl font-semibold text-blue-300 mb-2">
                              {member.name}
                            </h3>
                            <p className="text-gray-400">
                              {member.affiliation}
                            </p>
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
            className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl shadow-xl hover:shadow-blue-500/10 transition-all duration-300 p-10 max-w-4xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 items-center justify-items-center">
              <div className="w-48 h-32 bg-white/5 rounded-lg flex items-center justify-center p-4">
                <span className="text-center text-gray-400 text-sm">
                  <img
                    src="./assets/logos/ieee.png"
                    alt="IEEE Logo"
                    className="h-12 w-auto"
                  />
                </span>
              </div>
              <div className="w-48 h-32 bg-white/5 rounded-lg flex items-center justify-center p-4">
                <span className="text-center text-gray-400 text-sm">
                  <img
                    src="./assets/logos/ACM.png"
                    alt="ACM Logo"
                    className="h-12 w-auto"
                  />
                </span>
              </div>
              <div className="w-48 h-32 bg-white/5 rounded-lg flex items-center justify-center p-4">
                <span className="text-center text-gray-400 text-sm">
                  <img
                    src="./assets/logos/springer.png"
                    alt="Springer Logo"
                    className="h-12 w-auto"
                  />
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

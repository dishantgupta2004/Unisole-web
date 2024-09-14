import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaYoutube, FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa'; // Correct import for Twitter icon
import { motion } from 'framer-motion'; // Import framer-motion

const Shadowpage: React.FC = () => {
    const navigate = useNavigate();

    const handleClose = () => {
        navigate(-1); // Navigate back to the previous page in history
    };

    // Define animation variants for text appearance
    const textVariant = {
        hidden: { x: '-100vw', opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { type: 'spring', stiffness: 50, damping: 10 } }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-90 text-white flex flex-col justify-between z-50 p-8">
            <button
                className="absolute top-5 left-6 md:left-12 text-white text-3xl md:text-4xl font-light hover:text-gray-300 hover:bg-white hover:bg-opacity-20 p-3 md:p-4 rounded-full transition-colors duration-300 flex items-center justify-center w-10 h-10 md:w-12 md:h-12"
                onClick={handleClose}
                aria-label="Close"
            >
                ×
            </button>

            {/* Animated Text */}
            <motion.div
                className="flex flex-col ml-8 md:ml-16 mt-8 md:mt-12"
                initial="hidden"
                animate="visible"
                variants={textVariant}
            >
                <ul className="list-none p-0 m-0">
                    <motion.li
                        className="mb-4 md:mb-5 text-xl md:text-2xl"
                        whileHover={{ x: 10 }} // Moves 10px to the right on hover
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        <span className="text-gray-500 text-sm mr-2">01</span>
                        <Link to="/about" className="text-white hover:text-gray-500 transition-colors font-bold text-2xl md:text-3xl duration-300">About</Link>
                    </motion.li>
                    <motion.li
                        className="mb-4 md:mb-5 text-xl md:text-2xl"
                        whileHover={{ x: 10 }} // Moves 10px to the right on hover
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        <span className="text-gray-500 text-sm mr-2">02</span>
                        <Link to="/announcement" className="text-white hover:text-gray-500 font-bold text-2xl md:text-3xl transition-colors duration-300">Announcements</Link>
                    </motion.li>
                    <motion.li
                        className="mb-4 md:mb-5 text-xl md:text-2xl"
                        whileHover={{ x: 10 }} // Moves 10px to the right on hover
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        <span className="text-gray-500 text-sm mr-2">03</span>
                        <Link to="/project" className="text-white hover:text-gray-500 font-bold text-2xl md:text-3xl transition-colors duration-300">Project</Link>
                    </motion.li>
                    <motion.li
                        className="mb-4 md:mb-5 text-xl md:text-2xl"
                        whileHover={{ x: 10 }} // Moves 10px to the right on hover
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        <span className="text-gray-500 text-sm mr-2">04</span>
                        <Link to="/event" className="text-white hover:text-gray-500 font-bold text-2xl md:text-3xl transition-colors duration-300">Events</Link>
                    </motion.li>
                    <motion.li
                        className="mb-4 md:mb-5 text-xl md:text-2xl"
                        whileHover={{ x: 10 }} // Moves 10px to the right on hover
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        <span className="text-gray-500 text-sm mr-2">05</span>
                        <Link to="/course" className="text-white hover:text-gray-500 font-bold text-2xl md:text-3xl transition-colors duration-300">Courses</Link>
                    </motion.li>
                </ul>
            </motion.div>

            <div className="flex flex-col md:flex-row justify-between items-end w-full px-4 md:px-16 mb-6 md:mb-8 space-y-8 md:space-y-0">
                <div className="flex flex-col space-y-4 md:space-y-8">
                    <div>
                        <p className="text-white font-bold text-lg">Get In Touch</p>
                        <p className="text-gray-500 text-sm md:text-base">NIT Hamirpur, Hamirpur, India (H.P.)</p>
                        <p className="text-gray-500 text-sm md:text-base">shabdpatel0@gmail.com</p>
                        <p className="text-gray-500 text-sm md:text-base">Ph: +91-8757489128</p>
                    </div>
                    <div>
                        <p className="text-white font-bold text-lg">Work Inquiries</p>
                        <p className="text-gray-500 text-sm md:text-base">22bph040@nith.ac.in</p>
                        <p className="text-gray-500 text-sm md:text-base">Ph: +91-8757489128</p>
                    </div>
                </div>
                <div className="flex space-x-3 md:space-x-4">
                    <a href="https://www.facebook.com" className="hover:text-gray-300 transition-colors duration-300 hover:bg-white hover:bg-opacity-20 p-3 md:p-4 rounded-full" aria-label="Facebook">
                        <FaFacebook size={20} />
                    </a>
                    <a href="https://www.twitter.com" className="hover:text-gray-300 transition-colors duration-300 hover:bg-white hover:bg-opacity-20 p-3 md:p-4 rounded-full" aria-label="Twitter">
                        <FaTwitter size={20} />
                    </a>
                    <a href="https://www.youtube.com" className="hover:text-gray-300 transition-colors duration-300 hover:bg-white hover:bg-opacity-20 p-3 md:p-4 rounded-full" aria-label="YouTube">
                        <FaYoutube size={20} />
                    </a>
                    <a href="https://www.linkedin.com" className="hover:text-gray-300 transition-colors duration-300 hover:bg-white hover:bg-opacity-20 p-3 md:p-4 rounded-full" aria-label="LinkedIn">
                        <FaLinkedin size={20} />
                    </a>
                    <a href="https://www.instagram.com" className="hover:text-gray-300 transition-colors duration-300 hover:bg-white hover:bg-opacity-20 p-3 md:p-4 rounded-full" aria-label="Instagram">
                        <FaInstagram size={20} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Shadowpage;

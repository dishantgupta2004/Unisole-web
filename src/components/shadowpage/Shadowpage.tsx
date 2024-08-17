import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaYoutube, FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { motion } from 'framer-motion'; // Import framer-motion

const Shadowpage: React.FC = () => {
    const navigate = useNavigate();

    const handleClose = () => {
        navigate(-1); // This navigates back to the previous page in history
    };

    // Define animation variants for text appearance
    const textVariant = {
        hidden: { x: '-100vw', opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { type: 'spring', stiffness: 50, damping: 10 } }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-90 text-white flex flex-col justify-between z-50 p-8">
            <button
                className="absolute top-5 left-12 text-white text-4xl font-light hover:text-gray-300 hover:bg-white hover:bg-opacity-20 p-4 rounded-full transition-colors duration-300 flex items-center justify-center w-12 h-12"
                onClick={handleClose}
            >
                ×
            </button>

            {/* Animated Text */}
            <motion.div
                className="flex flex-col ml-16 mt-12"
                initial="hidden"
                animate="visible"
                variants={textVariant}
            >
                <ul className="list-none p-0 m-0">
                    <motion.li
                        className="mb-5 text-2xl"
                        whileHover={{ x: 10 }} // Moves 10px to the right on hover
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        <span className="text-gray-500 text-sm mr-2">01</span>
                        <Link to="/about" className="text-white hover:text-gray-500 transition-colors font-bold text-3xl duration-300">About</Link>
                    </motion.li>
                    <motion.li
                        className="mb-5 text-2xl"
                        whileHover={{ x: 10 }} // Moves 10px to the right on hover
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        <span className="text-gray-500 text-sm mr-2">02</span>
                        <Link to="/blog" className="text-white hover:text-gray-500 font-bold text-3xl transition-colors duration-300">Events</Link>
                    </motion.li>
                    <motion.li
                        className="mb-5 text-2xl"
                        whileHover={{ x: 10 }} // Moves 10px to the right on hover
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        <span className="text-gray-500 text-sm mr-2">03</span>
                        <Link to="/announcement" className="text-white hover:text-gray-500 font-bold text-3xl transition-colors duration-300">Announcements</Link>
                    </motion.li>
                    <motion.li
                        className="mb-5 text-2xl"
                        whileHover={{ x: 10 }} // Moves 10px to the right on hover
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        <span className="text-gray-500 text-sm mr-2">04</span>
                        <Link to="/stories" className="text-white hover:text-gray-500 font-bold text-3xl transition-colors duration-300">Courses</Link>
                    </motion.li>
                </ul>
            </motion.div>

            <div className="flex justify-between items-end w-full px-16 mb-8">
                <div className="flex flex-col space-y-8">
                    <div>
                        <p className="text-white font-bold">Get In Touch</p>
                        <p className="text-gray-500">NIT Hamirpur, Hamirpur, India (H.P.)</p>
                        <p className="text-gray-500">shabdpatel0@gmail.com</p>
                        <p className="text-gray-500">Ph: +91-8757489128</p>
                    </div>
                    <div>
                        <p className="text-white font-bold">Work Inquiries</p>
                        <p className="text-gray-500">22bph040@nith.ac.in</p>
                        <p className="text-gray-500">Ph: +91-8757489128</p>
                    </div>
                </div>
                <div className="flex space-x-2">
                    <a href="https://www.facebook.com" className="hover:text-gray-300 transition-colors duration-300 hover:bg-white hover:bg-opacity-20 p-4 rounded-full">
                        <FaFacebook size={20} />
                    </a>
                    <a href="https://www.twitter.com" className="hover:text-gray-300 transition-colors duration-300 hover:bg-white hover:bg-opacity-20 p-4 rounded-full">
                        <FaSquareXTwitter size={20} />
                    </a>
                    <a href="https://www.youtube.com" className="hover:text-gray-300 transition-colors duration-300 hover:bg-white hover:bg-opacity-20 p-4 rounded-full">
                        <FaYoutube size={20} />
                    </a>
                    <a href="https://www.linkedin.com" className="hover:text-gray-300 transition-colors duration-300 hover:bg-white hover:bg-opacity-20 p-4 rounded-full">
                        <FaLinkedin size={20} />
                    </a>
                    <a href="https://www.instagram.com" className="hover:text-gray-300 transition-colors duration-300 hover:bg-white hover:bg-opacity-20 p-4 rounded-full">
                        <FaInstagram size={20} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Shadowpage;

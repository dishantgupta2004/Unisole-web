import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
    return (
        <div className="text-center p-8 bg-gray-100">
            <h2 className="text-5xl bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-cyan-900 font-bold mb-2 mt--1">Our Key Features</h2>
            <p className="text-gray-600 text-1xl font-semibold">Empower yourself with essential, unconventional knowledge</p>

            <div className="flex justify-center gap-8 mt-8">
                <div className="bg-gray-300 p-6 rounded-lg shadow-lg w-40 hover:bg-gray-400 hover:scale-105 transition-all duration-300 ease-in-out">
                    <img src="ace.png" className="mx-auto mb-4 w-16 h-16" />
                    <h3 className="text-lg font-semibold">Unconventional Skills</h3>
                </div>
                <div className="bg-gray-300 p-6 rounded-lg shadow-lg w-40 hover:bg-gray-400 hover:scale-105 transition-all duration-300 ease-in-out">
                    <img src="lifetime.png" className="mx-auto mb-4 w-16 h-16" />
                    <h3 className="text-lg font-semibold">Lifetime Learning</h3>
                </div>
                <div className="bg-gray-300 p-6 rounded-lg shadow-lg w-40 hover:bg-gray-400 hover:scale-105 transition-all duration-300 ease-in-out">
                    <img src="courses.png" className="mx-auto mb-4 w-16 h-16" />
                    <h3 className="text-lg font-semibold">Custom Courses</h3>
                </div>
                <div className="bg-gray-300 p-6 rounded-lg shadow-lg w-40 hover:bg-gray-400 hover:scale-105 transition-all duration-300 ease-in-out">
                    <img src="heleum.png" className="mx-auto mb-4 w-16 h-16" />
                    <h3 className="text-lg font-semibold">Innovative Thinking</h3>
                </div>
            </div>

            {/* Updated "Why Choose Unisole?" Section */}
            <div className="bg-white py-16 mt-12">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900">Why To Choose Unisole?</h2>
                        <p className="mt-4 text-lg text-gray-600">
                            Unisole is a team of well-refined intellectual people who work collectively to provide brilliant mentorship to the young budding minds looking for guidance and assistance in deciding their career paths. It is a wide digital learning platform that helps enhance the technological and intellectual skills of an individual and helps them grow to their full potential.
                        </p>
                    </div>

                    <div className="flex justify-center items-center bg-teal-500 text-white py-2 rounded-lg shadow-lg">
                        <div className="flex items-center space-x-6">
                            <motion.img
                                src="/man.png"
                                alt="Illustration"
                                className="w-80 h-90 mr-4 mt-2"
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            />
                            <p className="text-xl font-semibold max-w-xl text-left">
                                We believe in skills over knowledge and therefore, services provided by us would help the learner a long way in the future and will assist them fairly well while making important career decisions because these are the decisions which form the most crucial part of one’s life.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;

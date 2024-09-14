import React from 'react';
import { motion } from 'framer-motion';

// Define a type for the feature object
type Feature = {
    imgSrc: string;
    alt: string;
    title: string;
};

const About: React.FC = () => {
    const features: Feature[] = [
        { imgSrc: "ace.png", alt: "Unconventional Skills", title: "Unconventional Skills" },
        { imgSrc: "lifetime.png", alt: "Lifetime Learning", title: "Lifetime Learning" },
        { imgSrc: "courses.png", alt: "Custom Courses", title: "Custom Courses" },
        { imgSrc: "heleum.png", alt: "Innovative Thinking", title: "Innovative Thinking" },
    ];

    return (
        <div className="text-center p-8 bg-gray-100">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-cyan-900 font-bold mb-2">Our Key Features</h2>
            <p className="text-gray-600 text-sm sm:text-base font-semibold">Empower yourself with essential, unconventional knowledge</p>

            <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mt-8">
                {/* Feature Cards */}
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="bg-gray-300 p-6 rounded-lg shadow-lg w-40 sm:w-48 md:w-56 lg:w-60 hover:bg-gray-400 hover:scale-105 transition-all duration-300 ease-in-out"
                    >
                        <img src={feature.imgSrc} className="mx-auto mb-4 w-16 h-16" alt={feature.alt} />
                        <h3 className="text-lg font-semibold">{feature.title}</h3>
                    </div>
                ))}
            </div>

            {/* Updated "Why Choose Unisole?" Section */}
            <div className="bg-white py-8 md:py-16 mt-12 rounded-lg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row justify-between items-center">
                        {/* Text Content on the Left */}
                        <div className="text-left max-w-lg">
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Why To Choose Unisole?</h2>
                            <p className="mt-4 text-base sm:text-lg text-gray-600">
                                Unisole is a team of well-refined intellectual people who work collectively to provide brilliant mentorship to the young budding minds looking for guidance and assistance in deciding their career paths...
                            </p>
                        </div>

                        {/* Video on the Right */}
                        <div className="mt-6 lg:mt-0 lg:ml-8">
                            <video
                                width="320"
                                height="180"
                                controls
                                autoPlay
                                loop
                                muted
                                className="rounded-lg w-full max-w-lg"
                            >
                                <source src="/about1.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="flex flex-col md:flex-row justify-center items-center bg-teal-500 text-white py-4 rounded-lg shadow-lg mt-8">
                        <motion.img
                            src="/man.png"
                            alt="Illustration"
                            className="w-40 h-40 md:w-80 md:h-80"
                            animate={{ y: [0, -25, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <div className="mt-4 md:mt-0 md:ml-8 text-center md:text-left">
                            <p className="text-base sm:text-lg md:text-xl font-semibold max-w-xl">
                                We believe in skills over knowledge, and therefore, the services provided by us would help learners a long way in the future and assist them fairly well while making important career decisions...
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;

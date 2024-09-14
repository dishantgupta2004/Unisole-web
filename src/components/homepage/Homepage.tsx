import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';

const Homepage: React.FC = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center bg-gray-100 p-4 lg:p-8 relative" style={{ height: '95vh' }}>
            <div className="flex flex-col justify-start text-left w-full lg:w-1/2 p-4 lg:p-8 lg:ml-16 mt-16 lg:mt-0 mb-10 lg:mb-20">
                <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-cyan-900 font-bold text-4xl md:text-5xl lg:text-6xl mb-6 lg:mb-8">
                    Welcome to Unisole
                </h1>
                <p className="text-gray-700 text-lg md:text-2xl lg:text-3xl mb-4 lg:mb-6">
                    Your gateway to a world of endless learning opportunities.
                </p>
                <div>
                    <ScrollLink
                        to="about"
                        smooth={true}
                        duration={500}
                        className="cursor-pointer"
                    >
                        <button className="bg-teal-600 text-white text-lg lg:text-1xl font-bold py-2 lg:py-3 px-6 lg:px-8 rounded-full flex items-center justify-center bg-gradient-to-r from-teal-600 to-cyan-900 hover:bg-teal-700 transform hover:scale-90 transition-transform duration-300">
                            <FaSearch className="mr-2" /> Explore
                        </button>
                    </ScrollLink>
                </div>
            </div>
            <div className="w-full lg:w-1/2 p-4 lg:p-8">
                <img src="/banner.png" alt="Learning" className="w-full h-auto object-cover" />
            </div>
        </div>
    );
};

export default Homepage;

import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';

const Homepage: React.FC = () => {
    return (
        <div className="flex items-center bg-gray-100 p-8 relative" style={{ height: '95vh' }}>
            <div className="flex flex-col justify-start text-left ml-16 mb-20 w-1/2 p-8">
                <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-cyan-900 font-bold text-6xl mb-8">
                    Welcome to Unisole
                </h1>
                <p className="text-gray-700 text-3xl mb-6">Your gateway to a world of endless learning opportunities.</p>
                <div>
                    <ScrollLink
                        to="about"
                        smooth={true}
                        duration={500}
                        className="cursor-pointer"
                    >
                        <button className="bg-teal-600 text-white text-1xl font-bold py-3 px-8 rounded-full flex items-center bg-gradient-to-r from-teal-600 to-cyan-900 justify-center hover:bg-teal-700 transform hover:scale-90 transition-transform duration-300">
                            <FaSearch className="mr-2" /> Explore
                        </button>
                    </ScrollLink>
                </div>
            </div>
            <div className="w-1/2 p-8 ml-20">
                <img src="/banner.png" alt="Learning" className="max-w-full h-auto" />
            </div>
        </div>
    );
};

export default Homepage;

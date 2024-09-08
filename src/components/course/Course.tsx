// Course.js
import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Course: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-neutral-100 to-blue-100">
            <div className="bg-slate-300 rounded-lg shadow-md mt-10 p-8 w-screen max-w-5xl h-auto min-h-[500px] relative">
                <h1 className="text-3xl font-semibold text-teal-600 mb-6">
                    Pick a course and get going <span className="font-bold">NOW!</span>
                </h1>
                <button
                    onClick={() => navigate('/explore')}
                    className="bg-teal-600 text-white text-1xl font-bold py-3 px-8 rounded-full flex items-center bg-gradient-to-r from-teal-600 to-cyan-900 justify-center hover:bg-teal-700 transform hover:scale-90 transition-transform duration-300 mb-6"
                >
                    <FaSearch className="mr-2" /> Explore
                </button>

                {/* Image Below Explore Button */}
                <div className="flex justify-center mt-4">
                    <img
                        src="/3784896.jpg" // Replace with the correct image path
                        alt="Mountains and trees"
                        className="w-full h-auto rounded-lg"
                    />
                </div>
            </div>
        </div>
    );
}

export default Course;

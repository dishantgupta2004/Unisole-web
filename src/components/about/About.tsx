import React from 'react';

const About: React.FC = () => {
    return (
        <div className="text-center p-8 bg-gray-100">
            <h2 className="text-5xl bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-cyan-900 font-bold mb-2 mt--1">Our Key Features</h2>
            <p className="text-gray-600 text-1xl font-semibold">Empower yourself with essential, unconventional knowledge</p>

            <div className="flex justify-center gap-8 mt-8">
                <div className="bg-gray-300 p-6 rounded-lg shadow-lg w-40">
                    <img src="ace.png" alt="Ace" className="mx-auto mb-4 w-16 h-16" />
                    <h3 className="text-lg font-semibold">Unconventional Skills</h3>
                </div>
                <div className="bg-gray-300 p-6 rounded-lg shadow-lg w-40">
                    <img src="lifetime.png" alt="Lifetime Membership Program" className="mx-auto mb-4 w-16 h-16" />
                    <h3 className="text-lg font-semibold">Lifetime Learning</h3>
                </div>
                <div className="bg-gray-300 p-6 rounded-lg shadow-lg w-40">
                    <img src="courses.png" alt="Courses" className="mx-auto mb-4 w-16 h-16" />
                    <h3 className="text-lg font-semibold">Custom Courses</h3>
                </div>
                <div className="bg-gray-300 p-6 rounded-lg shadow-lg w-40">
                    <img src="heleum.png" alt="Heleum" className="mx-auto mb-4 w-16 h-16" />
                    <h3 className="text-lg font-semibold">Innovative Thinking</h3>
                </div>
            </div>

            <div className="mt-10 max-w-3xl mx-auto">
                <h3 className="text-xl font-bold mb-4">Why Choose Unisole?</h3>
                <p className="text-gray-700 leading-relaxed">
                    Unisole is a startup dedicated to educating students about what truly matters—focusing on essential, non-conventional knowledge and skills that are often overlooked.
                    Our platform is designed to equip individuals with the tools they need to succeed in an ever-changing world by teaching them the practical, innovative, and unconventional skills that are critical to their growth and success.
                </p>
            </div>
        </div>
    );
};

export default About;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Explore: React.FC = () => {
    const [courses, setCourses] = useState<Course[]>([]);
    const navigate = useNavigate(); // Initialize useNavigate

    useEffect(() => {
        // Fetch courses data from JSON file
        fetch('/courses.json') // Ensure this path is correct relative to the public directory
            .then(response => response.json())
            .then(data => setCourses(data))
            .catch(error => console.error('Error fetching course data:', error));
    }, []);

    return (
        <div className="px-6 py-8 bg-gray-100">
            {/* Title */}
            <h1 className="text-4xl mt-12 font-bold text-teal-600">Explore</h1>

            {/* Course Categories */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {courses.map((course, index) => (
                    <div
                        key={index}
                        className={`p-6 rounded-lg shadow-lg ${index % 2 === 0 ? 'bg-teal-700' : 'bg-teal-400'} text-white`}
                    >
                        <h2 className="text-xl font-semibold mb-4">{course.title}</h2>
                        <img src={course.image} alt={`${course.title} Icon`} className="mb-4 h-12" />
                        <ul className="list-disc ml-4 space-y-2">
                            {course.details.map((detail, i) => (
                                <li key={i}>{detail}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Popular Courses Section */}
            <h2 className="mt-12 text-3xl font-semibold text-gray-800">Popular Courses</h2>

            {courses.map((course, index) => (
                <div
                    key={index}
                    className="mt-6 bg-teal-200 p-6 rounded-lg shadow-lg flex justify-between items-center"
                >
                    <div>
                        <h3 className="text-xl font-semibold text-teal-800">{course.title}</h3>
                        <p className="text-gray-700 mt-2">{course.description}</p>
                    </div>
                    <div className="flex flex-col items-end">
                        <p className="text-lg text-teal-800 font-semibold">Free</p>
                        {course.oldPrice && (
                            <p className="text-xl text-teal-600 font-semibold line-through">{course.oldPrice}</p>
                        )}
                        {/* Conditional Enroll Button */}
                        {(course.title === 'Python and Generative AI Comprehensive Course') && (
                            <button
                                onClick={() => navigate('/enroll-form')} // Navigate to enroll form
                                className="mt-2 px-6 py-2 bg-gradient-to-r from-teal-600 to-cyan-900 text-white rounded-full font-bold text-lg flex items-center justify-center hover:bg-teal-700 transform hover:scale-105 transition-transform duration-300"
                            >
                                Enroll
                            </button>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Explore;

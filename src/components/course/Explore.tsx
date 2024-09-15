import React, { useState, useEffect } from 'react';
import { RxCross2 } from 'react-icons/rx';

// Define types
interface Course {
    title: string;
    description: string;
    details: string[];
    image: string;
    oldPrice?: string;
}

interface CourseModalProps {
    course: Course | null;
    isOpen: boolean;
    onClose: () => void;
}

// Modal Component
const CourseModal: React.FC<CourseModalProps> = ({ course, isOpen, onClose }) => {
    if (!isOpen || !course) return null;

    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
            <div className="relative bg-white p-8 rounded-lg shadow-lg max-w-md">
                {/* Close Button */}
                <button
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                    onClick={onClose}
                    aria-label="Close modal"
                >
                    <RxCross2 size={24} />
                </button>

                <h2 className="text-2xl font-bold mb-4">{course.title}</h2>
                <p className="text-gray-700 mb-4">{course.description}</p>
                <ul className="list-disc ml-4 mb-4 space-y-2">
                    {course.details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

// Explore Component
const Explore: React.FC = () => {
    const [courses, setCourses] = useState<Course[]>([]);
    const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
    const [isModalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        // Fetch courses data from JSON file
        fetch('/courses.json') // Ensure this path is correct relative to the public directory
            .then(response => response.json())
            .then(data => setCourses(data))
            .catch(error => console.error('Error fetching course data:', error));
    }, []);

    const openModal = (course: Course) => {
        setSelectedCourse(course);
        setModalOpen(true);
    };

    const closeModal = () => {
        setSelectedCourse(null);
        setModalOpen(false);
    };

    return (
        <div className="px-6 py-8 bg-white">
            {/* Title */}
            <h1 className="text-4xl mt-12 font-bold text-teal-600">Explore</h1>

            {/* Course Categories */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {courses.map((course, index) => (
                    <div
                        key={index}
                        className={`p-6 rounded-lg shadow-lg ${index % 2 === 0 ? 'bg-teal-700' : 'bg-teal-400'} text-white cursor-pointer`}
                        onClick={() => openModal(course)}
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
                    className="mt-6 bg-teal-100 p-6 rounded-lg shadow-lg flex justify-between items-center cursor-pointer"
                    onClick={() => openModal(course)}
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
                        <button className="mt-2 px-6 py-2 bg-gradient-to-r from-teal-600 to-cyan-900 text-white rounded-full font-bold text-lg flex items-center justify-center hover:bg-teal-700 transform hover:scale-105 transition-transform duration-300">
                            Enroll
                        </button>
                    </div>
                </div>
            ))}

            {/* Modal */}
            {selectedCourse && (
                <CourseModal
                    course={selectedCourse}
                    isOpen={isModalOpen}
                    onClose={closeModal}
                />
            )}
        </div>
    );
};

export default Explore;

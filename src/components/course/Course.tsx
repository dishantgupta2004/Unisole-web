import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { RxCross2 } from 'react-icons/rx';

// Define types
interface Course {
    title: string;
    description: string;
    details: string[];
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
            <div className="relative bg-white p-8 rounded-lg shadow-lg max-w-xs sm:max-w-md md:max-w-lg w-full mx-4">
                {/* Close Button */}
                <button
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                    onClick={onClose}
                    aria-label="Close modal"
                >
                    <RxCross2 size={24} />
                </button>

                <h2 className="text-xl md:text-2xl font-bold mb-4">{course.title}</h2>
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

// Course Page Component
const CoursePage: React.FC = () => {
    const navigate = useNavigate();
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
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-neutral-100 to-blue-100 p-4">
            <div className="bg-slate-300 rounded-lg shadow-md mt-10 mb-8 p-6 sm:p-8 w-full max-w-5xl h-auto min-h-[500px] relative">
                <h1 className="text-2xl sm:text-3xl font-semibold text-teal-600 mb-6">
                    Pick a course and get going <span className="font-bold">NOW!</span>
                </h1>
                <button
                    onClick={() => navigate('/explore')}
                    className="bg-teal-600 text-white text-base sm:text-lg font-bold py-2 px-6 sm:py-3 sm:px-8 rounded-full flex items-center bg-gradient-to-r from-teal-600 to-cyan-900 justify-center hover:bg-teal-700 transform hover:scale-90 transition-transform duration-300 mb-6"
                >
                    <FaSearch className="mr-2" /> Explore
                </button>

                {/* Explore Page Content */}
                <div className="px-4 sm:px-6 py-6 sm:py-8 bg-zinc-100 rounded-lg">

                    <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-gray-800">Popular Courses</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {courses.map((course, index) => (
                            <div
                                key={index}
                                className="mt-6 bg-teal-100 p-4 sm:p-6 rounded-lg shadow-lg flex justify-between items-center cursor-pointer"
                                onClick={() => openModal(course)}
                            >
                                <div>
                                    <h3 className="text-lg sm:text-xl font-semibold text-teal-800">{course.title}</h3>
                                    <p className="text-gray-700 mt-2">{course.description}</p>
                                </div>
                                <div className="flex flex-col items-end">
                                    <p className="text-lg text-teal-800 font-semibold">Free</p>
                                    {course.oldPrice && (
                                        <p className="text-xl text-teal-600 font-semibold line-through">{course.oldPrice}</p>
                                    )}
                                    {/* Updated Button */}
                                    <button className="mt-2 px-3 py-1 sm:px-4 sm:py-2 text-base sm:text-lg bg-teal-600 text-white rounded-full flex items-center bg-gradient-to-r from-teal-600 to-cyan-900 justify-center hover:bg-teal-700 transform hover:scale-90 transition-transform duration-300">
                                        Enroll
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* "More Courses" Button */}
                    <div className="flex justify-center mt-8">
                        <button
                            onClick={() => navigate('/explore')}
                            className="bg-teal-600 text-white text-lg font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-full flex items-center justify-center bg-gradient-to-r from-teal-600 to-cyan-900 hover:bg-teal-700 transform hover:scale-90 transition-transform duration-300"
                        >
                            More Courses
                        </button>
                    </div>

                    {/* Modal */}
                    {selectedCourse && (
                        <CourseModal
                            course={selectedCourse}
                            isOpen={isModalOpen}
                            onClose={closeModal}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default CoursePage;

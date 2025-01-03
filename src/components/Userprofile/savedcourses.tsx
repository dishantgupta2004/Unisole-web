import { useState } from 'react';
import { db } from '../../firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import CourseDetailsPopup from './CourseDetailsPopup';

const SavedCourses = () => {
    const [searchEmail, setSearchEmail] = useState('');
    const [searchPhone, setSearchPhone] = useState('');
    const [filteredCourses, setFilteredCourses] = useState<{ id: string; thumbnail?: string; title?: string; mentor?: string; description?: string }[]>([]);
    const [loading, setLoading] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState<{ id: string; thumbnail?: string; title: string; mentor?: string; description?: string } | null>(null);

    const handleSearch = async () => {
        if (!searchEmail.trim() || !searchPhone.trim()) {
            alert('Please provide both email and phone number.');
            return;
        }

        setLoading(true);
        try {
            const coursesRef = collection(db, 'python&generative-ai-registrations');
            const q = query(
                coursesRef,
                where('email', '==', searchEmail.trim()),
                where('phone', '==', searchPhone.trim())
            );
            const querySnapshot = await getDocs(q);

            const results = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                thumbnail: doc.data().thumbnail || '',
                title: doc.data().title || 'No title',
                mentor: doc.data().mentor || 'Unknown mentor',
                description: doc.data().description || 'No description available',
            }));

            setFilteredCourses(results);
        } catch (error) {
            console.error('Error fetching courses:', error);
            alert('An error occurred while searching for courses.');
        } finally {
            setLoading(false);
        }
    };

    const openPopup = (course: { id: string; thumbnail?: string; title: string; mentor?: string; description?: string }) => {
        setSelectedCourse(course);
    };

    const closePopup = () => {
        setSelectedCourse(null);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4 md:p-8 lg:p-12">
            <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-3xl md:max-w-5xl lg:max-w-6xl">
                <h1 className="text-3xl font-bold mb-6 text-teal-600 text-center">Saved Courses</h1>

                <div className="mb-8">
                    <h2 className="text-xl font-semibold text-gray-700 mb-4">Search for Your Enrolled Course</h2>
                    <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={searchEmail}
                            onChange={(e) => setSearchEmail(e.target.value)}
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                        />
                        <input
                            type="tel"
                            placeholder="Enter your phone number"
                            value={searchPhone}
                            onChange={(e) => setSearchPhone(e.target.value)}
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                        />
                        <button
                            onClick={handleSearch}
                            className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition"
                            disabled={loading}
                        >
                            {loading ? 'Searching...' : 'Search'}
                        </button>
                    </div>
                </div>

                {filteredCourses.length > 0 ? (
                    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {filteredCourses.map((course) => (
                            <div
                                key={course.id}
                                className="bg-teal-100 p-4 rounded-lg shadow-lg"
                            >
                                <img
                                    src={course.thumbnail || '/thumb.webp'}
                                    alt={course.title}
                                    className="w-full h-40 object-cover rounded-md mb-4"
                                />
                                <h2 className="text-xl font-semibold text-gray-800 mb-2">{course.title}</h2>
                                <p className="text-gray-600 text-sm mb-2">
                                    Mentor: {course.mentor || 'Ajay Mokta'}
                                </p>
                                <p className="text-gray-600 text-sm mb-4">{course.description || 'Learn advanced Python and AI techniques.'}</p>
                                <ul className="text-gray-600 text-sm mb-4">
                                    <li>📌 Introduction to Python Programming</li>
                                    <li>📌 Advanced Generative AI with Langchain and Huggingface</li>
                                    <li>📌 Practical AI Development & Deployment</li>
                                </ul>
                                <button
                                    onClick={() => openPopup(course)}
                                    className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700"
                                >
                                    View Course
                                </button>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-600 text-center">
                        {searchEmail || searchPhone
                            ? loading
                                ? 'Searching...'
                                : 'No course found for the provided email and phone number.'
                            : 'You have no saved courses.'}
                    </p>
                )}
            </div>

            {selectedCourse && (
                <CourseDetailsPopup course={selectedCourse} onClose={closePopup} />
            )}
        </div>
    );
};

export default SavedCourses;

import React, { useEffect, useState } from 'react';
import { collection, getDocs, setDoc, doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { auth } from '../../firebase'; // Assuming you're using Firebase Authentication

interface Lecture {
    title: string;
    video: string;
    note: string;
}

interface CourseDetailsPopupProps {
    course: {
        id: string;
        thumbnail?: string;
        title: string;
        mentor?: string;
        description?: string;
    };
    onClose: () => void;
}

const CourseDetailsPopup: React.FC<CourseDetailsPopupProps> = ({ onClose }) => {
    const [lectures, setLectures] = useState<Lecture[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [userProgress, setUserProgress] = useState<{ [key: string]: boolean }>({}); // Track completed lectures

    const currentUser = auth.currentUser; // Get the current logged-in user

    useEffect(() => {
        const fetchLectures = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'python&genailecture'));
                const fetchedLectures: Lecture[] = querySnapshot.docs.map((doc) => ({
                    title: doc.id || 'Untitled Lecture',
                    video: doc.data().video || '#',
                    note: doc.data().note || 'No notes available.'
                }));
                setLectures(fetchedLectures);
            } catch (err) {
                console.error('Error fetching lectures:', err);
                setError('Failed to load lectures. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchLectures();
    }, []);

    // Fetch user progress from Firestore
    useEffect(() => {
        if (currentUser) {
            const fetchProgress = async () => {
                const userDocRef = doc(db, 'user_progress', currentUser.email || '');
                const userDocSnap = await getDoc(userDocRef);
                if (userDocSnap.exists()) {
                    setUserProgress(userDocSnap.data() as { [key: string]: boolean });
                }
            };
            fetchProgress();
        }
    }, [currentUser]);

    // Handle checkbox change
    const handleCheckboxChange = async (lectureTitle: string, completed: boolean) => {
        if (currentUser) {
            const userDocRef = doc(db, 'user_progress', currentUser.email || '');
            await setDoc(userDocRef, {
                ...userProgress,
                [lectureTitle]: completed,
            }, { merge: true }); // Use merge to preserve other data
            setUserProgress((prevState) => ({
                ...prevState,
                [lectureTitle]: completed,
            }));
        }
    };

    // Calculate progress percentage
    const calculateProgressPercentage = () => {
        const completedLectures = Object.values(userProgress).filter(Boolean).length;
        return (completedLectures / lectures.length) * 100;
    };

    const getThumbnail = (videoUrl: string): string => {
        const videoId = videoUrl.split('v=')[1]?.split('&')[0];
        if (videoId) {
            return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
        }
        return 'https://via.placeholder.com/150';
    };

    const progressPercentage = calculateProgressPercentage();

    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 w-full max-w-5xl mx-4 md:mx-0 relative">
                <button
                    onClick={onClose}
                    aria-label="Close"
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <h2 className="text-3xl font-semibold mb-4">Python and Generative AI</h2>

                {/* Progress Bar */}
                <div className="mb-6">
                    <p className="text-lg font-medium text-gray-700">Progress: {progressPercentage.toFixed(0)}%</p>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                            className="bg-teal-600 h-2.5 rounded-full"
                            style={{ width: `${progressPercentage}%` }}
                        ></div>
                    </div>
                </div>

                <div className="overflow-y-auto max-h-96">
                    {loading ? (
                        <p className="text-gray-600">Loading...</p>
                    ) : error ? (
                        <p className="text-red-600">{error}</p>
                    ) : lectures.length > 0 ? (
                        <ul className="space-y-6">
                            {lectures.map((lecture, index) => (
                                <li key={index} className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row md:items-start md:space-x-4">
                                    <img
                                        src={getThumbnail(lecture.video)}
                                        alt="Video Thumbnail"
                                        className="w-32 h-32 object-cover rounded-lg shadow-md md:w-48 md:h-auto"
                                    />
                                    <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:items-start md:space-x-4">
                                        <div className="flex flex-col space-y-2">
                                            <h3 className="text-xl font-semibold">{lecture.title}</h3>
                                            <p className="font-medium text-gray-800">Video:</p>
                                            <a
                                                href={lecture.video}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-teal-600 hover:underline"
                                            >
                                                Watch Video
                                            </a>
                                        </div>
                                        <div className="flex flex-col space-y-2">
                                            <p className="font-medium text-gray-800">Notes:</p>
                                            <p className="text-gray-600 whitespace-pre-wrap break-words">{lecture.note}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-2 mt-2 md:mt-0">
                                        <input
                                            type="checkbox"
                                            checked={userProgress[lecture.title] || false}
                                            onChange={(e) => handleCheckboxChange(lecture.title, e.target.checked)}
                                            className="h-5 w-5 text-teal-600"
                                        />
                                        <span className="text-gray-800">Mark as Completed</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-600">No lectures available.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CourseDetailsPopup;


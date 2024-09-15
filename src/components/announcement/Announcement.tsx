import React, { useEffect, useState, useRef } from 'react';
import { FaBullhorn, FaChevronUp, FaChevronDown } from 'react-icons/fa';

// Define a type for the announcement object
type AnnouncementType = {
    id: number;
    title: string;
    content: string;
    date: string;
    url: string;
};

const Announcement: React.FC = () => {
    const [announcements, setAnnouncements] = useState<AnnouncementType[]>([]);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Fetching announcements from a local JSON file, update the path if necessary
        fetch('/Announcement.json')
            .then((response) => response.json())
            .then((data: AnnouncementType[]) => setAnnouncements(data))
            .catch((error) => console.error('Error fetching announcements:', error));
    }, []);

    const handleScroll = (direction: 'up' | 'down') => {
        if (scrollRef.current) {
            const scrollAmount = scrollRef.current.firstElementChild?.clientHeight || 0;
            if (direction === 'up') {
                scrollRef.current.scrollBy({ top: -scrollAmount, behavior: 'smooth' });
            } else if (direction === 'down') {
                scrollRef.current.scrollBy({ top: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    return (
        <div className="w-full bg-gray-100 text-slate-600 py-8 sm:py-12">
            <div className="bg-white shadow-lg rounded-lg mx-auto max-w-full sm:max-w-2xl md:max-w-4xl">
                <div className="bg-teal-300 p-6 rounded-t-lg">
                    <div className="flex items-center">
                        <FaBullhorn className="text-4xl text-teal-600 mr-4" />
                        <h2 className="text-3xl font-bold text-teal-600">Important Announcements</h2>
                    </div>
                </div>

                <div className="flex justify-center my-4">
                    <button
                        onClick={() => handleScroll('up')}
                        className="bg-teal-500 hover:bg-teal-600 text-white p-2 rounded-full shadow-lg focus:outline-none"
                    >
                        <FaChevronUp className="text-xl sm:text-2xl" />
                    </button>
                </div>

                <div
                    ref={scrollRef}
                    className="overflow-y-auto p-4 space-y-6 max-h-[calc(8rem*2)] sm:max-h-80" // Dynamically adjust height for mobile
                >
                    {announcements.length > 0 ? (
                        announcements.map((announcement) => (
                            <div
                                key={announcement.id}
                                className="bg-white p-4 rounded-lg shadow-2xl hover:shadow-md transition-shadow duration-300"
                            >
                                <a
                                    href={announcement.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-lg font-semibold text-teal-600 hover:text-teal-800"
                                >
                                    {announcement.title}
                                </a>
                                <p className="mt-2 text-base text-gray-700">{announcement.content}</p>
                                <p className="mt-2 text-sm text-gray-500 italic">Posted on: {announcement.date}</p>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-600">No announcements available.</p>
                    )}
                </div>

                <div className="flex justify-center my-4">
                    <button
                        onClick={() => handleScroll('down')}
                        className="bg-teal-500 hover:bg-teal-600 text-white p-2 rounded-full shadow focus:outline-none"
                    >
                        <FaChevronDown className="text-xl sm:text-2xl" />
                    </button>
                </div>

                <div className="bg-gray-100 p-4 rounded-b-lg text-center text-sm text-gray-500">
                    Keep checking for the latest updates!
                </div>
            </div>
        </div>
    );
};

export default Announcement;

import React, { useEffect, useState, useRef } from 'react';
import { FaBullhorn, FaChevronUp, FaChevronDown } from 'react-icons/fa';

// Define the announcement type
type AnnouncementType = {
    id: number;
    title: string;
    content: string;
    date: string;
};

const Announcement: React.FC = () => {
    const [announcements, setAnnouncements] = useState<AnnouncementType[]>([]);
    const scrollRef = useRef<HTMLDivElement>(null);

    // Fetch announcements from the local JSON file
    useEffect(() => {
        fetch('/Announcement.json')
            .then((response) => response.json())
            .then((data) => setAnnouncements(data))
            .catch((error) => console.error('Error fetching announcements:', error));
    }, []);

    // Scroll the container up or down
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
        <div className="w-full bg-gray-100 text-slate-600 py-12">
            <div className="bg-slate-300 p-6 rounded-lg shadow-md mx-auto max-w-4xl">
                <div className="flex items-center mb-4">
                    <FaBullhorn className="text-4xl mr-4 text-teal-600" />
                    <h2 className="text-3xl font-bold">Important Announcements</h2>
                </div>

                {/* Up icon */}
                <div className="flex justify-center mb-2">
                    <button onClick={() => handleScroll('up')}>
                        <FaChevronUp className="text-2xl text-teal-600" />
                    </button>
                </div>

                {/* Scrollable Content */}
                <div ref={scrollRef} className="max-h-80 overflow-y-auto space-y-6 pr-2">
                    {announcements.length > 0 ? (
                        announcements.map((announcement) => (
                            <div key={announcement.id} className="announcement-item">
                                <p className="mt-4 text-lg font-bold">{announcement.title}</p>
                                <p className="mt-2 text-lg">{announcement.content}</p>
                                <p className="mt-2 text-sm font-light">
                                    <em>Posted on: {announcement.date}</em>
                                </p>
                            </div>
                        ))
                    ) : (
                        <p>No announcements available.</p>
                    )}
                </div>

                {/* Down icon */}
                <div className="flex justify-center mt-2">
                    <button onClick={() => handleScroll('down')}>
                        <FaChevronDown className="text-2xl text-teal-600" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Announcement;

import React from 'react';

const Event: React.FC = () => {
    // Array of image sources for the gallery
    const images = ['news2.png', 'news3.png', 'e1.jpg', 'e2.jpg', 'e3.jpg', 'e4.jpg', 'e5.jpg', 'e6.jpg'];

    return (
        <div className="py-10 bg-gray-100 text-center">
            <h2 className="mt-8 font-retro text-darkBrown mb-4 text-3xl sm:text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-cyan-900 font-bold">
                Our Events
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-8 mx-auto max-w-xl sm:max-w-2xl lg:max-w-3xl px-4 sm:px-6">
                Our events aim to inspire and engage diverse audiences through knowledge-sharing and creative initiatives. These experiences showcase our dedication to education and community involvement, captured in a retro-themed gallery. Here are some highlights from our recent activities.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-12 lg:px-32">
                {/* Example photos with retro styling */}
                {images.map((imgSrc, index) => (
                    <div
                        key={index}
                        className="album-item p-4 bg-white border-4 border-gray-200 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
                    >
                        <img
                            src={`/${imgSrc}`}
                            alt={index === 0 ? 'News Article Mention' : index === 1 ? 'Nasa App Challenge project news article' : `Event ${index}`}
                            className="w-full h-48 sm:h-64 object-cover rounded-md filter-sepia hover:filter-none transition-all duration-500"
                        />
                        <p className="mt-4 font-medium sm:text-base text-slate-600 font-retro text-center">
                            {index === 0 ? 'News Article Mention' : index === 1 ? 'Nasa App Challenge project news article' : `Guidance Seminar ${index}`}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Event;


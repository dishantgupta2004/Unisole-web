import React from 'react';

const Event: React.FC = () => {
    return (
        <div className="py-10 bg-slate-200 text-center">
            <h2 className="mt-8 font-retro text-darkBrown mb-4 text-3xl sm:text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-cyan-900 font-bold">
                Our Events
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-8 mx-auto max-w-xl sm:max-w-2xl lg:max-w-3xl px-4 sm:px-6">
                Our events aim to inspire and engage diverse audiences through knowledge-sharing and creative initiatives. These experiences showcase our dedication to education and community involvement, captured in a retro-themed gallery. Here are some highlights from our recent activities.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-12 lg:px-32">
                {/* Example photos with retro styling */}
                {['e1.jpg', 'e2.jpg', 'e3.jpg', 'e4.jpg', 'e5.jpg', 'e6.jpg'].map((imgSrc, index) => (
                    <div
                        key={index}
                        className="album-item p-2 border-4 border-gray-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                        <img
                            src={`/${imgSrc}`}
                            alt={`Event ${index + 1}`}
                            className="w-full h-48 sm:h-64 object-cover rounded-md filter-sepia hover:filter-none transition-all duration-500"
                        />
                        <p className="mt-2 text-xs sm:text-sm text-darkBrown font-retro text-center">
                            School Visit {index + 1}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Event;

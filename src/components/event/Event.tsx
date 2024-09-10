import React from 'react';

const Event: React.FC = () => {
    return (
        <div className="py-10 bg-slate-200 text-center">
            <h2 className="mt-8 font-retro text-darkBrown mb-4 text-5xl bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-cyan-900 font-bold">
                Our Events
            </h2>
            <p className="text-lg text-gray-700 mb-8 mx-auto max-w-2xl">
                Our events aim to inspire and engage diverse audiences through knowledge-sharing and creative initiatives. These experiences showcase our dedication to education and community involvement, captured in a retro-themed gallery. Here are some highlights from our recent activities.
            </p>
            <div className="grid grid-cols-3 gap-8 justify-center px-32">
                {/* Example photos with retro styling */}
                <div className="album-item p-2 border-4 border-gray-100 rounded-lg shadow-lg">
                    <img src="/e1.jpg" alt="Event 1" className="w-full h-64 object-cover rounded-md filter-sepia" />
                    <p className="mt-2 text-sm text-darkBrown font-retro text-center">School Visit 1</p>
                </div>
                <div className="album-item p-2 border-4 border-gray-100 rounded-lg shadow-lg">
                    <img src="/e2.jpg" alt="Event 2" className="w-full h-64 object-cover rounded-md filter-sepia" />
                    <p className="mt-2 text-sm text-darkBrown font-retro text-center">School Visit 2</p>
                </div>
                <div className="album-item p-2 border-4 border-gray-100 rounded-lg shadow-lg">
                    <img src="/e3.jpg" alt="Event 3" className="w-full h-64 object-cover rounded-md filter-sepia" />
                    <p className="mt-2 text-sm text-darkBrown font-retro text-center">School Visit 3</p>
                </div>
                <div className="album-item p-2 border-4 border-gray-100 rounded-lg shadow-lg">
                    <img src="/e4.jpg" alt="Event 4" className="w-full h-64 object-cover rounded-md filter-sepia" />
                    <p className="mt-2 text-sm text-darkBrown font-retro text-center">School Visit 4</p>
                </div>
                <div className="album-item p-2 border-4 border-gray-100 rounded-lg shadow-lg">
                    <img src="/e5.jpg" alt="Event 5" className="w-full h-64 object-cover rounded-md filter-sepia" />
                    <p className="mt-2 text-sm text-darkBrown font-retro text-center">School Visit 5</p>
                </div>
                <div className="album-item p-2 border-4 border-gray-100 rounded-lg shadow-lg">
                    <img src="/e6.jpg" alt="Event 6" className="w-full h-64 object-cover rounded-md filter-sepia" />
                    <p className="mt-2 text-sm text-darkBrown font-retro text-center">School Visit 6</p>
                </div>

                {/* Add more photos as needed */}
            </div>
        </div >
    );
};

export default Event;

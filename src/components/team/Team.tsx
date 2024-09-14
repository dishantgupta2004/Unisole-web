const teamMembers = [
    {
        name: 'Shabd Patel',
        role: 'Project Manager',
        image: '/photo.jpg', // Replace with the correct image path
    },
    {
        name: 'Shabd Patel',
        role: 'Lead Developer',
        image: '/photo.jpg', // Replace with the correct image path
    },
    {
        name: 'Shabd Patel',
        role: 'UI/UX Designer',
        image: '/photo.jpg', // Replace with the correct image path
    },
    {
        name: 'Shabd Patel',
        role: 'Frontend Developer',
        image: '/photo.jpg', // Replace with the correct image path
    },
    // Add more team members as needed
];

const Team = () => {
    return (
        <div className="py-16 bg-gradient-to-b from-neutral-100 to-blue-400">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold text-teal-600 mb-4">Meet Our Team</h2>
                <p className="text-gray-600 mb-12 ml-5 mr-5">
                    We are a dedicated group of professionals committed to delivering the best results.
                    Together, we bring a blend of skills and creativity to ensure the success of every project.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="bg-slate-300 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                            <div className="flex justify-center">
                                <img
                                    src={member.image}
                                    alt={`${member.name} photo`}
                                    className="w-32 h-32 object-cover rounded-full mt-4"
                                />
                            </div>
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                                <p className="mt-2 text-gray-600">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Team;

import React, { useState } from 'react';
import { RxCross2 } from 'react-icons/rx';

// Project Data including Unisole.Empower Project
const projects = [
    {
        title: "Unisole Empower: Anti-Hailstorm Pillar",
        description: "A weather-monitoring pillar that uses AI algorithms to predict and mitigate hailstorms, protecting apple crops.",
        technologies: ["AI", "Weather Data", "Mechanical Systems", "Automation"],
        details: `The Anti-Hailstorm Pillar is designed to protect apple crops from severe weather using AI-driven solutions.
        It predicts hailstorms using real-time weather data and triggers automated responses such as deploying protective hail nets and activating heating systems.
        Key features include improved air circulation, optimized light exposure, and temperature/humidity control to enhance crop growth.`,
        link: "#"
    }
];

// Modal Component to show more information about the project
const ProjectModal = ({ project, isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-slate-800 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full relative">
                <button
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                    onClick={onClose}
                >
                    <RxCross2 />
                </button>
                <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
                <p className="text-gray-600 mb-4">{project.details}</p>
                <div className="mb-4">
                    <h3 className="text-lg font-semibold text-gray-700">Technologies Used:</h3>
                    <ul className="list-disc list-inside">
                        {project.technologies.map((tech, i) => (
                            <li key={i} className="text-gray-500">{tech}</li>
                        ))}
                    </ul>
                </div>
                <a
                    href={project.link}
                    className="inline-block bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition duration-300"
                >
                    View Project
                </a>
            </div>
        </div>
    );
};

const Project: React.FC = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = (project) => {
        setSelectedProject(project);
        setModalOpen(true);
    };

    const closeModal = () => {
        setSelectedProject(null);
        setModalOpen(false);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-teal-100 to-cyan-300 py-10">
            <div className="container mx-auto px-4">
                {/* Our Projects Section */}
                <h1 className="text-4xl font-bold text-teal-600 text-center mb-4">Our Projects</h1>
                <p className="text-center text-gray-600 mb-12">Explore the projects we've worked on to bring innovative solutions to life.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">{project.title}</h2>
                            <p className="text-gray-600 mb-4">{project.description}</p>
                            <div className="mb-4">
                                <h3 className="text-lg font-semibold text-gray-700">Technologies:</h3>
                                <ul className="list-disc list-inside">
                                    {project.technologies.map((tech, i) => (
                                        <li key={i} className="text-gray-500">{tech}</li>
                                    ))}
                                </ul>
                            </div>
                            <button
                                onClick={() => openModal(project)}
                                className="inline-block bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition duration-300"
                            >
                                View Project
                            </button>
                        </div>
                    ))}

                    {/* Video Section as a card */}
                    <div className="rounded-lg shadow-2xl w-auto p-6 flex justify-center items-center">
                        <video
                            width="100%"
                            height="500"
                            src="/Video.mp4"
                            title="Project Video"
                            className="rounded-lg"
                            autoPlay
                            loop
                            muted
                            controls={true}  // Show video controls
                        />
                    </div>


                </div>

                {/* Upcoming Projects Section */}
                <p className="text-center text-gray-600 mb-4 mt-4" >Stay tuned for our upcoming projects as we continue to innovate and push boundaries beyond.</p>

                {/* Modal */}
                {selectedProject && (
                    <ProjectModal
                        project={selectedProject}
                        isOpen={isModalOpen}
                        onClose={closeModal}
                    />
                )}
            </div>
        </div>
    );
};

export default Project;

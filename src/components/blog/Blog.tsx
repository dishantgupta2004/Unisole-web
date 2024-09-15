import React, { useState, useEffect } from 'react';

interface BlogPost {
    title: string;
    date: string;
    description: string;
    fullContent: string;
    image: string;
    owner: string;
}

const Blog: React.FC = () => {
    const [blogs, setBlogs] = useState<BlogPost[]>([]);
    const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        // Fetching the blog data from the JSON file
        fetch('/blog.json')
            .then((response) => response.json())
            .then((data) => setBlogs(data));
    }, []);

    const openModal = (blog: BlogPost) => {
        setSelectedBlog(blog);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedBlog(null);
    };

    return (
        <div className="bg-gray-100 min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-500 text-center mb-4">
                    Our Blog
                </h1>
                <p className="text-md sm:text-lg text-gray-600 text-center mb-8 max-w-2xl mx-auto">
                    Stay up to date with the latest in tech trends, tutorials, and insights from the world of software development, web technologies, and more.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <img
                                src={blog.image}
                                alt={`${blog.title} thumbnail`}
                                className="h-48 w-full object-cover"
                                loading="lazy"
                            />
                            <div className="p-6">
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                                    {blog.title}
                                </h3>
                                <p className="text-gray-500 text-sm mb-2">{blog.date}</p>
                                <p className="text-gray-500 text-sm mb-4">By: {blog.owner}</p>
                                <p className="text-gray-700 mb-4 line-clamp-3">{blog.description}</p>
                                <button
                                    onClick={() => openModal(blog)}
                                    className="text-teal-600 hover:text-teal-800 font-medium"
                                >
                                    Read more &rarr;
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {isModalOpen && selectedBlog && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-4 sm:px-6 lg:px-8"
                    aria-hidden="true"
                >
                    <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative overflow-y-auto max-h-[90vh]" aria-modal="true">
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 text-gray-700 hover:text-gray-900 text-2xl"
                        >
                            &times;
                        </button>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                            {selectedBlog.title}
                        </h2>
                        <p className="text-gray-500 text-sm mb-2">{selectedBlog.date}</p>
                        <p className="text-gray-500 text-sm mb-4">By: {selectedBlog.owner}</p>
                        <img
                            src={selectedBlog.image}
                            alt={`${selectedBlog.title} image`}
                            className="w-full h-64 object-cover rounded-md mb-4"
                            loading="lazy"
                        />
                        <p className="text-gray-700 mb-4">{selectedBlog.fullContent}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Blog;

import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white py-10">
            <div className="container mx-auto px-4">
                {/* Footer Top */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {/* About Section */}
                    <div>
                        <h2 className="text-lg font-semibold mb-4">About Us</h2>
                        <p className="text-gray-400">
                            Unisole is a digital learning platform that offers expert mentorship to young individuals seeking career guidance. The platform focuses on enhancing technological and intellectual skills, helping users reach their full potential.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
                        <ul className="text-gray-400">
                            <li className="mb-2">
                                <a href="/about" className="hover:text-white">About Us</a>
                            </li>
                            <li className="mb-2">
                                <a href="/announcement" className="hover:text-white">Announcements</a>
                            </li>
                            <li className="mb-2">
                                <a href="/project" className="hover:text-white">Projects</a>
                            </li>
                            <li className="mb-2">
                                <a href="/course" className="hover:text-white">Courses</a>
                            </li>
                            <li className="mb-2">
                                <a href="/event" className="hover:text-white">Events</a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Information */}
                    <div>
                        <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
                        <p className="text-gray-400 mb-2">NIT Hamirpur, Hamirpur, Himachal Pradesh(H.P.)</p>
                        <p className="text-gray-400 mb-2">Phone: +91-8757489128</p>
                        <p className="text-gray-400 mb-2">Email: shabdpatel0@gmail.com</p>
                    </div>

                    {/* Social Media Links */}
                    <div>
                        <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com" className="hover:text-teal-400" aria-label="Facebook">
                                <FaFacebookF />
                            </a>
                            <a href="https://twitter.com" className="hover:text-teal-400" aria-label="Twitter">
                                <FaTwitter />
                            </a>
                            <a href="https://instagram.com" className="hover:text-teal-400" aria-label="Instagram">
                                <FaInstagram />
                            </a>
                            <a href="https://linkedin.com" className="hover:text-teal-400" aria-label="LinkedIn">
                                <FaLinkedinIn />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="border-t border-gray-700 pt-6 text-center text-gray-500">
                    <p>&copy; {new Date().getFullYear()} UNISOLE. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

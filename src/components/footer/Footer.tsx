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
                            Unisole is a digital learning platform that offers expert mentorship and AI-driven projects to young individuals seeking career guidance. The platform focuses on enhancing technological and intellectual skills while providing hands-on experience with cutting-edge AI technologies, helping users reach their full potential.
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
                            <li className="mb-2">
                                <a href="/certificate" className="hover:text-white">Certificates</a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Information */}
                    <div>
                        <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
                        <p className="text-gray-400 mb-2">NIT Hamirpur, Hamirpur, Himachal Pradesh (H.P.)</p>
                        <p className="text-gray-400 mb-2">Phone: +91-7876471141</p>
                        <p className="text-gray-400 mb-2">Email: unisole.empower@gmail.com</p>
                        <div className="mt-4">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1906.1353670087349!2d76.52547978263773!3d31.707591803778712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3904d414dbcbe5a9%3A0xc507ee79945d6bd6!2sPhysics%20Department!5e0!3m2!1sen!2sin!4v1726432030752!5m2!1sen!2sin"
                                width="100%"
                                height="200"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="mt-4 rounded-lg"
                            />
                        </div>
                    </div>

                    {/* Social Media Links */}
                    <div>
                        <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
                        <div className="flex space-x-4">
                            <a href="https://www.facebook.com/share/BpxwCa1JGzV9vS5g/?mibextid=qi2Omg" className="hover:text-teal-400" aria-label="Facebook">
                                <FaFacebookF />
                            </a>
                            <a href="https://x.com/ajaymokta294552?t=y_3WRA1zvJhIl8WgmptwqA&s=08" className="hover:text-teal-400" aria-label="Twitter">
                                <FaTwitter />
                            </a>
                            <a href="https://www.instagram.com/unisole_empower?igsh=MTQ3d2F3bTR4ZW5oZQ==" className="hover:text-teal-400" aria-label="Instagram">
                                <FaInstagram />
                            </a>
                            <a href="https://www.linkedin.com/in/unisole-empower-250030320/" className="hover:text-teal-400" aria-label="LinkedIn">
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

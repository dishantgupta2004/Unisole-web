import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser } from 'react-icons/fa'; // Import user icon
import '../../App.css';

const Navbar: React.FC = () => {
    const navigate = useNavigate();

    const handleMenuClick = () => {
        navigate('/shadowpage');
    };

    return (
        <nav className="w-full flex items-center justify-between p-4 bg-white shadow-md fixed top-0 left-0 z-50">
            <div className="flex items-center ml-32">
                <div
                    className="menu-icon flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full cursor-pointer mr-4 hover:bg-gray-300"
                    onClick={handleMenuClick}
                >
                    <div className="relative w-5 h-0.5 bg-black">
                        <div className="before:content-[''] before:w-5 before:h-0.5 before:bg-black before:absolute before:-top-1.5"></div>
                        <div className="after:content-[''] after:w-5 after:h-0.5 after:bg-black after:absolute after:top-1.5"></div>
                    </div>
                </div>
                <div className="logo flex items-center ml-8">
                    <img src="/physteo.jpeg" alt="Unisole Logo" className="w-12 h-12 mr-2 rounded-full" />
                    <span className="text-4xl font-light text-gray-700">UNISOLE</span>
                </div>
            </div>
            {/* User Icon on the right side */}
            <div className="mr-32">
                <FaUser
                    size={30}
                    className="text-gray-700 cursor-pointer hover:text-gray-500 transition-colors duration-300"
                    onClick={() => navigate('/user-profile')} // Redirect to user profile page on click
                />
            </div>
        </nav>
    );
};

export default Navbar;

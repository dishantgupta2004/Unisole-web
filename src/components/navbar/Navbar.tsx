import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase';
import UserProfilePopup from './UserProfilePopup';
import '../../App.css';

const Navbar: React.FC = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState<any>(null);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);

    const handleMenuClick = () => {
        navigate('/shadowpage');
    };

    const handleLoginClick = () => {
        navigate('/login');
    };

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    return (
        <nav className="w-full flex items-center justify-between p-4 bg-white shadow-md fixed top-0 left-0 z-50">
            <div className="flex items-center ml-4 sm:ml-8 lg:ml-32">
                <div
                    className="menu-icon flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 rounded-full cursor-pointer mr-2 sm:mr-4 hover:bg-gray-300"
                    onClick={handleMenuClick}
                >
                    <div className="relative w-5 h-0.5 bg-black">
                        <div className="before:content-[''] before:w-5 before:h-0.5 before:bg-black before:absolute before:-top-1.5"></div>
                        <div className="after:content-[''] after:w-5 after:h-0.5 after:bg-black after:absolute after:top-1.5"></div>
                    </div>
                </div>
                <div className="logo flex items-center cursor-pointer" onClick={() => navigate('/#')}>
                    <img src="/logo.png" alt="Unisole Logo" className="w-8 h-8 sm:w-12 sm:h-12 mr-2 rounded-full" />
                    <span className="text-xl sm:text-3xl lg:text-4xl font-light text-gray-700">UNISOLE</span>
                </div>
            </div>
            <div className="flex items-center mr-4 sm:mr-8 lg:mr-32 relative">
                {user ? (
                    <div className="flex items-center">
                        {user.photoURL ? (
                            <img
                                src={user.photoURL}
                                alt="User"
                                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full mr-2 cursor-pointer"
                                onClick={togglePopup}
                            />
                        ) : (
                            <FaUser
                                className="w-8 h-8 sm:w-10 sm:h-10 text-gray-500 mr-2 cursor-pointer"
                                onClick={togglePopup}
                            />
                        )}
                        {isPopupOpen && <UserProfilePopup onClose={closePopup} />}
                    </div>
                ) : (
                    <button
                        className="ml-2 sm:ml-4 bg-blue-500 text-white px-2 py-1 sm:px-4 sm:py-2 rounded hover:bg-blue-600"
                        onClick={handleLoginClick}
                    >
                        Login
                    </button>
                )}
            </div>
        </nav>
    );
};

export default Navbar;

import React from 'react';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';

const UserProfilePopup: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await signOut(auth);
            onClose();
            navigate('/');
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };

    return (
        <div className="absolute top-14 right-0 w-64 bg-slate-100 rounded-lg shadow-lg z-50">
            <div className="p-4">
                <div className="flex items-center justify-between mb-4">
                    <span className="font-semibold text-gray-700">User Profile</span>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                        &times;
                    </button>
                </div>
                <ul className="text-gray-600">
                    <li className="py-2 px-4 hover:bg-gray-400 rounded-lg cursor-pointer">Profile</li>
                    <li className="py-2 px-4 hover:bg-gray-400 rounded-lg cursor-pointer">Saved Courses</li>
                    <li className="py-2 px-4 hover:bg-gray-400 rounded-lg cursor-pointer">Contacts</li>
                    <li
                        className="py-2 px-4 hover:bg-gray-400 rounded-lg cursor-pointer"
                        onClick={handleLogout}
                    >
                        Logout
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default UserProfilePopup;

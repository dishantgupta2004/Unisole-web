import React, { useState, useEffect } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '../../firebase';

const UserProfile: React.FC = () => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false); // Set loading to false once user is fetched
        });

        return () => unsubscribe();
    }, []);

    if (loading) {
        return <div className="p-8 bg-slate-100 min-h-screen text-center">Loading...</div>;
    }

    return (
        <div className="p-8 bg-slate-100 min-h-screen">
            {user ? (
                <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto">
                    {/* Profile Header */}
                    <div className="flex items-center mb-6">
                        <img
                            src={user.photoURL || '/default-avatar.jpg'}
                            alt="User Avatar"
                            className="w-24 h-24 rounded-full mr-4 border-2 border-gray-300 shadow"
                        />
                        <div>
                            <h2 className="text-3xl font-semibold mb-1">
                                {user.displayName || 'Anonymous User'}
                            </h2>
                            <p className="text-gray-600">{user.email || 'No email provided'}</p>
                            <span
                                className={`inline-block px-2 py-1 text-sm rounded-lg ${user.emailVerified
                                    ? 'bg-green-100 text-green-600'
                                    : 'bg-red-100 text-red-600'
                                    }`}
                            >
                                {user.emailVerified ? 'Email Verified' : 'Email Not Verified'}
                            </span>
                        </div>
                    </div>

                    {/* Profile Sections */}
                    <div className="mb-6">
                        <h3 className="text-xl font-semibold mb-2">About Me</h3>
                        <p className="text-gray-600">Hello, welcome to your profile. Feel free to update your information!</p>
                    </div>

                    <div className="mb-6">
                        <h3 className="text-xl font-semibold mb-2">Bio</h3>
                        <p className="text-gray-600">Coming Soon...</p>
                    </div>

                    <div className="mb-6">
                        <h3 className="text-xl font-semibold mb-2">Education</h3>
                        <p className="text-gray-600">Coming Soon...</p>
                    </div>

                    <div className="mb-6">
                        <h3 className="text-xl font-semibold mb-2">Address</h3>
                        <p className="text-gray-600">Coming Soon...</p>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Social Links</h3>
                        <div className="flex space-x-4">
                            <a
                                href="#"
                                className="text-blue-500 hover:underline transition"
                            >
                                LinkedIn
                            </a>
                            <a
                                href="#"
                                className="text-blue-500 hover:underline transition"
                            >
                                Twitter
                            </a>
                            <a
                                href="#"
                                className="text-blue-500 hover:underline transition"
                            >
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="text-center text-gray-600">User not authenticated.</div>
            )}
        </div>
    );
};

export default UserProfile;

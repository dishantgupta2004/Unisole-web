import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase';

const UserProfile: React.FC = () => {
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);

    return (
        <div className="p-8 bg-slate-100 mt-20 min-h-screen">
            {user ? (
                <div className="bg-gray-200 p-6 rounded-lg shadow-lg max-w-md mx-auto">
                    <div className="flex items-center mb-6">
                        <img
                            src={user.photoURL}
                            alt="User"
                            className="w-20 h-20 rounded-full mr-4"
                        />
                        <div>
                            <h2 className="text-2xl font-semibold">{user.displayName}</h2>
                            <p className="text-gray-600">{user.email}</p>
                        </div>
                    </div>
                    <div className="mb-4">
                        <h3 className="text-lg font-semibold">Phone Number</h3>
                        <p className="text-gray-600">{user.phoneNumber || 'No phone number provided'}</p>
                    </div>
                    <div className="mb-4">
                        <h3 className="text-lg font-semibold">About</h3>
                        <p className="text-gray-600">A brief description about the user.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">Education</h3>
                        <p className="text-gray-600">B.Sc. in Computer Science from XYZ University</p>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default UserProfile;

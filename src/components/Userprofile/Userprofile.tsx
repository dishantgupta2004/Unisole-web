import React, { useState, useEffect } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '../../firebase';

// Define types
interface UserProfileProps {
    user: User | null;
}

const UserProfile: React.FC<UserProfileProps> = () => {
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
        return <div className="p-8 bg-slate-100 mt-20 min-h-screen text-center">Loading...</div>;
    }

    return (
        <div className="p-8 bg-slate-100 mt-20 min-h-screen">
            {user ? (
                <div className="bg-gray-200 p-6 rounded-lg shadow-lg max-w-md mx-auto">
                    <div className="flex items-center mb-6">
                        <img
                            src={user.photoURL || '/default-avatar.jpg'} // Provide a default image if photoURL is not available
                            alt="User"
                            className="w-20 h-20 rounded-full mr-4"
                        />
                        <div>
                            <h2 className="text-2xl font-semibold">{user.displayName || 'No name provided'}</h2>
                            <p className="text-gray-600">{user.email || 'No email provided'}</p>
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
                <div className="text-center text-gray-600">User not authenticated.</div>
            )}
        </div>
    );
};

export default UserProfile;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, provider } from '../../firebase';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { FaGoogle } from 'react-icons/fa';

const Registration: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const navigate = useNavigate();

    const handleGoogleSignup = async () => {
        try {
            await signInWithPopup(auth, provider);
            alert('Registration successful');
            navigate('/');
        } catch (error) {
            alert((error as Error).message);
        }
    };

    const handleEmailSignup = async () => {
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            alert('Registration successful');
            navigate('/');
        } catch (error) {
            console.error('Error during email registration: ', error);
            alert((error as Error).message);
        }
    };

    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Left side with the image */}
            <div
                className="hidden md:block w-1/3 md:w-1/3 bg-center bg-no-repeat"
                style={{
                    backgroundImage: 'url("/banner.png")',
                    backgroundSize: 'contain',
                    padding: '2rem',
                    marginLeft: '8rem',
                }}
            ></div>

            {/* Right side with the registration form */}
            <div className="w-full md:w-2/3 flex items-center justify-center">
                <div className="bg-white p-6 md:p-10 rounded-lg shadow-lg w-full max-w-md">
                    <h2 className="text-3xl font-bold mb-6 text-center text-gray-700">Register</h2>

                    <div className="space-y-4">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="Confirm Password"
                            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                            className="bg-blue-500 text-white w-full py-3 rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300"
                            onClick={handleEmailSignup}
                        >
                            Register with Email
                        </button>
                    </div>

                    <div className="my-4">
                        <button
                            className="bg-red-500 text-white w-full py-3 rounded-lg shadow-md hover:bg-red-600 transition-colors duration-300 flex items-center justify-center"
                            onClick={handleGoogleSignup}
                        >
                            <FaGoogle className="mr-2" />
                            Register with Google
                        </button>
                    </div>

                    <div className="text-gray-600 text-center mt-4">
                        Already have an account?{' '}
                        <span
                            className="text-blue-500 cursor-pointer hover:underline"
                            onClick={() => navigate('/login')}
                        >
                            Login here
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;

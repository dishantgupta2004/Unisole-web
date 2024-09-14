import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, provider } from '../../firebase';
import { signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import { FaGoogle } from 'react-icons/fa';

const Login: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const navigate = useNavigate();

    const handleGoogleLogin = async () => {
        try {
            await signInWithPopup(auth, provider);
            alert('Login successful');
            navigate('/');
        } catch (error) {
            alert((error as Error).message);
        }
    };

    const handleEmailLogin = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            alert('Login successful');
            navigate('/user-profile');
        } catch (error) {
            alert((error as Error).message);
        }
    };

    return (
        <div
            className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center bg-gray-100"
            style={{ backgroundImage: 'url("https://source.unsplash.com/random/1600x900?tech")' }}
        >
            <div className="bg-white p-6 md:p-10 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-3xl font-bold mb-6 text-center text-gray-700">Login</h2>

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
                    <button
                        className="bg-blue-500 text-white w-full py-3 rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300"
                        onClick={handleEmailLogin}
                    >
                        Login with Email
                    </button>
                </div>

                <div className="my-4">
                    <button
                        className="bg-red-500 text-white w-full py-3 rounded-lg shadow-md hover:bg-red-600 transition-colors duration-300 flex items-center justify-center"
                        onClick={handleGoogleLogin}
                    >
                        <FaGoogle className="mr-2" />
                        Login with Google
                    </button>
                </div>

                <div className="mb-4">
                    <button
                        className="bg-green-500 text-white w-full py-3 rounded-lg shadow-md hover:bg-green-600 transition-colors duration-300"
                        onClick={() => navigate('/phone-auth')}
                    >
                        Login with Phone
                    </button>
                </div>

                <div className="text-gray-600 text-center mt-4">
                    Don't have an account?{' '}
                    <span
                        className="text-blue-500 cursor-pointer hover:underline"
                        onClick={() => navigate('/register')}
                    >
                        Register here
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Login;

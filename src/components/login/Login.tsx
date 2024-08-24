import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, provider } from '../../firebase';
import { signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
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
            className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center"
            style={{ backgroundImage: 'url("https://source.unsplash.com/random/1600x900?tech")' }}
        >
            <div className="bg-slate-200 p-10 rounded-lg shadow-lg w-80 md:w-96">
                <h2 className="text-3xl font-bold mb-8 text-center text-gray-700">Login</h2>

                <div className="mb-4">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        className="bg-gradient-to-r from-blue-500 to-blue-600 text-white w-full py-2 rounded-lg shadow-md hover:from-blue-600 hover:to-blue-700"
                        onClick={handleEmailLogin}
                    >
                        Login with Email
                    </button>
                </div>

                <div className="mb-4">
                    <button
                        className="bg-gradient-to-r from-red-500 to-red-600 text-white w-full py-2 rounded-lg shadow-md hover:from-red-600 hover:to-red-700 flex items-center justify-center"
                        onClick={handleGoogleLogin}
                    >
                        {/* <img src="/google-icon.svg" alt="" className="w-5 h-5 mr-2" /> */}
                        Login with Google
                    </button>
                </div>

                <div className="mb-4">
                    <button
                        className="bg-gradient-to-r from-green-500 to-green-600 text-white w-full py-2 rounded-lg shadow-md hover:from-green-600 hover:to-green-700"
                        onClick={() => navigate('/phone-auth')}
                    >
                        Login with Phone
                    </button>
                </div>

                <div className="text-gray-600 text-center">
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

import React, { useState, useEffect } from 'react';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';

const PhoneAuth: React.FC = () => {
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const [otp, setOtp] = useState<string>('');
    const [verificationId, setVerificationId] = useState<string>('');
    const [recaptchaInitialized, setRecaptchaInitialized] = useState(false);
    const navigate = useNavigate();

    const initializeRecaptcha = () => {
        if (!recaptchaInitialized) {
            window.recaptchaVerifier = new RecaptchaVerifier(
                'recaptcha-container',
                {
                    size: 'invisible',
                    callback: (response: any) => {
                        console.log('Recaptcha verified!');
                    },
                },
                auth
            );
            setRecaptchaInitialized(true);
        }
    };

    const sendOtp = async () => {
        initializeRecaptcha();
        const appVerifier = window.recaptchaVerifier;
        try {
            const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
            setVerificationId(confirmationResult.verificationId);
            alert('OTP sent to your phone!');
        } catch (error) {
            console.error('Error sending OTP: ', error);
            alert((error as Error).message);
        }
    };

    const verifyOtp = async () => {
        const credential = window.firebase.auth.PhoneAuthProvider.credential(verificationId, otp);
        try {
            await auth.signInWithCredential(credential);
            alert('Phone authentication successful');
            navigate('/user-profile'); // Redirect to user profile on success
        } catch (error) {
            console.error('Error verifying OTP: ', error);
            alert((error as Error).message);
        }
    };

    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Left side with the image */}
            <div
                className="hidden md:block w-1/3 bg-center bg-no-repeat"
                style={{
                    backgroundImage: 'url("/banner.png")',
                    backgroundSize: 'contain', // Ensures the entire image is displayed
                    padding: '2rem',
                    marginLeft: '8rem'
                }}
            ></div>

            {/* Right side with the phone authentication form */}
            <div className="w-full md:w-2/3 flex items-center justify-center">
                <div className="bg-white p-6 md:p-10 rounded-lg shadow-lg w-full max-w-md">
                    <h2 className="text-3xl font-bold mb-6 text-center text-gray-700">Phone Authentication</h2>

                    <div className="space-y-4">
                        {!verificationId ? (
                            <>
                                <input
                                    type="tel"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    placeholder="Enter phone number"
                                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <button
                                    className="bg-blue-500 text-white w-full py-3 rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300"
                                    onClick={sendOtp}
                                >
                                    Send OTP
                                </button>
                            </>
                        ) : (
                            <>
                                <input
                                    type="text"
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value)}
                                    placeholder="Enter OTP"
                                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <button
                                    className="bg-blue-500 text-white w-full py-3 rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300"
                                    onClick={verifyOtp}
                                >
                                    Verify OTP
                                </button>
                            </>
                        )}
                    </div>

                    <div id="recaptcha-container"></div>
                </div>
            </div>
        </div>
    );
};

export default PhoneAuth;

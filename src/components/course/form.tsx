import React, { useState } from 'react';
import { db } from '../../firebase'; // Adjust the path based on your project structure
import { addDoc, collection } from 'firebase/firestore';

const Form: React.FC = () => {
    const [step, setStep] = useState(1);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [agreeTerms, setAgreeTerms] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!agreeTerms) {
            alert("You must agree to the terms and conditions.");
            return;
        }

        try {
            const docRef = await addDoc(collection(db, 'registrations'), {
                name,
                email,
                phone,
                address,
                agreeTerms,
                timestamp: new Date()
            });
            alert(`Form submitted successfully! Document ID: ${docRef.id}`);
            setStep(1); // Reset form
            setName('');
            setEmail('');
            setPhone('');
            setAddress('');
            setAgreeTerms(false);
        } catch (error) {
            console.error('Error adding document: ', error);
            alert('Error submitting form. Please try again.');
        }
    };

    const validateStep = () => {
        if (step === 1) {
            return name.trim() !== '' && email.trim() !== '';
        } else if (step === 2) {
            return phone.trim() !== '' && address.trim() !== '';
        }
        return true;
    };

    const nextStep = () => {
        if (validateStep()) {
            setStep((prev) => Math.min(prev + 1, 3));
        } else {
            alert('Please fill in all required fields.');
        }
    };

    const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-teal-100 via-white to-cyan-100 p-4">
            <form
                onSubmit={handleSubmit}
                className="bg-white rounded-xl shadow-lg p-8 sm:p-10 w-full max-w-lg"
            >
                <h1 className="text-3xl font-bold text-teal-700 mb-6 text-center">
                    Enroll in Python and Generative AI
                </h1>
                <p className="text-gray-600 text-center mb-8">
                    Join now to gain in-depth knowledge and skills in Python and Generative AI.
                </p>

                {step === 1 && (
                    <>
                        <div className="mb-6">
                            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                                placeholder="Enter your full name"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <button
                            type="button"
                            onClick={nextStep}
                            className="w-full px-8 py-3 bg-gradient-to-r from-teal-600 to-cyan-900 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300"
                        >
                            Next
                        </button>
                    </>
                )}

                {step === 2 && (
                    <>
                        <div className="mb-6">
                            <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                                placeholder="Enter your phone number"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="address" className="block text-gray-700 font-semibold mb-2">
                                Address
                            </label>
                            <input
                                type="text"
                                id="address"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                                placeholder="Enter your address"
                                required
                            />
                        </div>
                        <button
                            type="button"
                            onClick={prevStep}
                            className="w-full mb-4 px-8 py-3 bg-gray-400 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300"
                        >
                            Previous
                        </button>
                        <button
                            type="button"
                            onClick={nextStep}
                            className="w-full px-8 py-3 bg-gradient-to-r from-teal-600 to-cyan-900 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300"
                        >
                            Next
                        </button>
                    </>
                )}

                {step === 3 && (
                    <>
                        <div className="mb-6">
                            <label htmlFor="terms" className="inline-flex items-center">
                                <input
                                    type="checkbox"
                                    id="terms"
                                    checked={agreeTerms}
                                    onChange={(e) => setAgreeTerms(e.target.checked)}
                                    className="w-4 h-4 border rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
                                />
                                <span className="ml-2 text-gray-700">I agree to the terms and conditions.</span>
                            </label>
                        </div>
                        <button
                            type="button"
                            onClick={prevStep}
                            className="w-full mb-4 px-8 py-3 bg-gray-400 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300"
                        >
                            Previous
                        </button>
                        <button
                            type="submit"
                            className="w-full px-8 py-3 bg-gradient-to-r from-teal-600 to-cyan-900 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300"
                        >
                            Submit
                        </button>
                    </>
                )}
            </form>
        </div>
    );
};

export default Form;

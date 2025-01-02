import React, { useState, ChangeEvent } from 'react';
import { db } from '../../firebase'; // Adjust path as necessary
import { addDoc, collection } from 'firebase/firestore';

const Donate: React.FC = () => {
    const [selectedAmount, setSelectedAmount] = useState<number | ''>('');
    const [customAmount, setCustomAmount] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [agreeTerms, setAgreeTerms] = useState<boolean>(false);

    const handleSelectAmount = (amount: number) => {
        setSelectedAmount(amount);
        setCustomAmount('');
    };

    const handleCustomAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (!isNaN(Number(value)) && Number(value) > 0) {
            setCustomAmount(value);
            setSelectedAmount('');
        }
    };

    const handlePaymentSuccess = async (paymentResponse: any) => {
        try {
            const donationAmount = customAmount ? Number(customAmount) : selectedAmount;
            const docRef = await addDoc(collection(db, 'donations'), {
                name,
                email,
                amount: donationAmount,
                paymentId: paymentResponse.razorpay_payment_id,
                timestamp: new Date(),
            });
            alert(`Thank you for your donation! Document ID: ${docRef.id}`);
            setSelectedAmount('');
            setCustomAmount('');
            setName('');
            setEmail('');
            setAgreeTerms(false);
        } catch (error) {
            console.error('Error saving donation: ', error);
            alert('There was an error processing your donation. Please try again.');
        }
    };

    const initiatePayment = () => {
        if (!agreeTerms) {
            alert('You must agree to the terms and conditions.');
            return;
        }

        const amount = customAmount ? Number(customAmount) : selectedAmount;
        if (!amount || amount <= 0) {
            alert('Please enter a valid donation amount.');
            return;
        }

        const options = {
            key: 'rzp_live_7nFwNEzqaAFxLp',
            amount: amount * 100,
            currency: 'INR',
            name: 'Donation',
            description: 'Thank you for your generosity!',
            handler: (response: any) => handlePaymentSuccess(response),
            prefill: {
                name,
                email,
            },
            theme: {
                color: '#528FF0',
            },
        };

        const razorpay = new window.Razorpay(options);
        razorpay.open();
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        initiatePayment();
    };

    return (
        <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
            <div className="bg-teal-600 text-white text-center py-12 mb-6 rounded-lg">
                <h1 className="text-3xl sm:text-4xl font-bold">Support Our Mission</h1>
                <p className="mt-4 text-base sm:text-lg">Your generous donation helps us make a difference in the lives of many.</p>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
                <form
                    onSubmit={handleSubmit}
                    className="bg-white shadow-lg rounded-lg p-6 sm:p-8"
                >
                    <h2 className="text-xl sm:text-2xl font-bold mb-6 text-teal-700">
                        Donate Now
                    </h2>

                    <div className="mb-6">
                        <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                            placeholder="Enter your name"
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-700 font-semibold mb-2">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-700 font-semibold mb-2">Donation Amount</label>
                        <div className="flex flex-wrap space-x-2 space-y-2">
                            {[100, 500, 1000, 5000].map((amount) => (
                                <button
                                    key={amount}
                                    type="button"
                                    className={`px-4 py-2 rounded-lg ${selectedAmount === amount
                                        ? 'bg-teal-600 text-white'
                                        : 'bg-gray-200 text-gray-700'
                                        }`}
                                    onClick={() => handleSelectAmount(amount)}
                                >
                                    ₹{amount}
                                </button>
                            ))}
                        </div>
                        <div className="mt-4">
                            <input
                                type="text"
                                value={customAmount}
                                onChange={handleCustomAmountChange}
                                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                                placeholder="Enter custom amount"
                            />
                        </div>
                    </div>

                    <div className="mb-6">
                        <label className="inline-flex items-center">
                            <input
                                type="checkbox"
                                checked={agreeTerms}
                                onChange={(e) => setAgreeTerms(e.target.checked)}
                                className="w-4 h-4 border rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
                            />
                            <span className="ml-2 text-gray-700">I agree to the terms and conditions.</span>
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="w-full px-8 py-3 bg-gradient-to-r from-teal-600 to-cyan-900 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300"
                    >
                        Donate Now
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Donate;


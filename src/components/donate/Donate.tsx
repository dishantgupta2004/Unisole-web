import React, { useState, ChangeEvent, MouseEvent } from 'react';

// Type for the donation amount
type Amount = number | '';

const Donate: React.FC = () => {
    const [selectedAmount, setSelectedAmount] = useState<Amount>('');
    const [customAmount, setCustomAmount] = useState<string>('');

    const handleSelectAmount = (amount: number) => {
        setSelectedAmount(amount);
        setCustomAmount(''); // Clear custom input when a preset amount is selected
    };

    const handleCustomAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCustomAmount(e.target.value);
        setSelectedAmount(''); // Clear selected amount when typing a custom amount
    };

    const handleDonateClick = () => {
        alert(`You are donating ₹${customAmount || selectedAmount}. Thank you!`);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-teal-100 to-cyan-300 py-10 px-4 sm:px-6 lg:px-8">
            {/* Banner Section */}
            <div className="bg-teal-600 text-white text-center py-16 mb-8 rounded-lg">
                <h1 className="text-3xl sm:text-4xl font-bold">Support Our Mission</h1>
                <p className="mt-4 text-base sm:text-lg">Your generous donation helps us make a difference in the lives of many.</p>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
                <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8">
                    <h2 className="text-xl sm:text-2xl font-bold mb-6 text-gray-800 text-center">Make a Donation</h2>

                    {/* Preset Donation Amounts */}
                    <div className="grid grid-cols-2 gap-4 sm:flex sm:justify-around mb-6">
                        {[500, 1000, 2500, 5000].map((amount) => (
                            <button
                                key={amount}
                                className={`px-4 sm:px-6 py-2 rounded-full font-semibold ${selectedAmount === amount
                                    ? 'bg-teal-600 text-white'
                                    : 'bg-gray-100 text-gray-800'
                                    } hover:bg-teal-600 hover:text-white transition-colors duration-300`}
                                onClick={() => handleSelectAmount(amount)}
                            >
                                ₹{amount}
                            </button>
                        ))}
                    </div>

                    {/* Custom Amount Input */}
                    <div className="mb-6">
                        <input
                            type="number"
                            placeholder="Enter custom amount"
                            value={customAmount}
                            onChange={handleCustomAmountChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                        />
                    </div>

                    {/* Payment Method Section */}
                    <div className="mb-6">
                        <label className="block text-gray-700 font-medium mb-2">Choose Payment Method:</label>
                        <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600">
                            <option>Credit Card</option>
                            <option>PayPal</option>
                            <option>Bank Transfer</option>
                        </select>
                    </div>

                    {/* Donate Button */}
                    <button
                        className="w-full bg-teal-600 text-white font-bold py-3 rounded-lg hover:bg-teal-700 transition-colors duration-300"
                        onClick={handleDonateClick}
                    >
                        Donate Now
                    </button>
                </div>

                {/* Info Section */}
                <p className="text-center text-gray-600 mt-8 text-sm sm:text-base">
                    All donations are tax-deductible. You will receive a confirmation email for your donation.
                </p>
            </div>
        </div>
    );
};

export default Donate;

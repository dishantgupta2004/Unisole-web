import React, { useState, ChangeEvent } from 'react';

// Type for the donation amount
type Amount = number | '';

const Donate: React.FC = () => {
    const [selectedAmount, setSelectedAmount] = useState<Amount>('');
    const [customAmount, setCustomAmount] = useState<string>('');
    const [paymentMethod, setPaymentMethod] = useState<string>('Credit Card');

    const handleSelectAmount = (amount: number) => {
        setSelectedAmount(amount);
        setCustomAmount(''); // Clear custom input when a preset amount is selected
    };

    const handleCustomAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (!isNaN(Number(value)) && Number(value) > 0) {
            setCustomAmount(value);
            setSelectedAmount(''); // Clear selected amount when typing a custom amount
        }
    };

    const handleDonateClick = () => {
        const amount = customAmount ? customAmount : selectedAmount;
        if (amount && Number(amount) > 0) {
            alert(`You are donating ₹${amount}. Thank you!`);
        } else {
            alert('Please enter a valid donation amount.');
        }
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
                                aria-label={`Select ₹${amount} donation`}
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
                            aria-label="Enter custom donation amount"
                        />
                    </div>

                    {/* Payment Method Section */}
                    <div className="mb-6">
                        <label className="block text-gray-700 font-medium mb-2">Choose Payment Method:</label>
                        <select
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                            value={paymentMethod}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                            aria-label="Select payment method"
                        >
                            <option value="Credit Card">Credit Card</option>
                            <option value="PayPal">PayPal</option>
                            <option value="Bank Transfer">Bank Transfer</option>
                        </select>
                    </div>

                    {/* Donate Button */}
                    <button
                        className="w-full bg-teal-600 text-white font-bold py-3 rounded-lg hover:bg-teal-700 transition-colors duration-300"
                        onClick={handleDonateClick}
                        aria-label="Donate now"
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

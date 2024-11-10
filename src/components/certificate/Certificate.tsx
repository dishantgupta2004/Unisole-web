import React, { useState } from 'react';
import { FaSearch, FaDownload } from 'react-icons/fa';

interface Certificate {
    id: number;
    name: string;
    title: string;
    date: string;
    src: string;
}

const certificates: Certificate[] = [
    { id: 1, name: "Alok Prasad", title: "Advanced AI", date: "2024-11-01", src: "https://res.cloudinary.com/dyq1mioyr/image/upload/v1731215241/unisole/7_nitcmu.png" },
    { id: 2, name: "Prince Saklani", title: "Advanced AI", date: "2024-11-01", src: "https://res.cloudinary.com/dyq1mioyr/image/upload/v1731215341/unisole/8_twusz3.png" },
    { id: 3, name: "Arpit Minhas", title: "Advanced AI", date: "2024-11-01", src: "https://res.cloudinary.com/dyq1mioyr/image/upload/v1731215462/unisole/6_fcvy05.png" },
    { id: 4, name: "Jatin Sharma", title: "Advanced AI", date: "2024-11-01", src: "https://res.cloudinary.com/dyq1mioyr/image/upload/v1731215592/unisole/9_ysup5z.png" },
    { id: 5, name: "Vishal Kumar", title: "Advanced AI", date: "2024-11-01", src: "https://res.cloudinary.com/dyq1mioyr/image/upload/v1731215833/unisole/5_wktlyd.png" },
    { id: 6, name: "Nitish Joshi", title: "Advanced AI", date: "2024-11-01", src: "https://res.cloudinary.com/dyq1mioyr/image/upload/v1731215902/unisole/4_aur5ce.png" },
    { id: 7, name: "Sourish Sharma", title: "Advanced AI", date: "2024-11-01", src: "https://res.cloudinary.com/dyq1mioyr/image/upload/v1731216033/unisole/10_snkwmj.png" },
    { id: 8, name: "Urvashi Chauhan", title: "Advanced AI", date: "2024-11-01", src: "https://res.cloudinary.com/dyq1mioyr/image/upload/v1731216099/unisole/2_zn2epc.png" },
    { id: 9, name: "Saurabh Thakur", title: "Advanced AI", date: "2024-11-01", src: "https://res.cloudinary.com/dyq1mioyr/image/upload/v1731216176/unisole/11_telnqk.png" },
    { id: 10, name: "Sachit Chauhan", title: "Advanced AI", date: "2024-11-01", src: "https://res.cloudinary.com/dyq1mioyr/image/upload/v1731216296/unisole/1_qzxogq.png" },
    { id: 11, name: "Gourav Gupta", title: "Advanced AI", date: "2024-11-01", src: "https://res.cloudinary.com/dyq1mioyr/image/upload/v1731216368/unisole/3_tidvh0.png" },
];
const CertificateShowcase: React.FC = () => {
    const [search, setSearch] = useState<string>("");

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    const filteredCertificates = certificates.filter(cert =>
        cert.name.toLowerCase().includes(search.toLowerCase())
    );

    const handleDownload = (src: string, name: string) => {
        const link = document.createElement("a");
        link.href = src;
        link.download = `${name}-certificate.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="flex flex-col items-center bg-gray-100 p-4 lg:p-8 min-h-screen">
            <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-cyan-900 mb-6 lg:mb-8">
                Certificate Showcase
            </h1>
            <div className="relative w-full max-w-lg mb-6">
                <input
                    type="text"
                    placeholder="Search by student name"
                    value={search}
                    onChange={handleSearch}
                    className="border rounded-full p-3 w-full pl-10 text-gray-700"
                />
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
                {filteredCertificates.map(cert => (
                    <div key={cert.id} className="p-4 bg-white border rounded-lg shadow-lg flex flex-col items-center relative group">
                        <div className="relative w-full">
                            <img src={cert.src} alt={`${cert.name}'s Certificate`} className="w-full h-auto mb-4 rounded-lg" />
                            <button
                                className="absolute top-2 left-2 text-white bg-teal-600 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                                onClick={() => handleDownload(cert.src, cert.name)}
                                title="Download Certificate"
                            >
                                <FaDownload />
                            </button>
                        </div>
                        <h2 className="text-lg font-semibold text-teal-600">{cert.name}</h2>
                        <p className="text-gray-600">{cert.title}</p>
                        <p className="text-gray-500 text-sm">{cert.date}</p>
                    </div>
                ))}
                {filteredCertificates.length === 0 && (
                    <p className="text-gray-600 text-center col-span-full">No certificates found</p>
                )}
            </div>
        </div>
    );
};

export default CertificateShowcase;

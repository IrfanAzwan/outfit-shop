import { Head } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';

export default function Welcome() {
    return (
        <>
            <Head title="Welcome to Outfit Shop" />
            
            <div className="min-h-screen bg-gray-50 text-gray-900">
                {/* Reusable Top Navigation Component */}
                <Navbar />

                {/* Hero Banner Section */}
                <header className="bg-indigo-900 text-white py-20 px-6 text-center">
                    <div className="max-w-3xl mx-auto">
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Elevate Your Everyday Style</h1>
                        <p className="text-lg md:text-xl text-indigo-200 mb-8">Discover fresh drops, essential wardrobe staples, and exclusive deals tailored just for you.</p>
                        <button className="bg-white text-indigo-900 font-bold px-8 py-3 rounded-md hover:bg-gray-100 transition shadow-lg">
                            Shop Latest Collection
                        </button>
                    </div>
                </header>

                {/* Main Shop Container placeholders */}
                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">Trending Right Now</h2>
                    
                    {/* Placeholder Grid for Clothes items */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[1, 2, 3, 4].map((item) => (
                            <div key={item} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden group">
                                <div className="h-64 bg-gray-200 flex items-center justify-center text-gray-400 group-hover:opacity-75 transition">
                                    👕 Clothing Image Placeholder
                                </div>
                                <div className="p-4">
                                    <h3 className="text-sm text-gray-700 font-semibold">Premium Essential Tee</h3>
                                    <p className="mt-1 text-sm text-gray-500">Unisex Comfort Fit</p>
                                    <p className="mt-2 text-md font-bold text-indigo-600">RM 79.00</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </main>
            </div>
        </>
    );
}
import { Link } from '@inertiajs/react';

export default function Navbar() {
    return (
        <nav className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="font-bold text-xl text-gray-800 tracking-wider uppercase">
                             OUTFIT<span className="text-indigo-600">SHOP</span>
                        </Link>
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden md:flex space-x-8">
                        <Link href="/" className="text-gray-600 hover:text-gray-900 font-medium">Home</Link>
                        <Link href="#" className="text-gray-600 hover:text-gray-900 font-medium">New Arrivals</Link>
                        <Link href="#" className="text-gray-600 hover:text-gray-900 font-medium">Clothing</Link>
                        <Link href="#" className="text-gray-600 hover:text-gray-900 font-medium">Sale</Link>
                    </div>

                    {/* Right Side Icons / Auth links */}
                    <div className="flex items-center space-x-4">
                        <button className="text-gray-600 hover:text-gray-900 relative p-2">
                            🛒 <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white bg-indigo-600 rounded-full">0</span>
                        </button>
                        
                        <Link href="/login" className="text-sm font-medium text-gray-600 hover:text-gray-900">
                            Log in
                        </Link>
                        <Link href="/register" className="text-sm font-medium bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition">
                            Register
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
import { Head, Link, useForm } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    const { post } = useForm();

    const handleLogout = (e) => {
        e.preventDefault();
        post(route('logout'));
    };

    return (
        <div className="min-h-screen bg-gray-50 text-gray-900">
            <Head title="Customer Portal" />

            {/* Private Navbar */}
            <nav className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16 items-center">
                        <div className="flex-shrink-0 flex items-center">
                            <Link href="/" className="font-bold text-xl text-gray-800 tracking-wider uppercase">
                                👗 OUTFIT<span className="text-indigo-600">SHOP</span>
                            </Link>
                        </div>

                        {/* Middle links */}
                        <div className="hidden md:flex space-x-8">
                            <Link href="/" className="text-gray-600 hover:text-gray-900 font-medium">Browse Store</Link>
                            <Link href="#" className="text-indigo-600 font-semibold">My Account</Link>
                        </div>

                        {/* User Actions */}
                        <div className="flex items-center space-x-6">
                            <span className="text-sm text-gray-600 font-medium">
                                Hi, <span className="text-indigo-600 font-semibold">{auth.user.name}</span>!
                            </span>
                            <button 
                                onClick={handleLogout}
                                className="text-sm text-red-600 hover:text-red-800 font-medium bg-red-50 px-3 py-1.5 rounded-md transition"
                            >
                                Log Out
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Dashboard Content Container */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="md:grid md:grid-cols-3 md:gap-6">
                    
                    {/* Welcome Summary Panel */}
                    <div className="md:col-span-1 mb-6 md:mb-0">
                        <div className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm text-center">
                            <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center text-2xl mx-auto text-indigo-600 font-bold mb-4">
                                {auth.user.name.charAt(0).toUpperCase()}
                            </div>
                            <h2 className="text-xl font-bold">{auth.user.name}</h2>
                            <p className="text-sm text-gray-500 mb-4">{auth.user.email}</p>
                            <div className="border-t pt-4 text-left space-y-2">
                                <div className="text-xs text-gray-500 uppercase font-bold tracking-wider">Account Tier</div>
                                <div className="text-sm font-semibold text-gray-800">✨ Premium Club Member</div>
                            </div>
                        </div>
                    </div>

                    {/* Order History Placeholder Panel */}
                    <div className="md:col-span-2">
                        <div className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm">
                            <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Orders</h3>
                            
                            {/* Empty state message layout */}
                            <div className="border-2 border-dashed border-gray-200 rounded-lg p-12 text-center text-gray-400">
                                <span className="text-4xl block mb-2">📦</span>
                                <p className="font-medium text-gray-600">You haven't placed any orders yet.</p>
                                <Link href="/" className="mt-4 inline-block text-sm font-semibold text-white bg-indigo-600 px-4 py-2 rounded-md hover:bg-indigo-700 transition">
                                    Start Shopping
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}
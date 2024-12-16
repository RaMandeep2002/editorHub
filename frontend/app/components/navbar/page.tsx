"use client"
import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';
import { buttonVariants } from "@/components/ui/button"
const Navbar: React.FC = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <nav className="bg-white text-black shadow-md">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                {/* Left Section: Logo and Navigation */}
                <div className="flex items-center space-x-10">
                    {/* Logo */}
                    <div className="text-2xl font-bold text-blue">
                        <Link href="/" >CreativeHub</Link>
                    </div>

                    {/* Navigation Links */}
                    <ul className="hidden md:flex space-x-6 font-semibold">
                        <li>
                            <Link href="/assets" className="hover:text-green-400">
                                Assets
                            </Link>
                        </li>
                        <li>
                            <Link href="/jobs" className="hover:text-green-400">
                                Jobs
                            </Link>
                        </li>
                        <li>
                            <Link href="/hire-freelancers" className="hover:text-green-400">
                                Hire Freelancers
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Right Section: Buttons and Avatar */}
                <div className="flex items-center space-x-4">
                    {/* Buttons Styled as Links */}
                    <Link href="/login" className={buttonVariants({ variant: "outline" })}>Login</Link>
                    <Link href="/signup" className={buttonVariants({ variant: "outline" })}>Signup</Link>


                    {/* Avatar with Dropdown */}
                    <div className="relative">
                        <button onClick={toggleDropdown} className="flex items-center focus:outline-none">
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </button>

                        {/* Dropdown Menu */}
                        {dropdownOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
                                <ul className="py-1">
                                    <li>
                                        <Link
                                            href="/profile"
                                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                        >
                                            Profile
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/dashboard"
                                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                        >
                                            Dashboard
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/settings"
                                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                        >
                                            Settings
                                        </Link>
                                    </li>
                                    <li>
                                        <button
                                            onClick={() => alert('Logged out')}
                                            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                                        >
                                            Logout
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

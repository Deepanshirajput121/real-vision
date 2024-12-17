"use client"; // Ensures the component is rendered on the client side

import React, { useState, useEffect } from "react";
import Link from "next/link"; // Import Next.js Link component
import { FaHome, FaConciergeBell, FaPhone, FaImages } from "react-icons/fa"; // Import icons
import './Home.css'; // Adjust this based on your file structure

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Scroll event listener to change background on scroll
    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            setIsScrolled(offset > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Menu ko close karne ke liye function
    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-10 p-4 transition duration-300 ${
                isScrolled
                    ? "bg-[#000000] bg-opacity-50 backdrop-blur-lg" // Blurred background on scroll
                    : "bg-transparent"
            } text-white`}
        >
            <div className="mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="text-2xl md:text-4xl font-bold">
                    Real<span className="logo">Vision</span>
                </div>

                {/* Menu Links */}
                <ul
                    className={`hidden md:flex space-x-6 items-center transition-all duration-300 text-sm md:text-lg`}
                >
                    <li className="py-2 md:py-0">
                        <Link href="/" className="hover:text-gray-500 transition duration-300">
                            Home
                        </Link>
                    </li>
                    <li className="py-2 md:py-0">
                        <Link href="/services" className="hover:text-gray-500 transition duration-300">
                            Services
                        </Link>
                    </li>
                    <li className="py-2 md:py-0">
                        <Link href="/contact" className="hover:text-gray-500 transition duration-300">
                            Contact
                        </Link>
                    </li>
                    <li className="py-2 md:py-0">
                        <Link href="/gallery" className="hover:text-gray-500 transition duration-300">
                            Gallery
                        </Link>
                    </li>
                </ul>

                {/* Hamburger Icon for Mobile */}
                <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
                    <div className="w-6 h-1 bg-white mb-1"></div>
                    <div className="w-6 h-1 bg-white mb-1"></div>
                    <div className="w-6 h-1 bg-white"></div>
                </div>
            </div>

            {/* Mobile Menu (Visible when isOpen) */}
            {isOpen && (
                <ul className="block md:hidden bg-[#660708] text-white text-center transition-all duration-500 ease-in-out">
                    <li className="py-4 text-lg flex items-center justify-center space-x-2" onClick={closeMenu}>
                        <FaHome size={24} />
                        <Link href="/" className="block hover:text-gray-500 transition duration-300 text-xl">
                            Home
                        </Link>
                    </li>
                    <li className="py-4 text-lg flex items-center justify-center space-x-2" onClick={closeMenu}>
                        <FaConciergeBell size={24} />
                        <Link href="/services" className="block hover:text-gray-500 transition duration-300 text-xl">
                            Services
                        </Link>
                    </li>
                    <li className="py-4 text-lg flex items-center justify-center space-x-2" onClick={closeMenu}>
                        <FaPhone size={24} />
                        <Link href="/contact" className="block hover:text-gray-500 transition duration-300 text-xl">
                            Contact
                        </Link>
                    </li>
                    <li className="py-4 text-lg flex items-center justify-center space-x-2" onClick={closeMenu}>
                        <FaImages size={24} />
                        <Link href="/gallery" className="block hover:text-gray-500 transition duration-300 text-xl">
                            Gallery
                        </Link>
                    </li>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;

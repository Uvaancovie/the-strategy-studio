"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo and Title */}
        <div className="flex items-center space-x-3">
          {/* Logo */}
          <Image
            src="/images/logo.png"
            alt="The Strategy Studio Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          {/* Title */}
          <Link href="/" className="text-2xl font-bold text-primary-blue font-poppins">
            The Strategy Studio
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Navigation Links */}
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex md:items-center absolute md:static bg-white md:bg-transparent top-16 left-0 w-full md:w-auto md:mt-0 shadow-md md:shadow-none z-50`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 p-4 md:p-0">
            <li>
              <Link
                href="/who-we-are"
                className="block py-2 px-4 text-gray-700 hover:text-primary-blue hover:bg-gray-100 rounded-md transition"
              >
                Who We Are
              </Link>
            </li>
            <li>
              <Link
                href="/what-we-do"
                className="block py-2 px-4 text-gray-700 hover:text-primary-blue hover:bg-gray-100 rounded-md transition"
              >
                What We Do
              </Link>
            </li>
            <li>
              <Link
                href="/our-clients"
                className="block py-2 px-4 text-gray-700 hover:text-primary-blue hover:bg-gray-100 rounded-md transition"
              >
                Our Clients
              </Link>
            </li>
            <li>
              <Link
                href="/testimonials"
                className="block py-2 px-4 text-gray-700 hover:text-primary-blue hover:bg-gray-100 rounded-md transition"
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link
                href="/contact-us"
                className="block py-2 px-4 text-gray-700 hover:text-primary-blue hover:bg-gray-100 rounded-md transition"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

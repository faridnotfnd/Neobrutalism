import Link from "next/link";
import React, { useState } from "react";
import { FaGithubSquare } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#f8fdef] px-4 sm:px-8 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex-1">
          <button className="btn btn-ghost text-xl sm:text-2xl text-black rounded-lg px-4 sm:px-20 py-2">
            FS .
          </button>
        </div>
        <div className="flex-none">
          {/* Hamburger menu for mobile */}
          <button className="lg:hidden" onClick={toggleMenu}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          {/* Desktop menu */}
          <ul className="hidden lg:flex menu menu-horizontal px-1 mr-0 sm:mr-[140px] text-base sm:text-lg font-medium space-x-4 sm:space-x-8">
            <li>
              <Link
                href="#about"
                scroll={false}
                className="text-gray-600 hover:text-black"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#what-i-do"
                scroll={false}
                className="text-gray-600 hover:text-black"
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                href="#my-work"
                scroll={false}
                className="text-gray-600 hover:text-black"
              >
                Project
              </Link>
            </li>
            <li>
              <Link
                href="#my-work"
                scroll={false}
                className="text-gray-600 hover:text-black"
              >
                Education
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 right-0 bg-[#f8fdef] z-10">
          <ul className="py-2 px-4">
            <li>
              <Link
                href="#about"
                scroll={false}
                className="block py-2 text-gray-600 hover:text-black"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#what-i-do"
                scroll={false}
                className="block py-2 text-gray-600 hover:text-black"
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                href="#my-work"
                scroll={false}
                className="block py-2 text-gray-600 hover:text-black"
              >
                Project
              </Link>
            </li>
            <li>
              <Link
                href="#my-work"
                scroll={false}
                className="block py-2 text-gray-600 hover:text-black"
              >
                Education
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
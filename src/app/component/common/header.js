"use client";

import { FaBars, FaBell, FaTimes } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-[6rem] justify-between">
          <div className="flex">
            <div className="flex flex-shrink-0 items-center">
              <Link href="/" passHref>
                <Image
                  alt="Your Company"
                  src="/mainProfile.jpeg"
                  width={50}
                  height={50}
                  className="h-[6rem] w-auto"
                />
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <Link
              href="/Innovation"
              className="inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-900"
            >
              Innovation
            </Link>
            <Link
              href="/Product"
              className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
            >
              Products
            </Link>
            <Link
              href="/AboutUs"
              className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
            >
              About Us
            </Link>
            {/* <Link
              href="/Services"
              className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
            >
              Services
            </Link> */}
            <Link
              href="/Contact"
              className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
            >
              Contact
            </Link>
          </div>

          <div className="-mr-2 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <FaTimes className="block h-6 w-6" />
              ) : (
                <FaBars className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden">
          <div className="space-y-1 pb-3 pt-2">
            <Link
              href="/"
              className="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700"
            >
              Innovation
            </Link>
            <Link
              href="/"
              className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
            >
              Products
            </Link>
            <Link
              href="/AboutUs"
              className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
            >
              About Us
            </Link>
            <Link
              href="/"
              className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
            >
              Career
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;

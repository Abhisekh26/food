"use client";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Image from 'next/image';
const Footer = () => {
  return (
    <footer className="sticky bg-gray-300 text-gray-950 py-8 ">
      <div className="container mx-auto flex flex-wrap justify-between items-start px-4 md:px-8">
        {/* Logo and About */}
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <Image
            src="/nutrinuts.png"
            alt="Logo"
            width={40}
            height={40}
            className="w-10 h-10 md:w-16 md:h-16 mb-4"
          />
          <p className="text-sm">
            NutriNuts offers premium quality dry fruits, delivering fresh and
            healthy snacks directly to your doorstep. Explore our range of
            nutritious products today!
          </p>
        </div>

        {/* Navigation Links */}
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="text-sm space-y-2">
            <li>
              <Link href="#home" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="#products" className="hover:underline">
                Products
              </Link>
            </li>
            <li>
              <Link href="#about" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#support" className="hover:underline">
                Customer Support
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <p className="text-sm">Email: support@nutrinuts.com</p>
          <p className="text-sm">Phone: +1 234 567 890</p>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://facebook.com"
              className="text-gray-950 hover:text-indigo-600"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="https://twitter.com"
              className="text-gray-950 hover:text-indigo-600"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://instagram.com"
              className="text-gray-950 hover:text-indigo-600"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://linkedin.com"
              className="text-gray-950 hover:text-indigo-600"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="w-full md:w-1/3 mt-6 md:mt-0">
          <h3 className="text-lg font-bold mb-4">
            Subscribe to our Newsletter
          </h3>
          <form className="flex flex-col space-y-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
            <button
              type="submit"
              className="w-full px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="text-center mt-8 text-sm">
        &copy; 2024 NutriNuts. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

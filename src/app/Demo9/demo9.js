"use client";

import { FiFacebook, FiTwitter, FiInstagram, FiSnapchat } from "react-icons/fi";

 function Demo9() {
  return (
    <footer className="bg-gray-200 text-gray-800 pt-10 pb-6">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex flex-wrap justify-between items-center">
          {/* Social Icons */}
          <div className="flex space-x-6">
            <a
              href="https://facebook.com"
              className="text-gray-800 hover:text-gray-600 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiFacebook className="text-2xl" />
            </a>
            <a
              href="https://twitter.com"
              className="text-gray-800 hover:text-gray-600 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiTwitter className="text-2xl" />
            </a>
            <a
              href="https://instagram.com"
              className="text-gray-800 hover:text-gray-600 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiInstagram className="text-2xl" />
            </a>
            <a
              href="https://snapchat.com"
              className="text-gray-800 hover:text-gray-600 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiSnapchat className="text-2xl" />
            </a>
          </div>
          
          {/* Links */}
          <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-10 mt-6 lg:mt-0">
            <a
              href="#contact"
              className="text-gray-800 hover:text-gray-600 transition duration-300"
            >
              Contact Us
            </a>
            <a
              href="#privacy"
              className="text-gray-800 hover:text-gray-600 transition duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#refund"
              className="text-gray-800 hover:text-gray-600 transition duration-300"
            >
              Refund Policy
            </a>
          </div>
        </div>
        <div className="border-t border-gray-300 mt-8"></div>
        <div className="text-center py-4">
          <p className="text-gray-600 text-sm">
            © 2024 NutriNuts. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Demo9;
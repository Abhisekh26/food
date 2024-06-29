"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { FiSearch, FiShoppingCart, FiUser, FiLogIn, FiLogOut, FiUserPlus } from "react-icons/fi";

export default function Demo2() {
  const controls = useAnimation();
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    });
  }, [controls]);

  const handleSearchFocus = () => {
    setIsSearchFocused(true);
  };

  const handleSearchBlur = () => {
    setIsSearchFocused(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Main Section */}
      <section
        id="home"
        className="pt-20 min-h-screen flex items-center justify-center bg-cover bg-center relative overflow-hidden"
        style={{
          backgroundImage: "url('/mixednuts.png')",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          className="bg-white bg-opacity-75 p-8 rounded-lg shadow-lg text-center"
        >
          <motion.h2
            className="text-5xl font-bold"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
          >
            Premium Dry Fruits Delivered Fresh
          </motion.h2>
          <p className="mt-4 text-lg text-gray-700">
            Discover our variety of high-quality dry fruits, perfect for healthy
            snacking and boosting your meals.
          </p>
          <div className="mt-8">
            <motion.a
              href="#products"
              className="relative bg-yellow-500 text-white py-3 px-6 rounded-full hover:bg-yellow-600 transition duration-300 overflow-hidden"
              whileHover={{ scale: 1.02 }}
            >
              <span className="relative z-10">Shop Now</span>
              <motion.div
                className="absolute inset-0 bg-transparent border-2 border-white rounded-full"
                style={{ boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.5)" }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              ></motion.div>
            </motion.a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
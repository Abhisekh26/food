
"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaDiscord, FaWallet } from "react-icons/fa";

const Profile = () => {
  const { name, email, isVerified } = useSelector((state) => state.users);
  const [coins, setCoins] = useState([]);

  const handleIconClick = (iconIndex) => {
    setCoins([...coins, { id: coins.length, iconIndex }]);
    setTimeout(() => {
      setCoins((prevCoins) => prevCoins.filter((coin) => coin.id !== coins.length));
    }, 1000); // Adjust timing as needed
  };

  return (
    <div className="flex flex-col items-center mt-14 mb-16">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-5xl w-full bg-white rounded-xl shadow-2xl p-8 space-y-8"
      >
        <h2 className="text-center text-4xl font-extrabold text-gray-800 mb-8">
          Profile
        </h2>
        
        <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0">
          <div className="bg-gradient-to-r from-blue-800 to-purple-600 rounded-xl shadow-xl p-6 w-full">
            <h3 className="text-2xl font-semibold text-white mb-4">Personal Information</h3>
            <form className="space-y-6">
              <div className="relative">
                <input
                  placeholder="First Name"
                  className="peer h-10 w-full border-b-2 border-gray-300 text-gray-800 bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
                  required
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={name.split(" ")[0] || ""}
                  readOnly
                />
                <label
                  className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm"
                  htmlFor="firstName"
                >
                  First Name
                </label>
              </div>
              <div className="relative">
                <input
                  placeholder="Last Name"
                  className="peer h-10 w-full border-b-2 border-gray-300 text-gray-800 bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
                  required
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={name.split(" ")[1] || ""}
                  readOnly
                />
                <label
                  className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm"
                  htmlFor="lastName"
                >
                  Last Name
                </label>
              </div>
              <div className="relative">
                <input
                  placeholder="Email"
                  className="peer h-10 w-full border-b-2 border-gray-300 text-gray-800 bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
                  required
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  readOnly
                />
                <label
                  className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm"
                  htmlFor="email"
                >
                  Email
                </label>
              </div>
            </form>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-blue-800 rounded-xl shadow-xl p-6 w-full">
            <h3 className="text-2xl font-semibold text-white mb-4">Verification Status</h3>
            <div className="text-white">
              {isVerified ? (
                <p>Your email is verified.</p>
              ) : (
                <p>
                  Your email is not verified.{" "}
                  <Link href="/verify-email" passHref>
                    <span className="text-purple-300 hover:underline cursor-pointer">
                      Get your email verified
                    </span>
                  </Link>
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-800 to-purple-600 rounded-xl shadow-xl p-6 w-full">
          <h3 className="text-2xl font-semibold text-white mb-4">Earn Rewards</h3>
          <div className="text-center text-white">
            <p>Follow us on our social media pages to earn 100 coins!</p>
            <div className="flex space-x-6 justify-center mt-4 relative">
              <FaFacebook size={30} className="hover:text-blue-400 cursor-pointer transition-colors" onClick={() => handleIconClick(0)} />
              <FaTwitter size={30} className="hover:text-blue-400 cursor-pointer transition-colors" onClick={() => handleIconClick(1)} />
              <FaInstagram size={30} className="hover:text-pink-400 cursor-pointer transition-colors" onClick={() => handleIconClick(2)} />
              <FaDiscord size={30} className="hover:text-purple-400 cursor-pointer transition-colors" onClick={() => handleIconClick(3)} />
              <FaWallet size={30} className="hover:text-yellow-400 cursor-pointer transition-colors" />
              <AnimatePresence>
                {coins.map((coin) => (
                  <motion.div
                    key={coin.id}
                    initial={{ opacity: 0, x: 0, y: 0, scale: 1 }}
                    animate={{ opacity: 1, x: 0, y: -150, scale: 1.5 }}
                    exit={{ opacity: 0, y: -200, scale: 2 }}
                    transition={{ duration: 1 }}
                    className="absolute top-0 text-3xl"
                    style={{ left: `${coin.iconIndex * 50}px` }}
                  >
                    💰
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Profile;

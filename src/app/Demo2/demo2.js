"use client";
import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

export default function Demo2() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    });
  }, [controls]);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="py-6 bg-gray-800 text-white">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">DryFruits</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#home" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#products" className="hover:underline">
                  Products
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section
        id="home"
        className="min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://via.placeholder.com/1920x1080?text=Dry+Fruits+Background')",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          className="bg-white bg-opacity-75 p-8 rounded-lg shadow-lg text-center"
        >
          <h2 className="text-5xl font-bold">
            Premium Dry Fruits Delivered Fresh
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            Discover our variety of high-quality dry fruits, perfect for healthy
            snacking and boosting your meals.
          </p>
          <div className="mt-8">
            <a
              href="#products"
              className="bg-yellow-500 text-white py-3 px-6 rounded-full hover:bg-yellow-600 transition duration-300"
            >
              Shop Now
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

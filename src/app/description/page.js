"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import FrequentlyBoughtCard from '../frequently/frequently';


const Description = () => {
  const [selectedImage, setSelectedImage] = useState('/apricots.png');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    '/Dates.png',
    '/cashew.png',
    '/almonds.jpg',
    '/apricots.png',
    '/walnuts.png',
    '/raisins.png',
  ];

  const frequentlyBoughtItems = [
    {
      image: '/product1.jpg',
      name: 'Product 1',
      price: 299,
    },
    {
      image: '/product2.jpg',
      name: 'Product 2',
      price: 399,
    },
    {
      image: '/product3.jpg',
      name: 'Product 3',
      price: 499,
    },
  ];

  const openModal = (index) => {
    setSelectedImage(images[index]);
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[newIndex]);
    setCurrentIndex(newIndex);
  };

  const handlePrev = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[newIndex]);
    setCurrentIndex(newIndex);
  };

  return (
    <div className="bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto bg-white p-6 rounded-md shadow-md">
        <div className="flex flex-col lg:flex-row">
          {/* Product Images */}
          <div className="flex-shrink-0 flex flex-col space-y-2 mr-4">
            {images.map((image, index) => (
              <motion.img
                key={index}
                src={image}
                alt={`Product Thumbnail ${index + 1}`}
                className="w-32 h-32 object-cover cursor-pointer"
                onClick={() => openModal(index)}
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.2 }}
              />
            ))}
          </div>
          <motion.img
            src={selectedImage}
            alt="Selected Product"
            className="w-80 h-80 object-cover cursor-pointer"
            onClick={() => openModal(currentIndex)}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />

          {/* Product Details */}
          <div className="flex-grow ml-6 mt-6 lg:mt-0">
            <h1 className="text-4xl font-semibold mb-2">Product Name</h1>
            <p className="text-gray-700 mb-4">
              Brand: <span className="font-medium">Brand Name</span>
            </p>
            <p className="text-gray-700 mb-4">Rating: ★★★★☆</p>
            <p className="text-gray-700 mb-4" style={{ textDecoration: 'line-through' }}>
              Original Price: <span className="text-xl font-bold text-green-600">₹99.99</span>
            </p>
            <p>
              Special Price: <span className="text-xl font-bold text-green-600">₹99.99</span>
            </p>

            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Available offers</h2>
              <div className="p-2 rounded-md">
                <p className="text-gray-700">
                  Get 10% cashback on <span className="text-indigo-500">HDFC Bank Credit Cards</span>.. Offer valid till July 31, 2024.
                  <Link href="https://www.hdfcbank.com/" target="_blank" className="text-indigo-500">T&C</Link>
                </p>
                <p className="text-gray-700">
                  Get 10% cashback on <span className="text-indigo-500">SBI Bank Credit Cards</span>.. Offer valid till July 31, 2024.
                  <Link href="https://www.onlinesbi.sbi/" target="_blank" className="text-indigo-500">T&C</Link>
                </p>
                <p className="text-gray-700">
                  Get 10% cashback on <span className="text-indigo-500">ICICI Bank Credit Cards</span>.. Offer valid till July 31, 2024.
                  <Link href="https://www.icicibank.com/" target="_blank" className="text-indigo-500">T&C</Link>
                </p>
              </div>
            </div>

            <div className="flex flex-col space-y-4 pt-4">
              <div className="flex items-center space-x-2">
                <label htmlFor="size-250g" className="text-gray-700">250g:</label>
                <input type="number" id="size-250g" className="border border-gray-300 rounded-md p-1" />
              </div>
              <div className="flex items-center space-x-2">
                <label htmlFor="size-500g" className="text-gray-700">500g:</label>
                <input type="number" id="size-500g" className="border border-gray-300 rounded-md p-1" />
              </div>
              <div className="flex items-center space-x-2">
                <label htmlFor="size-1kg" className="text-gray-700">1000g:</label>
                <input type="number" id="size-1kg" className="border border-gray-300 rounded-md p-1 pr-2" />
              </div>
            </div>
            <p className="text-gray-700 pt-4 mb-4">
              Available: <span className="text-green-600">In Stock</span>
            </p>
            <span>
              <button className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600">Add to Cart</button>
              <button className="bg-indigo-500 text-white py-2 px-4 ml-6 rounded-md hover:bg-yellow-600">Wishlist</button>
            </span>

            {/* Product Description */}
            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-2">Product Description</h2>
              <p className="text-gray-700">
                This is a detailed description of the product. It provides all the necessary information that a potential buyer would need to make an informed decision.
              </p>
            </div>

            {/* Frequently Bought Together Items */}
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Frequently Bought Together</h2>
              <div className="space-y-4">
                {frequentlyBoughtItems.map((item, index) => (
                  <FrequentlyBoughtCard
                    key={index}
                    image={item.image}
                    name={item.name}
                    price={item.price}
                  />
                ))}
              </div>
            </div>

            {/* Product Reviews */}
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Customer Reviews</h2>
              <div className="space-y-4">
                <div className="p-4 bg-gray-100 rounded-md">
                  <p className="font-medium">John Doe</p>
                  <p className="text-gray-700">★★★★☆ - Great product, highly recommend!</p>
                </div>
                <div className="p-4 bg-gray-100 rounded-md">
                  <p className="font-medium">Jane Smith</p>
                  <p className="text-gray-700">★★★☆☆ - Good quality but a bit expensive.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="bg-white p-6 rounded-md shadow-md max-w-lg mx-auto relative">
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                onClick={closeModal}
              >
                ✕
              </button>
              <motion.img
                src={selectedImage}
                alt="Selected Product Modal"
                className="w-full h-auto object-cover"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              />
              <div className="flex justify-between mt-4">
                <button
                  className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600"
                  onClick={handlePrev}
                >
                  Previous
                </button>
                <button
                  className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600"
                  onClick={handleNext}
                >
                  Next
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Description;

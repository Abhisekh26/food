


"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Description = () => {
  const [selectedImage, setSelectedImage] = useState('/apricots.png');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    '/Dates.png',
    '/cashew.png',
    '/almonds.jpg',
    '/apricots.png',
    '/walnuts.png' ,
    '/raisins.png'
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
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
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
            <h1 className="text-2xl font-semibold mb-2">Product Name</h1>
            <p className="text-gray-700 mb-4">Brand: <span className="font-medium">Brand Name</span></p>
            <p className="text-gray-700 mb-4">Rating: ★★★★☆</p>
            <p className="text-gray-700 mb-4">Price: <span className="text-xl font-bold text-green-600">$99.99</span></p>
            <p className="text-gray-700 mb-4">Available: <span className="text-green-600">In Stock</span></p>
            <button className="bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600">Add to Cart</button>

            {/* Product Description */}
            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-2">Product Description</h2>
              <p className="text-gray-700">This is a detailed description of the product. It provides all the necessary information that a potential buyer would need to make an informed decision.</p>
            </div>
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

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white p-8 rounded-md shadow-lg max-w-2xl w-full relative"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                onClick={closeModal}
              >
                ×
              </button>
              <motion.img
                src={selectedImage}
                alt="Selected Product"
                className="w-full h-auto object-cover"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              />
              <button
                className="absolute top-1/2 transform -translate-y-1/2 left-4 text-gray-500 hover:text-gray-700"
                onClick={handlePrev}
                style={{ zIndex: 10 }}
              >
                {'<'}
              </button>
              <button
                className="absolute top-1/2 transform -translate-y-1/2 right-4 text-gray-500 hover:text-gray-700"
                onClick={handleNext}
                style={{ zIndex: 10 }}
              >
                {'>'}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Description;

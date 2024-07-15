
"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../reduxStore/cartSlice";

const Description = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const selector = useSelector((state) => state.product.detail);

  const cartSelector = useSelector((state) => state.carts.cartItems);
  const dispatch = useDispatch();
  const [selectedImage, setSelectedImage] = useState(selector.imageUrl);
  const images = [
    selector.imageUrl,
    selector.image1,
    selector.image2,
    selector.image3,
    selector.image4,
  ].filter((image) => image);

  const [quantities, setQuantities] = useState({
    250: selector.squantity ? selector.squantity.quantity || 0 : 0,
    500: selector.mquantity ? selector.mquantity.quantity || 0 : 0,
    1000: selector.lquantity ? selector.lquantity.quantity || 0 : 0,
  });

  const handleQuantityChange = (size, value) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [size]: value,
    }));
  };

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

 
  const addCart = (size) => {
    const quantity = parseInt(quantities[size], 10);
    if (quantity > 0) {
      dispatch(cartActions.addCart({ product: selector, size, quantity }));
    }
    console.log(cartSelector);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 pl-40">
      <div className="max-w-6xl w-full bg-white p-6 rounded-md shadow-md">
        <div className="flex flex-col lg:flex-row">
          {/* Product Images */}
          <div className="flex-shrink-0 flex flex-col space-y-2 mr-4">
            {images.map((image, index) => (
              <motion.img
                key={index}
                src={image}
                alt={`Product Thumbnail ${index + 1}`}
                className="w-48 h-48 object-cover cursor-pointer"
                onClick={() => openModal(index)}
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.2 }}
              />
            ))}
          </div>
          <motion.img
            src={selectedImage}
            alt="Selected Product"
            className="w-96 h-96 object-cover cursor-pointer"
            onClick={() => openModal(currentIndex)}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />

          {/* Product Details */}
          <div className="flex-grow ml-6 mt-6 lg:mt-0">
            <h1 className="text-4xl font-semibold mb-2">{selector.title}</h1>
            <p className="text-gray-700 mb-4">
              Brand: <span className="font-medium">{selector.brand}</span>
            </p>
            <p className="text-gray-700 mb-4">Rating: {selector.rating}</p>
            <p
              className="text-gray-700 mb-4"
              style={{ textDecoration: "line-through" }}
            >
              Original Price:{" "}
              <span className="text-xl font-bold text-green-600">
                ₹{selector.oldPrice}
              </span>
            </p>
            <p>
              Special Price:{" "}
              <span className="text-xl font-bold text-green-600">
                ₹{selector.newPrice}
              </span>
            </p>





            <p className="text-sm text-gray-500 mt-1">
              * Price shown is for 1000 grams
            </p>










            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Available offers</h2>
              <div className="p-2 rounded-md">
                <p className="text-gray-700">
                  Get 10% cashback on{" "}
                  <span className="text-indigo-500">
                    HDFC Bank Credit Cards
                  </span>
                  .. Offer valid till July 31, 2024.
                  <Link
                    href="https://www.hdfcbank.com/"
                    target="_blank"
                    className="text-indigo-500"
                  >
                    T&C
                  </Link>
                </p>
                <p className="text-gray-700">
                  Get 10% cashback on{" "}
                  <span className="text-indigo-500">SBI Bank Credit Cards</span>
                  .. Offer valid till July 31, 2024.
                  <Link
                    href="https://www.onlinesbi.sbi/"
                    target="_blank"
                    className="text-indigo-500"
                  >
                    T&C
                  </Link>
                </p>
                <p className="text-gray-700">
                  Get 10% cashback on{" "}
                  <span className="text-indigo-500">
                    ICICI Bank Credit Cards
                  </span>
                  .. Offer valid till July 31, 2024.
                  <Link
                    href="https://www.icicibank.com/"
                    target="_blank"
                    className="text-indigo-500"
                  >
                    T&C
                  </Link>
                </p>
              </div>
            </div>

            <div className="flex flex-col space-y-4 pt-4">
              <div className="flex items-center space-x-2">
                <label htmlFor="size-250g" className="text-gray-700">
                  250g:
                </label>
                <input
                  type="number"
                  id="size-250g"
                  className="border border-gray-300 rounded-md p-1"
                  value={quantities[250]}
                  onChange={(e) =>
                    handleQuantityChange(250, parseInt(e.target.value))
                  }
                />
                <button
                  className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600"
                  onClick={() => addCart(250)}
                >
                  Add to Cart
                </button>
              </div>
              <div className="flex items-center space-x-2">
                <label htmlFor="size-500g" className="text-gray-700">
                  500g:
                </label>
                <input
                  type="number"
                  id="size-500g"
                  className="border border-gray-300 rounded-md p-1 "
                  value={quantities[500]}
                  onChange={(e) =>
                    handleQuantityChange(500, parseInt(e.target.value))
                  }
                />
                <button
                  className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600"
                  onClick={() => addCart(500)}
                >
                  Add to Cart
                </button>
              </div>
              <div className="flex items-center space-x-2">
                <label htmlFor="size-1kg" className="text-gray-700">
                  1000g:
                </label>
                <input
                  type="number"
                  id="size-1kg"
                  className="border border-gray-300 rounded-md p-1 pr-2"
                  value={quantities[1000]}
                  onChange={(e) =>
                    handleQuantityChange(1000, parseInt(e.target.value))
                  }
                />
                <button
                  className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600"
                  onClick={() => addCart(1000)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
            <p className="text-gray-700 pt-4 mb-4">
              Available: <span className="text-green-600">In Stock</span>
            </p>
            <span>
              <button className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600">
                Wishlist
              </button>
            </span>

            {/* Product Description */}
            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-2">
                Product Description
              </h2>
              <p className="text-gray-700">
                This is a detailed description of the product. It provides all
                the necessary information that a potential buyer would need to
                make an informed decision.
              </p>
            </div>

            {/* Product Reviews */}
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Customer Reviews</h2>
              <div className="space-y-4">
                <div className="p-4 bg-gray-100 rounded-md">
                  <p className="font-medium">John Doe</p>
                  <p className="text-gray-700">
                    ★★★★☆ - Great product, highly recommend!
                  </p>
                </div>
                <div className="p-4 bg-gray-100 rounded-md">
                  <p className="font-medium">Jane Smith</p>
                  <p className="text-gray-700">
                    ★★★☆☆ - Good quality but a bit expensive.
                  </p>
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
            <div className="bg-white p-6 rounded-md shadow-md max-w-4xl w-full mx-auto relative">
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                onClick={closeModal}
              >
                ✕
              </button>
              <motion.img
                src={selectedImage}
                alt="Selected Product Modal"
                className="w-full h-full object-cover"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              />
              <button
                className="absolute top-1/2 transform -translate-y-1/2 left-2 flex items-center bg-gray-800 text-white rounded-full p-2"
                onClick={handlePrev}
              >
                {"<"}
              </button>
              <button
                className="absolute top-1/2 transform -translate-y-1/2 right-2 flex items-center bg-gray-800 text-white rounded-full p-2"
                onClick={handleNext}
              >
                {">"}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Description;

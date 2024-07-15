

import React from "react";
import { FaTimes } from "react-icons/fa";
import { useSelector } from "react-redux";
import { CartCard } from "./cartresultcard";

const CartModal = ({ onClose }) => {
  const cartItems = useSelector((state) => state.carts.cartItems);

  // Calculate total bill for all items in the cart
  const totalBill = cartItems.reduce((total, item) => {
    return total + item.newPrice * item.quantity;
  }, 0);

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center">
      <div className="fixed right-0 h-full w-2/5 bg-gray-300 shadow-lg">
        <div className="absolute top-4 right-4 z-10">
          <button
            onClick={onClose}
            className="h-8 w-8 cursor-pointer rounded-full bg-neutral-700 text-white flex items-center justify-center"
          >
            <FaTimes />
          </button>
        </div>
        <div className="relative h-full overflow-y-scroll p-4 pt-12">
          <div className="mx-auto max-w-md space-y-4 text-gray-950">
            <h2 className="text-4xl font-bold text-gray-950">
              Your Shopping Cart
            </h2>
            {cartItems.length === 0 ? (
              <p>Your cart is currently empty.</p>
            ) : (
              cartItems.map((item) => (
                <CartCard
                  key={`${item.title}-${item.size}`}
                  title={item.title}
                  description={item.description}
                  oldPrice={item.oldPrice}
                  newPrice={item.newPrice}
                  image1={item.image1}
                  quantity={item.quantity}
                  size={item.size}
                />
              ))
            )}
            {cartItems.length > 0 && (
              <div className="bg-gray-100 p-4 rounded-md mt-4">
                <h2 className="text-xl font-bold">Total Bill: ${totalBill}</h2>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;

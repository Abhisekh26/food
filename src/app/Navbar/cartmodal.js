
import React from "react";
import { FaTimes } from "react-icons/fa";
import { useSelector } from "react-redux";
import { CartCard } from "./cartresultcard";


const CartModal = ({ onClose }) => {
  const cartItemss = useSelector((state) => state.carts.cartItems);

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
            {cartItemss.length === 0 ? (
              <p>Your cart is currently empty.</p>
            ) : (
              cartItemss.map((item) => (
                <CartCard
                  key={item.title}
                  title={item.title}
                  description={item.description}
                  oldPrice={item.oldPrice}
                  newPrice={item.newPrice}
                  image1={item.image1}
                  quantity={item.quantity}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;

import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../reduxStore/cartSlice";

const CartCard = ({
  title,
  description,
  oldPrice,
  newPrice,
  image1,
  quantity,
  size,
}) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(cartActions.incrementItem({ title, size }));
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      dispatch(cartActions.decrementItem({ title, size }));
    }
  };

  const handleDelete = () => {
    dispatch(cartActions.removeItem({ title, size }));
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4 flex items-center cursor-pointer">
      {image1 && (
        <img
          src={image1}
          alt={title}
          className="w-16 h-16 rounded-full object-cover mr-4"
        />
      )}
      <div className="flex-1">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <div className="flex justify-between mb-2">
          <p className="text-gray-700">{description}</p>
        </div>
        <div className="flex justify-between mb-2">
          <p className="text-gray-700 line-through">Price: ${oldPrice}</p>
          <p className="text-green-600 font-semibold">Offer Price: ${newPrice}</p>
        </div>
        <div className="flex items-center mb-2">
          <p className="text-gray-700">Size: {size}g</p>
        </div>
        <div className="flex items-center mb-2">
          <button
            className="bg-gray-200 text-gray-700 px-2 py-1 rounded-lg"
            onClick={handleDecrement}
          >
            -
          </button>
          <span className="mx-2">{quantity}</span>
          <button
            className="bg-gray-200 text-gray-700 px-2 py-1 rounded-lg"
            onClick={handleIncrement}
          >
            +
          </button>
        </div>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-lg"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export { CartCard };

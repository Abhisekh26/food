"use client";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filteerActions } from "../reduxStore/filterSlices";

const Sidebar = ({ applyFilters }) => {
  const [price, setPrice] = useState(0);
  const [rating, setRating] = useState(1);
  const [popularity, setPopularity] = useState("low");
  const [promotion, setPromotion] = useState(false);
  // const selector = useSelector((state) => state.filteredData.target);
  const dispatch = useDispatch();

  const handleApplyFilters = (e) => {
    applyFilters({ price, rating, popularity, promotion });
    console.log(e.target.value);
  };

  function priceHandler(e) {
    e.preventDefault();
    setPrice(e.target.value);
    dispatch(filteerActions.filterPrice(e.target.value));
    // console.log(selector)
    // console.log(e.target.value);
  }

  function ratingHandler(e) {
    e.preventDefault();
    setRating(e.target.value)
    dispatch(filteerActions.filteruserRating(e.target.value))
  }

  function popularityHandler(e) {
    e.preventDefault();
    setPopularity(e.target.value);
    console.log(e.target.value);
  }

  function promotionHandler(e) {
    e.preventDefault();
    setPromotion(e.target.value);
    console.log(e.target.value);
  }

  return (
    <div className="w-full md:w-64 p-4 bg-gray-200 border-r border-gray-300 h-full md:h-screen md:sticky top-0 left-0 overflow-y-auto">
      <h2 className="text-xl md:text-2xl mb-4">Filters</h2>

      <div className="mb-4">
        <label htmlFor="price" className="text-md md:text-lg mb-2 block">
          Price
        </label>
        <input
          id="price"
          type="range"
          min="500"
          max="1500"
          step="1"
          value={price}
          onChange={priceHandler}
          className="w-full"
        />
        <div className="text-right text-sm md:text-base">{price}</div>
      </div>
      <div className="mb-4">
        <label htmlFor="rating" className="text-md md:text-lg mb-2 block">
          User Rating
        </label>
        <input
          id="rating"
          type="range"
          min="1"
          max="5"
          step="1"
          value={rating}
          onChange={ratingHandler}
          className="w-full"
        />
        <div className="text-right text-sm md:text-base">{rating}</div>
      </div>
      <div className="mb-4">
        <label htmlFor="popularity" className="text-md md:text-lg mb-2 block">
          Popularity
        </label>
        <select
          id="popularity"
          value={popularity}
          onChange={popularityHandler}
          className="w-full p-2 border border-gray-300 rounded"
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="promotion" className="text-md md:text-lg mb-2 block">
          BestSellers
        </label>
        <label className="inline-flex items-center">
          <input
            id="promotion"
            type="checkbox"
            checked={promotionHandler}
            onChange={(e) => setPromotion(e.target.checked)}
            className="form-checkbox"
          />
          <span className="ml-2">BestSellers</span>
        </label>
      </div>
      <button
        onClick={handleApplyFilters}
        className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Apply Filters
      </button>
    </div>
  );
};

export default Sidebar;

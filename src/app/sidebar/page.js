
"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { filterDataActions } from "../reduxStore/filterSlice";

const Sidebar = () => {
  const [price, setPrice] = useState("all");
  const [rating, setRating] = useState("all");
  const [promotion, setPromotion] = useState(false);
  const dispatch = useDispatch();

  const priceHandler = (e) => {
    setPrice(e.target.value);
    dispatch(filterDataActions.filterPrice(e.target.value));
  };

  const ratingHandler = (e) => {
    setRating(e.target.value);
    dispatch(filterDataActions.filterRating(e.target.value));
  };

  const promotionHandler = (e) => {
    setPromotion(e.target.checked);
    dispatch(filterDataActions.filterBestseller(e.target.checked));
  };

  const resetFilters = () => {
    setPrice("all");
    setRating("all");
    setPromotion(false);
    dispatch(filterDataActions.resetFilters());
  };

  return (
    <div className="w-full md:w-64 p-4 bg-gray-200 border-r border-gray-300 h-full md:h-screen md:sticky top-0 left-0 overflow-y-auto">
      <h2 className="text-xl md:text-2xl mb-4">Filters</h2>

      <div className="mb-4">
        <label className="text-md md:text-lg mb-2 block">Price</label>
        <div>
          <button
            className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium leading-4 ${
              price === "all" ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-700"
            }`}
            onClick={resetFilters}
          >
            All
          </button>
        </div>
        <div>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="price"
              value="0-500"
              checked={price === "0-500"}
              onChange={priceHandler}
              className="form-radio"
            />
            <span className="ml-2">0 - 500</span>
          </label>
        </div>
        <div>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="price"
              value="501-1000"
              checked={price === "501-1000"}
              onChange={priceHandler}
              className="form-radio"
            />
            <span className="ml-2">501 - 1000</span>
          </label>
        </div>
        <div>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="price"
              value="1001-1500"
              checked={price === "1001-1500"}
              onChange={priceHandler}
              className="form-radio"
            />
            <span className="ml-2">1001 - 1500</span>
          </label>
        </div>
      </div>

      <div className="mb-4">
        <label className="text-md md:text-lg mb-2 block">User Rating</label>
        <div>
          <button
            className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium leading-4 ${
              rating === "all" ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-700"
            }`}
            onClick={resetFilters}
          >
            All
          </button>
        </div>
        <div>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="rating"
              value="1"
              checked={rating === "1"}
              onChange={ratingHandler}
              className="form-radio"
            />
            <span className="ml-2">1</span>
          </label>
        </div>
        <div>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="rating"
              value="2"
              checked={rating === "2"}
              onChange={ratingHandler}
              className="form-radio"
            />
            <span className="ml-2">2</span>
          </label>
        </div>
        <div>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="rating"
              value="3"
              checked={rating === "3"}
              onChange={ratingHandler}
              className="form-radio"
            />
            <span className="ml-2">3</span>
          </label>
        </div>
        <div>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="rating"
              value="4"
              checked={rating === "4"}
              onChange={ratingHandler}
              className="form-radio"
            />
            <span className="ml-2">4</span>
          </label>
        </div>
        <div>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="rating"
              value="5"
              checked={rating === "5"}
              onChange={ratingHandler}
              className="form-radio"
            />
            <span className="ml-2">5</span>
          </label>
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="promotion" className="text-md md:text-lg mb-2 block">
          BestSellers
        </label>
        <label className="inline-flex items-center">
          <input
            id="promotion"
            type="checkbox"
            checked={promotion}
            onChange={promotionHandler}
            className="form-checkbox"
          />
          <span className="ml-2">BestSellers</span>
        </label>
      </div>

      <button
        onClick={resetFilters}
        className="w-full py-2 bg-gray-500 text-white rounded hover:bg-gray-700"
      >
        Reset Filters
      </button>
    </div>
  );
};

export default Sidebar;

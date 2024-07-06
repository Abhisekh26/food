"use client"
import { useState } from 'react';

const Sidebar = ({ applyFilters }) => {
  const [price, setPrice] = useState(0);
  const [rating, setRating] = useState(1);
  const [popularity, setPopularity] = useState('low');
  const [promotion, setPromotion] = useState(false);

  const handleApplyFilters = () => {
    applyFilters({ price, rating, popularity, promotion });
  };

  return (
    <div className="w-64 p-4 bg-gray-100 border-r border-gray-300 h-screen sticky top-0 left-0 overflow-y-auto">
      <h2 className="text-2xl mb-4">Filters</h2>
      
      <div className="mb-4">
        <h3 className="text-lg mb-2">Price</h3>
        <input
          type="range"
          min="0"
          max="100"
          step="1"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full"
        />
      </div>
      <div className="mb-4">
        <h3 className="text-lg mb-2">User Rating</h3>
        <input
          type="range"
          min="1"
          max="5"
          step="1"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          className="w-full"
        />
      </div>
      <div className="mb-4">
        <h3 className="text-lg mb-2">Popularity</h3>
        <select
          value={popularity}
          onChange={(e) => setPopularity(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
      <div className="mb-4">
        <h3 className="text-lg mb-2">Promotion</h3>
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            checked={promotion}
            onChange={(e) => setPromotion(e.target.checked)}
            className="form-checkbox"
          />
          <span className="ml-2">On Promotion</span>
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




// function Sidebar(){
//   return(
//     <div>
//       sidebar page 
//     </div>
//   )
// }
// export default Sidebar
import React from 'react';
import Image from 'next/image';
const FrequentlyBoughtCard = ({ image, name, price }) => {
  return (
    <div className="bg-white rounded-md shadow-md p-4 relative flex items-center space-x-4">
      <input
        type="checkbox"
        className="absolute top-2 right-2 cursor-pointer"
      />
      <Image src={image} alt={name} height={30} width={30}className="w-16 h-16 object-cover rounded-md" />
      <div>
        <h3 className="text-lg font-semibold mb-1">{name}</h3>
        <p className="text-gray-700">Price: ₹{price}</p>
      </div>
    </div>
  );
};

export default FrequentlyBoughtCard;

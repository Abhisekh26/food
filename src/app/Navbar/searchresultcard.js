


// import React from "react";

// const SearchResultCard = ({ title, description, oldprice, newprice, image }) => {
//   return (
//     <div className="bg-white rounded-lg shadow-md p-4 mb-4 flex items-center">
//       {image && (
//         <img
//           src={image}
//           alt={title}
//           className="w-16 h-16 rounded-full object-cover mr-4"
//         />
//       )}
//       <div className="flex-1">
//         <h3 className="text-xl font-bold mb-2">{title}</h3>
//         <div className="flex justify-between mb-2">
//           <p className="text-gray-700">{description}</p>
//         </div>
//         <div className="flex justify-between">
//           <p className="text-gray-700 line-through">Price: ${oldprice}</p>
//           <p className="text-green-600 font-semibold">Offer Price: ${newprice}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export { SearchResultCard };




import React from "react";

const SearchResultCard = ({ title, description, oldprice, newprice, image }) => {
  const handleClick = () => {
    console.log(`Clicked on ${title} card`);
    // Replace with navigation logic to product description page
  };

  return (
    <div
      className="bg-white rounded-lg shadow-md p-4 mb-4 flex items-center cursor-pointer"
      onClick={handleClick}
    >
      {image && (
        <img
          src={image}
          alt={title}
          className="w-16 h-16 rounded-full object-cover mr-4"
        />
      )}
      <div className="flex-1">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <div className="flex justify-between mb-2">
          <p className="text-gray-700">{description}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-700 line-through">Price: ${oldprice}</p>
          <p className="text-green-600 font-semibold">Offer Price: ${newprice}</p>
        </div>
      </div>
    </div>
  );
};

export { SearchResultCard };

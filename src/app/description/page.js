import React from 'react';

const Description = () => {
  return (
    <div className="bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto bg-white p-6 rounded-md shadow-md">
        <div className="flex flex-col lg:flex-row">
          {/* Product Images */}
          <div className="flex-shrink-0">
            <img 
              src="https://via.placeholder.com/400"
              alt="Product"
              className="w-64 h-64 object-cover"
            />
            <div className="flex space-x-2 mt-2">
              <img 
                src="https://via.placeholder.com/100"
                alt="Product Thumbnail"
                className="w-16 h-16 object-cover"
              />
              <img 
                src="https://via.placeholder.com/100"
                alt="Product Thumbnail"
                className="w-16 h-16 object-cover"
              />
              <img 
                src="https://via.placeholder.com/100"
                alt="Product Thumbnail"
                className="w-16 h-16 object-cover"
              />
            </div>
          </div>

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
    </div>
  );
};

export default Description;

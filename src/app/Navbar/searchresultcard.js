import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductdetailSlice, { ProductdetailSliceAction } from "../reduxStore/productdetailclice";
import Image from 'next/image';
const SearchResultCard = ({
  title,
  description,
  oldPrice,
  newPrice,
  image1,
  imageUrl,
  image2,
  image3,
  image4,
  isBestSeller,
  lquantity,
  mquantity,
  squantity,
  rating,
}) => {


  const dataDetail={ title,
    imageUrl,
    image1,
    image2,
    image3,
    image4,
    oldPrice,
    newPrice,
    rating,
    isBestSeller,
    lquantity,
    mquantity,
    squantity,}

const router=useRouter()
const path=usePathname()
const selector=useSelector((state)=>state.product.detail)
const dispatch=useDispatch()


  const handleClick = () => {
    router.push(`/search/${title}`);
    dispatch(ProductdetailSliceAction.productdetail(dataDetail))
    console.log(`Clicked on ${title} card`);
  };

  return (
    <div
      className="bg-white rounded-lg shadow-md p-4 mb-4 flex items-center cursor-pointer"
      onClick={handleClick}
    >
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
        <div className="flex justify-between">
          <p className="text-gray-700 line-through">Price: ${oldPrice}</p>
          <p className="text-green-600 font-semibold">
            Offer Price: ${newPrice}
          </p>
        </div>
      </div>
    </div>
  );
};

export { SearchResultCard };

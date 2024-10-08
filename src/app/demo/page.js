"use client";
import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { AiFillStar } from "react-icons/ai";
import { useSelect } from "@react-three/drei";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";

import { usePathname, useRouter } from "next/navigation";
import ProductdetailSlice, {
  ProductdetailSliceAction,
} from "../reduxStore/productdetailclice";


const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = ({
  title,
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
  squantity,
}) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xSpring = useSpring(x);
  const ySpring = useSpring(y);
  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;
  const router = useRouter();
  const path = usePathname();
  const selector = useSelector((state) => state.product.detail);

  const dispatch = useDispatch();

  const lquantityValue = parseInt(lquantity.quantity, 10) || 0;
  const mquantityValue = parseInt(mquantity.quantity, 10) || 0;
  const squantityValue = parseInt(squantity.quantity, 10) || 0;
  const totalItems = lquantityValue + mquantityValue + squantityValue;

  const dataDetail = {
    title,
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
    squantity,
    totalItems,
  };
  // console.log(dataDetail)

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleClick = () => {
    router.push(`${path}/${title}`);
    dispatch(ProductdetailSliceAction.productdetail(dataDetail));
  };

  return (
    <a href="#" onClick={handleClick} style={{ textDecoration: "none" }}>
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transformStyle: "preserve-3d",
          transform,
        }}
        className="relative h-[30rem] w-[22rem] rounded-xl bg-gradient-to-br from-indigo-300 to-violet-300 pr-10 "
      >
        <div
          style={{
            transform: "translateZ(75px)",
            transformStyle: "preserve-3d",
          }}
          className="absolute inset-4 rounded-xl bg-white shadow-lg "
        >
          {isBestSeller === "yes" && (
            <div
              className="absolute top-0 right-0 bg-yellow-400 text-white px-2 py-1 rounded-bl-md"
              style={{ zIndex: 10 }}
            >
              <span className="text-xs">Best Seller</span>
            </div>
          )}
          <Image
            src={imageUrl}
            alt={title}
            width={30}
            height={40}
            className="w-full h-48 object-cover rounded-t-lg relative"
          />
          <div
            style={{
              transform: "translateZ(75px)",
            }}
            className="p-4 text-center flex flex-col items-center"
          >
            <h1 className="text-2xl font-bold mb-2 text-gray-500">{title}</h1>
            <div className="text-lg mb-2">
              <span
                className="block text-gray-500 mb-1"
                style={{ textDecoration: "line-through" }}
              >
                Original Price: ₹{oldPrice}
              </span>
              <span className="text-green-500 font-bold">
                Discounted Price: ₹{newPrice}
              </span>
            </div>
            <div className="mt-2 flex items-center">
              <p className="text-sm text-gray-600">
                Ratings:{" "}
                {Array.from({ length: 5 }).map((_, index) => (
                  <span key={index}>
                    {index < rating ? (
                      <AiFillStar className="inline-block w-4 h-4 text-yellow-500" />
                    ) : (
                      <AiFillStar className="inline-block w-4 h-4 text-gray-300" />
                    )}
                  </span>
                ))}
              </p>
            </div>
          </div>
          <button
            style={{
              position: "absolute",
              bottom: "20px",
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 10,
            }}
            onClick={handleClick}
            className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition"
          >
            View Product
          </button>
        </div>
      </motion.div>
    </a>
  );
};

export default TiltCard;

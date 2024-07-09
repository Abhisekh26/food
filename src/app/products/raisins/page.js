"use client";
import TiltCard from "@/app/demo/page";
import { filterDataActions } from "@/app/reduxStore/filterSlice";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Raisins() {
  // const [menu, setMenu] = useState([]);
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.filterr.filteredArray);

  useEffect(() => {
    async function fetchIe() {
      const data = await fetch(
        "https://ecommerece-nextjs-92b48-default-rtdb.firebaseio.com/productRaisins.json"
      );

      const raw = await data.json();
      // setMenu(raw);
      dispatch(filterDataActions.displayData(raw));
    }

    fetchIe();
  }, []);

  // console.log(menu);
  return (
    <div className="bg-gray-100 min-h-screen p-4 flex flex-col items-center ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 gap-x-4 gap-y-4">
        {selector.map((item) => (
          <TiltCard
            key={item.id}
            title={item.title}
            imageUrl={item.image}
            oldPrice={item.originalPrice}
            newPrice={item.discountPrice}
            rating={item.ratings}
            isBestSeller={item.bestsellers}
          />
        ))}
      </div>
    </div>
  );
}
export default Raisins;

"use client";
import { useEffect,useState } from "react";
import TiltCard from "@/app/demo/page";
import { useDispatch, useSelector } from "react-redux";
import { filterDataActions } from "@/app/reduxStore/filterSlice";


function Almonds() {
  // const [di, setDi] = useState([]);
  const selector=useSelector((data)=>data.filterr.filteredArray)
 const dispatch=useDispatch() 

  useEffect(() => {
    async function fetchItems() {
      const data = await fetch(
        "https://ecommerece-nextjs-92b48-default-rtdb.firebaseio.com/products.json"
      );

      const raw = await data.json();
      dispatch(filterDataActions.displayData(raw))
      // setDi(raw);
  
    }

    fetchItems();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen p-4 flex flex-col items-center">
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

export default Almonds;

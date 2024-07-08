"use client";
import { useEffect, useState } from "react";
import TiltCard from "@/app/demo/page";
function Almonds() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    async function fetchIe() {
      const data = await fetch(
        "https://ecommerece-nextjs-92b48-default-rtdb.firebaseio.com/products.json"
      );

      const raw = await data.json();
      setMenu(raw);
    }

    fetchIe();
  }, []);

  console.log(menu);
  return (

<div className="bg-gray-100 min-h-screen p-4 flex flex-col items-center">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {menu.map((item) => (
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


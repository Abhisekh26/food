"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

const Demo6 = () => {
  const [order, setOrder] = useState(["front", "middle", "back"]);

  const handleShuffle = () => {
    const orderCopy = [...order];
    orderCopy.unshift(orderCopy.pop());
    setOrder(orderCopy);
  };

  return (
    <section className="overflow-hidden bg-slate-900 px-8 py-24 text-slate-50">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 md:grid-cols-2 md:gap-8">
        <div>
          <h3 className="text-5xl font-black leading-[1.25] md:text-7xl">
            Discover the Best Dry Fruits
          </h3>
          <p className="mb-8 mt-4 text-lg text-slate-400">
            Join our newsletter for the latest updates on our premium dry fruits selection, special offers, and health tips.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center gap-2"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded border-transparent bg-slate-800 px-3 py-2 transition-colors focus:bg-slate-700 focus:outline-none"
            />
            <button className="whitespace-nowrap rounded bg-indigo-600 px-3 py-2 transition-transform hover:scale-[1.02] active:scale-[0.98]">
              Join newsletter
            </button>
          </form>
        </div>
        <div className="relative h-[450px] w-[350px]">
          <Card
            imgUrl="/headshot1.webp"
            testimonial="The best almonds I've ever had! Fresh and crunchy."
            author="Jane D. - Food Enthusiast"
            handleShuffle={handleShuffle}
            position={order[0]}
          />
          <Card
            imgUrl="/headshot2.jpg"
            testimonial="Creamy cashews that are perfect for my recipes."
            author="John S. - Chef"
            handleShuffle={handleShuffle}
            position={order[1]}
          />
          <Card
            imgUrl="/headshot3.jpeg"
            testimonial="Sweet and juicy raisins, ideal for my morning cereal."
            author="Emily R. - Health Blogger"
            handleShuffle={handleShuffle}
            position={order[2]}
          />
        </div>
      </div>
    </section>
  );
};

const Card = ({ handleShuffle, testimonial, position, imgUrl, author }) => {
  const mousePosRef = useRef(0);

  const onDragStart = (e) => {
    mousePosRef.current = e.clientX;
  };

  const onDragEnd = (e) => {
    const diff = mousePosRef.current - e.clientX;

    if (diff > 150) {
      handleShuffle();
    }

    mousePosRef.current = 0;
  };

  const x = position === "front" ? "0%" : position === "middle" ? "33%" : "66%";
  const rotateZ =
    position === "front" ? "-6deg" : position === "middle" ? "0deg" : "6deg";
  const zIndex = position === "front" ? "2" : position === "middle" ? "1" : "0";

  const draggable = position === "front";

  return (
    <motion.div
      style={{
        zIndex,
      }}
      animate={{ rotate: rotateZ, x }}
      drag
      dragElastic={0.35}
      dragListener={draggable}
      dragConstraints={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      transition={{
        duration: 0.35,
      }}
      className={`absolute left-0 top-0 grid h-[450px] w-[350px] select-none place-content-center space-y-6 rounded-2xl border-2 border-slate-700 bg-slate-800/20 p-6 shadow-xl backdrop-blur-md ${
        draggable ? "cursor-grab active:cursor-grabbing" : ""
      }`}
    >
      <img
        src={imgUrl}
        // alt={`Image of ${author}`}
        className="pointer-events-none mx-auto h-32 w-32 rounded-full border-2 border-slate-700 bg-slate-200 object-cover"
      />
      <span className="text-center text-lg italic text-slate-400">
        "{testimonial}"
      </span>
      <span className="text-center text-sm font-medium text-indigo-400">
        {author}
      </span>
    </motion.div>
  );
};

export default Demo6;
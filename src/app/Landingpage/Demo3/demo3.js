"use client"
import { motion } from "framer-motion";
import { useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import useMeasure from "react-use-measure";

const CARD_WIDTH = 350;
const MARGIN = 20;
const CARD_SIZE = CARD_WIDTH + MARGIN;

const BREAKPOINTS = {
  sm: 640,
  lg: 1024,
};

const Demo3 = () => {
  const [ref, { width }] = useMeasure();
  const [offset, setOffset] = useState(0);

  const CARD_BUFFER =
    width > BREAKPOINTS.lg ? 3 : width > BREAKPOINTS.sm ? 2 : 1;

  const CAN_SHIFT_LEFT = offset < 0;

  const CAN_SHIFT_RIGHT =
    Math.abs(offset) < CARD_SIZE * (dryFruits.length - CARD_BUFFER);

  const shiftLeft = () => {
    if (!CAN_SHIFT_LEFT) {
      return;
    }
    setOffset((pv) => (pv += CARD_SIZE));
  };

  const shiftRight = () => {
    if (!CAN_SHIFT_RIGHT) {
      return;
    }
    setOffset((pv) => (pv -= CARD_SIZE));
  };

  return (
    <section className="bg-neutral-200 py-8" ref={ref}>
      <div className="relative overflow-hidden p-4">
        <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-6xl text-center">
            {/* <h2 className="mb-4 text-4xl text-green-800">Our Premium Dry Fruits</h2> */}
            <h2 className="mb-4 text-4xl text-gray-800">Our Premium Dry Fruits</h2>
            <div className="flex items-center gap-2">
              <button
                className={`rounded-lg border-[1px] border-green-400 bg-white p-1.5 text-2xl transition-opacity ${
                  CAN_SHIFT_LEFT ? "" : "opacity-30"
                }`}
                disabled={!CAN_SHIFT_LEFT}
                onClick={shiftLeft}
              >
                <FiArrowLeft color="black" />
              </button>
              <button
                className={`rounded-lg border-[1px] border-green-400 bg-white p-1.5 text-2xl transition-opacity ${
                  CAN_SHIFT_RIGHT ? "" : "opacity-30"
                }`}
                disabled={!CAN_SHIFT_RIGHT}
                onClick={shiftRight}
              >
                <FiArrowRight color="black" />
              </button>
            </div>
          </div>
          <motion.div
            animate={{
              x: offset,
            }}
            transition={{
              ease: "easeInOut",
            }}
            className="flex"
          >
            {dryFruits.map((fruit) => {
              return <DryFruitCard key={fruit.id} {...fruit} />;
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const DryFruitCard = ({ imgUrl, name, description, price }) => {
  return (
    <div
      className="relative shrink-0 cursor-pointer transition-transform hover:-translate-y-1"
      style={{
        width: CARD_WIDTH,
        marginRight: MARGIN,
      }}
    >
      <img
        src={imgUrl}
        className="mb-3 h-[200px] w-full rounded-lg object-cover"
        alt={name}
      />
     <p className="mt-1.5 text-lg font-medium text-gray-800">{name}</p>
      <p className="text-sm text-gray-600">{description}</p>
      <p className="text-lg text-green-600 font-bold mt-1">${price}</p>
    </div>
  );
};

export default Demo3;

const dryFruits = [
  {
    id: 1,
    imgUrl: "/almonds.jpg",
    name: "Premium Almonds",
    description: "Crunchy and nutritious almonds.",
    price: "12.99",
  },
  {
    id: 2,
    imgUrl: "/cashew.png",
    name: "Organic Cashews",
    description: "Creamy and delicious cashews.",
    price: "15.49",
  },
  {
    id: 3,
    imgUrl: "/mixednuts.png",
    name: "California Walnuts",
    description: "Fresh and healthy walnuts.",
    price: "10.99",
  },
  {
    id: 4,
    imgUrl: "/pistachios.png",
    name: "Roasted Pistachios",
    description: "Salted and roasted pistachios.",
    price: "14.99",
  },
  {
    id: 5,
    imgUrl: "/Dates.png",
    name: "Organic Dates",
    description: "Sweet and chewy dates.",
    price: "9.99",
  },
  {
    id: 6,
    imgUrl: "/raisins.png",
    name: "Golden Raisins",
    description: "Juicy and sweet raisins.",
    price: "8.49",
  },
  {
    id: 7,
    imgUrl: "/apricots.png",
    name: "Dried Apricots",
    description: "Tangy and flavorful apricots.",
    price: "11.99",
  },
];




import React, { useEffect } from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion";
import { useMeasure } from "react-use";
import { FaTimes } from "react-icons/fa";

const SearchModal = ({ searchQuery, onClose }) => {
  const [ref, { height }] = useMeasure();
  const y = useMotionValue(0);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1 });
  }, [controls]);

  const handleClose = async () => {
    await controls.start({ opacity: 0 });
    onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={controls}
      className="fixed inset-0 z-50 bg-neutral-950/70 flex justify-center items-center"
    >
      <motion.div
        ref={ref}
        initial={{ y: height }}
        animate={{ y: 0 }}
        exit={{ y: height }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        drag="y"
        dragConstraints={{ top: 0, bottom: 0 }}
        style={{ y }}
        className="fixed right-0 h-full w-2/5 bg-neutral-900 shadow-lg"
      >
        <div className="absolute top-4 right-4 z-10">
          <button
            onClick={handleClose}
            className="h-8 w-8 cursor-pointer rounded-full bg-neutral-700 text-white flex items-center justify-center"
          >
            <FaTimes />
          </button>
        </div>
        <div className="relative h-full overflow-y-scroll p-4 pt-12 text-neutral-400">
          <h2 className="text-4xl font-bold text-neutral-200 mb-4">
            Search Results for: {searchQuery}
          </h2>
          {/* Replace this with actual search results */}
          <p>No results found.</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export { SearchModal };
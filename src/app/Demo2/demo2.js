// "use client";

// import { useEffect, useState } from "react";
// import { motion, useAnimation } from "framer-motion";
// import { FiSearch, FiShoppingCart, FiUser, FiLogIn, FiLogOut, FiUserPlus } from "react-icons/fi";

// export default function Demo2() {
//   const controls = useAnimation();
//   const [isSearchFocused, setIsSearchFocused] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   useEffect(() => {
//     controls.start({
//       opacity: 1,
//       y: 0,
//       transition: { duration: 1, ease: "easeOut" },
//     });
//   }, [controls]);

//   const handleSearchFocus = () => {
//     setIsSearchFocused(true);
//   };

//   const handleSearchBlur = () => {
//     setIsSearchFocused(false);
//   };

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   return (
//     <div className="min-h-screen bg-white text-gray-900">
//       {/* Fixed Navbar */}
//       <header className="fixed top-0 left-0 right-0 z-50 py-6 bg-gray-300 text-gray-950 shadow-md bg-opacity-75 backdrop-blur-md">
//         <div className="container mx-auto flex justify-between items-center">
//           {/* Logo Section */}
//           <div className="flex items-center">
//             <img
//               src="/nutrinuts.png"
//               alt="Logo"
//               className="max-w-200 max-h-200 w-16 h-16"
//             />
//             <h1 className="text-4xl font-bold pl-3">NutriNuts</h1>
//           </div>

//           {/* Navigation Links */}
//           <nav className="flex space-x-4 pl-96">
//             <NavItem href="#home" className="text-gray-950">
//               Home
//             </NavItem>
//             <NavItem href="#about">About</NavItem>
//             <NavItem href="#products">Products</NavItem>
//             <NavItem href="#contact">Contact</NavItem>
//           </nav>

//           {/* Search Bar */}
//           <div className="relative transition-colors bg-gray-700 rounded-lg focus-within:ring-2 focus-within:text-green-700">
//             <input
//               type="text"
//               placeholder="Search..."
//               className="pl-4 pr-10 py-2 rounded-lg focus:outline-none bg-transparent text-gray-950"
//               onFocus={handleSearchFocus}
//               onBlur={handleSearchBlur}
//             />
//             <motion.span
//               className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//             >
//               <FiSearch />
//             </motion.span>
//             {isSearchFocused && (
//               <motion.div
//                 className="absolute inset-0 bg-gray-800 opacity-50 rounded-lg"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 0.5 }}
//                 transition={{ duration: 0.2 }}
//               />
//             )}
//           </div>

//           {/* Cart and Profile Icons */}
//           <div className="flex items-center space-x-4 pr-22">
//             <span className="text-gray-950">
//               <FiShoppingCart />
//             </span>
//             <div className="relative mt-1 pl-3">
//               <button className="text-gray-950" onClick={toggleDropdown}>
//                 <FiUser />
//               </button>
//               {isDropdownOpen && (
//                 <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-50">
//                   <DropdownItem href="#signIn" icon={<FiLogIn />}>
//                     Sign In
//                   </DropdownItem>
//                   <DropdownItem href="#register" icon={<FiUserPlus />}>
//                     Register
//                   </DropdownItem>
//                   <DropdownItem href="#signOut" icon={<FiLogOut />}>
//                     Sign Out
//                   </DropdownItem>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Main Section */}
//       <section
//         id="home"
//         className="pt-20 min-h-screen flex items-center justify-center bg-cover bg-center relative overflow-hidden"
//         style={{
//           backgroundImage: "url('/mixednuts.png')",
//         }}
//       >
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={controls}
//           className="bg-white bg-opacity-75 p-8 rounded-lg shadow-lg text-center"
//         >
//           <motion.h2
//             className="text-5xl font-bold"
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
//           >
//             Premium Dry Fruits Delivered Fresh
//           </motion.h2>
//           <p className="mt-4 text-lg text-gray-700">
//             Discover our variety of high-quality dry fruits, perfect for healthy
//             snacking and boosting your meals.
//           </p>
//           <div className="mt-8">
//             <motion.a
//               href="#products"
//               className="relative bg-yellow-500 text-white py-3 px-6 rounded-full hover:bg-yellow-600 transition duration-300 overflow-hidden"
//               whileHover={{ scale: 1.02 }}
//             >
//               <span className="relative z-10">Shop Now</span>
//               <motion.div
//                 className="absolute inset-0 bg-transparent border-2 border-white rounded-full"
//                 style={{ boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.5)" }}
//                 initial={{ scaleX: 0 }}
//                 animate={{ scaleX: 1 }}
//                 transition={{ duration: 0.3 }}
//               ></motion.div>
//             </motion.a>
//           </div>
//         </motion.div>
//       </section>
//     </div>
//   );
// }

// const NavItem = ({ children, href }) => {
//   return (
//     <a
//       href={href}
//       className="text-gray-950 hover:underline hover:text-green-700"
//     >
//       {children}
//     </a>
//   );
// };

// const DropdownItem = ({ children, href, icon }) => {
//   return (
//     <motion.a
//       href={href}
//       className="block px-4 py-2 text-gray-800 hover:bg-gray-200 flex items-center space-x-2"
//       whileHover={{ scale: 1.05 }}
//       whileTap={{ scale: 0.95 }}
//     >
//       {icon}
//       <span>{children}</span>
//     </motion.a>
//   );
// };


"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { FiSearch, FiShoppingCart, FiUser, FiLogIn, FiLogOut, FiUserPlus } from "react-icons/fi";

export default function Demo2() {
  const controls = useAnimation();
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    });
  }, [controls]);

  const handleSearchFocus = () => {
    setIsSearchFocused(true);
  };

  const handleSearchBlur = () => {
    setIsSearchFocused(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Main Section */}
      <section
        id="home"
        className="pt-20 min-h-screen flex items-center justify-center bg-cover bg-center relative overflow-hidden"
        style={{
          backgroundImage: "url('/mixednuts.png')",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          className="bg-white bg-opacity-75 p-8 rounded-lg shadow-lg text-center"
        >
          <motion.h2
            className="text-5xl font-bold"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
          >
            Premium Dry Fruits Delivered Fresh
          </motion.h2>
          <p className="mt-4 text-lg text-gray-700">
            Discover our variety of high-quality dry fruits, perfect for healthy
            snacking and boosting your meals.
          </p>
          <div className="mt-8">
            <motion.a
              href="#products"
              className="relative bg-yellow-500 text-white py-3 px-6 rounded-full hover:bg-yellow-600 transition duration-300 overflow-hidden"
              whileHover={{ scale: 1.02 }}
            >
              <span className="relative z-10">Shop Now</span>
              <motion.div
                className="absolute inset-0 bg-transparent border-2 border-white rounded-full"
                style={{ boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.5)" }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              ></motion.div>
            </motion.a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
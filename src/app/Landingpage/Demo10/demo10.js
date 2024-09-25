



// "use client"

// import React from "react";
// import dynamic from "next/dynamic";
// import { motion } from "framer-motion";
// import { FaSeedling, FaHandsHelping, FaLeaf, FaUserShield } from "react-icons/fa";

// const goals = [
//   {
//     title: "Organic Nuts",
//     description: "Providing high-quality organic nuts to our customers.",
//     icon: FaLeaf,
//   },
//   {
//     title: "Helping Small Farmers",
//     description: "Supporting small farmers by sourcing directly from them.",
//     icon: FaHandsHelping,
//   },
//   {
//     title: "Fresh Nuts",
//     description: "Ensuring the freshness of nuts through careful handling and processing.",
//     icon: FaSeedling,
//   },
//   {
//     title: "Transparency & Satisfaction",
//     description: "Providing detailed knowledge of the source and ensuring customer satisfaction.",
//     icon: FaUserShield,
//   },
// ];

// const ThreeComponent = dynamic(() => import("/src/app/Threejs/threeComponent.jsx"), { ssr: false });

// const Demo10 = () => {
//   return (
//     <section className="relative flex flex-col items-center justify-center min-h-screen py-12 bg-gray-100 text-gray-900">
//       <h2 className="text-4xl font-bold mb-8">Our Goals & Vision</h2>
//       <ThreeComponent />
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 px-8">
//         {goals.map((goal, index) => (
//           <motion.div
//             key={index}
//             className="flex flex-col items-center p-4 bg-white rounded-lg shadow-lg"
//             whileHover={{ scale: 1.05 }}
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: index * 0.2, duration: 0.5 }}
//           >
//             <goal.icon className="text-4xl mb-4 text-indigo-600" />
//             <h3 className="text-xl font-bold mb-2">{goal.title}</h3>
//             <p className="text-center">{goal.description}</p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Demo10;








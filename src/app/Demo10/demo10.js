


// "use client";
// import React, { useRef } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls, useTexture } from "@react-three/drei";
// import { motion } from "framer-motion";
// import { FaSeedling, FaHandsHelping, FaLeaf, FaUserShield } from "react-icons/fa";

// // Define goals with titles, descriptions, and icons
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

// const images = [
//   "/Fresh.png",
//   "/Farmers.png",
//   "/Bowl.png",
//   "/Designer.png",
// ];

// // Component for rotating images
// const RotatingImage = ({ url, position }) => {
//   const texture = useTexture(url);
//   const mesh = useRef();

//   useFrame(() => {
//     if (mesh.current) {
//       mesh.current.rotation.y += 0.01; // Adjust rotation speed here
//     }
//   });

//   return (
//     <mesh ref={mesh} position={position} rotation={[0, 0, Math.PI / 4]}>
//       <boxGeometry args={[2, 2, 2]} />
//       <meshBasicMaterial map={texture} />
//     </mesh>
//   );
// };

// // Main component for goals and vision
// const Demo10 = () => {
//   return (
//     <section className="relative flex flex-col items-center justify-center min-h-screen py-12 bg-gray-100 text-gray-900">
//       <h2 className="text-4xl font-bold mb-8">Our Goals & Vision</h2>
//       <Canvas style={{ height: "500px", width: "100%" }}>
//         <OrbitControls enableZoom={false} />
//         <ambientLight intensity={0.5} />
//         <pointLight position={[10, 10, 10]} />
//         {images.map((url, index) => (
//           <RotatingImage key={index} url={url} position={[index * 3 - 4.5, 0, 0]} />
//         ))}
//       </Canvas>
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




"use client"

import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { FaSeedling, FaHandsHelping, FaLeaf, FaUserShield } from "react-icons/fa";

const goals = [
  {
    title: "Organic Nuts",
    description: "Providing high-quality organic nuts to our customers.",
    icon: FaLeaf,
  },
  {
    title: "Helping Small Farmers",
    description: "Supporting small farmers by sourcing directly from them.",
    icon: FaHandsHelping,
  },
  {
    title: "Fresh Nuts",
    description: "Ensuring the freshness of nuts through careful handling and processing.",
    icon: FaSeedling,
  },
  {
    title: "Transparency & Satisfaction",
    description: "Providing detailed knowledge of the source and ensuring customer satisfaction.",
    icon: FaUserShield,
  },
];

const ThreeComponent = dynamic(() => import("/src/app/Threejs/threeComponent.jsx"), { ssr: false });

const Demo10 = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen py-12 bg-gray-100 text-gray-900">
      <h2 className="text-4xl font-bold mb-8">Our Goals & Vision</h2>
      <ThreeComponent />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 px-8">
        {goals.map((goal, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center p-4 bg-white rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <goal.icon className="text-4xl mb-4 text-indigo-600" />
            <h3 className="text-xl font-bold mb-2">{goal.title}</h3>
            <p className="text-center">{goal.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Demo10;








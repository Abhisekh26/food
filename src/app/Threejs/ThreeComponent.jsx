import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";

const images = [
  "/Fresh.png",
  "/Farmers.png",
  "/Bowl.png",
  "/Designer.png",
];

const RotatingImage = ({ url, position }) => {
  const texture = useTexture(url);
  const mesh = useRef();

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.01; // Adjust rotation speed here
    }
  });

  return (
    <mesh ref={mesh} position={position} rotation={[0, 0, Math.PI / 4]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshBasicMaterial map={texture} />
    </mesh>
  );
};

const ThreeComponent = () => {
  return (
    <Canvas style={{ height: "500px", width: "100%" }}>
      <OrbitControls enableZoom={false} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      {images.map((url, index) => (
        <RotatingImage key={index} url={url} position={[index * 3 - 4.5, 0, 0]} />
      ))}
    </Canvas>
  );
};

export default ThreeComponent;
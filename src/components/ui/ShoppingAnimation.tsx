"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function ShoppingBag() {
  const bagRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (bagRef.current) {
      bagRef.current.rotation.y += 0.008;
      bagRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.5) * 0.3;
    }
  });

  return (
    <group ref={bagRef}>
      <mesh castShadow receiveShadow>
        <boxGeometry args={[1, 1.3, 0.6]} />
        <meshStandardMaterial
          color="#ff6f00"
          metalness={0.5}
          roughness={0.4}
          emissive="#ffb74d"
          emissiveIntensity={0.25}
        />
      </mesh>
      <mesh position={[0, 0.9, 0]}>
        <torusGeometry args={[0.45, 0.05, 16, 100, Math.PI]} />
        <meshStandardMaterial color="#ffa726" metalness={0.7} roughness={0.3} />
      </mesh>
      <mesh position={[0.3, -0.3, 0.31]}>
        <planeGeometry args={[0.3, 0.3]} />
        <meshStandardMaterial color="#fff3e0" />
      </mesh>
    </group>
  );
}

function FloatingProduct({
  position,
  color,
  geometryType,
  scale = 1,
}: {
  position: [number, number, number];
  color: string;
  geometryType: "box" | "sphere" | "cylinder";
  scale?: number;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x += 0.015;
      ref.current.rotation.y += 0.02;
      ref.current.position.y += Math.sin(state.clock.elapsedTime * 2) * 0.005;
    }
  });

  const geometry =
    geometryType === "box" ? (
      <boxGeometry args={[0.5, 0.5, 0.5]} />
    ) : geometryType === "sphere" ? (
      <sphereGeometry args={[0.3, 32, 32]} />
    ) : (
      <cylinderGeometry args={[0.25, 0.25, 0.6, 32]} />
    );

  return (
    <mesh ref={ref} position={position} scale={scale}>
      {geometry}
      <meshStandardMaterial
        color={color}
        metalness={0.8}
        roughness={0.2}
        emissive={color}
        emissiveIntensity={0.3}
      />
    </mesh>
  );
}

export default function ShoppingAnimation() {
  const products = [
    { pos: [2, 1, 0], color: "#29b6f6", type: "box", scale: 0.8 },     // Phone
    { pos: [-1.8, -1.2, 0.5], color: "#ab47bc", type: "sphere", scale: 0.7 }, // Ball
    { pos: [0.8, 1.8, -1], color: "#66bb6a", type: "cylinder", scale: 0.6 }, // Water Bottle
    { pos: [-2, 1.5, -0.8], color: "#ef5350", type: "box", scale: 0.9 },     // Shoes
    { pos: [1.5, -1.5, 1], color: "#ffa726", type: "sphere", scale: 0.7 },   // Pot
    { pos: [-1, 2, 0.5], color: "#29b6f6", type: "cylinder", scale: 0.5 },   // Cup
    { pos: [0, -2, -0.5], color: "#66bb6a", type: "box", scale: 0.6 },       // Dress
    { pos: [2, -0.5, 1.5], color: "#ab47bc", type: "sphere", scale: 0.5 },   // Bag
    { pos: [-1.5, 1, -1.5], color: "#ffa726", type: "cylinder", scale: 0.8 },// Bottle
    { pos: [0.5, 1.5, 1.5], color: "#ef5350", type: "box", scale: 0.6 },     // Sunglasses
  ];

  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 50 }} shadows className="w-full h-full">
      <ambientLight intensity={0.8} />
      <directionalLight position={[4, 5, 5]} intensity={1.4} castShadow />
      <pointLight position={[-5, -3, 5]} intensity={0.8} color="#ff9100" />

      <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.6}>
        <ShoppingBag />
        {products.map((p, idx) => (
          <FloatingProduct
            key={idx}
            position={p.pos as [number, number, number]}
            color={p.color}
            geometryType={p.type as "box" | "sphere" | "cylinder"}
            scale={p.scale}
          />
        ))}
      </Float>

      <Environment preset="studio" />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2.2} />
    </Canvas>
  );
}

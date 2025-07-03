
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Group, Mesh } from "three";

interface PlanetProps {
  name: string;
  size: number;
  color: string;
  distance: number;
  speed: number;
  globalSpeed: number;
  isPaused: boolean;
}

export const Planet = ({ 
  name, 
  size, 
  color, 
  distance, 
  speed, 
  globalSpeed, 
  isPaused 
}: PlanetProps) => {
  const groupRef = useRef<Group>(null);
  const meshRef = useRef<Mesh>(null);

  useFrame(() => {
    if (!isPaused && groupRef.current && meshRef.current) {
      // Orbit around the sun
      groupRef.current.rotation.y += speed * globalSpeed * 0.01;
      // Planet rotation
      meshRef.current.rotation.y += 0.02;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh ref={meshRef} position={[distance, 0, 0]}>
        <sphereGeometry args={[size, 16, 16]} />
        <meshLambertMaterial color={color} />
      </mesh>
      {/* Orbit line */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[distance - 0.1, distance + 0.1, 64]} />
        <meshBasicMaterial color="#333333" transparent opacity={0.3} />
      </mesh>
    </group>
  );
};


import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";

export const Sun = () => {
  const meshRef = useRef<Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <sphereGeometry args={[3, 32, 32]} />
      <meshBasicMaterial color="#FDB813" />
    </mesh>
  );
};

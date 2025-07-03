
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { Sun } from "./Sun";
import { Planet } from "./Planet";
import { planetData } from "@/data/planetData";

interface SolarSystemProps {
  globalSpeed: number;
  isPaused: boolean;
}

export const SolarSystem = ({ globalSpeed, isPaused }: SolarSystemProps) => {
  return (
    <Canvas
      camera={{ position: [0, 50, 100], fov: 75 }}
      style={{ width: "100%", height: "100%" }}
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[0, 0, 0]} intensity={2} />
      
      <Stars radius={300} depth={50} count={1000} factor={4} saturation={0} fade speed={1} />
      
      <Sun />
      
      {planetData.map((planet, index) => (
        <Planet
          key={planet.name}
          {...planet}
          globalSpeed={globalSpeed}
          isPaused={isPaused}
        />
      ))}
      
      <OrbitControls
        enablePan={false}
        minDistance={30}
        maxDistance={200}
        enableDamping
        dampingFactor={0.05}
      />
    </Canvas>
  );
};

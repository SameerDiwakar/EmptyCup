
import { SolarSystem } from "@/components/SolarSystem";
import { ControlPanel } from "@/components/ControlPanel";
import { useState } from "react";

const Index = () => {
  const [globalSpeed, setGlobalSpeed] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <div className="absolute top-4 left-4 z-10">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">Solar System Simulation</h1>
        <ControlPanel 
          globalSpeed={globalSpeed}
          setGlobalSpeed={setGlobalSpeed}
          isPaused={isPaused}
          setIsPaused={setIsPaused}
        />
      </div>
      
      <div className="w-full h-screen">
        <SolarSystem globalSpeed={globalSpeed} isPaused={isPaused} />
      </div>
      
      <div className="absolute bottom-4 right-4 z-10 text-sm opacity-75">
        <p>Click and drag to rotate • Scroll to zoom</p>
      </div>
    </div>
  );
};

export default Index;


import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Play, Pause } from "lucide-react";

interface ControlPanelProps {
  globalSpeed: number;
  setGlobalSpeed: (speed: number) => void;
  isPaused: boolean;
  setIsPaused: (paused: boolean) => void;
}

export const ControlPanel = ({
  globalSpeed,
  setGlobalSpeed,
  isPaused,
  setIsPaused,
}: ControlPanelProps) => {
  return (
    <div className="bg-black/70 backdrop-blur-sm rounded-lg p-4 space-y-4 w-64">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Controls</h2>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsPaused(!isPaused)}
          className="bg-white/10 border-white/20 hover:bg-white/20"
        >
          {isPaused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
        </Button>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="speed-slider">Global Speed: {globalSpeed.toFixed(1)}x</Label>
        <Slider
          id="speed-slider"
          min={0.1}
          max={5}
          step={0.1}
          value={[globalSpeed]}
          onValueChange={(value) => setGlobalSpeed(value[0])}
          className="w-full"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="speed-input">Speed Input</Label>
        <Input
          id="speed-input"
          type="number"
          min="0.1"
          max="5"
          step="0.1"
          value={globalSpeed}
          onChange={(e) => setGlobalSpeed(Number(e.target.value))}
          className="bg-white/10 border-white/20 text-white"
        />
      </div>
      
      <div className="text-xs opacity-75">
        <p>Use the slider or input to adjust orbital speed</p>
        <p>Click play/pause to control animation</p>
      </div>
    </div>
  );
};


export interface PlanetData {
  name: string;
  size: number;
  color: string;
  distance: number;
  speed: number;
}

export const planetData: PlanetData[] = [
  {
    name: "Mercury",
    size: 0.8,
    color: "#8C7853",
    distance: 8,
    speed: 4.7,
  },
  {
    name: "Venus",
    size: 1.2,
    color: "#FFC649",
    distance: 12,
    speed: 3.5,
  },
  {
    name: "Earth",
    size: 1.3,
    color: "#6B93D6",
    distance: 16,
    speed: 3.0,
  },
  {
    name: "Mars",
    size: 1.0,
    color: "#C1440E",
    distance: 20,
    speed: 2.4,
  },
  {
    name: "Jupiter",
    size: 3.0,
    color: "#D8CA9D",
    distance: 28,
    speed: 1.3,
  },
  {
    name: "Saturn",
    size: 2.5,
    color: "#FAD5A5",
    distance: 36,
    speed: 0.9,
  },
  {
    name: "Uranus",
    size: 2.0,
    color: "#4FD0E4",
    distance: 44,
    speed: 0.7,
  },
  {
    name: "Neptune",
    size: 1.9,
    color: "#4B70DD",
    distance: 52,
    speed: 0.5,
  },
];

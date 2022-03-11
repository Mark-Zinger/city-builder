interface GameEntity {
  id: string;
  size: [number, number];
  type: 'road' | 'building';
}

export default GameEntity
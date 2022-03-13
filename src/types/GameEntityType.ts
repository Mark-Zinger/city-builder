export interface GameEntity {
  id: string,
  e_key: number, // entity key
  size: [number, number],
  position: [number, number],
  rotation: number
}


export default GameEntity
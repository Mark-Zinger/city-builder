import GameEntity from "../../types/GameEntity";
import default_water_grid from "../../data/default_water_grid";

export interface GameGridState {
  size: [number, number];
  grid: number[][];
  entities: Record<string, GameEntity>;
}

const initialState: GameGridState = {
  size: [40, 40],
  grid: default_water_grid,
  entities: {}
}

export default initialState;
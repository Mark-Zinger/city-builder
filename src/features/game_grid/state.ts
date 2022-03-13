import default_water_grid from "../../data/default_grid";

export interface GameGridState {
  size: [number, number];
  grid: number[][];

}

const initialState: GameGridState = {
  size: [40, 40],
  grid: default_water_grid,
}

export default initialState;
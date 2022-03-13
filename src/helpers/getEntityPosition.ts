import {normalizeGridPosition} from "./normalizeGridPosition";

type Cord = [number, number]

function getEntityPosition (position: Cord, size: Cord, grid_size: Cord) {
  const [position_x, position_y] = position;
  const [size_x, size_y] = size;
  
  const offset_x = size_x / 4;
  const offset_y = size_y / 4;
  
  const normalizeEntityPosition = normalizeGridPosition(position, grid_size);
  
  normalizeEntityPosition.x += offset_x;
  normalizeEntityPosition.z += offset_y;
  
  return normalizeEntityPosition;
  
}


export default getEntityPosition
import * as THREE from "three";


export function normalizeGridPosition (position: [number, number], size: [number, number]) {
  const [x, y] = position;
  const [size_x, size_y] = size;
  
  return new THREE.Vector3(
    x - size_x/2 + 0.5,
    0,
    y - size_y/2 + 0.5,
  )
}

export function floorVector ({x,y,z}: THREE.Vector3) {
  return new THREE.Vector3(Math.floor(x)+0.5,y,Math.floor(z)+0.5);
}


export function getGridPositionFromVec (vec3: THREE.Vector3, size: [number, number]) {
  const {x, z} = vec3;
  const [size_x, size_y] = size;
  
  return {
    x: x -0.5 + size_x / 2,
    y: z -0.5 + size_y / 2
  }
}

export function keygen (x:number, y: number) {
  return x.toString()+':'+y.toString()
}

type neighbour = null | number;
export type neighbours = [neighbour,neighbour,neighbour,neighbour];

export function getNeighbours (position: [number, number], grid: number[][]):any {
  const [x, y] = position;
  
  function checkNeighbourExist ( x:number, y:number ) {
    if(grid[x] && grid[x][y] !== undefined){
      return grid[x][y]
    } else {
      return null
    }
  }
 
  const top    = checkNeighbourExist(x,y-1);
  const right  = checkNeighbourExist(x+1,y);
  const bottom = checkNeighbourExist(x,y+1);
  const left   = checkNeighbourExist(x-1,y);
  
  return [ top, right, bottom, left ];
}


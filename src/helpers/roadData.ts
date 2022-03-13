import {neighbours} from './normalizeGridPosition'

export type RoadType = 'I' | 'L' | 'T' | 'X';

export interface RoadData {
  type: RoadType;
  rotate: number;
}

function getRoadData (neighbours: neighbours):RoadData {
  const n_i: number[] = []; // neighbours includes
  neighbours.forEach( (n,i) => {
    if(n === 2) n_i.push(i);
  });
  const n_c = n_i.length; // neighbours count
  
  switch (n_c) {
    case 1: return get_nc1(n_i);
    case 2: return get_nc2(n_i);
    case 3: return get_nc3(n_i);
    case 4: return { type: 'X', rotate: 0 };
    default: return { type: 'I', rotate: 0 };
  }
  
}

function get_nc1 (n_i:number[]):RoadData {
  switch (n_i[0]) {
    case 0: case 2: return { type: 'I', rotate: 0 };
    case 1: case 3: return { type: 'I', rotate: Math.PI/2 };
    
    default: return { type: 'I', rotate: 0 };
  }
}

function get_nc2(n_i:number[]):RoadData {
  switch (true) {
    case n_i[0] === 0 && n_i[1] === 2: return { type: 'I', rotate: 0 };
    case n_i[0] === 1 && n_i[1] === 3: return { type: 'I', rotate: Math.PI/2 };
    
    case n_i[0] === 0 && n_i[1] === 1: return { type: 'L', rotate: 0 };
    case n_i[0] === 1 && n_i[1] === 2: return { type: 'L', rotate: -Math.PI/2 };
    case n_i[0] === 2 && n_i[1] === 3: return { type: 'L', rotate: Math.PI };
    case n_i[0] === 0 && n_i[1] === 3: return { type: 'L', rotate: Math.PI/2 };
    
    default: return { type: 'I', rotate: 0 };
  }
}

function get_nc3 ( n_i:number[]):RoadData {
  switch (false) {
    case n_i.includes(0): return { type: 'T', rotate: Math.PI/2 };
    case n_i.includes(1): return { type: 'T', rotate: 0 };
    case n_i.includes(2): return { type: 'T', rotate: -Math.PI/2 };
    case n_i.includes(3): return { type: 'T', rotate: Math.PI };
    
    default: return { type: 'T', rotate: 0 };
  }
}

export default getRoadData;
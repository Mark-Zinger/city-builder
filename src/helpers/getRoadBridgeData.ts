import {neighbours} from "./normalizeGridPosition";

export type RoadBridgeType = 'G' | 'W'; // GROUND | WATER

export interface RoadBridgeData {
  type: RoadBridgeType;
  rotate: number;
}

function getRoadBridgeData ( neighbours: neighbours): RoadBridgeData {
  
  switch (true) {
    case neighbours[1] === 2 || neighbours[1] === 0: return { type: "G", rotate: Math.PI };
    case neighbours[3] === 2 || neighbours[3] === 0: return { type: "G", rotate: 0 };
    default: return { type: "W", rotate: 0 };
  }
  
}



export default getRoadBridgeData
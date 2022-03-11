import TileRoad from "./road";
import {neighbours} from "../../helpers/normalizeGridPosition";


interface TileProps {
  position: [number,number],
  tile_id:number,
  neighbours: neighbours
}

function Tile ({tile_id, ...ownProps}:TileProps) {
  switch (tile_id) {
    case 2: return <TileRoad {...ownProps} />;
    
    default: return null;
  }
}

export default Tile
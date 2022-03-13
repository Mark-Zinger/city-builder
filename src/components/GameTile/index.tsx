import TileRoad from "../../tiles/road";
import WaterTower from "../../tiles/WaterTower";
import TileProps from "../../types/TileProps";
import TileHouse from "../../tiles/TileHouse";
import RoadBridge from "../../tiles/RoadBridge";

type TilePropsHoc = TileProps & {tile_id: number}


function Tile ({tile_id, ...ownProps}:TilePropsHoc) {
  switch (tile_id) {
    case 2:  return <TileRoad {...ownProps} />;
    case 3:  return <RoadBridge {...ownProps}/>;
    case 10: return <WaterTower {...ownProps}/>;
    case 14: return <TileHouse {...ownProps}/>;
    default: return null;
  }
}

export default Tile
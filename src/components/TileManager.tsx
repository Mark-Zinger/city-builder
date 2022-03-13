import {useAppSelector} from "../app/hooks";
import {selectGameGrid} from "../features/game_grid";
import {getNeighbours, keygen} from "../helpers/normalizeGridPosition";
import GameTile from "./GameTile";


function TileManager () {
  
  const {grid} = useAppSelector(selectGameGrid)
  
  return (
    <>{ grid.map(
        (row, x) => ( row.map(
          (tile_id, y) => {
            const neighbours = getNeighbours([x,y], grid);
            
            return <GameTile key={keygen(x, y)} position={[x, y]} tile_id={tile_id} neighbours={neighbours}/>
          }
        )
      )
    )}
    </>
  )
  
}



export default TileManager;
import {Plane, Box, Line} from "@react-three/drei";
import {neighbours, normalizeGridPosition} from "../../helpers/normalizeGridPosition";
import {useAppSelector} from "../../app/hooks";
import {selectGameGrid} from "../../features/game_grid";


interface TileProps {
  position: [number, number]
  neighbours: neighbours
}


function TileRoad (props: TileProps) {
  const {position, neighbours} = props
  const {size} = useAppSelector(selectGameGrid)
  
  const nPosition = normalizeGridPosition(position, size);
  
  return (
    <group position={nPosition}>
      <Plane
        args={[1,1]}
        rotation-x={-Math.PI/2}
        material-color={"gray"}
      />
      <Box
        args={[0.2,0.07,1]}
        position={[-0.5,0,0]}
      />
      <Box
        args={[0.2,0.07,1]}
        position={[0.5,0,0]}
      />
      <Line points={[[0,0,-0.5],[0,0,0.5]]} dashed={true} gapSize={0.1} dashSize={0.1} dashOffset={0.05} color={"white"}/>
    </group>
  )
}

function getRoadData (neighbours: neighbours) {
  const neighbours_count = neighbours.reduce((count, n) => n === 2 ? count && count+1 : count, 0);
  
  // switch (neighbours_count) {
  //   case 1:
  // }
  
}





export default TileRoad;
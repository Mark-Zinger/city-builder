import {Plane} from "@react-three/drei";
import {neighbours, normalizeGridPosition} from "../../../helpers/normalizeGridPosition";
import {useAppSelector} from "../../../app/hooks";
import {selectGameGrid} from "../../../features/game_grid";
import getRoadData from "../../../helpers/roadData";
import {memo} from "react";
import RoadBorder from "./RoadBorder";
import RoadMarkups from "./RoadMarkups";

interface TileProps {
  position: [number, number]
  neighbours: neighbours
}


const TileRoad = memo((props: TileProps) => {
  const {position, neighbours} = props
  const {size} = useAppSelector(selectGameGrid)
  
  const nPosition = normalizeGridPosition(position, size);
  const { type, rotate } = getRoadData(neighbours)
  
  return (
    <group position={nPosition} rotation-y={rotate}>
      <Plane
        args={[1,1]}
        rotation-x={-Math.PI/2}
        material-color={"gray"}
      />
      
      <RoadBorder type={type}/>
      <RoadMarkups type={type}/>
    </group>
  )
})






export default TileRoad;
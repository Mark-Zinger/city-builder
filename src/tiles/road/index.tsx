import {Plane} from "@react-three/drei";
import getRoadData from "../../helpers/getRoadData";
import {memo} from "react";
import RoadBorder from "./RoadBorder";
import RoadMarkups from "./RoadMarkups";
import TileWrapper from "../../hoc/TileWrapper";
import TileProps from "../../types/TileProps";




const TileRoad = memo((props: TileProps) => {
  const {position, neighbours} = props

  const { type, rotate } = getRoadData(neighbours)
  
  return (
    <TileWrapper position={position}>
      <group rotation-y={rotate}>
        <Plane
          args={[1,1]}
          rotation-x={-Math.PI/2}
          material-color={"gray"}
        />
    
        <RoadBorder type={type}/>
        <RoadMarkups type={type}/>
      </group>
    </TileWrapper>
  )
})






export default TileRoad;
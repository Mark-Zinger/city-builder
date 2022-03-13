import { FC } from "react"
import {useAppSelector} from "../app/hooks";
import {selectGameGrid} from "../features/game_grid";
import {normalizeGridPosition} from "../helpers/normalizeGridPosition";


interface TileWrapperProps  {
  position: [number, number]
}



const TileWrapper:FC<TileWrapperProps> = (props) => {
  const {position,children} = props
  const {size} = useAppSelector(selectGameGrid)
  const nPosition = normalizeGridPosition(position, size);
  
  return (
    <group position={nPosition}>
      {children}
    </group>
  )
}


export default TileWrapper
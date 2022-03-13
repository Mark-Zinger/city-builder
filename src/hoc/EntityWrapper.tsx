import {FC} from "react";
import {useAppSelector} from "../app/hooks";
import {selectGameGrid} from "../features/game_grid";
import getEntityPosition from "../helpers/getEntityPosition";
import GameEntityType from "../types/GameEntityType";




const EntityWrapper:FC<GameEntityType> = (props) => {
  
  const {children} = props;
  
  const grid_size = useAppSelector(selectGameGrid).size;
  
  const {size, position} = props;
  
  const entityPosition = getEntityPosition(position, size, grid_size)
  
  return (
    <group position={entityPosition}>
      {children}
    </group>
  )
}


export default EntityWrapper